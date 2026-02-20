import { PrismaClient, UserRole } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { frontendContent } from '../data/learning/frontend'
import { backendContent } from '../data/learning/backend'
import { dataScienceContent } from '../data/learning/datascience'
import { cyberSecurityContent } from '../data/learning/cybersecurity'
import { dataAnalystContent } from '../data/learning/dataanalyst'
import { cloudArchitectContent } from '../data/learning/cloudarchitect'
import { aiDevelopmentContent } from '../data/learning/aidevelopment'
import { fullStackContent } from '../data/learning/fullstack'
import { softwareTesterContent } from '../data/learning/softwaretester'
import { mobileContent } from '../data/learning/mobile'
import { devopsContent } from '../data/learning/devops'
import { uiDesignerContent } from '../data/learning/uidesigner'
import { projectManagerContent } from '../data/learning/projectmanager'
import { dataEngineerContent } from '../data/learning/dataengineer'
import { machinelearningContent } from '../data/learning/machinelearning'
import { productManagerContent } from '../data/learning/productmanager'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting seed...')

  // Create default Super Admin
  const hashedPassword = await bcrypt.hash('admin123', 12)
  await prisma.user.upsert({
    where: { email: 'admin@bearing.com' },
    update: {},
    create: {
      email: 'admin@bearing.com',
      name: 'Super Admin',
      password: hashedPassword,
      role: UserRole.SUPER_ADMIN,
      emailVerified: new Date(),
    }
  })
  console.log('Default Super Admin created: admin@bearing.com / admin123')

  // Clear existing data using individual DELETEs to handle timeouts better
  console.log('Clearing database...')
  const tables = [
    "project_submissions", "skill_progress", "enrollments", "resources", "user_progress",
    "projects", "skills", "levels", "assessment_questions", "assessments",
    "learning_subtopics", "learning_steps", "responsibilities", "career_paths"
  ]

  for (const table of tables) {
    try {
      await prisma.$executeRawUnsafe(`DELETE FROM "${table}";`)
      console.log(`Cleared table: ${table}`)
    } catch (e) {
      console.warn(`Could not clear table ${table}, might be empty or locked:`, e)
    }
  }

  console.log('Database cleared.')

  let globalQuestionOrder = 1

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  // Helper for seeding rich path content
  const seedPathContent = async (pathId: string, assessmentId: string, content: any) => {
    for (const levelData of content.levels) {
      const levelOrder = parseInt(levelData.id.split('-l')[1]) || 1;
      const level = await prisma.level.create({
        data: {
          id: levelData.id,
          title: levelData.title,
          shortTitle: levelOrder === 1 ? 'Junior' : levelOrder === 2 ? 'Intermediate' : levelOrder === 3 ? 'Senior' : 'Principal',
          description: levelData.description || 'Professional curriculum.',
          order: levelOrder,
          careerPathId: pathId,
        }
      })

      console.log(`Seeding level: ${level.title} for path: ${pathId}`)

      for (const [sIdx, skillData] of levelData.skills.entries()) {
        try {
          const skill = await prisma.skill.create({
            data: {
              id: skillData.id,
              title: skillData.title,
              description: skillData.description,
              levelId: level.id,
              order: sIdx + 1,
            }
          })

          if (skillData.resources) {
            await prisma.resource.createMany({
              data: skillData.resources.map((r: any) => ({ ...r, skillId: skill.id }))
            })
          }

          if (skillData.questions) {
            await prisma.assessmentQuestion.createMany({
              data: skillData.questions.map((q: any) => ({
                ...q,
                options: JSON.stringify(q.options),
                assessmentId,
                skillId: skill.id,
                type: 'MULTIPLE_CHOICE',
                order: globalQuestionOrder++
              }))
            })
          }

          if (skillData.miniProject) {
            await prisma.project.create({
              data: {
                ...skillData.miniProject,
                requirements: JSON.stringify(skillData.miniProject.requirements || []),
                testCases: JSON.stringify(skillData.miniProject.testCases || []),
                guide: skillData.miniProject.guide ? JSON.stringify(skillData.miniProject.guide) : null,
                hints: skillData.miniProject.hints ? JSON.stringify(skillData.miniProject.hints) : null,
                stuckLinks: skillData.miniProject.stuckLinks ? JSON.stringify(skillData.miniProject.stuckLinks) : null,
                skillId: skill.id,
                levelId: level.id,
                isMiniProject: true,
                isFinalProject: false,
                order: sIdx + 1
              }
            })
          }

          // Add a small delay between skills to stabilize connection
          await sleep(50)
        } catch (err) {
          console.error(`Error seeding skill ${skillData.id}:`, err)
          throw err
        }
      }

      // Seed Final Project for the Level if exists
      if (levelData.finalProject) {
        await prisma.project.create({
          data: {
            ...levelData.finalProject,
            requirements: JSON.stringify(levelData.finalProject.requirements || []),
            testCases: JSON.stringify(levelData.finalProject.testCases || []),
            guide: levelData.finalProject.guide ? JSON.stringify(levelData.finalProject.guide) : null,
            hints: levelData.finalProject.hints ? JSON.stringify(levelData.finalProject.hints) : null,
            stuckLinks: levelData.finalProject.stuckLinks ? JSON.stringify(levelData.finalProject.stuckLinks) : null,
            levelId: level.id,
            isMiniProject: false,
            isFinalProject: true,
            order: 99 // Always last in the level
          }
        })
      }
    }
  }

  // Helper for generating skills
  const createLevel = async (pathId: string, levelId: string, title: string, order: number, skills: any[]) => {
    return prisma.level.create({
      data: {
        id: levelId,
        title,
        shortTitle: order === 1 ? 'Junior' : order === 2 ? 'Mid' : order === 3 ? 'Senior' : 'Staff',
        description: `Professional level ${order} mastery.`,
        order,
        careerPathId: pathId,
        skills: {
          create: skills.map((s, i) => ({
            id: `${levelId}-s${i + 1}`,
            title: s.title,
            description: s.description,
            order: i + 1,
          })),
        },
      },
    })
  }

  // ==========================================
  // PATH 1: FRONTEND DEVELOPER
  // ==========================================
  const frontendPath = await prisma.careerPath.create({
    data: {
      slug: 'frontend-developer',
      title: 'Frontend Developer',
      description: 'Master UI engineering at scale with high standards.',
      icon: 'Code',
      isPublished: true
    },
  })

  // Create Assessment for the path
  const feAssessment = await prisma.assessment.create({
    data: {
      careerPathId: frontendPath.id,
      title: 'Frontend Engineering Core Assessment',
      description: 'Test your understanding of internals, layout algorithms, and semantic architecture.'
    }
  })

  await seedPathContent(frontendPath.id, feAssessment.id, frontendContent)
  await sleep(200)

  // ==========================================
  // PATH 2: BACKEND DEVELOPER
  // ==========================================
  const backendPath = await prisma.careerPath.create({
    data: { slug: 'backend-developer', title: 'Backend Developer', description: 'Architect robust systems.', icon: 'Server', isPublished: true },
  })
  const beAssessment = await prisma.assessment.create({
    data: {
      careerPathId: backendPath.id,
      title: 'Backend Engineering Core Assessment',
      description: 'Test your understanding of distributed systems and high-integrity ledgers.'
    }
  })
  await seedPathContent(backendPath.id, beAssessment.id, backendContent)
  await sleep(200)

  // ==========================================
  // PATH 3: FULL STACK DEVELOPER
  // ==========================================
  const fsPath = await prisma.careerPath.create({
    data: { slug: 'full-stack-developer', title: 'Full Stack Developer', description: 'Build end-to-end applications.', icon: 'Layers', isPublished: true },
  })
  const fsAssessment = await prisma.assessment.create({
    data: {
      careerPathId: fsPath.id,
      title: 'Full Stack Engineering Core Assessment',
      description: 'Test your understanding of the complete development lifecycle.'
    }
  })
  await seedPathContent(fsPath.id, fsAssessment.id, fullStackContent)
  await sleep(200)


  // ==========================================
  // PATH 4: DATA ANALYST
  // ==========================================
  const dataPath = await prisma.careerPath.create({
    data: { slug: 'data-analyst', title: 'Data Analyst', description: 'Turn data into strategy.', icon: 'PieChart', isPublished: true },
  })
  const dataAssessment = await prisma.assessment.create({
    data: {
      careerPathId: dataPath.id,
      title: 'Data Analysis Core Assessment',
      description: 'Master the art of extracting insights from raw data.'
    }
  })
  await seedPathContent(dataPath.id, dataAssessment.id, dataAnalystContent)
  await sleep(200)


  // ==========================================
  // PATH 5: MOBILE DEVELOPER
  // ==========================================
  const mobilePath = await prisma.careerPath.create({
    data: { slug: 'mobile-developer', title: 'Mobile Developer', description: 'Native performance at scale.', icon: 'Smartphone', isPublished: true },
  })
  const mobileAssessment = await prisma.assessment.create({
    data: {
      careerPathId: mobilePath.id,
      title: 'Mobile Engineering Core Assessment',
      description: 'Test your understanding of native primitives and mobile architecture.'
    }
  })
  await seedPathContent(mobilePath.id, mobileAssessment.id, mobileContent)
  await sleep(200)


  // ==========================================
  // PATH 6: DEVOPS ENGINEER
  // ==========================================
  const devopsPath = await prisma.careerPath.create({
    data: { slug: 'devops-engineer', title: 'DevOps Engineer', description: 'Platform foundations.', icon: 'Settings', isPublished: true },
  })
  const devopsAssessment = await prisma.assessment.create({
    data: {
      careerPathId: devopsPath.id,
      title: 'DevOps & Platform Core Assessment',
      description: 'Test your understanding of Linux internals, automation, and container orchestration.'
    }
  })
  await seedPathContent(devopsPath.id, devopsAssessment.id, devopsContent)
  await sleep(200)


  // ==========================================
  // PATH 7: UI DESIGNER
  // ==========================================
  const uiPath = await prisma.careerPath.create({
    data: { slug: 'ui-designer', title: 'UI Designer', description: 'Design beautiful, and intuitive user interfaces.', icon: 'Palette', isPublished: true },
  })
  const uiAssessment = await prisma.assessment.create({
    data: {
      careerPathId: uiPath.id,
      title: 'UI Design Core Assessment',
      description: 'Test your knowledge of typography, layout, and visual accessibility.'
    }
  })
  await seedPathContent(uiPath.id, uiAssessment.id, uiDesignerContent)
  await sleep(200)

  // ==========================================
  // PATH 9: DATA SCIENCE
  // ==========================================
  const dsPath = await prisma.careerPath.create({
    data: { slug: 'data-science', title: 'Data Science', description: 'Master predictive intelligence.', icon: 'Microscope', isPublished: true },
  })
  const dsAssessment = await prisma.assessment.create({
    data: {
      careerPathId: dsPath.id,
      title: 'Data Science Core Assessment',
      description: 'Test your knowledge of statistics, ML, and predictive modeling.'
    }
  })
  await seedPathContent(dsPath.id, dsAssessment.id, dataScienceContent)
  await sleep(200)

  // ==========================================
  // PATH 10: DATA ENGINEER
  // ==========================================
  const dePath = await prisma.careerPath.create({
    data: { slug: 'data-engineer', title: 'Data Engineer', description: 'Architect reliable data systems.', icon: 'Database', isPublished: true },
  })
  const deAssessment = await prisma.assessment.create({
    data: {
      careerPathId: dePath.id,
      title: 'Data Engineering Core Assessment',
      description: 'Test your understanding of data pipelines and warehouse architecture.'
    }
  })
  await seedPathContent(dePath.id, deAssessment.id, dataEngineerContent)
  await sleep(200)

  // ==========================================
  // PATH 11: AI DEVELOPMENT
  // ==========================================
  const aiPath = await prisma.careerPath.create({
    data: { slug: 'ai-development', title: 'AI Development', description: 'Engineer the future with GenAI.', icon: 'Cpu', isPublished: true },
  })
  const aiAssessment = await prisma.assessment.create({
    data: {
      careerPathId: aiPath.id,
      title: 'AI Engineering Core Assessment',
      description: 'Test your understanding of intelligence algorithms and GenAI patterns.'
    }
  })
  await seedPathContent(aiPath.id, aiAssessment.id, aiDevelopmentContent)
  await sleep(200)


  // ==========================================
  // PATH 12: CYBERSECURITY ENGINEER
  // ==========================================
  const cyberPath = await prisma.careerPath.create({
    data: { slug: 'cybersecurity-engineer', title: 'Cybersecurity Engineer', description: 'Master digital defense.', icon: 'Shield', isPublished: true },
  })
  const csAssessment = await prisma.assessment.create({
    data: {
      careerPathId: cyberPath.id,
      title: 'Cybersecurity Core Assessment',
      description: 'Defend systems against modern threats.'
    }
  })
  await seedPathContent(cyberPath.id, csAssessment.id, cyberSecurityContent)
  await sleep(200)

  // ==========================================
  // PATH 13: CLOUD ARCHITECT
  // ==========================================
  const cloudPath = await prisma.careerPath.create({
    data: { slug: 'cloud-architect', title: 'Cloud Architect', description: 'Design enterprise cloud scale.', icon: 'Cloud', isPublished: true },
  })
  const caAssessment = await prisma.assessment.create({
    data: {
      careerPathId: cloudPath.id,
      title: 'Cloud Architecture Core Assessment',
      description: 'Master the design of enterprise cloud systems.'
    }
  })
  await seedPathContent(cloudPath.id, caAssessment.id, cloudArchitectContent)
  await sleep(200)

  // ==========================================
  // PATH 14: ML ENGINEER
  // ==========================================
  const mlePath = await prisma.careerPath.create({
    data: { slug: 'machine-learning-engineer', title: 'Machine Learning Engineer', description: 'ML at production scale.', icon: 'Workflow', isPublished: true },
  })
  const mleAssessment = await prisma.assessment.create({
    data: {
      careerPathId: mlePath.id,
      title: 'ML Engineering Core Assessment',
      description: 'Test your understanding of model deployment, monitoring, and scaling.'
    }
  })
  await seedPathContent(mlePath.id, mleAssessment.id, machinelearningContent)
  await sleep(200)

  // ==========================================
  // PATH 15: PROJECT MANAGER
  // ==========================================
  const pmnPath = await prisma.careerPath.create({
    data: { slug: 'project-manager', title: 'Project Manager', description: 'Master the art of delivery.', icon: 'Briefcase', isPublished: true },
  })
  const pmnAssessment = await prisma.assessment.create({
    data: {
      careerPathId: pmnPath.id,
      title: 'Project Delivery Core Assessment',
      description: 'Test your understanding of Agile, Scrum, and Stakeholder management.'
    }
  })
  await seedPathContent(pmnPath.id, pmnAssessment.id, projectManagerContent)
  await sleep(200)

  // ==========================================
  // PATH 16: SOFTWARE TESTER
  // ==========================================
  const testerPath = await prisma.careerPath.create({
    data: { slug: 'software-tester', title: 'Software Tester', description: 'Ensure quality at speed.', icon: 'CheckCircle', isPublished: true },
  })
  const testerAssessment = await prisma.assessment.create({
    data: {
      careerPathId: testerPath.id,
      title: 'Software Quality Core Assessment',
      description: 'Test your understanding of automation, performance, and security testing.'
    }
  })
  await seedPathContent(testerPath.id, testerAssessment.id, softwareTesterContent)
  await sleep(200)

  // ==========================================
  // PATH 17: PRODUCT MANAGER
  // ==========================================
  const pdmPath = await prisma.careerPath.create({
    data: { slug: 'product-manager', title: 'Product Manager', description: 'Lead product strategy and discovery.', icon: 'Target', isPublished: true },
  })
  const pdmAssessment = await prisma.assessment.create({
    data: {
      careerPathId: pdmPath.id,
      title: 'Product Strategy Core Assessment',
      description: 'Test your understanding of product strategy, discovery, and growth.'
    }
  })
  await seedPathContent(pdmPath.id, pdmAssessment.id, productManagerContent)
  await sleep(200)


  console.log('Seed Expansion (16 paths, 512+ skills) completed successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
