import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Target, Users } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: GraduationCap,
      title: "B.S. Business Management",
      description: "Framingham State University",
      detail: "Entrepreneurship Concentration"
    },
    {
      icon: Award,
      title: "Recruiter at ALKU",
      description: "Workday Financials Practice",
      detail: "Full-Cycle Recruiting"
    },
    {
      icon: Target,
      title: "Golf Team Captain",
      description: "Windham High School",
      detail: "Varsity Leadership"
    },
    {
      icon: Users,
      title: "3.43 GPA",
      description: "Strong Academic Record",
      detail: "Business & Entrepreneurship"
    }
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            A driven business professional with a passion for talent acquisition, client partnerships, and building meaningful connections.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-dark-300 leading-relaxed">
              <p>
                I'm a <span className="text-primary-400 font-medium">Business Management professional</span> and
                Framingham State University graduate with a concentration in Entrepreneurship. My career in recruiting
                is fueled by a genuine passion for connecting talented professionals with the right opportunities.
              </p>
              <p>
                Since graduating in May 2023, I've been working as a{' '}
                <span className="text-primary-400 font-medium">Workday Financials Recruiter at ALKU</span> in
                Andover, MA, where I lead full-cycle recruitment for Workday Financials consultants. I partner with
                sales executives and account managers to build robust talent pipelines across key Workday modules.
              </p>
              <p>
                My journey from service industry roles at{' '}
                <span className="text-primary-400 font-medium">The Prime Butcher, Wrap City, and Windham Country Club</span> to
                professional recruiting has given me a strong foundation in work ethic, customer service, and
                interpersonal skills that I bring to every candidate and client interaction.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
              {[
                { value: "3.43", label: "GPA" },
                { value: "3+", label: "Years at ALKU" },
                { value: "4", label: "Jobs" }
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 sm:p-4 glass rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-dark-500 text-xs sm:text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group p-4 sm:p-6 glass rounded-xl card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <item.icon className="text-primary-400" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-dark-400 text-sm mb-1">{item.description}</p>
                <p className="text-dark-500 text-xs">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
