// src/app/page.tsx
import React from 'react'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Admission from '@/components/home/Admission'
import About from '@/components/home/About'
import Features from '@/components/home/Features'
import News from '@/components/home/News'
import QuickLinks from '@/components/home/QuickLinks'
import Twitter from '@/components/home/Twitter'
import Apply from '@/components/home/Apply'
import VideoTour from '@/components/home/VideoTour'
import Tabs from '@/components/home/Tabs'
import Programs from '@/components/home/Programs'
import Events from '@/components/home/Events'
import Newsletter from '@/components/home/Newsletter'
import CourseSearch from '@/components/home/CourseSearch'
import Partners from '@/components/home/Partners'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Admission />
      <About />
      <Features />
      <div className="news-section">
        <News />
        <QuickLinks />
      </div>
      <div className="social-section">
        <Twitter />
        <Apply />
      </div>
      <VideoTour />
      <Tabs />
      <Programs />
      <div className="support-section">
        <Events />
        <Newsletter />
      </div>
      <CourseSearch />
      <Partners />
    </>
  )
}