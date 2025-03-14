import {auth} from "@/lib/auth";
import {NextRequest, NextResponse} from "next/server";

export const GET = auth(async function GET(request: NextRequest & { auth: unknown }) {
    if (!request.auth) {
        return NextResponse.json({message: "Not authenticated"}, {status: 401});
    }

    try {
        const session = await auth();

        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${session?.token}`,
                "Content-Type": "application/json",
                "backend-api-key": `${process.env.SPRING_API_KEY}`
            }
        };

        const response = await fetch(`${process.env.SPRING_API_URL}/test`, options);
        const data = await response.json();

        console.log(data);

        return NextResponse.json({}, {status: 200});
    } catch (error) {
        console.error(error);

        return NextResponse.json({}, {status: 500})
    }
});