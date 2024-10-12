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
      type: 'tween',
      //   bounce: 0.4,
      duration: 2,
    },
  },
}

const AnimatedSection = ({ id, children }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
