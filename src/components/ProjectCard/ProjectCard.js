import React, { useState } from 'react'
import ModalDetail from '../ModalDetail/ModalDetail'
import './ProjectCard.scss'
function ProjectCard({ id, projectName, technology, imgUrl, description }) {
  const [openModal, setOpenModal] = useState(false)
  const handleDetails = () => {
    setOpenModal(true)
  }
  return (
    <>
      <div className='project-card' onClick={handleDetails}>
        <img className='image' src={imgUrl} alt={description} />
        <div className='wrap'>
          <p className='project-name'>{projectName}</p>
          <div className='tech'>
            {technology?.slice(0, 3).map((item, i) => (
              <span key={i} className='tech-item'>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      {openModal && (
        <ModalDetail
          id={id}
          openModalProp={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  )
}

export default ProjectCard
