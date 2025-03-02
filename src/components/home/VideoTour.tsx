// src/components/home/VideoTour.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/components/VideoTour.module.scss'

const VideoTour = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  return (
    <section className={styles.videoTourSection}>
      <div className={styles.container}>
        <div className={styles.videoTourContent}>
          <div className={styles.playButton} onClick={openVideoModal}>
            <Image src="/images/icon-play.png" alt="Play Video" width={82} height={82} />
          </div>
          <h2 className={styles.title}>Video Tour in Kingster</h2>
          <p className={styles.description}>
            Take a tour in Kingster and you will find the best university in the state. 
            The video will take you to every place in this university.
          </p>
        </div>
      </div>

      {isVideoModalOpen && (
        <div className={styles.videoModal}>
          <div className={styles.videoModalOverlay} onClick={closeVideoModal}></div>
          <div className={styles.videoModalContent}>
            <button className={styles.closeButton} onClick={closeVideoModal}>×</button>
            <div className={styles.videoWrapper}>
              <iframe
                width="1200"
                height="675"
                src="https://www.youtube.com/embed/C5pKtnmHTxg?autoplay=1"
                title="Kingster University Video Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoTour