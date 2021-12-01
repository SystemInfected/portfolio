import React, { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

import { useMyContext } from '../Context/ContextProvider'

import PortraitRound from '../../assets/svg/portrait_round.svg'
import { color, font } from '../../../styles/variables'

interface IntroProps {
	introDelay: number
}

const Intro = ({ introDelay }: IntroProps) => {
	const { setPageEnter } = useMyContext()

	useEffect(() => {
		const container: HTMLElement | null = document.querySelector(
			'#introContainer'
		)
		const portrait: HTMLElement | null = document.querySelector(
			'#introPortrait'
		)
		const header: HTMLElement | null = document.querySelector(
			'#introHeaderTagline'
		)
		const name: HTMLElement | null = document.querySelector('#introHeaderName')

		document.body.classList.toggle('lock-scroll')

		gsap.defaults({
			ease: 'power2.out',
			duration: 0.8,
			stagger: 0.5,
		})

		gsap.fromTo(
			[portrait, name, header],
			{
				scaleY: '200%',
				scaleX: '200%',
				opacity: 0,
			},
			{
				scaleY: '100%',
				scaleX: '100%',
				opacity: 1,
			}
		)

		gsap.fromTo(
			container,
			{ opacity: 1 },
			{
				opacity: 0,
				delay: introDelay - 0.5,
				duration: 0.5,
			}
		)

		setTimeout(() => {
			document.body.classList.toggle('lock-scroll')
			container?.classList.add('hide')
			setPageEnter(false)
		}, introDelay * 1000)
	}, [])

	return (
		<IntroContainer id='introContainer'>
			<PortraitRound id='introPortrait' />
			<h2 id='introHeaderName'>My name is Sebastian</h2>
			<h1 id='introHeaderTagline'>
				I bring <strong>sketches</strong> to life and{' '}
				<span>
					turn <strong>ideas</strong> into reality
				</span>
			</h1>
		</IntroContainer>
	)
}

export default Intro

const IntroContainer = styled.div`
	z-index: 3000;
	transform: translateZ(3000px);
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: linear-gradient(rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.4) 100%),
		rgba(${color.mainColorDarkRGB}, 1);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	svg {
		flex-shrink: 0;
		height: clamp(22%, 40vw, 35%);
		margin-bottom: 5vh;
	}
	h2,
	h1 {
		text-align: center;
		font-family: ${font.standardFont};
		color: ${color.mainAccentColor};
		span {
			white-space: nowrap;
		}
		strong {
			color: ${color.textLight};
			font-weight: 900;
		}
	}
	h2 {
		margin-top: 1.5em;
		font-size: clamp(1.8rem, 2.5vw, 4.5rem);
		font-weight: 300;
	}
	h1 {
		margin-top: 0.5em;
		font-size: clamp(2.6rem, 3.5vw, 8rem);
	}
	&.hide {
		display: none;
	}
`
