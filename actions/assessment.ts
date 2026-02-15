'use server';

import { db } from "@/lib/db";
import { auth } from "@/auth";

export async function saveSkillScore(enrollmentId: string, skillId: string, score: number) {
    const session = await auth();

    if (!session?.user?.id) {
        return { error: "Unauthorized" };
    }

    try {
        // Find existing progress or create new
        const existingProgress = await db.skillProgress.findUnique({
            where: {
                enrollmentId_skillId: {
                    enrollmentId,
                    skillId,
                },
            },
        });

        if (existingProgress) {
            // Update existing progress
            // Only update bestScore if the new score is higher
            const newBestScore = Math.max(existingProgress.bestScore || 0, score);

            await db.skillProgress.update({
                where: {
                    id: existingProgress.id,
                },
                data: {
                    currentScore: score,
                    bestScore: newBestScore,
                    // If passed (>=70) and not completed, mark as completed? 
                    // Optional: status: score >= 70 ? 'COMPLETED' : existingProgress.status
                },
            });
        } else {
            // Create new progress record
            await db.skillProgress.create({
                data: {
                    enrollmentId,
                    skillId,
                    status: 'IN_PROGRESS',
                    currentScore: score,
                    bestScore: score,
                },
            });
        }

        return { success: true };
    } catch (error) {
        console.error("Failed to save skill score:", error);
        return { error: "Failed to save score" };
    }
}
