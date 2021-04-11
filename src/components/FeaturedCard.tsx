import styled from 'styled-components'
import { font, color, breakpoint } from '../../styles/variables'
import { data as featuredData } from '../data/featuredData'

const FeaturedCard = (props) => {
	const cardData = featuredData[props.work][0]
	return (
		<CardWrapper>
			<HeaderWrapper>
				<h3>{cardData.title}</h3>
				<ul>
					{cardData.tags.map((tag: string, index: number) => (
						<li key={index}>• {tag}</li>
					))}
				</ul>
			</HeaderWrapper>
			<CardImages>
				{cardData.images.map((image: any, index: number) => {
					let pos = { marginLeft: 0, translateX: 0 }
					if (image.position === 'center') {
						pos.marginLeft = 50
						pos.translateX = -50
					} else {
						pos.marginLeft = -50
						pos.translateX = image.position
					}
					return (
						<img
							key={index}
							src={`images/${image.url}`}
							style={{
								width: `${image.size}`,
								zIndex: index,
								marginLeft: `${pos.marginLeft}%`,
								transform: `translateX(${pos.translateX}%)`,
							}}
						/>
					)
				})}
			</CardImages>
			<CardButton>Read more</CardButton>
		</CardWrapper>
	)
}

export default FeaturedCard

const CardWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 2.5em;
	width: 100%;
	min-height: min(65vh, 50em);
	border-radius: 2em;
	background: linear-gradient(
			rgba(0, 0, 0, 0.2) 0%,
			rgba(0, 0, 0, 0.15) 45%,
			rgba(0, 0, 0, 0) 55%,
			rgba(0, 0, 0, 0) 100%
		),
		rgba(${color.mainColorLightRGB}, 0.1);
	box-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.2), 0 2em 5em rgba(0, 0, 0, 0.3);
	p {
		width: 100%;
		font-size: 1.6rem;
		padding: 2em 1em 1em;
		line-height: 1.5;
		letter-spacing: 0.03em;
		color: ${color.textLight};
		text-align: center;
	}
`

const HeaderWrapper = styled.div`
	padding: 2em 0;
	width: 100%;
	h3 {
		width: 100%;
		text-align: center;
		color: ${color.mainAccentColor};
		font-family: ${font.headingsFont};
		font-size: clamp(1.8rem, 2vw, 2.4rem);
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		@media screen and (max-width: ${breakpoint.tablet}) {
			font-size: clamp(2rem, 6vw, 2.6rem);
		}
	}
	ul {
		width: 100%;
		text-align: center;
		margin-top: 2em;
		li {
			color: ${color.textLight};
			font-size: clamp(1rem, 1vw, 1.2rem);
			font-weight: 700;
			letter-spacing: 0.1em;
			line-height: 1.6;
			text-transform: uppercase;
			margin: 0 0.5em;
			display: inline-block;
			@media screen and (max-width: ${breakpoint.tablet}) {
				font-size: 1.2rem;
			}
		}
	}
`

const CardButton = styled.button`
	position: relative;
	background-color: ${color.mainAccentColor};
	color: ${color.mainColorDark};
	border: none;
	padding: 1em 2.5em;
	margin: 2.5em 0;
	font-size: 1.2rem;
	letter-spacing: 0.1em;
	cursor: pointer;
	border-radius: 2em;
	font-weight: 800;
	text-transform: uppercase;
	box-shadow: 0 0.2em 0.2em rgba(0, 0, 0, 0.5);
	transition: transform ease-out 0.15s;
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
		transition: opacity ease-out 0.15s;
	}
	&:hover,
	&:focus {
		transform: scale(1.1);
		&:before {
			opacity: 1;
		}
	}
`

const CardImages = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	height: 100%;
	width: calc(100% - 2em);
	margin: 2em 0 1em;
`
