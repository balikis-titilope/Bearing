'use client';

import React, { useTransition } from 'react';
import Link from 'next/link';
import { Compass, CheckCircle2, ChevronRight, AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';
import styles from './page.module.css';
import { register } from '@/actions/register';

interface RegisterValues {
    email: string;
    password: string;
    name?: string;
}


export default function RegisterPage() {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = React.useState<string | undefined>("");
    const [success, setSuccess] = React.useState<string | undefined>("");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData.entries());
        
        const registerValues: RegisterValues = {
            email: values.email as string,
            password: values.password as string,
            name: values.name as string,
        };

        startTransition(() => {
            register(registerValues).then((data) => {
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
                    {/* Add any extra small info here if needed */}
                </div>
            </div>

            {/* Right Side: Auth Form */}
            <div className={styles.rightSide}>
                <div className={styles.formWrapper}>
                    <div className={styles.headerInfo}>
                        <div className={styles.switcher}>
                            <Link href="/login" className={`${styles.switchBtn} ${styles.inactiveSwitch}`}>
                                Login
                            </Link>
                            <button
                                className={`${styles.switchBtn} ${styles.activeSwitch}`}
                                disabled={isPending}
                            >
                                Create Account
                            </button>
                        </div>
                    </div>

                    <div className={styles.divider}>
                        SIGN UP WITH EMAIL
                    </div>

                    <form className={styles.form} onSubmit={handleFormSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input name="name" type="text" id="name" placeholder="Your full name" className={styles.input} required disabled={isPending} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input name="email" type="email" id="email" placeholder="your.email@example.com" className={styles.input} required disabled={isPending} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <div className={styles.passwordInput}>
                                <input 
                                    name="password" 
                                    type={showPassword ? "text" : "password"} 
                                    id="password" 
                                    placeholder="Minimum 8 characters" 
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
                            {isPending ? (
                                <span className={styles.spinner}></span>
                            ) : (
                                'Sign Up'
                            )}
                        </button>
                    </form>

                    <p className={styles.terms}>
                        By signing up, you agree to our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Service</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
