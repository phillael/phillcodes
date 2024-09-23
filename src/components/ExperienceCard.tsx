import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ExperienceCardProps {
  dateRange: string
  title: string
  company: string
  description: string
  techStack: string[]
}

const ExperienceCard = ({
  dateRange,
  title,
  company,
  description,
  techStack,
}: ExperienceCardProps) => {
  return (
    <Card className="bg-transparent hover:bg-neutral-500 hover:bg-opacity-10 border-transparent transition-all duration-300 rounded-3xl card-hover-effect">
      <CardContent className="flex flex-col lg:flex-row p-6 gap-6 items-baseline">
        <div className="text-secondary font-mono text-sm flex-shrink-0">
          {dateRange}
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <h3 className="text-lg font-semibold text-primary transition-all duration-300 group-hover:neon-text">
            {title}
          </h3>
          <p className="text-lg font-bold">{company}</p>
          <p className="text-md text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="default"
                className=" hover:bg-yellow-300 hover:-translate-y-1 transition-all duration-300"
              >
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
