import { useState } from 'react'
import { getProjectAPI } from '../../api-calls/project'
import { toast } from 'react-toastify'
const useGetProject = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [projects, setProjects] = useState([])
  const getProject = async () => {
    setIsLoading(true)
    const res = await getProjectAPI()
    if (!res.error) {
      setProjects(res.data.data)
      setIsLoading(false)
    } else {
      toast.error(res.message)
      setIsLoading(false)
    }
  }
  return {
    getProject,
    isLoading,
    projects,
  }
}
export default useGetProject
