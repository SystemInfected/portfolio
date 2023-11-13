import React from 'react'

import styles from '@/styles/Portfolio/Content.module.scss'

interface ContentProps {
  content: string
  title: string
  tech: string
  url: string | null
  source: string | null
}

const Content = ({ content, title, tech, url, source }: ContentProps) => {
  const techArr = tech.split(', ')
  const renderURL = () => {
    if (url) {
      if (url === 'none' || url === 'github') {
        return ''
      }
      return (
        <a href={url} target='_blank' rel='noreferrer'>
          <button className={styles.cta}>Visit {title}</button>
        </a>
      )
    }
    return (
      <button className={styles.cta} disabled>
        {title} is no longer available
      </button>
    )
  }

  return (
    <section className={styles.section}>
      <div className={styles.contentSection}>
        <div
          className={styles.contentWrapper}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className={styles.ctaWrapper}>
          <div className={styles.noGap}>
            <h3>Technologies used:</h3>
            <ul>
              {techArr.map((tag, index) => {
                return <li key={index}>{tag}</li>
              })}
            </ul>
          </div>
          <div>
            {renderURL()}
            {source ? (
              <a href={source} target='_blank' rel='noreferrer'>
                <button className={styles.cta}>
                  View {url === 'github' ? 'on GitHub' : 'source'}
                </button>
              </a>
            ) : (
              <button className={styles.cta} disabled>
                Source not available
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content
