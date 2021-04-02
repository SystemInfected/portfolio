import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { color, font, breakpoint } from '../../styles/variables'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const NavBar = () => {
	const [mobileMenuPos, setMobileMenuPos] = useState({ x: 0, y: 0 })
	const [menuActive, setMenuActive] = useState(false)

	useEffect(() => {
		const navBar: HTMLElement | null = document.querySelector('#navBar')
		const headerContainer = document.querySelector('#headerContainer')
		const menuToggle: HTMLElement | null = document.querySelector('#menuToggle')
		const menuNav: HTMLElement | null = document.querySelector('#menuNav')
		let isNavBarFixed = false

		const toogleNavBar = (toogle: boolean) => {
			if (navBar) {
				if (toogle) {
					navBar.style.position = 'fixed'
					navBar.style.top = '0'
				} else {
					navBar.style.position = 'relative'
					navBar.style.top = ''
				}
			}
		}

		const toggleMenu = () => {
			if (menuNav) {
				if (menuActive) {
					setMenuActive(false)
				} else {
					setMenuActive(true)
				}
			}
		}

		window.addEventListener('scroll', (e) => {
			if (navBar && headerContainer) {
				let navBarPos = navBar.getBoundingClientRect()
				let headerContainerPos = headerContainer.getBoundingClientRect()
				let headerBottom = headerContainerPos.y + headerContainerPos.height
				if (navBarPos.y <= 0 && headerBottom <= 0 && !isNavBarFixed) {
					isNavBarFixed = true
					toogleNavBar(true)
				} else if (headerBottom > 0 && isNavBarFixed) {
					isNavBarFixed = false
					toogleNavBar(false)
				}
			}

			if (menuToggle) {
				let menuTogglePos = menuToggle.getBoundingClientRect()
				let mobileMenuPos = { x: 0, y: 0 }
				mobileMenuPos.x = menuTogglePos.x + menuTogglePos.width / 2
				mobileMenuPos.y = menuTogglePos.y + menuTogglePos.height / 2

				setMobileMenuPos(mobileMenuPos)
			}
		})

		let mobileMenuPos = { x: 0, y: 0 }
		if (menuToggle && menuNav) {
			let menuTogglePos = menuToggle.getBoundingClientRect()
			menuToggle.addEventListener('click', () => {
				menuTogglePos = menuToggle.getBoundingClientRect()
				mobileMenuPos.x = menuTogglePos.x + menuTogglePos.width / 2
				mobileMenuPos.y = menuTogglePos.y + menuTogglePos.height / 2

				setMobileMenuPos(mobileMenuPos)

				toggleMenu()
			})
		}
	}, [])

	return (
		<NavBg id='navBar'>
			<Nav>
				<LogoTitle>
					<span>Sebastian</span>
					<span>Widin</span>
				</LogoTitle>
				<Menu>
					<li>
						<a href='#'>Work</a>
					</li>
					<li>
						<a href='#'>Skills</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</Menu>
				<MenuToggle id='menuToggle'>
					<MoreVertIcon style={{ fontSize: '3rem' }} />
				</MenuToggle>
			</Nav>
			<MobileNav
				id='menuNav'
				active={menuActive}
				position={mobileMenuPos}
			></MobileNav>
		</NavBg>
	)
}
export default NavBar

const NavBg = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	background: ${color.mainAccentColor};
	box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
	position: relative;
	display: flex;
	padding: 0 4rem;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: ${breakpoint.maxWidth};
	height: 60px;
	@media (orientation: portrait) {
		padding: 0 1em 0 2.5em;
	}
`

const LogoTitle = styled.h1`
	font-family: ${font.headingsFont};
	color: ${color.mainColorDark};
	font-size: 2.2rem;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	line-height: 0.9;
	font-weight: 250;
	letter-spacing: 0.07em;
	span:nth-child(2) {
		font-weight: 500;
	}
`

const Menu = styled.ul`
	list-style-type: none;
	display: flex;
	align-items: center;
	li {
		font-size: clamp(1.4rem, 1.5vw, 1.8rem);
		font-weight: 500;
		margin-top: 0.45em;
		margin-left: 1em;
		a {
			display: block;
			padding: 0.5em 1em;
			color: ${color.mainColorDark};
			&:hover,
			&:focus {
				text-decoration: none;
				outline: none;
				::after {
					width: 100%;
				}
			}
			&::after {
				content: '';
				font-size: clamp(1.4rem, 1.5vw, 1.8rem);
				display: block;
				margin-top: 0.2em;
				width: 0;
				height: 0.12em;
				background: ${color.mainColorDark};
				transition: width ease-out 0.2s;
			}
		}
	}
	@media screen and (max-width: ${breakpoint.tablet}) {
		display: none;
	}
`

const MenuToggle = styled.div`
	display: none;
	padding: 0.5em;
	cursor: pointer;
	svg {
		margin-top: 0.1em;
	}
	@media screen and (max-width: ${breakpoint.tablet}) {
		display: block;
	}
`

interface MobileNav {
	active: boolean
	position: any
}

const MobileNav = styled.div<MobileNav>`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 30;
	background: ${color.mainColorDark};
	clip-path: circle(
		${(props) => (props.active ? '200%' : '0%')} at
			${(props) => props.position.x}px ${(props) => props.position.y}px
	);
	transition: clip-path ease-out 0.3s;
`
