'use client'

import { gsap } from 'gsap'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import styles from '@/styles/Portfolio/Header.module.scss'

import ImageHighlight from './ImageHighlight'

interface HeaderProps {
  title: string
  tags: string
  responsibilities: string
  images: [{ src: string; aspectRatio: string }]
}

const Header = ({ title, responsibilities, tags, images }: HeaderProps) => {
  const [showImage, setShowImage] = useState('')

  const renderImageHighlight = () => {
    if (showImage) {
      return (
        <ImageHighlight
          url={showImage}
          title={title}
          callback={() => setShowImage('')}
        />
      )
    }
    return null
  }

  useEffect(() => {
    if (showImage) {
      document.body.classList.add('lock-scroll')
    } else {
      document.body.classList.remove('lock-scroll')
    }
  }, [showImage])

  const tagArr = tags.split(', ')
  const responsibilitiesArr = responsibilities
    ? responsibilities.split(', ')
    : []

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.defaults({
        ease: 'power2.out',
        duration: 1,
        immediateRender: false,
      })

      const images = document.querySelector('#images')
      if (images) {
        gsap.fromTo(
          images,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
        gsap.from(images.querySelectorAll('img'), {
          x: '300px',
          delay: 0.1,
          stagger: 0.2,
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section className={styles.section}>
        <div className={styles.headerSection}>
          <div className={styles.headerWrapper}>
            <h1>{title}</h1>
            <ul>
              {tagArr.map((tag, index) => {
                return <li key={index}>• {tag}</li>
              })}
            </ul>
            {responsibilitiesArr.length > 0 ? (
              <>
                <h3>Responsibilities:</h3>
                <ul>
                  {responsibilitiesArr.map((tag, index) => {
                    return <li key={index}>• {tag}</li>
                  })}
                </ul>
              </>
            ) : (
              ''
            )}
          </div>
          <div className={styles.images} id='images'>
            {images.map((img, index) => {
              return (
                <div
                  key={index}
                  className={styles.image}
                  style={{ aspectRatio: img.aspectRatio }}
                >
                  <Image
                    src={`/${img.src}`}
                    alt={title}
                    onClick={() => setShowImage(`/${img.src}`)}
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
      </section>
      {renderImageHighlight()}
    </>
  )
}

export default Header
