import { skillGroups } from '../data/projects'
import { SectionHeading } from '../components/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="container-px py-24 md:py-32 border-b border-line">
      <SectionHeading kicker="Skills" title="What I build with" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {skillGroups.map((group) => (
          <div key={group.label} className={group.label === 'Exploration' ? 'opacity-70' : ''}>
            <h3 className="font-display text-sm text-ink-dim mb-4">{group.label}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-ink text-lg font-display">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
