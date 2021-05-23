import styled from 'styled-components'
import { breakpoint, color, font } from '../../styles/variables'

const SkillsAbout = () => {
	return (
		<Section>
			<SkillsAboutSection>
				<About>
					<h2>My journey</h2>
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
	@media screen and (max-width: ${breakpoint.mobile}) {
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
	@media screen and (max-width: ${breakpoint.mobile}) {
		width: 100%;
	}
`

const Skills = styled.div`
	width: 40%;
	@media screen and (max-width: ${breakpoint.mobile}) {
		width: 100%;
	}
`
