import "./WorkCardStyle.css"
import WorkCard from "./WorkCard"
import workCardData from "./WorkCardData"

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {workCardData.map((val, ind) =>{
            return(
                <WorkCard 
                    key={ind}
                    imgSrc={val.imgSrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Work