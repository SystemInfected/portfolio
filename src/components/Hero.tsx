import styled from 'styled-components'
import { color, font, breakpoint } from '../css/variables'
import { ReactComponent as IllustrationForeground } from '../assets/images/portrait_illustration_foreground.svg'
import { ReactComponent as IllustrationEye } from '../assets/images/portrait_illustration_eye.svg'
import AnimatedNodes from './AnimatedNodes'
import AnimatedEye from './AnimatedEye'

const Hero = () => {
	return (
		<HeaderContainer id="header-container">
			<Header>Graphic Designer</Header>
			<Header>Web Developer</Header>
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
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	margin-bottom: 100px;
`

const Header = styled.h1`
	position: absolute;
	top: 0.5em;
	left: 0.5em;
	color: ${color.mainColorLight};
	font-family: ${font.headingsFont};
	font-size: clamp(5rem, 5.5vw, 14rem);
	font-weight: 100;
	text-transform: uppercase;
	letter-spacing: 0.02rem;
	z-index: 80;
	line-height: 1;
	&:last-of-type {
		left: auto;
		right: 0.5em;
		text-align: right;
	}
	@media (orientation: portrait) and (min-width: ${breakpoint.tablet}) {
		width: 100%;
		left: auto;
		text-align: center;
		font-size: clamp(5rem, 12vw, 14rem);
		&:last-of-type {
			right: auto;
			width: 100%;
			text-align: center;
			top: 1.5em;
		}
	}
	@media only screen and (max-width: ${breakpoint.tablet}) {
		width: 100%;
		left: auto;
		text-align: center;
		font-size: clamp(3.2rem, 12vw, 8rem);
		&:last-of-type {
			right: auto;
			width: 100%;
			text-align: center;
			top: 1.5em;
		}
	}
`

const Portrait = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: flex-end;
	overflow: hidden;
`

const PortraitIllustration = styled(Portrait)`
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
`

const PortraitNodes = styled(Portrait)`
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
`
