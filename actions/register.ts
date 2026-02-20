"use server";

import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { RegisterSchema } from "@/lib/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";

interface RegisterValues {
    email: string;
    confirmPassword: string;
    password: string;
    name?: string;
}

interface RegisterResult {
    success?: string;
    error?: string;
}

export const register = async (values: RegisterValues, isOAuthCompletion = false): Promise<RegisterResult> => {
    // For OAuth completion, just update the user's name
    if (isOAuthCompletion) {
        const { email, name } = values;

        if (!email || !name) {
            return { error: "Email and name are required" };
        }

        const existingUser = await getUserByEmail(email);

        if (!existingUser) {
            return { error: "User not found. Please sign in with Google again." };
        }

        // Update the user's name to complete registration
        await db.user.update({
            where: { id: existingUser.id },
            data: { name },
        });

        return { success: "Registration completed! Redirecting..." };
    }

    // Normal registration flow
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 12);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already in use!" };
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            emailVerified: new Date(), // Auto-verify on registration
        },
    });

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/dashboard",
        });
        revalidatePath("/");
    } catch (error) {
        if (error instanceof AuthError) {
            return { success: "Account created successfully! Please log in." };
        }

        throw error;
    }

    return { success: "Account created successfully! Redirecting..." };
};
