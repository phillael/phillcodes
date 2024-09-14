import Header from './Header'
import Image from 'next/image'
import { SocialLinks } from './SocialLinks'

const Dashboard = () => {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 p-6 md:h-screen md:sticky md:top-0 flex flex-col justify-between">
      <Header />
      <div className="mt-6 md:mt-0 flex flex-col items-center">
        <div className="relative w-full aspect-square mb-6">
          <Image
            src="/images/phill_llamas.png"
            alt="Phill Aelony with llamas in Ecuador"
            fill
            className="object-cover"
          />
        </div>
        <SocialLinks />
      </div>
    </aside>
  )
}

export default Dashboard
