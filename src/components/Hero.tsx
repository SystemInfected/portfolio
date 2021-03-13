import styled from 'styled-components'
import { color } from '../css/variables'

const Hero = () => {
	return (
		<HeaderContainer>
			<PortraitIllustration />
			<PortraitNodes />
		</HeaderContainer>
	)
}

const PortraitIllustration = () => {
	return <div>Portrait</div>
}

const PortraitNodes = () => {
	return <div>Nodes</div>
}

export default Hero

const HeaderContainer = styled.div`
	background-color: ${color.mainColorDark};
	width: 100vw;
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
`
