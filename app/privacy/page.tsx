'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import styles from '@/components/layout/LegalPage.module.css';

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <main className={styles.page}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.header}>
                        <h1>Privacy Policy</h1>
                        <p className={styles.lastUpdated}>Last updated: February 11, 2026</p>
                    </div>

                    <div className={styles.content}>
                        <section>
                            <p>
                                At Bearing, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our career companion platform.
                            </p>
                        </section>

                        <section>
                            <h2>1. Information We Collect</h2>
                            <p>To provide personalized career guidance, we collect the following types of information:</p>
                            <ul>
                                <li><strong>Account Information:</strong> Name, email address, and authentication credentials.</li>
                                <li><strong>Career Profile:</strong> Your current skills, interests, educational background, and career goals.</li>
                                <li><strong>Usage Data:</strong> How you interact with our roadmaps, search for paths, and use our AI mentor.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>2. How We Use Your Data</h2>
                            <p>We use your information to:</p>
                            <ul>
                                <li>Generate personalized career roadmaps and skill gap analyses.</li>
                                <li>Provide AI-driven mentorship and advice tailored to your goals.</li>
                                <li>Improve our algorithms and path recommendations.</li>
                                <li>Communicate with you regarding account updates and new features.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>3. AI Mentorship & Data Processing</h2>
                            <p>
                                Bearing utilizes advanced AI models to provide career guidance. Please note that:
                            </p>
                            <ul>
                                <li>Your profile data is processed by our AI systems to generate relevant insights.</li>
                                <li>We do not sell your personal data to third parties for advertising.</li>
                                <li>AI interactions are monitored for quality assurance and system improvement.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>4. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2>5. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access the personal data we hold about you.</li>
                                <li>Request the correction or deletion of your data.</li>
                                <li>Opt-out of specific data processing activities.</li>
                                <li>Export your data in a portable format.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>6. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:privacy@bearing.ai">privacy@bearing.ai</a>.
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
