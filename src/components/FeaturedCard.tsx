import styled from 'styled-components'
import { color, breakpoint } from '../../styles/variables'
import { data as featuredData } from '../data/featuredData'

const FeaturedCard = (props) => {
	const cardData = featuredData[props.work][0]
	return (
		<CardContainer>
			<CardWrapper>
				<HeaderWrapper>
					<h3>{cardData.title}</h3>
				</HeaderWrapper>
				<p>Lorem ipsum dolor sit amet, consectetur adip</p>
				<CardButton>Read more</CardButton>
			</CardWrapper>
		</CardContainer>
	)
}

export default FeaturedCard

const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	//border: 1px solid red;
`

const CardWrapper = styled.div`
	margin: 2.5em 0 5em;
	width: min(80%, 55vw);
	min-height: min(65vh, 50em);
	border-radius: 2em;
	overflow: hidden;
	background-color: rgba(${color.mainColorLightRGB}, 0.1);
	box-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.2), 0 2em 5em rgba(0, 0, 0, 0.3);
	@media (orientation: portrait) {
		width: min(75%, 65vw);
	}
	@media screen and (max-width: ${breakpoint.mobile}) {
		width: 100%;
	}
`

const HeaderWrapper = styled.div`
	padding: 4em 0;
	background-color: rgba(0, 0, 0, 0.2);
	h3 {
		width: 100%;
		text-align: center;
		color: ${color.mainAccentColor};
		font-size: clamp(1.4rem, 1.5vw, 1.6rem);
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		@media screen and (max-width: ${breakpoint.tablet}) {
			font-size: clamp(1.8rem, 6vw, 2.2rem);
		}
	}
`

const CardButton = styled.button``
