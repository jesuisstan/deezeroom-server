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

Starts the development server at `http://localhost:3000` (or `http://0.0.0.0:3000`)

The server listens on all network interfaces (`0.0.0.0`) by default, making it accessible from other devices on your local network.

**Customization options:**

- **Change port:**

  **Bash (Linux/Mac):**

  ```bash
  PORT=8080 npm run dev
  ```

  **Note:** In bash, `PORT=8080 npm run dev` sets the variable only for that command. If you used `export PORT=8080`, reset it with:

  ```bash
  unset PORT
  ```

  **PowerShell (Windows):**

  ```powershell
  $env:PORT=8080; npm run dev
  ```

  **To reset to default port (3000):**

  **Bash (Linux/Mac):**

  ```bash
  unset PORT
  ```

  **PowerShell (Windows):**

  ```powershell
  Remove-Item env:PORT
  # or
  $env:PORT = $null
  ```

  After resetting, `npm run dev` will use the default port 3000.

- **Use specific IP address:**

  **Bash (Linux/Mac):**

  ```bash
  npm run dev -- -H 192.168.1.100
  ```

  **PowerShell (Windows):**

  ```powershell
  npx next dev -H 192.168.1.100
  ```

  Or combine with port:

  **Bash (Linux/Mac):**

  ```bash
  PORT=8080 npm run dev -- -H 192.168.1.100
  ```

  **PowerShell (Windows):**

  ```powershell
  $env:PORT=8080; npx next dev -H 192.168.1.100
  ```

- **Restrict to localhost only:**

  **Bash (Linux/Mac):**

  ```bash
  npm run dev -- -H localhost
  ```

  **PowerShell (Windows):**

  ```powershell
  npx next dev -H localhost
  ```

**Note:** In production mode (`npm start`), you can set both `PORT` and `HOSTNAME` via environment variables:

**Bash (Linux/Mac):**

```bash
PORT=3000 HOSTNAME=0.0.0.0 npm start
```

**PowerShell (Windows):**

```powershell
$env:PORT=3000; $env:HOSTNAME="0.0.0.0"; npm start
```

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

This project does not require a `.env` file. Configuration can be done in several ways:

### Option 1: Command-line (recommended for one-time use)

- **Development:** Use `PORT` and `-H` flags (see [Development](#development) section)
- **Production (local):** Use `PORT` and `HOSTNAME` environment variables via command line

**Note:** In PowerShell, `$env:PORT=8080` sets the variable only for the current terminal session and won't affect other projects or terminals.

### Option 2: `.env.local` file (recommended for persistent settings)

Create a `.env.local` file in the project root to isolate settings for this project:

```env
PORT=8080
HOSTNAME=0.0.0.0
```

Next.js automatically reads `.env.local` files. This keeps your project settings separate from other projects.

**Important:** Add `.env.local` to `.gitignore` (already included) to avoid committing local settings.

### Production (Vercel)

No configuration needed - Vercel manages everything automatically.

## Deployment

### Vercel

This project is configured for deployment on Vercel.

**Important:** When deploying to Vercel, you do NOT need to set `PORT` or `HOSTNAME` environment variables. Vercel automatically manages:

- Port assignment (Vercel uses its own internal port)
- Hostname (your app will be accessible via Vercel's provided URL, e.g., `https://your-project.vercel.app`)

**No environment variables are required** for this server application. The GraphQL API endpoint will be available at:

```
https://your-project.vercel.app/api/graphql
```

To deploy:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in Vercel dashboard
3. Vercel will automatically detect Next.js and deploy

The deployed URL will be provided by Vercel and can be used as `EXPO_PUBLIC_APP_URL` in your `deezeroom` client application.
