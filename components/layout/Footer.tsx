"use client";

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '../ui/Button';
import { Linkedin, Compass } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    const { data: session } = useSession();

    return (
        <footer className={styles.footer}>
            {/* Ambient Background - Moved from Hero for better placement */}
            <div className={styles.ambientOverlay} aria-hidden="true">
                <div className={`${styles.glow} ${styles.glow1}`}></div>
                <div className={`${styles.glow} ${styles.glow2}`}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <Compass size={32} className={styles.logoIcon} />
                            <h3>Bearing</h3>
                        </div>
                        <p className={styles.tagline}>Your compass for a successful career in tech.</p>
                        <div className={styles.brandAction}>
                            {session ? (
                                <Button variant="primary" className={styles.footerBtn} onClick={() => signOut({ callbackUrl: '/' })}>
                                    Sign Out
                                </Button>
                            ) : (
                                <Link href="/register">
                                    <Button variant="primary" className={styles.footerBtn}>
                                        Create a free account
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className={styles.linksContainer}>
                        <div className={styles.links}>
                            <h4>Student Safety</h4>
                            <ul>
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                                <li><Link href="/terms">Terms of Service</Link></li>
                            </ul>
                        </div>

                        <div className={styles.links}>
                            <h4>Let’s Connect</h4>
                            <ul>
                                <li><Link href="/contact">Contact Us</Link></li>
                                <li className={styles.socialLink}>
                                    <Linkedin size={18} />
                                    <a href="https://linkedin.com/in/balikis-titilope" target="_blank" rel="noopener noreferrer">
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Bearing. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
