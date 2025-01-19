import { motion } from 'framer-motion'

interface StatBarProps {
  current: number
  max: number
  type: 'HP' | 'MP'
}

const StatBar = ({ current, max, type }: StatBarProps) => {
  const percentage = (current / max) * 100
  const barColor = type === 'HP' ? 'bg-red-500' : 'bg-blue-500'

  return (
    <div className="flex items-center gap-2">
      <span className="w-8 font-heading text-sm neon-text-blue">{type}</span>
      <div className="h-4 w-full bg-gray-800 rounded border border-gray-600">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full rounded ${barColor}`}
        />
      </div>
      <span className="font-mono text-sm whitespace-nowrap">
        {current}/{max}
      </span>
    </div>
  )
}

const Status = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div>
          <h2 className="font-heading text-2xl neon-text-blue">
            Software Engineer
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="font-heading neon-text-blue ">Lv.</span>
          <span className="font-mono">78</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-heading neon-text-blue ">Next:</span>
          <span className="font-mono">3,789</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <StatBar current={1892} max={2347} type="HP" />
        <StatBar current={4598} max={7000} type="MP" />
      </div>
    </div>
  )
}

export default Status
