// src/components/home/Apply.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/components/Apply.module.scss'

const Apply = () => {
  return (
    <div className={styles.applySection}>
      <Link href="/apply-to-kingster" className={styles.applyLink}>
        <div className={styles.applyContent}>
          <div className={styles.applyIcon}>
            <Image 
              src="/images/apply-logo.png" 
              alt="Apply to Kingster" 
              width={42} 
              height={39}
            />
          </div>
          <h3 className={styles.applyTitle}>Apply To Kingster</h3>
        </div>
      </Link>
    </div>
  )
}

export default Apply