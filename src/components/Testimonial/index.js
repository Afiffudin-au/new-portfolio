import React, { useEffect, useMemo } from 'react'
import useGetTestimonial from '../../hooks/useGetTestimonial'
import TestimonialCard from '../TestimonialCard'
import ProgressBar from '../ProgressBar'
import './Testimonial.scss'
function Testimonial() {
  const { getTestimonial, isLoading, testimonials } = useGetTestimonial()
  useEffect(() => {
    getTestimonial()
  }, [])
  const memoizedTestimonial = useMemo(() => {
    return testimonials?.map((item, i) => (
      <TestimonialCard
        key={item._id}
        id={item._id}
        name={item.name}
        description={item.description}
        imgUrl={item.imgUrl}
      />
    ))
  }, [testimonials])
  return (
    <section className='testimonial' id='testimonials'>
      <div className='container'>
        <h1 className='title'>Testimonials</h1>
        {isLoading && <ProgressBar />}
        <div className='row align-items-center'>{memoizedTestimonial}</div>
      </div>
    </section>
  )
}

export default Testimonial
