// src/components/home/Hero.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from '@/styles/components/Hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className={styles.heroSlider}
      >
        <SwiperSlide>
          <div className={styles.slide} style={{ backgroundImage: "url('/images/slider-1-2.jpg')" }}>
            <div className={styles.slideContent}>
              <div className={styles.subtitle}>The Best University Of The State</div>
              <div className={styles.titleWrapper}>
                <h2 className={styles.titleFirst}>Kingster</h2>
                <h2 className={styles.titleSecond}>University</h2>
              </div>
              <Link href="/campus-tour" className={styles.tourButton}>
                Take A Tour
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide} style={{ backgroundImage: "url('/images/slider-2.jpg')" }}>
            <div className={styles.slideContent}>
              <div className={styles.subtitle}>Kingsters has more than</div>
              <h2 className={styles.title}>180 Majors & Minors</h2>
              <Link href="/campus-tour" className={styles.tourButton}>
                Take A Tour
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero