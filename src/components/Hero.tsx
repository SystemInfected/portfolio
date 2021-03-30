import { useEffect } from 'react'
import styled from 'styled-components'
import { color, font, breakpoint } from '../../styles/variables'
import IllustrationForeground from '../assets/svg/portrait_illustration_foreground.svg'
import IllustrationEye from '../assets/svg/portrait_illustration_eye.svg'
import LocationOnIcon from '@material-ui/icons/LocationOn'
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
		const location: HTMLElement | null = document.querySelector('#location')

		if (headerContainer && graphicDesigner && webDeveloper && location) {
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
				} else if (headerContainerPos.y <= -headerContainerPos.height) {
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
				} else if (headerContainerPos.y <= -headerContainerPos.height) {
					webDeveloper.style.opacity = '0'
				} else {
					webDeveloper.style.transform = 'translateY(0)'
					webDeveloper.style.opacity = '1'
				}
				if (
					headerContainerPos.y < -160 &&
					headerContainerPos.y > -headerContainerPos.height
				) {
					location.style.transform = `translateY(${
						(headerContainerPos.y + 160) * 1.7
					}px)`
					location.style.opacity = '1'
				} else if (headerContainerPos.y <= -headerContainerPos.height) {
					location.style.opacity = '0'
				} else {
					location.style.transform = 'translateY(0)'
					location.style.opacity = '1'
				}
			})
		}
	}, [])

	return (
		<HeaderContainer id='headerContainer'>
			<HeaderWrapper>
				<Header>
					<span id='graphicDesigner' style={{ transform: 'translateY(0px)' }}>
						Graphic Designer
					</span>
					<span id='webDeveloper' style={{ transform: 'translateY(0px)' }}>
						Web Developer
					</span>
				</Header>
				<Location id='location'>
					<LocationOnIcon style={{ fontSize: 20 }} />
					Stockholm, Sweden
				</Location>
			</HeaderWrapper>
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

const HeaderWrapper = styled.div`
	width: auto;
	position: fixed;
	left: 5vw;
	top: 5vw;
	z-index: 20;
	@media (orientation: portrait) {
		width: 100%;
		left: auto;
	}
`

const Header = styled.h1`
	color: ${color.mainAccentColor};
	font-family: ${font.headingsFont};
	font-size: clamp(2.5rem, 5.8vw, 12rem);
	font-weight: 450;
	text-transform: uppercase;
	letter-spacing: 0.02rem;
	line-height: 1.2;
	@media (orientation: portrait) {
		text-align: center;
		font-size: clamp(4.2rem, 9.5vw, 13rem);
	}
	span {
		position: relative;
		display: block;
	}
`

const Location = styled.h2`
	color: ${color.mainColorLight};
	font-family: ${font.headingsFont};
	font-size: clamp(1.8rem, 6vw, 2.8rem);
	font-weight: 200;
	letter-spacing: 0.08rem;
	line-height: 1.2;
	margin-top: 2vw;
	@media (orientation: portrait) {
		width: 100%;
		text-align: center;
		margin-top: 4vw;
	}
	svg {
		margin-right: 10px;
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
