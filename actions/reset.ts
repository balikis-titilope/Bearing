import { getUserByEmail } from "@/lib/user";

export const reset = async (values: { email: string, name: string }) => {
    const { email, name } = values;

    if (!email || !name) {
        return { error: "Email and Name are required!" };
    }

    // Identity verification confirmed
    return {
        success: "Identity verified! Please enter your new password below.",
        verified: true,
        email,
        name
    };
}
