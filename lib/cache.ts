import { db } from '@/lib/db';

// Simple in-memory cache for development
// In production, you'd use Redis or a similar solution
const cache = new Map<string, { data: any; expires: number }>();

export async function getCachedData<T>(
    key: string,
    fetchFn: () => Promise<T>,
    ttlMs: number = 5 * 60 * 1000 // 5 minutes default
): Promise<T> {
    const cached = cache.get(key);
    const now = Date.now();

    // Return cached data if still valid
    if (cached && now < cached.expires) {
        return cached.data;
    }

    // Fetch fresh data
    const freshData = await fetchFn();
    
    // Cache the new data
    cache.set(key, {
        data: freshData,
        expires: now + ttlMs
    });

    return freshData;
}

export function invalidateCache(pattern?: string) {
    if (pattern) {
        // Invalidate keys matching pattern
        for (const key of cache.keys()) {
            if (key.includes(pattern)) {
                cache.delete(key);
            }
        }
    } else {
        // Clear all cache
        cache.clear();
    }
}

// Specific cache functions for common operations
export async function getCachedCareerPaths() {
    return getCachedData(
        'career-paths:all',
        () => db.careerPath.findMany({
            orderBy: { title: 'asc' },
            include: {
                _count: {
                    select: {
                        levels: true,
                        projects: true
                    }
                }
            }
        }),
        10 * 60 * 1000 // 10 minutes
    );
}

export async function getCachedCareerPath(slug: string) {
    return getCachedData(
        `career-path:${slug}`,
        () => db.careerPath.findUnique({
            where: { slug },
            include: {
                levels: {
                    orderBy: { order: 'asc' }
                },
                projects: {
                    orderBy: { order: 'asc' }
                },
                responsibilities: {
                    orderBy: { order: 'asc' },
                    include: {
                        learningSteps: {
                            orderBy: { order: 'asc' },
                            include: {
                                subtopics: true
                            }
                        }
                    }
                }
            }
        }),
        15 * 60 * 1000 // 15 minutes
    );
}

export async function getCachedUserProgress(userId: string, careerPathId: string) {
    return getCachedData(
        `user-progress:${userId}:${careerPathId}`,
        () => db.userProgress.findMany({
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
            include: {
                subtopic: true
            }
        }),
        2 * 60 * 1000 // 2 minutes
    );
}

// Clean up expired cache entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [key, value] of cache.entries()) {
        if (now > value.expires) {
            cache.delete(key);
        }
    }
}, 60 * 1000); // Clean up every minute