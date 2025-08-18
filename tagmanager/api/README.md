# Tag Manager - API Backend + Dashboard

Complete backend solution for Tag Manager including RESTful API, database management, and dashboard UI serving. Handles all Tag Manager functionality and serves the main application interface to authenticated users.

## Features

### API Backend
- **Authentication**: JWT-based authentication with refresh tokens
- **Tag CRUD**: Create, read, update, delete tag operations
- **Application Management**: Connect and manage different applications
- **Bulk Operations**: Handle batch operations for multiple tags
- **Analytics**: Generate usage statistics and performance metrics
- **Real-time Sync**: WebSocket connections for real-time updates
- **Third-party Integrations**: Connect with external applications and APIs

### Dashboard UI
- **Main Application**: Complete Tag Manager interface
- **User Dashboard**: Overview of tags, applications, and analytics
- **Tag Management**: Interactive tag creation, editing, and organization
- **Application Integration**: UI for connecting and managing applications
- **Bulk Operations Interface**: Batch processing tools
- **Analytics Dashboard**: Visual reports and statistics
- **Account Settings**: User preferences and profile management

## Architecture

### Backend Services
- **RESTful API**: All Tag Manager functionality
- **Database Layer**: PostgreSQL with Prisma ORM
- **Authentication Service**: JWT token management
- **Integration Layer**: Third-party application connections
- **Real-time Service**: WebSocket for live updates
- **Queue System**: Background job processing

### Frontend Serving
- **Dashboard UI**: Serves React-based dashboard at `/dashboard`
- **Static Assets**: CSS, JS, images for the dashboard
- **Authentication Flow**: Handles post-login redirects from landing site
- **Session Management**: Maintains user sessions

## Tech Stack

- **Backend**: Node.js with Express.js / Fastify
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT + OAuth2 integrations
- **Real-time**: Socket.io for WebSocket connections
- **Queue**: Redis for background job processing
- **Frontend**: React 18+ for dashboard UI
- **UI Framework**: Tailwind CSS or Material-UI
- **Testing**: Jest + Supertest
- **Documentation**: Swagger/OpenAPI

## Project Structure

```
api/
├── src/
│   ├── routes/         # API route definitions
│   ├── controllers/    # Request handlers
│   ├── models/         # Database models
│   ├── middleware/     # Custom middleware
│   ├── services/       # Business logic
│   ├── integrations/   # Third-party integrations
│   ├── dashboard/      # Dashboard UI components
│   ├── utils/          # Utility functions
│   └── types/          # TypeScript type definitions
├── prisma/             # Database schema and migrations
├── public/             # Static assets for dashboard
├── tests/              # API and integration tests
├── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /auth/login` - User login (from landing site)
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - User logout
- `GET /auth/verify` - Verify token validity

### Tags
- `GET /api/tags` - Get all user tags
- `POST /api/tags` - Create new tag
- `PUT /api/tags/:id` - Update tag
- `DELETE /api/tags/:id` - Delete tag
- `POST /api/tags/bulk` - Bulk operations

### Applications
- `GET /api/applications` - Get connected applications
- `POST /api/applications` - Connect new application
- `PUT /api/applications/:id` - Update application settings
- `DELETE /api/applications/:id` - Disconnect application

### Analytics
- `GET /api/analytics/usage` - Tag usage statistics
- `GET /api/analytics/performance` - Performance metrics

### Dashboard Routes
- `GET /dashboard` - Main dashboard interface
- `GET /dashboard/*` - Dashboard sub-pages
- `GET /api/user/profile` - User profile data
- `PUT /api/user/settings` - Update user settings

## User Flow Integration

1. **Login**: User authenticates on landing site
2. **Token Generation**: API generates JWT token
3. **Redirect**: User redirected to `/dashboard` with token
4. **Dashboard Serving**: API serves React dashboard UI
5. **API Calls**: Dashboard makes API calls to backend
6. **Real-time Updates**: WebSocket connection for live data

## Getting Started

```bash
cd tagmanager/api
npm install
npm run dev
```

## Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/tagmanager
JWT_SECRET=your-jwt-secret
JWT_REFRESH_SECRET=your-refresh-secret
REDIS_URL=redis://localhost:6379
PORT=3001
DASHBOARD_BUILD_PATH=./build/dashboard
CORS_ORIGIN=https://tagmanager.softfixes.com
```

## Database Setup

```bash
npx prisma migrate dev
npx prisma db seed
npx prisma studio  # View database in browser
```

## Dashboard Development

```bash
# Development mode (API + Dashboard hot reload)
npm run dev:full

# Build dashboard for production
npm run build:dashboard

# API only (if dashboard is built)
npm run dev:api
```

## Testing

```bash
npm test                # Run all tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Run tests with coverage
npm run test:api       # API tests only
npm run test:dashboard # Dashboard tests only
```

## Deployment

- **Live API**: `api.tagmanager.softfixes.com`
- **Dashboard**: `api.tagmanager.softfixes.com/dashboard`
- **API Docs**: `api.tagmanager.softfixes.com/docs`

## Security Features

- **JWT Authentication**: Secure token-based auth
- **CORS Protection**: Restricted origins
- **Rate Limiting**: API request throttling
- **Input Validation**: Request data validation
- **SQL Injection Protection**: Parameterized queries
- **XSS Protection**: Content Security Policy

## Performance Optimization

- **Database Indexing**: Optimized queries
- **Caching**: Redis for frequently accessed data
- **Asset Optimization**: Compressed static files
- **Connection Pooling**: Efficient database connections
- **Background Jobs**: Async processing for heavy tasks 