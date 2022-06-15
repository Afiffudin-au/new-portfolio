import { useEffect, useState } from 'react'

const useGradientColor = () => {
  const [grandintColor, setGradientColor] = useState('')
  useEffect(() => {
    const canvas = document.getElementsByTagName('canvas')
    const ctx = canvas[0].getContext('2d')
    const gradient = ctx.createLinearGradient(500, 0, 100, 0)
    gradient.addColorStop(0, '#78b7f5')
    gradient.addColorStop(1, '#4bdbc3')
    setGradientColor(gradient)
  }, [])
  return {
    grandintColor,
  }
}
export default useGradientColor
