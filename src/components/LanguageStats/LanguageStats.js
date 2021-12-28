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
      text: 'Powered by Chart.js',
    },
  },
  maintainAspectRatio: false,
}
function LanguageStats() {
  const [cancelFetch, setCanceFetch] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [grandintColor, setGradientColor] = useState('')
  const { getStats, isLoading, languages, countFetched, cancelToFetch } =
    useGetStats()
  const handleFetch = () => {
    setIsFetching(true)
    setCanceFetch(true)
    getStats(repoData)
    console.log('Fetch')
  }
  const handleCancel = (isCancel) => {
    setIsFetching(false)
    setCanceFetch(false)
    console.log('Cancel')
    cancelToFetch()
    // console.log(isCancel)
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
        label: `My language used from github in ${repoData.length} repos`,
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
  useEffect(() => {
    if (isLoading === true) {
      setCanceFetch(true)
    } else {
      setCanceFetch(false)
      setIsFetching(false)
    }
  }, [isLoading])
  // console.log(countFetched)
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
            {cancelFetch && (
              <div style={{ margin: '5px' }}>
                <Btn onClick={() => handleCancel(true)}>Cancel Fetch</Btn>
              </div>
            )}
            {!isFetching && (
              <div style={{ margin: '5px' }}>
                <Btn onClick={handleFetch}>Click me to fetch stats</Btn>
              </div>
            )}

            {/* <Btn onClick={() => getLanguage()}>Click me to fetch stats</Btn> */}
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            {isLoading && (
              <div className='progress'>
                <div
                  style={{
                    width: `${Math.ceil(countFetched * 3.33)}%`,
                    background:
                      'linear-gradient( 90deg,  rgba(24, 182, 191, 1) 6%,rgba(39, 150, 204, 1) 45%,rgba(0, 129, 255, 1) 100%)',
                  }}
                  className='progress-bar'
                  role='progressbar'
                  aria-valuenow={Math.ceil(countFetched * 3.33)}
                  aria-valuemin='0'
                  aria-valuemax='100'>
                  {`${Math.ceil(countFetched * 3.33)} %`}
                </div>
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
