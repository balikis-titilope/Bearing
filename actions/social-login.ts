"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const socialLogin = async (provider: "google" | "github") => {
    await signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
};
