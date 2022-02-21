import axios from 'axios'
import { useState } from 'react'
import { topicStats } from './topicStats'
let totalTopics = []
let fetchErorr = false
const callTopicsApi = async (item) => {
  return axios({
    method: 'GET',
    url: item,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AUTH}`,
      Accept: process.env.REACT_APP_ACCEPT,
    },
  })
    .then((res) => {
      fetchErorr = false
      res.data.names.forEach((item, index) => totalTopics.push(item))
    })
    .catch((error) => {
      if (error?.response?.status === 401) {
        fetchErorr = true
      }
    })
}

const useGetTopics = () => {
  const [numberOfFetched, setNumberOfFetched] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [topics, setTopics] = useState({})
  const getTopics = () => {
    //Clean up
    totalTopics = []
    setNumberOfFetched(0)
    setTopics({})
    setIsLoading(false)
    const promise = new Promise(async (resolve, reject) => {
      setIsLoading(true)
      if (topicStats) {
        for (const [i, item] of topicStats.entries()) {
          await callTopicsApi(item)
          if (fetchErorr === true) {
            return
          }
          setNumberOfFetched(i + 1)
          if (i === topicStats.length - 1) {
            resolve('SUCCESS')
          }
        }
      } else {
        reject('INTERNAL ERROR')
      }
    })
    promise
      .then((res) => {
        let count = {}
        totalTopics?.forEach(function (i) {
          count[i] = (count[i] || 0) + 1
        })
        setTopics({
          react: count['react'],
          redux: count['redux'],
          next: count['nextjs'],
          materialUi: count['material-ui'],
          tailwindCss: count['tailwind-css'],
          bootstraps: count['bootstrap4'],
          axios: count['axios'],
          httpRequests: count['http-requests'],
          apiRequests: count['api-requests'],
          vanillaJs: count['vanilla-javascript'],
          chakraUi: count['chakra-ui'],
        })
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err)
        setIsLoading(false)
      })
  }
  return {
    numberOfFetched,
    getTopics,
    isLoading,
    topics,
  }
}
export default useGetTopics
