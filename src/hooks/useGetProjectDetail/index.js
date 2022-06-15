import { useState } from 'react'
import { getProjectDetailAPI } from '../../api-calls/project'
import { toast } from 'react-toastify'
const useGetProjectDetail = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [projectDetails, setProjectDetails] = useState([])
  const getProjectDetail = async (id) => {
    setIsLoading(true)
    const res = await getProjectDetailAPI(id)
    if (!res.error) {
      setProjectDetails(res.data.data)
      setIsLoading(false)
    } else {
      toast.error(res.message)
      setIsLoading(false)
    }
  }
  return {
    isLoading,
    projectDetails,
    getProjectDetail,
  }
}
export default useGetProjectDetail
