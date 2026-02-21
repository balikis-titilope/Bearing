"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';
import { Compass, User, LogOut, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { AdminModeToggle } from '../ui/AdminModeToggle';
import { ScrollProgress } from '../ui/ScrollProgress';
import { useHasMounted } from '@/hooks/useHasMounted';

import { Session } from 'next-auth';

interface NavbarProps {
    session?: Session | null;
}

export const Navbar: React.FC<NavbarProps> = ({ session: initialSession }) => {
    const { data: clientSession } = useSession();
    const session = clientSession || initialSession;
    const pathname = usePathname();
    const hasMounted = useHasMounted();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    // Routes where the Navbar should be hidden
    const noNavbarRoutes = ['/login', '/register', '/contact'];
    const isHidden = noNavbarRoutes.includes(pathname);

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

    // Active section detection
    useEffect(() => {
        const sections = ['highlight', 'how-it-works', 'paths', 'philosophy'];

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Detect when section is in the upper part of viewport
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Force scroll to top on page load, ignoring hash
    useEffect(() => {
        // Clear the hash from the URL without triggering a scroll or page reload
        if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname);
        }
        window.scrollTo(0, 0);
    }, []);

    const navLinks = [
        { id: 'highlight', label: 'Features' },
        { id: 'philosophy', label: 'Our Philosophy' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'paths', label: 'Career Paths' },
    ];

    if (isHidden) return null;

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
                            <Link href="/dashboard" className={`${styles.link} ${pathname === '/dashboard' ? styles.active : ''}`}>Dashboard</Link>
                            {(session?.user?.role === "ADMIN" || session?.user?.role === "SUPER_ADMIN") && (
                                <Link href="/admin" className={`${styles.link} ${styles.adminLink} ${pathname === '/admin' ? styles.active : ''}`}>Admin Hub</Link>
                            )}
                            <Link href="/projects" className={`${styles.link} ${pathname === '/projects' ? styles.active : ''}`}>Projects</Link>
                            <Link href="/paths" className={`${styles.link} ${pathname === '/paths' ? styles.active : ''}`}>All Paths</Link>
                            <Link href="/contact" className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link>
                        </>
                    ) : (
                        <>
                            {navLinks.map(link => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    className={`${styles.link} ${activeSection === link.id ? styles.active : ''}`}
                                    onClick={(e) => handleScrollToSection(e, link.id)}
                                >
                                    {link.label}
                                </a>
                            ))}
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
                                <Link href="/dashboard" className={`${styles.link} ${pathname === '/dashboard' ? styles.active : ''}`} onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                                {(session?.user?.role === "ADMIN" || session?.user?.role === "SUPER_ADMIN") && (
                                    <Link href="/admin" className={`${styles.link} ${styles.adminLink} ${pathname === '/admin' ? styles.active : ''}`} onClick={() => setMobileMenuOpen(false)}>Admin Hub</Link>
                                )}
                                <Link href="/projects" className={`${styles.link} ${pathname === '/projects' ? styles.active : ''}`} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                                <Link href="/paths" className={`${styles.link} ${pathname === '/paths' ? styles.active : ''}`} onClick={() => setMobileMenuOpen(false)}>All Paths</Link>
                                <Link href="/contact" className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                            </>
                        ) : (
                            <>
                                {navLinks.map(link => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`${styles.link} ${activeSection === link.id ? styles.active : ''}`}
                                        onClick={(e) => {
                                            handleScrollToSection(e, link.id);
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
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
        </nav>
    );
};
