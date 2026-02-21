
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const pathCount = await prisma.careerPath.count();
    console.log(`Total Career Paths in DB: ${pathCount}`);

    const paths = await prisma.careerPath.findMany({
        include: {
            _count: {
                select: { levels: true }
            }
        }
    });

    console.log('\nPath Level Counts:');
    paths.forEach(p => {
        console.log(`- ${p.title} (slug: ${p.slug}, id: ${p.id}): ${p._count.levels} levels`);
    });

    const allLevels = await prisma.level.findMany({
        orderBy: [{ careerPathId: 'asc' }, { order: 'asc' }]
    });
    console.log('\nLevels Details:');
    allLevels.forEach(l => {
        console.log(`- PathId: ${l.careerPathId}, Order: ${l.order}, Title: ${l.title}`);
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
