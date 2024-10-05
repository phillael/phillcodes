import AboutSection from './Sections/AboutSection'
import ExperienceSection from './Sections/ExperienceSection'
import MusicSection from './Sections/MusicSection'
import ProjectsSection from './Sections/ProjectsSection'

const ContentView = () => {
  return (
    <main className="w-full md:h-screen md:overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8 flex flex-col gap-32">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <MusicSection />
      </div>
    </main>
  )
}

export default ContentView
