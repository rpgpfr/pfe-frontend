import {Auth0Client} from "@auth0/nextjs-auth0/server";

export const auth0 = new Auth0Client({
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    secret: process.env.AUTH0_SECRET,
    authorizationParameters: {
        audience: process.env.AUTH0_AUDIENCE,
        scope: 'openid profile email',
    }
});