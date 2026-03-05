import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Linkedin, FileText } from 'lucide-react'

const navLinks = [
  { name: 'About',      href: '#about'        },
  { name: 'Stats',      href: '#stats'        },
  { name: 'Wins',       href: '#achievements' },
  { name: 'Experience', href: '#experience'   },
  { name: 'Skills',     href: '#skills'       },
  { name: 'Contact',    href: '#contact'      },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          <motion.a
            href="#"
            className="text-xl font-black gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AC
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
              whileHover={{ y: -2, scale: 1.1 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="/documents/Aidan-Carter-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={14} />
              Resume
            </motion.a>
          </div>

          <motion.button
            className="md:hidden text-slate-400"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="py-4 px-5 space-y-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors font-medium text-sm"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 8 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a
                  href="/documents/Aidan-Carter-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                  onClick={() => setIsOpen(false)}
                >
                  <FileText size={14} />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
