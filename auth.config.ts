import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
    if (process.env.NODE_ENV === "production") {
        console.error("CRITICAL: Google OAuth credentials are missing in production environment!");
    } else {
        console.warn("WARNING: Google OAuth credentials are not set. Google login will not work.");
    }
}

export default {
    providers: [
        Google({
            clientId: googleClientId,
            clientSecret: googleClientSecret,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    pages: {
        signIn: "/login",
        error: "/auth/error",
    },
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.role = (user as any).role;
                token.id = user.id;
            }

            // Handle manual session updates
            if (trigger === "update" && session?.role) {
                token.role = session.role;
            }

            return token;
        },
        async session({ session, token }) {
            if (token.role && session.user) {
                session.user.role = token.role as any;
            }
            if (token.id && session.user) {
                session.user.id = token.id as any;
            }
            return session;
        },
    },
    trustHost: true,
    debug: process.env.NODE_ENV === "development",
} satisfies NextAuthConfig;
