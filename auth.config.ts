import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "@/lib/db";

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
                
                // Check if OAuth user (user has email from OAuth but no password = OAuth)
                const dbUser = await db.user.findUnique({
                    where: { id: user.id },
                    select: { password: true, name: true, email: true }
                });
                
                // If user has no password (OAuth) and no name set, they need to complete registration
                if (dbUser && !dbUser.password && !dbUser.name && dbUser.email) {
                    token.needsRegistration = true;
                }
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
            // Pass the needsRegistration flag to the session
            if (token.needsRegistration) {
                (session.user as any).needsRegistration = true;
            }
            return session;
        },
    },
    trustHost: true,
    debug: process.env.NODE_ENV === "development",
} satisfies NextAuthConfig;
