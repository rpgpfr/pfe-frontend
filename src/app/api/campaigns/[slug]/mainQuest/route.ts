import {NextRequest} from "next/server";
import {auth} from "@/lib/auth";
import {fetchUrl} from "@/app/api/utils";

export const PATCH = async (request: NextRequest, {params}: { params: Promise<{ slug: string }> }) => {
    const session = await auth();

    if (!session?.token) {
        return Response.redirect(new URL("/", request.url));
    }

    const {slug} = await params;

    return await fetchUrl(
        `${process.env.SPRING_API_URL}/campaigns/${slug}/mainQuest`,
        "PATCH",
        false,
        await request.json(),
        session.token
    );
}