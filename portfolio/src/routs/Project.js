import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJECTS" text="Some of most recent works..."/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project