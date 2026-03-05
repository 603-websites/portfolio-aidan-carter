import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Download, Mail, TrendingUp, Users, Award } from 'lucide-react'

const floatingCards = [
  { icon: TrendingUp, label: '100%+ Quota',    sub: 'Consistently Met',   color: '#2563EB' },
  { icon: Users,      label: '50+ Placements', sub: 'Consultants Placed', color: '#06B6D4' },
  { icon: Award,      label: 'Top Recruiter',  sub: 'ALKU — 3+ Years',   color: '#8B5CF6' },
]

const Hero = () => {
  const { scrollY } = useScroll()
  const scrollOpacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient grid-bg">

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-light rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                Workday Financials Recruiter · ALKU
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-7xl sm:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-2"
            >
              <span className="text-white">AIDAN</span>
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-7xl sm:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-8"
            >
              <span className="gradient-text">CARTER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-lg text-slate-400 max-w-lg leading-relaxed mb-10"
            >
              Driving enterprise growth through strategic talent acquisition —
              connecting top Workday Financials professionals with organizations
              that need them most.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#achievements" className="btn-primary flex items-center gap-2">
                <TrendingUp size={16} />
                View Achievements
              </a>
              <a
                href="/documents/Aidan-Carter-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary flex items-center gap-2">
                <Mail size={16} />
                Contact
              </a>
            </motion.div>
          </div>

          {/* Right: floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.9 }}
                className="glass rounded-xl px-5 py-4 flex items-center gap-4 min-w-[230px]"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `linear-gradient(135deg, ${card.color}, ${card.color}99)` }}
                >
                  <card.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{card.label}</p>
                  <p className="text-slate-500 text-xs">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-slate-600 uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={18} className="text-blue-500/50" />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
