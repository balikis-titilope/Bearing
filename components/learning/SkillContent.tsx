'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle, ArrowLeft, ArrowRight, BookOpen, Code, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './SkillContent.module.css';

import { AssessmentIntro } from './assessment/AssessmentIntro';
import { AssessmentRunner } from './assessment/AssessmentRunner';
import { AssessmentResult } from './assessment/AssessmentResult';
import { saveSkillScore } from '@/actions/assessment';

interface SkillContentProps {
  skill: any;
  level: any;
  enrollment: any;
  progress: any;
}

export function SkillContent({ skill, level, enrollment, progress }: SkillContentProps) {
  const router = useRouter();
  const [isCompleting, setIsCompleting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(progress?.status === 'COMPLETED');

  // Assessment State
  const [isAssessmentStarted, setIsAssessmentStarted] = useState(false);
  const [isAssessmentFinished, setIsAssessmentFinished] = useState(false);
  const [assessmentScore, setAssessmentScore] = useState(0);

  const handleAssessmentComplete = async (score: number) => {
    setAssessmentScore(score);
    setIsAssessmentFinished(true);

    // Save score
    await saveSkillScore(enrollment.id, skill.id, score);

    router.refresh(); // Refresh to update best score
  };

  const handleMarkComplete = async () => {
    setIsCompleting(true);
    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enrollmentId: enrollment.id,
          skillId: skill.id,
          status: 'COMPLETED',
        }),
      });

      if (response.ok) {
        setIsCompleted(true);
        router.refresh();
      }
    } catch (error) {
      console.error('Failed to update progress:', error);
    } finally {
      setIsCompleting(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href={`/paths/${enrollment.careerPath.slug}/learn`}>
          {enrollment.careerPath.title}
        </Link>
        <span>/</span>
        <span>Level {level.order}</span>
        <span>/</span>
        <span>{skill.title}</span>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.levelBadge}>
          Level {level.order} - {level.title}
        </div>
        <h1 className={styles.title}>{skill.title}</h1>
        <p className={styles.description}>{skill.description}</p>
      </div>

      {/* Content Sections */}
      <div className={styles.content}>
        {/* Learning Resources */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <BookOpen size={20} />
            Learning Resources
          </h2>
          <p className={styles.sectionDesc}>
            Study these resources to master this skill. Add your own resources to enhance learning.
          </p>

          <div className={styles.resourcesList}>
            {skill.resources && skill.resources.length > 0 ? (
              skill.resources.map((resource: any) => (
                <div key={resource.id} className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>
                    <Code size={24} />
                  </div>
                  <div className={styles.resourceContent}>
                    <h3>{resource.title}</h3>
                    <p>{resource.type}</p>
                  </div>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink size={14} />
                      Open
                    </Button>
                  </a>
                </div>
              ))
            ) : (
              <>
                <div className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>
                    <Code size={24} />
                  </div>
                  <div className={styles.resourceContent}>
                    <h3>Documentation & Tutorials</h3>
                    <p>Official documentation and interactive tutorials</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink size={14} />
                    Open
                  </Button>
                </div>
                <div className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>
                    <BookOpen size={24} />
                  </div>
                  <div className={styles.resourceContent}>
                    <h3>Practice Exercises</h3>
                    <p>Questions to reinforce learning</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink size={14} />
                    Start
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Practice Exercises */}
        {skill.questions && skill.questions.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <CheckCircle size={20} />
              Practice Exercises
            </h2>
            <p className={styles.sectionDesc}>
              Master the concepts with interactive validation. Select an answer to see if you're right and understand why.
            </p>

            <div className={styles.assessmentContainer}>
              {!isAssessmentStarted ? (
                <AssessmentIntro
                  onStart={() => setIsAssessmentStarted(true)}
                  questionCount={skill.questions.length}
                  bestScore={progress?.bestScore || 0}
                />
              ) : !isAssessmentFinished ? (
                <AssessmentRunner
                  questions={skill.questions}
                  onComplete={handleAssessmentComplete}
                />
              ) : (
                <AssessmentResult
                  score={assessmentScore}
                  passed={assessmentScore >= 70}
                  bestScore={progress?.bestScore || 0}
                  onRetake={() => {
                    setIsAssessmentStarted(false);
                    setIsAssessmentFinished(false);
                    setAssessmentScore(0);
                  }}
                />
              )}
            </div>
          </div>
        )}

        {/* Mini Project */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Code size={20} />
            Practice Project
          </h2>
          <p className={styles.sectionDesc}>
            Build a small project to practice this specific skill before moving to the final project.
          </p>

          {skill.projects && skill.projects.length > 0 ? (
            skill.projects.map((project: any) => (
              <div key={project.id} className={styles.projectPreview}>
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <Link href={`/projects/${project.id}/guide`}>
                  <Button variant="primary">
                    Start
                  </Button>
                </Link>
              </div>
            ))
          ) : (
            <div className={styles.projectPreview}>
              <div className={styles.projectInfo}>
                <h3>Mini Project</h3>
                <p>Apply what you've learned with a hands-on mini-project.</p>
              </div>
              <Link href="/projects">
                <Button variant="primary">
                  Start
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Completion Action */}
        <div className={styles.actionSection}>
          {isCompleted ? (
            <div className={styles.completedStatus}>
              <CheckCircle size={20} />
              <span>Skill Completed!</span>
            </div>
          ) : (
            <>
              <Button
                variant="primary"
                onClick={handleMarkComplete}
                disabled={isCompleting}
              >
                {isCompleting ? 'Completing...' : 'Mark as Complete'}
              </Button>
            </>
          )}

          <Link href={`/paths/${enrollment.careerPath.slug}/learn`}>
            <Button variant="outline">
              <ArrowLeft size={16} />
              Back to Skills
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
