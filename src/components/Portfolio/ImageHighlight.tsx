import { gsap } from 'gsap'
import Image from 'next/image'
import React, { useEffect } from 'react'

import styles from '@/styles/Portfolio/Header.module.scss'

interface ImageHighlightProps {
  url: string
  title: string
  callback: () => void
}

const ImageHighlight = ({ url, title, callback }: ImageHighlightProps) => {
  useEffect(() => {
    const imageContainer = document.querySelector('#image-highlight-container')
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.5,
      immediateRender: false,
    })

    gsap.fromTo(
      imageContainer,
      {
        autoAlpha: 0,
      },
      { autoAlpha: 1 }
    )
  }, [])

  return (
    <div
      className={styles.imageContainer}
      id='image-highlight-container'
      onClick={() => callback()}
    >
      <div className={styles.image}>
        <Image src={url} alt={title} fill style={{ objectFit: 'contain' }} />
      </div>
    </div>
  )
}

export default ImageHighlight
