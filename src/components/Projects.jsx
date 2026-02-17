import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Briefcase, Users, Target } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Workday Financials Practice Growth",
      description: "Contributing to the expansion of ALKU's Workday Financials practice by identifying, recruiting, and placing top-tier consultants across enterprise clients. Driving revenue growth through strategic talent acquisition.",
      icon: Briefcase,
      highlights: [
        "Full-cycle recruitment execution",
        "Revenue growth contribution",
        "Enterprise client delivery",
        "KPI targets consistently exceeded"
      ],
      technologies: ["Workday Financials", "Recruiting", "Revenue Growth", "Client Management"],
      featured: true,
      color: "from-primary-500 to-amber-500"
    },
    {
      title: "Talent Pipeline Development",
      description: "Building and maintaining a robust network of Workday Financials professionals across key modules including GL, AP, AR, Fixed Assets, Business Assets, and Prism. Developing long-term relationships with consultants for repeat placements.",
      icon: Users,
      highlights: [
        "Pipeline strategy & execution",
        "Workday module specialization",
        "Consultant relationship management",
        "Long-term talent retention"
      ],
      technologies: ["Pipeline Management", "Networking", "Workday Modules", "Relationship Building"],
      featured: true,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Client Partnership Strategy",
      description: "Partnering with sales executives and account managers to understand client needs, deliver qualified candidates, and support enterprise-level Workday Financials implementations through strategic talent placement.",
      icon: Target,
      highlights: [
        "Cross-functional collaboration",
        "Client needs assessment",
        "Strategic candidate matching",
        "Account partnership support"
      ],
      technologies: ["Client Relations", "Sales Support", "Strategic Planning", "Cross-Functional Teamwork"],
      featured: false,
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section id="projects" className="py-24 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Professional <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading mx-auto">
            Key initiatives and contributions showcasing recruiting excellence, strategic thinking, and business impact.
          </p>
        </motion.div>

        {/* Featured Project */}
        {(() => {
          const FeaturedIcon = projects[0].icon
          return (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="group relative mb-8"
        >
          <div className="glass rounded-2xl overflow-hidden card-hover">
            <div className={`relative p-6 bg-gradient-to-r ${projects[0].color} bg-opacity-10`}>
              <div className="absolute inset-0 bg-gradient-to-r opacity-10" style={{
                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
              }} />
              <div className="relative flex items-start justify-between">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${projects[0].color} flex items-center justify-center shadow-lg`}>
                  <FeaturedIcon className="text-white" size={28} />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {projects[0].title}
              </h3>
              <p className="text-dark-400 text-sm mb-4 leading-relaxed">
                {projects[0].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {projects[0].highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-2 text-xs text-dark-300"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${projects[0].color}`} />
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/50">
                {projects[0].technologies.map((tech) => (
                  <span key={tech} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -top-2 -right-2">
            <span className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${projects[0].color} text-white rounded-full shadow-lg`}>
              Featured
            </span>
          </div>
        </motion.div>
          )
        })()}

        {/* Other projects */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="group relative"
            >
              <div className="glass rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                <div className={`relative p-6 bg-gradient-to-r ${project.color} bg-opacity-10`}>
                  <div className="absolute inset-0 bg-gradient-to-r opacity-10" style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                  }} />
                  <div className="relative flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}>
                      <project.icon className="text-white" size={28} />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 flex-1">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-dark-300"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/50">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {project.featured && (
                <div className="absolute -top-2 -right-2">
                  <span className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${project.color} text-white rounded-full shadow-lg`}>
                    Featured
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <Linkedin size={20} />
            View More on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
