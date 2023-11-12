import Image from 'next/image'
import React from 'react'

import { PortfolioDataProps } from '@/app/portfolio/page'
import styles from '@/styles/Portfolio/PortfolioCard.module.scss'

interface PortfolioCardProps {
  data: PortfolioDataProps
}

const PortfolioCard = React.forwardRef<HTMLDivElement, PortfolioCardProps>(
  (props: PortfolioCardProps, ref) => {
    const { data } = props
    const tagArr = data.tags.split(', ').slice(0, 2)
    return (
      <div className={styles.portfolioCardWrapper} ref={ref}>
        <h3>{data.title}</h3>
        <ul>
          {tagArr.map((tag, index) => (
            <li key={index}>• {tag}</li>
          ))}
        </ul>
        <div className={styles.portfolioImages}>
          {data.images.map((img, index) => {
            return (
              <div
                key={index}
                className={styles.image}
                style={{ aspectRatio: img.aspectRatio }}
              >
                <Image
                  src={`/thumbs/${img.src}`}
                  alt={data.title}
                  sizes='(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw'
                  quality={80}
                  fill
                  priority
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)

PortfolioCard.displayName = 'PortfolioCard'

export default PortfolioCard
