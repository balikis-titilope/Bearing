"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Plus, Folder } from 'lucide-react';
import styles from './page.module.css';

export function ProjectsContent() {
    const [activeTab, setActiveTab] = useState('all');
    const [projects] = useState([
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Full-stack web application with React, Node.js, and PostgreSQL.',
            status: 'in-progress',
            tags: ['React', 'Node.js', 'PostgreSQL'],
            progress: 75,
            lastUpdated: '2 days ago'
        },
        {
            id: 2,
            title: 'Mobile Task Manager',
            description: 'Cross-platform mobile app for task management.',
            status: 'completed',
            tags: ['React Native', 'Firebase'],
            progress: 100,
            lastUpdated: '1 week ago'
        },
        {
            id: 3,
            title: 'AI Chat Assistant',
            description: 'Chat application powered by AI.',
            status: 'in-progress',
            tags: ['OpenAI', 'Next.js'],
            progress: 60,
            lastUpdated: '3 days ago'
        }
    ]);

    const filteredProjects = projects.filter(project => {
        if (activeTab === 'all') return true;
        if (activeTab === 'completed') return project.status === 'completed';
        if (activeTab === 'in-progress') return project.status === 'in-progress';
        return true;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return '#22c55e';
            case 'in-progress': return '#f59e0b';
            default: return '#6b7280';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'completed': return 'Completed';
            case 'in-progress': return 'In Progress';
            default: return status;
        }
    };

    return (
        <div className="container">
            <ScrollReveal direction="up" delay={0}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Your Projects</h1>
                    <p className={styles.subtitle}>
                        Track your learning progress and build your portfolio.
                    </p>

                    <div className={styles.actions}>
                        <Button variant="primary" size="sm" className={styles.newProjectBtn}>
                            <Plus size={18} />
                            New Project
                        </Button>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'all' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'in-progress' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('in-progress')}
                    >
                        In Progress
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'completed' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('completed')}
                    >
                        Completed
                    </button>
                </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
                <div className={styles.projectsGrid}>
                    {filteredProjects.map((project, index) => (
                        <ScrollReveal
                            key={project.id}
                            direction="up"
                            delay={500 + (index * 100)}
                            className={styles.projectCard}
                        >
                            <Card className={styles.projectCardInner}>
                                <div className={styles.projectHeader}>
                                    <div className={styles.projectThumbnail}>
                                        <div className={styles.projectOverlay}>
                                            <Button variant="ghost" size="sm">
                                                View Project
                                            </Button>
                                        </div>
                                    </div>

                                    <div className={styles.projectInfo}>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectDescription}>{project.description}</p>

                                        <div className={styles.projectTags}>
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className={styles.tag}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.projectFooter}>
                                    <div className={styles.projectStatus}>
                                        <div
                                            className={styles.statusIndicator}
                                            style={{ backgroundColor: getStatusColor(project.status) }}
                                        />
                                        <span className={styles.statusText}>
                                            {getStatusLabel(project.status)}
                                        </span>
                                    </div>

                                    <div className={styles.progressInfo}>
                                        <div className={styles.progressBar}>
                                            <div
                                                className={styles.progressFill}
                                                style={{ width: `${project.progress}%` }}
                                            />
                                        </div>
                                        <span className={styles.progressText}>{project.progress}%</span>
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </ScrollReveal>

            {filteredProjects.length === 0 && (
                <ScrollReveal direction="up" delay={600}>
                    <div className={styles.emptyState}>
                        <Folder size={48} />
                        <h3>No projects found</h3>
                        <p>Try adjusting your filters or create a new project.</p>
                        <Button variant="primary" className={styles.emptyStateBtn}>
                            <Plus size={18} />
                            Create Your First Project
                        </Button>
                    </div>
                </ScrollReveal>
            )}
        </div>
    );
}
