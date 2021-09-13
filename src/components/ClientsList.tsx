import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { clientsData } from '../data/clientsData'

const ClientsList = () => {
	const [resized, setResized] = useState({ scroll: 0, width: 0 })
	const diff = 20
	const handleResize = () => {
		const clientContainer = document.getElementById('clientContainer')
		setResized({
			scroll: clientContainer?.scrollWidth || 0,
			width: clientContainer?.clientWidth || 0,
		})
	}

	useEffect(() => {
		const clientContainer = document.getElementById('clientContainer')
		if (clientContainer) {
			const clients = clientContainer.querySelectorAll('#client')
			if (clientContainer.scrollWidth - diff > clientContainer.clientWidth) {
				clients.forEach((client) => {
					client.classList.add('scroll')
				})
			} else {
				clients.forEach((client) => {
					client.classList.remove('scroll')
				})
			}
		}

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	})

	useEffect(() => {
		handleResize()
	}, [])

	const clientsItemsContent = Object.values(clientsData).map((client) => {
		const distance = resized.scroll - resized.width
		const speed = (resized.scroll / resized.width) * 5
		return (
			<Client key={client.url} id='client' distance={distance} speed={speed}>
				<img
					src={`images/${client.url}`}
					alt={client.name}
					title={client.name}
				/>
			</Client>
		)
	})

	return (
		<ClientContainer id='clientContainer'>
			{clientsItemsContent}
		</ClientContainer>
	)
}

export default ClientsList

const ClientContainer = styled.div`
	box-sizing: border-box;
	margin-top: 5em;
	margin-bottom: 3em;
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: clamp(30px, 3vw, 60px);
	overflow: hidden;
`
const scrollAnimation = (distance: number) => keyframes`
 0% { transform: translateX(0)}
 100% { transform: translateX(calc(-${distance}px - 2px)) }
`

const Client = styled.div<{ distance: number; speed: number }>`
	height: clamp(90px, 8vw, 140px);
	width: clamp(90px, 8vw, 140px);
	background-color: white;
	padding: 1em;
	border-radius: 0.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	filter: grayscale(100%);
	opacity: 0.5;
	transition: filter ease-out 0.3s, opacity ease-out 0.3s;
	&:hover {
		filter: grayscale(0);
		opacity: 1;
	}
	img {
		height: 100%;
	}
	&.scroll {
		animation-name: ${(props) => scrollAnimation(props.distance)};
		animation-duration: ${(props) => props.speed}s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
		animation-timing-function: ease-in-out;
	}
`
