'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'

import styles from '@/styles/Home/About.module.scss'

import SectionHeader from '../SectionHeader'
import HistoryListItems from './HistoryListItems'
import SkillsListItems from './SkillsListItems'

gsap.registerPlugin(ScrollTrigger)

const SkillsAbout = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const professionalEvents = document.querySelectorAll('#professional')
      const personalEvents = document.querySelectorAll('#personal')
      const skillsGroup = document.querySelectorAll('.skillsBox')

      gsap.defaults({
        ease: 'power2.out',
        duration: 0.8,
      })

      professionalEvents.forEach((event) => {
        const eventDot = event.querySelector('#event-dot')
        gsap.from(event, {
          autoAlpha: 0,
          x: '-20px',
          duration: 0.4,
          scrollTrigger: {
            trigger: event,
            start: '50% 85%',
            // markers: true,
          },
        })
        if (eventDot) {
          gsap.from(eventDot, {
            autoAlpha: 0,
            scale: 0.5,
            x: '20px',
            duration: 0.4,
            scrollTrigger: {
              trigger: eventDot,
              start: '50% 85%',
            },
          })
        }
      })
      personalEvents.forEach((event) => {
        const eventDot = event.querySelector('#event-dot')
        gsap.from(event, {
          autoAlpha: 0,
          x: '20px',
          duration: 0.4,
          scrollTrigger: {
            trigger: event,
            start: '50% 85%',
            // markers: true,
          },
        })
        if (eventDot) {
          gsap.from(eventDot, {
            autoAlpha: 0,
            scale: 0.5,
            x: '-20px',
            duration: 0.4,
            scrollTrigger: {
              trigger: eventDot,
              start: '50% 85%',
            },
          })
        }
      })

      skillsGroup.forEach((group) => {
        gsap.fromTo(
          group,
          { y: 100, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: group,
              // markers: true,
              start: '-100px 95%',
              end: 'top bottom',
            },
          }
        )
        gsap.fromTo(
          group.querySelectorAll('.skill'),
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 0.4,
            stagger: 0.1,
            scrollTrigger: {
              trigger: group,
              start: '-100px 86%',
              end: 'top bottom',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.section}>
      <a id='skills' />
      <div className={styles.skillsAboutSection}>
        <div className={styles.about}>
          <SectionHeader>Milestones</SectionHeader>
          <ul className={styles.historyList}>
            <HistoryListItems />
          </ul>
        </div>
        <div className={styles.skills}>
          <SectionHeader>My skills</SectionHeader>
          <ul className={styles.skillsList}>
            <SkillsListItems />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SkillsAbout
