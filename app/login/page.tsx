'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { Compass, CheckCircle2, AlertCircle, CheckCircle } from 'lucide-react';
import styles from '../register/page.module.css';
import { login } from '@/actions/login';
import { socialLogin } from '@/actions/social-login';

export default function LoginPage() {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData.entries());

        startTransition(() => {
            login(values).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        });
    };

    return (
        <div className={styles.page}>
            {/* Left Side: Branding & Features */}
            <div className={styles.leftSide}>
                <Link href="/" className={styles.logo}>
                    <Compass className={styles.logoIcon} size={32} />
                    <span>Bearing</span>
                </Link>

                <div className={styles.brandContent}>
                    <h1>Navigate Your Career. <br />Own Your Future.</h1>
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
                            <button
                                className={`${styles.switchBtn} ${styles.activeSwitch}`}
                                disabled={isPending}
                            >
                                Login
                            </button>
                            <Link href="/register" className={`${styles.switchBtn} ${styles.inactiveSwitch}`}>
                                Create Account
                            </Link>
                        </div>
                    </div>

                    <button
                        className={styles.googleBtn}
                        disabled={isPending}
                        onClick={() => {
                            startTransition(() => {
                                socialLogin("google");
                            });
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.00.67-2.26 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.83c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </button>

                    <div className={styles.divider}>
                        OR CONTINUE WITH EMAIL
                    </div>

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
                            <input name="password" type="password" id="password" placeholder="Enter your password" className={styles.input} required disabled={isPending} />
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
                            {isPending ? <span className={styles.spinner}></span> : 'Log In'}
                        </button>
                    </form>

                    <p className={styles.terms}>
                        Don&apos;t have an account? <Link href="/register">Sign up for free</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
