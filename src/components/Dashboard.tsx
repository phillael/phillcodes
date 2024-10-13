import Header from './Heading'
import HeroImage from './HeroImage'
import RPGMenu from './RpgMenu/RpgMenu'

const Dashboard = () => {
  return (
    <section className="h-screen flex flex-row basis-1/2">
      <div className="flex flex-col justify-between p-8 w-full overflow-hidden">
        <Header />
        <div className="flex-grow flex flex-col justify-center overflow-hidden rounded-full">
          <HeroImage />
        </div>
        <RPGMenu />
      </div>
    </section>
  )
}

export default Dashboard
