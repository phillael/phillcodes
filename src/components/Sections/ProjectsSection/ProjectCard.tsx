import Image from 'next/image'
import Link from 'next/link'
import { Project } from './projects'

interface ProjectCardProps {
  project: Project
  index: number
}

// Different clip paths for variety
const clipPaths = [
  'polygon(0 100px,50px 0,calc(100% - 50px) 0,100% 50px,100% calc(100% - 20px),calc(100% - 110px) 100%,5px 100%,0 calc(100% - 20px))',
  'polygon(50px 0,100% 0,100% calc(100% - 50px),calc(100% - 50px) 100%,0 100%,0 50px)',
  'polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))',
  'polygon(20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%,0 20px)',
]

// Different corner accent styles
const cornerAccents = [
  { top: true, right: true, bottom: false, left: false },
  { top: true, right: false, bottom: true, left: false },
  { top: false, right: true, bottom: true, left: false },
  { top: true, right: false, bottom: false, left: true },
]

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const clipPathIndex = index % clipPaths.length
  const cornerAccent = cornerAccents[index % cornerAccents.length]
  const isEven = index % 2 === 0

  return (
    <div className="group relative">
      {/* Main card with clip path */}
      <div
        className={`relative border border-primary/30 rounded-lg overflow-hidden bg-card/30 hover:bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_2rem_-0.5rem_theme(colors.primary/30%)] hover:border-primary/50`}
        style={{ clipPath: clipPaths[clipPathIndex] }}
      >
        {/* Background grid pattern - alternating orientation */}
        <div
          className={`absolute inset-0 ${
            isEven
              ? 'bg-[linear-gradient(0deg,transparent_24px,theme(colors.primary/2%)_25px),linear-gradient(90deg,transparent_24px,theme(colors.primary/2%)_25px)]'
              : 'bg-[linear-gradient(45deg,transparent_24px,theme(colors.primary/2%)_25px),linear-gradient(-45deg,transparent_24px,theme(colors.primary/2%)_25px)]'
          } bg-[size:25px_25px]`}
        />

        {/* Decorative corner accents - varying positions */}
        {cornerAccent.top && cornerAccent.right && (
          <div className="absolute top-0 right-0 w-24 h-24 [clip-path:polygon(100%_0,0_0,100%_100%)] bg-primary/10" />
        )}
        {cornerAccent.bottom && cornerAccent.left && (
          <div className="absolute bottom-0 left-0 w-16 h-16 [clip-path:polygon(0%_0,0_100%,100%_100%)] bg-primary/10" />
        )}

        {/* Corner details - varying positions */}
        {cornerAccent.top && cornerAccent.left && (
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 group-hover:border-primary/50 transition-colors" />
        )}
        {cornerAccent.bottom && cornerAccent.right && (
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 group-hover:border-primary/50 transition-colors" />
        )}

        <div
          className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} relative`}
        >
          <div className="relative lg:w-72 aspect-[16/9] lg:aspect-square flex-shrink-0">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
            />
            <div
              className={`absolute inset-0 ${
                isEven
                  ? 'bg-gradient-to-t from-black/80 to-transparent lg:bg-gradient-to-r'
                  : 'bg-gradient-to-t from-black/80 to-transparent lg:bg-gradient-to-l'
              }`}
            />

            {/* Image corner accent - alternating corners */}
            <div
              className={`absolute ${isEven ? 'top-0 right-0' : 'top-0 left-0'} w-12 h-12 border-t-2 ${isEven ? 'border-r-2' : 'border-l-2'} border-primary/30 group-hover:border-primary/50 transition-colors`}
            />
          </div>

          <div className="flex-1 p-6 relative">
            {/* Content area accent lines - varying patterns */}
            {index % 3 === 0 && (
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-primary/20 group-hover:bg-primary/30 transition-colors" />
            )}
            {index % 3 === 1 && (
              <div className="absolute top-8 bottom-8 left-0 w-[2px] bg-primary/20 group-hover:bg-primary/30 transition-colors" />
            )}
            {index % 3 === 2 && (
              <>
                <div className="absolute top-0 left-8 w-[2px] h-8 bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                <div className="absolute top-0 right-8 w-[2px] h-8 bg-primary/20 group-hover:bg-primary/30 transition-colors" />
              </>
            )}

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold font-montserrat text-primary">
                  {project.title}
                </h3>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-primary/80 hover:text-primary transition-colors relative px-4 py-1 before:absolute before:inset-0 before:border before:border-primary/30 before:hover:border-primary/50 before:[clip-path:polygon(0_30%,15%_0,85%_0,100%_30%,100%_70%,85%_100%,15%_100%,0%_70%)] before:transition-colors"
                >
                  Website
                </Link>
              </div>

              <span className="text-sm text-primary/60">
                {project.dateRange}
              </span>

              <p className="text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs bg-primary/10 border border-primary/30 text-primary/80 relative ${
                      index % 2 === 0
                        ? '[clip-path:polygon(0_30%,10%_0,90%_0,100%_30%,100%_70%,90%_100%,10%_100%,0%_70%)]'
                        : '[clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)]'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side accents - varying positions */}
      {index % 4 === 0 && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-16 bg-primary/30 group-hover:bg-primary/50 group-hover:h-32 transition-all duration-300" />
      )}
      {index % 4 === 1 && (
        <>
          <div className="absolute right-0 top-1/4 w-[2px] h-8 bg-primary/20 group-hover:bg-primary/40 group-hover:h-12 transition-all duration-300" />
          <div className="absolute right-0 bottom-1/4 w-[2px] h-8 bg-primary/20 group-hover:bg-primary/40 group-hover:h-12 transition-all duration-300" />
        </>
      )}
      {index % 4 === 2 && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-16 bg-primary/30 group-hover:bg-primary/50 group-hover:h-32 transition-all duration-300" />
      )}
      {index % 4 === 3 && (
        <>
          <div className="absolute left-0 top-1/4 w-[2px] h-8 bg-primary/20 group-hover:bg-primary/40 group-hover:h-12 transition-all duration-300" />
          <div className="absolute left-0 bottom-1/4 w-[2px] h-8 bg-primary/20 group-hover:bg-primary/40 group-hover:h-12 transition-all duration-300" />
        </>
      )}
    </div>
  )
}

export default ProjectCard
