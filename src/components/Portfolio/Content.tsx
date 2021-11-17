import React from 'react'
import styled from 'styled-components'
import { breakpoint, color, components } from '../../../styles/variables'

interface ContentProps {
	content: string
	title: string
	tech: string
	url: string | null
	source: string | null
}

const Content = ({ content, title, tech, url, source }: ContentProps) => {
	const techArr = tech.split(', ')
	const renderURL = () => {
		if (url) {
			if (url === 'none' || url === 'github') {
				return ''
			}
			return (
				<a href={url} target='_blank' rel='noreferrer'>
					<CTA>Visit {title}</CTA>
				</a>
			)
		}
		return <CTA disabled>{title} is no longer available</CTA>
	}

	return (
		<Section>
			<ContentSection>
				<ContentWrapper dangerouslySetInnerHTML={{ __html: content }} />
				<CTAWrapper>
					<ul>
						<h3>Technologies used:</h3>
						{techArr.map((tag, index) => {
							return <li key={index}>{tag}</li>
						})}
					</ul>
					<div>
						{renderURL()}
						{source ? (
							<a href={source} target='_blank' rel='noreferrer'>
								<CTA>View {url === 'github' ? 'on GitHub' : 'source'}</CTA>
							</a>
						) : (
							<CTA disabled>Source not available</CTA>
						)}
					</div>
				</CTAWrapper>
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
	@media (orientation: portrait) {
		gap: 0;
		flex-direction: column;
	}
`

const ContentWrapper = styled.div`
	width: 60%;
	margin-top: clamp(12rem, 12vw, 15rem);
	border-radius: 0.5em;
	color: ${color.textLight};
	font-size: clamp(1.4rem, 1vw, 1.6rem);
	line-height: 1.8em;
	word-spacing: 0.18em;
	p {
		margin-bottom: 1.5em;
	}
	ul,
	ol {
		margin-left: 1em;
		margin-bottom: 1.5em;
	}
	em,
	strong {
		color: ${color.mainAccentColor};
	}
	a {
		color: inherit;
	}
	@media (orientation: portrait) {
		width: 100%;
	}
`

const CTAWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2em;
	width: 40%;
	height: min-content;
	margin-top: clamp(12rem, 12vw, 15rem);
	font-size: clamp(1.5rem, 1.7vw, 1.8rem);
	background: linear-gradient(
			120deg,
			rgba(${color.mainColorDarkRGB}, 0.75),
			rgba(${color.mainColorDarkRGB}, 0.75)
		),
		linear-gradient(
			120deg,
			${color.mainBackgroundColor},
			${color.mainBackgroundColor}
		);
	border-radius: 0.5em;
	padding: 2em;
	@media (orientation: portrait) {
		width: 100%;
		margin-top: 4em;
	}
	div {
		width: 100%;
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
	}
	ul {
		font-size: 0.7em;
		text-transform: uppercase;
		h3 {
			font-size: 1em;
			color: ${color.mainAccentColor};
			display: block;
			font-weight: 700;
			letter-spacing: 0.1em;
			line-height: 1.6;
		}
		li {
			background: none;
			border: 1px solid ${color.mainColorLight};
			border-radius: 0.5em;
			color: ${color.mainColorLight};
			cursor: default;
			display: inline-block;
			margin: 0.5em 1em 0.5em 0;
			padding: 0.5em 1em;
			transition: transform ease-out 0.3s, color ease-out 0.3s,
				border-color ease-out 0.3s;
			width: auto;
			&:hover {
				border-color: ${color.mainAccentColor};
				color: ${color.mainAccentColor};
				transform: scale(1.05);
			}
		}
	}
`

const CTA = styled.button`
	background-color: ${color.mainAccentColor};
	color: ${color.mainColorDark};
	${components.mainButton}
	&:disabled,
	&[disabled] {
		${components.secondaryButton}
		background-color: rgba(${color.mainColorDarkRGB}, 0.75);
		color: ${color.mainColorLight};
		border-color: ${color.mainColorLight};
		opacity: 0.5;
		cursor: default;
		&:hover,
		&:focus {
			transform: none;
			&:before {
				opacity: 0;
			}
		}
	}
`
