import "./FooterStyle.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>14 M.P., Rajamawatha, Buttala.</p>
                        <p>Sri Lanka</p>
                    </div>
                </div>

                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                        (+94) 70-3968-142
                    </h4>
                </div>

                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                        chandulaimesh2000@gmail.com
                    </h4>
                </div>

            </div>

            <div className="right">
                <h4>Follow me</h4>
                <p>You can follow me on following social media.</p>
                
                <div className="social">
                    <NavLink to="https://www.facebook.com/imesh.chandula.1/">
                        <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    </NavLink>
                    
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    
                    <NavLink to="https://www.linkedin.com/in/imesh-chandula-601113256/">
                        <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    </NavLink>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer