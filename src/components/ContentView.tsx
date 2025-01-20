import AboutSection from './Sections/AboutSection'
import ExperienceSection from './Sections/ExperienceSection/ExperienceSection'
import ProjectsSection from './Sections/ProjectsSection'
import TestimonialSection from './Sections/TestimonialSection/TestimonialSection'

const ContentView = () => {
  return (
    <main className="w-full min-h-screen md:h-full overflow-y-auto snap-y snap-mandatory scroll-smooth lg:basis-2/3">
      <div className="flex flex-col">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialSection />
      </div>
    </main>
  )
}

export default ContentView
