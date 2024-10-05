import { motion, Variants } from 'framer-motion'
import React from 'react'

interface AnimatedSectionProps {
  id: string
  children: React.ReactNode
}

const sectionVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const AnimatedSection = ({ id, children }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
