// src/components/home/QuickLinks.tsx
import React from 'react'
import Link from 'next/link'
import { FaLink } from 'react-icons/fa'
import styles from '@/styles/components/QuickLinks.module.scss'

const quickLinks = [
  { title: 'Alumni & Donors', url: '/alumni-donors' },
  { title: 'Athletic Calendar', url: '/athletic-calendar' },
  { title: 'All Kingster\'s Events', url: '/events' },
  { title: 'Partnership & Out Reach', url: '/partnership' },
  { title: 'Academic Programs', url: '/academics/programs' },
  { title: 'Tuition And Fees', url: '/tuition-fees' },
]

const QuickLinks = () => {
  return (
    <div className={styles.quickLinksSection}>
      <div className={styles.quickLinksHeader}>
        <FaLink className={styles.linkIcon} />
        <h3 className={styles.quickLinksTitle}>Quick Links</h3>
      </div>
      
      <div className={styles.linksList}>
        {quickLinks.map((link, index) => (
          <React.Fragment key={index}>
            <div className={styles.linkItem}>
              <Link href={link.url} className={styles.link}>
                {link.title}
              </Link>
            </div>
            {index < quickLinks.length - 1 && (
              <div className={styles.divider}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default QuickLinks