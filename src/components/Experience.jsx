import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Workday Financials Recruiter",
      company: "ALKU",
      location: "Andover, MA",
      period: "June 2023 - Present",
      type: "current",
      description: [
        "Lead full-cycle recruitment for Workday Financials consultants, from sourcing and screening to offer negotiation and closing.",
        "Partner with sales executives and account managers to understand client needs and deliver top-tier Workday talent.",
        "Build and maintain a robust pipeline of Workday Financials professionals across key modules including GL, AP, AR, Fixed Assets, Business Assets, and Prism.",
        "Conduct in-depth candidate screenings to assess technical expertise in Workday Financials modules and reporting.",
        "Manage offer negotiations and closing processes to secure top candidates.",
        "Maintain long-term consultant relationships to drive retention and repeat placements.",
        "Consistently exceed weekly KPIs and collaborate cross-functionally to drive revenue growth."
      ],
      technologies: ["Full-Cycle Recruiting", "Workday Financials", "Talent Pipeline", "Client Relations", "Offer Negotiation"]
    },
    {
      title: "Butcher / Storeworker",
      company: "The Prime Butcher",
      location: "Windham, NH",
      period: "July 2021 - March 2023",
      type: "past",
      description: [
        "Prepared and processed meat products while maintaining quality standards and food safety protocols.",
        "Provided exceptional customer service, assisting customers with product selection and special orders.",
        "Managed inventory, stocking, and store organization to ensure smooth daily operations."
      ],
      technologies: ["Customer Service", "Food Safety", "Inventory Management", "Teamwork"]
    },
    {
      title: "Cook / Cashier",
      company: "Wrap City Sandwich Co",
      location: "Windham, NH",
      period: "September 2020 - June 2021",
      type: "past",
      description: [
        "Prepared food orders efficiently in a fast-paced restaurant environment.",
        "Operated the cash register and handled customer transactions with accuracy.",
        "Maintained a clean and organized work station while multitasking between cooking and cashier duties."
      ],
      technologies: ["Food Preparation", "Cash Handling", "Customer Service", "Time Management"]
    },
    {
      title: "Cart Worker / Starter",
      company: "Windham Country Club",
      location: "Windham, NH",
      period: "January 2018 - August 2020",
      type: "past",
      description: [
        "Managed golf cart operations and coordinated tee time scheduling as a starter.",
        "Provided excellent customer service to club members and guests.",
        "Maintained equipment and ensured smooth flow of play on the course."
      ],
      technologies: ["Operations", "Customer Service", "Scheduling", "Equipment Maintenance"]
    }
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            A progressive career path from service industry roles to professional recruiting, demonstrating growth, work ethic, and adaptability.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent" />
              )}

              <div className="flex gap-6">
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  exp.type === 'current'
                    ? 'bg-gradient-to-r from-primary-500 to-orange-500'
                    : 'bg-dark-800 border border-dark-700'
                }`}>
                  <Briefcase size={20} className="text-white" />
                </div>

                <div className="flex-1 glass rounded-xl p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      <p className="text-primary-400 font-medium">{exp.company}</p>
                    </div>
                    {exp.type === 'current' && (
                      <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-dark-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-dark-300 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
