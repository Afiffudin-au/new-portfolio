import React, { useEffect } from 'react'
import { useGetTestimonials } from '../../hooks/useGetTestimonials/useGetTestimonials'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import ProgressBar from '../ProgressBar/ProgressBar'
import './Testimonial.scss'
function Testimonial() {
  const { getTestimonial, isLoading, testimonials } = useGetTestimonials()
  useEffect(() => {
    getTestimonial()
  }, [])
  return (
    <section className='testimonial' id='testimonials'>
      <div className='container'>
        <h1 className='title'>Testimonials</h1>
        {isLoading && <ProgressBar />}
        <div className='row align-items-center'>
          {testimonials?.map((item, i) => (
            <TestimonialCard
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
