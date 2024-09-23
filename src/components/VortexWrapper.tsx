'use client'

import React, { useRef, useEffect } from 'react'

interface VortexWrapperProps {
  children: React.ReactNode
}

export const VortexWrapper: React.FC<VortexWrapperProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      )
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.3)') // Cyan (primary) with lower opacity
      gradient.addColorStop(0.5, 'rgba(255, 0, 255, 0.3)') // Magenta (accent) with lower opacity
      gradient.addColorStop(1, 'rgba(0, 255, 0, 0.9)') // Green (muted) with lower opacity

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2

      const maxRadius = Math.max(canvas.width, canvas.height) / 2
      const numCircles = 50

      for (let i = 0; i < numCircles; i++) {
        ctx.beginPath()
        const baseAngle = (time * 0.001 + i * 0.1) % (Math.PI * 2)
        const randomOffset = Math.sin(time * 0.002 + i) * 0.2
        const angle = baseAngle + randomOffset
        const scale = (i / numCircles) ** 1.5 // Non-linear scaling for more central density
        const radius = maxRadius * scale

        // Occasionally use dashed lines
        if (Math.random() < 0.2) {
          ctx.setLineDash([5, 5])
        } else {
          ctx.setLineDash([])
        }

        ctx.ellipse(
          canvas.width / 2,
          canvas.height / 2,
          radius,
          radius * (0.8 + Math.sin(time * 0.003 + i * 0.2) * 0.2), // Varying ellipse shape
          angle,
          0,
          Math.PI * 2
        )
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw(0)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full rounded-full"
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
