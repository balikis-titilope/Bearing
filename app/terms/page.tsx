'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import styles from '@/components/layout/LegalPage.module.css';

export default function TermsOfService() {
    return (
        <>
            <Navbar />
            <main className={styles.page}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.header}>
                        <h1 style={{ color: 'var(--primary)' }}>Terms of Service</h1>
                        <p className={styles.lastUpdated}>Last updated: February 11, 2026</p>
                    </div>

                    <div className={styles.content}>
                        <section>
                            <p>
                                Welcome to Bearing. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
                            </p>
                        </section>

                        <section>
                            <h2>1. Use of Service</h2>
                            <p>
                                Bearing provides AI-driven career guidance and roadmap tools for personal, non-commercial use. You agree to use the service only for lawful purposes and in accordance with these Terms.
                            </p>
                        </section>

                        <section>
                            <h2>2. Account Responsibilities</h2>
                            <p>
                                When you create an account, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account and for keeping your password secure.
                            </p>
                        </section>

                        <section>
                            <h2>3. AI Accuracy & Disclaimers</h2>
                            <p>
                                Bearing uses artificial intelligence to provide career insights. You acknowledge that:
                            </p>
                            <ul>
                                <li>AI-generated advice is for informational purposes only and does not constitute professional career or legal advice.</li>
                                <li>We do not guarantee specific employment outcomes, salary increases, or job placements.</li>
                                <li>Bearing is not responsible for the accuracy or completeness of third-party skill requirements or market data.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>4. Intellectual Property</h2>
                            <p>
                                The platform, including its original content, features, and functionality, are and will remain the exclusive property of Bearing and its licensors. Our roadmaps and unique AI implementations are protected by copyright and trade secret laws.
                            </p>
                        </section>

                        <section>
                            <h2>5. Limitation of Liability</h2>
                            <p>
                                In no event shall Bearing be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of, or inability to access or use, the service.
                            </p>
                        </section>

                        <section>
                            <h2>6. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify or replace these Terms at any time. We will provide notice of significant changes by posting the new Terms on this page. Your continued use of the service after such changes constitutes acceptance of the new Terms.
                            </p>
                        </section>

                        <section>
                            <h2>7. Governing Law</h2>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Bearing operates, without regard to its conflict of law provisions.
                            </p>
                        </section>
                    </div>

                    <div className={styles.footer}>
                        <Link href="/" className={styles.backLink}>
                            <ArrowLeft size={18} />
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
