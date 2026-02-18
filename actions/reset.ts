"use server";

import * as z from "zod";
import { ResetSchema } from "@/lib/schemas";
import { getUserByEmail } from "@/lib/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";

export const reset = async (values: { email: string, name: string }) => {
    const { email, name } = values;

    if (!email || !name) {
        return { error: "Email and Name are required!" };
    }

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return { error: "Email not found!" };
    }

    if (existingUser.name?.toLowerCase() !== name.toLowerCase()) {
        return { error: "Identity verification failed. Name does not match our records." };
    }

    const passwordResetToken = await generatePasswordResetToken(email);

    // We normally send an email, but since we're using identity verification as a workaround:
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-password?token=${passwordResetToken.token}`;

    return {
        success: "Identity verified!",
        resetLink: resetLink
    };
}
