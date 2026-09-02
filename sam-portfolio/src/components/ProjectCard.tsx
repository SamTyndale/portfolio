import type { Project } from '../data/projects'

function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === 'dental-clinic') {
    return (
      <div className="project-visual project-visual-clinic" aria-hidden="true">
        <div className="clinic-window">
          <div className="visual-topline"><span /><span /><span /></div>
          <div className="clinic-grid">
            <div className="clinic-sidebar"><i /><i /><i /><i /></div>
            <div className="clinic-main">
              <div className="clinic-heading" />
              <div className="clinic-cards"><b /><b /><b /></div>
              <div className="clinic-table"><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
        <span className="visual-label">CLINIC / SYSTEM</span>
      </div>
    )
  }

  if (project.slug === 'luxury-watch') {
    return (
      <div className="project-visual project-visual-watch" aria-hidden="true">
        <div className="watch-glow" />
        <div className="watch-face">
          <div className="watch-mark mark-12" /><div className="watch-mark mark-3" />
          <div className="watch-mark mark-6" /><div className="watch-mark mark-9" />
          <div className="watch-hand hand-hour" /><div className="watch-hand hand-minute" />
          <div className="watch-center" />
        </div>
        <span className="visual-label">WEBGL / PRODUCT</span>
      </div>
    )
  }

  return (
    <div className="project-visual project-visual-f1" aria-hidden="true">
      <div className="f1-grid" />
      <div className="f1-copy"><span>RACE</span><strong>01</strong></div>
      <div className="f1-line line-a" /><div className="f1-line line-b" />
      <div className="f1-data"><i /><i /><i /><i /></div>
      <span className="visual-label">MOTORSPORT / UI</span>
    </div>
  )
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accentClass = project.accent === 'copper' ? 'text-copper' : 'text-signal'
  const flip = index % 2 === 1

  return (
    <article className="grid md:grid-cols-2 gap-8 md:gap-16 items-center py-16 border-b border-line last:border-b-0">
      <div className={flip ? 'md:order-2' : ''}>
        <ProjectVisual project={project} />
      </div>

      <div className={flip ? 'md:order-1' : ''}>
        <p className={`font-mono text-xs mb-3 ${accentClass}`}>{project.category}</p>
        <h3 className="font-display font-semibold text-2xl md:text-3xl text-ink mb-4">{project.title}</h3>
        <p className="text-ink-dim leading-relaxed mb-6 max-w-md">{project.summary}</p>

        <dl className="space-y-3 mb-6 text-sm">
          <div><dt className="text-ink-faint mb-1">What it is</dt><dd className="text-ink-dim leading-relaxed">{project.what}</dd></div>
          <div><dt className="text-ink-faint mb-1">Why I built it</dt><dd className="text-ink-dim leading-relaxed">{project.why}</dd></div>
          <div><dt className="text-ink-faint mb-1">What I learned</dt><dd className="text-ink-dim leading-relaxed">{project.learned}</dd></div>
        </dl>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-xs text-ink-dim border border-line rounded-full px-3 py-1">{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
