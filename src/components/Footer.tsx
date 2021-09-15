import { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { gsap } from 'gsap'
import { breakpoint, color } from '../../styles/variables'
import SectionHeader from './SectionHeader'
import SocialLinks from './SocialLinks'
import ContactForm from './ContactForm'

const Footer = () => {
	useEffect(() => {
		const hand = document.getElementById('hand')

		gsap.defaults({
			ease: 'power2.out',
			duration: 0.8,
		})

		if (hand) {
			gsap.from(hand, {
				autoAlpha: 0,
				duration: 0.4,
				scrollTrigger: {
					trigger: hand,
					start: '0px 70%',
				},
			})
		}
	}, [])

	return (
		<Section>
			<FooterSection>
				<SectionHeader>Get in touch</SectionHeader>
				<p>
					Send me a message or check out any of the social networks below
					<span id='hand'>👋</span>
				</p>
				<FooterContent>
					<ContactForm />
					<SocialLinks />
				</FooterContent>
				<p id='copy'>
					Built with{' '}
					<a href='https://www.npmjs.com/package/react' target='_blank'>
						react
					</a>
					,{' '}
					<a href='https://www.npmjs.com/package/next' target='_blank'>
						next
					</a>
					,{' '}
					<a
						href='https://www.npmjs.com/package/styled-components'
						target='_blank'
					>
						styled-components
					</a>{' '}
					&{' '}
					<a href='https://www.npmjs.com/package/gsap' target='_blank'>
						gsap
					</a>
					.
					<br />
					Copyright &copy; 2021, All rights reserved.
				</p>
			</FooterSection>
		</Section>
	)
}

export default Footer

const Section = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: rgba(${color.mainColorDarkRGB}, 0.75);
	padding-bottom: 3em;
`

const waveAnimation = keyframes`
 	0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(16.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(16.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`

const FooterSection = styled.footer`
	width: 100%;
	overflow: hidden;
	max-width: ${breakpoint.maxWidth};
	padding: 0 max(4rem, env(safe-area-inset-left));
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 2.5em;
	}
	p {
		color: ${color.mainColorLight};
		font-size: clamp(1.5rem, 1.7vw, 1.8rem);
		text-align: center;
		line-height: 2em;
		@media screen and (max-width: ${breakpoint.mobileBig}) {
			text-align: left;
			&#copy {
				text-align: center;
			}
		}
		span {
			display: inline-block;
			margin-left: 0.25em;
			font-size: 1.4em;
			animation-name: ${waveAnimation};
			animation-duration: 2.3s;
			animation-iteration-count: infinite;
			transform-origin: 70% 70%;
		}
		&#copy {
			color: rgba(${color.mainColorLightRGB}, 0.5);
			font-size: clamp(1.1rem, 1.3vw, 1.4rem);
			a {
				color: rgba(${color.mainColorLightRGB}, 0.5);
				text-decoration: none;
				&:hover {
					color: rgba(${color.mainColorLightRGB}, 0.8);
				}
			}
		}
	}
`

const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: ${breakpoint.maxWidth};
`
