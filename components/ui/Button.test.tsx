import { describe, it, expect, beforeEach, jest } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('button', 'primary', 'md')
  })

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button')).toHaveClass('secondary')

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole('button')).toHaveClass('outline')

    rerender(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByRole('button')).toHaveClass('ghost')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('sm')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('lg')
  })

  it('passes through additional props', () => {
    render(<Button disabled data-testid="custom-button">Disabled</Button>)
    
    const button = screen.getByTestId('custom-button')
    expect(button).toBeDisabled()
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })
})