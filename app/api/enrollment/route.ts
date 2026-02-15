import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/auth';

export async function GET(request: Request) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const enrollments = await db.enrollment.findMany({
      where: { userId: session.user.id },
      include: {
        careerPath: {
          select: {
            id: true,
            slug: true,
            title: true,
            description: true,
            icon: true,
          },
        },
      },
      orderBy: { enrolledAt: 'desc' },
    });

    return NextResponse.json({ enrollments });
  } catch (error) {
    console.error('Get enrollments error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch enrollments' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { careerPathId, userId } = body;

    if (!careerPathId || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if already enrolled
    const existingEnrollment = await db.enrollment.findUnique({
      where: {
        userId_careerPathId: {
          userId,
          careerPathId: careerPathId,
        },
      },
    });

    if (existingEnrollment) {
      return NextResponse.json(
        { error: 'Already enrolled' },
        { status: 400 }
      );
    }

    // Get the first level to start with
    const firstLevel = await db.level.findFirst({
      where: { careerPathId },
      orderBy: { order: 'asc' },
    });

    // Create enrollment
    const enrollment = await db.enrollment.create({
      data: {
        userId,
        careerPathId,
        status: 'ENROLLED',
        currentLevelId: firstLevel?.id,
        assessmentStatus: 'NOT_STARTED',
      },
    });

    // Create skill progress for all skills in the first level
    if (firstLevel) {
      const skills = await db.skill.findMany({
        where: { levelId: firstLevel.id },
      });

      await db.skillProgress.createMany({
        data: skills.map((skill) => ({
          enrollmentId: enrollment.id,
          skillId: skill.id,
          status: 'NOT_STARTED',
        })),
      });
    }

    return NextResponse.json({ success: true, enrollment });
  } catch (error) {
    console.error('Enrollment error:', error);
    return NextResponse.json(
      { error: 'Failed to enroll' },
      { status: 500 }
    );
  }
}
