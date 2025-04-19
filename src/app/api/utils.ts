import {NextResponse} from "next/server";

export const fetchUrl = async (url: string, method: string, isDataReturned: boolean, body?: BodyInit, token?: string) => {
    try {
        const options: RequestInit = buildRequestOptions(method, token, body);

        const response = await fetch(url, options);

        if (!response.ok) {
            const data = await response.json();

            return NextResponse.json(data.error, {status: response.status});
        }

        if (isDataReturned) {
            const data = (await response.json()).data;

            return Response.json(data, {status: 200});
        }

        return Response.json(null, {status: 200});
    } catch (error) {
        console.error("Error fetching URL:", error);

        return Response.json({error: (error as Error).message}, {status: 500});
    }
};

const buildRequestOptions = (method: string, token?: string, body?: BodyInit): RequestInit => {
    return {
        method: method.toUpperCase(),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "backend-api-key": process.env.SPRING_API_KEY!,
            "Authorization": `Bearer ${token}`
        },
        body: body && JSON.stringify(body)
    };
};