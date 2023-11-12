'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import styles from '@/styles/Home/Featured.module.scss'

gsap.registerPlugin(ScrollTrigger)

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>
}

const FeaturedCard = ({ cardData }: any) => {
  const featuredCardRef = useRef<HTMLDivElement>(null)
  const [deviceMotion, setDeviceMotion] = useState(false)

  const imagePos = useMemo(() => ({}), [])

  cardData.images.map(
    (
      image: {
        url: string
        position: string
        size: string
        zoomValue: number
        aspectRatio: string
      },
      index: number
    ) => {
      const position: any = imagePos
      position[index] = {}
      if (image.position === 'center') {
        position[index].marginLeft = 50
        position[index].translateX = -50
      } else {
        position[index].marginLeft = 0
        position[index].translateX = image.position
      }
      position[index].zoomValue = image.zoomValue
      return null
    }
  )

  useEffect(() => {
    if (featuredCardRef.current) {
      const cardRef = featuredCardRef.current
      gsap.fromTo(
        cardRef,
        { y: '200px', autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef,
            // markers: true,
            start: '-100px 95%',
            end: 'top bottom',
          },
        }
      )
    }
  }, [])

  const animateCard = useCallback(
    (xRotate: number, yRotate: number, action?: string) => {
      const xRotateDebug =
        document.querySelector<HTMLSpanElement>('#xRotateDebug')
      const yRotateDebug =
        document.querySelector<HTMLSpanElement>('#yRotateDebug')
      if (xRotateDebug && yRotateDebug) {
        xRotateDebug.innerText = xRotate.toString()
        yRotateDebug.innerText = yRotate.toString()
      }

      if (featuredCardRef.current) {
        const cardRef = featuredCardRef.current
        const title = cardRef.querySelector('h3')
        const tags = cardRef.querySelector('ul')
        const button = cardRef.querySelector('button')
        const images: NodeListOf<HTMLDivElement> = cardRef.querySelectorAll(
          '#featured-card-image'
        )

        switch (action) {
          case 'start':
            cardRef.style.transition = 'none'
            break
          case 'stop':
            cardRef.style.transition = 'all 0.3s ease'
            cardRef.style.transform = `rotateY(0deg) rotateX(0deg)`

            if (title && tags && button && images) {
              title.style.transform = 'translateZ(0)'
              tags.style.transform = 'translateZ(0)'
              button.style.transform = 'translateZ(0)'

              images.forEach((image, i) => {
                const position: any = imagePos
                image.style.transform = `translateZ(0) translateX(${position[i].translateX}%) rotate(0.01deg)`
              })
            }
            break
          default:
            cardRef.style.transform = `rotateY(${-xRotate}deg) rotateX(${yRotate}deg)`

            if (title && tags && button && images) {
              title.style.transform = 'translateZ(90px)'
              tags.style.transform = 'translateZ(50px)'
              button.style.transform = 'translateZ(90px)'

              images.forEach((image, i) => {
                const position: any = imagePos
                image.style.transform = `translateZ(${position[i].zoomValue}px) translateX(${position[i].translateX}%) rotate(0.01deg)`
              })
            }
            break
        }
      }
    },
    [imagePos]
  )

  const axisDivider = 15

  useEffect(() => {
    if (featuredCardRef.current) {
      const cardRef = featuredCardRef.current

      // WEB MOTION
      cardRef.addEventListener('mousemove', (e) => {
        const cardClientRect = cardRef.getBoundingClientRect()
        const xAxis =
          (cardClientRect.x + cardClientRect.width / 2 - e.x) / axisDivider
        const yAxis =
          (cardClientRect.y + cardClientRect.height / 2 - e.y) / axisDivider

        animateCard(xAxis, yAxis)
      })

      cardRef.addEventListener('mouseenter', () => {
        animateCard(0, 0, 'start')
      })

      cardRef.addEventListener('mouseleave', () => {
        animateCard(0, 0, 'stop')
      })
    }
  }, [animateCard])

  // MOBILE MOTION
  useEffect(() => {
    if (featuredCardRef.current) {
      const cardRef = featuredCardRef.current
      if (window.DeviceOrientationEvent) {
        ScrollTrigger.create({
          trigger: cardRef,
          start: 'top 50%',
          end: 'bottom 50%',
          // markers: true,
          onEnter: () => {
            setDeviceMotion(() => true)
          },
          onLeave: () => {
            setDeviceMotion(() => false)
          },
          onEnterBack: () => {
            setDeviceMotion(() => true)
          },
          onLeaveBack: () => {
            setDeviceMotion(() => false)
          },
        })
        const axisDivider = 4

        const handleDeviceMotion = (event: DeviceOrientationEvent) => {
          if (deviceMotion) {
            if (event.gamma && event.beta) {
              if (window.matchMedia('(orientation: portrait)').matches) {
                let xAxis = event.gamma / axisDivider
                if (xAxis > 20) {
                  xAxis = 20
                } else if (xAxis < -20) {
                  xAxis = -20
                }
                let yAxis = event.beta / axisDivider
                if (yAxis > 20) {
                  yAxis = 20
                } else if (yAxis < -20) {
                  yAxis = -20
                }
                cardRef.style.transition = 'none'

                animateCard(xAxis, yAxis)
              } else {
                let xAxis = event.beta / axisDivider
                if (xAxis > 20 || xAxis < -20) {
                  xAxis = event.beta / (axisDivider * 5)
                }
                let yAxis = event.gamma / axisDivider
                if (yAxis > 20 || yAxis < -20) {
                  yAxis = event.gamma / (axisDivider * 5)
                }
                cardRef.style.transition = 'none'

                animateCard(xAxis, yAxis)
              }
            }
          } else {
            animateCard(0, 0, 'stop')
            return () =>
              window.removeEventListener(
                'deviceorientation',
                handleDeviceMotion
              )
          }
          return null
        }

        const askPermission = () => {
          const requestPermission = (
            DeviceOrientationEvent as unknown as DeviceOrientationEventiOS
          ).requestPermission
          if (typeof requestPermission === 'function') {
            requestPermission()
              .then((permissionState) => {
                if (permissionState === 'granted') {
                  window.addEventListener(
                    'deviceorientation',
                    handleDeviceMotion
                  )
                }
              })
              .catch(console.error)
          } else {
            window.addEventListener('deviceorientation', handleDeviceMotion)
          }
          askPermission()
        }
      }
    }
  }, [animateCard, deviceMotion])

  return (
    <Link
      href={`/portfolio/${cardData.slug}`}
      className='link-tag'
      title={`Click here to more about the ${cardData.title} project!`}
    >
      <div className={styles.cardWrapper} ref={featuredCardRef}>
        <div className={styles.headerWrapper}>
          <h3>{cardData.title}</h3>
          <ul>
            {cardData.tags.map((tag: string, index: number) => (
              <li key={index}>• {tag}</li>
            ))}
          </ul>
        </div>
        <div className={styles.cardImages}>
          {cardData.images.map(
            (
              image: {
                url: string
                position: string
                size: string
                zoomValue: number
                aspectRatio: string
              },
              index: number
            ) => {
              const position: any = imagePos
              return (
                <div
                  key={index}
                  className={styles.image}
                  id='featured-card-image'
                  style={{
                    width: `${image.size}`,
                    zIndex: 3 + index * 3,
                    marginLeft: `${position[index].marginLeft}%`,
                    transform: `translateX(${position[index].translateX}%)`,
                    aspectRatio: image.aspectRatio,
                  }}
                >
                  <Image
                    src={`/thumbs/${image.url}`}
                    alt={cardData.title}
                    sizes='(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw'
                    quality={80}
                    fill
                    priority
                  />
                </div>
              )
            }
          )}
        </div>
        <button className={styles.cardButton}>Read more</button>
      </div>
    </Link>
  )
}

export default FeaturedCard
