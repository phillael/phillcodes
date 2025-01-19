'use client'
import { useCallback, useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { cn } from '@/lib/utils'

import {
  ChevronRight,
  Briefcase,
  FolderKanban,
  Users,
  Github,
  Linkedin,
  Menu,
  X,
} from 'lucide-react'
import { NavButton } from './ui/NavButton'

export default function SideMenu() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [])

  const menuItems = useMemo(
    () => [
      { icon: Briefcase, label: 'Experience', id: 'experience' },
      { icon: FolderKanban, label: 'Projects', id: 'projects' },
      { icon: Users, label: 'Testimonials', id: 'testimonials' },
    ],
    []
  )

  const socialItems = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/phillael',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/phill-aelony/',
    },
  ]

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [menuItems])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
    if (isMobile) setIsOpen(false)
  }

  const menuVariants = {
    open: { width: isMobile ? '100%' : '170px', opacity: 1 },
    closed: { width: isMobile ? '0%' : '60px', opacity: isMobile ? 0 : 1 },
  }

  const glowVariants = {
    initial: { pathLength: 0, pathOffset: 0 },
    animate: {
      pathLength: 0.8,
      pathOffset: 1,
      transition: { duration: 7, repeat: Infinity, ease: 'linear' },
    },
  }

  const renderMenuContent = () => (
    <>
      <div className="flex flex-col items-start space-y-6 w-full relative z-10">
        {!isMobile && (
          <NavButton
            icon={ChevronRight}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
        {menuItems.map((item, index) => (
          <NavButton
            key={index}
            icon={item.icon}
            label={isOpen || isMobile ? item.label : undefined}
            isActive={activeSection === item.id}
            onClick={() => scrollToSection(item.id)}
          />
        ))}
      </div>
      <div className="mt-auto flex flex-col items-start space-y-4 w-full relative z-10">
        {socialItems.map((item, index) => (
          <NavButton
            key={index}
            icon={item.icon}
            label={isOpen || isMobile ? item.label : undefined}
            onClick={() =>
              window.open(item.href, '_blank', 'noopener,noreferrer')
            }
          />
        ))}
      </div>
    </>
  )

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleMenu}
          className="fixed top-4 right-4 z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
      <motion.nav
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={cn(
          'bg-transparent z-40 backdrop-blur-lg flex flex-col items-start py-8 h-full border-r border-primary/20',
          isMobile
            ? 'fixed top-0 right-0 w-full'
            : 'top-0 left-0 relative h-[100vh]'
        )}
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            initial="initial"
            animate="animate"
            variants={glowVariants}
          />
        </svg>
        {renderMenuContent()}
      </motion.nav>
    </>
  )
}
