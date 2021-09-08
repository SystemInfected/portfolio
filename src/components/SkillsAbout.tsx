import { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { breakpoint, color, font } from '../../styles/variables'
import HistoryListItems from './HistoryListItems'
import SkillsListItems from './SkillsListItems'

const SkillsAbout = () => {
	useEffect(() => {
		const professionalEvents = document.querySelectorAll('#professional')
		const personalEvents = document.querySelectorAll('#personal')

		gsap.defaults({
			ease: 'power2.out',
			duration: 0.8,
		})

		professionalEvents.forEach((event) => {
			const eventDot = event.querySelector('.event-dot')
			gsap.from(event, {
				autoAlpha: 0,
				x: '-20px',
				duration: 0.4,
				scrollTrigger: {
					trigger: event,
					start: '50% 85%',
					//markers: true,
				},
			})
			if (eventDot) {
				gsap.from(eventDot, {
					autoAlpha: 0,
					scale: 0.5,
					x: '20px',
					duration: 0.4,
					scrollTrigger: {
						trigger: eventDot,
						start: '50% 85%',
					},
				})
			}
		})
		personalEvents.forEach((event) => {
			const eventDot = event.querySelector('.event-dot')
			gsap.from(event, {
				autoAlpha: 0,
				x: '20px',
				duration: 0.4,
				scrollTrigger: {
					trigger: event,
					start: '50% 85%',
					//markers: true,
				},
			})
			if (eventDot) {
				gsap.from(eventDot, {
					autoAlpha: 0,
					scale: 0.5,
					x: '-20px',
					duration: 0.4,
					scrollTrigger: {
						trigger: eventDot,
						start: '50% 85%',
					},
				})
			}
		})
	}, [])

	return (
		<Section>
			<SkillsAboutSection>
				<About>
					<h2>Milestones</h2>
					<HistoryList>
						<HistoryListItems />
					</HistoryList>
				</About>
				<Skills>
					<h2>My skills</h2>
					<SkillsList>
						<SkillsListItems />
					</SkillsList>
				</Skills>
			</SkillsAboutSection>
		</Section>
	)
}

export default SkillsAbout

const Section = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
`

const SkillsAboutSection = styled.div`
	display: flex;
	width: 100%;
	background-color: rgba(${color.mainColorLightRGB}, 0.2);
	max-width: ${breakpoint.maxWidth};
	padding: 0 max(4rem, env(safe-area-inset-left));
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 2.5em;
	}
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		flex-direction: column-reverse;
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

const About = styled.div`
	width: 60%;
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		width: 100%;
	}
`

const HistoryList = styled.ul`
	list-style: none;
	color: ${color.mainColorLight};
	font-size: clamp(1.5rem, 1.7vw, 1.8rem);
	li {
		list-style: none;
		width: 100%;
		h3 {
			font-family: ${font.headingsFont};
			color: ${color.mainAccentColor};
			font-size: clamp(1.8rem, 2vw, 2.2rem);
			font-weight: 400;
			text-transform: uppercase;
			letter-spacing: 0.15em;
			text-align: center;
			margin-top: 2em;
			margin-bottom: 1em;
		}
		ul {
			margin-bottom: 2em;
			position: relative;
			li {
				position: relative;
				width: calc(50% - 20px);
				margin-bottom: 1em;
				.event-dot {
					position: absolute;
					top: 50%;
					margin-top: -8px;
					width: 16px;
					height: 16px;
					border-radius: 50%;
					background-color: ${color.mainAccentColor};
				}
				&#professional {
					text-align: left;
					margin-left: calc(50% + 20px);
					span {
						&:nth-of-type(1) {
							display: block;
							font-size: 0.7em;
							color: ${color.mainAccentColor};
							text-transform: uppercase;
						}
						&:nth-of-type(2) {
							margin-top: 0.3em;
							display: block;
							font-size: 0.7em;
							font-weight: bold;
						}
					}
					.event-dot {
						left: -28px;
					}
				}
				&#personal {
					text-align: right;
					.event-dot {
						right: -28px;
					}
				}
			}
			&:before {
				content: '';
				display: block;
				width: 5px;
				height: calc(100% + 3em);
				position: absolute;
				top: calc(0px - 0.75em);
				background-color: ${color.mainAccentColor};
				margin-left: 50%;
				left: -2.5px;
			}
		}
		&:last-of-type ul:before {
			height: calc(100% - 12px);
		}
	}
`

const Skills = styled.div`
	width: 40%;
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		width: 100%;
	}
`

const SkillsList = styled.ul`
	list-style: none;
	color: ${color.mainColorLight};
	font-size: clamp(1.5rem, 1.7vw, 1.8rem);
	li {
		box-sizing: border-box;
		list-style: none;
		width: 100%;
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
		padding: 1em;
		border-radius: 0.5em;
		margin-top: 3em;
		margin-bottom: 1em;
		h3 {
			font-family: ${font.headingsFont};
			color: ${color.mainAccentColor};
			font-size: clamp(1.8rem, 2vw, 2.2rem);
			font-weight: 400;
			text-transform: uppercase;
			letter-spacing: 0.15em;
			text-align: center;
			margin-bottom: 1em;
		}
		ul {
			text-align: center;
			li {
				background: none;
				display: inline-block;
				margin: 0.5em;
				width: auto;
				font-size: 0.7em;
				color: ${color.mainColorLight};
				text-transform: uppercase;
				border: 1px solid ${color.mainColorLight};
				padding: 0.5em 1em;
				border-radius: 0.5em;
				transition: transform ease-out 0.3s, color ease-out 0.3s,
					border-color ease-out 0.3s;
				&:hover {
					color: ${color.mainAccentColor};
					border-color: ${color.mainAccentColor};
					transform: scale(1.05);
				}
			}
		}
	}
`
