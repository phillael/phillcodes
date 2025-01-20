import AnimatedSection from '../AnimatedSection'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from './ProjectsSection/ProjectCard'
import { projects } from './ProjectsSection/projects'

const ProjectsSection = () => {
  return (
    <AnimatedSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default ProjectsSection
