import Image from 'next/image'
import Header from './Header'
import { SocialLinks } from './SocialLinks'
import { VortexWrapper } from './VortexWrapper'

const Dashboard = () => {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 p-6 pb-0 md:h-screen md:sticky md:top-0 flex flex-col justify-between bg-card/10">
      <Header />
      <SocialLinks />

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
    </aside>
  )
}

export default Dashboard
