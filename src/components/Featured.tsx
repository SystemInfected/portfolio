import React from 'react'
import styled from 'styled-components'
import { breakpoint, color, font, components } from '../../styles/variables'
import ClientsList from './ClientsList'
import FeaturedCard from './FeaturedCard'
import SectionHeader from './SectionHeader'

const Featured = () => {
	return (
		<Section>
			<FeatureSection>
				<SectionHeader>Featured projects</SectionHeader>
				<FeaturedContainer>
					<FeaturedCard work='usab' />
					<FeaturedCard work='nodell' />
					<FeaturedCard work='rosa' />
				</FeaturedContainer>
				<CenteredSection>
					<ViewAllProjects>View more projects</ViewAllProjects>
				</CenteredSection>
				<SectionHeader>Some clients I've worked with</SectionHeader>
				<ClientsList />
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
`

const FeatureSection = styled.div`
	width: 100%;
	overflow: hidden;
	max-width: ${breakpoint.maxWidth};
	padding: 0 max(4rem, env(safe-area-inset-left));
	padding-bottom: 5em;
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 2.5em;
		padding-bottom: 5em;
	}
`

const FeaturedContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	justify-content: space-between;
	grid-gap: 2.5em 6em;
	margin-bottom: 6em;
	@media screen and (max-width: ${breakpoint.tabletBig}) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		div:last-child {
			margin-left: calc(50% + 2.5em);
		}
	}
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		grid-template-columns: 1fr;
		div:last-child {
			margin-left: 0;
		}
	}
`

const CenteredSection = styled.div`
	width: 100%;
	display: grid;
	align-items: center;
`

const ViewAllProjects = styled.button`
	${components.mainButton}
	display: inline-block;
	background-color: ${color.mainAccentColor};
	color: ${color.mainColorDark};
	margin: 0 auto;
`
