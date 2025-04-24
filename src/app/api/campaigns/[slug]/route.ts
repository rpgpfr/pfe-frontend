import {NextRequest} from "next/server";
import {auth} from "@/lib/auth";
import {fetchUrl} from "@/app/api/utils";

export const GET = async (request: NextRequest, {params}: { params: Promise<{ slug: string }> }): Promise<Response> => {
    const session = await auth();

    if (!session?.token) {
        return Response.redirect(new URL("/", request.url));
    }

    const {slug} = await params;

    return await fetchUrl(
        `${process.env.SPRING_API_URL}/campaigns/${slug}`,
        "GET",
        true,
        undefined,
        session.token
    );
};

export const DELETE = async (request: NextRequest, {params}: {
    params: Promise<{ slug: string }>
}): Promise<Response> => {
    const session = await auth();

    if (!session?.token) {
        return Response.redirect(new URL("/", request.url));
    }

    const {slug} = await params;

    return await fetchUrl(
        `${process.env.SPRING_API_URL}/campaigns/${slug}`,
        "DELETE",
        false,
        undefined,
        session.token
    );
};