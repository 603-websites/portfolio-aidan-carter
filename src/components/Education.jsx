import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, BookOpen, Award, MapPin, Calendar } from 'lucide-react'

const activities = [
  { name: 'Golf Team Captain',       org: 'Windham High School',               period: 'Spring 2020 – 2021' },
  { name: 'National Honors Society', org: 'Northern Essex Community College',  period: 'Fall 2021 – Present' },
  { name: 'National Leadership Society', org: 'Northern Essex Community College', period: 'Fall 2021 – Present' },
  { name: 'Student Tutor Volunteer', org: 'Golden Brooke Elementary School',   period: 'Fall 2018 – 2019' },
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-24 relative" style={{ background: 'rgba(5, 11, 24, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Background</span>
          <h2 className="section-heading">
            <span className="gradient-text">Education</span> & Leadership
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-7">

          {/* Education cards */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="glass rounded-xl p-6 card-hover relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center shrink-0">
                  <GraduationCap size={22} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-bold">B.S. Business Management</h3>
                      <p className="text-blue-400 font-medium text-sm mt-0.5">
                        Framingham State University
                      </p>
                    </div>
                    <span className="font-mono text-xs text-slate-500 bg-slate-800/60 px-3 py-1 rounded-full">
                      May 2023
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5"><MapPin size={11} />Framingham, MA</span>
                    <span className="flex items-center gap-1.5"><Award size={11} />3.43 GPA</span>
                    <span className="flex items-center gap-1.5">Entrepreneurship Concentration</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Business Management', 'Entrepreneurship', 'Marketing', 'Finance', 'Organizational Behavior', 'Strategic Management'].map((c) => (
                      <span key={c} className="tech-badge">{c}</span>
                    ))}
                  </div>
                  {/* FSU campus photo */}
                  <div className="rounded-lg overflow-hidden h-32 mt-2">
                    <img
                      src="/images/framingham-state.jpeg"
                      alt="Framingham State University"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 border border-slate-600/30 flex items-center justify-center shrink-0">
                  <BookOpen size={22} className="text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-white font-bold">High School Diploma</h3>
                      <p className="text-slate-400 font-medium text-sm mt-0.5">Windham High School</p>
                    </div>
                    <span className="font-mono text-xs text-slate-500 bg-slate-800/60 px-3 py-1 rounded-full">
                      May 2021
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-3">
                    <span className="flex items-center gap-1.5"><MapPin size={11} />Windham, NH</span>
                    <span className="flex items-center gap-1.5"><Award size={11} />Varsity Golf Captain</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Activities sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6 h-fit"
          >
            <h3 className="text-white font-bold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
              Activities & Leadership
            </h3>
            <div className="space-y-3">
              {activities.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/30"
                >
                  <p className="text-slate-200 font-medium text-sm">{a.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{a.org}</p>
                  <p className="text-slate-600 text-xs mt-0.5 flex items-center gap-1">
                    <Calendar size={9} />{a.period}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Education
