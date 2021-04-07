import styled from 'styled-components'
import { breakpoint, color, font } from '../../styles/variables'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
	return (
		<Section>
			<FeatureSection>
				<h2>Featured projects</h2>
				<FeaturedContainer>
					<FeaturedCard work='usab' />
					<FeaturedCard work='nodell' />
					<FeaturedCard work='rosa' />
				</FeaturedContainer>
			</FeatureSection>
		</Section>
	)
}

export default Featured

const Section = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: rgba(${color.mainColorDarkRGB}, 0.75);
	min-height: 100vh;
`

const FeatureSection = styled.div`
	color: ${color.mainAccentColor};
	width: 100%;
	max-width: ${breakpoint.maxWidth};
	padding: 0 env(safe-area-inset-left, 4rem);
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 2.5em;
	}
	h2 {
		font-family: ${font.headingsFont};
		text-transform: uppercase;
		letter-spacing: 0.3em;
		margin-top: 3em;
		margin-bottom: 1em;
		font-size: 1.6rem;
		font-weight: 400;
	}
`

const FeaturedContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 4em;
	@media (orientation: portrait) {
		grid-template-columns: auto;
	}
`
