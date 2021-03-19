import styled from 'styled-components'
import { color, font, breakpoint } from '../css/variables'
import { ReactComponent as Illustration } from '../assets/images/portrait_illustration.svg'
import AnimatedNodes from './AnimatedNodes'

const Hero = () => {
	return (
		<HeaderContainer>
			<Header>
				Hi,
				<br />
				My name is Sebastian, I'm a <NoWrap>graphic designer</NoWrap> and{' '}
				<NoWrap>web developer.</NoWrap>
			</Header>
			<PortraitIllustration>
				<Illustration />
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
	top: 14vh;
	color: ${color.mainColorLight};
	font-family: ${font.headingsFont};
	font-size: clamp(2.2rem, 2.5vw, 3.2rem);
	font-weight: 100;
	letter-spacing: 0.02rem;
	padding: 0 2.5em;
	z-index: 80;
	@media screen and (max-width: ${breakpoint.tablet}) {
		top: 10vh;
	}
	@media screen and (max-width: ${breakpoint.mobile}) {
		top: 5vh;
	}
`

const NoWrap = styled.span`
	white-space: nowrap;
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
	svg {
		height: clamp(85%, 70vw, 115%);
		flex-shrink: 0;
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
	canvas {
		height: clamp(85%, 70vw, 115%);
		flex-shrink: 0;
	}
`
