import axios from 'axios'
import { useState } from 'react'
import { header_auth_github } from '../../config/api-config'
import { toast } from 'react-toastify'
import { getTopicAPI } from '../../api-calls/topic'
let totalTopics = []
let fetchErorr = false
const callTopicsApi = async (item) => {
  return axios({
    method: 'GET',
    url: item,
    headers: header_auth_github,
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
  const [totalRepo, setTotalRepo] = useState(0)
  const getTopics = async () => {
    //Clean up
    totalTopics = []
    setNumberOfFetched(0)
    setTopics({})
    setIsLoading(false)
    // get languages api
    const res = await getTopicAPI()
    if (res.error) {
      toast.error(res.message)
      return
    }
    const extractData = res.data.data.map((item) => item.urlTopic)
    setTotalRepo(extractData.length)
    const promise = new Promise(async (resolve, reject) => {
      setIsLoading(true)
      if (extractData) {
        for (const [i, item] of extractData.entries()) {
          await callTopicsApi(item)
          if (fetchErorr === true) {
            return
          }
          setNumberOfFetched(i + 1)
          if (i === extractData.length - 1) {
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
          tailwindCss: count['tailwindcss'],
          bootstraps: count['bootstrap'],
          axios: count['axios'],
          httpRequests: count['http-requests'],
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
    totalRepo,
  }
}
export default useGetTopics
