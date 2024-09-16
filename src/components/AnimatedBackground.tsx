'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsClient(true)
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  const text = 'Phill Aelony'

  if (!isClient) return null

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <AnimatePresence>
        <motion.svg
          key="animated-background"
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {[...Array(3)].map((_, index) => (
            <motion.text
              key={index}
              x="50%"
              y="50%"
              textAnchor="middle"
              fontSize={`${10 - index * 0.5}vw`}
              fontFamily="var(--font-montserrat), sans-serif"
              fontWeight="bold"
              fill="none"
              stroke={`rgba(255,255,255,${0.1 - index * 0.03})`}
              strokeWidth="0.5"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: ['-2%', '2%', '-2%'],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
              style={{
                filter: 'url(#glow)',
                transform: `translate(${mousePosition.x * 0.02 * (3 - index)}px, ${mousePosition.y * 0.02 * (3 - index)}px)`,
              }}
            >
              {text}
            </motion.text>
          ))}
          <motion.circle
            cx="50%"
            cy="50%"
            r="30%"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.svg>
      </AnimatePresence>
    </div>
  )
}
