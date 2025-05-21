import {auth} from "@/lib/auth"
import {NextRequest} from "next/server";

export default auth((request: NextRequest & { auth: unknown }) => {
    if (
        !request.auth
        && !(request.nextUrl.pathname.includes("/login") || request.nextUrl.pathname.includes("/signup") || request.nextUrl.pathname === "/")
    ) {
        const newUrl = new URL("/login", request.nextUrl.origin);

        return Response.redirect(newUrl);
    }

    if (
        request.auth
        && (request.nextUrl.pathname.includes("/login") || request.nextUrl.pathname.includes("/signup"))
    ) {
        const newUrl = new URL("/", request.nextUrl.origin);

        return Response.redirect(newUrl);
    }
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
}
