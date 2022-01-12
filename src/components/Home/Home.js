import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import LanguageStats from '../LanguageStats/LanguageStats'
import ModalDetail from '../ModalDetail/ModalDetail'
import NavigationBar from '../NavigationBar/NavigationBar'
import Project from '../Project/Project'
import Skills from '../Skills/Skills'
import TopicStats from '../TopicStats/TopicStats'
function Home() {
  return (
    <div id='home'>
      <NavigationBar />
      <Banner />
      <About />
      <Skills />
      <LanguageStats />
      <TopicStats />
      <Project />
    </div>
  )
}

export default Home
