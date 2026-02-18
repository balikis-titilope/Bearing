'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Compass, CheckCircle2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import styles from '../register/page.module.css';
import { login } from '@/actions/login';
import { socialLogin } from '@/actions/social-login';
import Modal from '@/components/ui/Modal';

interface LoginValues {
    email: string;
    password: string;
}

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [modalError, setModalError] = useState("");

    const verified = searchParams.get("verified");
    const errorParam = searchParams.get("error");

    React.useEffect(() => {
        if (verified === "true") {
            setSuccess("Email verified successfully! Please log in to continue.");
        }

        if (errorParam === "OAuthAccountDoesNotExist") {
            setModalError("You don't have an account yet. Please sign up to continue.");
            setShowErrorModal(true);
        } else if (errorParam === "OAuthAccountNotLinked") {
            setError("Account already exists with a different provider.");
        } else if (errorParam === "OAuthAccountAlreadyExists") {
            setError("You already have an account with Google. Please log in.");
        }
    }, [verified, errorParam]);

    const [showPassword, setShowPassword] = useState(false);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData.entries());

        const loginValues: LoginValues = {
            email: values.email as string,
            password: values.password as string,
        };

        startTransition(() => {
            login(loginValues).then((data) => {
                if (data?.error) {
                    setError(data.error);
                } else {
                    // Force a refresh to ensure RootLayout updates the session
                    router.refresh();
                    router.push("/dashboard");
                }
            });
        });
    };

    return (
        <div className={styles.page}>
            <Modal
                isOpen={showErrorModal}
                onClose={() => setShowErrorModal(false)}
                title="Account Not Found"
                message={modalError}
                type="error"
            />
            {/* Left Side: Branding & Features */}
            <div className={styles.leftSide}>
                <Link href="/" className={styles.logo}>
                    <Compass className={styles.logoIcon} size={32} />
                    <span>Bearing</span>
                </Link>

                <div className={styles.brandContent}>
                    <h1 style={{ color: 'var(--primary)' }}>Navigate Your Career. <br />Own Your Future.</h1>
                    <p className={styles.description}>
                        Bearing helps you bridge the gap between where you are and where you want to be.
                        Stop guessing and start following a proven path to your dream role.
                    </p>

                    <ul className={styles.features}>
                        <li className={styles.feature}>
                            <CheckCircle2 className={styles.featureIcon} size={24} />
                            <span>Discover career paths that fit your skills</span>
                        </li>
                        <li className={styles.feature}>
                            <CheckCircle2 className={styles.featureIcon} size={24} />
                            <span>Identify exactly what you're missing</span>
                        </li>
                        <li className={styles.feature}>
                            <CheckCircle2 className={styles.featureIcon} size={24} />
                            <span>Build a roadmap that leads to hiring</span>
                        </li>
                    </ul>

                    <div className={styles.testimonial}>
                        <blockquote>
                            "Bearing gave me the clarity I was missing. I stopped guessing and started building a real career in tech."
                        </blockquote>
                        <cite>— Sofia, Junior Developer</cite>
                    </div>
                </div>

                <div className={styles.footerInfo}>
                </div>
            </div>

            {/* Right Side: Auth Form */}
            <div className={styles.rightSide}>
                <div className={styles.formWrapper}>
                    <div className={styles.headerInfo}>
                        <div className={styles.switcher}>
                            <div className={`${styles.switchBtn} ${styles.activeSwitch}`}>
                                Login
                            </div>
                            <Link href="/register" className={`${styles.switchBtn} ${styles.inactiveSwitch}`}>
                                Create Account
                            </Link>
                        </div>
                    </div>

                    {error && (
                        <div className={styles.errorMsg}>
                            <AlertCircle size={16} />
                            <span dangerouslySetInnerHTML={{ __html: error }} />
                        </div>
                    )}

                    <div className={styles.divider}>
                        LOGIN WITH EMAIL
                    </div>

                    <button
                        className={styles.socialBtn}
                        onClick={() => socialLogin("google", "login")}
                        type="button"
                    >
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>

                    <form className={styles.form} onSubmit={handleFormSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input name="email" type="email" id="email" placeholder="your.email@example.com" className={styles.input} required disabled={isPending} />
                        </div>
                        <div className={styles.inputGroup}>
                            <div className={styles.labelWrapper}>
                                <label htmlFor="password">Password</label>
                                <Link href="/auth/reset" className={styles.forgotBtn}>Forgot?</Link>
                            </div>
                            <div className={styles.passwordInput}>
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Enter your password"
                                    className={styles.input}
                                    required
                                    disabled={isPending}
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
                        </div>



                        {success && (
                            <div className={styles.successMsg}>
                                <CheckCircle2 size={16} />
                                <span>{success}</span>
                            </div>
                        )}

                        <button type="submit" className={styles.submitBtn} disabled={isPending}>
                            {isPending ? <span className={styles.spinner}></span> : 'Log In'}
                        </button>
                    </form>

                    <p className={styles.terms}>
                        Don&apos;t have an account? <Link href="/register" className={styles.signupLink}>Sign up for free</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
