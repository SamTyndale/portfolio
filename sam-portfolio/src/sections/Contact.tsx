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

      {socials.email ? (
        <a href={`mailto:${socials.email}`} className="inline-flex items-center text-xl md:text-2xl font-display text-ink border-b border-line hover:border-copper pb-1 transition-colors">
          {socials.email}
        </a>
      ) : (
        <p className="font-mono text-xs text-ink-faint border border-line rounded-full inline-flex px-4 py-2">
          Contact links coming soon
        </p>
      )}

      {links.length > 0 && (
        <div className="flex flex-wrap gap-6 mt-12 text-sm text-ink-dim">
          {links.map((link) => (
            <a key={link.label} href={link.value} target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
