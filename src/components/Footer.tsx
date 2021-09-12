import { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { breakpoint, color, font } from '../../styles/variables'

const Footer = () => {
	return (
		<Section>
			<FooterSection>
				<h2>Get in touch</h2>
			</FooterSection>
		</Section>
	)
}

export default Footer

const Section = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: rgba(${color.mainColorDarkRGB}, 0.75);
`

const FooterSection = styled.div`
	width: 100%;
	overflow: hidden;
	max-width: ${breakpoint.maxWidth};
	padding: 0 max(4rem, env(safe-area-inset-left));
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 2.5em;
	}
	h2 {
		font-family: ${font.headingsFont};
		color: ${color.mainAccentColor};
		text-transform: uppercase;
		letter-spacing: 0.3em;
		margin-top: 5em;
		margin-bottom: 1em;
		font-size: 1.6rem;
		font-weight: 400;
		text-align: center;
	}
`
