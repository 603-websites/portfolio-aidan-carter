import { motion } from 'framer-motion'
import { ArrowLeft, MessageSquare } from 'lucide-react'

const Accessibility = () => (
  <section className="min-h-[70vh] py-24 relative">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(37,99,235,0.08) 0%, transparent 60%)' }}
    />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">Commitment</span>
        <h1 className="section-heading mb-8">
          <span className="gradient-text">Accessibility</span>
        </h1>

        <div className="glass rounded-2xl p-6 sm:p-8 space-y-5 text-slate-300 leading-relaxed">
          <p>
            This site is built to be usable by everyone, including visitors who rely on
            assistive technologies.
          </p>
          <p>
            It aims to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. The
            site uses semantic HTML and clear headings, supports keyboard navigation, respects
            your device's reduce-motion setting, provides text alternatives for meaningful
            images, and keeps color contrast readable.
          </p>
          <p>
            Accessibility is ongoing work and some areas may still fall short. If you encounter
            a barrier or have a suggestion, reach out through the{' '}
            <a
              href="/#contact"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              contact section
            </a>{' '}
            and it will be addressed promptly.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/#contact" className="btn-primary flex items-center gap-2">
            <MessageSquare size={16} />
            Contact Aidan
          </a>
          <a href="/" className="btn-secondary flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Accessibility
