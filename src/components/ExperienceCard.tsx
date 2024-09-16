import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ExperienceCardProps {
  dateRange: string
  title: string
  description: string
  techStack: string[]
}

export default function ExperienceCard({
  dateRange,
  title,
  description,
  techStack,
}: ExperienceCardProps) {
  return (
    <Card className="w-full group relative overflow-hidden bg-transparent border-transparent transition-all duration-300 hover:bg-card/50 hover:shadow-lg hover:shadow-primary/20 rounded-lg">
      <CardContent className="p-6 grid grid-cols-[1fr_3fr] gap-4">
        <div className="text-secondary font-mono text-sm">{dateRange}</div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-primary transition-all duration-300 group-hover:glow-text">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                className="tech-badge bg-secondary/10 rounded-full transition-all duration-300 group-hover:bg-secondary/20"
              >
                <span>{tech}</span>
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
