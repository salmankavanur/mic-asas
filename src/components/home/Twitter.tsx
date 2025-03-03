'use client'

import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from '@/styles/components/Twitter.module.scss'
import { FaTwitter } from 'react-icons/fa'

const tweets = [
  {
    id: '1030582660324892674',
    content: 'Shaking off the working week! What\'s on the agenda for the weekend? by KonstantinKolosov via https://t.co/fSyxq53H6P',
    date: '18 hours ago',
    url: 'http://twitter.com/Envato/statuses/1030582660324892674'
  },
  {
    id: '1030338474891792385',
    content: 'RT @placeitapp: Making a @YouTube banner for your channel is easy with Placeit\'s #bannermaker! Make your own in sec… https://t.co/0X22tX3wtm',
    date: 'yesterday',
    url: 'http://twitter.com/Envato/statuses/1030338474891792385'
  },
  {
    id: '1029988653282541570',
    content: 'Our Chief People Officer @MRidsdale16 joined @benjaminlaw and @raejohnston on @tsushow to discuss all things Culture… https://t.co/uszxz0qicU',
    date: '2 days ago',
    url: 'http://twitter.com/Envato/statuses/1029988653282541570'
  }
]

const Twitter = () => {
  return (
    <div className={styles.twitterSection}>
      <div className={styles.twitterContent}>
        <h2 className={styles.sectionTitle}>
          <FaTwitter className={styles.twitterIcon} /> Latest Tweets
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className={styles.twitterSlider}
        >
          {tweets.map((tweet) => (
            <SwiperSlide key={tweet.id}>
              <div className={styles.tweetItem}>
                <p className={styles.tweetContent}>{tweet.content}</p>
                <div className={styles.tweetDate}>
                  <Link href={tweet.url} target="_blank" rel="noopener noreferrer">
                    {tweet.date}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Twitter
