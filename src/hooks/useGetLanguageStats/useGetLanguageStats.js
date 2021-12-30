import axios from 'axios'
import { useState } from 'react'
import { formatBytes } from '../../lib/formatByte'
import { languageStats } from './languageStats'
const controller = new AbortController()
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
    signal: controller.signal,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AUTH}`,
    },
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
export const useGetLanguageStats = () => {
  const [numberOfFetched, setNumberOfFetched] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [languages, setLanguage] = useState({})
  const getLanguageStats = () => {
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
    const promise = new Promise(async (resolve, reject) => {
      setIsLoading(true)
      if (languageStats) {
        for (const [i, item] of languageStats.entries()) {
          await callStatsApi(item)
          if (fetchErorr === true) {
            return
          }
          setNumberOfFetched(i + 1)
          if (i === languageStats.length - 1) {
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
            totalJavascript += item
          }
        })
        htmlLang.forEach((item) => {
          if (item !== undefined) {
            totalHTML += item
          }
        })
        cssLang.forEach((item) => {
          if (item !== undefined) {
            totalCSS += item
          }
        })
        scssLang.forEach((item) => {
          if (item !== undefined) {
            totalSCSS += item
          }
        })
        tsLanguage.forEach((item) => {
          if (item !== undefined) {
            totalTypescript += item
          }
        })
        setLanguage({
          js: formatBytes(totalJavascript),
          html: formatBytes(totalHTML),
          css: formatBytes(totalCSS),
          scss: formatBytes(totalSCSS),
          ts: formatBytes(totalTypescript),
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
  }
}
