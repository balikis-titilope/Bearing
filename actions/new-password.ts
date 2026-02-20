"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { NewPasswordSchema } from "@/lib/schemas";
import { getUserByEmail } from "@/lib/user";
import { db } from "@/lib/db";

export const newPassword = async (
    values: z.infer<typeof NewPasswordSchema>,
    email?: string | null,
    name?: string | null,
) => {
    if (!email || !name) {
        return { error: "Missing identity information!" };
    }

    const validatedFields = NewPasswordSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return { error: "Email does not exist!" };
    }

    if (existingUser.name?.toLowerCase() !== name.toLowerCase()) {
        return { error: "Identity verification failed!" };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await db.user.update({
        where: { id: existingUser.id },
        data: { password: hashedPassword },
    });

    return { success: "Password updated successfully!" };
};
