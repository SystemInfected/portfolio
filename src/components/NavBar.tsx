import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ToastContainer } from 'react-toastify'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CloseIcon from '@material-ui/icons/Close'
import Link from 'next/link'
import { color, font, breakpoint } from '../../styles/variables'

gsap.registerPlugin(ScrollTrigger)

interface NavBarProps {
	locked: boolean
	startpage: boolean
}

export const scrollToElement = (element: string) => {
	const titleElement = document.getElementById(element)
	if (titleElement) {
		setTimeout(() => {
			titleElement.scrollIntoView({ behavior: 'smooth' })
		}, 300)
	}
}

const NavBar = ({ locked, startpage }: NavBarProps) => {
	const [mobileMenuPos, setMobileMenuPos] = useState({ x: 0, y: 0 })
	const [menuActive, setMenuActive] = useState(false)

	useEffect(() => {
		const navBar: HTMLElement | null = document.querySelector('#navBar')
		const navBarSpacer: HTMLElement | null = document.querySelector(
			'#navBarSpacer'
		)
		const headerContainer = document.querySelector('#headerContainer')
		const menuToggle: HTMLElement | null = document.querySelector('#menuToggle')
		const menuNav: HTMLElement | null = document.querySelector('#menuNav')
		const closeMenu: HTMLElement | null = document.querySelector('#closeMenu')
		let isNavBarFixed = false

		if (menuToggle) {
			const menuTogglePos = menuToggle.getBoundingClientRect()
			const mobileMenuPos = { x: 0, y: 0 }
			mobileMenuPos.x = menuTogglePos.x + menuTogglePos.width / 2
			mobileMenuPos.y = menuTogglePos.y + menuTogglePos.height / 2

			setMobileMenuPos(mobileMenuPos)
		}

		const toogleNavBar = (toogle: boolean) => {
			if (navBar && navBarSpacer) {
				if (toogle) {
					navBar.style.position = 'fixed'
					navBar.style.top = '0'
					navBarSpacer.style.marginTop = '60px'
				} else {
					navBar.style.position = 'relative'
					navBar.style.top = ''
					navBarSpacer.style.marginTop = '0px'
				}
			}
		}

		if (locked) {
			toogleNavBar(true)
		}
		window.addEventListener('scroll', () => {
			if (navBar && headerContainer) {
				if (!locked) {
					const navBarPos = navBar.getBoundingClientRect()
					const headerContainerPos = headerContainer.getBoundingClientRect()
					const headerBottom = headerContainerPos.y + headerContainerPos.height
					if (navBarPos.y <= 0 && headerBottom <= 0 && !isNavBarFixed) {
						isNavBarFixed = true
						toogleNavBar(true)
					} else if (headerBottom > 0 && isNavBarFixed) {
						isNavBarFixed = false
						toogleNavBar(false)
					}
				}
			}

			if (menuToggle) {
				const menuTogglePos = menuToggle.getBoundingClientRect()
				const mobileMenuPos = { x: 0, y: 0 }
				mobileMenuPos.x = menuTogglePos.x + menuTogglePos.width / 2
				mobileMenuPos.y = menuTogglePos.y + menuTogglePos.height / 2

				setMobileMenuPos(mobileMenuPos)
			}
		})

		window.addEventListener('resize', () => {
			if (navBar && headerContainer) {
				const navBarPos = navBar.getBoundingClientRect()
				const headerContainerPos = headerContainer.getBoundingClientRect()
				const headerBottom = headerContainerPos.y + headerContainerPos.height
				if (navBarPos.y <= 0 && headerBottom <= 0 && !isNavBarFixed) {
					isNavBarFixed = true
					toogleNavBar(true)
				} else if (headerBottom > 0 && isNavBarFixed) {
					isNavBarFixed = false
					toogleNavBar(false)
				}
			}

			if (menuToggle) {
				const menuTogglePos = menuToggle.getBoundingClientRect()
				const mobileMenuPos = { x: 0, y: 0 }
				mobileMenuPos.x = menuTogglePos.x + menuTogglePos.width / 2
				mobileMenuPos.y = menuTogglePos.y + menuTogglePos.height / 2

				setMobileMenuPos(mobileMenuPos)
			}
		})

		const mobileMenuPos = { x: 0, y: 0 }
		if (menuToggle && menuNav) {
			const menuNavLinks: NodeListOf<HTMLAnchorElement> | null = menuNav.querySelectorAll(
				'a'
			)
			let menuTogglePos = menuToggle.getBoundingClientRect()
			menuToggle.addEventListener('click', () => {
				menuTogglePos = menuToggle.getBoundingClientRect()
				mobileMenuPos.x = menuTogglePos.x + menuTogglePos.width / 2
				mobileMenuPos.y = menuTogglePos.y + menuTogglePos.height / 2

				setMobileMenuPos(mobileMenuPos)

				setMenuActive(true)
				menuToggle.style.display = 'none'
				document.body.classList.toggle('lock-scroll')

				tl.play(0)
			})
			menuNavLinks.forEach((link) => {
				link.addEventListener('click', () => {
					setMenuActive(false)
					setTimeout(() => {
						menuToggle.style.display = ''
					}, 300)
					document.body.classList.toggle('lock-scroll')
				})
			})
		}

		if (closeMenu && menuToggle) {
			closeMenu.addEventListener('click', () => {
				setMenuActive(false)
				setTimeout(() => {
					menuToggle.style.display = ''
				}, 300)
				document.body.classList.toggle('lock-scroll')
			})
		}

		const tl = gsap.timeline()
		tl.fromTo(
			'.mobile-menu-li',
			{ y: -100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.3,
				immediateRender: false,
			}
		)
	}, [])

	const renderSkillsNavlink = (isOnStartpage) => {
		if (isOnStartpage) {
			return <a onClick={() => scrollToElement('skills')}>Skills</a>
		}
		return (
			<Link href='/#skills'>
				<a>Skills</a>
			</Link>
		)
	}

	return (
		<>
			<ToastContainer style={{ fontSize: '1.5rem' }} />
			<NavBg id='navBar'>
				<Nav>
					<Link href='/'>
						<a className='link-tag'>
							<LogoTitle>
								<span>&lt;</span>
								<span>Sebastian</span>
								<span>Widin</span>/<span>&gt;</span>
							</LogoTitle>
						</a>
					</Link>
					<Menu>
						<li>
							<Link href='/portfolio/'>
								<a>Projects</a>
							</Link>
						</li>
						<li>{renderSkillsNavlink(startpage)}</li>
						<li>
							<a onClick={() => scrollToElement('contact')}>Contact</a>
						</li>
					</Menu>
					<MenuToggle id='menuToggle'>
						<MoreVertIcon style={{ fontSize: '3rem' }} />
					</MenuToggle>
				</Nav>
			</NavBg>
			<NavBarSpacer id='navBarSpacer' />
			<MobileNav
				id='menuNav'
				style={{
					transition: menuActive
						? 'clip-path ease-out 0.3s, opacity linear 0s 0s'
						: 'clip-path ease-out 0.3s, opacity linear 0s 0.3s',
					opacity: menuActive ? '1' : '0',
					pointerEvents: menuActive ? 'auto' : 'none',
					clipPath: `circle(${menuActive ? '200%' : '0%'} at ${
						mobileMenuPos.x
					}px ${mobileMenuPos.y}px)`,
				}}
			>
				<CloseMobileMenu id='closeMenu'>
					<CloseIcon style={{ fontSize: '3rem' }} />
				</CloseMobileMenu>
				<MobileMenu>
					<li className='mobile-menu-li'>
						<Link href='/portfolio/'>
							<a>Projects</a>
						</Link>
					</li>
					<li className='mobile-menu-li'>{renderSkillsNavlink(startpage)}</li>
					<li className='mobile-menu-li'>
						<a onClick={() => scrollToElement('contact')}>Contact</a>
					</li>
				</MobileMenu>
			</MobileNav>
			{/* <Debug>
				x-rotate:<span id='xRotateDebug'></span>, y-rotate:
				<span id='yRotateDebug'></span>
			</Debug> */}
		</>
	)
}

