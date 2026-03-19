# Copilot Instructions for AI Agents

## Project Overview
- **Architecture:** Single-page React app using Vite, TypeScript, Tailwind CSS, and shadcn-ui. All main UI logic is in `src/`.
- **Entry Points:**
  - Main app: [`src/main.tsx`](src/main.tsx)
  - Root component: [`src/App.tsx`](src/App.tsx)
  - Page routing: [`src/pages/`](src/pages/)
- **UI Components:**
  - Custom and shadcn-ui components in [`src/components/`](src/components/) and [`src/components/ui/`](src/components/ui/)
  - Use composable, functional React components. Prefer shadcn-ui for new UI elements.

## Developer Workflows
- **Build:** Use `bun run build` (preferred) or `npm run build` for production builds. Output goes to `docs/` for static hosting.
- **Dev Server:** Use `bun run dev` or `npm run dev` for local development.
- **Testing:**
  - Use `bun run test` or `npm run test` (see [`src/test/`](src/test/)).
  - Tests use Vitest. Place new tests in `src/test/`.
- **Linting:** Run `bun run lint` or `npm run lint`.

## Project Conventions
- **Static Site Hosting:**
  - Built site is output to [`docs/`](docs/) for GitHub Pages or similar static hosting.
  - `public/robots.txt` and `docs/robots.txt` are managed separately.
- **Component Structure:**
  - Use `src/components/ui/` for shadcn-ui primitives.
  - Use `src/components/` for custom sections (e.g., `HeroSection.tsx`, `Footer.tsx`).
- **Hooks:** Place custom hooks in [`src/hooks/`](src/hooks/).
- **Utilities:** Place shared utilities in [`src/lib/utils.ts`](src/lib/utils.ts).

## Integration & External Dependencies
- **Lovable Platform:**
  - Project can be edited and deployed via [Lovable](https://lovable.dev/).
  - Changes made in Lovable are auto-committed to this repo.
- **Domain Setup:** Custom domains managed via Lovable settings.

## Patterns & Examples
- **Example UI Pattern:**
  - Use shadcn-ui primitives for new UI (e.g., [`src/components/ui/button.tsx`](src/components/ui/button.tsx)).
  - Compose sections in [`src/components/`](src/components/) for page structure.
- **Example Test:**
  - See [`src/test/example.test.ts`](src/test/example.test.ts) for Vitest usage.

## Key Files & Directories
- [`src/`](src/) — Main app code
- [`docs/`](docs/) — Static build output
- [`src/components/`](src/components/) — Custom and UI components
- [`src/hooks/`](src/hooks/) — Custom hooks
- [`src/lib/`](src/lib/) — Shared utilities
- [`src/test/`](src/test/) — Tests

---
**Update this file if project conventions change.**
