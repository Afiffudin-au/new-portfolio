import React, { useEffect } from 'react'
import { useGetProjects } from '../../hooks/useGetProjects/useGetProjects'
import GridContainer from '../GridContainer/GridContainer'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Project.scss'
import { FaGithubSquare } from 'react-icons/fa'
import ProgressBar from '../ProgressBar/ProgressBar'
function Project() {
  const { getProject, isLoading, projects } = useGetProjects()
  useEffect(() => {
    getProject()
  }, [])
  return (
    <section className='project' id='project'>
      <div className='container'>
        <h1 className='title'>Projects</h1>
        {isLoading && <ProgressBar />}

        <GridContainer>
          {projects?.map((item, i) => (
            <ProjectCard
              id={item._id}
              key={item._id}
              imgUrl={item.imgUrl}
              description={item.description}
              projectName={item.projectName}
              technology={item.tech}
            />
          ))}
          {!isLoading && (
            <div className='wrap-link'>
              <FaGithubSquare
                onClick={() =>
                  window.open('https://github.com/Afiffudin-au/', '_blank')
                }
                className='github-link'
              />
              <p>More Projects...</p>
            </div>
          )}
        </GridContainer>
      </div>
      {/* <ModalDetail /> */}
    </section>
  )
}

export default Project
