import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ExperienceCardProps {
  dateRange: string
  title: string
  description: string
  techStack: string[]
}

const ExperienceCard = ({
  dateRange,
  title,
  description,
  techStack,
}: ExperienceCardProps) => {
  return (
    <Card className="overflow-hidden bg-transparent border-transparent transition-all duration-300 hover:experience-card-hover rounded-lg card-hover-effect">
      <CardContent className="flex p-6 gap-6">
        <div className="text-secondary font-mono text-sm">{dateRange}</div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-primary transition-all duration-300 group-hover:neon-text">
            {title}
          </h3>
          <p className=" text-lg text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="default" className="">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ExperienceCard
