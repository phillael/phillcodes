import React from 'react'
import AnimatedSection from '../AnimatedSection'

const MusicSection = () => {
  return (
    <AnimatedSection id="music">
      <h2 className="neon-text-2">Music</h2>
      <p>
        When I'm not coding, you can find me creating electronic music. Here are
        some of my latest tracks:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Track 1 - Synthwave Dreams</li>
        <li>Track 2 - Neon Nights</li>
        <li>Track 3 - Digital Horizon</li>
      </ul>
    </AnimatedSection>
  )
}

export default MusicSection
