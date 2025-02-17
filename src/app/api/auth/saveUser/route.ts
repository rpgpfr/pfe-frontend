import {getAccessToken, withApiAuthRequired} from "@auth0/nextjs-auth0";
import {NextApiRequest, NextApiResponse} from "next";

export const GET = withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    // If your access token is expired and you have a refresh token
    // `getAccessToken` will fetch you a new one using the `refresh_token` grant
    const {accessToken} = await getAccessToken(req, res);
    const response = await fetch('http://localhost:8080/register', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const products = await response.json();
    return new Response(JSON.stringify(products));
});