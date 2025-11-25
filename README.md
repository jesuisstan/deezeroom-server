# DeezerRoom Server

GraphQL API server for DeezerRoom application.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **GraphQL Yoga** - GraphQL server
- **ESLint + Prettier** - Code quality and formatting

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:3000`

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Code Quality

### Linting

```bash
npm run lint        # Check for linting errors
npm run lint:fix    # Auto-fix linting errors
```

### Formatting

```bash
npm run format        # Format all files
npm run format:check  # Check formatting without changes
```

## Project Structure

```
deezeroom-server/
├── src/
│   └── app/
│       └── api/
│           └── graphql/     # GraphQL API endpoint
├── graphql/                 # GraphQL schema and resolvers
├── services/                # Business logic (Deezer API integration)
└── types/                   # TypeScript type definitions
```

## Environment Variables

Create a `.env.local` file:

```env
# Add your environment variables here
```

## Deployment

This project is configured for deployment on Vercel.
