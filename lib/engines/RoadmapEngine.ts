import { db } from "@/lib/db";
import { getCachedCareerPath, getCachedUserProgress } from "@/lib/cache";

export interface RoadmapSubtopic {
    id: string;
    title: string;
    isCompleted: boolean;
}

export interface RoadmapStep {
    id: string;
    title: string;
    subtopics: RoadmapSubtopic[];
}

export interface RoadmapTrack {
    id: string;
    title: string;
    steps: RoadmapStep[];
}

export async function getCareerRoadmap(careerPathId: string, userId?: string): Promise<RoadmapTrack[]> {
    const roadmap = await db.responsibility.findMany({
        where: { careerPathId },
        orderBy: { order: "asc" },
        include: {
            learningSteps: {
                orderBy: { order: "asc" },
                include: {
                    subtopics: true
                }
            }
        }
    });
    
    let userProgress: any[] = [];
    if (userId) {
        userProgress = await getCachedUserProgress(userId, careerPathId);
    }

    return roadmap.map((responsibility: any) => ({
        id: responsibility.id,
        title: responsibility.text,
        steps: responsibility.learningSteps.map((step: any) => ({
            id: step.id,
            title: step.title,
            subtopics: step.subtopics.map((subtopic: any) => ({
                id: subtopic.id,
                title: subtopic.title,
                isCompleted: userProgress.some(
                    (progress: any) => progress.subtopicId === subtopic.id && progress.completed
                )
            }))
        }))
    }));
}
