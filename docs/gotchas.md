# Gotchas

Traps, quirks, and things not to change without care.

---

## All content goes in `config.js`, not in components

Never hardcode bio text, experience data, or project details directly in components. Always add data to `src/editable-stuff/config.js` first and consume it via import. Components that hardcode content become tightly coupled to specific data and are impossible to generalize.

---

## SCSS uses modern `@use` syntax — not `@import`

Bootstrap and partials are loaded with `@use "bootstrap/scss/bootstrap"` (Sass modules), not the deprecated `@import`. Adding a new SCSS partial must use `@forward` in `_index.scss` and `@use` in the consuming file. Mixing `@import` and `@use` in the same project causes Sass compilation warnings.

---

## `useIsomorphicLayoutEffect` is a no-op — but don't remove it

`src/hooks/useIsomorphicLayoutEffect.js` was added for potential SSR compatibility. This project has no SSR. Removing it would require updating all consumers. Leave it in place — it has no runtime cost.

---

## Profile image must be imported as an ES module

`profile.png` is imported as `import profile from "./profile.png"` so Vite applies content-hash caching. Referencing it with a public URL (e.g., `src="/profile.png"`) bypasses Vite's asset pipeline and will break in production where the base path is `/me/`.

---

## `resume.pdf` lives in `public/` — not `src/`

Files in `public/` are served as-is without Vite processing. `resume.pdf` must remain in `public/` so it can be linked directly as `{base}/resume.pdf`. Do not move it to `src/` — Vite would try to process it.

---

## Base path is `/me/` in production — hardcoded paths break

The Vite config sets `base: '/me/'` for production builds. All internal asset paths must use `import.meta.env.BASE_URL` or Vite's asset imports. Hardcoded paths like `href="/resume.pdf"` will resolve to `/resume.pdf` (root) instead of `/me/resume.pdf`, resulting in a 404.

---

## `react-vertical-timeline-component` uses inline styles

The timeline library applies inline styles for alignment and color. Custom styling requires either passing style props through the component's API or using higher-specificity CSS overrides. Do not try to target timeline elements with plain Sass selectors — the inline styles will win.

---

## `eslintConfig: "react-app"` in `package.json` requires CRA's ESLint config

The `eslintConfig` field in `package.json` references `"react-app"`, which is the Create React App ESLint config. This project was not bootstrapped with CRA, so this field may not actually be applied. If ESLint is set up via a config file, the `package.json` entry is ignored. Do not add a `.eslintrc.js` without removing the `package.json` entry to avoid config conflicts.

---

## The deploy script requires `gh-pages` and git credentials

`npm run deploy` calls `gh-pages -d build --add --dotfiles --message "..."` which requires git credentials configured in the shell. In CI, GitHub Actions handles deployment automatically. Running `npm run deploy` locally requires authenticated git access to the repository.
