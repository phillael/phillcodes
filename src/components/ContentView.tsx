import { Exo } from 'next/font/google'
import ExperienceSection from './ExperienceSection'

const ContentView = () => {
  return (
    <main className="w-full md:w-2/3 lg:w-3/4 p-6 overflow-y-auto bg-card/10">
      <section id="about" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 font-montserrat glow-text">
          About Me
        </h2>
        <p className=" max-w-xl">
          Hello! I'm Phill Aelony, a passionate software engineer specializing
          in React, TypeScript, and Next.js. With a keen eye for detail and a
          love for clean, efficient code, I strive to create engaging web
          experiences that push the boundaries of what's possible on the web.
        </p>
      </section>
      <ExperienceSection />
      <section id="projects" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 font-montserrat glow-text">
          Projects
        </h2>
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
      <section id="music" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 font-montserrat glow-text">
          Music
        </h2>
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
