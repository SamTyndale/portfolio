import { socials } from '../data/projects'

const links = [
  { label: 'GitHub', value: socials.github },
  { label: 'LinkedIn', value: socials.linkedin },
  { label: 'Instagram', value: socials.instagram },
].filter((link) => link.value)

export function Contact() {
  return (
    <section id="contact" className="container-px py-28 md:py-40">
      <p className="font-mono text-xs text-signal mb-6">Contact</p>
      <h2 className="font-display font-semibold text-4xl md:text-6xl text-ink text-balance max-w-2xl mb-8">
        Have an idea?
        <br />
        Let&apos;s build it.
      </h2>
      <p className="text-ink-dim max-w-xl leading-relaxed mb-10">
        I&apos;m always interested in thoughtful products, ambitious interfaces, and experiments that sit somewhere between engineering and creativity.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        {socials.email ? (
          <a
            href={`mailto:${socials.email}`}
            className="inline-flex items-center gap-2 bg-copper text-bg font-medium px-6 py-3 rounded-full hover:bg-copper-bright transition-colors"
          >
            Email me ↗
          </a>
        ) : (
          <span className="font-mono text-xs text-ink-faint border border-line rounded-full px-4 py-2">
            Email coming soon
          </span>
        )}
        {links.map((link) => (
          <a
            key={link.label}
            href={link.value}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-ink-dim border border-line px-5 py-3 rounded-full hover:text-ink hover:border-copper transition-colors"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  )
}
