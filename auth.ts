import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/lib/schemas";
import { getUserByEmail } from "@/lib/user";

// Ensure AUTH_SECRET is available
const authSecret = process.env.AUTH_SECRET;
if (!authSecret) {
    console.warn("WARNING: AUTH_SECRET is not set. Please set it in your environment variables.");
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    secret: authSecret,
    callbacks: {
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        async jwt({ token }) {
            return token;
        },
    },
    ...authConfig,
    providers: [
        ...authConfig.providers,
        Credentials({
            async authorize(credentials) {
                try {
                    const validatedFields = LoginSchema.safeParse(credentials);

                    if (validatedFields.success) {
                        const { email, password } = validatedFields.data;

                        const user = await getUserByEmail(email);
                        if (!user || !user.password) return null;

                        const passwordsMatch = await bcrypt.compare(
                            password,
                            user.password,
                        );

                        if (passwordsMatch) return user;
                    }

                    return null;
                } catch (error) {
                    console.error("Auth error:", error);
                    return null;
                }
            },
        }),
    ],
});
