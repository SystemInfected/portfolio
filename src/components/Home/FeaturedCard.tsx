import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import Link from 'next/link'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { font, color, breakpoint, components } from '../../../styles/variables'
import featuredData from '../../../data/featuredData.json'

gsap.registerPlugin(ScrollTrigger)

const FeaturedCard = (props: { work: string | number }) => {
	const { work } = props
	const featuredCardRef = useRef<HTMLDivElement>(null)
	const cardData = featuredData[work][0]
	const [deviceMotion, setDeviceMotion] = useState(false)

	const imagePos = {}

	cardData.images.map(
		(
			image: { url: string; position: string; size: string; zoomValue: number },
			index: number
		) => {
			imagePos[index] = {}
			if (image.position === 'center') {
				imagePos[index].marginLeft = 50
				imagePos[index].translateX = -50
			} else {
				imagePos[index].marginLeft = 0
				imagePos[index].translateX = image.position
			}
			imagePos[index].zoomValue = image.zoomValue
			return null
		}
	)

	useEffect(() => {
		if (featuredCardRef.current) {
			const cardRef = featuredCardRef.current
			gsap.fromTo(
				cardRef,
				{ autoAlpha: 0 },
				{
					autoAlpha: 1,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: cardRef,
						// markers: true,
						start: '50px 95%',
						end: 'top bottom',
					},
				}
			)
		}
	}, [])

	const animateCard = (xRotate: number, yRotate: number, action?: string) => {
		const xRotateDebug = document.querySelector<HTMLSpanElement>(
			'#xRotateDebug'
		)
		const yRotateDebug = document.querySelector<HTMLSpanElement>(
			'#yRotateDebug'
		)
		if (xRotateDebug && yRotateDebug) {
			xRotateDebug.innerText = xRotate.toString()
			yRotateDebug.innerText = yRotate.toString()
		}

		if (featuredCardRef.current) {
			const cardRef = featuredCardRef.current
			const title = cardRef.querySelector('h3')
			const tags = cardRef.querySelector('ul')
			const button = cardRef.querySelector('button')
			const images = cardRef.querySelectorAll('img')

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
							image.style.transform = `translateZ(0) translateX(${imagePos[i].translateX}%) rotate(0.01deg)`
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
							image.style.transform = `translateZ(${imagePos[i].zoomValue}px) translateX(${imagePos[i].translateX}%) rotate(0.01deg)`
						})
					}
					break
			}
		}
	}

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
	}, [])

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

				if (typeof DeviceOrientationEvent.requestPermission === 'function') {
					DeviceOrientationEvent.requestPermission()
						.then((permissionState) => {
							if (permissionState === 'granted') {
								window.addEventListener('deviceorientation', handleDeviceMotion)
							}
						})
						.catch(console.error)
				} else {
					window.addEventListener('deviceorientation', handleDeviceMotion)
				}
			}
		}
	}, [deviceMotion])

	return (
		<Link href={`/portfolio/${cardData.slug}`}>
			<a className='link-tag'>
				<CardWrapper ref={featuredCardRef}>
					<HeaderWrapper>
						<h3>{cardData.title}</h3>
						<ul>
							{cardData.tags.map((tag: string, index: number) => (
								<li key={index}>• {tag}</li>
							))}
						</ul>
					</HeaderWrapper>
					<CardImages>
						{cardData.images.map(
							(
								image: {
									url: string
									position: string
									size: string
									zoomValue: number
								},
								index: number
							) => {
								return (
									<img
										key={index}
										src={`images/${image.url}`}
										alt={cardData.title}
										style={{
											width: `${image.size}`,
											zIndex: 3 + index * 3,
											marginLeft: `${imagePos[index].marginLeft}%`,
											transform: `translateX(${imagePos[index].translateX}%)`,
										}}
									/>
								)
							}
						)}
					</CardImages>
					<CardButton>Read more</CardButton>
				</CardWrapper>
			</a>
		</Link>
	)
}

export default FeaturedCard

const CardWrapper = styled.div`
	align-items: center;
	backface-visibility: hidden;
	background: linear-gradient(
			rgba(0, 0, 0, 0.2) 0%,
			rgba(0, 0, 0, 0.15) 40%,
			rgba(0, 0, 0, 0) 70%,
			rgba(0, 0, 0, 0) 100%
		),
		rgba(${color.mainColorLightRGB}, 0.1);
	border-radius: 2em;
	box-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.2), 0 2em 5em rgba(0, 0, 0, 0.3);
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 2.5em;
	perspective: 1200px;
	transform-style: preserve-3d;
	min-height: min(60vh, 45em);
	width: 100%;
`

const HeaderWrapper = styled.div`
	padding: 2em 0;
	width: 100%;
	perspective: 1200px;
	transform-style: preserve-3d;
	h3 {
		backface-visibility: hidden;
		color: ${color.mainAccentColor};
		font-family: ${font.headingsFont};
		font-size: clamp(1.8rem, 2vw, 2.4rem);
		font-weight: 400;
		letter-spacing: 0.15em;
		text-align: center;
		text-transform: uppercase;
		transition: all 0.3s ease;
		width: 100%;
		@media screen and (max-width: ${breakpoint.tablet}) {
			font-size: clamp(2rem, 6vw, 2.6rem);
		}
	}
	ul {
		backface-visibility: hidden;
		margin-top: 2em;
		text-align: center;
		transition: transform 0.3s ease;
		width: 100%;
		li {
			color: ${color.textLight};
			display: inline-block;
			font-size: clamp(1rem, 1vw, 1.2rem);
			font-weight: 700;
			letter-spacing: 0.1em;
			line-height: 1.6;
			margin: 0 0.5em;
			text-transform: uppercase;
			@media screen and (max-width: ${breakpoint.tablet}) {
				font-size: 1.2rem;
			}
		}
	}
`

const CardButton = styled.button`
	${components.secondaryButton}
	border-color: ${color.mainAccentColor};
	color: ${color.mainAccentColor};
	margin: 2.5em 0;
	position: relative;
`

const CardImages = styled.div`
	perspective: 1200px;
	transform-style: preserve-3d;
	height: auto;
	margin: 0 1em;
	position: relative;
	width: calc(100% - 2em);
	img {
		display: block;
		backface-visibility: visible;
		bottom: 0;
		position: absolute;
		transition: transform 0.3s ease;
		&:first-child {
			position: relative;
		}
	}
`
