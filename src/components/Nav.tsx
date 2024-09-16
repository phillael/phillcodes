'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type NavItem = {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Music', href: '#music' },
]

const Nav = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // offset for better accuracy

      const sections = navItems
        .map((item) => {
          const element = document.querySelector(item.href)
          return element
            ? {
                id: item.href,
                top: element.getBoundingClientRect().top + window.scrollY,
              }
            : null
        })
        .filter((item): item is { id: string; top: number } => item !== null)

      const currentSection = sections.reduce((acc, section) => {
        return section.top <= scrollPosition ? section : acc
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    handleScroll() // Call once to set initial state
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
      <ul className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`text-lg transition-colors duration-300 hover:text-secondary relative
                ${activeSection === item.href ? 'text-primary' : 'text-foreground'}
              `}
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector(item.href)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              {item.name}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300
                ${activeSection === item.href ? 'scale-x-100' : ''}
              `}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
