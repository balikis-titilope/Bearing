import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/auth';

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { enrollmentId, skillId, status } = body;

    if (!enrollmentId || !skillId || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify enrollment belongs to user
    const enrollment = await db.enrollment.findFirst({
      where: {
        id: enrollmentId,
        userId: session.user.id,
      },
    });

    if (!enrollment) {
      return NextResponse.json({ error: 'Enrollment not found' }, { status: 404 });
    }

    // Update or create skill progress
    const skillProgress = await db.skillProgress.upsert({
      where: {
        enrollmentId_skillId: {
          enrollmentId,
          skillId,
        },
      },
      update: {
        status,
        completedAt: status === 'COMPLETED' ? new Date() : null,
      },
      create: {
        enrollmentId,
        skillId,
        status,
        completedAt: status === 'COMPLETED' ? new Date() : null,
      },
    });

    // Check if all skills in current level are completed
    if (status === 'COMPLETED') {
      const currentLevel = await db.level.findFirst({
        where: { id: enrollment.currentLevelId! },
        include: {
          skills: true,
        },
      });

      if (currentLevel) {
        const allProgress = await db.skillProgress.findMany({
          where: {
            enrollmentId,
            skillId: { in: currentLevel.skills.map(s => s.id) },
          },
        });

        const allCompleted = allProgress.every(p => p.status === 'COMPLETED');

        if (allCompleted) {
          // All skills completed - mark enrollment as ready for project
          await db.enrollment.update({
            where: { id: enrollmentId },
            data: { status: 'ACTIVE' },
          });
        }
      }
    }

    return NextResponse.json({ success: true, skillProgress });
  } catch (error) {
    console.error('Progress update error:', error);
    return NextResponse.json(
      { error: 'Failed to update progress' },
      { status: 500 }
    );
  }
}
