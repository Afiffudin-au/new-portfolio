import React from 'react'
import './Contact.scss'
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Hello')
  }
  return (
    <section className='contact'>
      <h1 className='title'>Contact </h1>
      <div className='container'>
        <form onSubmit={handleSubmit} className='contact_form'>
          <div className='row mt-5 mb-4'>
            <div className='col-md-6 d-flex flex-column'>
              <label htmlFor='name' className='contact_label'>
                Name*
              </label>
              <input
                className='contact_input md-margin'
                placeholder='Enter your name'
                type='text'
              />
            </div>
            <div className='col-md-6 d-flex flex-column'>
              <label htmlFor='email' className='contact_label'>
                Email*
              </label>
              <input
                className='contact_input'
                placeholder='Enter your email'
                type='text'
              />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-md-12'>
              <label htmlFor='subject' className='contact_label'>
                Subject*
              </label>
              <input
                placeholder='subject'
                className='contact_input'
                type='text'
              />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-md-12'>
              <label htmlFor='message' className='contact_label'>
                Message*
              </label>
              <textarea
                placeholder='Your message here...'
                className='contact_message'
                rows='3'></textarea>
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-md-12 text-center'>
              <button onClick={handleSubmit} className='btn-submit'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
