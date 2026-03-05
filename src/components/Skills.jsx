import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, BarChart3, Users, TrendingUp, MessageSquare, Monitor } from 'lucide-react'

const categories = [
  {
    icon: Target,
    title: 'Recruiting',
    color: '#2563EB',
    skills: ['Full-Cycle Recruiting', 'Candidate Screening', 'Pipeline Management', 'Offer Negotiation', 'Passive Sourcing'],
  },
  {
    icon: BarChart3,
    title: 'Workday Financials',
    color: '#06B6D4',
    skills: ['General Ledger (GL)', 'Accounts Payable (AP)', 'Accounts Receivable (AR)', 'Fixed Assets', 'Business Assets', 'Prism Analytics'],
  },
  {
    icon: Users,
    title: 'Client Relations',
    color: '#8B5CF6',
    skills: ['Client Partnership', 'Sales Support', 'Account Management', 'Networking', 'Cross-Functional Collaboration'],
  },
  {
    icon: TrendingUp,
    title: 'Business',
    color: '#10B981',
    skills: ['Entrepreneurship', 'Strategic Planning', 'KPI Tracking', 'Revenue Growth', 'Market Analysis'],
  },
  {
    icon: MessageSquare,
    title: 'Communication',
    color: '#F59E0B',
    skills: ['Interpersonal Skills', 'Professional Communication', 'Negotiation', 'Presentation', 'Active Listening'],
  },
  {
    icon: Monitor,
    title: 'Tools & Tech',
    color: '#EF4444',
    skills: ['ATS Systems', 'CRM Platforms', 'Microsoft Word', 'PowerPoint', 'LinkedIn Recruiter'],
  },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-heading">
            Core <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-6 card-hover group relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: cat.color + '18', border: `1px solid ${cat.color}35` }}
                >
                  <cat.icon size={18} style={{ color: cat.color }} />
                </div>
                <h3 className="text-white font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs rounded-md text-slate-300"
                    style={{ backgroundColor: cat.color + '10', border: `1px solid ${cat.color}22` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
