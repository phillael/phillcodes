import Image from 'next/image'
import { VortexWrapper } from './VortexWrapper'
import * as motion from 'framer-motion/client'

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: 'easeIn',
        duration: 5,
      }}
      className="mt-6 lg:mt-0 flex flex-col flex-shrink min-h-0"
    >
      <VortexWrapper>
        <div className="aspect-square relative">
          <Image
            src="/images/phill_llamas.png"
            alt="Phill Aelony with llamas in Ecuador"
            fill
            className={'object-cover rounded-r-full'}
          />
        </div>
      </VortexWrapper>
    </motion.div>
  )
}

export default HeroImage
