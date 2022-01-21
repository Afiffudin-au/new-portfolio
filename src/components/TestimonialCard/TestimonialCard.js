import React from 'react'
import './TestimonialCard.scss'
import { FaQuoteLeft } from 'react-icons/fa'
function TestimonialCard({ name, description, imgUrl, id }) {
  return (
    <div className='col-lg-4 col-md-6 mb-md-0 mb-4'>
      <div className='card testimonial-card '>
        <div className='card-up info-color'></div>

        <div className='avatar mx-auto white'>
          <img
            src={imgUrl}
            className='rounded-circle img-fluid'
            alt={description}
          />
        </div>
        <div className='card-body'>
          <h4 className='font-weight-bold mb-4'>{name}</h4>
          <hr />

          <p className='dark-grey-text mt-4'>
            <FaQuoteLeft style={{ margin: '8px' }} />
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
