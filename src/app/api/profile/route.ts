import {auth} from "@/lib/auth";
import {Session} from "next-auth";
import {NextRequest} from "next/server";

export const GET = auth(async (request: NextRequest & { auth: Session | null }) => {

    if (!request.auth) {
        return Response.json({error: "Veuillez vous connecter pour accéder à votre profile"}, {status: 401});
    }

    try {
        const options: RequestInit = getRequestOptions(request.auth.token);

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
});

const getRequestOptions = (token: string) => {
    return {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "backend-api-key": process.env.SPRING_API_KEY!,
            "Authorization": `Bearer ${token}`
        }
    };
};