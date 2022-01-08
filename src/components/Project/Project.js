import React, { useEffect } from 'react'
import { useGetProjects } from '../../hooks/useGetProjects/useGetProjects'
import GridContainer from '../GridContainer/GridContainer'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Project.scss'
function Project() {
  const { getProject, isLoading, projects } = useGetProjects()
  useEffect(() => {
    getProject()
  }, [])
  return (
    <section className='project'>
      <div className='container'>
        <GridContainer>
          {projects?.map((item, i) => (
            <ProjectCard
              key={item._id}
              imgUrl={item.imgUrl}
              description={item.description}
              projectName={item.projectName}
              technology={item.tech}
            />
          ))}
        </GridContainer>
      </div>
    </section>
  )
}

export default Project
