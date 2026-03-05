import { useEffect, useState } from 'react'
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

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => { setIsLoaded(true) }, [])

  const path = window.location.pathname
  const isHome = path === '/' || path === '/index.html'

  if (!isHome && !path.startsWith('/documents/') && !path.startsWith('/images/')) {
    return (
      <div className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <ParticleBackground />
        <Navbar />
        <main><NotFound /></main>
        <Footer />
      </div>
    )
  }

  return (
    <div className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
