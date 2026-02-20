-- CreateIndex
CREATE INDEX "projects_levelId_idx" ON "projects"("levelId");
CREATE INDEX "projects_skillId_idx" ON "projects"("skillId");

-- CreateIndex
CREATE INDEX "enrollments_currentLevelId_idx" ON "enrollments"("currentLevelId");
CREATE INDEX "enrollments_careerPathId_idx" ON "enrollments"("careerPathId");

-- CreateIndex
CREATE INDEX "skill_progress_skillId_idx" ON "skill_progress"("skillId");

-- CreateIndex
CREATE INDEX "project_submissions_projectId_idx" ON "project_submissions"("projectId");

-- CreateIndex
CREATE INDEX "assessment_questions_skillId_idx" ON "assessment_questions"("skillId");

-- CreateIndex
CREATE INDEX "user_assessments_assessmentId_idx" ON "user_assessments"("assessmentId");

-- CreateIndex
CREATE INDEX "user_assessment_answers_questionId_idx" ON "user_assessment_answers"("questionId");

-- CreateIndex
CREATE INDEX "learning_steps_responsibilityId_idx" ON "learning_steps"("responsibilityId");

-- CreateIndex
CREATE INDEX "learning_subtopics_stepId_idx" ON "learning_subtopics"("stepId");

-- CreateIndex
CREATE INDEX "user_progress_subtopicId_idx" ON "user_progress"("subtopicId");

-- CreateIndex
CREATE INDEX "activity_logs_userId_idx" ON "activity_logs"("userId");

-- CreateIndex
CREATE INDEX "users_activePathId_idx" ON "users"("activePathId");

-- CreateIndex
CREATE INDEX "accounts_user_id_idx" ON "accounts"("user_id");

-- CreateIndex
CREATE INDEX "sessions_user_id_idx" ON "sessions"("user_id");

-- Enable RLS on all tables
ALTER TABLE "career_paths" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "levels" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "skills" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "resources" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "projects" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "enrollments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "skill_progress" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "project_submissions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "assessments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "assessment_questions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "user_assessments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "user_assessment_answers" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "responsibilities" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "learning_steps" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "learning_subtopics" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "user_progress" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "activity_logs" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "users" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "accounts" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "sessions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "verification_tokens" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "password_reset_tokens" ENABLE ROW LEVEL SECURITY;

-- Add Public Read Access to content tables
CREATE POLICY "Public read access" ON "career_paths" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "levels" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "skills" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "resources" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "projects" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "assessments" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "assessment_questions" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "responsibilities" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "learning_steps" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "learning_subtopics" FOR SELECT USING (true);
