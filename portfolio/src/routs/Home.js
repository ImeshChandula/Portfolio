import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg from '../components/Heroimg'
import AboutContent from "../components/AboutContent"
import Work from '../components/Work'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Form from '../components/Form'

const Home = () => {
  return (
    <div>
        <NavBar />
        <HeroImg />
        <AboutContent />
        <Skills />
        <Work />
        <Form />
        <Footer />
    </div>
  )
} 

export default Home