import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/auth';
import { isAdmin } from '@/lib/permissions';

export async function PUT(request: Request) {
  try {
    const session = await auth();
    const userIsAdmin = isAdmin(session?.user);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { skillId, status, enrollmentId } = body;

    if (!skillId || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const userId = session.user.id;

    // Find enrollment
    // If Admin Mode is ON, we allow admins to update ANY enrollment's skill progress
    const enrollment = await db.enrollment.findFirst({
      where: {
        ...(userIsAdmin && enrollmentId ? { id: enrollmentId } : { userId }),
      },
      include: {
        skillProgress: {
          where: { skillId }
        }
      }
    });

    if (!enrollment) {
      return NextResponse.json(
        { error: 'Enrollment not found' },
        { status: 404 }
      );
    }

    const existingProgress = enrollment.skillProgress[0];

    if (existingProgress) {
      // Update existing progress
      const updated = await db.skillProgress.update({
        where: { id: existingProgress.id },
        data: {
          status,
          completedAt: status === 'COMPLETED' ? new Date() : null
        }
      });
      return NextResponse.json({ success: true, progress: updated });
    } else {
      // Create new progress entry
      const created = await db.skillProgress.create({
        data: {
          enrollmentId: enrollment.id,
          skillId,
          status,
          completedAt: status === 'COMPLETED' ? new Date() : null
        }
      });
      return NextResponse.json({ success: true, progress: created });
    }
  } catch (error) {
    console.error('Skill progress update error:', error);
    return NextResponse.json(
      { error: 'Failed to update progress' },
      { status: 500 }
    );
  }
}
