import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg from '../components/Heroimg'
import AboutContent from "../components/AboutContent"
import Work from '../components/Work'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <NavBar />
        <HeroImg />
        <AboutContent />
        <Work />
        <Footer />
    </div>
  )
} 

export default Home