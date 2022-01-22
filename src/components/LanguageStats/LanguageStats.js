import React, { useEffect, useState } from 'react'
import { useGetLanguageStats } from '../../hooks/useGetLanguageStats/useGetLanguageStats'
import './LanguageStats.scss'
import { Bar } from 'react-chartjs-2'
import Btn from '../Btn/Btn'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { languageStats } from '../../hooks/useGetLanguageStats/languageStats'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const options = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Powered by Chart.js',
    },
  },
  maintainAspectRatio: false,
}
function LanguageStats() {
  const [isFetching, setIsFetching] = useState(false)
  const [grandintColor, setGradientColor] = useState('')
  const { getLanguageStats, isLoading, languages, numberOfFetched } =
    useGetLanguageStats()
  const getLanguage = () => {
    setIsFetching(!isFetching)
    getLanguageStats()
  }
  useEffect(() => {
    const canvas = document.getElementsByTagName('canvas')
    const ctx = canvas[0].getContext('2d')
    const gradient = ctx.createLinearGradient(500, 0, 100, 0)
    gradient.addColorStop(0, '#78b7f5')
    gradient.addColorStop(1, '#4bdbc3')
    setGradientColor(gradient)
  }, [])
  const data = {
    labels: ['JS', 'HTML', 'CSS', 'SCSS', 'TS'],
    datasets: [
      {
        label: `My language used from github in ${languageStats.length} repos`,
        data: [
          languages.js,
          languages.html,
          languages.css,
          languages.scss,
          languages.ts,
        ],
        backgroundColor: grandintColor,
        borderRadius: Number.MAX_VALUE,
      },
    ],
  }
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
        <div className='row mb-5'>
          <div className='col-md-12 btn-wrap'>
            <Btn isDisabled={isLoading} onClick={getLanguage}>
              Click me to fetch stats
            </Btn>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            {isLoading && (
              <div className='progress'>
                <div
                  style={{
                    width: `${Math.ceil(
                      numberOfFetched * (100 / languageStats.length)
                    )}%`,
                  }}
                  className='progress-bar'
                  role='progressbar'
                  aria-valuenow={Math.ceil(
                    numberOfFetched * (100 / languageStats.length)
                  )}
                  aria-valuemin='0'
                  aria-valuemax='100'>{`${Math.ceil(
                  numberOfFetched * (100 / languageStats.length)
                )} %`}</div>
              </div>
            )}
            <div style={{ height: '300px' }}>
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LanguageStats
