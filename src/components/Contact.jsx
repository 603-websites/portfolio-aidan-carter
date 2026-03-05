import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Linkedin, Download, ArrowRight } from 'lucide-react'

const contactItems = [
  { icon: Mail,     label: 'Email',    value: 'acarter9@framingham.student.edu', href: 'mailto:acarter9@framingham.student.edu' },
  { icon: Phone,    label: 'Phone',    value: '(603) 339-3219',                  href: 'tel:+16033393219' },
  { icon: MapPin,   label: 'Location', value: 'Windham, NH / Andover, MA',       href: null },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with Aidan',              href: '#' },
]

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(37,99,235,0.08) 0%, transparent 60%)' }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Let's Connect</span>
          <h2 className="section-heading">
            Ready to <span className="gradient-text">Talk</span>?
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            Whether you're hiring a Workday consultant, exploring your next career move, or want
            to connect — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-5 flex items-center gap-4 card-hover group block"
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-600/15 border border-blue-500/25 flex items-center justify-center shrink-0 group-hover:bg-blue-600/22 transition-colors">
                    <item.icon size={18} className="text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-500 text-xs">{item.label}</p>
                    <p className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-blue-400 transition-colors shrink-0" />
                </a>
              ) : (
                <div className="glass rounded-xl p-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-blue-600/15 border border-blue-500/25 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{item.label}</p>
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href="/documents/Aidan-Carter-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a href="https://www.linkedin.com/in/aidan-carter-1745a6270/" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
            <Linkedin size={16} />
            LinkedIn Profile
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">
            Open to networking and professional connections
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
