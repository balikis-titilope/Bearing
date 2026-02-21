
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const paths = await prisma.careerPath.findMany({
        include: {
            _count: {
                select: { levels: true }
            }
        }
    });

    console.log('Path Level Counts:');
    paths.forEach(p => {
        console.log(`${p.title} (${p.slug}): ${p._count.levels} levels`);
    });

    const levels = await prisma.level.findMany({
        orderBy: { order: 'asc' }
    });
    console.log('\nAll Levels Detail:');
    levels.forEach(l => {
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
