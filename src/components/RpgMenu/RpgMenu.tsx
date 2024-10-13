'use client'

import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'

const menuItems = [
  { id: 'bio', label: 'Bio', content: 'Your detailed biography goes here...' },
  {
    id: 'status',
    label: 'Status',
    content: 'Your current status information...',
  },
  {
    id: 'skills',
    label: 'Skills',
    content: 'List of your skills and abilities...',
  },
  {
    id: 'weapons',
    label: 'Equip',
    content: 'Equip your weapons and armor...',
  },
  {
    id: 'magic',
    label: 'Magic',
    content: 'Your magical abilities and spells...',
  },
]

export default function RPGMenu() {
  return (
    <Tabs
      defaultValue="bio"
      className="w-full font-body flex-shrink-0 mt-4 min-w-[375px]"
    >
      <TabsList className="grid w-full grid-cols-5 bg-card p-1 rounded-t-md">
        {menuItems.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id}
            className="text-xs sm:text-sm font-heading py-2 px-1 data-[state=active]:bg-accent/20 hover:bg-primary/10"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {menuItems.map((item) => (
        <TabsContent key={item.id} value={item.id}>
          <ScrollArea className="min-h-[200px] bg-gradient-to-r from-card to-primary/5 p-8 shadow-2xl h-full overflow-y-auto transition-colors hover:from-card hover:to-accent/5 rounded-b-2xl">
            <h4 className="mb-4 text-lg font-heading leading-none text-primary">
              {item.label}
            </h4>
            <p className="text-sm text-muted-foreground">{item.content}</p>
          </ScrollArea>
        </TabsContent>
      ))}
    </Tabs>
  )
}
