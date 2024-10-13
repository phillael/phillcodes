import React from 'react'
import { motion, MotionProps } from 'framer-motion'

interface GradientCardProps extends MotionProps {
  children: React.ReactNode
  className?: string
}

const GradientCard: React.FC<GradientCardProps> = ({
  children,
  className = '',
  ...motionProps
}) => {
  return (
    <motion.div
      className={`gradient-card p-8 shadow-2xl ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

export default GradientCard
