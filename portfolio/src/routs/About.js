import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import Skills from '../components/Skills'
import Introduction from '../components/Introduction'

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="ABOUT" text="I'm friendly Full-Stack Developer."/>
      <AboutContent />
      <Introduction />
      <Skills />
      <Footer />
    </div>
  )
}

export default About