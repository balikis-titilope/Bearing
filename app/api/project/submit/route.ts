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
    const { enrollmentId, projectId, githubUrl, deployedUrl, notes } = body;

    if (!enrollmentId || !projectId || !githubUrl) {
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

    // Check if project exists and belongs to current level
    const project = await db.project.findFirst({
      where: {
        id: projectId,
        levelId: enrollment.currentLevelId,
      },
    });

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Create or update submission
    const submission = await db.projectSubmission.upsert({
      where: {
        enrollmentId_projectId: {
          enrollmentId,
          projectId,
        },
      },
      update: {
        githubUrl,
        deployedUrl: deployedUrl || null,
        notes: notes || null,
        status: 'SUBMITTED',
        submittedAt: new Date(),
      },
      create: {
        enrollmentId,
        projectId,
        githubUrl,
        deployedUrl: deployedUrl || null,
        notes: notes || null,
        status: 'SUBMITTED',
        submittedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error('Project submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit project' },
      { status: 500 }
    );
  }
}
