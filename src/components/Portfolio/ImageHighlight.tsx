import React, { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

interface ImageHighlightProps {
	url: string
	title: string
	callback: () => void
}

const ImageHighlight = ({ url, title, callback }: ImageHighlightProps) => {
	useEffect(() => {
		const imageContainer = document.querySelector('#image-highlight-container')
		gsap.defaults({
			ease: 'power2.out',
			duration: 0.5,
			immediateRender: false,
		})

		gsap.fromTo(
			imageContainer,
			{
				autoAlpha: 0,
			},
			{ autoAlpha: 1 }
		)
	}, [])

	return (
		<ImageContainer id='image-highlight-container' onClick={() => callback()}>
			<img src={url} alt={title} />
		</ImageContainer>
	)
}

export default ImageHighlight

const ImageContainer = styled.div`
	position: absolute;
	z-index: 3000;
	transform: translateZ(3000px);
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	visibility: hidden;
	img {
		object-fit: contain;
		height: 80%;
		width: 90%;
	}
`
