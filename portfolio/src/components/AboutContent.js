import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import myPic from "../ascets/myPic.JPG"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I...?</h1>
            <p>Hi there...! My name is <b>Imesh Chandula</b>.I'm a Full-Stack Developer. I create responsive secure websites for my clients.</p>

            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={myPic} className="img" alt="true"/>
                </div>
            
                <div className="img-stack bottom">
                    <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" className="img" alt="true"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent