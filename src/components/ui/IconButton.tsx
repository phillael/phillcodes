import React from 'react'
import { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface IconButtonProps {
  icon: LucideIcon
  href: string
  label: string
  download?: boolean
}

export function IconButton({
  icon: Icon,
  href,
  label,
  download,
}: IconButtonProps) {
  return (
    <Button variant="ghost" size="icon" asChild>
      <a
        href={href}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        aria-label={label}
        download={download}
      >
        <Icon className="h-6 w-6 hover:text-accent transition-colors" />
      </a>
    </Button>
  )
}
