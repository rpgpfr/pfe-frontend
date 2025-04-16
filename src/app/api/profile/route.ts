import {auth} from "@/lib/auth";
import {Session} from "next-auth";
import {NextRequest} from "next/server";

export const GET = async (request: NextRequest) => {
    const session = await auth();

    if (!session?.token) {
        return Response.redirect(new URL("/", request.url));
    }

    try {
        const options: RequestInit = buildRequestOptions("GET", session!.token);

        const response = await fetch(`${process.env.SPRING_API_URL}/profile`, options);

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

export const PATCH = async (request: NextRequest & { auth: Session | null }) => {
    const session = await auth();

    if (session?.token) {
        return Response.redirect(new URL("/", request.url));
    }

    try {
        const options: RequestInit = buildRequestOptions("PATCH", session!.token);

        const response = await fetch(`${process.env.SPRING_API_URL}/profile`, options);

        if (!response.ok) {
            const errorMessage = (await response.json()).error;

            return Response.json({error: errorMessage}, {status: 500});
        }

        return Response.json({}, {status: 200});
    } catch (error) {
        return Response.json({error: (error as Error).message}, {status: 500});
    }
};

const buildRequestOptions = (method: string, token: string, body?: BodyInit) => {
    return {
        method: method.toUpperCase(),
        headers: {
            "Content-Type": "application/json",
            "backend-api-key": process.env.SPRING_API_KEY!,
            "Authorization": `Bearer ${token}`
        },
        body: body && JSON.stringify(body)
    };
};