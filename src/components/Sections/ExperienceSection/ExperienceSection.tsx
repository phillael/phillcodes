import AnimatedSection from '../../AnimatedSection'
import ExperienceCard from '../../ExperienceCard'
import { professionalExperience } from './professionalExperience'

export default function ExperienceSection() {
  return (
    <AnimatedSection id="experience">
      <h2 className="neon-text-purple">Professional Experience</h2>
      <div className="flex flex-col gap-6">
        {professionalExperience.map((exp, index) => {
          const { dateRange, title, company, bulletPoints, techStack } = exp
          return (
            <ExperienceCard
              key={index}
              dateRange={dateRange}
              title={title}
              company={company}
              bulletPoints={bulletPoints}
              techStack={techStack}
            />
          )
        })}
      </div>
    </AnimatedSection>
  )
}
