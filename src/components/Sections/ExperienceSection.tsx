import ExperienceCard from '../ExperienceCard'

export default function ExperienceSection() {
  const experiences = [
    {
      dateRange: 'JULY-DEC 2017',
      title: 'Netrunner',
      description:
        'Developed cutting-edge neural interfaces for corporate espionage.',
      techStack: ['BrainLink', 'NeuralScript', 'Cyberdeck.js', 'QuantumSQL'],
    },
    {
      dateRange: 'JAN-JUNE 2018',
      title: 'AI Architect',
      description:
        'Designed and implemented sentient AI systems for megacorp security.',
      techStack: ['DeepMind++', 'SynthCore', 'NeuralForge', 'QuantumNet'],
    },
    {
      dateRange: 'JULY 2018-PRESENT',
      title: 'Cyberspace Engineer',
      description:
        'Pioneering the development of immersive virtual realities and digital ecosystems.',
      techStack: ['HoloScript', 'NeuroLink API', 'QuantumVR', 'SynthweaveCSS'],
    },
  ]

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const { dateRange, title, description, techStack } = exp
          return (
            <ExperienceCard
              key={index}
              dateRange={dateRange}
              title={title}
              description={description}
              techStack={techStack}
            />
          )
        })}
      </div>
    </section>
  )
}
