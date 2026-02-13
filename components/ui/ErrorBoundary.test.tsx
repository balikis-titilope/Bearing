import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals'
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ErrorBoundary } from './ErrorBoundary'

// Component that throws an error for testing
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>No error</div>
}

describe('ErrorBoundary', () => {
  let consoleError: jest.SpyInstance

  beforeEach(() => {
    consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleError.mockRestore()
  })

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    )

    expect(screen.getByText('No error')).toBeInTheDocument()
  })

  it('catches and displays error when child component throws', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    expect(screen.getByText('Try Again')).toBeInTheDocument()
  })

  it('logs error to console', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(consoleError).toHaveBeenCalledWith(
      'Error Boundary caught an error:',
      expect.any(Error),
      expect.any(Object)
    )
  })

  it('resets error when reset button is clicked', async () => {
    const TestComponent = () => {
      const [shouldThrow, setShouldThrow] = React.useState(true)
      
      return (
        <ErrorBoundary>
          <button onClick={() => setShouldThrow(false)}>Reset Child</button>
          <ThrowError shouldThrow={shouldThrow} />
        </ErrorBoundary>
      )
    }

    render(<TestComponent />)

    // Should show error initially
    expect(screen.getByRole('alert')).toBeInTheDocument()
    
    // Click reset button in error boundary
    const resetButton = screen.getByText('Try Again')
    await userEvent.click(resetButton)

    // Error should be cleared and normal component should render
    await waitFor(() => {
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })
  })

  it('shows error details in development mode', () => {
    const originalEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'development'

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText('Error details (development only)')).toBeInTheDocument()

    process.env.NODE_ENV = originalEnv
  })

  it('hides error details in production mode', () => {
    const originalEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'production'

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.queryByText('Error details (development only)')).not.toBeInTheDocument()

    process.env.NODE_ENV = originalEnv
  })
})