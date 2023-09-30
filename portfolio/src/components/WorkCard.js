import "./WorkCardStyle.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
          <img src={props.imgSrc} alt="ProImage1"></img>
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btn">
              <NavLink to={props.view} className="btn">view</NavLink>
              <NavLink to={props.source} className="btn">source</NavLink>
            </div>
          </div>
        </div>
  )
}

export default WorkCard