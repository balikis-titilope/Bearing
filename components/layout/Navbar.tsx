"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';
import { Compass, User, LogOut, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { AdminModeToggle } from '../ui/AdminModeToggle';
import { ScrollProgress } from '../ui/ScrollProgress';
import { useHasMounted } from '@/hooks/useHasMounted';

export const Navbar: React.FC = () => {
    const { data: session } = useSession();
    const hasMounted = useHasMounted();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const onLogout = () => {
        signOut({ callbackUrl: '/' });
    };

    const handleScrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMobileMenuOpen(false);
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

                <button
                    className={styles.mobileToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={styles.desktopLinks}>
                    {hasMounted && (session ? (
                        <>
                            <Link href="/dashboard" className={styles.link}>Dashboard</Link>
                            {(session?.user?.role === "ADMIN" || session?.user?.role === "SUPER_ADMIN") && (
                                <Link href="/admin" className={`${styles.link} ${styles.adminLink}`}>Admin Hub</Link>
                            )}
                            <Link href="/projects" className={styles.link}>Projects</Link>
                            <Link href="/paths" className={styles.link}>All Paths</Link>
                        </>
                    ) : (
                        <>
                            <a href="#how-it-works" className={styles.link} onClick={(e) => handleScrollToSection(e, 'how-it-works')}>How It Works</a>
                            <a href="#paths" className={styles.link} onClick={(e) => handleScrollToSection(e, 'paths')}>Career Paths</a>
                            <a href="#highlight" className={styles.link} onClick={(e) => handleScrollToSection(e, 'highlight')}>Features</a>
                        </>
                    ))}
                </div>

                <div className={styles.desktopActions}>
                    <AdminModeToggle />
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
                            <Link href="/login" className={`${styles.link} ${styles.loginBtn}`}>Log in</Link>
                            <Link href="/register" className={`${styles.link} ${styles.registerBtn}`}>Get Started</Link>
                        </>
                    ))}
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                    <div className={styles.mobileLinks}>
                        {hasMounted && (session ? (
                            <>
                                <Link href="/dashboard" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                                {(session?.user?.role === "ADMIN" || session?.user?.role === "SUPER_ADMIN") && (
                                    <Link href="/admin" className={`${styles.link} ${styles.adminLink}`} onClick={() => setMobileMenuOpen(false)}>Admin Hub</Link>
                                )}
                                <Link href="/projects" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                                <Link href="/paths" className={styles.link} onClick={() => setMobileMenuOpen(false)}>All Paths</Link>
                            </>
                        ) : (
                            <>
                                <a href="#how-it-works" className={styles.link} onClick={(e) => handleScrollToSection(e, 'how-it-works')}>How It Works</a>
                                <a href="#paths" className={styles.link} onClick={(e) => handleScrollToSection(e, 'paths')}>Career Paths</a>
                                <a href="#highlight" className={styles.link} onClick={(e) => handleScrollToSection(e, 'highlight')}>Features</a>
                            </>
                        ))}
                    </div>
                    <div className={styles.mobileActions}>
                        <div className={styles.mobileToggles}>
                            <AdminModeToggle />
                            <ThemeToggle />
                        </div>
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
                                <Link href="/login" className={`${styles.link} ${styles.loginBtn}`}>Log in</Link>
                                <Link href="/register" className={`${styles.link} ${styles.registerBtn}`}>Get Started</Link>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <ScrollProgress />
        </nav>
    );
};
