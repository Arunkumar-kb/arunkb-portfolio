import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
