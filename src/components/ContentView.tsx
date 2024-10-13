import AboutSection from './Sections/AboutSection'
import ExperienceSection from './Sections/ExperienceSection/ExperienceSection'
import ProjectsSection from './Sections/ProjectsSection'
import TestimonialCarousel from './Sections/TestimonialSection/TestimonialSection'

const ContentView = () => {
  return (
    <main className="w-full md:h-screen md:overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto p-4 md:p-8 flex flex-col gap-32">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialCarousel />
      </div>
    </main>
  )
}

export default ContentView
