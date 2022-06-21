import axios from 'axios'
import { useState } from 'react'
import { getLanguageAPI } from '../../api-calls/language'
import formatBytes from '../../lib/formatByte'
import { toast } from 'react-toastify'
import { header_auth_github } from '../../config/api-config'
let jsLanguage = []
let tsLanguage = []
let htmlLang = []
let cssLang = []
let scssLang = []
let totalJavascript = 0
let totalTypescript = 0
let totalHTML = 0
let totalCSS = 0
let totalSCSS = 0
let fetchErorr = false
const callStatsApi = async (item) => {
  return axios({
    method: 'GET',
    url: item,
    headers: header_auth_github,
  })
    .then((res) => {
      fetchErorr = false
      tsLanguage.push(res.data.TypeScript)
      jsLanguage.push(res.data.JavaScript)
      htmlLang.push(res.data.HTML)
      cssLang.push(res.data.CSS)
      scssLang.push(res.data.SCSS)
    })
    .catch((error) => {
      //API key erorr
      if (error?.response?.status === 401) {
        fetchErorr = true
      }
    })
}
const useGetLanguageStats = () => {
  const [numberOfFetched, setNumberOfFetched] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [languages, setLanguage] = useState({})
  const [totalRepo, setTotalRepo] = useState(0)
  const getLanguageStats = async () => {
    //Clean UP
    jsLanguage = []
    tsLanguage = []
    htmlLang = []
    cssLang = []
    scssLang = []
    totalJavascript = 0
    totalTypescript = 0
    totalHTML = 0
    totalCSS = 0
    totalSCSS = 0

    setNumberOfFetched(0)
    setLanguage({})
    setIsLoading(false)

    // get languages api
    const res = await getLanguageAPI()
    if (res.error) {
      toast.error(res.message)
      return
    }
    const extractData = res.data.data.map((item) => item.urlProgLang)
    setTotalRepo(extractData.length)
    const promise = new Promise(async (resolve, reject) => {
      setIsLoading(true)
      if (extractData) {
        for (const [i, item] of extractData.entries()) {
          await callStatsApi(item)
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
        jsLanguage.forEach((item) => {
          if (item !== undefined) {
            totalJavascript += 1
          }
        })
        htmlLang.forEach((item) => {
          if (item !== undefined) {
            totalHTML += 1
          }
        })
        cssLang.forEach((item) => {
          if (item !== undefined) {
            totalCSS += 1
          }
        })
        scssLang.forEach((item) => {
          if (item !== undefined) {
            totalSCSS += 1
          }
        })
        tsLanguage.forEach((item) => {
          if (item !== undefined) {
            totalTypescript += 1
          }
        })
        setLanguage({
          js: totalJavascript,
          html: totalHTML,
          css: totalCSS,
          scss: totalSCSS,
          ts: totalTypescript,
        })
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err)
        setIsLoading(false)
      })
  }

  return {
    getLanguageStats,
    numberOfFetched,
    isLoading,
    languages,
    totalRepo,
  }
}
export default useGetLanguageStats
