import {auth0} from "@/lib/auth0";

export const GET = async () => {
    const {token} = await auth0.getAccessToken();
    const response = await fetch('http://localhost:8080/register', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(response);
    const products = await response.json();
    return new Response(JSON.stringify(products));
};