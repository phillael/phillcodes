import Image from 'next/image'
import { VortexWrapper } from './VortexWrapper'
import * as motion from 'framer-motion/client'

const HeroImage = () => {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: 'easeIn',
          duration: 3,
          bounce: 0.5,
          type: 'spring',
        }}
        className="p-2 w-full max-w-[500px]"
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
    </div>
  )
}

export default HeroImage
