# Tag Manager - Landing Site

Complete website for Tag Manager including marketing pages and user authentication. After login, users are redirected to the dashboard served by the API backend.

## Purpose

This is the main website for Tag Manager that handles:
- **Marketing**: Product introduction, features, pricing, testimonials
- **Authentication**: User registration, login, password reset
- **User onboarding**: Account setup and initial configuration
- **Post-login redirect**: Seamless transition to the dashboard

## Features

### Marketing Pages
- **Hero Section**: Compelling introduction with clear value proposition
- **Feature Showcase**: Detailed feature explanations with visuals
- **Pricing Plans**: Clear pricing tiers and feature comparisons
- **Testimonials**: Customer success stories and reviews
- **About**: Company information and team
- **Contact**: Support and sales contact information

### Authentication System
- **User Registration**: Secure account creation with email verification
- **Login/Logout**: JWT-based authentication
- **Password Reset**: Email-based password recovery
- **Account Verification**: Email confirmation for new accounts
- **Session Management**: Secure session handling

### Post-Authentication Flow
- **Dashboard Redirect**: After login, redirect to `api.tagmanager.softfixes.com/dashboard`
- **Token Passing**: Secure token transfer for seamless experience
- **Role Management**: Different access levels for different user types

## Tech Stack

- **Frontend**: Next.js 13+ for SEO optimization
- **Styling**: Tailwind CSS with custom components
- **Animation**: Framer Motion for smooth interactions
- **Forms**: React Hook Form with validation
- **Authentication**: JWT with httpOnly cookies
- **API Communication**: Axios with interceptors
- **SEO**: Built-in Next.js optimization

## Project Structure

```
landing/
├── src/
│   ├── pages/          # Next.js pages (marketing + auth)
│   ├── components/     # Reusable UI components
│   ├── sections/       # Page sections (Hero, Features, etc.)
│   ├── auth/           # Authentication components
│   ├── styles/         # Global styles and themes
│   ├── utils/          # Utility functions and helpers
│   ├── data/           # Static data (features, pricing, etc.)
│   └── assets/         # Images, videos, icons
├── public/             # Static files
├── package.json
└── README.md
```

## Pages

### Marketing Pages
- **Home** (`/`) - Main landing page with hero and features
- **Features** (`/features`) - Detailed feature breakdown
- **Pricing** (`/pricing`) - Pricing plans and comparisons
- **About** (`/about`) - About Tag Manager and team
- **Contact** (`/contact`) - Contact and support information

### Authentication Pages
- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - User registration
- **Forgot Password** (`/forgot-password`) - Password reset request
- **Reset Password** (`/reset-password`) - Password reset form
- **Verify Email** (`/verify-email`) - Email verification

### Utility Pages
- **Terms** (`/terms`) - Terms of service
- **Privacy** (`/privacy`) - Privacy policy
- **404** - Page not found

## Authentication Flow

1. **Registration**: User creates account on `/signup`
2. **Email Verification**: User verifies email address
3. **Login**: User authenticates on `/login`
4. **Token Storage**: JWT stored in httpOnly cookie
5. **Dashboard Redirect**: User redirected to `api.tagmanager.softfixes.com/dashboard`
6. **Session Persistence**: Automatic token refresh for long sessions

## Getting Started

```bash
cd tagmanager/landing
npm install
npm run dev
```

## Environment Variables

```env
NEXT_PUBLIC_API_URL=https://api.tagmanager.softfixes.com
NEXT_PUBLIC_DASHBOARD_URL=https://api.tagmanager.softfixes.com/dashboard
NEXT_PUBLIC_SITE_URL=https://tagmanager.softfixes.com
JWT_SECRET=your-jwt-secret
EMAIL_PROVIDER_API_KEY=your-email-api-key
```

## Content Management

- **Features**: Defined in `src/data/features.js`
- **Pricing**: Configured in `src/data/pricing.js`
- **Testimonials**: Stored in `src/data/testimonials.js`
- **Team Info**: Located in `src/data/team.js`

## SEO & Performance

- **Server-side rendering** with Next.js
- **Automatic sitemap** generation
- **Meta tags** and Open Graph optimization
- **Image optimization** with Next.js Image component
- **Performance monitoring** with Web Vitals

## Deployment

Deploys to: `tagmanager.softfixes.com`

## Integration with API

- **Authentication endpoints**: `/api/auth/*`
- **User registration**: `POST /api/auth/register`
- **User login**: `POST /api/auth/login`
- **Password reset**: `POST /api/auth/forgot-password`
- **Dashboard redirect**: Automatic with valid JWT token 