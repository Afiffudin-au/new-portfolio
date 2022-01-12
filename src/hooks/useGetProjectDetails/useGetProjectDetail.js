import axios from 'axios'
import { useState } from 'react'

export const useGetProjectDetail = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [projectDetails, setProjectDetails] = useState([])
  const getProjectDetail = (id) => {
    setIsLoading(true)
    axios({
      method: 'get',
      url: `https://apiv1.tosulafiffudin.com/portfolio/cards/${id}`,
    })
      .then((res) => {
        setIsLoading(false)
        setProjectDetails(res.data)
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err)
      })
  }
  return {
    isLoading,
    projectDetails,
    getProjectDetail,
  }
}
