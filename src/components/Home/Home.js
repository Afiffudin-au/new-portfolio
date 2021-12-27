import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import NavigationBar from '../NavigationBar/NavigationBar'
function Home() {
  return (
    <div id='home'>
      <NavigationBar />
      <Banner />
      <About />
    </div>
  )
}

export default Home
