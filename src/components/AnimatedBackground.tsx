import React from 'react'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#010b19]">
      <div className="animated-background">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <linearGradient
              id="neon-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff00ff">
                <animate
                  attributeName="stop-color"
                  values="#ff00ff; #00ffff; #ff00ff"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#00ffff">
                <animate
                  attributeName="stop-color"
                  values="#00ffff; #ff00ff; #00ffff"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          <pattern
            id="name-pattern"
            x="0"
            y="0"
            width="300"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="50%"
              y="50%"
              fontSize="36"
              fontFamily="'VT323', monospace"
              fill="url(#neon-gradient)"
              textAnchor="middle"
              dominantBaseline="middle"
              className="neon-glow"
            >
              Phill Aelony
            </text>
          </pattern>
          <rect width="100%" height="100%" fill="url(#name-pattern)" />
        </svg>
      </div>
    </div>
  )
}
