'use client';

import React, { Suspense, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle } from "lucide-react";

import { AuthCard } from "@/components/auth/AuthCard";
import { newPassword } from "@/actions/new-password";
import styles from "@/app/register/page.module.css";

const NewPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new FormData(e.currentTarget);
        const password = formData.get("password") as string;

        startTransition(() => {
            newPassword({ password }, token).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        });
    };

    return (
        <AuthCard
            title="Enter a new password"
            description="Choose a strong password with at least 8 characters"
        >
            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">New Password</label>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Min. 8 characters"
                        className={styles.input}
                        required
                        disabled={isPending}
                    />
                </div>

                {error && (
                    <div className={styles.errorMsg}>
                        <AlertCircle size={16} />
                        <span>{error}</span>
                    </div>
                )}

                {success && (
                    <div className={styles.successMsg}>
                        <CheckCircle size={16} />
                        <span>{success}</span>
                    </div>
                )}

                <button type="submit" className={styles.submitBtn} disabled={isPending}>
                    {isPending ? <span className={styles.spinner}></span> : "Reset password"}
                </button>
            </form>
        </AuthCard>
    );
};

const NewPasswordPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NewPasswordForm />
        </Suspense>
    );
};

export default NewPasswordPage;
