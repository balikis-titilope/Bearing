import { db } from "@/lib/db";
import { auth } from "@/auth";
import { isSuperAdmin } from "@/lib/permissions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!isSuperAdmin(session?.user)) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { userId, action } = body;

        if (!userId) {
            return new NextResponse("User ID required", { status: 400 });
        }

        switch (action) {
            case 'reset-progress':
                // Reset all progress for the user
                await db.skillProgress.deleteMany({
                    where: { enrollment: { userId } }
                });
                await db.projectSubmission.deleteMany({
                    where: { enrollment: { userId } }
                });
                await db.userAssessment.deleteMany({
                    where: { userId }
                });
                await db.userProgress.deleteMany({
                    where: { userId }
                });
                break;

            case 'unlock-all-levels':
                // This is a complex one, usually involves updating enrollment status
                // For simulation, we might just set all skills to completed
                const enrollments = await db.enrollment.findMany({ where: { userId } });
                for (const enrollment of enrollments) {
                    // Get all skills for this career path
                    const skills = await db.skill.findMany({
                        where: { level: { careerPathId: enrollment.careerPathId } }
                    });

                    for (const skill of skills) {
                        await db.skillProgress.upsert({
                            where: { enrollmentId_skillId: { enrollmentId: enrollment.id, skillId: skill.id } },
                            update: { status: 'COMPLETED' },
                            create: { enrollmentId: enrollment.id, skillId: skill.id, status: 'COMPLETED' }
                        });
                    }
                }
                break;

            case 'simulate-ready':
                // Set high scores to simulate readiness
                await db.skillProgress.updateMany({
                    where: { enrollment: { userId } },
                    data: { currentScore: 85, bestScore: 90 }
                });
                break;

            default:
                return new NextResponse("Invalid action", { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("[ADMIN_SIMULATE_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
