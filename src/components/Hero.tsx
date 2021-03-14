import styled from 'styled-components'
import { color, font } from '../css/variables'

const Hero = () => {
	return (
		<HeaderContainer>
			<Header>
				Hi!
				<br />
				My name is Sebastian, I'm a graphic designer and web developer.
			</Header>
			<PortraitIllustration>Illustration</PortraitIllustration>
			<PortraitNodes>Nodes</PortraitNodes>
		</HeaderContainer>
	)
}

export default Hero

const HeaderContainer = styled.div`
	background-color: ${color.mainColorDark};
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Header = styled.h1`
	position: absolute;
	top: 14vh;
	color: ${color.mainColorLight};
	font-family: ${font.headingsFont};
	font-size: clamp(2rem, 2vw, 2.8rem);
	font-weight: 350;
	letter-spacing: 0.015rem;
	padding: 0 4rem;
`

const PortraitIllustration = styled.div``

const PortraitNodes = styled.div``
