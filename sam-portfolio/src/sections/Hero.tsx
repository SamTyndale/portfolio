import { Suspense, lazy, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const HeroScene = lazy(() =>
  import('../three/HeroScene').then((m) => ({ default: m.HeroScene }))
)

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion || !rootRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('[data-reveal]', {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.09,
        delay: 0.15,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden border-b border-line"
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent md:via-bg/40" />

      <div className="relative container-px w-full pt-24">
        <p data-reveal className="font-mono text-xs text-signal tracking-wide mb-6">
          ECE × SOFTWARE × INTERACTIVE WEB
        </p>
        <h1
          data-reveal
          className="font-display font-extrabold text-[clamp(3.2rem,11vw,7.5rem)] leading-[0.92] text-ink text-balance"
        >
          Sam Tyndale
        </h1>
        <p data-reveal className="font-display text-xl md:text-2xl text-ink-dim mt-4 max-w-xl">
          ECE Student · Developer · Builder
        </p>
        <p data-reveal className="text-base md:text-lg text-ink-dim mt-6 max-w-lg leading-relaxed">
          I build interactive digital products where engineering meets design —
          somewhere between circuits, code, and things people actually use.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-copper text-bg font-medium px-6 py-3 rounded-full hover:bg-copper-bright transition-colors"
          >
            View my work ↗
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-ink-dim border border-line px-6 py-3 rounded-full hover:text-ink hover:border-copper transition-colors"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 container-px hidden md:flex items-center justify-between text-xs font-mono text-ink-faint">
        <span>SCROLL</span>
        <span className="w-px h-8 bg-line" />
      </div>
    </section>
  )
}
