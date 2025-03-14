import {DefaultSession, DefaultUser} from "next-auth";
import {DefaultJWT} from "next-auth/jwt";

declare module "next-auth" {
    interface User extends DefaultUser {
        username?: string;
        firstName?: string;
        lastName?: string;
    }

    interface Session extends DefaultSession {
        user: User & DefaultSession["user"];
        token: string
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        username?: string;
        firstName?: string;
        lastName?: string;
        accessToken: string;
    }
}