import React from 'react'
import BarChart from './BarChart'
import './TopicStats.scss'
function TopicStats() {
  return (
    <section className='topic_stats'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-md-12 text-center'>
            <h1 className='title'>Topic Stats</h1>
            <p className='desc'>
              The topic statistics section, will show you all the types of
              topics I've used in several projects. It is calculated by topic in
              each repository.
            </p>
          </div>
        </div>
        <BarChart />
      </div>
    </section>
  )
}

export default TopicStats
