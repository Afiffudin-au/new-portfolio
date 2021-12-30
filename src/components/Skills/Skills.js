import React from 'react'
import './Skills.scss'
const randomColors = [
  '#2196f3',
  '#1976d2',
  '#1e88e5',
  '#1565c0',
  '#448aff',
  '#2979ff',
  '#039be5',
  '#0288d1',
  '#0277bd',
  '#0091ea',
]
const skillItems = [
  'HTML',
  'CSS',
  'JavaScript',
  'Scss',
  'React',
  'React Redux',
  'Next',
  'Material-Ui',
  'Bootstrap ',
  'Tailwind',
]

function Skills() {
  return (
    <section className='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h1 className='skill_title'>
              <span className='skill_span'> SKILLS & EXPERTISE</span>
            </h1>
          </div>
          <div className='col-md-8'>
            <h6 className='heading_6'>Front-End Development Skills</h6>
            <div className='items'>
              {skillItems.map((item, i) => (
                <div
                  key={i}
                  className='item'
                  style={{
                    backgroundColor: `${
                      randomColors[
                        Math.floor(Math.random() * randomColors.length)
                      ]
                    }`,
                  }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
