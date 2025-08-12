import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
