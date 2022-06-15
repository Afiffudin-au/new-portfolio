import React, { useEffect, useState } from 'react'
import './NavigationBar.scss'
import { navItems } from './navItem'
function NavigationBar() {
  const [scroll, setScroll] = useState(false)
  const handleNavigate = (e) => {
    const links = document.querySelectorAll('.nav-link')
    links.forEach((item) => {
      item.classList.remove('active-blue')
    })
    e.target.classList.add('active-blue')
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 20)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  return (
    <nav
      className={`navbar navbar-expand-md navbar-light fixed-top ${
        scroll && 'scroll'
      }`}>
      <div className='container'>
        <a className='navbar-brand' href='#home'>
          Afiffudin
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            {navItems.map((item, i) => (
              <li key={i} className='nav-item'>
                {i === 0 ? (
                  <a
                    className='nav-link active-blue'
                    onClick={handleNavigate}
                    href={`#${item.link}`}>
                    {item.title}
                  </a>
                ) : (
                  <a
                    className='nav-link'
                    onClick={handleNavigate}
                    href={`#${item.link}`}>
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
