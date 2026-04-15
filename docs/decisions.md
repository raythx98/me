# Decisions

Architecture decision records — why things are the way they are.

---

## ADR-001: Single source of truth for content in `config.js`

**Decision**: All site content (bio, experience, skills, projects) is authored in `src/editable-stuff/config.js` and imported by components.

**Rationale**: The site owner (me) updates content frequently — new jobs, new projects, new skills. A centralized config file means no component files need to change for content updates. Components remain generic and reusable.

**Tradeoff**: No content validation — malformed config entries will cause runtime errors rather than build errors. Not a concern for a personal, single-author project.

---

## ADR-002: Bootstrap 5 for layout

**Decision**: Bootstrap 5 is used for the grid system, spacing utilities, and flex helpers (`Container`, `Row`, `Col`, `d-flex`, `gap-*`, `py-*`).

**Rationale**: Bootstrap provides a mature, widely understood grid system. It reduces custom CSS surface area and handles responsive breakpoints out of the box. The component library aspect (react-bootstrap) is also available for Dialog, Nav, etc.

**Tradeoff**: Bootstrap's utility classes add some bundle weight. Acceptable for a portfolio where load time is a secondary concern.

---

## ADR-003: SCSS design system for custom tokens

**Decision**: Custom design tokens (colors, typography scale, transitions) are defined in SCSS variables in `src/scss/_index.scss` rather than Tailwind or CSS-in-JS.

**Rationale**: SCSS was chosen over Tailwind to avoid the utility-class learning curve and to keep the warm earth-tone design system explicit. CSS-in-JS (Emotion) is installed but not heavily used — keeping it as a fallback option.

**Tradeoff**: Two styling approaches (Bootstrap utilities + custom SCSS) require discipline to avoid conflicts. The convention is: Bootstrap for layout/spacing, SCSS for custom interactive states and brand colors.

---

## ADR-004: `React.forwardRef()` for scroll navigation

**Decision**: Section components expose a DOM ref via `React.forwardRef()` so the Navbar can scroll to them.

**Rationale**: Smooth scrolling without modifying the URL (no hash changes) provides a better UX. `forwardRef` is the idiomatic React pattern for exposing inner DOM nodes from functional components.

**Tradeoff**: Slightly more boilerplate on each section component. Acceptable given the small number of sections.

---

## ADR-005: `react-vertical-timeline-component` for experience section

**Decision**: The experience timeline uses the `react-vertical-timeline-component` library rather than a custom implementation.

**Rationale**: Timeline layouts are complex to implement accessibly and responsively from scratch. The library provides a well-tested, accessible component that covers the required use case.

**Tradeoff**: Locked to the library's styling and configuration API. Customization requires overriding library styles, which can be fragile on updates.

---

## ADR-006: devicon for technology icons

**Decision**: Technology skill icons are sourced from the `devicon` package (local SVG imports) rather than CDN-served images.

**Rationale**: Bundle-local icons eliminate external CDN requests and avoid broken images if the CDN is unavailable. Vite handles the SVG imports and applies content-hash caching.

**Tradeoff**: Bundle size increases slightly. Acceptable given the small number of icons used.
