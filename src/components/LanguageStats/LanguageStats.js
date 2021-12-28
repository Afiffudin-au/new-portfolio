import React, { useEffect, useState } from 'react'
import { repoData } from '../../hooks/useGetAllRepo/repos'
import { useGetStats } from '../../hooks/useGetStats/useGetStats'
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
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
  maintainAspectRatio: false,
}
function LanguageStats() {
  const [cancelFetch, setCanceFetch] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [grandintColor, setGradientColor] = useState('')
  const { getStats, isLoading, languages, countFetched } = useGetStats()
  const getLanguage = (isCancel) => {
    setIsFetching(!isFetching)
    getStats(repoData)
    if (isCancel) {
      // console.log('Cancel')
      // getStats(false, isCancel)
    } else {
      // console.log('Fetch')
      // getStats(repoData)
    }
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
    labels: ['Javascript', 'HTML', 'CSS', 'SCSS', 'TypeScript'],
    datasets: [
      {
        label: `My language used from github in ${20} repos`,
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
  console.log('Count ' + countFetched)
  return (
    <div className='lang_stats'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-md-12 text-center'>
            <h1 className='title'>Stats</h1>
            <p className='desc'>
              Language statistics section, will display all types of languages
              that I use in several projects. It is calculated based on multiple
              repositories and is calculated based on the total "bytes" of all
              code. In conclusion each language will be summed by bytes.
            </p>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-md-12 btn-wrap'>
            {/* {isFetching ? (
              <div style={{ margin: '5px' }}>
                <Btn onClick={() => getLanguage(true)}>Cancel Fetch</Btn>
              </div>
            ) : (
              <div style={{ margin: '5px' }}>
                <Btn onClick={() => getLanguage(false)}>
                  Click me to fetch stats
                </Btn>
              </div>
            )} */}
            <Btn onClick={() => getLanguage()}>Click me to fetch stats</Btn>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            {isLoading && (
              <div className='progress'>
                <div
                  style={{ width: `${Math.ceil(countFetched * 3.33)}%` }}
                  className='progress-bar'
                  role='progressbar'
                  aria-valuenow={Math.ceil(countFetched * 3.33)}
                  aria-valuemin='0'
                  aria-valuemax='100'>{`${Math.ceil(
                  countFetched * 3.33
                )} %`}</div>
              </div>
            )}
            <div style={{ height: '300px' }}>
              <Bar options={options} data={data} />;
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageStats
