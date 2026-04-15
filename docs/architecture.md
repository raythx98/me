# Architecture

## Overview

This is a **fully static React SPA** personal portfolio deployed at `raythx.com`. There is no backend. All content is authored in `src/editable-stuff/config.js` and rendered by React components. The site is deployed to GitHub Pages.

## Layer Structure

```
┌────────────────────────────────────────────────────────────┐
│  App.jsx                                                    │
│  BrowserRouter + single route (renders Home page layout)   │
├────────────────────────────────────────────────────────────┤
│  Layout: Navbar · Footer                                    │
│  Fixed navigation with smooth scroll, footer credits       │
├────────────────────────────────────────────────────────────┤
│  Section Components  (src/components/home/)                 │
│  MainBody · AboutMe · Experience · Skills                   │
│  Project · ProjectCard · SkillCard · GetInTouch            │
├────────────────────────────────────────────────────────────┤
│  Content  (src/editable-stuff/config.js)                    │
│  Single source of truth for all site content               │
├────────────────────────────────────────────────────────────┤
│  Design System  (src/scss/)                                 │
│  Bootstrap 5 + custom SCSS variables, typography, anims    │
└────────────────────────────────────────────────────────────┘
```

## Content Flow

```
src/editable-stuff/config.js
  │
  └── exported as named objects (mainBody, aboutme, experiences, skills, projects)
        │
        └── imported and destructured in section components
              └── rendered as JSX with Bootstrap grid
```

All content changes (bio, experience entries, new projects, skills) are made exclusively in `config.js`. Components are content-agnostic.

## Navigation & Scroll

The `Navbar` component implements smooth scroll without URL hash changes:
- Each section receives a `ref` via `React.forwardRef()`.
- `Navbar` calls `ref.current.scrollIntoView({ behavior: 'smooth' })` on nav item click.
- `useScrollPosition` hook detects when the user scrolls past the hero section and toggles the navbar from transparent to opaque.

## State Management

No global state management — the site is read-only content. The only stateful concerns are:
- Navbar scroll state: `useScrollPosition` hook.
- Element resize detection: `useResizeObserver` hook (for timeline animations).
- No user authentication, no data fetching, no forms.

## SCSS Design System

All styles are organized under `src/scss/`:

| File | Purpose |
|------|---------|
| `custom.scss` | Entry point — imports all partials |
| `_index.scss` | Core design tokens: colors, transitions, hover effects |
| `_typography.scss` | Responsive type scale using Sass functions |
| `_animations.scss` | Keyframe animations (fade, slide) |
| `_stars.scss` | Starfield background effect |

Design tokens:
- `$primary-accent: #5E5946` (dark brown)
- `$secondary-accent: #AE887B` (lighter brown)
- `$bg-light: #F6F1EC` (off-white)

## Deployment

- Build tool: Vite 7 with `base: '/me/'` for production
- Static output to `build/` directory
- GitHub Actions deploys on push to `master`
- `npm run deploy` uses `gh-pages` package: builds, adds `CNAME` file, pushes to `gh-pages` branch
- Custom domain: `raythx.com` (CNAME in `public/CNAME`)
