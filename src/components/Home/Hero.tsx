import React, { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import LocationOnIcon from '@material-ui/icons/LocationOn'
import { color, font, breakpoint, components } from '../../../styles/variables'
import IllustrationForeground from '../../assets/svg/portrait_illustration_foreground.svg'
import IllustrationEye from '../../assets/svg/portrait_illustration_eye.svg'
import AnimatedNodes from './AnimatedNodes'
import AnimatedEye from './AnimatedEye'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
	useEffect(() => {
		const headerContainer: HTMLElement | null = document.querySelector(
			'#headerContainer'
		)
		const graphicDesigner: HTMLElement | null = document.querySelector(
			'#graphicDesigner'
		)
		const webDeveloper: HTMLElement | null = document.querySelector(
			'#webDeveloper'
		)
		const location: HTMLElement | null = document.querySelector('#location')
		const ctaWrapper: HTMLElement | null = document.querySelector('#ctaWrapper')

		if (
			headerContainer &&
			graphicDesigner &&
			webDeveloper &&
			location &&
			ctaWrapper
		) {
			const headerContainerPos = headerContainer.getBoundingClientRect()
			const graphicDesignerPos = graphicDesigner.getBoundingClientRect()
			const webDeveloperPos = webDeveloper.getBoundingClientRect()
			const locationPos = location.getBoundingClientRect()
			const ctaWrapperPos = ctaWrapper.getBoundingClientRect()

			gsap.defaults({
				ease: 'power2.out',
				duration: 0.8,
			})

			gsap.from(graphicDesigner, {
				y: -(graphicDesignerPos.y + graphicDesignerPos.height),
			})
			gsap.from(webDeveloper, {
				y: -(webDeveloperPos.y + webDeveloperPos.height),
				delay: 0.3,
			})
			gsap.from(location, {
				y: -(locationPos.y + locationPos.height),
				delay: 0.6,
			})
			gsap.from(ctaWrapper, {
				y: -(ctaWrapperPos.y + ctaWrapperPos.height),
			})
			gsap.to('#headerWrapper', {
				position: 'fixed',
				delay: 1.4,
				duration: 0,
			})

			gsap.fromTo(
				graphicDesigner,
				{ y: 0 },
				{
					y: -(headerContainerPos.height / 3),
					autoAlpha: 0,
					immediateRender: false,
					scrollTrigger: {
						trigger: '#headerContainer',
						start: '10% top',
						end: '35% 5%',
						scrub: 1.5,
					},
				}
			)
			gsap.fromTo(
				webDeveloper,
				{ y: 0 },
				{
					y: -(headerContainerPos.height / 3),
					autoAlpha: 0,
					immediateRender: false,
					scrollTrigger: {
						trigger: '#headerContainer',
						start: '18% top',
						end: '35% 5%',
						scrub: 1.5,
					},
				}
			)
			gsap.fromTo(
				location,
				{ y: 0 },
				{
					y: -(headerContainerPos.height / 3),
					autoAlpha: 0,
					immediateRender: false,
					scrollTrigger: {
						trigger: '#headerContainer',
						start: '26% top',
						end: '35% 5%',
						scrub: 1.5,
					},
				}
			)
			gsap.fromTo(
				ctaWrapper,
				{ y: 0 },
				{
					y: -(headerContainerPos.height / 3),
					autoAlpha: 0,
					immediateRender: false,
					scrollTrigger: {
						trigger: '#headerContainer',
						start: '10% top',
						end: '35% 5%',
						scrub: 1.5,
					},
				}
			)
		}
		gsap.from('#portraitIllustration svg, #portraitIllustration canvas', {
			duration: 1.4,
			yPercent: 10,
		})
		gsap.from('#portraitNodes canvas', {
			duration: 1.4,
			yPercent: 10,
		})
	}, [])

	return (
		<HeaderBg>
			<HeaderContainer id='headerContainer'>
				<HeaderWrapper id='headerWrapper'>
					<Header>
						<span id='graphicDesigner' style={{ transform: 'translateY(0px)' }}>
							Graphic Designer
						</span>
						<span id='webDeveloper' style={{ transform: 'translateY(0px)' }}>
							Web Developer
						</span>
					</Header>
					<Location id='location'>
						<LocationOnIcon fontSize='large' />
						Stockholm, Sweden
					</Location>
					<CTAWrapper id='ctaWrapper'>
						<CTA>See my work</CTA>
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
	span {
		display: block;
		position: relative;
	}
`

const Location = styled.h2`
	align-items: center;
	color: ${color.mainColorLight};
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
	}
`

const CTAWrapper = styled.div`
	pointer-events: auto;
	position: fixed;
	right: max(4rem, env(safe-area-inset-left));
	top: 1.4rem;
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
		width: 65%;
	}
	justify-content: flex-end;
	margin-right: 5px;
	position: relative;
	user-select: none;
	width: 60%;
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
		width: 35%;
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
	width: 40%;
	canvas {
		flex-shrink: 0;
		height: clamp(80%, 70vw, 115%);
	}
	@media (orientation: portrait) {
		width: 50%;
	}
`
