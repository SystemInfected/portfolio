import React, { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { breakpoint, color, font } from '../../../styles/variables'
import HistoryListItems from './HistoryListItems'
import SkillsListItems from './SkillsListItems'
import SectionHeader from '../SectionHeader'

const SkillsAbout = () => {
	useEffect(() => {
		const professionalEvents = document.querySelectorAll('#professional')
		const personalEvents = document.querySelectorAll('#personal')
		const skillsGroup = document.querySelectorAll('.skillsBox')

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
					// markers: true,
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
					// markers: true,
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

		skillsGroup.forEach((group) => {
			gsap.fromTo(
				group,
				{ y: 100, autoAlpha: 0 },
				{
					y: 0,
					autoAlpha: 1,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: group,
						// markers: true,
						start: '-100px 95%',
						end: 'top bottom',
					},
				}
			)
			gsap.fromTo(
				group.querySelectorAll('.skill'),
				{ autoAlpha: 0 },
				{
					autoAlpha: 1,
					duration: 0.4,
					stagger: 0.1,
					scrollTrigger: {
						trigger: group,
						start: '-100px 86%',
						end: 'top bottom',
					},
				}
			)
		})
	}, [])

	return (
		<Section>
			<SkillsAboutSection>
				<About>
					<SectionHeader>Milestones</SectionHeader>
					<HistoryList>
						<HistoryListItems />
					</HistoryList>
				</About>
				<Skills>
					<SectionHeader>My skills</SectionHeader>
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
	background-color: rgba(${color.mainColorLightRGB}, 0.2);
	display: flex;
	justify-content: center;
	width: 100%;
`

const SkillsAboutSection = styled.div`
	display: flex;
	gap: 4em;
	max-width: ${breakpoint.maxWidth};
	padding: 0 max(4rem, env(safe-area-inset-left));
	padding-bottom: 5em;
	width: 100%;
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 2.5em;
		padding-bottom: 5em;
	}
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		gap: 0;
		flex-direction: column-reverse;
	}
`

const About = styled.div`
	width: 50%;
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		width: 100%;
		padding-right: 0;
	}
`

const HistoryList = styled.ul`
	color: ${color.mainColorLight};
	font-size: clamp(1.5rem, 1.7vw, 1.8rem);
	list-style: none;
	li {
		list-style: none;
		width: 100%;
		h3 {
			color: ${color.mainAccentColor};
			font-family: ${font.headingsFont};
			font-size: clamp(1.8rem, 2vw, 2.2rem);
			font-weight: 400;
			letter-spacing: 0.15em;
			margin-bottom: 1em;
			margin-top: 2em;
			text-align: center;
			text-transform: uppercase;
		}
		ul {
			margin-bottom: 2em;
			position: relative;
			li {
				margin-bottom: 1em;
				position: relative;
				width: calc(50% - 20px);
				.event-dot {
					background-color: ${color.mainAccentColor};
					border-radius: 50%;
					height: 16px;
					margin-top: -8px;
					position: absolute;
					top: 50%;
					width: 16px;
				}
				&#professional {
					margin-left: calc(50% + 20px);
					text-align: left;
					span {
						&:nth-of-type(1) {
							color: ${color.mainAccentColor};
							display: block;
							font-size: 0.7em;
							text-transform: uppercase;
						}
						&:nth-of-type(2) {
							display: block;
							font-size: 0.7em;
							font-weight: bold;
							margin-top: 0.3em;
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
				background-color: ${color.mainAccentColor};
				content: '';
				display: block;
				height: calc(100% + 3em);
				left: -2.5px;
				margin-left: 50%;
				position: absolute;
				top: calc(0px - 0.75em);
				width: 5px;
			}
		}
		&:last-of-type ul:before {
			height: calc(100% - 12px);
		}
	}
`

const Skills = styled.div`
	width: 50%;
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		width: 100%;
		padding-left: 0;
	}
`

const SkillsList = styled.ul`
	color: ${color.mainColorLight};
	font-size: clamp(1.5rem, 1.7vw, 1.8rem);
	list-style: none;
	li {
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
		box-sizing: border-box;
		list-style: none;
		margin-bottom: 1em;
		margin-top: 3em;
		padding: 1em;
		width: 100%;
		h3 {
			color: ${color.mainAccentColor};
			font-family: ${font.headingsFont};
			font-size: clamp(1.8rem, 2vw, 2.2rem);
			font-weight: 400;
			letter-spacing: 0.15em;
			margin-bottom: 1em;
			text-align: center;
			text-transform: uppercase;
		}
		ul {
			text-align: center;
			li {
				background: none;
				border: 1px solid ${color.mainColorLight};
				border-radius: 0.5em;
				color: ${color.mainColorLight};
				cursor: default;
				display: inline-block;
				font-size: 0.7em;
				margin: 0.5em;
				padding: 0.5em 1em;
				text-transform: uppercase;
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
	}
`
