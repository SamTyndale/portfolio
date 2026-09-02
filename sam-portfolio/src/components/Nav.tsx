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

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        condensed ? 'py-3 bg-bg/85 backdrop-blur-md border-b border-line' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-ink text-lg tracking-tight"
        >
          Sam<span className="text-copper">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-dim hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex text-sm border border-line rounded-full px-4 py-1.5 text-ink-dim hover:text-ink hover:border-copper transition-colors"
        >
          Say hello
        </a>
        <MobileMenu />
      </nav>
    </header>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="text-ink w-9 h-9 flex items-center justify-center border border-line rounded-full"
      >
        <span className="font-mono text-xs">{open ? 'X' : '☰'}</span>
      </button>
      {open && (
        <ul className="absolute top-full left-0 right-0 bg-bg border-b border-line container-px py-6 flex flex-col gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink-dim hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
