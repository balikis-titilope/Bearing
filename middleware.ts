import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
    const isPublicRoute =
        ["/", "/privacy", "/terms", "/assessment"].includes(nextUrl.pathname) ||
        nextUrl.pathname.startsWith("/paths");
    const isAuthRoute = ["/login", "/register", "/auth/error", "/auth/reset", "/auth/new-password"].includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return;
    }

    // Protect auth routes - redirect logged in users away from login/register
    if (isAuthRoute && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
    }

    // Protect all routes except public ones - redirect unauthenticated users to login
    if (!isLoggedIn && !isPublicRoute) {
        // Don't redirect if already on auth pages to prevent loops
        if (isAuthRoute) {
            return;
        }
        return Response.redirect(new URL("/login", nextUrl));
    }

    return;
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
