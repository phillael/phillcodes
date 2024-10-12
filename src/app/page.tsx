'use client'
import Dashboard from '@/components/Dashboard'
import ContentView from '@/components/ContentView'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicSideMenu = dynamic(() => import('@/components/SideMenu'), {
  ssr: false,
})

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>...Loading</div>}>
        <DynamicSideMenu />
      </Suspense>
      <Dashboard />
      <ContentView />
    </>
  )
}

export default Home
