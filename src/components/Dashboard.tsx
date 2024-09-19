import Header from './Header'
import Nav from './Nav'
import HeroImage from './HeroImage'

const Dashboard = () => {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 p-8 pb-0 md:h-screen md:sticky md:top-0 flex flex-col justify-between bg-card/10">
      <div>
        <Header />
        <Nav />
      </div>
      <HeroImage />
    </aside>
  )
}

export default Dashboard
