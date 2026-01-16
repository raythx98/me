# Project Context: Ray Toh's Modernized Portfolio

## Overview
A high-performance, modernized personal portfolio website built with **React 19** and **Vite 7**. It features a responsive design, interactive elements, and a clean, professional aesthetic tailored for a Software Engineer specializing in large-scale systems and optimizations.

## Core Tech Stack
- **Frontend**: React 19 (using `createRoot` API)
- **Build Tool**: Vite 7 (fast HMR, optimized bundling)
- **Styling**: Bootstrap 5 + Modern Sass (`@use` architecture)
- **Testing**: Vitest + JSDOM
- **Icons**: Local bundling via `devicon` package + Font Awesome
- **Deployment**: GitHub Actions (auto-deploy to GitHub Pages on push to `master`)

## Key Architecture & Features
- **Centralized Content**: All site data (About, Experiences, Skills, Projects) is managed in `src/editable-stuff/config.js`.
- **URL-Clean Navigation**: Custom smooth-scrolling implementation in `Navbar.jsx` traverses sections without appending hashes to the URL.
- **Interactive Experience**: Timeline elements expand on hover to reveal detailed achievements.
- **Performance Optimized**: Replaced heavy legacy dependencies (jQuery, axios, prop-types) with modern alternatives or native browser APIs.
- **Robust Assets**: Critical assets like the Resume and Profile Picture are hosted locally in `src/editable-stuff/` for reliability.

## Project Structure
- **`src/components/home/`**: Modernized functional components for each section.
- **`src/editable-stuff/`**: The "Source of Truth" for content and personal assets (`config.js`, `resume.pdf`, `profile.png`).
- **`src/scss/`**: Modular SCSS using `@use` and `@forward` rules. `_index.scss` contains the main design system.
- **`.github/workflows/deploy.yml`**: CI/CD pipeline for automated deployment.

## Development Workflows
- **Start Dev Server**: `npm run dev` (Starts on port 5177, opens browser)
- **Production Build**: `npm run build` (Outputs to `build/` directory)
- **Run Tests**: `npm test` (Uses Vitest)
- **Update Content**: Edit `src/editable-stuff/config.js`.

## Key Conventions
- **Component Styling**: Prefer global design system in `_index.scss` over component-specific CSS files.
- **Asset Handling**: Always use ESM `import` for assets (images, PDFs) to ensure Vite correctly hashes and bundles them.
- **Navigation**: Use the `scrollToSection` utility in components rather than standard `<a>` hashes to maintain clean URLs.