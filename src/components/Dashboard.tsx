import Header from './Heading'
import HeroImage from './HeroImage'
import BioSection from './Sections/BioSection'

const Dashboard = () => {
  return (
    <section className="h-screen flex flex-row basis-1/2">
      <div className="flex flex-col justify-between p-8 md:overflow-hidden">
        <Header />
        <HeroImage />
        <BioSection />
      </div>
    </section>
  )
}

export default Dashboard
