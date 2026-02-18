import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    console.log("----------------------------------------------");
    console.log(`📧 SENDING EMAIL TO: ${email}`);
    console.log(`🔗 VERIFICATION LINK: ${confirmLink}`);
    console.log("----------------------------------------------");

    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Confirm your email",
            html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
        });
        console.log("Resend API response:", data);
    } catch (error) {
        console.error("Resend API error:", error);
    }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
    });
};
