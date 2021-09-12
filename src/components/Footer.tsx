import { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { breakpoint, color, font } from '../../styles/variables'
import SectionHeader from './SectionHeader'

const Footer = () => {
	return (
		<Section>
			<FooterSection>
				<SectionHeader>Get in touch</SectionHeader>
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
`
