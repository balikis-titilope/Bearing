import { describe, it, expect } from '@jest/globals'
import { rateLimit } from '../rate-limit'

describe('Rate Limiting', () => {
  beforeEach(() => {
    // Clear the rate limit store before each test
    const rateLimitStore = (global as any).rateLimitStore
    if (rateLimitStore) {
      rateLimitStore.clear()
    }
  })

  it('allows requests within limit', () => {
    const result1 = rateLimit('test@example.com', 5, 60000)
    expect(result1.success).toBe(true)
    expect(result1.remaining).toBe(4)

    const result2 = rateLimit('test@example.com', 5, 60000)
    expect(result2.success).toBe(true)
    expect(result2.remaining).toBe(3)
  })

  it('blocks requests that exceed limit', () => {
    // Make 5 requests (at the limit)
    for (let i = 0; i < 5; i++) {
      const result = rateLimit('test@example.com', 5, 60000)
      expect(result.success).toBe(true)
    }

    // 6th request should be blocked
    const blockedResult = rateLimit('test@example.com', 5, 60000)
    expect(blockedResult.success).toBe(false)
    expect(blockedResult.remaining).toBe(0)
  })

  it('resets after time window expires', async () => {
    // Make requests up to the limit
    for (let i = 0; i < 5; i++) {
      rateLimit('test@example.com', 5, 100) // 100ms window
    }

    // Should be blocked
    const blockedResult = rateLimit('test@example.com', 5, 100)
    expect(blockedResult.success).toBe(false)

    // Wait for window to expire
    await new Promise(resolve => setTimeout(resolve, 150))

    // Should be allowed again
    const resetResult = rateLimit('test@example.com', 5, 100)
    expect(resetResult.success).toBe(true)
  })

  it('handles different identifiers separately', () => {
    const result1 = rateLimit('user1@example.com', 3, 60000)
    const result2 = rateLimit('user2@example.com', 3, 60000)
    
    expect(result1.success).toBe(true)
    expect(result2.success).toBe(true)
    expect(result1.remaining).toBe(2)
    expect(result2.remaining).toBe(2)
  })

  it('provides correct reset time', () => {
    const beforeTime = Date.now()
    const result = rateLimit('test@example.com', 5, 60000)
    const afterTime = Date.now()

    expect(result.resetTime).toBeDefined()
    expect(result.resetTime!).toBeGreaterThanOrEqual(beforeTime + 60000)
    expect(result.resetTime!).toBeLessThanOrEqual(afterTime + 60000)
  })
})