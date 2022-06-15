import React from 'react'
import './Banner.scss'
import { AiFillGithub } from 'react-icons/ai'
function Banner() {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='title'>I'm Afiffudin-au.</h1>
        <p className='desc'>
          I'm a based Indonesia. Front-End Developer Every Day Every Time.
        </p>
        <div className='socials'>
          <a
            href='https://github.com/Afiffudin-au/'
            target='_blank'
            rel='noreferrer'>
            <AiFillGithub
              style={{ fontSize: '30px', color: 'white', cursor: 'pointer' }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
