import { PrismaClient, UserRole } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const email = process.argv[2]

    if (!email) {
        console.error('Please provide an email address: npx ts-node --compiler-options "{\\"module\\":\\"CommonJS\\"}" scripts/promote-admin.ts user@example.com')
        process.exit(1)
    }

    try {
        const user = await prisma.user.update({
            where: { email },
            data: { role: UserRole.SUPER_ADMIN }
        })
        console.log(`Successfully promoted ${user.email} to SUPER_ADMIN`)
    } catch (error) {
        console.error(`Error: User with email ${email} not found.`)
    } finally {
        await prisma.$disconnect()
    }
}

main()
