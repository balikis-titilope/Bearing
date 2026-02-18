'use client';

import React, { useState, useTransition } from "react";
import Link from 'next/link';
import { AlertCircle, CheckCircle } from "lucide-react";

import { AuthCard } from "@/components/auth/AuthCard";
import { reset } from "@/actions/reset";
import styles from "@/app/register/page.module.css";

const ResetPage = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [resetLink, setResetLink] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setResetLink("");

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const name = formData.get("name") as string;

        startTransition(() => {
            reset({ email, name }).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
                setResetLink(data?.resetLink);
            });
        });
    };

    return (
        <AuthCard
            title="Forgot your password?"
            description="Verify your identity to reset your password"
        >
            {!resetLink ? (
                <form onSubmit={onSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email Address</label>
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

                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Full Name (as registered)</label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Your full name"
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

                    <button type="submit" className={styles.submitBtn} disabled={isPending}>
                        {isPending ? <span className={styles.spinner}></span> : "Verify Identity"}
                    </button>
                </form>
            ) : (
                <div className={styles.form}>
                    <div className={styles.successMsg}>
                        <CheckCircle size={16} />
                        <span>{success}</span>
                    </div>
                    <p className={styles.description} style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1.5rem' }}>
                        Your identity has been verified. You can now reset your password.
                    </p>
                    <Link href={resetLink} className={styles.submitBtn} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
                        Go to Reset Page
                    </Link>
                </div>
            )}
        </AuthCard>
    );
};

export default ResetPage;
