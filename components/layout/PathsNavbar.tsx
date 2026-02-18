"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';
import { Compass, User, LogOut, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { logout } from '@/actions/logout';
import { ScrollProgress } from '../ui/ScrollProgress';

export const PathsNavbar: React.FC = () => {
    const { data: session } = useSession();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const onLogout = () => {
        logout();
    };

    return (
        <nav className={styles.nav}>
            <div className={`${styles.container} container`}>
                <Link href="/" className={styles.logo}>
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
                    {session ? (
                        <>
                            <Link href="/dashboard" className={styles.link}>Dashboard</Link>
                            <Link href="/projects" className={styles.link}>Projects</Link>
                            <Link href="/paths" className={styles.link} style={{ color: 'var(--primary)' }}>All Paths</Link>
                        </>
                    ) : (
                        <>
                            <a href="#how-it-works" className={styles.link}>How It Works</a>
                            <a href="#paths" className={styles.link}>Career Paths</a>
                            <a href="#highlight" className={styles.link}>Features</a>
                        </>
                    )}
                </div>

                <div className={styles.desktopActions}>
                    <ThemeToggle />
                    {session ? (
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
                    )}
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                    <div className={styles.mobileLinks}>
                        {session ? (
                            <>
                                <Link href="/dashboard" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                                <Link href="/projects" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                                <Link href="/paths" className={styles.link} style={{ color: 'var(--primary)' }} onClick={() => setMobileMenuOpen(false)}>All Paths</Link>
                            </>
                        ) : (
                            <>
                                <a href="#how-it-works" className={styles.link} onClick={() => setMobileMenuOpen(false)}>How It Works</a>
                                <a href="#paths" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Career Paths</a>
                                <a href="#highlight" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Features</a>
                            </>
                        )}
                    </div>
                    <div className={styles.mobileActions}>
                        <div className={styles.mobileToggles}>
                            <ThemeToggle />
                        </div>
                        {session ? (
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
                        )}
                    </div>
                </div>
            </div>
            <ScrollProgress />
        </nav>
    );
};