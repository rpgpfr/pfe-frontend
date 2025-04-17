import {NextRequest} from "next/server";
import {auth} from "@/lib/auth";

export const GET = async (request: NextRequest) => {
    const session = await auth();

    if (!session?.token) {
        return Response.redirect(new URL("/", request.url));
    }

    try {
        const options: RequestInit = buildRequestOptions(session!.token);

        const response = await fetch(`${process.env.SPRING_API_URL}/campaigns`, options);

        if (!response.ok) {
            const errorMessage = (await response.json()).error;

            return Response.json({error: errorMessage}, {status: 500});
        }

        const data = (await response.json()).data;

        return Response.json(data);
    } catch (error) {
        return Response.json({error: (error as Error).message}, {status: 500});
    }
};

const buildRequestOptions = (token: string, body?: BodyInit) => {
    return {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "backend-api-key": process.env.SPRING_API_KEY!,
            "Authorization": `Bearer ${token}`
        },
        body: body && JSON.stringify(body)
    };
};