import React from 'react'
import styled from 'styled-components'
import { PortfolioDataProps } from '../../../pages/portfolio'
import { breakpoint, color, font } from '../../../styles/variables'

interface PortfolioCardProps {
	data: PortfolioDataProps
}

const PortfolioCard = React.forwardRef<HTMLDivElement, PortfolioCardProps>(
	(props: PortfolioCardProps, ref) => {
		const { data } = props
		const tagArr = data.tags.split(', ').slice(0, 2)
		return (
			<PortfolioCardWrapper ref={ref}>
				<h3>{data.title}</h3>
				<ul>
					{tagArr.map((tag, index) => (
						<li key={index}>• {tag}</li>
					))}
				</ul>
				<PortfolioImages>
					{data.images.map((img, index) => {
						return (
							<img
								key={index}
								src={`../images/thumbs/${img}`}
								alt={data.title}
							/>
						)
					})}
				</PortfolioImages>
			</PortfolioCardWrapper>
		)
	}
)

export default PortfolioCard

const PortfolioCardWrapper = styled.div`
	align-items: center;
	background: linear-gradient(
			rgba(0, 0, 0, 0.2) 0%,
			rgba(0, 0, 0, 0.15) 40%,
			rgba(0, 0, 0, 0) 70%,
			rgba(0, 0, 0, 0) 100%
		),
		rgba(${color.mainColorLightRGB}, 0.1);
	border-radius: 2em;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 4em;
	padding: 2em;
	width: 100%;
	overflow: hidden;
	transition: transform ease-out 0.2s;
	transform: scale(1);
	&:before {
		left: 0;
		top: 0;
		position: absolute;
		content: '';
		border-radius: 2em;
		width: 100%;
		height: 100%;
		box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.3);
		opacity: 0;
		backface-visibility: hidden;
		transition: opacity ease-out 0.3s;
	}
	h3 {
		color: ${color.mainAccentColor};
		font-family: ${font.headingsFont};
		font-size: clamp(1.8rem, 2vw, 2.4rem);
		font-weight: 400;
		letter-spacing: 0.15em;
		text-align: center;
		text-transform: uppercase;
		transition: all 0.3s ease;
		width: 100%;
		@media screen and (max-width: ${breakpoint.tabletBig}) {
			font-size: clamp(2rem, 6vw, 2.6rem);
		}
	}
	ul {
		margin-top: 1em;
		margin-bottom: 2em;
		text-align: center;
		width: 100%;
		li {
			color: ${color.textLight};
			display: inline-block;
			font-size: clamp(1rem, 1vw, 1.2rem);
			font-weight: 700;
			letter-spacing: 0.1em;
			line-height: 1.6;
			margin: 0 0.5em;
			text-transform: uppercase;
			@media screen and (max-width: ${breakpoint.tablet}) {
				font-size: 1.2rem;
			}
		}
	}
	&:hover,
	&:focus {
		transform: scale(1.03);
		&:before {
			opacity: 1;
		}
	}
`

const PortfolioImages = styled.div`
	position: relative;
	width: 100%;
	img {
		&:nth-of-type(1) {
			width: 100%;
		}
		&:nth-of-type(2) {
			position: absolute;
			height: 60%;
			right: 5%;
			bottom: -1%;
		}
	}
`
