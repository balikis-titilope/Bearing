# Contributing to Bearing

Thank you for your interest in contributing to Bearing! This guide will help you get started with contributing to our career development platform.

## 🚀 Quick Start

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/bearing.git
   cd bearing
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment**
   ```bash
   cp .env.example .env
   # Fill in your environment variables
   ```

4. **Database Setup**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start Development**
   ```bash
   npm run dev
   ```

## 📋 Development Guidelines

### Code Style

We use the following tools and conventions:

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: Consistent code formatting (configured with ESLint)
- **CSS Modules**: Component-scoped styling

#### TypeScript Guidelines

- **No `any` types**: Always define proper interfaces
- **Function signatures**: Explicit return types for exported functions
- **Props interfaces**: Define interfaces for component props
- **Error handling**: Use proper error types and handling

Example:
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ variant, size, children, ...props }) => {
  // Implementation
};
```

### Component Guidelines

#### File Structure
```
components/
├── ui/
│   ├── Button.tsx
│   ├── Button.module.css
│   ├── Button.test.tsx
│   └── index.ts (optional, for exports)
```

#### Component Pattern
```typescript
'use client';

import React from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  // Define props here
}

export const ComponentName: React.FC<ComponentNameProps> = ({ ...props }) => {
  // Component implementation
};
```

### Testing Guidelines

We use Jest and React Testing Library for testing.

#### Test Structure
```typescript
import { render, screen } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    // Test user interactions
  });

  it('displays error states', () => {
    // Test error handling
  });
});
```

#### Coverage Requirements
- **Components**: Minimum 80% coverage
- **Utilities**: Minimum 90% coverage
- **Actions**: Minimum 85% coverage

## 🎨 UI/UX Guidelines

### Design System

#### Colors
- Use CSS custom properties defined in `globals.css`
- Follow the established color hierarchy
- Ensure sufficient contrast ratios (WCAG AA)

#### Typography
- Headings: Plus Jakarta Sans
- Body: Inter
- Use semantic HTML tags appropriately

#### Accessibility

Every component must:
- Support keyboard navigation
- Include proper ARIA labels
- Have visible focus indicators
- Pass accessibility tests

```typescript
// Good example
<button
  onClick={handleClick}
  aria-label="Close dialog"
  className={styles.button}
>
  ×
</button>
```

## 🔧 Backend Guidelines

### Database

#### Prisma Schema
- Use descriptive field names
- Include proper relationships
- Add indexes for frequently queried fields
- Use proper data types

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  posts     Post[]
}
```

#### Server Actions
- Use proper TypeScript interfaces
- Include error handling
- Validate all inputs
- Use rate limiting for auth endpoints

```typescript
interface CreatePostData {
  title: string;
  content: string;
  published: boolean;
}

export const createPost = async (data: CreatePostData) => {
  const validated = CreatePostSchema.safeParse(data);
  if (!validated.success) {
    return { error: "Invalid data" };
  }
  
  try {
    const post = await db.post.create({
      data: validated.data
    });
    return { success: "Post created", data: post };
  } catch (error) {
    return { error: "Failed to create post" };
  }
};
```

### API Routes

- Use proper HTTP methods
- Include error handling
- Validate input data
- Return consistent response format

```typescript
export async function GET(request: NextRequest) {
  try {
    const data = await fetchData();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
```

## 📝 Commit Guidelines

### Commit Message Format

We follow the Conventional Commits specification:

```
type(scope): description

[optional body]

[optional footer]
```

#### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

#### Examples
```bash
feat(auth): add rate limiting to login endpoint
fix(button): resolve focus issue in dark mode
docs(readme): update installation instructions
test(components): add Button component tests
```

## 🔄 Pull Request Process

### Before Submitting

1. **Run tests locally**
   ```bash
   npm test
   npm run lint
   npm run build
   ```

2. **Ensure test coverage**
   ```bash
   npm run test:coverage
   ```

3. **Update documentation** if needed

### PR Template

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment**: OS, browser, Node.js version
2. **Steps to reproduce**: Detailed reproduction steps
3. **Expected behavior**: What should happen
4. **Actual behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Console errors**: Any error messages

## 💡 Feature Requests

When requesting features:

1. **Problem**: What problem does this solve?
2. **Proposed solution**: How should it work?
3. **Alternatives**: Any alternative solutions considered
4. **Additional context**: Any other relevant information

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Tools
- [Figma](https://figma.com/) - Design mockups
- [Storybook](https://storybook.js.org/) - Component documentation
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance testing

## 🤝 Code of Conduct

Please be respectful and inclusive in all interactions. We welcome contributors from all backgrounds and experience levels.

## 📞 Getting Help

- **Discord**: Join our development community
- **GitHub Issues**: For bug reports and feature requests
- **Email**: Contact the maintainers directly

---

Thank you for contributing to Bearing! 🎉