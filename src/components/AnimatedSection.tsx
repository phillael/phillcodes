'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from './SectionWrapper'

interface AnimatedSectionProps {
  children: React.ReactNode
  id: string
}

const AnimatedSection = ({ children, id }: AnimatedSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: '-45% 0px -45% 0px',
    once: false,
  })

  return (
    <SectionWrapper>
      <motion.section
        ref={ref}
        id={id}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="w-full"
      >
        {children}
      </motion.section>
    </SectionWrapper>
  )
}

export default AnimatedSection
