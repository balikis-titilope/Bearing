import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/auth';

export async function POST(request: Request) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { enrollmentId, passed, score } = body;

        if (!enrollmentId) {
            return NextResponse.json({ error: 'Missing enrollmentId' }, { status: 400 });
        }

        const enrollment = await db.enrollment.findUnique({
            where: { id: enrollmentId },
            include: {
                careerPath: {
                    include: {
                        levels: {
                            orderBy: { order: 'asc' }
                        }
                    }
                }
            }
        });

        if (!enrollment || enrollment.userId !== session.user.id) {
            return NextResponse.json({ error: 'Enrollment not found' }, { status: 404 });
        }

        if (passed) {
            // If passed, set status to ACTIVE and keep current level
            await db.enrollment.update({
                where: { id: enrollmentId },
                data: {
                    status: 'ACTIVE',
                    assessmentStatus: 'COMPLETED',
                }
            });
        } else {
            // If failed, demote to Level 1 (Beginner)
            const level1 = enrollment.careerPath.levels.find(l => l.order === 1);

            await db.enrollment.update({
                where: { id: enrollmentId },
                data: {
                    status: 'ACTIVE',
                    assessmentStatus: 'COMPLETED',
                    currentLevelId: level1?.id,
                    claimedLevel: 1
                }
            });

            // Clear skill progress for the intermediate level and create for level 1
            if (level1) {
                await db.skillProgress.deleteMany({
                    where: { enrollmentId }
                });

                const level1Skills = await db.skill.findMany({
                    where: { levelId: level1.id }
                });

                await db.skillProgress.createMany({
                    data: level1Skills.map(s => ({
                        enrollmentId,
                        skillId: s.id,
                        status: 'NOT_STARTED'
                    }))
                });
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Assessment result error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
