import "./HeroImgStyle.css"

import React from 'react'
import IntroImg from "../ascets/desktop_bg.jpg"
import { Link } from "react-router-dom"
import { Typewriter, Cursor } from "react-simple-typewriter"


const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"></img>
        </div>

        <div className="content">
            <p>Hi there...!</p>
            <p>I'm Imesh Chandula</p>
            <h1>
              <Typewriter 
                words = {['React Developer', 'Android Developer', 'UI/UX Developer', 'Programmer']}
                loop = {100}
                cursor
                cursorStyle=" |"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>

            <div>
                <Link to="/project" className="btn">projects</Link>
                <Link to="/contact" className="btn-light">contact</Link>
            </div>
        </div>

        
    </div>
  )
}

export default Heroimg