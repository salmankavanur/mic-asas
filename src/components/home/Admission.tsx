// src/components/home/Admission.tsx
import React from 'react'
import Link from 'next/link'
import styles from '@/styles/components/Admission.module.scss'

const Admission = () => {
  return (
    <section className={styles.admissionSection}>
      <div className={styles.container}>
        <div className={styles.admissionGrid}>
          <div className={styles.leftColumn}>
            {/* This column is just a background image set in CSS */}
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.contentWrapper}>
              <h2 className={styles.title}>Apply for Admission</h2>
              <p className={styles.subtitle}>Fall 2025 applications are now open</p>
              <p className={styles.description}>
                We don't just give students an education and experiences that set them up for success in a career. 
                We help them succeed in their career—to discover a field they're passionate about and dare to lead it.
              </p>
              <Link href="/apply-to-kingster" className={styles.applyButton}>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admission