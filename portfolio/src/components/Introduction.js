import { FaDownload, FaHeadset } from "react-icons/fa"
import { TiTick } from "react-icons/ti"
import { HiCollection } from "react-icons/hi"
import "./IntroductionStyle.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const Introduction = () => {
  return (
    <div className="introduction">

      <div className="intro-container">
        <div className="intro">
              <HiCollection size={20} style={{color:"#fff", marginRight:"0rem"}}/>
              <h3>Experience</h3>
              <p>2+ Years Experience</p>
        </div>
        <div className="intro">
              <TiTick size={20} style={{color:"#fff", marginRight:"0rem"}}/>
              <h3>Completed</h3>
              <p>10+ Projects</p>
        </div>
        <div className="intro">
              <FaHeadset size={20} style={{color:"#fff", marginRight:"0rem"}}/>
              <h3>Support</h3>
              <p>Online 7/24</p>
        </div>
      </div>

      <div className="download-cv">
        <NavLink to="">
          <button className="btn">
            Download-CV
            <FaDownload size={20} style={{color:"black", marginLeft:"2rem"}}/>
          </button>
        </NavLink>
      </div>

    </div>
  )
}

export default Introduction