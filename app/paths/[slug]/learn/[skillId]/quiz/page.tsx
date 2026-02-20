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

export default async function SkillQuizPage({ params }: PageProps) {
    const { slug, skillId } = await params;
    const session = await auth();

    if (!session?.user?.id) {
        return notFound();
    }

    const userId = session.user.id;

    // Get enrollment with the skill and questions
    const enrollment = await db.enrollment.findFirst({
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
