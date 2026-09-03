import { socials } from '../data/projects'

export function Footer() {
  return (
    <footer className="container-px border-t border-line py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-faint">
      <div>
        <span className="text-ink-dim">Sam</span> — ECE Student · Developer · Builder
      </div>
      <div className="flex flex-wrap items-center gap-5">
        {socials.github && (
          <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">GitHub ↗</a>
        )}
        {socials.email && (
          <a href={`mailto:${socials.email}`} className="hover:text-ink transition-colors">Email ↗</a>
        )}
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
