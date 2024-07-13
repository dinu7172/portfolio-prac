import { useContext, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/HeroSection.jsx'
import WorkExperience from './components/WorkExp.jsx'
import Projects from './components/Projcts.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { ScrollProvider } from '../context/ScrollProvider.jsx'

function App() {
  return (
    <ScrollProvider>
      <Navbar />
      <Hero />
      <WorkExperience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </ScrollProvider>
  )
}

export default App
