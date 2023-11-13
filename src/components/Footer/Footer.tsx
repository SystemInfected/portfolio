'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'

import styles from '@/styles/Footer/Footer.module.scss'

import SectionHeader from '../SectionHeader'
import ContactForm from './ContactForm'
import SocialLinks from './SocialLinks'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const hand = document.getElementById('hand')

      gsap.defaults({
        ease: 'power2.out',
        duration: 0.8,
      })

      if (hand) {
        gsap.from(hand, {
          autoAlpha: 0,
          duration: 0.4,
          scrollTrigger: {
            trigger: hand,
            start: '0px 70%',
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.section}>
      <a id='contact' />
      <footer className={styles.footerSection}>
        <SectionHeader>Get in touch</SectionHeader>
        <p>
          Send me a message or check out any of the social networks below
          <span id='hand'>👋</span>
        </p>
        <div className={styles.footerContent}>
          <ContactForm />
          <SocialLinks />
        </div>
        <p id='copy' className={styles.copy}>
          Built with{' '}
          <a
            href='https://www.npmjs.com/package/react'
            target='_blank'
            rel='noreferrer'
          >
            react
          </a>
          ,{' '}
          <a
            href='https://www.npmjs.com/package/next'
            target='_blank'
            rel='noreferrer'
          >
            next
          </a>{' '}
          &{' '}
          <a
            href='https://www.npmjs.com/package/gsap'
            target='_blank'
            rel='noreferrer'
          >
            gsap
          </a>
          <br />
          <a
            href='https://github.com/SystemInfected/portfolio'
            target='_blank'
            rel='noreferrer'
          >
            Source on GitHub
          </a>
          <br />
          Copyright &copy; 2023, All rights reserved
        </p>
      </footer>
    </section>
  )
}

export default Footer
