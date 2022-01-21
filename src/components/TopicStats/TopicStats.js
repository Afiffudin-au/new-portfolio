import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import Btn from '../Btn/Btn'
import { useGetTopics } from '../../hooks/useGetTopics/useGetTopics'
import './TopicStats.scss'
import { topicStats } from '../../hooks/useGetTopics/topicStats'
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
function TopicStats() {
  const { getTopics, numberOfFetched, isLoading, topics } = useGetTopics()
  const [isFetching, setIsFetching] = useState(false)
  const [grandintColor, setGradientColor] = useState('')
  const handeGetTopics = () => {
    setIsFetching(!isFetching)
    getTopics()
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
    labels: [
      'React',
      'NextJs',
      'Redux',
      'VanillaJS',
      'Materi-Ui',
      'tailwind',
      'Bootstraps',
      'Axios',
      'Http-req',
      'API-requ',
      'chakraUi',
    ],
    datasets: [
      {
        label: `My topics used from github in ${topicStats.length} repos`,
        data: [
          topics.react,
          topics.next,
          topics.redux,
          topics.vanillaJs,
          topics.materialUi,
          topics.tailwindCss,
          topics.bootstraps,
          topics.axios,
          topics.httpRequests,
          topics.apiRequests,
          topics.chakraUi,
        ],
        backgroundColor: grandintColor,
        borderRadius: Number.MAX_VALUE,
      },
    ],
  }
  // console.log(topics)
  return (
    <section className='topic_stats'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-md-12 text-center'>
            <h1 className='title'>Topic Stats</h1>
            <p className='desc'>
              Topic statistics section, will show you all the types of topics
              I've used in several projects. This is calculated by topic in each
              repository. In conclusion each repository will have its own topic
              and will be summed.
            </p>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-md-12 btn-wrap'>
            <Btn isDisabled={isLoading} onClick={handeGetTopics}>
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
                      numberOfFetched * (100 / topicStats.length)
                    )}%`,
                  }}
                  className='progress-bar'
                  role='progressbar'
                  aria-valuenow={Math.ceil(
                    numberOfFetched * (100 / topicStats.length)
                  )}
                  aria-valuemin='0'
                  aria-valuemax='100'>{`${Math.ceil(
                  numberOfFetched * (100 / topicStats.length)
                )} %`}</div>
              </div>
            )}
            <div className='horizontalBarWrap'>
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopicStats
