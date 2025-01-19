import Header from './Heading'
import Bio from './RpgMenu/Bio'
import RPGMenu from './RpgMenu/RpgMenu'
import Status from './RpgMenu/Status'

const menuItems = [
  {
    id: 'status',
    label: 'Status',
    children: <Status />,
  },
  {
    id: 'bio',
    label: 'Bio',
    children: <Bio />,
  },

  {
    id: 'skills',
    label: 'Skills',
    children: <div>Skills</div>,
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
      <div className="flex flex-col h-full gap-6">
        <Header />
        <div className="flex-1 min-h-0">
          <RPGMenu items={menuItems} />{' '}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
