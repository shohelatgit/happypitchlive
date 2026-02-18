# Happy Pitch - Landing Page

## Overview
A frontend-only React landing page for "Happy Pitch" - a deal-winning narrative service for financial firms. Built with Vite, React 19, and Tailwind CSS v4.

## Project Architecture
- **Frontend**: React 19 with TypeScript, Tailwind CSS v4, inline styles
- **Build System**: Vite 6 with React plugin
- **Package Manager**: npm

### Directory Structure
- `src/` - React source code
  - `src/components/generated/` - Generated page components (HeroLandingPage)
  - `src/hooks/` - Custom React hooks
  - `src/lib/` - Utility functions
  - `src/settings/` - Theme and type definitions
- `dist/` - Build output (static files)

### Key Config Files
- `vite.config.ts` - Vite dev server config (port 5000, hosts all allowed)
- `tsconfig.json` - TypeScript config with path aliases (@/ -> src/)
- `tsconfig.app.json` - App-specific TypeScript config
- `components.json` - shadcn/ui component config

## Development
- Dev server: `npx vite --host 0.0.0.0 --port 5000`
- Build: `npx vite build` (outputs to `dist/`)
- This is a static frontend-only app (no backend server needed)

## Deployment
- Static deployment serving the `dist/` directory
- Build command: `npm install --legacy-peer-deps && npx vite build`

## Recent Changes
- 2026-02-18: Replaced project with new zip - frontend-only React landing page with Tailwind CSS v4
- 2026-02-18: Configured static deployment for Replit
