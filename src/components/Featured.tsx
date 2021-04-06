import styled from 'styled-components'
import { breakpoint, color } from '../../styles/variables'

const Featured = () => {
	return (
		<Section>
			<FeatureSection>
				<h2>Featured work</h2>
			</FeatureSection>
		</Section>
	)
}

export default Featured

const Section = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: rgba(${color.mainColorDarkRGB}, 0.6);
	min-height: 100vh;
`

const FeatureSection = styled.div`
	color: ${color.mainColorLight};
	width: 100%;
	max-width: ${breakpoint.maxWidth};
	padding: 0 4rem;
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 2.5em;
	}
	h2 {
		margin-top: 2em;
		font-size: 2rem;
	}
`
