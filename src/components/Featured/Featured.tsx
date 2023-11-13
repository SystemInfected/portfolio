import Link from 'next/link'
import React from 'react'

import featuredData from '@/app/data/featuredData.json'
import styles from '@/styles/Home/Featured.module.scss'

import SectionHeader from '../SectionHeader'
import ClientsList from './ClientsList'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
    <section className={`section ${styles.section}`}>
      <a id='featured' />
      <div className={styles.featureSection}>
        <SectionHeader>Featured projects</SectionHeader>
        <div className={styles.featuredContainer}>
          {Object.values(featuredData).map((data) => (
            <FeaturedCard key={data.slug} cardData={data} />
          ))}
        </div>
        <div className={styles.centeredSection}>
          <Link href='/portfolio/' className='link-tag'>
            <button className={styles.viewAllProjects}>
              View more projects
            </button>
          </Link>
        </div>
        <SectionHeader>Some clients I&apos;ve worked with</SectionHeader>
        <ClientsList />
      </div>
    </section>
  )
}

export default Featured