export default NavBar

/* const Debug = styled.div`
	position: fixed;
	padding: 20px;
	top: 60px;
	left: 0;
	font-size: 1.2rem;
	z-index: 3500;
	transform: translateZ(3500px);
	background-color: rgba(255, 255, 255, 0.8);
` */

const NavBg = styled.section`
	background: ${color.mainAccentColor};
	box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	transform: translateZ(2500px);
	width: 100%;
	z-index: 2500;
`

const Nav = styled.nav`
	align-items: center;
	display: flex;
	height: 60px;
	justify-content: space-between;
	max-width: ${breakpoint.maxWidth};
	padding: 0 max(4rem, env(safe-area-inset-left));
	position: relative;
	width: 100%;
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 1em 0 2.5em;
	}
`

const LogoTitle = styled.h1`
	align-items: center;
	color: ${color.mainColorDark};
	cursor: pointer;
	display: flex;
	font-family: ${font.headingsFont};
	font-size: 2.2rem;
	font-weight: 250;
	letter-spacing: 0.07em;
	line-height: 0.9;
	text-transform: uppercase;
	span:nth-child(3) {
		font-weight: 500;
	}
	span:nth-child(1),
	span:nth-child(4) {
		font-weight: 200;
		line-height: 0.2;
		margin-top: -0.4em;
		transform: scale(1, 1.72);
	}
	transition: transform ease-in-out 0.2s;
	&:hover,
	&:focus {
		transform: scale(1.05);
	}
`

