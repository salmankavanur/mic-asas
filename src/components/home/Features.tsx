// src/components/home/Features.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/Features.module.scss'

const featureItems = [
  {
    icon: '/images/col-icon-1.png',
    title: 'Education Services',
    description: 'Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.',
    link: '/education-services'
  },
  {
    icon: '/images/col-icon-2.png',
    title: 'International Hubs',
    description: 'Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.',
    link: '/international-hubs'
  },
  {
    icon: '/images/col-icon-3.png',
    title: "Bachelor's and Master's",
    description: 'Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.',
    link: '/programs'
  },
  {
    icon: '/images/col-icon-4.png',
    title: 'University Life',
    description: 'Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.',
    link: '/university-life'
  }
]

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.featureGrid}>
          {featureItems.map((item, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image src={item.icon} alt={item.title} width={47} height={47} />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureDescription}>{item.description}</p>
                <Link href={item.link} className={styles.learnMoreLink}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features