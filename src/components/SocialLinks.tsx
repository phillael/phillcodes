import React from 'react'
import { Github, Linkedin, FileDown } from 'lucide-react'
import { IconButton } from './ui/IconButton'

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-4">
      <IconButton
        icon={Github}
        href="https://github.com/yourusername"
        label="GitHub"
        className="text-primary hover:text-secondary transition-colors rounded-full"
      />
      <IconButton
        icon={Linkedin}
        href="https://linkedin.com/in/yourusername"
        label="LinkedIn"
        className="text-primary hover:text-secondary transition-colors rounded-full"
      />
      <IconButton
        icon={FileDown}
        href="/path-to-your-resume.pdf"
        label="Download Resume"
        download
        className="text-primary hover:text-secondary transition-colors rounded-full"
      />
    </div>
  )
}
