import { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { color, font, breakpoint } from '../../styles/variables'
import IllustrationForeground from '../assets/svg/portrait_illustration_foreground.svg'
import IllustrationEye from '../assets/svg/portrait_illustration_eye.svg'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AnimatedNodes from './AnimatedNodes'
import AnimatedEye from './AnimatedEye'

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

		if (headerContainer && graphicDesigner && webDeveloper && location) {
			const headerContainerPos = headerContainer.getBoundingClientRect()
			const graphicDesignerPos = graphicDesigner.getBoundingClientRect()
			const webDeveloperPos = webDeveloper.getBoundingClientRect()
			const locationPos = location.getBoundingClientRect()

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
	width: 100%;
	display: flex;
	justify-content: center;
	background: ${color.mainColorDark};
`

const HeaderContainer = styled.div`
	width: 100%;
	max-width: ${breakpoint.maxWidth};
	height: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	position: relative;
`
const HeaderWrapper = styled.div`
	width: 100%;
	max-width: ${breakpoint.maxWidth};
	position: absolute;
	left: 50%;
	padding-left: env(safe-area-inset-left, 4rem);
	top: 4rem;
	transform: translateX(-50%);
	z-index: 20;
	pointer-events: none;
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
	font-size: clamp(2.5rem, 5.8vw, 8.4rem);
	font-weight: 450;
	text-transform: uppercase;
	letter-spacing: 0.02rem;
	line-height: 1.2;
	@media (orientation: portrait) {
		text-align: center;
		font-size: clamp(3.4rem, 10vw, 13rem);
	}
	span {
		position: relative;
		display: block;
	}
`

const Location = styled.h2`
	display: flex;
	align-items: center;
	color: ${color.mainColorLight};
	font-family: ${font.headingsFont};
	font-size: clamp(2.5rem, 3vw, 4.6rem);
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

const Portrait = styled.div`
	height: calc(100vh - 60px);
	display: flex;
	align-items: flex-end;
	overflow: hidden;
`

const PortraitIllustration = styled(Portrait)`
	width: 65%;
	justify-content: flex-end;
	margin-right: 5px;
	position: relative;
	-webkit-user-select: none;
	svg {
		height: clamp(80%, 70vw, 115%);
		flex-shrink: 0;
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
	width: 35%;
	justify-content: flex-start;
	margin-left: 5px;
	background: radial-gradient(
		ellipse at left 90%,
		rgba(${color.mainColorLightRGB}, 0.25) 0%,
		rgba(${color.mainColorLightRGB}, 0.16) 6%,
		rgba(0, 0, 0, 0) 38%
	);
	background-position: left bottom;
	background-size: 170% 95%;
	background-repeat: no-repeat;
	-webkit-user-select: none;
	canvas {
		height: clamp(80%, 70vw, 115%);
		flex-shrink: 0;
	}
	@media (orientation: portrait) {
		width: 50%;
	}
`
