const ContentView = () => {
  return (
    <main className="w-full md:w-2/3 lg:w-3/4 p-6 overflow-y-auto">
      <section id="about" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          Hello! I'm Phill Aelony, a passionate software engineer specializing
          in React, TypeScript, and Next.js. With a keen eye for detail and a
          love for clean, efficient code, I strive to create engaging web
          experiences that push the boundaries of what's possible on the web.
        </p>
      </section>
      <section id="experience" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              Senior Software Engineer - TechCorp
            </h3>
            <p className="text-muted-foreground">2020 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Led the development of a high-traffic e-commerce platform using
                Next.js and TypeScript
              </li>
              <li>
                Implemented state management solutions using Redux and React
                Context API
              </li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Software Engineer - WebSolutions Inc.
            </h3>
            <p className="text-muted-foreground">2018 - 2020</p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Developed responsive web applications using React and Redux
              </li>
              <li>
                Collaborated with UX designers to implement pixel-perfect
                interfaces
              </li>
              <li>
                Optimized application performance, improving load times by 40%
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-accent rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p>A brief description of Project 1 and its key features.</p>
          </div>
          <div className="border border-accent rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p>A brief description of Project 2 and its key features.</p>
          </div>
          <div className="border border-accent rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p>A brief description of Project 3 and its key features.</p>
          </div>
          <div className="border border-accent rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Project 4</h3>
            <p>A brief description of Project 4 and its key features.</p>
          </div>
        </div>
      </section>
      <section id="music" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Music</h2>
        <p>
          When I'm not coding, you can find me creating electronic music. Here
          are some of my latest tracks:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Track 1 - Synthwave Dreams</li>
          <li>Track 2 - Neon Nights</li>
          <li>Track 3 - Digital Horizon</li>
        </ul>
      </section>
    </main>
  )
}

export default ContentView
