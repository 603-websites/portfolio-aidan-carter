import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, BarChart3, MessageSquare, Monitor, TrendingUp } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Recruiting & Talent Acquisition",
      icon: Users,
      skills: ["Full-Cycle Recruiting", "Candidate Screening", "Pipeline Management", "Offer Negotiation"]
    },
    {
      title: "Workday Financials",
      icon: BarChart3,
      skills: ["GL", "AP", "AR", "Fixed Assets", "Business Assets", "Prism", "Reporting"]
    },
    {
      title: "Business & Communication",
      icon: MessageSquare,
      skills: ["Client Relations", "Sales Support", "Networking", "Interpersonal Skills"]
    },
    {
      title: "Tools & Technology",
      icon: Monitor,
      skills: ["Word", "PowerPoint", "ATS Systems", "CRM"]
    },
    {
      title: "Professional Development",
      icon: TrendingUp,
      skills: ["Leadership", "Time Management", "Team Collaboration", "Problem Solving"]
    },
  ]

  return (
    <section id="skills" className="py-24 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Professional <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            A comprehensive skill set built through hands-on recruiting experience, business education, and professional development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 glass rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <category.icon size={18} className="text-primary-400" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-badge text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Business Management",
              "Entrepreneurship",
              "Marketing",
              "Accounting",
              "Business Communications",
              "Organizational Behavior",
              "Strategic Management",
              "Finance",
              "Business Ethics",
              "Human Resources"
            ].map((course, index) => (
              <motion.span
                key={course}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="tech-badge"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
