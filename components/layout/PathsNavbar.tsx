"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';
import { Compass, User, LogOut, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { ScrollProgress } from '../ui/ScrollProgress';
import { useHasMounted } from '@/hooks/useHasMounted';

export const PathsNavbar: React.FC = () => {
    const { data: session } = useSession();
    const pathname = usePathname();
    const hasMounted = useHasMounted();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const onLogout = () => {
        signOut({ callbackUrl: '/' });
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
                    {hasMounted && (session ? (
                        <>
                            <Link href="/dashboard" className={`${styles.link} ${pathname === '/dashboard' ? styles.active : ''}`}>Dashboard</Link>
                            <Link href="/projects" className={`${styles.link} ${pathname === '/projects' ? styles.active : ''}`}>Projects</Link>
                            <Link href="/paths" className={`${styles.link} ${pathname === '/paths' ? styles.active : ''}`} style={{ color: 'var(--primary)' }}>All Paths</Link>
                        </>
                    ) : (
                        <></>
                    ))}
                </div>

                <div className={styles.desktopActions}>
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
                                <Link href="/dashboard" className={`${styles.link} ${pathname === '/dashboard' ? styles.active : ''}`} onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                                <Link href="/projects" className={`${styles.link} ${pathname === '/projects' ? styles.active : ''}`} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                                <Link href="/paths" className={`${styles.link} ${pathname === '/paths' ? styles.active : ''}`} style={{ color: 'var(--primary)' }} onClick={() => setMobileMenuOpen(false)}>All Paths</Link>
                            </>
                        ) : (
                            <></>
                        ))}
                    </div>
                    <div className={styles.mobileActions}>
                        <div className={styles.mobileToggles}>
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