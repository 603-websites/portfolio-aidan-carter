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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Boston skyline background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/boston-skyline-hd.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: 'cover', objectPosition: 'center 55%', imageRendering: 'auto' }}
        />
        {/* Dark overlay — left heavy so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

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
              className="text-lg text-white/70 max-w-lg leading-relaxed mb-10"
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

          {/* Right: portrait + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="hidden lg:flex flex-col items-center gap-5"
          >
            {/* Portrait */}
            <div className="relative w-64 h-[340px]">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-400" />
              <div className="absolute -inset-1 border border-white/10 rounded-sm" />
              <img
                src="/images/profile/aidan.jpg"
                alt="Aidan Carter"
                className="w-full h-full object-cover object-top"
              />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-10 pb-3 px-4">
                <p className="font-mono text-[9px] text-cyan-400 tracking-[0.3em] uppercase">Aidan Carter</p>
                <p className="font-mono text-[8px] text-white/50 tracking-wider mt-0.5">Workday Recruiter · ALKU</p>
              </div>
            </div>

            {/* Floating stat cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.9 }}
                className="glass rounded-xl px-4 py-3 flex items-center gap-3 w-full"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `linear-gradient(135deg, ${card.color}, ${card.color}99)` }}
                >
                  <card.icon size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-xs">{card.label}</p>
                  <p className="text-slate-500 text-[10px]">{card.sub}</p>
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
        <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={18} className="text-cyan-400/50" />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
