import "./SkillsStyle.css"

import React from 'react'
import { FaAndroid, FaAngular, FaBootstrap, FaCss3Alt, FaDatabase, FaGithub, FaHtml5, FaJava, FaNode, FaPhp, FaPython, FaReact, FaSchool, FaUniversity } from "react-icons/fa"

const Skills = () => {
  return (
    <div className="skill-heading">
        <h1 className="skill-head">Skills & Education</h1>
        
        <div className="skill-container">

            <div className="skill-left">
                <h3>- Skills -</h3>
                <span className="bar"></span>

                <div className="skill-left-part2">

                    <div className="skill">
                        <div className="language">
                            <FaReact size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>React-js</p>
                        </div>
                        <div className="language">
                            <FaJava size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>java</p>
                        </div>
                        <div className="language">
                            <FaBootstrap size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>Bootstrap</p>
                        </div>
                        <div className="language">
                            <FaHtml5 size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>HTML5</p>
                        </div>
                        <div className="language">
                            <FaCss3Alt size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>CSS</p>
                        </div>
                        <div className="language">
                            <FaGithub size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>Git-Hub</p>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="language">
                            <FaPhp size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>PHP</p>
                        </div>
                        <div className="language">
                            <FaNode size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>Node-js</p>
                        </div>
                        <div className="language">
                            <FaPython size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>Python</p>
                        </div>
                        <div className="language">
                            <FaDatabase size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>Database</p>
                        </div>
                        <div className="language">
                            <FaAndroid size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>Android</p>
                        </div>
                        <div className="language">
                            <FaAngular size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            <p>Angular</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>

            <div className="skill-right">
                <h3>- Educations -</h3>
                <span className="bar"></span>

                <div className="institute">
                    <FaUniversity size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                    <p>Bachelor of Computer Science, Eastern University of Sri Lanka</p>
                </div>

                <div className="institute">
                    <FaSchool size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                    <p>Mo/Dutugemunu C.C.</p>
                    <p>Buttala.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills