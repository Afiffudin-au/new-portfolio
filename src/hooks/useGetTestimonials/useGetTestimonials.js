import axios from 'axios'
import { useState } from 'react'
export const useGetTestimonials = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [testimonials, setTestimonials] = useState([])
  const getTestimonial = () => {
    setIsLoading(true)
    axios({
      method: 'get',
      url: 'https://apiv1.tosulafiffudin.com/portfolio/testimonials',
    })
      .then((res) => {
        setIsLoading(false)
        setTestimonials(res.data)
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err)
      })
  }
  return {
    getTestimonial,
    isLoading,
    testimonials,
  }
}
