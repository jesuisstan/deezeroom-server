# DeezerRoom Server

GraphQL API server for [DeezerRoom](https://deezeroom.expo.app) [application](https://github.com/jesuisstan/deezeroom).

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

Starts the development server at `http://localhost:3000` (accessible from all network interfaces `0.0.0.0`)

**Use specific IP address:**

**Bash (Linux/Mac):**

```bash
npm run dev -- -H 192.168.1.100
```

**PowerShell (Windows):**

```powershell
npx next dev -H 192.168.1.100
```

**Use custom port:**

**Bash (Linux/Mac):**

```bash
PORT=8080 npm run dev
```

**PowerShell (Windows):**

```powershell
$env:PORT=8080; npm run dev
```

**Combine port and IP:**

**Bash (Linux/Mac):**

```bash
PORT=8080 npm run dev -- -H 192.168.1.100
```

**PowerShell (Windows):**

```powershell
$env:PORT=8080; npx next dev -H 192.168.1.100
```

#### Development with Tunnel (Different Networks)

When your phone and development machine are on different networks (e.g., at School 42), you need to create a tunnel for the GraphQL server:

**Prerequisites:**

- Install `ngrok` globally:
  ```bash
  npm install -g ngrok
  ```
- Create an account at [ngrok.com](https://ngrok.com/) and get your `authtoken`
- Configure ngrok with your authtoken (one-time setup):
  ```bash
  ngrok config add-authtoken <your-authtoken>
  ```

**Start server and tunnel (two terminals):**

**Terminal 1 - Start the server:**

```bash
npm run dev
```

**Terminal 2 - Create tunnel:**

```bash
ngrok http 3000
```

**Important:** Copy the ngrok URL (e.g., `https://xxxx-xx-xx-xx-xx.ngrok-free.app`) and set it as `EXPO_PUBLIC_SERVER_URL` in your `deezeroom` client `.env` file:

```env
EXPO_PUBLIC_SERVER_URL=https://xxxx-xx-xx-xx-xx.ngrok-free.app
```

**Note:** The ngrok URL changes each time you restart the tunnel. You'll need to update `EXPO_PUBLIC_SERVER_URL` accordingly.

**For custom port (e.g., 8080):**

If you need to use a different port, start the server with that port and create a tunnel to it:

**Terminal 1:**

```bash
PORT=8080 npm run dev
```

**Terminal 2:**

```bash
ngrok http 8080
```

**PowerShell (Windows):**

```powershell
# Terminal 1
$env:PORT=8080; npm run dev

# Terminal 2
ngrok http 8080
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

## Example: Running Server with Tunnel on Custom IP and Port

**Scenario:** Start server on `localhost:3000` with ngrok tunnel for remote access.

**Step 1:** Setup ngrok (one-time):

```bash
npm install -g ngrok
ngrok config add-authtoken <your-authtoken>
```

**Step 2:** Start server (Terminal 1):

**Bash (Linux/Mac):**

```bash
npm run dev
```

**Step 3:** Create tunnel (Terminal 2):

```bash
ngrok http 3000
```

**Step 4:** Copy ngrok URL (e.g., `https://xxxx-xx-xx-xx-xx.ngrok-free.app`) and set in `deezeroom/.env`:

```env
EXPO_PUBLIC_SERVER_URL=https://xxxx-xx-xx-xx-xx.ngrok-free.app
```

**Note:** ngrok tunnels to `localhost`, so use port `3000` (not IP) in the ngrok command.
