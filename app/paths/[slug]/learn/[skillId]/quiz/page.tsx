import { notFound } from 'next/navigation';
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { QuizWrapper } from "@/components/learning/assessment/QuizWrapper";
import styles from './page.module.css';

interface PageProps {
    params: Promise<{ slug: string; skillId: string }>;
}

import { isAdmin } from '@/lib/permissions';

export default async function SkillQuizPage({ params }: PageProps) {
    const { slug, skillId } = await params;
    const session = await auth();
    const isUserAdmin = isAdmin(session?.user);

    if (!session?.user?.id) {
        return notFound();
    }

    const userId = session.user.id;

    // Get enrollment with the skill and questions
    let enrollment = await db.enrollment.findFirst({
        where: {
            userId,
            careerPath: { slug },
        },
        include: {
            careerPath: true,
            skillProgress: {
                where: { skillId },
            },
        },
    });

    // ADMIN BYPASS
    if (!enrollment && isUserAdmin) {
        const path = await db.careerPath.findUnique({
            where: { slug },
        });

        if (!path) return notFound();

        enrollment = {
            id: "admin-view",
            userId,
            careerPathId: path.id,
            status: "ACTIVE",
            careerPath: path,
            skillProgress: [],
        } as any;
    }

    if (!enrollment) {
        return notFound();
    }

    const skill = await db.skill.findUnique({
        where: { id: skillId },
        include: {
            questions: {
                orderBy: { order: 'asc' },
            },
        },
    });

    if (!skill) {
        return notFound();
    }

    const progress = enrollment.skillProgress[0];

    return (
        <>
            <Navbar />
            <main className={styles.page}>
                <div className="container">
                    <QuizWrapper
                        skill={skill}
                        enrollment={enrollment}
                        progress={progress}
                        slug={slug}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}
