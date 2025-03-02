// src/components/home/CourseSearch.tsx
'use client'

import React, { useState } from 'react'
import styles from '@/styles/components/CourseSearch.module.scss'

type FormValues = {
  keywords: string;
  courseId: string;
  department: string;
  campus: string;
  level: string;
  instructor: string;
  semester: string;
  credit: string;
}

const initialFormValues: FormValues = {
  keywords: '',
  courseId: '',
  department: '',
  campus: '',
  level: '',
  instructor: '',
  semester: '',
  credit: ''
}

const CourseSearch = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real application, this would navigate to search results page
    // with the form values as query parameters
    console.log('Search form submitted with values:', formValues)
    
    setIsSubmitting(false)
  }

  return (
    <section className={styles.courseSearchSection}>
      <div className={styles.courseSearchBg}></div>
      <div className={styles.container}>
        <div className={styles.courseSearchContent}>
          <h2 className={styles.sectionTitle}>Search For Courses</h2>
          
          <form className={styles.courseForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  placeholder="Keywords" 
                  name="keywords"
                  value={formValues.keywords}
                  onChange={handleInputChange}
                  className={styles.formControl}
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  placeholder="Course ID" 
                  name="courseId"
                  value={formValues.courseId}
                  onChange={handleInputChange}
                  className={styles.formControl}
                />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <select 
                  name="department" 
                  value={formValues.department}
                  onChange={handleInputChange}
                  className={styles.formControl}
                >
                  <option value="">Department</option>
                  <option value="business-administration">Business Administration</option>
                  <option value="law">Law</option>
                  <option value="engineering">Engineering</option>
                  <option value="medicine">Medicine</option>
                  <option value="arts-science">Arts & Science</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <select 
                  name="campus" 
                  value={formValues.campus}
                  onChange={handleInputChange}
                  className={styles.formControl}
                >
                  <option value="">Campus</option>
                  <option value="admans-hall">Adman&apos;s Hall</option>
                  <option value="kingsters-80">Kingster&apos;s 80</option>
                  <option value="ku2-hill">KU2 Hill</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <select 
                  name="level" 
                  value={formValues.level}
                  onChange={handleInputChange}
                  className={styles.formControl}
                >
                  <option value="">Level</option>
                  <option value="graduate">Graduate</option>
                  <option value="undergraduate">Undergraduate</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <select 
                  name="instructor" 
                  value={formValues.instructor}
                  onChange={handleInputChange}
                  className={styles.formControl}
                >
                  <option value="">Instructor</option>
                  <option value="albert-coman-phd">Albert Coman (PhD)</option>
                  <option value="angelina-jones-phd">Angelina Jones (PhD)</option>
                  <option value="bruce-willis-phd">Bruce Willis (PhD)</option>
                  <option value="carol-dawson-phd">Carol Dawson (PhD)</option>
                  <option value="john-hagensy">John Hagensy (PhD)</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <select 
                  name="semester" 
                  value={formValues.semester}
                  onChange={handleInputChange}
                  className={styles.formControl}
                >
                  <option value="">Semester</option>
                  <option value="fall-2024">Fall 2024</option>
                  <option value="spring-2025">Spring 2025</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <select 
                  name="credit" 
                  value={formValues.credit}
                  onChange={handleInputChange}
                  className={styles.formControl}
                >
                  <option value="">Credit</option>
                  <option value="2-000">2.000</option>
                  <option value="3-000">3.000</option>
                  <option value="4-000">4.000</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formSubmit}>
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Searching...' : 'Search Courses'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CourseSearch