import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface ExperienceCardProps {
  dateRange: string
  title: string
  company: string
  bulletPoints: string[]
  techStack: string[]
}

const ExperienceCard = ({
  dateRange,
  title,
  company,
  bulletPoints,
  techStack,
}: ExperienceCardProps) => {
  return (
    <Card className="bg-transparent border-none">
      <CardContent className="flex flex-col lg:flex-row p-2 gap-6 lg:items-baseline">
        <div className="text-secondary flex-shrink-0 flex lg:flex-col h-full gap-4">
          <p>{dateRange}</p>
          <div className="relative aspect-square lg:w-full w-24 hidden lg:block h-full">
            <Image
              src="/images/space_llama.png"
              alt="Phill Aelony with llamas in Ecuador"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          <p className="text-xl font-bold">{company}</p>
          <ul className="list-disc pl-5 text-md text-foreground">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech, index) => (
              <Badge className="text-accent bg-muted" key={index}>
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
