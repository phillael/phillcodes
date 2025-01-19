import Image from 'next/image'
import AnimatedSection from '../AnimatedSection'

const AboutSection = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="neon-text-purple">About Me</h2>
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        <div className="w-full lg:w-[152px] flex-shrink-0">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/space_llama.png"
              alt="Phill Aelony with llamas in Ecuador"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:flex-1 flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-primary">
            The World's Greatest Software Engineer
          </h3>
          <div className="text-md text-foreground space-y-4">
            <p>
              Behold! I am the one known as Phill Aelony. Specializing in React,
              TypeScript, and Next.js. With a keen eye for detail and a love for
              clean, efficient code, and accessibility. I strive to create the
              ultimate web and mobile experiences that push the boundaries of
              what's possible in the universe.
            </p>
            <p>
              When I'm not coding, you will find me playing crazy jazz chords on
              the guitar, cooking better than anyone else you know, or exploring
              the great outdoors.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default AboutSection
