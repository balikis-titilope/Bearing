'use client';

import React, { useState, useTransition } from "react";
import Link from 'next/link';
import { AlertCircle, CheckCircle } from "lucide-react";

import { AuthCard } from "@/components/auth/AuthCard";
import { reset } from "@/actions/reset";
import { newPassword } from "@/actions/new-password";
import styles from "@/app/register/page.module.css";

const ResetPage = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isVerified, setIsVerified] = useState(false);
    const [verifiedEmail, setVerifiedEmail] = useState("");
    const [verifiedName, setVerifiedName] = useState("");
    const [isPending, startTransition] = useTransition();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onVerifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const name = formData.get("name") as string;

        startTransition(() => {
            reset({ email, name }).then((data) => {
                if (data?.error) {
                    setError(data.error);
                } else {
                    setSuccess(data?.success);
                    setIsVerified(true);
                    setVerifiedEmail(email);
                    setVerifiedName(name);
                }
            });
        });
    };

    const onPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        startTransition(() => {
            newPassword({ password }, verifiedEmail, verifiedName).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
                if (data?.success) {
                    // Success! Clean up or redirect
                    setIsVerified(false);
                }
            });
        });
    };

    return (
        <AuthCard
            title={isVerified ? "Create new password" : "Forgot your password?"}
            description={isVerified ? "Enter your new secure password below" : "Verify your identity to reset your password"}
        >
            {!isVerified ? (
                <form onSubmit={onVerifySubmit} className={styles.form}>
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

                    <div className={styles.backToLogin}>
                        <Link href="/login" className={styles.backLink}>
                            Back to login
                        </Link>
                    </div>
                </form>
            ) : (
                <form onSubmit={onPasswordSubmit} className={styles.form}>
                    <div className={styles.successMsg}>
                        <CheckCircle size={16} />
                        <span>{success}</span>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">New Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Min. 8 characters"
                            className={styles.input}
                            required
                            disabled={isPending}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Repeat your password"
                            className={styles.input}
                            required
                            disabled={isPending}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    {error && (
                        <div className={styles.errorMsg}>
                            <AlertCircle size={16} />
                            <span>{error}</span>
                        </div>
                    )}

                    <button type="submit" className={styles.submitBtn} disabled={isPending}>
                        {isPending ? <span className={styles.spinner}></span> : "Reset Password"}
                    </button>
                </form>
            )}
        </AuthCard>
    );
};

export default ResetPage;
