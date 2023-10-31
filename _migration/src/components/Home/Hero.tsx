'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import styles from '@/styles/Home/Hero.module.scss'
import IllustrationForeground from '../../assets/hero/IllustrationForeground'
import IllustrationEye from '../../assets/hero/IllustrationEye'
import AnimatedEye from './AnimatedEye'
import AnimatedNodes from './AnimatedNodes'
import { scrollToElement } from '../NavBar'

const Hero = () => {
	useEffect(() => {
		let ctx = gsap.context(() => {
			const headerContainer: HTMLElement | null =
				document.querySelector('#headerContainer')
			const headerRow: HTMLElement | null = document.querySelector('#headerRow')
			const location: HTMLElement | null = document.querySelector('#location')
			const ctaWrapper: HTMLElement | null =
				document.querySelector('#ctaWrapper')

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
						<a onClick={() => scrollToElement('featured')}>
							<button className={styles.cta}>See my work</button>
						</a>
					</div>
				</div>
				<div className={styles.portraitIllustration} id='portraitIllustration'>
					<IllustrationEye />
					<AnimatedEye />
					<IllustrationForeground />
				</div>
				<div className={styles.portraitNodes} id='portraitNodes'>
					<AnimatedNodes />
				</div>
			</div>
		</section>
	)
}

export default Hero
