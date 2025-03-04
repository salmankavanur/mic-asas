// src/components/layout/Header.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaEnvelopeOpen, FaPhone, FaSearch, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import styles from '@/styles/components/Header.module.scss'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topBarInner}>
            <div className={styles.topBarLeft}>
              <span><FaEnvelopeOpen /> micthrissur@gmail.com </span>
              <span><FaPhone /> 0487 2445828 </span>
            </div>
            <div className={styles.topBarRight}>
              <ul className={styles.topBarMenu}>
                <li><Link href="/alumni">Alumni</Link></li>
                <li><Link href="/calendar">Calendar</Link></li>
                <li><Link href="/portal">Portal</Link></li>
              </ul>
              <Link href="/support" className={styles.supportButton}>Support ASAS</Link>
            </div>
          </div>
        </div>
      </div>

      <header className={`${styles.header} ${isScrolled ? styles.sticky : ''}`}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <div className={styles.logo}>
              <Link href="/">
                <Image 
                  src="/images/logo.webp" 
                  alt="Kingster University" 
                  width={180} 
                  height={40} 
                  priority
                />
              </Link>
            </div>

            <div className={styles.navigation}>
              <nav className={styles.mainMenu}>
                <ul>
                  <li className={styles.menuItem}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={styles.menuItemHasChildren}>
                    <Link href="/pages">Pages <FaChevronDown /></Link>
                    <ul className={styles.subMenu}>
                      <li><Link href="/about-us">About KU</Link></li>
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/features">Features</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                      <li><Link href="/shop">Shop</Link></li>
                      <li><Link href="/gallery">Gallery</Link></li>
                      <li><Link href="/price-table">Price Table</Link></li>
                      <li><Link href="/maintenance">Maintenance</Link></li>
                      <li><Link href="/coming-soon">Coming Soon</Link></li>
                      <li><Link href="/404">404 Page</Link></li>
                    </ul>
                  </li>
                  <li className={styles.menuItemHasChildren}>
                    <Link href="/academics">Academics <FaChevronDown /></Link>
                    <ul className={styles.subMenu}>
                      <li><Link href="/academics/undergraduate">Undergraduate</Link></li>
                      <li><Link href="/academics/graduate">Graduate Program</Link></li>
                      <li><Link href="/academics/resources">Resources</Link></li>
                    </ul>
                  </li>
                  <li className={styles.menuItemHasChildren}>
                    <Link href="/admissions">Admissions <FaChevronDown /></Link>
                    <ul className={styles.subMenu}>
                      <li><Link href="/apply-to-kingster">Apply To Kingster</Link></li>
                      <li><Link href="/campus-tour">Campus Tour</Link></li>
                      <li><Link href="/scholarships">Scholarships</Link></li>
                      <li><Link href="/athletics">Athletics</Link></li>
                      <li><Link href="/give-to-kingster">Give To Kingster</Link></li>
                      <li><Link href="/alumni">Alumni</Link></li>
                      <li><Link href="/event-calendar">Event Calendar</Link></li>
                    </ul>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/courses">Courses</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/athletics">Athletics</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/university-life">University Life</Link>
                  </li>
                </ul>
              </nav>
              <div className={styles.search}>
                <button className={styles.searchButton}>
                  <FaSearch />
                </button>
              </div>
            </div>

            <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages">Pages</Link>
              <ul>
                <li><Link href="/about-us">About KU</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/price-table">Price Table</Link></li>
                <li><Link href="/maintenance">Maintenance</Link></li>
                <li><Link href="/coming-soon">Coming Soon</Link></li>
                <li><Link href="/404">404 Page</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/academics">Academics</Link>
              <ul>
                <li><Link href="/academics/undergraduate">Undergraduate</Link></li>
                <li><Link href="/academics/graduate">Graduate Program</Link></li>
                <li><Link href="/academics/resources">Resources</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/admissions">Admissions</Link>
              <ul>
                <li><Link href="/apply-to-kingster">Apply To Kingster</Link></li>
                <li><Link href="/campus-tour">Campus Tour</Link></li>
                <li><Link href="/scholarships">Scholarships</Link></li>
                <li><Link href="/athletics">Athletics</Link></li>
                <li><Link href="/give-to-kingster">Give To Kingster</Link></li>
                <li><Link href="/alumni">Alumni</Link></li>
                <li><Link href="/event-calendar">Event Calendar</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/athletics">Athletics</Link>
            </li>
            <li>
              <Link href="/university-life">University Life</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Header