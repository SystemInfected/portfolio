import styled from 'styled-components'
import { color, font } from '../css/variables'
import Portraits from './Portraits'

const Hero = () => {
	return (
		<HeaderContainer>
			<Header>
				Hi!
				<br />
				My name is Sebastian, I'm a graphic designer and web developer.
			</Header>
			<PortraitIllustration>
				<Portraits illustration />
			</PortraitIllustration>
			<PortraitNodes>
				<Portraits nodes />
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
`

const Portrait = styled.div`
	height: 70vh;
`

const PortraitIllustration = styled(Portrait)`
	margin-right: 5px;
`

const PortraitNodes = styled(Portrait)`
	margin-left: 5px;
`
