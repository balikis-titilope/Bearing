'use client';

import React, { Suspense, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle, Eye, EyeOff } from "lucide-react";

import { AuthCard } from "@/components/auth/AuthCard";
import { newPassword } from "@/actions/new-password";
import styles from "@/app/register/page.module.css";

const validatePassword = (password: string) => {
    return {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
};

const isPasswordStrong = (validation: ReturnType<typeof validatePassword>) => {
    return Object.values(validation).every(Boolean);
};

const NewPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [isPending, startTransition] = useTransition();

    const passwordValidation = React.useMemo(() => validatePassword(password), [password]);
    const isStrong = isPasswordStrong(passwordValidation);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isStrong) {
            setError("Password does not meet the required criteria");
            return;
        }

        setError("");
        setSuccess("");

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
                    <div className={styles.passwordInput}>
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Min. 8 characters"
                            className={styles.input}
                            required
                            disabled={isPending}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setPasswordTouched(true)}
                        />
                        <button
                            type="button"
                            className={styles.passwordToggle}
                            onClick={() => setShowPassword(!showPassword)}
                            disabled={isPending}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {passwordTouched && (
                        <div className={styles.passwordRequirements}>
                            <span className={passwordValidation.length ? styles.valid : styles.invalid}>
                                {passwordValidation.length ? <CheckCircle size={14} /> : <span>•</span>} 8+ characters
                            </span>
                            <span className={passwordValidation.uppercase ? styles.valid : styles.invalid}>
                                {passwordValidation.uppercase ? <CheckCircle size={14} /> : <span>•</span>} 1 uppercase
                            </span>
                            <span className={passwordValidation.lowercase ? styles.valid : styles.invalid}>
                                {passwordValidation.lowercase ? <CheckCircle size={14} /> : <span>•</span>} 1 lowercase
                            </span>
                            <span className={passwordValidation.number ? styles.valid : styles.invalid}>
                                {passwordValidation.number ? <CheckCircle size={14} /> : <span>•</span>} 1 number
                            </span>
                            <span className={passwordValidation.special ? styles.valid : styles.invalid}>
                                {passwordValidation.special ? <CheckCircle size={14} /> : <span>•</span>} 1 special char
                            </span>
                        </div>
                    )}
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
