import React from 'react'
import './About.scss'
function About() {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className='row about_wrap'>
          <div className='col-md-4'>
            <img
              className='profile-picture'
              src='/assets/images/man.png'
              alt='man'
            />
          </div>
          <div className='col-md-8'>
            <h1 className='title'>About me</h1>
            <p className='desc'>
              My name is Afifuddin, I am a Front end Developer. Who likes to
              build things, solve problems, and learn new things. Have an
              interest in Javascript, especially React, React Redux, and NextJS.
            </p>
            <div className='contact_details'>
              <div>
                <h2 className='name'>Contact Detail</h2>
                <p className='email'>tosulafiffudin@gmail.com</p>
              </div>
              <button className='btn-download'>Download Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
