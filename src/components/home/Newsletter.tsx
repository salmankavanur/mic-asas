// src/components/home/Newsletter.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/components/Newsletter.module.scss'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setMessage('Please enter your email address')
      return
    }

    setIsSubmitting(true)
    setMessage('')

    // Simulate API call
    try {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage('Thank you for subscribing!')
      setEmail('')
    } catch {
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.newsletterSection}>
      <div className={styles.newsletterContent}>
        <div className={styles.newsletterIcon}>
          <Image 
            src="/images/icon-envelope.png" 
            alt="Newsletter" 
            width={78} 
            height={60} 
          />
        </div>
        <h3 className={styles.newsletterTitle}>Subscribe To Newsletter</h3>
        <p className={styles.newsletterDescription}>Get updates to news & events</p>
        
        <form className={styles.newsletterForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {message && <p className={styles.message}>{message}</p>}
        </form>
      </div>
    </div>
  )
}

export default Newsletter