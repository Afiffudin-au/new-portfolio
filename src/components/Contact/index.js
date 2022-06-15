import React from 'react'
import './Contact.scss'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const { username, email, subject, message } = data
    let templateParams = {
      subject: subject,
      name: username,
      email: email,
      message: message,
    }
    emailjs
      .send(
        'service_sdpr5ds',
        'template_olaff4e',
        templateParams,
        'user_fl6SrrrWbYpA0ho7NwEwA'
      )
      .then(
        (result) => {
          alert(result.text)
          reset()
        },
        (error) => {
          alert(error.text)
          reset()
        }
      )
  }
  return (
    <section className='contact' id='contact'>
      <h1 className='title'>Contact </h1>
      <div className='container'>
        <form className='contact_form'>
          <div className='row mt-5 mb-4'>
            <div className='col-md-6 d-flex flex-column'>
              <label htmlFor='name' className='contact_label'>
                Name *
              </label>
              <input
                style={
                  errors?.username
                    ? { border: '1px solid red' }
                    : { border: 'none' }
                }
                name='username'
                className='contact_input md-margin'
                placeholder='Enter your name'
                type='text'
                {...register('username', {
                  required: true,
                })}
              />
            </div>
            <div className='col-md-6 d-flex flex-column'>
              <label htmlFor='email' className='contact_label'>
                Email *
              </label>
              <input
                style={
                  errors?.email
                    ? { border: '1px solid red' }
                    : { border: 'none' }
                }
                name='email'
                className='contact_input'
                placeholder='Enter your email'
                type='email'
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors?.email && errors?.email.type === 'pattern' && (
                <p className='erorr'>Invalid Email</p>
              )}
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-md-12'>
              <label htmlFor='subject' className='contact_label'>
                Subject *
              </label>
              <input
                style={
                  errors?.subject
                    ? { border: '1px solid red' }
                    : { border: 'none' }
                }
                name='subject'
                placeholder='subject'
                className='contact_input'
                type='text'
                {...register('subject', { required: true })}
              />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-md-12'>
              <label htmlFor='message' className='contact_label'>
                Message *
              </label>
              <textarea
                style={
                  errors?.message
                    ? { border: '1px solid red' }
                    : { border: 'none' }
                }
                name='message'
                placeholder='Your message here...'
                className='contact_message'
                rows='3'
                {...register('message', { required: true })}></textarea>
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-md-12 text-center'>
              <button onClick={handleSubmit(onSubmit)} className='btn-submit'>
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
