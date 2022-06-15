import React from 'react'
import About from '../About'
import Banner from '../Banner'
import Contact from '../Contact'
import Footer from '../Footer'
import LanguageStats from '../LanguageStats'
import NavigationBar from '../NavigationBar'
import Project from '../Project'
import Skills from '../Skills'
import Testimonial from '../Testimonial'
import TopicStats from '../TopicStats'
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
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
