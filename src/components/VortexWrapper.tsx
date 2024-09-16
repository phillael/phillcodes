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
      gradient.addColorStop(0, 'rgba(218, 0, 78, 0.3)') // --secondary with lower opacity
      gradient.addColorStop(0.5, 'rgba(248, 135, 255, 0.3)') // --primary with lower opacity
      gradient.addColorStop(1, 'rgba(50, 20, 80, 0.3)') // --accent with lower opacity

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2

      for (let i = 0; i < 50; i++) {
        ctx.beginPath()
        const angle = (time * 0.001 + i * 0.1) % (Math.PI * 2)
        const scale = i / 50 + 0.5 + Math.sin(time * 0.001 + i * 0.1) * 0.1
        ctx.ellipse(
          canvas.width / 2,
          canvas.height / 2,
          (canvas.width / 2) * scale,
          (canvas.height / 2) * scale,
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
