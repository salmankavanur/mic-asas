// src/components/home/Services.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/Services.module.scss'

const serviceItems = [
  {
    icon: '/images/icon-1.png',
    title: 'University Life',
    caption: 'Overall in here',
    link: '/university-life'
  },
  {
    icon: '/images/icon-2.png',
    title: 'Graduation',
    caption: 'Getting Diploma',
    link: '/graduation'
  },
  {
    icon: '/images/icon-3.png',
    title: 'Athletics',
    caption: 'Sport Clubs',
    link: '/athletics'
  },
  {
    icon: '/images/icon-4.png',
    title: 'Social',
    caption: 'Overall in here',
    link: '/social'
  }
]

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.serviceGrid}>
          {serviceItems.map((item, index) => (
            <div key={index} className={styles.serviceItem}>
              <Link href={item.link} className={styles.serviceLink}>
                <div className={styles.serviceIcon}>
                  <Image src={item.icon} alt={item.title} width={40} height={40} />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{item.title}</h3>
                  <div className={styles.serviceCaption}>{item.caption}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services