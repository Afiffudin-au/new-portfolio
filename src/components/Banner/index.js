import React from 'react'
import './Banner.scss'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
function Banner() {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='title'>I'm T Afiffudin.</h1>
        <p className='desc'>
          I'm a based Indonesia. Front-End Developer Every Day Every Time.
        </p>
        <div className='socials'>
          <a
            href='https://github.com/Afiffudin-au/'
            target='_blank'
            rel='noreferrer'>
            <AiFillGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/tosulafiffudin/'
            target='_blank'
            rel='noreferrer'>
            <AiFillLinkedin />
          </a>
          <a
            href='https://www.facebook.com/afiff.udin.01110011'
            target='_blank'
            rel='noreferrer'>
            <AiFillFacebook />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
