import { db } from "@/lib/db";
import { cache } from "react";

// Cache the result for the duration of the request
export const getCareerPath = cache(async (slug: string) => {
    return await db.careerPath.findUnique({
        where: { slug },
        include: {
            levels: {
                orderBy: { order: 'asc' },
                include: {
                    skills: {
                        orderBy: { order: 'asc' },
                    },
                },
            },
        },
    });
});

export const getAllCareerPathSlugs = async () => {
    const paths = await db.careerPath.findMany({
        select: { slug: true },
    });
    return paths.map((path) => path.slug);
};
