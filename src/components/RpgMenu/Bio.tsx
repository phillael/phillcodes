import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Bio = () => {
  const [showLinks, setShowLinks] = useState(false)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="flex flex-col gap-4">
      <TypeAnimation
        sequence={[
          `I was born and raised in Minneapolis, MN! I began playing music at a young age and eventually went to the University of North Texas to study jazz guitar.

          I spent many years playing in bands, touring, recording, teaching, and traveling the world. I crushed it. I played with an epic band called The Funky Knuckles. However all of this grew tiresome, so I used my insanely powerful mind and firey unparallelled discipline to teach myself computer programming.

          Oh yeah I also composed a ton of music for a video game called Eco which is available on Steam and I did an awesome job.

          I was so good at programming that my first job was at Microsoft. That grew tiresome so I moved on to work at some more interesting startups, and now I am doing full stack development for a company called TimelyCare and it is awesome and I do great work.`,
          () => setShowLinks(true),
        ]}
        wrapper="div"
        speed={80}
        style={{ whiteSpace: 'pre-line' }}
        repeat={0}
      />
      {showLinks && (
        <motion.div
          className="flex flex-col gap-2 mt-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.a
            variants={item}
            href="https://www.youtube.com/watch?v=OC_hDeH_nGI&ab_channel=GroundUPMusicNYC"
            target="_blank"
            rel="noopener noreferrer"
          >
            → Check out The Funky Knuckles
          </motion.a>
          <motion.a
            variants={item}
            href="https://store.steampowered.com/app/382310/Eco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            → Play Eco on Steam
          </motion.a>
          <motion.a
            variants={item}
            href="https://timelycare.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            → Visit TimelyCare
          </motion.a>
        </motion.div>
      )}
    </div>
  )
}

export default Bio
