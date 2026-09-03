import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'

export function SelectedWork() {
  return (
    <section id="work" className="container-px py-24 md:py-32 border-b border-line">
      <SectionHeading
        kicker="Selected work / 03 projects"
        title="Things I&apos;ve actually shipped"
        description="A few projects that moved from idea to something real — a working clinic system, an interaction study, and a motorsport experiment."
      />
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
