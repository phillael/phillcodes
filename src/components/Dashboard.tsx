import Header from './Heading'
import HeroImage from './HeroImage'

const Dashboard = () => {
  return (
    <section className="h-screen flex flex-row basis-1/2">
      <div className="flex-grow flex flex-col justify-between p-8 pb-0 md:overflow-hidden">
        <Header />
        <HeroImage />
      </div>
    </section>
  )
}

export default Dashboard
