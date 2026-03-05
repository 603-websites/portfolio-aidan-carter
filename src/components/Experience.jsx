import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Workday Financials Recruiter',
    company: 'ALKU',
    location: 'Andover, MA',
    period: 'June 2023 – Present',
    current: true,
    color: '#2563EB',
    logo: '/images/alku-logo.png',
    bullets: [
      'Lead full-cycle recruitment for Workday Financials consultants across enterprise implementations.',
      'Partner with sales executives and account managers to build talent pipelines across GL, AP, AR, Fixed Assets, Business Assets, and Prism.',
      'Conduct in-depth candidate screenings evaluating Workday module expertise and client-facing capabilities.',
      'Manage offer negotiations and closing processes; consistently exceed weekly KPI targets.',
    ],
    tags: ['Full-Cycle Recruiting', 'Workday Financials', 'Pipeline Management', 'KPI Achievement'],
  },
  {
    title: 'Butcher / Storeworker',
    company: 'The Prime Butcher',
    location: 'Windham, NH',
    period: 'July 2021 – March 2023',
    current: false,
    color: '#475569',
    bullets: [
      'Provided exceptional customer service and assisted with product selection and special orders.',
      'Managed inventory, stocking, and store operations in a high-volume retail environment.',
    ],
    tags: ['Customer Service', 'Operations', 'Inventory Management'],
  },
  {
    title: 'Cook / Cashier',
    company: 'Wrap City Sandwich Co.',
    location: 'Londonderry, NH',
    period: 'September 2020 – June 2021',
    current: false,
    color: '#475569',
    bullets: [
      'Prepared food orders efficiently and delivered consistent service in a fast-paced environment.',
    ],
    tags: ['Customer Service', 'Food Prep', 'Cash Handling'],
  },
  {
    title: 'Cart Worker / Starter',
    company: 'Windham Country Club',
    location: 'Windham, NH',
    period: 'January 2018 – August 2020',
    current: false,
    color: '#475569',
    bullets: [
      'Managed golf cart operations and coordinated tee time scheduling for club members.',
    ],
    tags: ['Operations', 'Scheduling', 'Customer Service'],
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Career</span>
          <h2 className="section-heading">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-6 bottom-0 w-px bg-gradient-to-b from-blue-600 via-slate-700 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                className="flex gap-7"
              >
                {/* Dot */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      exp.current
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-500'
                        : 'bg-slate-800 border border-slate-700'
                    }`}
                  >
                    <Briefcase size={17} className="text-white" />
                  </div>
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 mb-2">
                  {exp.logo && (
                    <img src={exp.logo} alt={exp.company} className="w-full object-contain mb-3 opacity-95" style={{ maxHeight: '52px' }} />
                  )}
                  <div className="glass rounded-xl p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-semibold">{exp.title}</h3>
                      <p className="text-blue-400 text-sm font-medium">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-medium bg-green-500/12 text-green-400 rounded-full border border-green-500/25">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} />{exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={11} />{exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
