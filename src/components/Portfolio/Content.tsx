import React from 'react'
import styled from 'styled-components'
import { breakpoint, color } from '../../../styles/variables'

interface ContentProps {
	content: string
}

const Content = ({ content }: ContentProps) => {
	return (
		<Section>
			<ContentSection>
				<ContentWrapper dangerouslySetInnerHTML={{ __html: content }} />
				<CTAWrapper>asd</CTAWrapper>
			</ContentSection>
		</Section>
	)
}

export default Content

const Section = styled.section`
	background-color: rgba(${color.mainColorLightRGB}, 0.2);
	display: flex;
	justify-content: center;
	width: 100%;
`

const ContentSection = styled.div`
	max-width: ${breakpoint.maxWidth};
	padding: 0 max(4rem, env(safe-area-inset-left));
	padding-bottom: 5em;
	width: 100%;
	display: flex;
	gap: 4em;
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 2.5em;
		padding-bottom: 5em;
	}
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		gap: 0;
		flex-direction: column;
	}
`

const ContentWrapper = styled.div`
	width: 70%;
	margin-top: clamp(12rem, 12vw, 15rem);
	border-radius: 0.5em;
	color: ${color.textLight};
	font-size: 1.6rem;
	line-height: 1.8em;
	word-spacing: 0.18em;
	p {
		margin-bottom: 1em;
	}
	ul,
	ol {
		margin-left: 1em;
		margin-bottom: 1em 0;
	}
	em,
	strong {
		color: ${color.mainAccentColor};
	}
	@media (orientation: portrait) {
		width: 100%;
	}
`

const CTAWrapper = styled.div`
	width: 30%;
	margin-top: clamp(12rem, 12vw, 15rem);
	font-size: 1.6rem;
	@media (orientation: portrait) {
		width: 100%;
		margin-top: 4em;
	}
`
