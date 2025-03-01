// src/components/home/News.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaTag } from 'react-icons/fa'
import styles from '@/styles/components/News.module.scss'

const newsItems = [
  {
    id: 1,
    image: '/images/shutterstock_135948689-400x245.jpg',
    title: 'Professor Albert joint research on mobile money in Tanzania',
    date: 'June 6, 2024',
    tags: ['Admission', 'Student'],
    featuredImage: true
  },
  {
    id: 2,
    image: '/images/shutterstock_218235004-150x150.jpg',
    title: 'A Global MBA for the next generation of business leaders',
    date: 'June 6, 2024',
    tags: ['Hot', 'Updates'],
    featuredImage: false
  },
  {
    id: 3,
    image: '/images/shutterstock_481869205-150x150.jpg',
    title: 'Professor Tom comments on voluntary recalls by snack brands',
    date: 'June 6, 2024',
    tags: ['Admission', 'Event'],
    featuredImage: false
  },
  {
    id: 4,
    image: '/images/shutterstock_361397258-150x150.jpg',
    title: 'Professor Alexa is interviewed about Twitter\'s valuation',
    date: 'June 6, 2024',
    tags: ['Article', 'Research'],
    featuredImage: false
  }
]

const News = () => {
  // Separate featured post from regular posts
  const featuredPost = newsItems.find(item => item.featuredImage)
  const regularPosts = newsItems.filter(item => !item.featuredImage)

  return (
    <div className={styles.newsSection}>
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <h3 className={styles.blockTitle}>News & Updates</h3>
          <div className={styles.titleDivider}></div>
          <Link href="/news" className={styles.viewAllLink}>Read All News</Link>
        </div>

        <div className={styles.newsGrid}>
          <div className={styles.featuredColumn}>
            {featuredPost && (
              <div className={styles.featuredPost}>
                <div className={styles.featuredImageWrapper}>
                  <Link href={`/news/${featuredPost.id}`}>
                    <Image 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      width={700} 
                      height={430} 
                      className={styles.featuredImage}
                    />
                  </Link>
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.postDate}>
                      <FaCalendarAlt className={styles.metaIcon} />
                      <Link href={`/news/date/${featuredPost.date}`}>{featuredPost.date}</Link>
                    </span>
                    <span className={styles.postTags}>
                      <FaTag className={styles.metaIcon} />
                      {featuredPost.tags.map((tag, index) => (
                        <React.Fragment key={index}>
                          <Link href={`/news/tag/${tag.toLowerCase()}`}>{tag}</Link>
                          {index < featuredPost.tags.length - 1 && <span>, </span>}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                  <h3 className={styles.postTitle}>
                    <Link href={`/news/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h3>
                </div>
              </div>
            )}
          </div>

          <div className={styles.regularColumn}>
            {regularPosts.map((post, index) => (
              <div key={index} className={styles.regularPost}>
                <div className={styles.postThumbnail}>
                  <Link href={`/news/${post.id}`}>
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={150} 
                      height={150} 
                      className={styles.thumbnailImage}
                    />
                  </Link>
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.postDate}>
                      <FaCalendarAlt className={styles.metaIcon} />
                      <Link href={`/news/date/${post.date}`}>{post.date}</Link>
                    </span>
                    <span className={styles.postTags}>
                      <FaTag className={styles.metaIcon} />
                      {post.tags.map((tag, index) => (
                        <React.Fragment key={index}>
                          <Link href={`/news/tag/${tag.toLowerCase()}`}>{tag}</Link>
                          {index < post.tags.length - 1 && <span>, </span>}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                  <h3 className={styles.postTitle}>
                    <Link href={`/news/${post.id}`}>{post.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default News