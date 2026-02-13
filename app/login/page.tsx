'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Compass, CheckCircle2, AlertCircle, CheckCircle } from 'lucide-react';
import styles from '../register/page.module.css';
import { login } from '@/actions/login';

interface LoginValues {
    email: string;
    password: string;
}


export default function LoginPage() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");


    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

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
                    router.push("/");
                }
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

                    <div className={styles.divider}>
                        LOGIN WITH EMAIL
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
