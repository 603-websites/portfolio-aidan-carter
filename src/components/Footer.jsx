import { Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => (
  <footer className="border-t py-10" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <span className="text-2xl font-black gradient-text">AC</span>
          <span className="text-slate-600 text-sm">Aidan Carter · Workday Financials Recruiter</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/aidan-carter-1745a6270/" className="text-slate-600 hover:text-blue-400 transition-colors">
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:acarter9@framingham.student.edu"
            className="text-slate-600 hover:text-blue-400 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-slate-700 text-xs flex items-center gap-1.5">
          Built with <Heart size={11} className="text-blue-600" /> by 603 Websites
        </p>

      </div>
    </div>
  </footer>
)

export default Footer
