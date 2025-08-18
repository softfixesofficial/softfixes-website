# Tag Manager

**Streamline your tag management across multiple applications. Login once, manage everywhere.**

## Overview

Tag Manager is SoftFixes' flagship product designed to simplify tag management across different applications and platforms. With Single Sign-On integration and unified dashboard, managing tags has never been easier.

## Project Structure

```
tagmanager/
├── landing/          # Marketing website + authentication
├── api/              # Backend API + dashboard services
├── docs/             # Documentation and guides
└── README.md         # This file
```

## Key Features

- 🔐 **Single Sign-On Integration** - Login once, access all applications
- 🎯 **Multi-Application Support** - Manage tags across different platforms
- 📊 **Real-time Tag Analytics** - Monitor tag performance and usage
- ⚡ **Bulk Tag Operations** - Efficient batch processing
- 🔄 **Automated Synchronization** - Keep tags in sync across applications
- 📱 **Mobile-Friendly Interface** - Manage tags on any device

## Architecture

### Landing Site
- **Marketing pages**: Product introduction, features, pricing
- **Authentication**: Login, signup, password reset
- **Post-login redirect**: Users are redirected to the dashboard served by the API

### API Backend
- **RESTful API**: All Tag Manager functionality
- **Dashboard UI**: Serves the main application interface
- **Database**: User data, tags, applications, analytics

## Development

Each directory contains its own README with specific setup instructions.

## Deployment

- **Landing + Auth**: `tagmanager.softfixes.com`
- **API + Dashboard**: `api.tagmanager.softfixes.com`
- **Documentation**: `docs.tagmanager.softfixes.com`

## User Flow

1. **Discovery**: User visits `tagmanager.softfixes.com`
2. **Marketing**: Learn about features and pricing
3. **Signup**: Create account on the landing site
4. **Login**: Authenticate on the landing site
5. **Dashboard**: Redirected to `api.tagmanager.softfixes.com/dashboard`
6. **Usage**: Manage tags through the dashboard interface

## Getting Started

1. Choose the component you want to work on
2. Navigate to the respective directory
3. Follow the README instructions in that directory 