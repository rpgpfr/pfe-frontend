import {auth} from "@/lib/auth"
import {NextRequest} from "next/server";

export default auth((request: NextRequest & { auth: unknown }) => {
    if (
        !request.auth
        && request.nextUrl.pathname.includes("/campaigns")
    ) {
        const newUrl = new URL("/login", request.nextUrl.origin)

        return Response.redirect(newUrl)
    }
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}