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
            return <img key={index} src={`/thumbs/${img}`} alt={data.title} />
          })}
        </div>
      </div>
    )
  }
)

PortfolioCard.displayName = 'PortfolioCard'

export default PortfolioCard
