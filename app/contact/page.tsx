'use client';

import React, { useTransition } from 'react';
import Link from 'next/link';
import { Compass, CheckCircle2, Mail, MessageSquare, Send, AlertCircle, CheckCircle } from 'lucide-react';
import styles from './page.module.css';
import { contact } from '@/actions/contact';

interface ContactValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = React.useState<string | undefined>("");
    const [success, setSuccess] = React.useState<string | undefined>("");

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData.entries());

        const contactValues: ContactValues = {
            name: values.name as string,
            email: values.email as string,
            subject: values.subject as string,
            message: values.message as string,
        };

        startTransition(() => {
            contact(contactValues).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
                if (data?.success) {
                    (e.target as HTMLFormElement).reset();
                }
            });
        });
    };

    return (
        <div className={styles.page}>
            {/* Left Side: Branding & Info */}
            <div className={styles.leftSide}>
                <Link href="/" className={styles.logo}>
                    <Compass className={styles.logoIcon} size={32} />
                    <span>Bearing</span>
                </Link>

                <div className={styles.brandContent}>
                    <h1 style={{ color: 'var(--primary)' }}>Get in Touch</h1>
                    <p className={styles.description}>
                        Have questions about Bearing? Want to share feedback or report an issue?
                        We'd love to hear from you. Our team is here to help you navigate your career journey.
                    </p>

                    <ul className={styles.features}>
                        <li className={styles.feature}>
                            <Mail className={styles.featureIcon} size={24} />
                            <span>Email us at reach.bearing@gmail.com</span>
                        </li>
                        <li className={styles.feature}>
                            <MessageSquare className={styles.featureIcon} size={24} />
                            <span>Average response time: 24-48 hours</span>
                        </li>
                    </ul>

                    <div className={styles.testimonial}>
                        <blockquote>
                            "The Bearing team is dedicated to helping you succeed. Every question and feedback helps us improve your experience."
                        </blockquote>
                        <cite>— The Bearing Team</cite>
                    </div>
                </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className={styles.rightSide}>
                <div className={styles.formWrapper}>
                    <div className={styles.headerInfo}>
                        <div className={styles.switcher}>
                            <Link href="/login" className={`${styles.switchBtn} ${styles.inactiveSwitch}`}>
                                Login
                            </Link>
                            <button
                                className={`${styles.switchBtn} ${styles.activeSwitch}`}
                                disabled
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <div className={styles.divider}>
                        SEND US A MESSAGE
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
                            <label htmlFor="subject">Subject</label>
                            <select name="subject" id="subject" className={styles.select} required disabled={isPending}>
                                <option value="">Select a topic</option>
                                <option value="general">General Inquiry</option>
                                <option value="feedback">Feedback</option>
                                <option value="bug">Report a Bug</option>
                                <option value="feature">Feature Request</option>
                                <option value="support">Technical Support</option>
                                <option value="partnership">Partnership</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Tell us how we can help you..."
                                className={styles.textarea}
                                required
                                disabled={isPending}
                                rows={5}
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
                            {isPending ? (
                                <span className={styles.spinner}></span>
                            ) : (
                                <>
                                    <Send size={18} />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </form>

                    <p className={styles.terms}>
                        By sending a message, you agree to our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Service</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
