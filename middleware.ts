import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
    const isPublicRoute =
        ["/", "/privacy", "/terms", "/assessment", "/paths"].includes(nextUrl.pathname);
    const isAuthRoute = ["/login", "/register", "/auth/error", "/auth/reset", "/auth/new-password"].includes(nextUrl.pathname);

    const isAdminRoute = nextUrl.pathname.startsWith("/admin");

    if (isApiAuthRoute) {
        return;
    }

    // Check if OAuth user needs to complete registration
    const needsRegistration = (req.auth?.user as any)?.needsRegistration;

    // Protect admin routes
    if (isAdminRoute) {
        if (!isLoggedIn) {
            return Response.redirect(new URL("/login", nextUrl));
        }

        const userRole = req.auth?.user?.role;
        if (userRole !== "ADMIN" && userRole !== "SUPER_ADMIN") {
            return Response.redirect(new URL("/", nextUrl));
        }
    }

    // Redirect OAuth users who need to complete registration
    if (isLoggedIn && needsRegistration && !isAuthRoute && nextUrl.pathname !== "/register") {
        return Response.redirect(new URL("/register?complete=true", nextUrl));
    }

    // Protect auth routes - redirect logged in users away from login/register
    if (isAuthRoute && isLoggedIn) {
        // Allow OAuth users who need registration to access register
        if (needsRegistration && nextUrl.pathname === "/register") {
            return;
        }
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
