export interface Project {
  slug: string
  title: string
  category: string
  summary: string
  what: string
  why: string
  learned: string
  tech: string[]
  liveUrl?: string
  sourceUrl?: string
  accent: 'copper' | 'signal'
}

export const projects: Project[] = [
  {
    slug: 'dental-clinic',
    title: 'Sathya Dental Clinic',
    category: 'Full-stack · Clinic Management',
    summary:
      'A practical digital system for a dental practice, combining a patient-facing website with workflows designed around appointments and clinic operations.',
    what:
      'The project brings the public clinic experience and day-to-day administration into one coherent product. The focus is on clear information, appointment flows, patient data, and interfaces that remain approachable for non-technical users.',
    why:
      'I wanted to build something with a real-world constraint: the interface should solve an everyday problem, not just demonstrate a technology. A clinic is a good test of that because reliability and clarity matter more than visual novelty.',
    learned:
      'Designing around real workflows changed how I think about full-stack development. Permissions, validation, responsive layouts, and small UX details become important when software is meant to be used repeatedly rather than simply shown once.',
    tech: ['React', 'Node.js', 'REST APIs', 'Responsive CSS'],
    accent: 'copper',
  },
  {
    slug: 'luxury-watch',
    title: '3D Luxury Watch Experience',
    category: 'Interactive · Product Visualization',
    summary:
      'A premium product concept built around a real-time 3D watch, scroll choreography, and motion-led storytelling.',
    what:
      'The page treats the product model as part of the interface rather than a static image. Camera movement, lighting, typography, and scroll position work together to reveal the watch progressively and create a stronger sense of depth.',
    why:
      'I built it to explore a question I keep coming back to: how far can interaction communicate the character of a product before the interface starts getting in the way?',
    learned:
      'The experiment pushed me into 3D asset performance, material and lighting choices, animation timing, camera composition, and the trade-offs required to make WebGL feel good on smaller devices.',
    tech: ['Three.js', 'React Three Fiber', 'GSAP', 'WebGL'],
    accent: 'signal',
  },
  {
    slug: 'f1-website',
    title: 'F1 Website',
    category: 'Frontend · Motorsport',
    summary:
      'An experimental motorsport interface built around speed, hierarchy, dramatic imagery, and a strong editorial rhythm.',
    what:
      'The concept explores a race-weekend style experience: bold statistics, structured content blocks, motion accents, and layouts that change pace as the user moves through the page.',
    why:
      'Motorsport is naturally visual and data-heavy, which makes it a useful playground for learning how typography, spacing, animation, and information hierarchy can work together without making a page feel chaotic.',
    learned:
      'I learned to treat animation as part of layout rather than decoration, while paying closer attention to responsive behavior, content density, and maintaining a consistent visual system across very different sections.',
    tech: ['React', 'TypeScript', 'CSS animation', 'Responsive UI'],
    accent: 'copper',
  },
]

export const skillGroups = [
  {
    label: 'Core development',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js'],
  },
  {
    label: 'Interactive web',
    items: ['Three.js', 'React Three Fiber', 'GSAP / Motion', 'WebGL'],
  },
  {
    label: 'Backend & services',
    items: ['Django', 'Supabase', 'REST APIs'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Vite', 'Vercel', 'Cursor', 'VS Code'],
  },
  {
    label: 'Exploring',
    items: ['AI / LLMs', 'Local models', 'Emerging tech'],
  },
]

export const exploringNow = [
  'Advanced frontend architecture',
  'Three.js & real-time graphics',
  'Backend systems design',
  'AI / LLMs and developer tooling',
]

export const interests = ['Photography', 'Photo editing', 'Music']

export const socials = {
  email: '',
  github: 'https://github.com/SamTyndale',
  linkedin: '',
  instagram: '',
}
