import Header from './Heading'
import Bio from './RpgMenu/Bio'
import RPGMenu from './RpgMenu/RpgMenu'

const menuItems = [
  {
    id: 'bio',
    label: 'Bio',
    children: <Bio />,
  },
  {
    id: 'status',
    label: 'Status',
    children: <div>Status</div>,
  },
  {
    id: 'skills',
    label: 'Skills',
    children: <div>Skills</div>,
  },
  {
    id: 'weapons',
    label: 'Equip',
    children: <div>Equip</div>,
  },
  {
    id: 'music',
    label: 'Music',
    children: <div>Music</div>,
  },
]

const Dashboard = () => {
  return (
    <section className="h-screen p-8 lg:basis-1/2">
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex-1 min-h-0">
          <RPGMenu items={menuItems} />{' '}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
