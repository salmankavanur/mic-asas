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
      This is a new community-building platform for Kingster's alumni. It is the only place online where 
      you can find and connect with all 90,000 Kingster's alumni. All alumni are automatically enrolled!

      Kingster University was established by John Smith in 1920 for the public benefit and is recognized globally. 
      Throughout our great history, Kingster has offered access to a wide range of academic opportunities. 
      As a world leader in higher education, the University has pioneered change in the sector.`,
    videoTitle: 'Anything Could Happen at Kingster',
  },
  {
    id: 'development',
    title: 'Self Development',
    videoThumb: '/images/video-bg.jpg',
    contentTitle: 'Self Development',
    content: `Develop yourself academically and professionally at Kingster University. 
      We provide a wide range of courses that empower students with skills to excel in any field.`,
    videoTitle: 'Self Development at Kingster',
  },
  {
    id: 'spirituality',
    title: 'Spirituality',
    videoThumb: '/images/video-bg.jpg',
    contentTitle: 'Spirituality',
    content: `Discover personal growth and spirituality at Kingster University. 
      Our curriculum ensures a balance between academic excellence and personal well-being.`,
    videoTitle: 'Spirituality at Kingster',
  },
  {
    id: 'alumni',
    title: 'Alumni',
    videoThumb: '/images/video-bg.jpg',
    contentTitle: 'Alumni Network',
    content: `Join a thriving network of professionals. Kingster University has a strong global alumni community, 
      opening doors to career growth and opportunities worldwide.`,
    videoTitle: 'Kingster Alumni Network',
  },
]

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Find the active tab's data to dynamically set the video title
  const activeTabData = tabsData.find(tab => tab.id === activeTab)

  return (
    <section className={styles.tabsSection}>
      <div className={styles.container}>
        <div className={styles.tabsWrapper}>
          {/* Video Thumbnail Section */}
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
                  onClick={(e) => {
                    e.preventDefault();
                    setIsVideoModalOpen(true);
                  }}
                >
                  <FaPlay className={styles.playIcon} />
                </Link>
              </div>
            ))}
          </div>

          {/* Tab Content Section */}
          <div className={styles.tabContentArea}>
            {/* Tab Navigation */}
            <div className={styles.tabsNav}>
              {tabsData.map(tab => (
                <button
                  key={tab.id}
                  className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className={styles.tabContentWrapper}>
              {tabsData.map(tab => (
                <div
                  key={tab.id}
                  className={`${styles.tabContent} ${activeTab === tab.id ? styles.active : ''}`}
                >
                  <h3 className={styles.contentTitle}>{tab.contentTitle}</h3>
                  <p className={styles.contentBody}>{tab.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Video Modal */}
      {isVideoModalOpen && (
        <div className={styles.videoModal}>
          <div className={styles.videoModalOverlay} onClick={() => setIsVideoModalOpen(false)}></div>
          <div className={styles.videoModalContent}>
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{activeTabData.videoTitle}</h3>
              <button className={styles.closeButton} onClick={() => setIsVideoModalOpen(false)}>
                ×
              </button>
            </div>

            {/* Video Player */}
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/C5pKtnmHTxg?autoplay=1"
                title="Kingster University Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className={styles.modalFooter}>
              <button className={styles.actionButton}>Download this video</button>
              <button className={styles.actionButton}>Read the latest from Kingster</button>
              <div className={styles.shareSection}>
                <span>Watch, Rate, Share</span>
                <button className={styles.shareButton}>Share</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Tabs