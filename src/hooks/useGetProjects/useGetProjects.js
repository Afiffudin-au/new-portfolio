import axios from 'axios'
import { useState } from 'react'

export const useGetProjects = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [projects, setProjects] = useState([])
  const getProject = () => {
    setIsLoading(true)
    axios({
      method: 'get',
      url: 'https://apiv1.tosulafiffudin.com/portfolio/cards',
    })
      .then((res) => {
        setIsLoading(false)
        setProjects(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err)
      })
  }
  return {
    getProject,
    isLoading,
    projects,
  }
}
