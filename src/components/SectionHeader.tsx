import styled from 'styled-components'
import { breakpoint, color, font } from '../../styles/variables'

interface SectionHeaderProps {
	children: String
	centered?: boolean
}

const SectionHeader = ({ children, centered }: SectionHeaderProps) => {
	if (centered) {
		return <HeaderCentered>{children}</HeaderCentered>
	}
	return <Header>{children}</Header>
}

export default SectionHeader

const Header = styled.h2`
	font-family: ${font.headingsFont};
	color: ${color.mainAccentColor};
	text-transform: uppercase;
	letter-spacing: 0.3em;
	margin-top: 5em;
	margin-bottom: 1em;
	font-size: 1.6rem;
	font-weight: 400;
	text-align: center;
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		text-align: left;
	}
`
const HeaderCentered = styled.h2`
	font-family: ${font.headingsFont};
	color: ${color.mainAccentColor};
	text-transform: uppercase;
	letter-spacing: 0.3em;
	margin-top: 5em;
	margin-bottom: 1em;
	font-size: 1.6rem;
	font-weight: 400;
	text-align: center;
`
