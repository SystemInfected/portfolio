import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import clientsData from '../../../data/clientsData.json'

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
		const speed = (resized.scroll / resized.width) * 5 || 5
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
	display: flex;
	gap: clamp(30px, 3vw, 60px);
	justify-content: space-between;
	margin-bottom: 3em;
	margin-top: 5em;
	overflow: hidden;
	width: 100%;
`
const scrollAnimation = (distance: number) => keyframes`
 0% { transform: translateX(0)}
 100% { transform: translateX(calc(-${distance}px - 2px)) }
`

const Client = styled.div<{ distance: number; speed: number }>`
	align-items: center;
	background-color: white;
	border-radius: 0.5em;
	display: flex;
	filter: grayscale(100%);
	flex-shrink: 0;
	height: clamp(90px, 8vw, 140px);
	justify-content: center;
	opacity: 0.5;
	padding: 1em;
	transition: filter ease-out 0.3s, opacity ease-out 0.3s;
	width: clamp(90px, 8vw, 140px);
	&:hover {
		filter: grayscale(0);
		opacity: 1;
	}
	img {
		height: 100%;
	}
	&.scroll {
		animation-direction: alternate;
		animation-duration: ${(props) => props.speed}s;
		animation-iteration-count: infinite;
		animation-name: ${(props) => scrollAnimation(props.distance)};
		animation-timing-function: ease-in-out;
	}
`
