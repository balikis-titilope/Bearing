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

  // Clear existing data in correct dependency order
  await prisma.projectSubmission.deleteMany()
  await prisma.skillProgress.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.userProgress.deleteMany()

  await prisma.project.deleteMany()
  await prisma.skill.deleteMany()

  await prisma.level.deleteMany()
  await prisma.assessmentQuestion.deleteMany()
  await prisma.assessment.deleteMany()

  await prisma.learningSubtopic.deleteMany()
  await prisma.learningStep.deleteMany()
  await prisma.responsibility.deleteMany()

  await prisma.careerPath.deleteMany()

  console.log('Database cleared.')

  let globalQuestionOrder = 1

  // Helper for seeding rich path content
  const seedPathContent = async (pathId: string, assessmentId: string, content: any) => {
    for (const levelData of content.levels) {
      const level = await prisma.level.create({
        data: {
          id: levelData.id,
          title: levelData.title,
          shortTitle: levelData.id.endsWith('l1') ? 'Junior' : 'Senior',
          description: 'High-standard curriculum.',
          order: levelData.id.endsWith('l1') ? 1 : 2,
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
            for (const q of skillData.questions) {
              await prisma.assessmentQuestion.create({
                data: {
                  ...q,
                  options: JSON.stringify(q.options),
                  assessmentId,
                  skillId: skill.id,
                  type: 'MULTIPLE_CHOICE',
                  order: globalQuestionOrder++
                }
              })
            }
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
        } catch (err) {
          console.error(`Error seeding skill ${skillData.id}:`, err)
          throw err
        }
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


  // ==========================================
  // PROJECTS WITH "META TWIST"
  // ==========================================

  // Cybersecurity Level 3 Project
  await prisma.project.create({
    data: {
      id: 'p-cs-l3',
      title: 'Enterprise Vulnerability Lab',
      description: 'Build and audit a secure micro-services environment with zero-trust principles.',
      requirements: JSON.stringify([
        'Zero-trust network segmentation',
        'Automated vulnerability scanning in CI/CD',
        'Custom WAF rules for OWASP protection',
        'Incident Response playbook for simulated breach',
      ]),
      isFinalProject: true,
      levelId: 'cs-l3',
      order: 1,
      testCases: JSON.stringify([{ type: 'audit', score: '>95' }]),
    },
  })

  // AI Development Level 3 Project
  await prisma.project.create({
    data: {
      id: 'p-ai-l3',
      title: 'Multimodal RAG Agent',
      description: 'Build an autonomous agent capable of reasoning across text, images, and tools.',
      requirements: JSON.stringify([
        'Custom vector indexing for complex docs',
        'Tool-use with LangChain / AutoGPT',
        'Image reasoning via Vision models',
        'Evaluation loop for hallucination check',
      ]),
      isFinalProject: true,
      levelId: 'ai-l3',
      order: 1,
      testCases: JSON.stringify([{ type: 'accuracy', threshold: '0.85' }]),
    },
  })

  console.log('Seed Expansion (15 paths, 480 skills) completed successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
