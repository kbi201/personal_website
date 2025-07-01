# Kelly Irahola - Computer Science Portfolio

## Overview

This is a full-stack web application built as a personal portfolio website for Kelly B. Irahola Vallejos, showcasing her computer science expertise, projects, and professional experience. The application features a modern, responsive React frontend with a clean portfolio design and an Express.js backend foundation ready for future enhancements.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Prepared for session handling with connect-pg-simple

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Migration System**: Drizzle Kit for schema migrations
- **Connection**: Neon serverless PostgreSQL (configured but not yet implemented)
- **Current State**: Using in-memory storage with database-ready interfaces

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Personal introduction with contact information
3. **About Section**: Professional background and skills overview
4. **Projects Section**: Technical project showcase with categorization
5. **Experience Section**: Professional timeline with visual indicators
6. **Skills Section**: Technical competencies with progress indicators
7. **Contact Section**: Interactive contact form with toast notifications
8. **Footer**: Social links and professional information

### Backend Components
1. **Storage Interface**: Abstract storage layer supporting CRUD operations
2. **Route Registration**: Modular route system with API prefix structure
3. **Error Handling**: Centralized error handling with proper HTTP status codes
4. **Development Setup**: Hot reloading with Vite integration in development

### UI System
- **Design System**: Consistent color palette with CSS custom properties
- **Component Library**: Comprehensive set of reusable UI components
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA-compliant components with keyboard navigation support

## Data Flow

### Current Implementation
1. **Static Content**: All portfolio content is statically defined in React components
2. **Form Handling**: Contact forms use client-side validation with simulated submission
3. **State Management**: React Query manages any future API interactions
4. **Navigation**: Client-side routing handles page transitions

### Future Database Integration
1. **User Management**: Ready-to-implement user schema with authentication
2. **Dynamic Content**: Backend storage interface prepared for content management
3. **Session Handling**: PostgreSQL session store configuration in place

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management for React
- **wouter**: Lightweight client-side routing

### UI Dependencies
- **@radix-ui/***: Unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library for consistent iconography

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: esbuild compiles TypeScript server to `dist/index.js`
3. **Assets**: Static assets and fonts loaded from CDN for performance

### Environment Configuration
- **Development**: `npm run dev` starts development server with hot reloading
- **Production**: `npm run build && npm start` creates optimized build and starts server
- **Database**: Environment variable `DATABASE_URL` required for PostgreSQL connection

### Hosting Considerations
- **Static Assets**: Frontend can be served from CDN
- **API Routes**: Backend requires Node.js runtime environment
- **Database**: PostgreSQL database connection required for persistence features

## Recent Changes
- June 30, 2025: Updated skills section design - removed progress bars, added Java/Haskell/Prolog languages
- June 30, 2025: Added current Girls Who Code Lead TA position (June 2025-Present) with 70+ students
- June 30, 2025: Reordered experience timeline to chronological order
- June 30, 2025: Added personal profile picture (pfp.png) to hero section

## Changelog
- June 30, 2025: Initial portfolio setup with complete sections and responsive design

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Clean card layouts without progress bars for skills display.