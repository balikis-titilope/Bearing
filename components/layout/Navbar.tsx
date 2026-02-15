"use client";

import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';
import { Compass, User, LogOut } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { ScrollProgress } from '../ui/ScrollProgress';
import { useHasMounted } from '@/hooks/useHasMounted';

export const Navbar: React.FC = () => {
    const { data: session } = useSession();
    const hasMounted = useHasMounted();

    const onLogout = () => {
        signOut({ callbackUrl: '/' });
    };

    const handleScrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            // Always scroll, even if we're already at this section
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    // Force scroll to top on page load, ignoring hash
    useEffect(() => {
        // Clear the hash from the URL without triggering a scroll or page reload
        if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname);
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <nav className={styles.nav} role="navigation" aria-label="Main navigation">
            <div className={`${styles.container} container`}>
                <Link href="/" className={styles.logo} aria-label="Bearing - Home">
                    <Compass className={styles.icon} />
                    <span>Bearing</span>
                </Link>

                <div className={styles.links} role="menubar">
                    {hasMounted && (session ? (
                        /* App Links for Logged In Users */
                        <>
                            <Link href="/dashboard" className={styles.link} role="menuitem">Dashboard</Link>
                            {(session?.user?.role === "ADMIN" || session?.user?.role === "SUPER_ADMIN") && (
                                <Link href="/admin" className={`${styles.link} ${styles.adminLink}`} role="menuitem">Admin Hub</Link>
                            )}
                            <Link href="/projects" className={styles.link} role="menuitem">Projects</Link>
                            <Link href="/paths" className={styles.link} role="menuitem">All Paths</Link>
                        </>
                    ) : (
                        /* Landing Page Scroll Links for Visitors */
                        <>
                            <a
                                href="#how-it-works"
                                className={styles.link}
                                onClick={(e) => handleScrollToSection(e, 'how-it-works')}
                                role="menuitem"
                            >
                                How It Works
                            </a>
                            <a
                                href="#paths"
                                className={styles.link}
                                onClick={(e) => handleScrollToSection(e, 'paths')}
                                role="menuitem"
                            >
                                Career Paths
                            </a>
                            <a
                                href="#highlight"
                                className={styles.link}
                                onClick={(e) => handleScrollToSection(e, 'highlight')}
                                role="menuitem"
                            >
                                Features
                            </a>
                        </>
                    ))}
                </div>

                <div className={styles.actions}>
                    <ThemeToggle />
                    {hasMounted && (session ? (
                        <div className={styles.userSection}>
                            <div className={styles.userProfile}>
                                <User size={18} />
                                <span>{session.user?.name?.split(' ')[0]}</span>
                            </div>
                            <Button variant="ghost" size="sm" onClick={onLogout} className={styles.logoutBtn}>
                                <LogOut size={18} />
                                <span>Log out</span>
                            </Button>
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className={`${styles.link} ${styles.loginBtn}`}>
                                Log in
                            </Link>
                            <Link href="/register" className={`${styles.link} ${styles.registerBtn}`}>
                                Get Started
                            </Link>
                        </>
                    ))}
                </div>
            </div>
            <ScrollProgress />
        </nav>
    );
};
