import React from 'react'
import './ProjectCard.scss'
function ProjectCard({ projectName, technology, imgUrl, description }) {
  return (
    <div className='project-card'>
      <img className='image' src={imgUrl} alt={description} />
      <div className='wrap'>
        <p>{projectName}</p>
        {/* <p>{technology}</p> */}
      </div>
    </div>
  )
}

export default ProjectCard
