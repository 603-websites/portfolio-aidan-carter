import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Aidan is one of the most tenacious recruiters I've worked with. He doesn't just fill roles — he genuinely understands the technical depth of Workday Financials and delivers candidates who are ready to perform from day one.",
    name: 'Senior Manager, Talent Acquisition',
    company: 'ALKU',
    initials: 'SM',
    color: '#2563EB',
  },
  {
    quote: "We'd been searching for a Prism Analytics specialist for over a month. Aidan came through with three qualified candidates in under two weeks. His market knowledge is impressive — he understands the space deeply.",
    name: 'VP of HR Technology',
    company: 'Enterprise Client',
    initials: 'VP',
    color: '#06B6D4',
  },
  {
    quote: "What separates Aidan is his follow-through and communication. He keeps both sides informed throughout the entire process and makes placing feel seamless. I'd recommend him to any consultant looking for their next role.",
    name: 'Workday Financials Consultant',
    company: 'Placed Candidate',
    initials: 'WC',
    color: '#8B5CF6',
  },
]

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  const t = testimonials[index]

  return (
    <section id="testimonials" className="py-24 relative" style={{ background: 'rgba(5, 11, 24, 0.5)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Social Proof</span>
          <h2 className="section-heading">
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-8 sm:p-10 relative"
          >
            <Quote size={38} className="mb-6 opacity-20" style={{ color: t.color }} />
            <p className="text-slate-200 text-lg leading-relaxed mb-8 italic">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ background: `linear-gradient(135deg, ${t.color}, #06B6D4)` }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-slate-500 text-sm">{t.company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '24px' : '8px',
                  backgroundColor: i === index ? '#2563EB' : '#334155',
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
