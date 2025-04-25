import {NextRequest, NextResponse} from "next/server";

export const POST = async (request: NextRequest) => {

    const options: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "backend-api-key": process.env.SPRING_API_KEY!
        },
        body: JSON.stringify(await request.json())
    };

    try {
        const authorizationResponse = await fetch(`${process.env.SPRING_API_URL}/auth/register`, options);

        if (!authorizationResponse.ok) {
            const data = await authorizationResponse.json();
            console.error(data);

            return NextResponse.json(data, {status: authorizationResponse.status});
        }

        return NextResponse.json(null, {status: 200});
    } catch (error) {
        console.error(error);

        return NextResponse.json(null, {status: 500});
    }
}