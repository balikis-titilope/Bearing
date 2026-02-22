import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
})

async function test() {
    try {
        console.log('Attempting to connect to database...')
        const count = await prisma.user.count()
        console.log('Successfully connected! User count:', count)
    } catch (e) {
        console.error('Database connection FAILED:', e)
    } finally {
        await prisma.$disconnect()
    }
}

test()
