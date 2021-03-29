import { useEffect } from 'react'
import styled from 'styled-components'
import { color, font, breakpoint } from '../../styles/variables'
import IllustrationForeground from '../assets/svg/portrait_illustration_foreground.svg'
import IllustrationEye from '../assets/svg/portrait_illustration_eye.svg'
import AnimatedNodes from './AnimatedNodes'
import AnimatedEye from './AnimatedEye'

const Hero = () => {
	useEffect(() => {
		const headerContainer = document.querySelector('#headerContainer')
		const graphicDesigner: HTMLElement | null = document.querySelector(
			'#graphicDesigner'
		)
		const webDeveloper: HTMLElement | null = document.querySelector(
			'#webDeveloper'
		)
		if (headerContainer && graphicDesigner && webDeveloper) {
			window.addEventListener('scroll', (e) => {
				let headerContainerPos = headerContainer.getBoundingClientRect()

				if (
					headerContainerPos.y < -80 &&
					headerContainerPos.y > -headerContainerPos.height
				) {
					graphicDesigner.style.transform = `translateY(${
						(headerContainerPos.y + 80) * 1.2
					}px)`
					graphicDesigner.style.opacity = '1'
				} else if (headerContainerPos.y < -headerContainerPos.height) {
					graphicDesigner.style.transform = 'translateY(-1000px)'
					graphicDesigner.style.opacity = '0'
				} else {
					graphicDesigner.style.transform = 'translateY(0)'
					graphicDesigner.style.opacity = '1'
				}
				if (
					headerContainerPos.y < -140 &&
					headerContainerPos.y > -headerContainerPos.height
				) {
					webDeveloper.style.transform = `translateY(${
						(headerContainerPos.y + 140) * 1.5
					}px)`
					webDeveloper.style.opacity = '1'
				} else if (headerContainerPos.y < -headerContainerPos.height) {
					webDeveloper.style.transform = 'translateY(-1000px)'
					webDeveloper.style.opacity = '0'
				} else {
					webDeveloper.style.transform = 'translateY(0)'
					webDeveloper.style.opacity = '1'
				}
			})
		}
	}, [])

	return (
		<HeaderContainer id="headerContainer">
			<Header>
				<span id="graphicDesigner" style={{ transform: 'translateY(0px)' }}>
					Graphic Designer
				</span>
				<span id="webDeveloper" style={{ transform: 'translateY(0px)' }}>
					Web Developer
				</span>
			</Header>
			<PortraitIllustration>
				<IllustrationEye />
				<AnimatedEye />
				<IllustrationForeground />
			</PortraitIllustration>
			<PortraitNodes>
				<AnimatedNodes />
			</PortraitNodes>
		</HeaderContainer>
	)
}

export default Hero

const HeaderContainer = styled.div`
	background: ${color.mainColorDark};
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	position: relative;
`

const Header = styled.h1`
	position: absolute;
	color: ${color.mainAccentColor};
	font-family: ${font.headingsFont};
	font-size: clamp(2.5rem, 5.8vw, 12rem);
	font-weight: 450;
	text-transform: uppercase;
	letter-spacing: 0.02rem;
	line-height: 1.2;
	z-index: 20;
	@media (orientation: portrait) {
		width: 100%;
		left: auto;
		text-align: center;
		font-size: clamp(4.2rem, 9.5vw, 13rem);
	}
	span {
		position: fixed;
		top: 0.5em;
		left: 0.5em;
		display: block;
		&:nth-child(2) {
			top: 1.7em;
		}
		@media (orientation: portrait) {
			left: auto;
			width: 100%;
			top: 1.5em;
			&:nth-child(2) {
				top: 2.7em;
			}
		}
	}
`

const Portrait = styled.div`
	height: 100vh;
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
		height: clamp(85%, 70vw, 115%);
		flex-shrink: 0;
		position: absolute;
	}
	canvas {
		height: clamp(85%, 70vw, 115%);
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
		ellipse at left bottom,
		rgba(${color.mainColorLightRGB}, 0.25) 0%,
		rgba(${color.mainColorLightRGB}, 0.2) 8%,
		rgba(0, 0, 0, 0) 50%
	);
	background-position: left bottom;
	background-size: 170% 95%;
	background-repeat: no-repeat;
	-webkit-user-select: none;
	canvas {
		height: clamp(85%, 70vw, 115%);
		flex-shrink: 0;
	}
	@media (orientation: portrait) {
		width: 50%;
	}
`
