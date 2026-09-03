import { exploringNow, interests } from '../data/projects'
import { SectionHeading } from '../components/SectionHeading'

export function Exploring() {
  return (
    <section id="exploring" className="container-px py-24 md:py-32 border-b border-line">
      <SectionHeading
        kicker="Experiments / notebook"
        title="What has my attention right now"
        description="Not a list of expertise. Just the questions, tools, and adjacent disciplines I keep returning to."
      />
      <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-20">
        <div>
          <p className="font-mono text-[0.68rem] text-copper tracking-[0.14em] uppercase mb-5">Current threads</p>
          <ol className="notebook-list">
            {exploringNow.map((item, index) => (
              <li key={item}>
                <span className="font-mono text-xs text-copper">0{index + 1} — {index === 0 ? 'ACTIVE' : index === 1 ? 'EXPLORING' : 'LEARNING'}</span>
                <span className="font-display text-xl md:text-2xl text-ink">{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="font-mono text-[0.68rem] text-signal tracking-[0.14em] uppercase mb-5">Beyond the screen</p>
          <p className="text-ink-dim leading-relaxed max-w-sm mb-6">The inputs that keep the work observant, tactile, and a little less predictable.</p>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => <span key={interest} className="font-mono text-xs text-ink-dim border border-line rounded-full px-3 py-1.5">{interest}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
