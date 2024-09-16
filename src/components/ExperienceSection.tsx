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
    <section className="py-12 container mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-left neon-text">
        Neural Portfolio
      </h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="cyberpunk-card p-6 card-hover-effect">
            <div className="grid grid-cols-[1fr_3fr] gap-4">
              <div className="text-secondary font-mono text-sm">
                {exp.dateRange}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  {exp.title}
                </h3>
                <p className="text-sm text-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-badge px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
