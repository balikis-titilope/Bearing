# Bearing - Career Development Platform

Bearing is a comprehensive career development platform built with Next.js 16 that helps students and junior professionals discover their ideal career path, identify skill gaps, and build a portfolio that gets them hired.

## 🚀 Features

### Core Features
- **Career Path Discovery**: 8 pre-defined tech career paths with detailed roadmaps
- **Skill Assessment**: Personalized evaluation to identify strengths and gaps
- **Project-Based Learning**: Hands-on projects with GitHub integration
- **Progress Tracking**: Real-time readiness scoring and milestone tracking
- **Gamified Experience**: Level progression from Junior to Senior roles

### Technical Features
- **Modern Tech Stack**: Next.js 16, React 19, TypeScript 5
- **Authentication**: NextAuth.js with Google OAuth and email/password
- **Database**: Prisma ORM with SQLite (configurable for production)
- **Responsive Design**: Mobile-first approach with dark/light themes
- **Accessibility**: WCAG 2.1 AA compliance with keyboard navigation
- **Performance**: Optimized builds with caching and error boundaries

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.3
- **Styling**: CSS Modules with custom design system
- **Icons**: Lucide React
- **Animations**: Framer Motion (via MotionProvider)

### Backend
- **Authentication**: NextAuth.js 5.0.0-beta.30
- **Database**: Prisma 5.22.0 with SQLite
- **Validation**: Zod 4.3.6
- **Email**: Resend 6.9.2
- **Security**: bcryptjs, rate limiting

### Development Tools
- **Type Safety**: TypeScript 5
- **Linting**: ESLint with Next.js config
- **Testing**: Jest with React Testing Library
- **Build Tool**: Turbopack

## 📁 Project Structure

```
├── app/                     # Next.js App Router pages
│   ├── (auth)/             # Authentication routes
│   ├── dashboard/          # Protected dashboard
│   ├── paths/             # Career paths
│   └── projects/          # Project management
├── components/             # Reusable React components
│   ├── career/            # Career-specific components
│   ├── layout/            # Layout components
│   ├── sections/          # Landing page sections
│   ├── ui/                # Base UI components
│   └── providers/         # React context providers
├── lib/                   # Utility libraries
│   ├── engines/           # Business logic engines
│   ├── cache.ts           # Caching system
│   ├── db.ts              # Prisma client
│   ├── rate-limit.ts      # Rate limiting
│   └── schemas.ts         # Zod validation schemas
├── actions/               # Server actions
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd learningpath
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your environment variables:
   ```env
   AUTH_SECRET="" # Generate with: openssl rand -base64 32
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   RESEND_API_KEY=""
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   DATABASE_URL="file:./dev.db"
   ```

4. **Database setup**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   npx prisma db seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Quality Assurance
npm run lint         # Run ESLint
npm run test         # Run test suite
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Database
npx prisma studio   # Open database GUI
npx prisma migrate dev # Run migrations
npx prisma generate  # Generate Prisma client
```

## 🧪 Testing

The application includes comprehensive test coverage using Jest and React Testing Library:

- **Unit Tests**: Test individual components and utilities
- **Integration Tests**: Test component interactions
- **E2E Tests**: End-to-end user workflows (planned)

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode during development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

Test files are located alongside components with `.test.tsx` or `.test.ts` extensions.

## 🔒 Security Features

- **Authentication**: Secure session management with JWT strategy
- **Rate Limiting**: Protection against brute force attacks
- **Input Validation**: Comprehensive Zod schema validation
- **Password Security**: bcrypt with 12 rounds for password hashing
- **XSS Protection**: Secure script handling without dangerouslySetInnerHTML
- **CSRF Protection**: Built-in NextAuth security features

## ♿ Accessibility

Bearing is committed to web accessibility:

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and landmarks
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects prefers-reduced-motion settings
- **High Contrast Mode**: Support for high contrast preferences

## 🎨 Design System

The application uses a custom design system with:

- **Color Palette**: Blue-based primary colors with semantic color variations
- **Typography**: Plus Jakarta Sans for headings, Inter for body text
- **Spacing**: Consistent spacing scale with CSS custom properties
- **Components**: Reusable UI components with variant systems
- **Dark Mode**: System preference detection with manual toggle

## 📊 Performance

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component usage
- **Database Optimization**: Efficient queries with proper indexing
- **Caching**: In-memory caching with TTL (Redis-ready)
- **Bundle Size**: Optimized with tree shaking and dynamic imports

## 🚀 Deployment

### Environment Variables for Production
```env
AUTH_SECRET="" # Required: Generate secure secret
GOOGLE_CLIENT_ID="" # Optional: For Google OAuth
GOOGLE_CLIENT_SECRET="" # Optional: For Google OAuth
RESEND_API_KEY="" # Optional: For email services
NEXT_PUBLIC_APP_URL="" # Required: Your production URL
DATABASE_URL="" # Required: Production database URL
```

### Build and Deploy
```bash
# Build the application
npm run build

# Start the production server
npm start
```

### Production Considerations
- Use a production-grade database (PostgreSQL recommended)
- Set up Redis for caching in production
- Configure environment variables properly
- Enable HTTPS
- Set up monitoring and error tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Prisma](https://prisma.io/) - Next-generation Node.js and TypeScript ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- [Tailwind CSS](https://tailwindcss.com/) - Inspiration for utility-first styling
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ for the tech community**