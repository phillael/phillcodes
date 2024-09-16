import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="mb-6">
      <h1 className="text-4xl font-bold mb-4 glow-text font-montserrat">
        Phill Aelony
      </h1>
      <p className="mb-6 text-secondary">
        Software Engineer | React | TypeScript | Next.js
      </p>
      <Nav />
    </header>
  )
}

export default Header