const Menu = styled.ul`
	align-items: center;
	display: flex;
	list-style-type: none;
	li {
		font-size: clamp(1.4rem, 1.5vw, 1.8rem);
		font-weight: 500;
		margin-left: 1em;
		margin-top: 0.45em;
		a {
			cursor: pointer;
			color: ${color.mainColorDark};
			display: block;
			padding: 0.5em 1em;
			&:hover,
			&:focus {
				outline: none;
				text-decoration: none;
				::after {
					width: 100%;
				}
			}
			&::after {
				background: ${color.mainColorDark};
				content: '';
				display: block;
				font-size: clamp(1.4rem, 1.5vw, 1.8rem);
				height: 0.12em;
				margin-top: 0.2em;
				transition: width ease-out 0.2s;
				width: 0;
			}
		}
	}
	@media screen and (max-width: ${breakpoint.tablet}) {
		display: none;
	}
`

const MenuToggle = styled.div`
	color: ${color.mainColorDark};
	cursor: pointer;
	display: none;
	padding: 0.5em;
	svg {
		margin-top: 0.1em;
	}
	@media screen and (max-width: ${breakpoint.tablet}) {
		display: block;
	}
`

const MobileNav = styled.div`
	background: rgba(${color.mainColorDarkRGB}, 0.95);
	height: 100vh;
	left: 0;
	padding: 3rem;
	position: fixed;
	top: 0;
	touch-action: none;
	transform: translateZ(3000px);
	width: 100vw;
	z-index: 3000;
`

const CloseMobileMenu = styled.div`
	color: ${color.mainAccentColor};
	cursor: pointer;
	padding: 0.5em;
	position: absolute;
	right: 1rem;
	top: 1rem;
`

const MobileMenu = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	height: 100%;
	justify-content: center;
	list-style-type: none;
	padding-top: 0;
	width: 100%;
	li {
		opacity: 0;
		font-size: clamp(2.4rem, 5vw, 3.2rem);
		font-weight: 400;
		margin-top: 0;
		a {
			color: ${color.mainAccentColor};
			display: block;
			padding: 0.5em 1em;
			&:hover,
			&:focus {
				text-decoration: none;
			}
		}
	}
	@media (orientation: portrait) {
		padding-top: 5vh;
		flex-direction: column;
		justify-content: flex-start;
		li {
			margin-top: 5vh;
		}
	}
`

const NavBarSpacer = styled.div`
	display: block;
	width: 100%;
`
