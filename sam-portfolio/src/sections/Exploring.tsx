import { exploringNow, interests } from '../data/projects'

export function Exploring() {
  return (
    <section id="exploring" className="container-px py-24 md:py-32 border-b border-line">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-xs text-signal mb-4">Currently exploring</p>
          <p className="text-ink-dim leading-relaxed mb-6 max-w-md">
            Not expertise — just where my attention is right now.
          </p>
          <ul className="space-y-3">
            {exploringNow.map((item) => (
              <li key={item} className="flex items-baseline gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0 translate-y-[-2px]" />
                <span className="text-ink text-lg font-display">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs text-signal mb-4">Beyond the screen</p>
          <p className="text-ink-dim leading-relaxed mb-6 max-w-md">
            Building isn't only code — a few of the other things I spend
            time on.
          </p>
          <ul className="space-y-3">
            {interests.map((item) => (
              <li key={item} className="text-ink text-lg font-display">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
