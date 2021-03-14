import styled from 'styled-components'
import { color, font } from '../css/variables'

const Hero = () => {
	return (
		<HeaderContainer>
			<Header>
				<strong>Hi!</strong>
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
	font-size: clamp(2.2rem, 2.5vw, 3.2rem);
	font-weight: 100;
	letter-spacing: 0.02rem;
	padding: 0 4rem;
	z-index: 80;
	strong {
		font-weight: 800;
		letter-spacing: 0.1rem;
	}
`
const Portrait = styled.div`
	position: absolute;
	bottom: 0;
	height: 70vh;
`
const PortraitIllustration = styled(Portrait)`
	margin-right: 5px;
`

const PortraitNodes = styled(Portrait)`
	margin-left: 5px;
`