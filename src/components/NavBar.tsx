import { useEffect } from 'react'
import styled from 'styled-components'
import { color, font, breakpoint } from '../css/variables'

const NavBar = () => {
	useEffect(() => {
		const navBar: HTMLElement | null = document.querySelector('#navBar')
		const headerContainer = document.querySelector('#headerContainer')
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
		})
	}, [])

	return (
		<Nav id="navBar">
			<LogoTitle>
				<span>Sebastian</span>
				<span>/</span>
				<span>Widin</span>
			</LogoTitle>
			<ul>
				<li>
					<a href="#">Work</a>
				</li>
				<li>
					<a href="#">Skills</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</Nav>
	)
}

export default NavBar

const Nav = styled.nav`
	position: relative;
	display: flex;
	padding: 1em;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background: ${color.mainAccentColor};
`

const LogoTitle = styled.h1``
