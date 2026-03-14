## Phan Thiet Trung – Portfolio

This is a single-page portfolio site built with **React** and **Vite**, showcasing projects, skills, and contact information for Phan Thiet Trung (Frontend & Mobile Developer).

The app uses a small data layer so you can update content without touching component logic, plus some light interactions (scroll reveals, back-to-top button) and basic SEO metadata.

## Getting started

- **Install dependencies**:

  ```bash
  npm install
  ```

- **Run the dev server**:

  ```bash
  npm run dev
  ```

- **Build for production**:

  ```bash
  npm run build
  ```

- **Preview production build**:

  ```bash
  npm run preview
  ```

## Project structure (high level)

- `src/main.jsx` – React entry, applies global styles and sets the document title from `siteConfig`.
- `src/App.jsx` – Composes the main layout: `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, and the `BackToTop` button, and wires up scroll reveal animations.
- `src/components/` – Presentational components for each section and shared UI:
  - `Navbar.jsx` – Fixed top navigation with smooth scrolling and mobile menu.
  - `Hero.jsx` – Intro section with avatar, title, and primary calls to action.
  - `About.jsx` – About-me content and key stats.
  - `Skills.jsx` – Skill categories and badges.
  - `Projects.jsx` – Featured projects grid with links.
  - `Contact.jsx` – Contact info, social links, and a simple `mailto:` form.
  - `BackToTop.jsx` – Floating back-to-top button.
- `src/index.css` – Global design system (colors, typography, buttons, layout utilities, scroll reveal styles).
- `src/components/*.css` – Section-specific styles.
- `src/data/` – Content data used by components:
  - `personal.js` – Name, role, about text, stats, contact details, and social links.
  - `projects.js` – Array of project objects (title, description, tech stack, links).
  - `skills.js` – Skill categories and items.
- `src/config/siteConfig.js` – Site-wide configuration (title, description, brand name, social links).

## Updating content

- **Personal info / about / stats / contact**:
  - Edit `src/data/personal.js` to change:
    - `name`, `role`, `heroTagline`
    - `aboutParagraphs` and `stats`
    - `contact` (email, location) and `socialLinks` (GitHub, LinkedIn, Twitter)

- **Projects**:
  - Edit `src/data/projects.js`:
    - Each project object controls the title, description, tech tags, and live/GitHub URLs.
    - `imageKey` is used as a CSS class to style the project card background in `Projects.css`.

- **Skills**:
  - Edit `src/data/skills.js`:
    - Add/remove categories or individual skills as needed.

- **Site branding / meta**:
  - `src/config/siteConfig.js`:
    - Controls `siteTitle`, `siteDescription`, `brandName`, and social handles.
  - `index.html`:
    - Update the `<title>`, `meta` description, Open Graph, and Twitter tags (and JSON-LD) to reflect your actual deployed URL and preview image.

## Accessibility & performance notes

- Animations respect the `prefers-reduced-motion` user setting.
- Below-the-fold images are loaded lazily where appropriate.
- Navigation uses smooth scrolling and maintains good contrast for text and key UI elements.

## Linting

Run ESLint with:

```bash
npm run lint
```
