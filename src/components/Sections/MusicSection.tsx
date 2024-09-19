import React from 'react'

const MusicSection = () => {
  return (
    <section id="music" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 font-montserrat glow-text">
        Music
      </h2>
      <p>
        When I'm not coding, you can find me creating electronic music. Here are
        some of my latest tracks:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Track 1 - Synthwave Dreams</li>
        <li>Track 2 - Neon Nights</li>
        <li>Track 3 - Digital Horizon</li>
      </ul>
    </section>
  )
}

export default MusicSection
