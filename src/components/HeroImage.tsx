import Image from 'next/image'
import { VortexWrapper } from './VortexWrapper'

const HeroImage = () => {
  return (
    <div className="mt-6 md:mt-0 flex flex-col items-center">
      <VortexWrapper>
        <div className="w-full aspect-square relative">
          <Image
            src="/images/phill_llamas.png"
            alt="Phill Aelony with llamas in Ecuador"
            fill
            className="object-cover rounded-r-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
      </VortexWrapper>
    </div>
  )
}

export default HeroImage
