import React from 'react'
import BarChart from './BarChart'
import './LanguageStat.scss'
function LanguageStats() {
  return (
    <section className='lang_stats' id='stats'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-md-12 text-center'>
            <h1 className='title'>Language Stats</h1>
            <p className='desc'>
              The language statistics section, will show you all the types of
              languages I use in several projects. It is calculated based on
              multiple repositories.
            </p>
          </div>
        </div>
        <BarChart />
      </div>
    </section>
  )
}

export default LanguageStats
