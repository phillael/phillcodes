const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-12">
      <h2 className="neon-text-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-primary/30 rounded-lg p-4 bg-card/30">
          <h3 className="text-xl font-semibold mb-2 font-montserrat">
            Project 1
          </h3>
          <p>A brief description of Project 1 and its key features.</p>
        </div>
        <div className="border border-primary/30 rounded-lg p-4 bg-card/30">
          <h3 className="text-xl font-semibold mb-2 font-montserrat">
            Project 2
          </h3>
          <p>A brief description of Project 2 and its key features.</p>
        </div>
        <div className="border border-primary/30 rounded-lg p-4 bg-card/30">
          <h3 className="text-xl font-semibold mb-2 font-montserrat">
            Project 3
          </h3>
          <p>A brief description of Project 3 and its key features.</p>
        </div>
        <div className="border border-primary/30 rounded-lg p-4 bg-card/30">
          <h3 className="text-xl font-semibold mb-2 font-montserrat">
            Project 4
          </h3>
          <p>A brief description of Project 4 and its key features.</p>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
