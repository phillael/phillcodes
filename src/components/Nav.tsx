import React from 'react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Music', href: '#music' },
]

const Nav = () => {
  return (
    <nav>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.href} className="hover:text-accent transition-colors">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
