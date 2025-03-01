// src/components/home/About.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'
import styles from '@/styles/components/About.module.scss'

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={styles.leftColumn}>
            <Image 
              src="/images/logo-white.png" 
              alt="Kingster University" 
              width={262} 
              height={35} 
              className={styles.logo}
            />
            <h2 className={styles.title}>About Our University</h2>
          </div>
          <div className={styles.rightColumn}>
            <p className={styles.description}>
              We are one of the largest, most diverse universities in the USA with over 90,000 students in USA, 
              and a further 30,000 studying across 180 countries for Kingster University.
            </p>
            <p className={styles.description}>
              Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. 
              Throughout our great history, Kingster has offered access to a wide range of academic opportunities. 
              As a world leader in higher education, the University has pioneered change in the sector.
            </p>
            <Link href="/about-us" className={styles.readMoreButton}>
              Read More <FaLongArrowAltRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About