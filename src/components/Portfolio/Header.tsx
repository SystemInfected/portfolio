import React, { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { breakpoint, color, font } from '../../../styles/variables'

interface HeaderProps {
	title: string
	tags: string
	responsibilities: string
	images: [string]
}

const Header = ({ title, responsibilities, tags, images }: HeaderProps) => {
	const tagArr = tags.split(', ')
	const responsibilitiesArr = responsibilities
		? responsibilities.split(', ')
		: []

	useEffect(() => {
		gsap.defaults({
			ease: 'power2.out',
			duration: 1,
		})

		const images = document.querySelector('#images')
		if (images) {
			gsap.from(images, {
				opacity: 0,
			})
			gsap.from(images.querySelectorAll('img'), {
				x: '300px',
				delay: 0.1,
				stagger: 0.2,
			})
		}
	}, [])

	return (
		<Section>
			<HeaderSection>
				<HeaderWrapper>
					<h1>{title}</h1>
					<ul>
						{tagArr.map((tag, index) => {
							return <li key={index}>• {tag}</li>
						})}
						{responsibilitiesArr.length > 0 ? <h3>Responsibilities:</h3> : ''}

						{responsibilitiesArr.map((tag, index) => {
							return <li key={index}>• {tag}</li>
						})}
					</ul>
				</HeaderWrapper>
				<Images id='images'>
					{images.map((img, index) => {
						return <img key={index} src={`../images/${img}`} alt={title} />
					})}
				</Images>
			</HeaderSection>
		</Section>
	)
}

export default Header

const Section = styled.section`
	background: linear-gradient(
			320deg,
			rgba(0, 0, 0, 0.4) 0%,
			rgba(0, 0, 0, 0.35) 40%,
			rgba(0, 0, 0, 0) 100%
		),
		rgba(${color.mainColorDarkRGB}, 0.75);
	display: flex;
	justify-content: center;
	width: 100%;
`

const HeaderSection = styled.div`
	max-width: ${breakpoint.maxWidth};
	height: 70vh;
	padding: 0 max(4rem, env(safe-area-inset-left));
	padding-bottom: 5em;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 2.5em;
		padding-bottom: 5em;
	}
	@media (orientation: portrait) {
		padding-top: 5em;
		height: 75vh;
		align-items: flex-start;
		flex-direction: column;
	}
`

const HeaderWrapper = styled.div`
	width: 40%;
	@media (orientation: portrait) {
		width: 100%;
	}
	h1 {
		color: ${color.mainAccentColor};
		font-family: ${font.headingsFont};
		font-size: clamp(3.6rem, 4.8vw, 8rem);
		font-weight: 450;
		letter-spacing: 0.02rem;
		line-height: 1.2;
		text-transform: uppercase;
		@media (orientation: portrait) {
			font-size: clamp(3.8rem, 8vw, 10rem);
		}
	}
	ul {
		padding-top: 1em;
		width: 80%;
		color: ${color.textLight};
		display: inline-block;
		font-size: clamp(1rem, 1vw, 1.2rem);
		font-weight: 700;
		letter-spacing: 0.1em;
		line-height: 1.6;
		text-transform: uppercase;
		h3 {
			font-size: 1em;
			color: ${color.mainAccentColor};
			margin-top: 2em;
			display: block;
		}
		@media (orientation: portrait) {
			width: 100%;
			font-size: 1.2rem;
		}
		li {
			display: inline-block;
			margin-right: 1em;
		}
	}
`

const Images = styled.div`
	width: 50%;
	height: 60vh;
	position: relative;
	@media (orientation: portrait) {
		width: 100%;
	}
	img {
		position: absolute;
		right: 10%;
		bottom: -30%;
		&:nth-of-type(1) {
			height: clamp(75%, 40vw, 100%);
			@media (orientation: portrait) {
				height: clamp(90%, 80vw, 120%);
				//right: 20%;
			}
		}
		&:nth-of-type(2) {
			height: clamp(35%, 20vw, 50%);
			right: -2%;
			@media (orientation: portrait) {
				height: clamp(65%, 40vw, 70%);
				//right: -4%;
			}
		}
	}
`
