"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";
import { getVerificationTokenByToken } from "@/lib/tokens";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const newVerification = async (token: string) => {
    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken) {
        return { error: "Token does not exist!" };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
        return { error: "Token has expired!" };
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
        return { error: "Email does not exist!" };
    }

    await db.user.update({
        where: { id: existingUser.id },
        data: {
            emailVerified: new Date(),
            email: existingToken.email,
        }
    });

    // Delete the verification token (it will be recreated for auto-login)
    await db.verificationToken.delete({
        where: { id: existingToken.id }
    });

    // Generate a new verification token for auto-login
    const newVerificationToken = await db.verificationToken.create({
        data: {
            email: existingUser.email!,
            token: token,
            expires: new Date(new Date().getTime() + 60 * 1000), // 1 minute validity for auto-login
        }
    });

    // Auto-login using the verification token
    await signIn("credentials", {
        verificationToken: newVerificationToken.token,
        redirect: false,
    });

    return { success: "Email verified!", redirectUrl: DEFAULT_LOGIN_REDIRECT };
};
