import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "acarter9@framingham.student.edu",
      href: "mailto:acarter9@framingham.student.edu"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(603) 339-3219",
      href: "tel:+16033393219"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Framingham, MA / Windham, NH",
      href: null
    }
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading mx-auto">
            I'm always open to connecting with professionals in the Workday ecosystem and beyond. Let's chat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-8 sm:p-10"
        >
          <div className="space-y-6 mb-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary-400" size={20} />
                </div>
                <div>
                  <p className="text-dark-500 text-sm">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-dark-200 hover:text-primary-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-dark-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-dark-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 glass rounded-xl hover:border-primary-500/50 transition-all flex-1"
              >
                <Linkedin className="text-dark-400 group-hover:text-primary-400 transition-colors" size={24} />
                <div>
                  <p className="text-dark-300 font-medium group-hover:text-white transition-colors">LinkedIn</p>
                  <p className="text-dark-500 text-sm">Aidan Carter</p>
                </div>
              </a>
              <a
                href="mailto:acarter9@framingham.student.edu"
                className="group flex items-center gap-3 p-4 glass rounded-xl hover:border-primary-500/50 transition-all flex-1"
              >
                <Mail className="text-dark-400 group-hover:text-primary-400 transition-colors" size={24} />
                <div>
                  <p className="text-dark-300 font-medium group-hover:text-white transition-colors">Email</p>
                  <p className="text-dark-500 text-sm">acarter9@framingham.student.edu</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">Open to Networking</span>
            </div>
            <p className="text-dark-400 text-sm">
              Open to networking, industry conversations, and professional connections in the Workday and recruiting space.
              I typically respond within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
