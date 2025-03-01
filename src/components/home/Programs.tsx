// src/components/home/Programs.tsx
import React from 'react'
import Link from 'next/link'
import styles from '@/styles/components/Programs.module.scss'

const programItems = [
  {
    title: 'Undergraduate',
    description: 'Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally.',
    backgroundImage: '/images/undergraduate-bg.jpg',
    link: '/academics/undergraduate'
  },
  {
    title: 'Graduated & Professional',
    description: 'Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally.',
    backgroundImage: '',  // No background image in the middle column
    link: '/academics/graduate'
  },
  {
    title: 'Scholarships & Financial AID',
    description: 'Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally.',
    backgroundImage: '/images/scholarships-bg.jpg',
    link: '/admissions/scholarships'
  }
]

const Programs = () => {
  return (
    <section className={styles.programsSection}>
      <div className={styles.programsGrid}>
        {programItems.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.programItem} ${index === 1 ? styles.middle : ''}`}
            style={item.backgroundImage ? {
              backgroundImage: `url(${item.backgroundImage})`
            } : {}}
          >
            <div className={styles.programContent}>
              <h3 className={styles.programTitle}>{item.title}</h3>
              <p className={styles.programDescription}>{item.description}</p>
              <Link href={item.link} className={styles.programLink}>
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs