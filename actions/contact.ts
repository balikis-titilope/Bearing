"use server";

interface ContactValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface ContactResult {
    success?: string;
    error?: string;
}

export const contact = async (values: ContactValues): Promise<ContactResult> => {
    const { name, email, subject, message } = values;

    if (!name || !email || !subject || !message) {
        return { error: "All fields are required!" };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { error: "Please enter a valid email address!" };
    }

    if (message.length < 10) {
        return { error: "Message must be at least 10 characters long!" };
    }

    try {
        console.log("Contact form submission:", { name, email, subject, message });
        
        return { success: "Thank you for reaching out! We'll get back to you within 24-48 hours." };
    } catch (error) {
        return { error: "Something went wrong. Please try again later." };
    }
};
