import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/db';
import { auth } from '@/auth';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from '@/components/ui/Button';
import {
    ArrowLeft,
    MapPin,
    Lightbulb,
    ExternalLink,
    CheckCircle2,
    HelpCircle,
    Play,
    CheckCircle,
    XCircle,
    Clock,
    AlertCircle,
    RotateCcw
} from 'lucide-react';
import styles from './page.module.css';

interface ProjectGuidePageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProjectGuidePage({ params }: ProjectGuidePageProps) {
    const { id } = await params;
    const session = await auth();
    const userId = session?.user?.id;

    const project = await db.project.findUnique({
        where: { id },
        include: {
            skill: true,
            level: {
                include: {
                    careerPath: true
                }
            }
        }
    });

    if (!project) {
        notFound();
    }

    // Fetch submission if user is logged in
    const submission = userId ? await db.projectSubmission.findFirst({
        where: {
            projectId: id,
            enrollment: {
                userId: userId
            }
        }
    }) : null;

    const safeParse = (data: any, fallback: any = []) => {
        if (!data) return fallback;
        try {
            let parsed = typeof data === 'string' ? JSON.parse(data) : data;
            // Handle double-stringification recursively
            while (typeof parsed === 'string') {
                try {
                    const next = JSON.parse(parsed);
                    if (next === parsed) break; // Prevent infinite loop if it's just a string that happens to look like JSON
                    parsed = next;
                } catch {
                    break;
                }
            }
            return Array.isArray(parsed) ? parsed : fallback;
        } catch (e) {
            return fallback;
        }
    };

    const guideSteps = safeParse(project.guide);
    const hints = safeParse(project.hints);
    const stuckLinks = safeParse(project.stuckLinks);
    const requirements = safeParse(project.requirements);

    const isPassed = submission?.status === 'PASSED';
    const isFailed = submission?.status === 'FAILED';

    return (
        <>
            <Navbar />
            <main className={styles.page}>
                <div className={styles.container}>
                    {/* Breadcrumb & Navigation */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <Link href="/projects" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem' }}>
                            <ArrowLeft size={16} />
                            Back to Projects
                        </Link>
                    </div>

                    {/* Header */}
                    <header className={styles.header}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>
                                {project.isMiniProject ? 'Mini Project' : 'Final Project'}
                            </span>
                            <span style={{ color: '#3f3f46' }}>•</span>
                            <span style={{ color: '#71717a', fontSize: '0.8rem' }}>
                                {project.skill?.title || 'General Skill'}
                            </span>
                        </div>
                        <h1 className={styles.title}>{project.title}</h1>
                        <p className={styles.description}>{project.description}</p>
                    </header>

                    {/* Autograder Status Banner (If submission exists) */}
                    {submission && (
                        <div className={`${styles.statusBanner} ${isPassed ? styles.passed : isFailed ? styles.failed : styles.pending}`}>
                            <div className={styles.statusHeader}>
                                <div className={styles.statusLabel}>
                                    {isPassed ? <CheckCircle size={20} /> : isFailed ? <XCircle size={20} /> : <Clock size={20} />}
                                    <span>
                                        {isPassed ? 'Verification Passed' : isFailed ? 'Verification Failed' : 'Under Review'}
                                    </span>
                                </div>
                                {submission.score !== null && (
                                    <div className={styles.statusScore}>
                                        Score: <strong>{submission.score}%</strong>
                                    </div>
                                )}
                            </div>

                            {submission.feedback && (
                                <div className={styles.statusFeedback}>
                                    <h4>Automated Evaluation Report:</h4>
                                    <ul>
                                        {submission.feedback.split('\n').map((line, i) => (
                                            <li key={i}>{line}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className={styles.statusMeta}>
                                <span>Checked on {new Date(submission.submittedAt).toLocaleString()}</span>
                                <Link href={`/paths/${project.level.careerPath.slug}/learn/project/${project.id}`} className={styles.retryLink}>
                                    {isPassed ? 'View Details' : 'Improve & Resubmit'}
                                    <ExternalLink size={14} />
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Core Guide */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <MapPin size={24} color="var(--primary)" />
                            Step-by-Step Implementation Guide
                        </h2>
                        <div className={styles.guideList}>
                            {guideSteps.length > 0 ? (
                                guideSteps.map((step: string, index: number) => (
                                    <div key={index} className={styles.guideStep}>
                                        <div className={styles.stepNumber}>{index + 1}</div>
                                        <div className={styles.stepText}>{step}</div>
                                    </div>
                                ))
                            ) : (
                                <p style={{ color: '#71717a' }}>No specific steps provided for this project.</p>
                            )}
                        </div>
                    </section>

                    {/* Requirements Check-off */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <CheckCircle2 size={24} color="#10b981" />
                            Core Requirements
                        </h2>
                        <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '1rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {requirements.map((req: string, index: number) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#d4d4d8' }}>
                                        <div style={{ marginTop: '3px' }}><CheckCircle2 size={16} color="#10b981" /></div>
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Intelligent Hints */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <Lightbulb size={24} color="#f59e0b" />
                            Strategic Engineering Hints
                        </h2>
                        <div className={styles.hintsGrid}>
                            {hints.length > 0 ? (
                                hints.map((hint: string, index: number) => (
                                    <div key={index} className={styles.hintCard}>
                                        <h4>Hint #{index + 1}</h4>
                                        <p className={styles.hintText}>{hint}</p>
                                    </div>
                                ))
                            ) : (
                                <p style={{ color: '#71717a' }}>Take small steps and experiment. Good luck!</p>
                            )}
                        </div>
                    </section>

                    {/* Stuck? Resources */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <HelpCircle size={24} color="#ef4444" />
                            Still Stuck? Deep Dive Solutions
                        </h2>
                        <div className={styles.linksList}>
                            {stuckLinks.length > 0 ? (
                                stuckLinks.map((link: { title: string, url: string }, index: number) => (
                                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                                        <span className={styles.linkTitle}>{link.title}</span>
                                        <ExternalLink size={16} color="#10b981" />
                                    </a>
                                ))
                            ) : (
                                <p style={{ color: '#71717a' }}>Check the official documentation for the relevant skill.</p>
                            )}
                        </div>
                        <div className={styles.stuckNote}>
                            Tip: If you're struggling, try to rebuild a simpler version of the requirement first.
                        </div>
                    </section>

                    {/* Submit Section - Only for Final Projects */}
                    {project.level?.careerPath?.slug && !project.isMiniProject && (
                        <section className={styles.submitSection}>
                            <div className={styles.submitCard}>
                                <div>
                                    <h3>Project Completion & Submission</h3>
                                    <p>Once you have implemented all Meta-standard requirements and verified your solution, proceed to the final submission.</p>
                                </div>
                                <Link href={`/paths/${project.level.careerPath.slug}/learn/project/${project.id}`}>
                                    <Button variant="primary">
                                        Submit Project
                                        <Play size={16} />
                                    </Button>
                                </Link>
                            </div>
                        </section>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
