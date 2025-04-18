import {auth} from "@/lib/auth";
import {NextRequest} from "next/server";
import {fetchUrl} from "@/app/api/utils";

export const GET = async (request: NextRequest) => {
    const session = await auth();

    if (!session?.token) {
        return Response.redirect(new URL("/", request.url));
    }

    return await fetchUrl(
        `${process.env.SPRING_API_URL}/profile`,
        "GET",
        true,
        undefined,
        session.token
    );
};

export const PATCH = async (request: NextRequest) => {
    const session = await auth();

    if (!session?.token) {
        return Response.redirect(new URL("/", request.url));
    }

    return await fetchUrl(
        `${process.env.SPRING_API_URL}/profile`,
        "PATCH",
        false,
        await request.json(),
        session.token
    );
};