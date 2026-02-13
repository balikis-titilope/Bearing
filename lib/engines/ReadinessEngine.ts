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
        include: {
            skills: true,
        }
    });

    const levelIds = levels.map(l => l.id);

    // 2. Fetch enrollment and progress
    const enrollment = userId !== "guest" ? await db.enrollment.findUnique({
        where: { userId_careerPathId: { userId, careerPathId } },
        include: {
            skillProgress: true,
            projectProgress: {
                include: { project: true }
            }
        }
    }) : null;

    // 3. Totals
    const totalSkills = levels.reduce((acc, l) => acc + l.skills.length, 0);
    const completedSkills = enrollment?.skillProgress.filter(p => p.status === "COMPLETED").length || 0;

    const totalProjects = await db.project.count({
        where: { levelId: { in: levelIds } },
    });
    const completedProjects = enrollment?.projectProgress.filter(p => p.status === "PASSED").length || 0;

    const skillScore = totalSkills > 0 ? (completedSkills / totalSkills) * 50 : 0;
    const projectScore = totalProjects > 0 ? (completedProjects / totalProjects) * 50 : 0;

    return {
        overallReadiness: Math.round(skillScore + projectScore),
        skillProgress: {
            completed: completedSkills,
            total: totalSkills,
            percentage: Math.round(totalSkills > 0 ? (completedSkills / totalSkills) * 100 : 0),
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
            whatChanges: level.description,
            requirements: "",
            order: level.order,
            careerPathId: level.careerPathId,
            isUnlocked: true,
        })),
    };
}
