'use client'
import Dashboard from '@/components/Dashboard'
import ContentView from '@/components/ContentView'
import SideMenu from '@/components/SideMenu'

const Home = () => {
  return (
    <>
      <SideMenu />

      <Dashboard />
      <ContentView />
    </>
  )
}

export default Home
