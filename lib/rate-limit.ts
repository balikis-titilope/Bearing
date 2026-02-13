import { NextRequest, NextResponse } from 'next/server';

interface RateLimitEntry {
    count: number;
    resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export function rateLimit(
    identifier: string,
    limit: number = 5, // requests
    windowMs: number = 15 * 60 * 1000 // 15 minutes
): { success: boolean; resetTime?: number; remaining?: number } {
    const now = Date.now();
    const entry = rateLimitStore.get(identifier);

    // Clean up expired entries
    for (const [key, value] of rateLimitStore.entries()) {
        if (now > value.resetTime) {
            rateLimitStore.delete(key);
        }
    }

    if (!entry) {
        // First request from this identifier
        rateLimitStore.set(identifier, {
            count: 1,
            resetTime: now + windowMs
        });
        return { success: true, resetTime: now + windowMs, remaining: limit - 1 };
    }

    if (now > entry.resetTime) {
        // Window has expired, reset
        rateLimitStore.set(identifier, {
            count: 1,
            resetTime: now + windowMs
        });
        return { success: true, resetTime: now + windowMs, remaining: limit - 1 };
    }

    if (entry.count >= limit) {
        // Rate limit exceeded
        return { 
            success: false, 
            resetTime: entry.resetTime, 
            remaining: 0 
        };
    }

    // Increment count
    entry.count++;
    return { 
        success: true, 
        resetTime: entry.resetTime, 
        remaining: limit - entry.count 
    };
}

// Middleware for API routes
export function withRateLimit(handler: (req: NextRequest) => Promise<NextResponse>) {
    return async (req: NextRequest): Promise<NextResponse> => {
        const forwarded = req.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
        const endpoint = req.nextUrl.pathname;
        const identifier = `${ip}:${endpoint}`;

        const result = rateLimit(identifier);

        if (!result.success) {
            return new NextResponse(
                JSON.stringify({
                    error: 'Too many requests. Please try again later.',
                    resetTime: result.resetTime
                }),
                {
                    status: 429,
                    headers: {
                        'Content-Type': 'application/json',
                        'X-RateLimit-Limit': '5',
                        'X-RateLimit-Remaining': '0',
                        'X-RateLimit-Reset': result.resetTime?.toString() || '',
                        'Retry-After': Math.ceil((result.resetTime! - Date.now()) / 1000).toString()
                    }
                }
            );
        }

        const response = await handler(req);
        
        // Add rate limit headers to successful responses
        response.headers.set('X-RateLimit-Limit', '5');
        response.headers.set('X-RateLimit-Remaining', result.remaining?.toString() || '0');
        response.headers.set('X-RateLimit-Reset', result.resetTime?.toString() || '');

        return response;
    };
}