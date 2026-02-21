'use client';

import React, { useTransition, useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Compass, CheckCircle2, ChevronRight, AlertCircle, Eye, EyeOff } from 'lucide-react';
import styles from './page.module.css';
import { register } from '@/actions/register';
import { socialLogin } from '@/actions/social-login';

interface RegisterValues {
    email: string;
    confirmPassword: string;
    password: string;
    name?: string;
}

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


function RegisterContent() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = React.useState<string | undefined>("");
    const [success, setSuccess] = React.useState<string | undefined>("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordTouched, setPasswordTouched] = useState(false);
    const searchParams = useSearchParams();
    const { data: session } = useSession();

    const isOAuthComplete = searchParams.get('complete') === 'true';
    const userEmail = session?.user?.email;

    const passwordValidation = useMemo(() => validatePassword(password), [password]);
    const isStrong = isPasswordStrong(passwordValidation);

    // Redirect to dashboard after successful registration or OAuth completion
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                router.refresh();
                router.push('/dashboard');
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [success, router]);

    const errorParam = searchParams.get("error");

    useEffect(() => {
        if (errorParam === "OAuthAccountDoesNotExist") {
            setError("You don't have an account yet. Please sign up first.");
        }
    }, [errorParam]);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isOAuthComplete && !isStrong) {
            setError("Password does not meet the required criteria");
            return;
        }

        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData.entries());

        if (!isOAuthComplete && values.password !== values.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        setSuccess("");

        const registerValues: RegisterValues = {
            email: values.email as string,
            confirmPassword: values.confirmPassword as string,
            password: values.password as string,
            name: values.name as string,
        };

        startTransition(() => {
            register(registerValues, isOAuthComplete).then((data) => {
                setError(data?.error);
                if (data?.success) {
                    setSuccess(data.success);
                    // Redirect is handled by the useEffect watching success
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

                    {error && (
                        <div className={styles.errorMsg}>
                            <AlertCircle size={16} />
                            <span>{error}</span>
                        </div>
                    )}

                    {success && (
                        <div className={styles.successContainer}>
                            <div className={styles.successMsg}>
                                <CheckCircle2 size={16} />
                                <span>{success}</span>
                            </div>
                        </div>
                    )}

                    <div className={styles.divider}>
                        SIGN UP WITH EMAIL
                    </div>

                    <button
                        className={styles.socialBtn}
                        onClick={() => socialLogin("google", "register")}
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
                            <label htmlFor="name">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                placeholder="Your full name"
                                className={styles.input}
                                required
                                disabled={isPending}
                                defaultValue={isOAuthComplete && session?.user?.name ? session.user.name : undefined}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                placeholder="your.email@example.com"
                                className={styles.input}
                                required
                                disabled={isPending || isOAuthComplete}
                                defaultValue={isOAuthComplete && userEmail ? userEmail : undefined}
                            />
                        </div>
                        {!isOAuthComplete && (
                            <>
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
                                                {passwordValidation.length ? <CheckCircle2 size={14} /> : <span>•</span>} 8+ characters
                                            </span>
                                            <span className={passwordValidation.uppercase ? styles.valid : styles.invalid}>
                                                {passwordValidation.uppercase ? <CheckCircle2 size={14} /> : <span>•</span>} 1 uppercase
                                            </span>
                                            <span className={passwordValidation.lowercase ? styles.valid : styles.invalid}>
                                                {passwordValidation.lowercase ? <CheckCircle2 size={14} /> : <span>•</span>} 1 lowercase
                                            </span>
                                            <span className={passwordValidation.number ? styles.valid : styles.invalid}>
                                                {passwordValidation.number ? <CheckCircle2 size={14} /> : <span>•</span>} 1 number
                                            </span>
                                            <span className={passwordValidation.special ? styles.valid : styles.invalid}>
                                                {passwordValidation.special ? <CheckCircle2 size={14} /> : <span>•</span>} 1 special char
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <div className={styles.passwordInput}>
                                        <input
                                            name="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            id="confirmPassword"
                                            placeholder="Confirm your password"
                                            className={styles.input}
                                            required
                                            disabled={isPending}
                                        />
                                        <button
                                            type="button"
                                            className={styles.passwordToggle}
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            disabled={isPending}
                                        >
                                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}



                        <button type="submit" className={styles.submitBtn} disabled={isPending || !!success}>
                            {isPending ? (
                                <span className={styles.spinner}></span>
                            ) : success ? (
                                'Success!'
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

export default function RegisterPage() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <RegisterContent />
        </React.Suspense>
    );
}

