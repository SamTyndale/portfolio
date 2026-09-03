# Sam Tyndale — Portfolio

A dark, engineering-inspired portfolio for **Sam Tyndale**, an ECE student, developer, and builder working across software, systems, and interactive web experiences.

The site keeps the visual language intentionally restrained: deep green-black surfaces, warm copper and signal accents, editorial typography, and a lightweight Three.js circuit-core hero. Project content is written as compact case studies so the work communicates what was built, why it exists, and what it taught.

## Featured projects

- **Sathya Dental Clinic** — a practical clinic-management experience focused on patient-facing information, appointments, and operational workflows.
- **3D Luxury Watch Experience** — a WebGL product-visualization experiment combining a real-time 3D watch, camera composition, lighting, and scroll choreography.
- **F1 Website** — an editorial motorsport interface study exploring data hierarchy, pace, responsive layouts, and motion.

## Tech stack

React, TypeScript, Vite, Tailwind CSS v4, Three.js, React Three Fiber, GSAP, and CSS. The project is a client-side application with a lazily loaded Three.js hero scene and self-contained project visuals, so it does not depend on invented external project URLs or screenshots.

## Architecture

```text
src/
  components/   Navigation, footer, section headings, and project cards
  sections/     Hero, selected work, about, skills, exploring, and contact
  three/        Lazy-loaded HeroScene and CircuitCore WebGL components
  data/         Projects, skill groups, interests, and verified social links
  hooks/        Responsive and reduced-motion helpers
  assets/       Local interface assets
public/         Favicon and small static configuration assets
```

The page is composed from focused React sections in `src/App.tsx`. The Three.js hero is imported lazily to keep the initial interface lightweight, and the scene reduces device pixel ratio and trace density on lower-power devices. Motion respects the user’s `prefers-reduced-motion` setting.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build and checks

```bash
npm run build
npm run lint
```

`npm run build` runs the TypeScript project build and creates the production bundle. `npm run lint` checks the repository source with Oxlint.

## Content and publishing notes

Real contact and project URLs are maintained in `src/data/projects.ts`. Empty contact channels are intentionally omitted from the interface rather than represented by placeholder copy. Add verified URLs only when they are ready.
