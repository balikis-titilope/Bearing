"use server";

import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/lib/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";
import { rateLimit } from "@/lib/rate-limit";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

interface RegisterValues {
    email: string;
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

        return { success: "Registration completed! Redirecting to dashboard..." };
    }

    // Normal registration flow
    // Rate limiting based on email and IP
    const rateLimitResult = rateLimit(values.email, 3, 60 * 60 * 1000); // 3 attempts per hour
    if (!rateLimitResult.success) {
        return { error: "Too many registration attempts. Please try again later." };
    }

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
            emailVerified: null,
        },
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(email, verificationToken.token);

    return { success: "Verification email sent! Please check your inbox to activate your account." };
};
