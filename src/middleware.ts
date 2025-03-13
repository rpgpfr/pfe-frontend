import { auth } from "@/lib/auth"
import {NextRequest} from "next/server";

export default auth((request: NextRequest & {auth: any}) => {
    if (
        !request.auth
        && request.nextUrl.pathname !== "/login"
        || request.nextUrl.pathname !== "/signup"
    ) {
        const newUrl = new URL("/login", request.nextUrl.origin)

        return Response.redirect(newUrl)
    }
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}