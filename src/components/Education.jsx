import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "B.S. Business Management, Entrepreneurship",
      school: "Framingham State University",
      location: "Framingham, MA",
      period: "Graduated May 2023",
      honors: "3.43 GPA",
      minors: null,
      current: false
    },
    {
      degree: "High School Diploma",
      school: "Windham High School",
      location: "Windham, NH",
      period: "Graduated May 2021",
      honors: "Varsity Golf Captain",
      minors: null,
      current: false
    }
  ]

  const highlights = [
    {
      icon: Award,
      title: "3.43 GPA",
      detail: "Framingham State University"
    },
    {
      icon: GraduationCap,
      title: "Golf Team Captain",
      detail: "Varsity - Windham High School"
    }
  ]

  const clubs = [
    { name: "Golf Team Captain", status: "Windham High School" },
    { name: "National Honors Society", status: "Northern Essex CC" },
    { name: "National Leadership Society", status: "Northern Essex CC" },
    { name: "Student Tutor Volunteer", status: "Golden Brooke Elementary" },
  ]

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading mx-auto">
            Building a strong business foundation through academics, leadership, and community involvement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-primary-400 font-medium">{edu.school}</p>
                  </div>
                  {edu.current && (
                    <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-dark-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {edu.location}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-dark-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0" />
                    {edu.honors}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-5 card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-3">
                    <item.icon className="text-primary-400" size={20} />
                  </div>
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  <p className="text-dark-400 text-xs mt-1">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Clubs sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-xl p-6 h-fit"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
              Activities & Leadership
            </h3>
            <div className="space-y-3">
              {clubs.map((club) => (
                <div
                  key={club.name}
                  className="p-3 rounded-lg bg-dark-800/50 border border-dark-700/50"
                >
                  <p className="text-dark-300 font-medium text-sm">{club.name}</p>
                  <p className="text-xs text-dark-500 mt-1">{club.status}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
