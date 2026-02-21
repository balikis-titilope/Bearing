import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get('slug');

        if (!slug) {
            return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
        }

        const path = await db.careerPath.findUnique({
            where: { slug },
            include: {
                Assessment: {
                    include: {
                        questions: {
                            orderBy: { order: 'asc' }
                        }
                    }
                }
            }
        });

        if (!path || !path.Assessment) {
            return NextResponse.json({ questions: [] });
        }

        const questions = path.Assessment.questions.map(q => ({
            id: q.id,
            question: q.question,
            options: JSON.parse(q.options),
            correctAnswer: q.correctAnswer,
            explanation: q.explanation || undefined
        }));

        return NextResponse.json({ questions });
    } catch (error) {
        console.error('Fetch questions error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
