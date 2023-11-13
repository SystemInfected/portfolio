'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import styles from '@/styles/NavBar.module.scss'
import CloseIcon from '@mui/icons-material/Close'
import MoreVertIcon from '@mui/icons-material/MoreVert'

gsap.registerPlugin(ScrollTrigger)

interface NavBarProps {
  locked: boolean
  startpage: boolean
}

export const scrollToElement = (element: string) => {
  const titleElement = document.getElementById(element)
  if (titleElement) {
    setTimeout(() => {
      titleElement.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }
}

const NavBar = ({ locked, startpage }: NavBarProps) => {
  const [mobileMenuPos, setMobileMenuPos] = useState({ x: 0, y: 0 })
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    const navBar: HTMLElement | null = document.querySelector('#navBar')
    const navBarSpacer: HTMLElement | null =
      document.querySelector('#navBarSpacer')
    const headerContainer = document.querySelector('#headerContainer')
    const menuToggle: HTMLElement | null = document.querySelector('#menuToggle')
    const menuNav: HTMLElement | null = document.querySelector('#menuNav')
    const closeMenu: HTMLElement | null = document.querySelector('#closeMenu')
    let isNavBarFixed = false

    if (menuToggle) {
      const menuTogglePos = menuToggle.getBoundingClientRect()
      const mobileMenuPos = { x: 0, y: 0 }
      mobileMenuPos.x = menuTogglePos.x + menuTogglePos.width / 2
      mobileMenuPos.y = menuTogglePos.y + menuTogglePos.height / 2

      setMobileMenuPos(mobileMenuPos)
    }

    const toogleNavBar = (toogle: boolean) => {
      if (navBar && navBarSpacer) {
        if (toogle) {
          navBar.style.position = 'fixed'
          navBar.style.top = '0'
          navBarSpacer.style.marginTop = '60px'
        } else {
          navBar.style.position = 'relative'
          navBar.style.top = ''
          navBarSpacer.style.marginTop = '0px'
        }
      }
    }

    if (locked) {
      toogleNavBar(true)
    }
    window.addEventListener('scroll', () => {
      if (navBar && headerContainer) {
        if (!locked) {
          const navBarPos = navBar.getBoundingClientRect()
          const headerContainerPos = headerContainer.getBoundingClientRect()
          const headerBottom = headerContainerPos.y + headerContainerPos.height
          if (navBarPos.y <= 0 && headerBottom <= 0 && !isNavBarFixed) {
            isNavBarFixed = true
            toogleNavBar(true)
          } else if (headerBottom > 0 && isNavBarFixed) {
            isNavBarFixed = false
            toogleNavBar(false)
          }
        }
      }

      if (menuToggle) {
        const menuTogglePos = menuToggle.getBoundingClientRect()
        const mobileMenuPos = { x: 0, y: 0 }
        mobileMenuPos.x = menuTogglePos.x + menuTogglePos.width / 2
        mobileMenuPos.y = menuTogglePos.y + menuTogglePos.height / 2

        setMobileMenuPos(mobileMenuPos)
      }
    })

    window.addEventListener('resize', () => {
      if (navBar && headerContainer) {
        const navBarPos = navBar.getBoundingClientRect()
        const headerContainerPos = headerContainer.getBoundingClientRect()
        const headerBottom = headerContainerPos.y + headerContainerPos.height
        if (navBarPos.y <= 0 && headerBottom <= 0 && !isNavBarFixed) {
          isNavBarFixed = true
          toogleNavBar(true)
        } else if (headerBottom > 0 && isNavBarFixed) {
          isNavBarFixed = false
          toogleNavBar(false)
        }
      }

      if (menuToggle) {
        const menuTogglePos = menuToggle.getBoundingClientRect()
        const mobileMenuPos = { x: 0, y: 0 }
        mobileMenuPos.x = menuTogglePos.x + menuTogglePos.width / 2
        mobileMenuPos.y = menuTogglePos.y + menuTogglePos.height / 2

        setMobileMenuPos(mobileMenuPos)
      }
    })

    const mobileMenuPos = { x: 0, y: 0 }
    if (menuToggle && menuNav) {
      const menuNavLinks: NodeListOf<HTMLAnchorElement> | null =
        menuNav.querySelectorAll('a')
      let menuTogglePos = menuToggle.getBoundingClientRect()
      menuToggle.addEventListener('click', () => {
        menuTogglePos = menuToggle.getBoundingClientRect()
        mobileMenuPos.x = menuTogglePos.x + menuTogglePos.width / 2
        mobileMenuPos.y = menuTogglePos.y + menuTogglePos.height / 2

        setMobileMenuPos(mobileMenuPos)

        setMenuActive(true)
        menuToggle.style.display = 'none'
        document.body.classList.toggle('lock-scroll')

        tl.play(0)
      })
      menuNavLinks.forEach((link) => {
        link.addEventListener('click', () => {
          setMenuActive(false)
          setTimeout(() => {
            menuToggle.style.display = ''
          }, 300)
          document.body.classList.toggle('lock-scroll')
        })
      })
    }

    if (closeMenu && menuToggle) {
      closeMenu.addEventListener('click', () => {
        setMenuActive(false)
        setTimeout(() => {
          menuToggle.style.display = ''
        }, 300)
        document.body.classList.toggle('lock-scroll')
      })
    }

    const tl = gsap.timeline()
    tl.fromTo(
      '.mobile-menu-li',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        immediateRender: false,
      }
    )
  }, [locked])

  const renderHomeNavlink = (isOnStartpage: boolean) => {
    if (isOnStartpage) {
      return (
        <span onClick={() => scrollToElement('hero')} className='link-tag'>
          <h1 className={styles.logoTitle}>
            <span>&lt;</span>
            <span>Sebastian</span>
            <span>Widin</span>/<span>&gt;</span>
          </h1>
        </span>
      )
    }
    return (
      <Link href='/' className='link-tag'>
        <h1 className={styles.logoTitle}>
          <span>&lt;</span>
          <span>Sebastian</span>
          <span>Widin</span>/<span>&gt;</span>
        </h1>
      </Link>
    )
  }

  const renderSkillsNavlink = (isOnStartpage: boolean) => {
    if (isOnStartpage) {
      return (
        <span tabIndex={0} onClick={() => scrollToElement('skills')}>
          Skills
        </span>
      )
    }
    return <Link href='/#skills'>Skills</Link>
  }

  return (
    <>
      <ToastContainer style={{ fontSize: '1.5rem' }} />
      <section className={styles.navBg} id='navBar'>
        <nav className={styles.nav}>
          {renderHomeNavlink(startpage)}
          <ul className={styles.menu}>
            <li>
              <Link href='/portfolio/'>Projects</Link>
            </li>
            <li>{renderSkillsNavlink(startpage)}</li>
            <li>
              <span tabIndex={0} onClick={() => scrollToElement('contact')}>
                Contact
              </span>
            </li>
          </ul>
          <div className={styles.menuToggle} id='menuToggle'>
            <MoreVertIcon style={{ fontSize: '3rem' }} />
          </div>
        </nav>
      </section>
      <div className={styles.navBarSpacer} id='navBarSpacer' />
      <div
        className={styles.mobileNav}
        id='menuNav'
        style={{
          transition: menuActive
            ? 'clip-path ease-out 0.3s, opacity linear 0s 0s'
            : 'clip-path ease-out 0.3s, opacity linear 0s 0.3s',
          opacity: menuActive ? '1' : '0',
          pointerEvents: menuActive ? 'auto' : 'none',
          clipPath: `circle(${menuActive ? '200%' : '0%'} at ${
            mobileMenuPos.x
          }px ${mobileMenuPos.y}px)`,
        }}
      >
        <div className={styles.closeMobileMenu} id='closeMenu'>
          <CloseIcon style={{ fontSize: '3rem' }} />
        </div>
        <ul className={styles.mobileMenu}>
          <li className='mobile-menu-li'>
            <Link href='/portfolio/'>Projects</Link>
          </li>
          <li className='mobile-menu-li'>{renderSkillsNavlink(startpage)}</li>
          <li className='mobile-menu-li'>
            <span tabIndex={0} onClick={() => scrollToElement('contact')}>
              Contact
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
