// src/components/home/Tabs.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaPlay } from 'react-icons/fa'
import styles from '@/styles/components/Tabs.module.scss'

const tabsData = [
  {
    id: 'benefits',
    title: 'Benefits',
    videoThumb: '/images/video-bg.jpg',
    contentTitle: 'Why Choose Kingster?',
    content: `The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. 
      This is a new community building platform for Kingster's alumni. It is the only place online where 
      you can find, and connect with, all 90,000 Kingster's alumni. All alumni are automatically enrolled!

      Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. 
      Throughout our great history, Kingster has offered access to a wide range of academic opportunities. 
      As a world leader in higher education, the University has pioneered change in the sector.`
  },
  {
    id: 'development',
    title: 'Self Development',
    videoThumb: '/images/video-bg.jpg',
    contentTitle: 'Self Development',
    content: `The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. 
      This is a new community building platform for Kingster's alumni. It is the only place online where 
      you can find, and connect with, all 90,000 Kingster's alumni. All alumni are automatically enrolled!

      Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. 
      Throughout our great history, Kingster has offered access to a wide range of academic opportunities. 
      As a world leader in higher education, the University has pioneered change in the sector.`
  },
  {
    id: 'spirituality',
    title: 'Spirituality',
    videoThumb: '/images/video-bg.jpg',
    contentTitle: 'Spirituality',
    content: `The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. 
      This is a new community building platform for Kingster's alumni. It is the only place online where 
      you can find, and connect with, all 90,000 Kingster's alumni. All alumni are automatically enrolled!

      Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. 
      Throughout our great history, Kingster has offered access to a wide range of academic opportunities. 
      As a world leader in higher education, the University has pioneered change in the sector.`
  },
  {
    id: 'alumni',
    title: 'Alumni',
    videoThumb: '/images/video-bg.jpg',
    contentTitle: 'Alumni',
    content: `The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. 
      This is a new community building platform for Kingster's alumni. It is the only place online where 
      you can find, and connect with, all 90,000 Kingster's alumni. All alumni are automatically enrolled!

      Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. 
      Throughout our great history, Kingster has offered access to a wide range of academic opportunities. 
      As a world leader in higher education, the University has pioneered change in the sector.`
  }
]

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  return (
    <section className={styles.tabsSection}>
      <div className={styles.container}>
        <div className={styles.tabsWrapper}>
          <div className={styles.tabImageArea}>
            {tabsData.map(tab => (
              <div 
                key={tab.id}
                className={`${styles.tabImage} ${activeTab === tab.id ? styles.active : ''}`}
                style={{ backgroundImage: `url(${tab.videoThumb})` }}
              >
                <Link 
                  href="#" 
                  className={styles.playButton} 
                  onClick={(e) => { e.preventDefault(); openVideoModal(); }}
                >
                  <FaPlay className={styles.playIcon} />
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.tabContentArea}>
            <div className={styles.tabsNav}>
              {tabsData.map(tab => (
                <button 
                  key={tab.id}
                  className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            
            <div className={styles.tabContentWrapper}>
              {tabsData.map(tab => (
                <div 
                  key={tab.id}
                  className={`${styles.tabContent} ${activeTab === tab.id ? styles.active : ''}`}
                >
                  <h3 className={styles.contentTitle}>{tab.contentTitle}</h3>
                  <div className={styles.contentBody}>
                    {tab.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                title="Kingster University Video"
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

export default Tabs