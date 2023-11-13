'use client'

import { gsap } from 'gsap'
import Image from 'next/image'
import { useEffect } from 'react'

import portrait_illustration_foreground from '@/assets/hero/portrait_illustration_foreground.svg'
import styles from '@/styles/Home/Hero.module.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import IllustrationEye from '../../assets/hero/IllustrationEye'
import { scrollToElement } from '../NavBar'
import AnimatedEye from './AnimatedEye'
import AnimatedNodes from './AnimatedNodes'

const Hero = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const headerContainer: HTMLElement | null =
        document.querySelector('#headerContainer')
      const headerRow: HTMLElement | null = document.querySelector('#headerRow')
      const location: HTMLElement | null = document.querySelector('#location')
      const ctaWrapper: HTMLElement | null =
        document.querySelector('#ctaWrapper')
      const portraitIllustration: HTMLElement | null = document.querySelector(
        '#portraitIllustration'
      )
      const portraitNodes: HTMLElement | null =
        document.querySelector('#portraitNodes')

      if (headerContainer && headerRow && location && ctaWrapper) {
        const headerRowPos = headerRow.getBoundingClientRect()
        const locationPos = location.getBoundingClientRect()
        const ctaWrapperPos = ctaWrapper.getBoundingClientRect()

        gsap.defaults({
          ease: 'power2.out',
          duration: 0.8,
        })

        gsap.from(headerRow, {
          y: -(headerRowPos.y + headerRowPos.height),
        })
        gsap.from(location, {
          y: -(locationPos.y + locationPos.height),
          delay: 0.3,
        })
        gsap.from(ctaWrapper, {
          y: -(ctaWrapperPos.y + ctaWrapperPos.height),
          delay: 0.6,
        })
      }

      if (portraitIllustration && portraitNodes) {
        gsap.to(portraitIllustration, {
          '--animate-opacity': 0,
          duration: 0.5,
          delay: 0.5,
        })
        gsap.to(portraitNodes, {
          '--animate-opacity': 0,
          duration: 0.5,
          delay: 0.5,
        })
        gsap.to(portraitIllustration, {
          y: 0,
          duration: 0.4,
          delay: 0.5,
        })
        gsap.to(portraitNodes, {
          y: 0,
          duration: 0.4,
          delay: 0.5,
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.headerBg}>
      <a id='hero' />
      <div className={styles.headerContainer} id='headerContainer'>
        <div className={styles.headerWrapper} id='headerWrapper'>
          <h1 className={styles.header}>
            <div
              className={styles.headerText}
              id='headerRow'
              style={{ transform: 'translateY(0px)' }}
            >
              <span>
                Full-stack
                <br />
                Software Developer
              </span>
              <span>
                Graphic Designer
                <br />
                Web Developer
              </span>
              <span>
                Full-stack
                <br />
                Software Developer
              </span>
            </div>
          </h1>
          <h2 className={styles.location} id='location'>
            <LocationOnIcon fontSize='large' />
            Stockholm, Sweden
          </h2>
          <div className={styles.ctaWrapper} id='ctaWrapper'>
            <button
              className={styles.cta}
              onClick={() => scrollToElement('featured')}
            >
              See my work
            </button>
          </div>
        </div>
        <div
          className={styles.portraitIllustration}
          id='portraitIllustration'
          style={
            {
              transformOrigin: 'bottom right',
              transform: 'translateY(3%)',
              '--animate-opacity': 1,
            } as React.CSSProperties
          }
        >
          <IllustrationEye />
          <AnimatedEye />
          <Image
            src={portrait_illustration_foreground}
            priority
            alt='illustration foreground'
          />
        </div>
        <div
          className={styles.portraitNodes}
          id='portraitNodes'
          style={
            {
              transformOrigin: 'bottom left',
              transform: 'translateY(3%)',
              '--animate-opacity': 1,
            } as React.CSSProperties
          }
        >
          <AnimatedNodes />
        </div>
      </div>
    </section>
  )
}

export default Hero
