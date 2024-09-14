import React from 'react'
import { Github, Linkedin, FileDown } from 'lucide-react'
import { IconButton } from './ui/IconButton'

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <IconButton
        icon={Github}
        href="https://github.com/yourusername"
        label="GitHub"
      />
      <IconButton
        icon={Linkedin}
        href="https://linkedin.com/in/yourusername"
        label="LinkedIn"
      />
      <IconButton
        icon={FileDown}
        href="/path-to-your-resume.pdf"
        label="Download Resume"
        download
      />
    </div>
  )
}
