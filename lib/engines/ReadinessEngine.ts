import { db } from "@/lib/db";

export interface ReadinessLevel {
    id: string;
    title: string;
    description: string;
    whatChanges: string;
    requirements: string;
    order: number;
    careerPathId: string;
    isUnlocked: boolean;
}

export interface ReadinessScore {
    overallReadiness: number;
    skillProgress: {
        completed: number;
        total: number;
        percentage: number;
    };
    projectProgress: {
        completed: number;
        total: number;
        percentage: number;
    };
    levels: ReadinessLevel[];
}

export async function getCareerReadiness(userId: string, careerPathId: string): Promise<ReadinessScore> {
    // 1. Fetch all levels for this career
    const levels = await db.level.findMany({
        where: { careerPathId },
        orderBy: { order: "asc" },
    });

    // 2. Fetch user progress for this specific career path
    const userProgress = userId !== "guest" ? await db.userProgress.findMany({
        where: {
            userId,
            subtopic: {
                step: {
                    responsibility: {
                        careerPathId
                    }
                }
            }
        },
    }) : [];

    // 3. Fetch user projects
    const userProjects = userId !== "guest" ? await db.userProject.findMany({
        where: { userId, project: { careerPathId } },
        include: { project: true },
    }) : [];

    // 4. Calculate scores per level
    const totalSubtopics = await db.learningSubtopic.count({
        where: { step: { responsibility: { careerPathId } } },
    });
    const completedSubtopics = userProgress.filter((p) => p.completed).length;

    const totalProjects = await db.project.count({
        where: { careerPathId },
    });
    const completedProjects = userProjects.filter((p) => p.status === "COMPLETED").length;

    const skillScore = totalSubtopics > 0 ? (completedSubtopics / totalSubtopics) * 50 : 0;
    const projectScore = totalProjects > 0 ? (completedProjects / totalProjects) * 50 : 0;

    return {
        overallReadiness: Math.round(skillScore + projectScore),
        skillProgress: {
            completed: completedSubtopics,
            total: totalSubtopics,
            percentage: Math.round(totalSubtopics > 0 ? (completedSubtopics / totalSubtopics) * 100 : 0),
        },
        projectProgress: {
            completed: completedProjects,
            total: totalProjects,
            percentage: Math.round(totalProjects > 0 ? (completedProjects / totalProjects) * 100 : 0),
        },
        levels: levels.map((level: any) => ({
            id: level.id,
            title: level.title,
            description: level.description,
            whatChanges: level.whatChanges,
            requirements: level.requirements,
            order: level.order,
            careerPathId: level.careerPathId,
            isUnlocked: true, // Placeholder for logic
        })),
    };
}
