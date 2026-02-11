-- CreateTable
CREATE TABLE "career_paths" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "responsibilities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "careerPathId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    CONSTRAINT "responsibilities_careerPathId_fkey" FOREIGN KEY ("careerPathId") REFERENCES "career_paths" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "progressions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "careerPathId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    CONSTRAINT "progressions_careerPathId_fkey" FOREIGN KEY ("careerPathId") REFERENCES "career_paths" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "importance" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "career_path_skills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "careerPathId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "career_path_skills_careerPathId_fkey" FOREIGN KEY ("careerPathId") REFERENCES "career_paths" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "career_path_skills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "career_paths_slug_key" ON "career_paths"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "responsibilities_careerPathId_order_key" ON "responsibilities"("careerPathId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "progressions_careerPathId_order_key" ON "progressions"("careerPathId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "career_path_skills_careerPathId_skillId_key" ON "career_path_skills"("careerPathId", "skillId");
