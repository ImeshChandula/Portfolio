import { FaBlackTie } from "react-icons/fa"
import "./IntroductionStyle.css"

import React from 'react'

const Introduction = () => {
  return (
    <div className="intro-container">
        <div className="intro">
            <FaBlackTie size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <h3>Experience</h3>
            <p>2+ Years Experience</p>
        </div>
        <div className="intro">
            <FaBlackTie size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <h3>Experience</h3>
            <p>2+ Years Experience</p>
        </div>
        <div className="intro">
            <FaBlackTie size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <h3>Experience</h3>
            <p>2+ Years Experience</p>
        </div>
    </div>
  )
}

export default Introduction