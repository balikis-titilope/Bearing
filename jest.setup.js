import '@testing-library/jest-dom'

// Mock NextAuth
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => ({
    data: null,
    status: 'unauthenticated',
  })),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

// Mock Prisma
jest.mock('@/lib/db', () => ({
  db: {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    careerPath: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
    },
    responsibility: {
      findMany: jest.fn(),
    },
    level: {
      findMany: jest.fn(),
    },
    learningSubtopic: {
      count: jest.fn(),
    },
    project: {
      count: jest.fn(),
    },
    userProgress: {
      findMany: jest.fn(),
    },
    userProject: {
      findMany: jest.fn(),
    },
  },
}))

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  })),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  usePathname: jest.fn(() => '/'),
}))

// Global test cleanup
afterEach(() => {
  jest.clearAllMocks()
})