# Sam — Portfolio

ECE student · developer · builder · creative.

A personal portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Three.js / React Three Fiber, and GSAP. The visual system is intentionally restrained: dark surfaces, warm copper accents, technical typography, and a lightweight 3D circuit motif.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Before publishing

The portfolio is intentionally free of fake URLs and placeholder copy. Add your real contact details and project URLs in `src/data/projects.ts` when they are ready. Project cards already have self-contained visual treatments, so the site remains complete without external screenshots.

## Structure

```text
src/
  components/   Reusable navigation, footer, project cards and headings
  sections/     Hero, work, about, skills, exploring and contact
  three/        Lazy-loaded interactive Three.js hero
  data/         Portfolio content and editable profile links
  hooks/        Motion and responsive helpers
```
