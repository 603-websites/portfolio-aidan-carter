import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Target, Users, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Consultative Approach',
    desc: 'Deep discovery to understand exactly what clients need — not just what they ask for.',
    color: '#2563EB',
  },
  {
    icon: Users,
    title: 'Relationship-First',
    desc: 'Building long-term trust with both candidates and hiring managers to fuel repeat placements.',
    color: '#06B6D4',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven',
    desc: 'Tracking pipeline metrics, activity KPIs, and market trends to stay ahead of demand.',
    color: '#8B5CF6',
  },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">My Story</span>
            <h2 className="section-heading mb-6">
              Sales Is About <span className="gradient-text">People</span>, Not Products
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Workday Financials Recruiter at ALKU</span> in
                Andover, MA, specializing in connecting elite Workday talent with enterprise clients executing
                large-scale financial system implementations.
              </p>
              <p>
                Since graduating from Framingham State University in 2023 with a degree in Business Management
                and Entrepreneurship, I've built my career on a simple belief: the best outcomes come from
                genuine relationships — not transactional exchanges.
              </p>
              <p>
                My approach is consultative and data-driven. I invest time understanding my clients' technical
                environments and my candidates' career goals, so every match I make delivers lasting value on
                both sides of the table.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                'Full-cycle recruiting from sourcing to close',
                'Workday Financials module specialization',
                'Enterprise client relationship management',
                'KPI-driven performance — consistently exceeded',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12 }}
                className="glass rounded-xl p-5 card-hover flex items-start gap-4 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 bottom-0 w-0.5" style={{ background: p.color }} />
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: p.color + '18', border: `1px solid ${p.color}30` }}
                >
                  <p.icon size={18} style={{ color: p.color }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
              className="glass rounded-xl p-5"
              style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,182,212,0.05))' }}
            >
              <span className="section-label" style={{ marginBottom: '12px' }}>Fast Facts</span>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { val: '3+', lbl: 'Years Recruiting' },
                  { val: '3.43', lbl: 'GPA at FSU' },
                  { val: '7', lbl: 'WD Modules' },
                ].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <p className="text-2xl font-black gradient-text">{val}</p>
                    <p className="text-slate-500 text-xs mt-1">{lbl}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
