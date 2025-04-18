import {NextRequest} from "next/server";
import {fetchUrl} from "@/app/api/utils";

export const POST = async (request: NextRequest) => {
    return await fetchUrl(
        `${process.env.SPRING_API_URL}/auth/register`,
        "POST",
        false,
        await request.json()
    );
}