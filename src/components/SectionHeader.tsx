import React from 'react'

import styles from '@/styles/SectionHeader.module.scss'

interface SectionHeaderProps {
  children: string
  centered?: boolean
}

const SectionHeader = ({ children, centered }: SectionHeaderProps) => {
  if (centered) {
    return <h2 className={styles.headerCentered}>{children}</h2>
  }
  return <h2 className={styles.header}>{children}</h2>
}

export default SectionHeader
