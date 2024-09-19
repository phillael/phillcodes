import AboutSection from './Sections/AboutSection'
import ExperienceSection from './Sections/ExperienceSection'
import MusicSection from './Sections/MusicSection'
import ProjectsSection from './Sections/ProjectsSection'

const ContentView = () => {
  return (
    <main className="w-full max-w-4xl md:w-2/3 lg:w-3/4 p-8 overflow-y-auto bg-card/10 flex flex-col gap-32">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <MusicSection />
    </main>
  )
}

export default ContentView
