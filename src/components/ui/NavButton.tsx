import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon
  label?: string
  isActive?: boolean
  variant?: 'default' | 'ghost'
}

const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
  (
    { className, icon: Icon, label, isActive, variant = 'ghost', ...props },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(
          'w-full justify-start gap-4 px-4 hover:bg-accent/40',
          isActive && 'bg-primary/10 text-primary',
          className
        )}
        {...props}
      >
        {Icon && <Icon size={24} />}
        {label && <span>{label}</span>}
      </Button>
    )
  }
)

NavButton.displayName = 'NavButton'

export { NavButton }
