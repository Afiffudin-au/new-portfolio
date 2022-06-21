import React from 'react'
import useGetTopics from '../../hooks/useGetTopics'
import useGradientColor from '../../hooks/useGradientColor'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import Btn from '../Btn'
import { Bar } from 'react-chartjs-2'
import { options } from '../../config/chartjs-config'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
function BarChart() {
  const { getTopics, numberOfFetched, isLoading, topics, totalRepo } =
    useGetTopics()
  const { grandintColor } = useGradientColor()
  const data = {
    labels: [
      'React',
      'NextJs',
      'Redux',
      'VanillaJS',
      'Materi-Ui',
      'Tailwindcss',
      'Bootstrap',
      'ChakraUI',
      'Axios',
      'Http-req',
    ],
    datasets: [
      {
        label: `My topics used from github in ${totalRepo} repos`,
        data: [
          topics.react,
          topics.next,
          topics.redux,
          topics.vanillaJs,
          topics.materialUi,
          topics.tailwindCss,
          topics.bootstraps,
          topics.chakraUi,
          topics.axios,
          topics.httpRequests,
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
          <Btn isDisabled={isLoading} onClick={getTopics}>
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
          <div className='horizontalBarWrap'>
            <MemoizedChildBar data={data} options={options} />
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
