import { FaHeadset } from "react-icons/fa"
import { TiTick } from "react-icons/ti"
import { HiCollection } from "react-icons/hi"
import "./IntroductionStyle.css"

import React from 'react'

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="intro-container">
        <div className="intro">
              <HiCollection size={20} style={{color:"#fff", marginRight:"2rem"}}/>
              <h3>Experience</h3>
              <p>2+ Years Experience</p>
        </div>
        <div className="intro">
              <TiTick size={20} style={{color:"#fff", marginRight:"2rem"}}/>
              <h3>Completed</h3>
              <p>10+ Projects</p>
        </div>
        <div className="intro">
              <FaHeadset size={20} style={{color:"#fff", marginRight:"2rem"}}/>
              <h3>Support</h3>
              <p>Online 7/24</p>
        </div>
      </div>
    </div>
  )
}

export default Introduction