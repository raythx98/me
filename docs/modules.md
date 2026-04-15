# Modules

Per-file summaries — what each module owns and its public interface.

---

## `src/editable-stuff/config.js`

**The single source of truth for all site content.** Edit this file to update any text, data, or link on the site.

**Key exports:**
- `mainBody` — hero section: name, titles, description, social links.
- `aboutme` — about section: paragraphs, skills summary.
- `experiences` — timeline entries: `{ title, company, dates, description, icon, tags }[]`.
- `skills` — `{ languages: [], frameworks: [], tools: [] }`.
- `projects` — `{ title, description, tags, link, image }[]`.
- `getInTouch` — contact section: email, message.

---

## `src/components/Navbar.jsx`

Fixed top navigation bar. Smooth-scrolls to sections on click. Changes opacity based on scroll position (transparent at top, opaque on scroll).

**Props:** Refs to each section component (passed down from `App.jsx`).
**Uses:** `useScrollPosition` hook.

---

## `src/components/Footer.jsx`

Site footer with copyright and credits.

---

## `src/components/home/MainBody.jsx`

Hero section. Displays name, animated typing titles, social links (GitHub, LinkedIn, email), and a resume download button.

**Uses:** `react-type-animation` for the typewriter effect. `React.forwardRef()` for scroll-to ref.
**Content from:** `config.mainBody`.

---

## `src/components/home/AboutMe.jsx`

About me section. Renders bio paragraphs and profile image.

**Content from:** `config.aboutme`.

---

## `src/components/home/Experience.jsx`

Work/education timeline. Uses `react-vertical-timeline-component` with expand-on-hover details.

**Content from:** `config.experiences`.

---

## `src/components/home/Skills.jsx`

Skills section grid. Renders `SkillCard` components grouped by category (languages, frameworks, tools).

**Content from:** `config.skills`.

---

## `src/components/home/SkillCard.jsx`

Individual skill badge. Displays the devicon SVG or MUI icon for a technology.

**Props:** `name`, `icon`, `category`.

---

## `src/components/home/Project.jsx`

Projects section wrapper. Maps over `config.projects` and renders `ProjectCard` components.

**Content from:** `config.projects`.

---

## `src/components/home/ProjectCard.jsx`

Individual project card. Displays title, description, tags, screenshot, and a link. Shows a skeleton loader while the image loads.

**Props:** `title`, `description`, `tags`, `link`, `image`.
**Uses:** `react-loading-skeleton` for placeholder.

---

## `src/components/home/GetInTouch.jsx`

Contact/CTA section. Displays a call-to-action with the contact email.

**Content from:** `config.getInTouch`.

---

## `src/hooks/useScrollPosition.js`

Throttled scroll detection hook. Returns the current scroll Y position. Used by `Navbar` to toggle between transparent and opaque states.

**Returns:** `{ scrollPosition: number }`.

---

## `src/hooks/useResizeObserver.js`

Observes an element's size changes using `ResizeObserver`. Used by timeline components for layout-sensitive animations.

---

## `src/hooks/useIsomorphicLayoutEffect.js`

Returns `useLayoutEffect` in browser environments and `useEffect` in SSR environments. Prevents hydration warnings (even though this app has no SSR).

---

## `src/scss/custom.scss`

SCSS entry point. Imports all partials and Bootstrap.

---

## `src/scss/_index.scss`

Core design system. Defines CSS custom properties, transition classes, hover lift effects, and button state styles.

---

## `src/App.jsx`

React Router setup. Single route renders the full home page with all sections. Manages section refs and passes them to `Navbar`.

---

## `src/editable-stuff/profile.png`

Avatar image. Replace this file to update the profile photo across the site.

---

## `public/resume.pdf`

Resume file served as a static asset. Linked from the hero section. Replace to update the downloadable resume.
