'use client'

import { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import HeroImage from '../HeroImage'

type MenuItem = {
  id: string
  label: string
  children: ReactNode
}

interface RPGMenuProps {
  items: MenuItem[]
}

const RPGMenu: React.FC<RPGMenuProps> = ({ items }) => {
  return (
    <Tabs
      defaultValue={items[0].id}
      className="font-body min-w-[375px] flex flex-col h-full"
    >
      <TabsList className="grid w-full grid-cols-4 bg-card p-1 rounded-t-md flex-none">
        {items.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id}
            className="text-xs sm:text-sm font-heading py-2 px-1 data-[state=active]:bg-accent/20 hover:bg-primary/10"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <HeroImage />
      {items.map((item) => (
        <TabsContent
          key={item.id}
          value={item.id}
          className="flex-1 min-h-0 data-[state=active]:flex data-[state=active]:flex-col"
        >
          <ScrollArea className="flex-1 p-4">
            {/* <h4 className="mb-4 text-lg font-heading leading-none text-primary">
              {item.label}
            </h4> */}
            {item.children}
          </ScrollArea>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default RPGMenu
