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

export const register = async (values: RegisterValues): Promise<RegisterResult> => {
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
