import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { gsap } from 'gsap'
import dynamic from 'next/dynamic'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import { useMyContext } from '../Context/ContextProvider'

import { color, font, breakpoint, components } from '../../../styles/variables'
import IllustrationForeground from '../../assets/svg/portrait_illustration_foreground.svg'
import IllustrationEye from '../../assets/svg/portrait_illustration_eye.svg'
import AnimatedEye from './AnimatedEye'
import { scrollToElement } from '../NavBar'

interface HeroProps {
	introDelay: number
}

const AnimatedNodes = dynamic(() => import('./AnimatedNodes'))

const Hero = ({ introDelay }: HeroProps) => {
	const { pageEnter } = useMyContext()

	useEffect(() => {
		const headerContainer: HTMLElement | null = document.querySelector(
			'#headerContainer'
		)
		const headerRow: HTMLElement | null = document.querySelector('#headerRow')
		const location: HTMLElement | null = document.querySelector('#location')
		const ctaWrapper: HTMLElement | null = document.querySelector('#ctaWrapper')

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
				delay: introDelay,
			})
			gsap.from(location, {
				y: -(locationPos.y + locationPos.height),
				delay: 0.3 + introDelay,
			})
			gsap.from(ctaWrapper, {
				y: -(ctaWrapperPos.y + ctaWrapperPos.height),
				delay: 0.6 + introDelay,
			})
		}
	}, [])

	return (
		<HeaderBg>
			<a id='hero' />
			<HeaderContainer id='headerContainer'>
				<HeaderWrapper id='headerWrapper'>
					<Header>
						<HeaderText
							id='headerRow'
							style={{ transform: 'translateY(0px)' }}
							className={pageEnter ? '' : 'animated'}
						>
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
							<span>
								Graphic Designer
								<br />
								Web Developer
							</span>
						</HeaderText>
					</Header>
					<Location id='location'>
						<LocationOnIcon fontSize='large' />
						Stockholm, Sweden
					</Location>
					<CTAWrapper id='ctaWrapper'>
						<a onClick={() => scrollToElement('featured')}>
							<CTA>See my work</CTA>
						</a>
					</CTAWrapper>
				</HeaderWrapper>
				<PortraitIllustration id='portraitIllustration'>
					<IllustrationEye />
					<AnimatedEye />
					<IllustrationForeground />
				</PortraitIllustration>
				<PortraitNodes id='portraitNodes'>
					<AnimatedNodes />
				</PortraitNodes>
			</HeaderContainer>
		</HeaderBg>
	)
}

export default Hero

const HeaderBg = styled.section`
	background: ${color.mainColorDark};
	display: flex;
	justify-content: center;
	width: 100%;
`

const HeaderContainer = styled.div`
	align-items: flex-end;
	display: flex;
	height: 100%;
	justify-content: center;
	position: relative;
	width: 100%;
`
const HeaderWrapper = styled.div`
	left: 50%;
	max-width: ${breakpoint.maxWidth};
	padding-left: max(4rem, env(safe-area-inset-left));
	pointer-events: none;
	position: absolute;
	top: 4rem;
	transform: translateX(-50%);
	width: 100%;
	z-index: 20;
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding-left: 2.5em;
		top: 2.5em;
	}
	@media (orientation: portrait) {
		width: 100%;
		left: auto;
		transform: none;
		padding-left: 0;
	}
`

const Header = styled.h1`
	color: ${color.mainAccentColor};
	font-family: ${font.headingsFont};
	font-size: clamp(2.5rem, 5.2vw, 10.4rem);
	font-weight: 450;
	letter-spacing: 0.02rem;
	line-height: 1.2;
	text-transform: uppercase;
	@media (orientation: portrait) {
		text-align: center;
		font-size: clamp(3.4rem, 10vw, 13rem);
	}
`

const HeaderText = styled.div`
	display: block;
	position: relative;
	overflow: hidden;
	height: 2.4em;
	span {
		display: block;
		height: 100%;
	}
	&.animated {
		span {
			animation-duration: 16s;
			animation-iteration-count: infinite;
			animation-name: ${() => rotatingHeader()};
			animation-delay: 6s;
		}
		&:nth-of-type(2) {
			span {
				animation-delay: 6.1s;
			}
		}
	}
`

const rotatingHeader = () => keyframes`
	3%{
    transform: translateY(-105%);
  }
	4%{
    transform: translateY(-105%);
  }
  13%{
    transform: translateY(-100%);
  }
  50%{ 
		transform: translateY(-100%);
	}
  53%{
		transform: translateY(-205%);
  }
  54%{
		transform: translateY(-205%);
  }
  63%{
		transform: translateY(-200%);
  }
  100%{
		transform: translateY(-200%);
  }
`

const Location = styled.h2`
	align-items: center;
	color: ${color.textLight};
	display: flex;
	font-family: ${font.headingsFont};
	font-size: clamp(2.5rem, 3vw, 5.2rem);
	font-weight: 200;
	letter-spacing: 0.08rem;
	line-height: 1.2;
	margin-top: 1em;
	@media (orientation: portrait) {
		width: 100%;
		justify-content: center;
	}
	svg {
		margin-right: 10px;
		font-size: clamp(1.8rem, 2.2vw, 4.2rem);
		align-self: center;
	}
`

const CTAWrapper = styled.div`
	pointer-events: auto;
	margin-top: 4em;
	z-index: 20;
`

const CTA = styled.button`
	background-color: ${color.mainAccentColor};
	color: ${color.mainColorDark};
	@media (orientation: portrait) {
		display: none;
	}
	${components.mainButton}
`

const Portrait = styled.div`
	align-items: flex-end;
	display: flex;
	height: calc(100vh - 60px);
	max-height: 1080px;
	overflow: hidden;
	@media (orientation: portrait) {
		max-height: none;
	}
`

const PortraitIllustration = styled(Portrait)`
	-webkit-user-select: none;
	@media screen and (max-width: 3000px) {
		width: 73%;
	}
	justify-content: flex-end;
	margin-right: 5px;
	position: relative;
	user-select: none;
	width: 68%;
	svg {
		flex-shrink: 0;
		height: clamp(80%, 70vw, 115%);
		position: absolute;
	}
	canvas {
		height: clamp(80%, 70vw, 115%);
		position: absolute;
	}
	@media (orientation: portrait) {
		width: 50%;
	}
`

const PortraitNodes = styled(Portrait)`
	-webkit-user-select: none;
	@media screen and (max-width: 3000px) {
		width: 27%;
	}
	background: radial-gradient(
		ellipse at left 90%,
		rgba(${color.mainColorLightRGB}, 0.25) 0%,
		rgba(${color.mainColorLightRGB}, 0.16) 6%,
		rgba(0, 0, 0, 0) 38%
	);
	background-position: left bottom;
	background-repeat: no-repeat;
	background-size: 170% 95%;
	justify-content: flex-start;
	margin-left: 5px;
	user-select: none;
	width: 32%;
	canvas {
		flex-shrink: 0;
		height: clamp(80%, 70vw, 115%);
	}
	@media (orientation: portrait) {
		width: 50%;
	}
`
