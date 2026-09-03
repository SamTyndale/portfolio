import { useEffect, useState } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiments', href: '#exploring' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [condensed, setCondensed] = useState(false)
  const [active, setActive] = useState('work')

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${condensed ? 'py-3 bg-bg/90 backdrop-blur-md border-b border-line' : 'py-5 md:py-6 bg-transparent'}`}>
      <nav className="container-px flex items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="font-display font-semibold text-ink text-lg tracking-tight" aria-label="Sam Tyndale home">
          Sam<span className="text-copper">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} aria-current={active === link.href.slice(1) ? 'page' : undefined} className={`nav-link text-sm transition-colors ${active === link.href.slice(1) ? 'text-ink' : 'text-ink-dim'}`}>
                <span className="nav-dot" aria-hidden="true" />{link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex action-link action-link-secondary nav-cta">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        <MobileMenu />
      </nav>
    </header>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    const closeOnScroll = () => setOpen(false)
    document.addEventListener('keydown', closeOnEscape)
    window.addEventListener('scroll', closeOnScroll, { passive: true })
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('scroll', closeOnScroll)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} className="menu-button text-ink w-10 h-10 flex items-center justify-center border border-line rounded-full">
        <span className="font-mono text-xs" aria-hidden="true">{open ? 'CLOSE' : 'MENU'}</span>
      </button>
      {open && (
        <div id="mobile-navigation" className="mobile-menu absolute top-full left-0 right-0 bg-bg border-b border-line container-px py-7">
          <ul className="flex flex-col gap-5">
            {links.map((link, index) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg text-ink-dim hover:text-ink">
                  <span className="font-mono text-xs text-copper">0{index + 1}</span>{link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
