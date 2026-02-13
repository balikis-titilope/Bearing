"use client";

import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';
import { Compass, User, LogOut } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { logout } from '@/actions/logout';
import { ScrollProgress } from '../ui/ScrollProgress';

export const PathsNavbar: React.FC = () => {
    const { data: session } = useSession();

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

                <div className={styles.links}>
                    {session ? (
                        /* App Links for Logged In Users */
                        <>
                            <Link href="/dashboard" className={styles.link}>Dashboard</Link>
                            <Link href="/projects" className={styles.link}>Projects</Link>
                            <Link href="/paths" className={styles.link} style={{ color: 'var(--primary)' }}>All Paths</Link>
                        </>
                    ) : (
                        /* Landing Page Scroll Links for Visitors */
                        <>
                            <a
                                href="#how-it-works"
                                className={styles.link}
                            >
                                How It Works
                            </a>
                            <a
                                href="#paths"
                                className={styles.link}
                            >
                                Career Paths
                            </a>
                            <a
                                href="#highlight"
                                className={styles.link}
                            >
                                Features
                            </a>
                        </>
                    )}
                </div>

                <div className={styles.actions}>
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
                            <Link href="/login" className={`${styles.link} ${styles.loginBtn}`}>
                                Log in
                            </Link>
                            <Link href="/register" className={`${styles.link} ${styles.registerBtn}`}>
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <ScrollProgress />
        </nav>
    );
};