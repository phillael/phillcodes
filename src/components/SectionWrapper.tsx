import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <div className="min-h-screen w-full snap-start snap-always flex items-center py-32">
      <div className="w-full max-w-3xl mx-auto px-4">{children}</div>
    </div>
  )
}

export default SectionWrapper
