import {NextRequest} from "next/server";
import {auth} from "@/lib/auth";
import {fetchUrl} from "@/app/api/utils";

export const GET = async (request: NextRequest): Promise<Response> => {
    const session = await auth();

    if (!session?.token) {
        return Response.redirect(new URL("/", request.url));
    }

    return await fetchUrl(
        `${process.env.SPRING_API_URL}/campaigns`,
        "GET",
        true,
        undefined,
        session.token
    );
};

export const POST = async (request: NextRequest): Promise<Response> => {
    const session = await auth();

    if (!session?.token) {
        return Response.redirect(new URL("/", request.url));
    }

    return await fetchUrl(
        `${process.env.SPRING_API_URL}/campaigns`,
        "POST",
        false,
        await request.json(),
        session.token
    );
};