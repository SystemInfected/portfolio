import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'
import { color } from '../../styles/variables'

const SocialLinks = () => {
	const socialIconColor = color.mainColorLight
	return (
		<Container>
			<SocialIcon
				url='http://www.linkedin.com/in/sebastianwidin'
				bgColor={socialIconColor}
				target='_blank'
			/>
			<SocialIcon
				url='https://github.com/SystemInfected'
				bgColor={socialIconColor}
				target='_blank'
			/>
			<SocialIcon
				url='http://www.dribbble.com/SystemInfected'
				bgColor={socialIconColor}
				target='_blank'
			/>
			<SocialIcon
				url='http://www.facebook.com/sebastianwidin/'
				bgColor={socialIconColor}
				target='_blank'
			/>
			<SocialIcon
				url='http://www.instagram.com/systeminfected'
				bgColor={socialIconColor}
				target='_blank'
			/>
			<SocialIcon
				url='http://www.twitter.com/System_Infected'
				bgColor={socialIconColor}
				target='_blank'
			/>
		</Container>
	)
}

export default SocialLinks

const Container = styled.div`
	align-items: center;
	display: flex;
	gap: clamp(2em, 2.8vw, 3em);
	justify-content: center;
	margin: 4em 0;
	width: 100%;
	a {
		height: clamp(3.4rem, 3.6vw, 4.6rem) !important;
		transform: scale(1);
		transition: transform ease-out 0.2s;
		width: clamp(3.4rem, 3.6vw, 4.6rem) !important;
		&:hover {
			transform: scale(1.1);
			transform-origin: center;
		}
	}
`
