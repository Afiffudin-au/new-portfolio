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
              Language statistics section, will display all types of languages
              that I use in several projects. It is calculated based on multiple
              repositories and is calculated based on the total "bytes" of all
              code. In conclusion each language will be summed by bytes and
              converted to kilobytes.
            </p>
          </div>
        </div>
        <BarChart />
      </div>
    </section>
  )
}

export default LanguageStats
