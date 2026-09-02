export function About() {
  return (
    <section id="about" className="container-px py-24 md:py-32 border-b border-line">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20">
        <p className="font-mono text-xs text-signal">About</p>
        <div className="max-w-2xl">
          <p className="font-display text-2xl md:text-4xl text-ink leading-snug text-balance mb-8">
            I'm an ECE student who ended up spending most of my free time
            building things on screens instead of only breadboards.
          </p>
          <p className="text-ink-dim leading-relaxed mb-4">
            My background is in electronics, but the thing I keep coming
            back to is the space where hardware thinking meets software
            craft — building interfaces, systems, and small interactive
            experiences that work the way they're supposed to.
          </p>
          <p className="text-ink-dim leading-relaxed mb-4">
            I learn mostly by building real projects rather than working
            through tutorials in isolation — a clinic website that needed to
            actually book appointments, a 3D scene that needed to actually
            run smoothly on a phone.
          </p>
          <p className="text-ink-dim leading-relaxed">
            I enjoy the parts of engineering that sit between disciplines: making a system reliable, then making it feel good to use. That mindset is what keeps me moving between frontend work, backend systems, electronics, and interactive experiments.
          </p>
        </div>
      </div>
    </section>
  )
}
