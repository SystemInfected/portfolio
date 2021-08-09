import styled from 'styled-components'
import { breakpoint, color, font } from '../../styles/variables'
import HistoryListItems from './HistoryListItems'

const SkillsAbout = () => {
	return (
		<Section>
			<SkillsAboutSection>
				<About>
					<h2>My journey</h2>
					<HistoryList>
						<HistoryListItems />
					</HistoryList>
				</About>
				<Skills>
					<h2>My skills</h2>
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
		flex-direction: column;
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
			margin-bottom: 1em;
		}
	}
	ul {
		li {
			width: calc(50% - 20px);
			margin-bottom: 1em;

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
			}
			&#personal {
				text-align: right;
			}
		}
	}
`

const Skills = styled.div`
	width: 40%;
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		width: 100%;
	}
`
