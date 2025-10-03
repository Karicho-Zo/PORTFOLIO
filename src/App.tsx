import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation'
import styles from './components/App.module.css'

function App() {
  useKeyboardNavigation()

  return (
    <Router>
      <div className={styles.app}>
        <a href="#main-content" className={styles.skipToMain}>
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className={styles.mainContent}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App