# AGENTS.md

Agents operating in this repository **must follow the rules in this file**. Violations will cause runs to be blocked or reverted.

# Rule Priority

When rules conflict, follow this order:

1. Correctness & safety
2. Maintainability
3. Readability
4. Consistency with existing codebase
5. Style preferences in this document

# Project Overview

This is a **personal developer portfolio** — a React SPA deployed to GitHub Pages at `raythx.com`. It is fully static (no backend). All site content lives in `src/editable-stuff/config.js` as the single source of truth.

# Style Guidelines

- Strictly follow existing code style in the codebase.
- Use functional React components with hooks — no class components.
- Keep code concise and elegant — don't over-engineer.
- Adhere to SOLID principles, especially Single Responsibility.

## Component Conventions

- PascalCase file names for React components (e.g., `MainBody.jsx`, `ProjectCard.jsx`).
- camelCase for hooks (e.g., `useScrollPosition.js`).
- `_` prefix for partial SCSS files (e.g., `_typography.scss`, `_animations.scss`).
- Section-specific components live in `src/components/home/`.
- Custom hooks live in `src/hooks/`.

## Content & Configuration

- **All site content** (biography, experience, skills, projects, social links) belongs in `src/editable-stuff/config.js`.
- Components must consume `config.js` values — do not hardcode content in components.
- Profile image is imported from `src/editable-stuff/profile.png`.
- When adding a new section, add its data to `config.js` first, then build the component.

## State & Data Handling

- Use React hooks (`useState`, `useEffect`, `useCallback`) for all state.
- No global state management library — this is a single-page static site.
- `useScrollPosition` hook (in `src/hooks/`) handles scroll detection with throttling — use it for navbar state.
- Use `React.forwardRef()` when a component needs to expose a DOM ref (e.g., for scroll-to-section navigation).

## Styling Conventions

- **Bootstrap 5** grid and spacing utilities (`Container`, `Row`, `Col`, `d-flex`, `px-3`, etc.).
- **SCSS** design system in `src/scss/` — core variables are in `_index.scss`.
- Design tokens: `$primary-accent: #5E5946`, `$secondary-accent: #AE887B`, `$bg-light: #F6F1EC`.
- Inline `style={{}}` objects for dynamic per-component styling (acceptable here given the pattern).
- Do not introduce new CSS files — extend the existing SCSS modules.
- Transitions: 0.3s ease-in-out (already defined in `_index.scss`).

## Documentation

The `docs/` directory holds living reference documents. Update them incrementally as you explore, plan, and implement.

| File | Purpose |
|------|---------|
| `docs/architecture.md` | High-level design — component tree, content flow, deployment |
| `docs/modules.md` | Per-module summaries — what each file owns |
| `docs/decisions.md` | ADRs — why things are the way they are |
| `docs/gotchas.md` | Traps, quirks, things not to change without care |

# Security

- No secrets or credentials — this is a fully static public portfolio.
- Do not add any backend calls or third-party tracking without explicit approval.

# Decision Framework

When multiple approaches are possible:

1. Prefer the simplest solution that satisfies requirements
2. Prefer Bootstrap utilities before writing custom CSS
3. Prefer extending `config.js` for content changes — not hardcoding in components
4. Avoid premature abstraction
5. Prefer the existing `src/hooks/` before writing new hooks

# Planning Rules

Before starting a **non-trivial task**, create a plan at:

```
agent_logs/YYYYMMDD_HHMMSS_<descriptive_name>_plan.md
```

## Confirmation Gate

After the plan file is written, **stop and do the following before any implementation**:

1. Present a concise summary of the plan to the user.
2. Surface any ambiguities, assumptions, or tradeoffs.
3. Ask the user to confirm they are happy with the plan.
4. **Do not begin implementation until explicit confirmation is received.**

# Implementation Rules

- Implement complete features end-to-end; no partial implementations.
- Preserve existing inline comments.
- Do NOT commit or push without explicit approval.

# Testing Rules

This project has a Vitest setup but minimal test coverage. Verify changes manually:

```bash
npm run dev
```

- Check the page at `http://localhost:5177`.
- Verify navbar scroll behavior, smooth scrolling to sections, and responsive layout.
- Run tests if they exist: `npm run test`.

# Definition of Done

A task is complete when:

- Plan is fully executed
- No partial implementations remain
- Build passes: `npm run build`
- `docs/` updated wherever relevant

# Environment Instructions

## Setup

```bash
npm install
npm run dev    # starts dev server at http://localhost:5177
```

## Key Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `build/` |
| `npm run test` | Run Vitest test suite |
| `npm run serve` | Preview production build locally |
| `npm run deploy` | Build + deploy to GitHub Pages (requires auth) |

## Deployment

The site deploys to GitHub Pages via `npm run deploy` (uses `gh-pages` package) or via GitHub Actions on push to `master`. A `CNAME` file in `public/` sets the custom domain to `raythx.com`. The Vite base path is `/me/` in production.

## Dependency Inspection

- Check `package.json` for declared versions.
- Before adding a new section/feature, check `src/editable-stuff/config.js` to understand the data model.
- Do not install new icon libraries — use `devicon` SVGs or Material-UI icons already present.
- Do not install new dependencies without explicit approval.
