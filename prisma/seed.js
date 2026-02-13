const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function main() {
    console.log("Seeding universal learning system...");

    // 1. Create Career Path
    const frontend = await db.careerPath.upsert({
        where: { slug: "frontend-developer" },
        update: {},
        create: {
            title: "Frontend Developer",
            slug: "frontend-developer",
            description: "Build beautiful, interactive user interfaces for the modern web.",
            icon: "Layout",
        },
    });

    // 2. Create Levels
    const levels = [
        {
            title: "Junior",
            order: 1,
            description: "Master the foundations and build simple features.",
            whatChanges: "Focus on task completion and basic proficiency.",
            requirements: "Master HTML/CSS, basic JS, and 2 clones.",
        },
        {
            title: "Mid-Level",
            order: 2,
            description: "Architect components and manage complex state.",
            whatChanges: "Independence, performance focus, and architectural thinking.",
            requirements: "React mastery, state management, and 5 projects.",
        },
        {
            title: "Senior",
            order: 3,
            description: "Design systems and mentor the next generation.",
            whatChanges: "Strategic decision making, mentorship, and system design.",
            requirements: "System design, advanced optimization, and 10+ projects.",
        },
    ];

    for (const level of levels) {
        await db.level.create({
            data: {
                ...level,
                careerPathId: frontend.id,
            },
        });
    }

    // 3. Create Responsibilities and Learning Steps
    const resp = await db.responsibility.create({
        data: {
            text: "Translating designs to code",
            order: 1,
            careerPathId: frontend.id,
        },
    });

    const step1 = await db.learningStep.create({
        data: {
            title: "Master Layout Basics",
            order: 1,
            responsibilityId: resp.id,
        },
    });

    await db.learningSubtopic.createMany({
        data: [
            { title: "Learn Flexbox", stepId: step1.id },
            { title: "Learn CSS Grid", stepId: step1.id },
            { title: "Practice responsive units", stepId: step1.id },
        ],
    });

    const step2 = await db.learningStep.create({
        data: {
            title: "Component Thinking",
            order: 2,
            responsibilityId: resp.id,
        },
    });

    await db.learningSubtopic.createMany({
        data: [
            { title: "Break design into sections", stepId: step2.id },
            { title: "Reusable navbar", stepId: step2.id },
            { title: "Card components", stepId: step2.id },
        ],
    });

    // 4. Create Projects
    await db.project.createMany({
        data: [
            {
                title: "Clone a simple landing page",
                description: "Recreate a Dribbble design exactly using HTML/CSS.",
                validationRule: "Submit GitHub link + Mark as Completed",
                order: 1,
                careerPathId: frontend.id,
            },
            {
                title: "Build reusable UI component library",
                description: "Create a set of common components (Button, Input, Card).",
                validationRule: "Submit GitHub link",
                order: 2,
                careerPathId: frontend.id,
            },
        ],
    });

    console.log("Seeding completed successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await db.$disconnect();
    });
