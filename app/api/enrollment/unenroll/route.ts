import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/auth';

export async function POST(request: Request) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const userId = session.user.id;

        // 1. Get User and check cooldown
        const user = await db.user.findUnique({
            where: { id: userId },
            select: { lastPathSwitchAt: true }
        });

        // @ts-ignore - Prisma types may be out of sync
        if (user?.lastPathSwitchAt) {
            const now = new Date();
            // @ts-ignore
            const lastSwitch = new Date(user.lastPathSwitchAt);
            const diffTime = Math.abs(now.getTime() - lastSwitch.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays < 7) {
                return NextResponse.json(
                    { error: `You recently switched paths. Please wait ${7 - diffDays} more days before switching again.` },
                    { status: 403 }
                );
            }
        }

        // 2. Get active enrollment
        const enrollment = await db.enrollment.findFirst({
            where: {
                userId,
                status: { in: ['ACTIVE', 'ASSESSING', 'ENROLLED'] }
            },
            include: {
                careerPath: {
                    include: {
                        levels: {
                            orderBy: { order: 'asc' },
                            include: {
                                skills: true,
                                projects: true
                            }
                        }
                    }
                },
                skillProgress: true,
                projectProgress: true
            }
        });

        if (!enrollment) {
            return NextResponse.json(
                { error: 'No active enrollment found.' },
                { status: 404 }
            );
        }

        // 3. Calculate Progress
        const totalSkills = enrollment.careerPath.levels.reduce((acc, l) => acc + l.skills.length, 0);
        const completedSkills = enrollment.skillProgress.filter(p => p.status === 'COMPLETED').length;
        const progressPercentage = totalSkills > 0 ? (completedSkills / totalSkills) * 100 : 0;

        // Check if the current level is completed
        const currentLevel = enrollment.careerPath.levels.find(l => l.id === enrollment.currentLevelId);
        const currentLevelSkills = currentLevel?.skills || [];
        const completedLevelSkills = enrollment.skillProgress.filter(p =>
            currentLevelSkills.some(s => s.id === p.skillId) && p.status === 'COMPLETED'
        ).length;

        // Check for final project pass
        const levelProject = enrollment.projectProgress.find(p =>
            enrollment.careerPath.levels.find(l => l.id === enrollment.currentLevelId)?.projects.some(proj => proj.id === p.projectId && proj.isFinalProject)
            && p.status === 'PASSED'
        );

        const isLevelCompleted = currentLevelSkills.length > 0 && completedLevelSkills === currentLevelSkills.length && levelProject;

        // 4. Decision Logic
        const isGracePeriod = progressPercentage < 20;
        const canUnenroll = isGracePeriod || isLevelCompleted;

        if (!canUnenroll) {
            return NextResponse.json(
                {
                    error: 'Strategic Commitment Required',
                    message: 'You have made significant progress (> 20%) but haven\'t finished this level yet. To ensure mastery, you must either complete the current level or be in the early discovery phase to switch.'
                },
                { status: 403 }
            );
        }

        // 5. Execute Unenrollment
        if (isGracePeriod) {
            // HARD WIPE for Grace Period
            await db.enrollment.delete({
                where: { id: enrollment.id }
            });
        } else {
            // SOFT ARCHIVE for Milestone
            await db.enrollment.update({
                where: { id: enrollment.id },
                data: { status: 'ARCHIVED' }
            });
        }

        // Update User Switch Cooldown
        await db.user.update({
            where: { id: userId },
            data: {
                // @ts-ignore
                lastPathSwitchAt: new Date(),
                activePathId: null
            }
        });

        return NextResponse.json({
            success: true,
            type: isGracePeriod ? 'WIPED' : 'ARCHIVED',
            message: isGracePeriod
                ? 'Path reset successfully. You are now free to choose a new career direction.'
                : 'Level achievement preserved! Your enrollment has been archived, and you can now explore a new path.'
        });

    } catch (error) {
        console.error('Unenrollment error:', error);
        return NextResponse.json(
            { error: 'Failed to process unenrollment' },
            { status: 500 }
        );
    }
}
