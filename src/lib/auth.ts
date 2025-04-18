import NextAuth, {AuthError, Session, User} from "next-auth";
import Credentials from "next-auth/providers/credentials"
import {JWT} from "next-auth/jwt"
import jwt from "jsonwebtoken";

export const {handlers, auth} = NextAuth({
    providers: [
        Credentials({
            credentials: {
                identifier: {label: "Username or Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            authorize: async (credentials) => {
                try {
                    const options: RequestInit = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "backend-api-key": process.env.SPRING_API_KEY!
                        },
                        body: JSON.stringify(credentials)
                    };
                    const authorizationResponse = await fetch(`${process.env.SPRING_API_URL}/auth/login`, options);

                    if (!authorizationResponse.ok) {
                        const errorMessage = (await authorizationResponse.json()).error;

                        throw new Error(errorMessage);
                    }

                    const data = await authorizationResponse.json();

                    return data.data;
                } catch (error) {
                    throw new AuthError((error as Error).message);
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({token, user}: { token: JWT, user: User }) => {
            if (user) {
                token.username = user.username;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
                token.email = user.email;
                token.image = user.image;

                token.accessToken = jwt.sign(
                    {
                        sub: user.username,
                        email: user.email
                    },
                    process.env.NEXTAUTH_SECRET!,
                    {
                        algorithm: "HS256",
                        expiresIn: "1h"
                    }
                );
            }

            return token;
        },
        session: async ({session, token}: { session: Session, token: JWT }) => {
            session.user.username = token.username;
            session.user.firstName = token.firstName;
            session.user.lastName = token.lastName;
            session.user.email = token.email;
            session.user.image = token.picture;
            session.token = token.accessToken;

            return session;
        }
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.AUTH_SECRET!
});