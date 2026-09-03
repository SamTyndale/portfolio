import { socials } from '../data/projects'

const links = [
  { label: 'GitHub', value: socials.github },
  { label: 'LinkedIn', value: socials.linkedin },
  { label: 'Instagram', value: socials.instagram },
].filter((link) => link.value)

export function Contact() {
  return (
    <section id="contact" className="container-px py-28 md:py-40">
      <div className="contact-layout">
        <p className="font-mono text-xs text-signal mb-6">Contact</p>
        <div>
          <h2 className="font-display font-semibold text-4xl md:text-6xl text-ink text-balance max-w-2xl mb-8">
            Have an idea?
            <br />
            Let&apos;s build it.
          </h2>
          <p className="text-ink-dim max-w-xl leading-relaxed mb-10">
            I&apos;m interested in thoughtful products, ambitious interfaces, engineering/design experiments, and collaborations that are worth making carefully.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {socials.email && (
              <a href={`mailto:${socials.email}`} className="action-link action-link-primary">Email me <span aria-hidden="true">↗</span></a>
            )}
            {links.map((link) => (
              <a key={link.label} href={link.value} target="_blank" rel="noreferrer" className="action-link action-link-secondary">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
