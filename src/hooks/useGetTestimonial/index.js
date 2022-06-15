import { useState } from 'react'
import { getTestimonialAPI } from '../../api-calls/testimonial'
import { toast } from 'react-toastify'
const useGetTestimonial = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [testimonials, setTestimonials] = useState([])
  const getTestimonial = async () => {
    setIsLoading(true)
    const res = await getTestimonialAPI()
    if (!res.error) {
      setTestimonials(res.data.data)
      setIsLoading(false)
    } else {
      toast.error(res.message)
      setIsLoading(false)
    }
  }
  return {
    getTestimonial,
    isLoading,
    testimonials,
  }
}
export default useGetTestimonial
