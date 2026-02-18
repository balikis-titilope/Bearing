'use client';

import { PathsNavbar } from '@/components/layout/PathsNavbar';
import { Footer } from '@/components/layout/Footer';
import { PathsHero } from '@/components/sections/PathsHero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';
import { careerPaths } from '@/data/careerPaths';
import * as Icons from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useState, useMemo } from 'react';

export default function CareerPathsPage() {
    const { data: session } = useSession();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPaths = useMemo(() => {
        return careerPaths.filter((path) => {
            // Search logic
            const matchesSearch = searchQuery === '' ||
                path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                path.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                path.skills.some((skill) =>
                    skill.name.toLowerCase().includes(searchQuery.toLowerCase())
                );

            // Category chip logic
            const matchesCategory = activeCategory === 'All' || path.category === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    const clearFilters = () => {
        setActiveCategory('All');
        setSearchQuery('');
    };

    const hasActiveFilters = Boolean(activeCategory !== 'All' || searchQuery !== '');

    return (
        <>
            <PathsNavbar />
            <PathsHero
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                clearFilters={clearFilters}
            >
                {hasActiveFilters && (
                    <div className={styles.resultsInfo}>
                        <p>Showing {filteredPaths.length} of {careerPaths.length} career paths</p>
                    </div>
                )}

                <div className={styles.grid}>
                    {filteredPaths.map((path) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const IconComponent = (Icons as any)[path.icon] || Icons.HelpCircle;

                        return (
                            <Link href={session ? `/paths/${path.slug}` : "/register"} key={path.id}>
                                <Card className={styles.pathCard}>
                                    <div className={styles.iconWrapper}>
                                        <IconComponent size={24} className={styles.icon} />
                                    </div>
                                    <h3>{path.title}</h3>
                                    <p>{path.description}</p>

                                    <div className={styles.skills}>
                                        {path.skills.slice(0, 3).map((skill) => (
                                            <span key={skill.id} className={`${styles.skill} ${styles[skill.category]}`}>
                                                {skill.name}
                                            </span>
                                        ))}
                                        {path.skills.length > 3 && (
                                            <span className={styles.moreSkills}>+{path.skills.length - 3} more</span>
                                        )}
                                    </div>

                                    <div className={styles.footer}>
                                        <div className={styles.meta}>
                                            <span>{path.skills.length} skills</span>
                                            <span>{path.responsibilities.length} responsibilities</span>
                                        </div>
                                        <ChevronRight size={18} className={styles.arrow} />
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </PathsHero>

            <main className={styles.page} id="main-content">
                <div className="container">
                    <div className={styles.cta}>
                        <h2>Not sure which path to choose?</h2>
                        <p>Take our quick assessment to get personalized recommendations based on your interests and goals.</p>
                        {session ? (
                            <Link href="/assessment">
                                <Button variant="primary" size="lg">Take Assessment</Button>
                            </Link>
                        ) : (
                            <Link href="/register">
                                <Button variant="primary" size="lg">Take Assessment</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}