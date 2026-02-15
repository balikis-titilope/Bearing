import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
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
                session.user.id = token.id as string;
            }
            return session;
        },
    },
    trustHost: true,
    debug: process.env.NODE_ENV === "development",
} satisfies NextAuthConfig;
