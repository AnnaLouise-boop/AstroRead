# Astrology Consultation Web Application

## Overview

This is a full-stack astrology consultation web application built with React, TypeScript, and Express. The app allows users to submit detailed astrology intake forms and book consultation appointments. It features a cosmic-themed design with an immersive celestial UI, multi-language support (English and Burmese), and comprehensive form handling for astrological data collection.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development/build tooling
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom cosmic-themed design system featuring gradient backgrounds, floating particles, and celestial animations
- **State Management**: React Hook Form for form handling with Zod validation schemas
- **Data Fetching**: TanStack React Query for server state management and API interactions
- **Routing**: Wouter for lightweight client-side routing
- **Internationalization**: Custom i18n implementation supporting English and Burmese languages

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with dedicated routes for consultations and bookings
- **Validation**: Zod schemas shared between frontend and backend for type safety
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot reload with Vite integration in development mode

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with TypeScript-first schema definitions
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless PostgreSQL adapter
- **Fallback**: In-memory storage implementation for development/testing scenarios

### Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **User Model**: Basic user schema with username/password authentication ready for implementation
- **Security**: CORS configuration and session-based authentication architecture prepared

### External Dependencies
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI for accessible component primitives
- **Form Validation**: Hookform/resolvers with Zod for runtime type validation
- **Styling**: Google Fonts integration for typography (Inter, Playfair Display)
- **Development Tools**: Replit-specific plugins for cartographer and runtime error handling
- **Build System**: ESBuild for production bundling of server code
- **Asset Management**: Vite for frontend asset bundling and development server

### Key Architectural Decisions

**Monorepo Structure**: Shared TypeScript types and schemas between client/server in a `shared` directory to ensure type safety across the full stack.

**Component-Based UI**: Modular React components with a focus on reusability, including specialized astrology components like zodiac wheels, birth chart previews, and booking systems.

**Validation Layer**: Shared Zod schemas between frontend and backend ensure consistent data validation and type safety throughout the application.

**Responsive Design**: Mobile-first approach with cosmic-themed animations and particles that work across all device sizes.

**Database Abstraction**: Storage interface pattern allows for easy switching between in-memory storage (development) and PostgreSQL (production) without changing business logic.