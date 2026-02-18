import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/lib/schemas";
import { getUserByEmail, getUserById } from "@/lib/user";

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
    ...authConfig,
    callbacks: {
        async signIn({ user, account, profile }) {
            // Allow credentials login to proceed (checks are in authorize)
            if (account?.provider === "credentials") return true;

            if (account?.provider === "google") {
                if (!user.email) return false;

                // Check auth context from cookie
                const { cookies } = await import("next/headers");
                const cookieStore = await cookies();
                const authContext = cookieStore.get("auth-context")?.value;

                const existingUser = await getUserByEmail(user.email);

                // Scenario 1: User tries to LOGIN but account does not exist
                if (authContext === "login" && !existingUser) {
                    return "/register?error=OAuthAccountDoesNotExist";
                }

                // Scenario 2: User tries to REGISTER but account already exists with Google
                // (If account exists with Email, Auth.js throws OAuthAccountNotLinked automatically)
                if (authContext === "register" && existingUser) {
                    // We check if they are already linked to Google by checking if they can just sign in
                    // But here we might want to be explicit as per user request
                    return "/login?error=OAuthAccountAlreadyExists";
                }

                return true;
            }

            return true;
        },
        async session({ token, session }) {
            if (authConfig.callbacks?.session) {
                session = await authConfig.callbacks.session({ session, token }) as any;
            }

            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            return session;
        },
        async jwt({ token, user, trigger, session }) {
            if (authConfig.callbacks?.jwt) {
                token = await authConfig.callbacks.jwt({ token, user, trigger, session }) as any;
            }

            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);
            if (!existingUser) return token;

            token.role = existingUser.role;

            return token;
        },
    },
    providers: [
        ...authConfig.providers,
        Credentials({
            async authorize(credentials) {
                try {
                    // Handle verification token login (auto-login after email verification)
                    if (credentials.verificationToken) {
                        const token = credentials.verificationToken as string;
                        const verificationToken = await db.verificationToken.findUnique({
                            where: { token }
                        });

                        if (!verificationToken) return null;

                        const hasExpired = new Date(verificationToken.expires) < new Date();
                        if (hasExpired) return null;

                        const user = await getUserByEmail(verificationToken.email);
                        if (!user || !user.emailVerified) return null;

                        // Delete the verification token after use
                        await db.verificationToken.delete({
                            where: { id: verificationToken.id }
                        });

                        return user;
                    }

                    // Handle regular credentials login
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
