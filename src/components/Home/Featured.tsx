import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { breakpoint, color, components } from '../../../styles/variables'
import ClientsList from './ClientsList'
import FeaturedCard from './FeaturedCard'
import SectionHeader from '../SectionHeader'

const Featured = () => {
	return (
		<Section>
			<a id='featured' />
			<FeatureSection>
				<SectionHeader>Featured projects</SectionHeader>
				<FeaturedContainer>
					<FeaturedCard work='usab' />
					<FeaturedCard work='nodell' />
					<FeaturedCard work='crypto' />
				</FeaturedContainer>
				<CenteredSection>
					<Link href='/portfolio/'>
						<a className='link-tag'>
							<ViewAllProjects>View more projects</ViewAllProjects>
						</a>
					</Link>
				</CenteredSection>
				<SectionHeader>Some clients I've worked with</SectionHeader>
				<ClientsList />
			</FeatureSection>
		</Section>
	)
}

export default Featured

const Section = styled.section`
	background-color: rgba(${color.mainColorDarkRGB}, 0.75);
	display: flex;
	justify-content: center;
	width: 100%;
`

const FeatureSection = styled.div`
	max-width: ${breakpoint.maxWidth};
	overflow: hidden;
	padding: 0 max(4rem, env(safe-area-inset-left));
	padding-bottom: 5em;
	width: 100%;
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 2.5em;
		padding-bottom: 5em;
	}
`

const FeaturedContainer = styled.div`
	display: grid;
	grid-gap: 2.5em 6em;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	justify-content: space-between;
	margin-bottom: 6em;
	width: 100%;
	@media screen and (max-width: ${breakpoint.tabletBig}) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		a:last-child > div {
			margin-left: calc(50% + 2.5em);
		}
	}
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		grid-template-columns: 1fr;
		a:last-child > div {
			margin-left: 0;
		}
	}
`

const CenteredSection = styled.div`
	align-items: center;
	display: grid;
	width: 100%;
	a {
		margin: 0 auto;
	}
`

const ViewAllProjects = styled.button`
	${components.mainButton}
	background-color: ${color.mainAccentColor};
	color: ${color.mainColorDark};
	display: inline-block;
	margin: 0 auto;
`
