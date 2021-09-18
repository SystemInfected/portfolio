import React from 'react'
import styled from 'styled-components'
import { breakpoint, color, font } from '../../styles/variables'

interface SectionHeaderProps {
	children: string
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
	color: ${color.mainAccentColor};
	font-family: ${font.headingsFont};
	font-size: 1.6rem;
	font-weight: 400;
	letter-spacing: 0.3em;
	margin-bottom: 1em;
	margin-top: 5em;
	text-align: center;
	text-transform: uppercase;
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		text-align: left;
	}
`
const HeaderCentered = styled.h2`
	color: ${color.mainAccentColor};
	font-family: ${font.headingsFont};
	font-size: 1.6rem;
	font-weight: 400;
	letter-spacing: 0.3em;
	margin-bottom: 1em;
	margin-top: 5em;
	text-align: center;
	text-transform: uppercase;
`
