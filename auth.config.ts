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
    trustHost: true,
    debug: process.env.NODE_ENV === "development",
} satisfies NextAuthConfig;
