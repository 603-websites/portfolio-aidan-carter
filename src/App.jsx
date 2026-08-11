import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import NotFound from './components/NotFound'
import Accessibility from './components/Accessibility'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => { setIsLoaded(true) }, [])

  const path = window.location.pathname
  const isHome = path === '/' || path === '/index.html'
  const isAccessibility = path === '/accessibility' || path === '/accessibility.html'

  const renderMain = () => {
    if (isAccessibility) return <Accessibility />
    if (!isHome && !path.startsWith('/documents/') && !path.startsWith('/images/')) {
      return <NotFound />
    }
    return (
      <>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Testimonials />
        <Contact />
      </>
    )
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <ParticleBackground />
        <Navbar />
        <main>{renderMain()}</main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
