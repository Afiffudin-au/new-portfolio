import React from 'react'
import { options } from '../../config/chartjs-config'
import useGradientColor from '../../hooks/useGradientColor'
import { Bar } from 'react-chartjs-2'
import Btn from '../Btn'
import useGetLanguageStats from '../../hooks/useGetLanguageStats'
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
function BarChart() {
  const { grandintColor } = useGradientColor()
  const { getLanguageStats, isLoading, languages, numberOfFetched, totalRepo } =
    useGetLanguageStats()

  const data = {
    labels: ['JS', 'HTML', 'CSS', 'SCSS', 'TS'],
    datasets: [
      {
        label: `My language used from github in ${totalRepo} repos`,
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
    <>
      <div className='row mb-5'>
        <div className='col-md-12 btn-wrap'>
          <Btn isDisabled={isLoading} onClick={getLanguageStats}>
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
                  width: `${Math.ceil(numberOfFetched * (100 / totalRepo))}%`,
                }}
                className='progress-bar'
                role='progressbar'
                aria-valuenow={Math.ceil(numberOfFetched * (100 / totalRepo))}
                aria-valuemin='0'
                aria-valuemax='100'>{`${Math.ceil(
                numberOfFetched * (100 / totalRepo)
              )} %`}</div>
            </div>
          )}
          <div style={{ height: '300px' }}>
            <MemoizedChildBar options={options} data={data} />
          </div>
        </div>
      </div>
    </>
  )
}
function compare(prevProps, nextProps) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
function ChildBar({ data, options }) {
  return <Bar options={options} data={data} />
}
const MemoizedChildBar = React.memo(ChildBar, compare)
export default BarChart
