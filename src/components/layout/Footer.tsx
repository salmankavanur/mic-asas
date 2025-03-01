// src/components/layout/Footer.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGoogle, FaSkype } from 'react-icons/fa'
import styles from '@/styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <div className={styles.footerWidget}>
              <Image 
                src="/images/footer-logo.png" 
                alt="Kingster University" 
                width={220} 
                height={50} 
              />
              <p>
                Box 35300
                <br /> 1810 Campus Way NE
                <br /> Bothell, WA 98011-8246
              </p>
              <p>
                +1-2534-4456-345
                <br />
                <a href="mailto:admin@kingsteruni.edu">admin@kingsteruni.edu</a>
              </p>
              <div className={styles.divider}></div>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.footerWidget}>
              <h3 className={styles.widgetTitle}>Our Campus</h3>
              <ul className={styles.menuList}>
                <li><Link href="/academic">Academic</Link></li>
                <li><Link href="/planning-administration">Planning & Administration</Link></li>
                <li><Link href="/campus-safety">Campus Safety</Link></li>
                <li><Link href="/chancellor">Office of the Chancellor</Link></li>
                <li><Link href="/facility-services">Facility Services</Link></li>
                <li><Link href="/human-resources">Human Resources</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.footerWidget}>
              <h3 className={styles.widgetTitle}>Campus Life</h3>
              <ul className={styles.menuList}>
                <li><Link href="/accessibility">Accessibility</Link></li>
                <li><Link href="/financial-aid">Financial Aid</Link></li>
                <li><Link href="/food-services">Food Services</Link></li>
                <li><Link href="/housing">Housing</Link></li>
                <li><Link href="/information-technologies">Information Technologies</Link></li>
                <li><Link href="/student-life">Student Life</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.footerWidget}>
              <h3 className={styles.widgetTitle}>Academics</h3>
              <ul className={styles.menuList}>
                <li><Link href="/canvas">Canvas</Link></li>
                <li><Link href="/catalyst">Catalyst</Link></li>
                <li><Link href="/library">Library</Link></li>
                <li><Link href="/time-schedule">Time Schedule</Link></li>
                <li><Link href="/apply-for-admissions">Apply For Admissions</Link></li>
                <li><Link href="/pay-tuition">Pay My Tuition</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.copyrightWrapper}>
        <div className={styles.copyrightContainer}>
          <div className={styles.copyrightLeft}>
            Copyright All Right Reserved {new Date().getFullYear()}, MIC ASAS
          </div>
          <div className={styles.copyrightRight}>
            <div className={styles.socialNetwork}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              {/* <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
                <FaGoogle />
              </a> */}
              {/* <a href="https://skype.com" target="_blank" rel="noopener noreferrer">
                <FaSkype />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer