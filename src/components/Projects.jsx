import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { TrendingUp, Building2, ChevronRight, X } from 'lucide-react'

const deals = [
  {
    id: 1,
    title: 'Enterprise GL / AP Implementation',
    industry: 'Financial Services',
    badge: 'Featured',
    color: '#2563EB',
    summary: 'Placed a senior Workday GL & AP consultant into a top-20 US bank\'s ERP modernization program under a 2-week start deadline.',
    problem: 'Client needed a certified Workday Financials consultant with GL and AP expertise for a multi-phase rollout — with a hard 2-week start deadline.',
    strategy: 'Leveraged existing pipeline relationships and targeted outreach to surface pre-vetted candidates. Ran parallel screening tracks to compress time-to-submit.',
    outcome: 'Filled the role in 9 days. Consultant extended twice — generating repeat revenue and a long-term preferred-vendor relationship.',
    tags: ['GL', 'AP', 'Financial Services', 'Full-Cycle'],
  },
  {
    id: 2,
    title: 'Multi-Module Prism Analytics Hire',
    industry: 'Healthcare',
    badge: null,
    color: '#06B6D4',
    summary: 'Sourced a rare Workday Prism Analytics specialist for a healthcare system\'s data transformation initiative after 6 weeks of failed searches.',
    problem: 'Prism Analytics talent is extremely scarce. Client had been actively searching for 6+ weeks with no viable candidates.',
    strategy: 'Mapped the full known Prism contractor market, identified passive candidates through referral networks, and negotiated a premium rate to close a top candidate.',
    outcome: 'Placed within 3 weeks. Client cited it as one of their most difficult-to-fill roles resolved that year.',
    tags: ['Prism Analytics', 'Healthcare', 'Passive Sourcing'],
  },
  {
    id: 3,
    title: 'Fixed Assets Emergency Backfill',
    industry: 'Manufacturing',
    badge: null,
    color: '#8B5CF6',
    summary: 'Emergency backfill after a client\'s Fixed Assets consultant withdrew the week of go-live — filled in 7 days.',
    problem: 'Client\'s go-live was 8 days out and their Fixed Assets consultant withdrew. No margin for delays or missteps.',
    strategy: 'Activated the top 5 Fixed Assets contacts in pipeline, aligned on availability and rate within hours, and submitted 3 qualified candidates within 48 hours.',
    outcome: 'Candidate started on day 7. Go-live proceeded on schedule. Client became a preferred-vendor account.',
    tags: ['Fixed Assets', 'Manufacturing', 'Urgent Placement'],
  },
]

const Modal = ({ deal, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ background: 'rgba(2, 8, 23, 0.85)', backdropFilter: 'blur(8px)' }}
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.92, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.92, opacity: 0, y: 20 }}
      transition={{ type: 'spring', duration: 0.4 }}
      onClick={(e) => e.stopPropagation()}
      className="glass rounded-2xl p-8 max-w-lg w-full relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
      >
        <X size={20} />
      </button>

      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: deal.color + '20', border: `1px solid ${deal.color}40` }}
        >
          <Building2 size={18} style={{ color: deal.color }} />
        </div>
        <div>
          <h3 className="text-white font-bold leading-tight">{deal.title}</h3>
          <p className="text-slate-500 text-sm">{deal.industry}</p>
        </div>
      </div>

      {[
        { label: 'Challenge', text: deal.problem },
        { label: 'Strategy',  text: deal.strategy },
        { label: 'Outcome',   text: deal.outcome },
      ].map(({ label, text }) => (
        <div key={label} className="mb-5">
          <p
            className="font-mono text-[10px] tracking-[0.3em] uppercase mb-1.5"
            style={{ color: deal.color }}
          >
            {label}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
        </div>
      ))}

      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {deal.tags.map((t) => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>
    </motion.div>
  </motion.div>
)

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="achievements" className="py-24 relative" style={{ background: 'rgba(5, 11, 24, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="section-label">Case Studies</span>
          <h2 className="section-heading">
            Key <span className="gradient-text">Wins</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-slate-500 text-center mb-14"
        >
          Click any card to see the full story.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              onClick={() => setSelected(deal)}
              className="glass rounded-2xl overflow-hidden card-hover cursor-pointer group relative"
            >
              {deal.badge && (
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full text-white z-10"
                  style={{ background: `linear-gradient(135deg, ${deal.color}, #06B6D4)` }}
                >
                  {deal.badge}
                </div>
              )}
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${deal.color}, transparent)` }} />
              <div className="p-6">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: deal.color + '15', border: `1px solid ${deal.color}30` }}
                >
                  <TrendingUp size={18} style={{ color: deal.color }} />
                </div>
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: deal.color }}>
                  {deal.industry}
                </p>
                <h3 className="text-white font-semibold mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                  {deal.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{deal.summary}</p>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: deal.color }}>
                  Read case study
                  <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selected && <Modal deal={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default Projects
