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
    const { careerPathId, userId, startLevel = 1 } = body;

    if (!careerPathId || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already has ANY enrollment (Restriction: 1 user = 1 path)
    const activeEnrollment = await db.enrollment.findFirst({
      where: { userId },
    });

    if (activeEnrollment) {
      return NextResponse.json(
        { error: 'You are already enrolled in a career path. You can only master one path at a time.' },
        { status: 400 }
      );
    }

    // Logic for project-based placement (fast-track)
    // If user claims Level 2, we enroll them in Level 1 but with 'ASSESSING' status
    // They will need to pass Level 1 Final Project to unlock Level 2
    const enrollingLevelOrder = startLevel === 2 ? 1 : startLevel;
    const status = startLevel === 2 ? 'ASSESSING' : 'ACTIVE';
    const assessmentStatus = startLevel === 2 ? 'IN_PROGRESS' : 'NOT_STARTED';

    // Get the level to enroll in
    const targetLevel = await db.level.findFirst({
      where: {
        careerPathId,
        order: enrollingLevelOrder
      },
    });

    if (!targetLevel) {
      return NextResponse.json(
        { error: 'Invalid level selected' },
        { status: 400 }
      );
    }

    // Create enrollment
    const enrollment = await db.enrollment.create({
      data: {
        userId,
        careerPathId,
        status,
        currentLevelId: targetLevel.id,
        assessmentStatus,
        claimedLevel: startLevel,
      },
    });

    // Create skill progress for all skills in the target level
    const skills = await db.skill.findMany({
      where: { levelId: targetLevel.id },
    });

    await db.skillProgress.createMany({
      data: skills.map((skill) => ({
        enrollmentId: enrollment.id,
        skillId: skill.id,
        status: 'NOT_STARTED',
      })),
    });

    return NextResponse.json({ success: true, enrollment });
  } catch (error) {
    console.error('Enrollment error:', error);
    return NextResponse.json(
      { error: 'Failed to enroll' },
      { status: 500 }
    );
  }
}
