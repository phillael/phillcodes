'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AnimatedSection from '../../AnimatedSection'
import { testimonials } from './testimonials'
import GradientCard from '@/components/GradientCard'

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)

  const navigate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === -1) {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      }
      return (prevIndex + 1) % testimonials.length
    })
  }

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50
    if (info.offset.x < -threshold) {
      navigate(1)
    } else if (info.offset.x > threshold) {
      navigate(-1)
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <AnimatedSection id="testimonials">
      <h2 className="text-center mb-12 neon-text-purple">Testimonials</h2>
      <div
        className="overflow-hidden relative min-h-[500px] md:h-[400px] rounded-3xl "
        ref={constraintsRef}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 3 },
            }}
            className="absolute w-full h-full cursor-grab active:cursor-grabbing "
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={1}
            onDragEnd={handleDragEnd}
          >
            <GradientCard className="h-full">
              <div className="flex flex-col h-full gap-8">
                <div className="flex items-center gap-8">
                  <div className="w-32 h-32 relative flex-shrink-0 rounded-full neon-border">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonials[currentIndex].date}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonials[currentIndex].relationship}
                    </p>
                  </div>
                </div>
                <div className="overflow-y-auto custom-scrollbar px-6">
                  <blockquote>
                    <p className="testimonial-text">
                      {testimonials[currentIndex].body}
                    </p>
                  </blockquote>
                </div>
              </div>
            </GradientCard>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-6 gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="hover:bg-primary/20 hover:text-primary-foreground transition-colors rounded-l-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(1)}
          className="hover:bg-primary/30 hover:text-primary-foreground transition-colors rounded-r-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </AnimatedSection>
  )
}
