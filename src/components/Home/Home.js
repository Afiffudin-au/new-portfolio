import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import LanguageStats from '../LanguageStats/LanguageStats'
import NavigationBar from '../NavigationBar/NavigationBar'
import Project from '../Project/Project'
import Skills from '../Skills/Skills'
import Testimonial from '../Testimonial/Testimonial'
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
      {/* <Project /> */}
      {/* <Testimonial /> */}
      <Contact />
    </div>
  )
}

export default Home
