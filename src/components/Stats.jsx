import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, Target, Award, BarChart3, Zap } from 'lucide-react'

const stats = [
  { value: 50,  suffix: '+', label: 'Consultants Placed',   icon: Users,     color: '#2563EB' },
  { value: 100, suffix: '%+', label: 'Quota Attainment',    icon: Target,    color: '#06B6D4' },
  { value: 3,   suffix: '+', label: 'Years at ALKU',        icon: Award,     color: '#8B5CF6' },
  { value: 7,   suffix: '',  label: 'Workday Modules',      icon: BarChart3, color: '#10B981' },
]

const modules = [
  { name: 'General Ledger (GL)',      pct: 95 },
  { name: 'Accounts Payable (AP)',    pct: 92 },
  { name: 'Accounts Receivable (AR)', pct: 90 },
  { name: 'Fixed Assets',             pct: 85 },
  { name: 'Business Assets',          pct: 85 },
  { name: 'Prism Analytics',          pct: 78 },
]

const AnimatedCounter = ({ value, suffix, isInView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let n = 0
    const duration = 1800
    const interval = duration / value
    const timer = setInterval(() => {
      n++
      setCount(n)
      if (n >= value) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [isInView, value])

  return <>{count}{suffix}</>
}

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stats" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/15 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Performance</span>
          <h2 className="section-heading">
            Results That <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 text-center card-hover group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: stat.color + '18', border: `1px solid ${stat.color}30` }}
              >
                <stat.icon size={22} style={{ color: stat.color }} />
              </div>
              <div className="text-4xl font-black mb-2" style={{ color: stat.color }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Module expertise bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <Zap size={18} className="text-cyan-400" />
            Workday Financials Module Expertise
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {modules.map((mod, i) => (
              <div key={mod.name}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-slate-300 text-sm">{mod.name}</span>
                  <span className="text-cyan-400 text-xs font-mono">{mod.pct}%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #2563EB, #06B6D4)' }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${mod.pct}%` } : {}}
                    transition={{ duration: 1.1, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Stats
