import React, { useEffect, useMemo } from 'react'
import useGetProject from '../../hooks/useGetProject'
import GridContainer from '../GridContainer'
import ProjectCard from '../ProjectCard'
import './Project.scss'
import { FaGithubSquare } from 'react-icons/fa'
import ProgressBar from '../ProgressBar'
function Project() {
  const { getProject, isLoading, projects } = useGetProject()
  useEffect(() => {
    getProject()
  }, [])
  const memoizedCard = useMemo(() => {
    return projects?.map((item, i) => (
      <ProjectCard
        id={item._id}
        key={item._id}
        imgUrl={item.imgUrl}
        description={item.description}
        projectName={item.projectName}
        technology={item.tech}
      />
    ))
  }, [projects])
  return (
    <section className='project' id='work'>
      <div className='container'>
        <h1 className='title'>Projects</h1>
        {isLoading && <ProgressBar />}
        <GridContainer>
          {memoizedCard}
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
    </section>
  )
}

export default Project
