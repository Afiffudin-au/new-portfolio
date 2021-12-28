import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import LanguageStats from '../LanguageStats/LanguageStats'
import NavigationBar from '../NavigationBar/NavigationBar'
import Skills from '../Skills/Skills'
function Home() {
  return (
    <div id='home'>
      <NavigationBar />
      <Banner />
      <About />
      <Skills />
      <LanguageStats />
    </div>
  )
}

export default Home
