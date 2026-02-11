'use client';

import React, { useState, useTransition } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";

import { AuthCard } from "@/components/auth/AuthCard";
import { reset } from "@/actions/reset";
import styles from "@/app/register/page.module.css";

const ResetPage = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;

        startTransition(() => {
            reset({ email }).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        });
    };

    return (
        <AuthCard
            title="Forgot your password?"
            description="Enter your email to reset your password"
        >
            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        placeholder="your.email@example.com"
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
                    {isPending ? <span className={styles.spinner}></span> : "Send reset email"}
                </button>
            </form>
        </AuthCard>
    );
};

export default ResetPage;
