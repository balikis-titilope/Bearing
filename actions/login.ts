"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { LoginSchema } from "@/lib/schemas";
import { getUserByEmail } from "@/lib/user";
import { rateLimit } from "@/lib/rate-limit";

interface LoginValues {
    email: string;
    password: string;
}

interface LoginResult {
    success?: string;
    error?: string;
}

export const login = async (values: LoginValues): Promise<LoginResult> => {
    // Rate limiting based on email
    const rateLimitResult = rateLimit(values.email, 5, 15 * 60 * 1000); // 5 attempts per 15 minutes
    if (!rateLimitResult.success) {
        return { error: "Too many login attempts. Please try again later." };
    }

    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: "Email does not exist!" };
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/",
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" };
                default:
                    return { error: "Something went wrong!" };
            }
        }

        throw error;
    }

    return { success: "Successfully logged in!" };
};
