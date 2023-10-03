import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg from '../components/Heroimg'
import AboutContent from "../components/AboutContent"
import Work from '../components/Work'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Form from '../components/Form'
import Introduction from '../components/Introduction'
import PricingCard from '../components/PricingCard'

const Home = () => {
  return (
    <div>
        <NavBar />
        <HeroImg />
        <AboutContent />
        <Introduction />
        <Skills />
        <Work />
        <PricingCard />
        <Form />
        <Footer />
    </div>
  )
} 

export default Home