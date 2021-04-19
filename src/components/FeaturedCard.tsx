import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { font, color, breakpoint } from '../../styles/variables'
import { data as featuredData } from '../data/featuredData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const FeaturedCard = (props: { work: string | number }) => {
	const featuredCardRef = useRef<HTMLDivElement>(null)
	const cardData = featuredData[props.work][0]
	const [deviceMotion, setDeviceMotion] = useState(false)

	let imagePos = {}

	cardData.images.map((image: any, index: number) => {
		imagePos[index] = {}
		if (image.position === 'center') {
			imagePos[index].marginLeft = 50
			imagePos[index].translateX = -50
		} else {
			imagePos[index].marginLeft = -50
			imagePos[index].translateX = image.position
		}
		imagePos[index].zoomValue = image.zoomValue
	})

	useEffect(() => {
		if (featuredCardRef.current) {
			const cardRef = featuredCardRef.current
			gsap.fromTo(
				cardRef,
				{ y: 100, autoAlpha: 0 },
				{
					y: 0,
					autoAlpha: 1,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: cardRef,
						//markers: true,
						start: '-100px 95%',
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
							image.style.transform = `translateZ(0) translateX(${imagePos[i].translateX}%)`
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
							image.style.transform = `translateZ(${imagePos[i].zoomValue}px) translateX(${imagePos[i].translateX}%)`
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

			//WEB MOTION
			cardRef.addEventListener('mousemove', (e) => {
				let cardClientRect = cardRef.getBoundingClientRect()
				let xAxis =
					(cardClientRect.x + cardClientRect.width / 2 - e.x) / axisDivider
				let yAxis =
					(cardClientRect.y + cardClientRect.height / 2 - e.y) / axisDivider

				animateCard(xAxis, yAxis)
			})

			cardRef.addEventListener('mouseenter', (e) => {
				animateCard(0, 0, 'start')
			})

			cardRef.addEventListener('mouseleave', (e) => {
				animateCard(0, 0, 'stop')
			})
		}
	}, [])

	//MOBILE MOTION
	useEffect(() => {
		if (featuredCardRef.current) {
			const cardRef = featuredCardRef.current
			if (window.DeviceOrientationEvent) {
				ScrollTrigger.create({
					trigger: cardRef,
					start: 'top 50%',
					end: 'bottom 50%',
					//markers: true,
					onEnter: () => {
						setDeviceMotion((currDeviceMotion) => true)
					},
					onLeave: () => {
						setDeviceMotion((currDeviceMotion) => false)
					},
					onEnterBack: () => {
						setDeviceMotion((currDeviceMotion) => true)
					},
					onLeaveBack: () => {
						setDeviceMotion((currDeviceMotion) => false)
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
								let xAxis = event.gamma / axisDivider
								if (xAxis > 20 || xAxis < -20) {
									xAxis = event.gamma / (axisDivider * 5)
								}
								let yAxis = event.beta / axisDivider
								if (yAxis > 20 || yAxis < -20) {
									yAxis = event.beta / (axisDivider * 5)
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
				{cardData.images.map((image: any, index: number) => {
					return (
						<img
							key={index}
							src={`images/${image.url}`}
							style={{
								width: `${image.size}`,
								zIndex: 3 + index * 3,
								marginLeft: `${imagePos[index].marginLeft}%`,
								transform: `translateX(${imagePos[index].translateX}%)`,
							}}
						/>
					)
				})}
			</CardImages>
			<CardButton>Read more</CardButton>
		</CardWrapper>
	)
}

export default FeaturedCard

const CardWrapper = styled.div`
	cursor: pointer;
	transform-style: preserve-3d;
	perspective: 1000px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 2.5em;
	width: 100%;
	min-height: min(60vh, 45em);
	border-radius: 2em;
	background: linear-gradient(
			rgba(0, 0, 0, 0.2) 0%,
			rgba(0, 0, 0, 0.15) 40%,
			rgba(0, 0, 0, 0) 70%,
			rgba(0, 0, 0, 0) 100%
		),
		rgba(${color.mainColorLightRGB}, 0.1);
	box-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.2), 0 2em 5em rgba(0, 0, 0, 0.3);
	p {
		width: 100%;
		font-size: 1.6rem;
		padding: 2em 1em 1em;
		line-height: 1.5;
		letter-spacing: 0.03em;
		color: ${color.textLight};
		text-align: center;
	}
`

const HeaderWrapper = styled.div`
	padding: 2em 0;
	width: 100%;
	h3 {
		width: 100%;
		text-align: center;
		color: ${color.mainAccentColor};
		font-family: ${font.headingsFont};
		font-size: clamp(1.8rem, 2vw, 2.4rem);
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		transition: all 0.3s ease;
		@media screen and (max-width: ${breakpoint.tablet}) {
			font-size: clamp(2rem, 6vw, 2.6rem);
		}
	}
	ul {
		width: 100%;
		text-align: center;
		margin-top: 2em;
		transition: transform 0.3s ease;
		li {
			color: ${color.textLight};
			font-size: clamp(1rem, 1vw, 1.2rem);
			font-weight: 700;
			letter-spacing: 0.1em;
			line-height: 1.6;
			text-transform: uppercase;
			margin: 0 0.5em;
			display: inline-block;
			@media screen and (max-width: ${breakpoint.tablet}) {
				font-size: 1.2rem;
			}
		}
	}
`

const CardButton = styled.button`
	position: relative;
	background-color: ${color.mainAccentColor};
	color: ${color.mainColorDark};
	border: none;
	padding: 1em 2.5em;
	margin: 2.5em 0;
	font-size: 1.2rem;
	letter-spacing: 0.1em;
	cursor: pointer;
	border-radius: 2em;
	font-weight: 800;
	text-transform: uppercase;
	box-shadow: 0 0.2em 0.2em rgba(0, 0, 0, 0.5);
	transition: transform ease-out 0.3s;
	&:before {
		left: 0;
		top: 0;
		position: absolute;
		content: '';
		border-radius: 2em;
		width: 100%;
		height: 100%;
		box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.3);
		opacity: 0;
		transition: opacity ease-out 0.15s;
	}
	&:hover,
	&:focus {
		transform: scale(1.1);
		&:before {
			opacity: 1;
		}
	}
`

const CardImages = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	height: 100%;
	width: calc(100% - 2em);
	margin: 2em 0 1em;
	img {
		transition: transform 0.3s ease;
	}
`
