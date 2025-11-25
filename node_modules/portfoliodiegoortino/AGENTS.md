# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds React + TypeScript code; `main.tsx` mounts the app and `App.tsx` is the primary layout. Keep components and hooks in their own files under `src/`, using folders when they share styles.
- `src/assets/` is for imported images/icons; `public/` is for static files referenced by URL at runtime.
- Root configs: `vite.config.ts` for bundling, `eslint.config.js` for lint rules, `tsconfig.*` for strict compiler settings, and `index.html` as the Vite entry shell.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start Vite with HMR at `http://localhost:5173`.
- `npm run build` — type-check (`tsc -b`) then bundle to `dist/`.
- `npm run preview` — serve the production build locally.
- `npm run lint` — run ESLint across the repo; add `-- --fix` to autofix.

## Coding Style & Naming Conventions
- TypeScript is `strict`; prefer explicit types for props/returns and avoid `any`.
- Use 2-space indentation, single quotes in imports, and trailing commas where ESLint expects them.
- Components and file names in `PascalCase` (e.g., `HeroSection.tsx`); hooks start with `use*`; utility helpers in `camelCase`.
- Keep JSX lean: derive UI from props/state, lift shared state up, and extract reusable pieces into `src/components/`.

## Testing Guidelines
- No automated tests are set up yet; for new features, add Vitest/RTL tests under `src/__tests__/` or alongside components (`ComponentName.test.tsx`) and aim to cover key user flows and rendering branches.
- Until a test runner is added, run `npm run lint` and exercise the affected UI in `npm run dev` before submitting.

## Commit & Pull Request Guidelines
- Follow short, imperative commit subjects (e.g., `Add contact form`, `Refine navbar spacing`); keep commits focused.
- For PRs: include a clear summary, testing notes (`npm run lint`, `npm run build`), linked issue IDs, and before/after screenshots for UI changes when possible.
- Avoid committing `.env*`, `dist/`, or generated artifacts; ensure branch builds cleanly from a fresh checkout.

## Security & Configuration Tips
- Use `.env.local` for secrets; expose only client-safe values with the `VITE_` prefix, and never commit them.
- Optimize imported assets (SVG/PNGs) before adding to `src/assets/`; prefer the `public/` folder for files that should not be bundled.
