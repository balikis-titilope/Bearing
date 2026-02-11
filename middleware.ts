import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
    const isPublicRoute = ["/", "/privacy", "/terms"].includes(nextUrl.pathname);
    const isAuthRoute = ["/login", "/register", "/auth/error", "/auth/reset", "/auth/new-password"].includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL("/", nextUrl));
        }
        return;
    }

    if (!isLoggedIn && !isPublicRoute) {
        // For now, let's keep everything else public until we have a dashboard
        // But this is where we'd redirect to login
        // return Response.redirect(new URL("/login", nextUrl));
        return;
    }

    return;
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
