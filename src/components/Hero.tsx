import styled from 'styled-components'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { color, font, breakpoint } from '../css/variables'
import { ReactComponent as IllustrationForeground } from '../assets/images/portrait_illustration_foreground.svg'
import { ReactComponent as IllustrationEye } from '../assets/images/portrait_illustration_eye.svg'
import AnimatedNodes from './AnimatedNodes'
import AnimatedEye from './AnimatedEye'

const Hero = () => {
	const windowW = window.innerWidth
	const windowH = window.innerHeight
	console.log(windowW, windowH)
	const { scrollY } = useViewportScroll()
	const headerPos = useTransform(
		scrollY,
		[windowH * 0.2, windowH * 0.3],
		[0, -windowH * 0.5]
	)

	return (
		<HeaderContainer id="header-container">
			<Header style={{ y: headerPos }}>
				Graphic Designer
				<br />
				Web Developer
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
	background-color: ${color.mainColorDark};
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	margin-bottom: 200vh;
`

const Header = styled(motion.h1)`
	position: fixed;
	top: 0.5em;
	left: 0.5em;
	color: ${color.mainAccentColor};
	font-family: ${font.headingsFont};
	font-size: clamp(2.5rem, 5.8vw, 12rem);
	font-weight: 550;
	text-transform: uppercase;
	letter-spacing: 0.02rem;
	line-height: 1.2;
	z-index: 20;
	@media (orientation: portrait) {
		width: 100%;
		left: auto;
		text-align: center;
		font-size: clamp(4.6rem, 9.5vw, 13rem);
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
