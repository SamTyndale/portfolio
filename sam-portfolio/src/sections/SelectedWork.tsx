import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'

export function SelectedWork() {
  return (
    <section id="work" className="container-px py-24 md:py-32 border-b border-line">
      <SectionHeading
        kicker="Selected work"
        title="Things I've actually shipped"
        description="A few projects that moved from idea to something real — a working clinic system, an interaction study, a motorsport experiment."
      />
      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
