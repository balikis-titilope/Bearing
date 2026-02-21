import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/auth';
import { evaluateProject } from '@/lib/autograder';
import { isAdmin } from '@/lib/permissions';
import { getAdminMode } from '@/lib/permissions-server';

export async function POST(request: Request) {
  try {
    const session = await auth();
    const adminMode = await getAdminMode();
    const userIsAdmin = isAdmin(session?.user);

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

    // Verify enrollment
    // If Admin Mode is ON, we allow admins to submit to ANY enrollment (Observer Testing)
    const enrollment = await db.enrollment.findFirst({
      where: {
        id: enrollmentId,
        ...(userIsAdmin && adminMode ? {} : { userId: session.user.id }),
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

    // 1. Create Initial Submission
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

    // 2. Trigger Automated Evaluation
    const evaluation = await evaluateProject(submission.id);

    // 3. Update Submission with Results
    const updatedSubmission = await db.projectSubmission.update({
      where: { id: submission.id },
      data: {
        status: evaluation.passed ? 'PASSED' : 'FAILED',
        score: evaluation.score,
        feedback: evaluation.feedback.join('\n'),
        testResults: JSON.stringify(evaluation.details)
      }
    });

    // 4. Promotion logic for Placement FAST-TRACK (Only if passed autograder)
    if (enrollment.status === 'ASSESSING' && evaluation.passed) {
      const claimedLevelHeader = enrollment.claimedLevel || 2;

      // Find the target level we are promoting them to
      const nextLevel = await db.level.findFirst({
        where: {
          careerPathId: enrollment.careerPathId,
          order: claimedLevelHeader
        }
      });

      if (nextLevel) {
        // Promote enrollment
        await db.enrollment.update({
          where: { id: enrollmentId },
          data: {
            status: 'ACTIVE',
            currentLevelId: nextLevel.id,
            assessmentStatus: 'COMPLETED'
          }
        });

        // Initialize skill progress for the NEW level (Level 2)
        const skills = await db.skill.findMany({
          where: { levelId: nextLevel.id },
        });

        // Using createMany for convenience, but skipping duplicates just in case
        await db.skillProgress.createMany({
          data: skills.map((skill) => ({
            enrollmentId: enrollment.id,
            skillId: skill.id,
            status: 'NOT_STARTED',
          })),
          skipDuplicates: true
        });
      }
    }

    return NextResponse.json({
      success: true,
      submission: updatedSubmission,
      promoted: enrollment.status === 'ASSESSING' && evaluation.passed
    });
  } catch (error) {
    console.error('Project submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit project' },
      { status: 500 }
    );
  }
}
