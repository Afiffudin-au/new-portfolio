import axios from 'axios'
import { useState } from 'react'

const useGetProjects = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [projects, setProjects] = useState([])
  const getProject = () => {
    setIsLoading(true)
    axios({
      method: 'get',
      url: 'https://apiv1.tosulafiffudin.com/portfolio/cards',
      // url: 'http://localhost:8001/portfolio/cards',
    })
      .then((res) => {
        setIsLoading(false)
        setProjects(res.data)
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
export default useGetProjects
