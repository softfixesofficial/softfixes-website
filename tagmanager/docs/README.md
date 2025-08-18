# Tag Manager - Documentation

Comprehensive documentation for Tag Manager, including user guides, API documentation, and developer resources.

## Documentation Structure

```
docs/
├── user-guide/         # End-user documentation
├── api/                # API documentation
├── developer/          # Developer guides and resources
├── integrations/       # Third-party integration guides
├── troubleshooting/    # Common issues and solutions
└── README.md
```

## Content Overview

### User Guide
- **Getting Started**: Account setup and basic usage
- **Dashboard Overview**: Understanding the main interface
- **Tag Management**: Creating, editing, and organizing tags
- **Application Integration**: Connecting external applications
- **Bulk Operations**: Efficient batch processing
- **Analytics**: Understanding usage statistics
- **Account Settings**: Profile and preference management

### API Documentation
- **Authentication**: JWT token management
- **Endpoints**: Complete API reference
- **SDKs**: Available client libraries
- **Rate Limiting**: Usage limits and best practices
- **Webhooks**: Real-time event notifications
- **Examples**: Code samples and use cases

### Developer Resources
- **Architecture**: System design and components
- **Contributing**: How to contribute to Tag Manager
- **Local Development**: Setting up development environment
- **Testing**: Testing strategies and tools
- **Deployment**: Production deployment guides

### Integration Guides
- **Popular Platforms**: Shopify, WordPress, etc.
- **Custom Integrations**: Building your own integration
- **OAuth Setup**: Configuring OAuth applications
- **Webhook Configuration**: Setting up real-time sync

## Tech Stack

- **Documentation Site**: Docusaurus / GitBook
- **API Docs**: OpenAPI/Swagger with auto-generation
- **Hosting**: Vercel / Netlify
- **Search**: Algolia DocSearch
- **Analytics**: Documentation usage tracking

## Content Management

- Documentation written in Markdown
- Auto-generated API docs from OpenAPI spec
- Version control with Git
- Collaborative editing with team
- Regular content audits and updates

## Building Locally

```bash
cd tagmanager/docs
npm install
npm start
```

## Contributing

1. Create a new branch for your changes
2. Edit the relevant Markdown files
3. Test locally to ensure formatting is correct
4. Submit a pull request with clear description

## Deployment

- **Live Site**: `docs.tagmanager.softfixes.com`
- **Auto-deploy**: Pushes to main branch auto-deploy
- **Preview**: Pull requests generate preview deployments

## Content Guidelines

- Use clear, concise language
- Include practical examples
- Add screenshots for UI-heavy sections
- Keep API docs up-to-date with code
- Regular content reviews and updates 