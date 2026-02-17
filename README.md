This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Local Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Docker Setup

This project supports both development and production Docker configurations.

#### Development Setup (with Hot Reload)

Use this setup for active development. Code changes are instantly reflected in the browser without needing to rebuild the container.

**Prerequisites:**
- Docker and Docker Compose installed
- The `local` Docker network must exist: `docker network create local`

**Start development container:**
```bash
# Build and start in foreground (see logs)
docker-compose -f docker-compose.dev.yaml up --build

# Or run in background
docker-compose -f docker-compose.dev.yaml up -d

# View logs (if running in background)
docker-compose -f docker-compose.dev.yaml logs -f

# Stop container
docker-compose -f docker-compose.dev.yaml down
```

**Features:**
- ✅ Hot reload enabled - changes to code are instantly reflected
- ✅ No need to rebuild container for code changes
- ✅ Runs on port 3002
- ✅ Source code mounted as volumes
- ⚠️ Only rebuild if `package.json` changes (new dependencies)

**What triggers hot reload:**
- Changes to files in `src/`
- Changes to `public/` assets
- Changes to config files (next.config.ts, tsconfig.json, etc.)

#### Production Setup

Use this setup for production deployment. This creates an optimized, standalone build.

**Start production container:**
```bash
# Build and start in foreground
docker-compose up --build

# Or run in background
docker-compose up -d

# Stop container
docker-compose down
```

**Features:**
- ✅ Optimized production build
- ✅ Minimal image size
- ✅ Runs on port 3002
- ⚠️ Requires rebuild for any code changes

#### Rebuilding Containers

**Development:** Only rebuild when dependencies change:
```bash
docker-compose -f docker-compose.dev.yaml up --build
```

**Production:** Rebuild whenever code changes:
```bash
docker-compose up --build
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
