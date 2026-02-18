"use server";

import { signIn } from "@/auth";
import { cookies } from "next/headers";

export const socialLogin = async (provider: "google" | "github", context: "login" | "register" = "login") => {
    const cookieStore = await cookies();
    cookieStore.set("auth-context", context, { path: "/", maxAge: 300 }); // 5 mins

    await signIn(provider, {
        callbackUrl: "/dashboard",
    });
};
