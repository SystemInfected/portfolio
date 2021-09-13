import styled from 'styled-components'
import { clientsData } from '../data/clientsData'

const ClientsList = () => {
	const clientsItemsContent = Object.values(clientsData).map((client) => {
		return (
			<Client key={client.url} id='client'>
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
	overflow-x: visible;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`

const Client = styled.div`
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
`
