import React, { useRef, useEffect } from 'react'

const AnimatedEye = (props) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	let eyePos = { x: 0, y: 0 }

	const draw = (ctx, frameCount, newMousePos) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		if (
			newMousePos.x > 50 &&
			newMousePos.x < 500 &&
			newMousePos.y < 500 &&
			newMousePos.y > -500
		) {
			eyePos.x = 20
		} else if (
			newMousePos.x < -50 &&
			newMousePos.x > -500 &&
			newMousePos.y < 500 &&
			newMousePos.y > -500
		) {
			eyePos.x = -20
		} else if (newMousePos.x == undefined) {
			eyePos.x = 0
		} else {
			eyePos.x = 0
		}
		if (
			newMousePos.y > 50 &&
			newMousePos.y < 500 &&
			newMousePos.x < 500 &&
			newMousePos.x > -500
		) {
			eyePos.y = 20
		} else if (
			newMousePos.y < -50 &&
			newMousePos.y > -500 &&
			newMousePos.x < 500 &&
			newMousePos.x > -500
		) {
			eyePos.y = -10
		} else if (newMousePos.y == undefined) {
			eyePos.x = 0
		} else {
			eyePos.y = 0
		}

		//Eye background
		ctx.beginPath()
		ctx.arc(eyePos.x + 729.29, eyePos.y + 815.36, 120, 0, 2 * Math.PI)
		ctx.fillStyle = '#E9E8E9'
		ctx.fill()
		ctx.closePath()

		//Iris
		ctx.beginPath()
		ctx.arc(eyePos.x + 729.29, eyePos.y + 815.36, 35.29, 0, 2 * Math.PI)
		ctx.fillStyle = '#6F7CDB'
		ctx.strokeStyle = 'black'
		ctx.strokeWidth = 3
		ctx.fill()
		ctx.stroke()
		ctx.closePath()

		//Pupil
		ctx.beginPath()
		ctx.arc(eyePos.x + 729.29, eyePos.y + 815.36, 15.16, 0, 2 * Math.PI)
		ctx.fillStyle = 'black'
		ctx.fill()
		ctx.closePath()

		//Highlights
		ctx.beginPath()
		ctx.arc(
			eyePos.x * 0.9 + 746.77,
			eyePos.y * 0.5 + 823.44,
			2.44,
			0,
			2 * Math.PI
		)
		ctx.fillStyle = 'white'
		ctx.fill()
		ctx.closePath()

		ctx.beginPath()
		ctx.arc(
			eyePos.x * 0.9 + 740.47,
			eyePos.y * 0.5 + 820.27,
			3.57,
			0,
			2 * Math.PI
		)
		ctx.fillStyle = 'white'
		ctx.fill()
		ctx.closePath()
	}

	let newMousePos = { y: undefined, x: undefined }

	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvasRef.current?.getContext('2d')

		if (canvas) {
			canvas.width = 900
			canvas.height = 1700

			const headerContainer = document.querySelector('#header-container')
			if (headerContainer) {
				headerContainer.addEventListener('mousemove', (event: any) => {
					let canvasXMultiplier =
						canvas.width / canvas.getBoundingClientRect().width
					let canvasYMultiplier =
						canvas.height / canvas.getBoundingClientRect().height
					let mouseX: any =
						(event.x - canvas.getBoundingClientRect().x) * canvasXMultiplier -
						729.29
					let mouseY: any =
						(event.y - canvas.getBoundingClientRect().y) * canvasYMultiplier -
						815.36

					newMousePos = { x: mouseX, y: mouseY }
				})
				canvas.addEventListener('mouseout', (event) => {
					newMousePos = { x: undefined, y: undefined }
				})
				canvas.addEventListener('touchstart', (event) => {
					let canvasXMultiplier =
						canvas.width / canvas.getBoundingClientRect().width
					let canvasYMultiplier =
						canvas.height / canvas.getBoundingClientRect().height
					let mouseX: any =
						(event.touches[0].clientX - canvas.getBoundingClientRect().x) *
						canvasXMultiplier
					let mouseY: any =
						(event.touches[0].clientY - canvas.getBoundingClientRect().y) *
						canvasYMultiplier

					newMousePos = { x: mouseX, y: mouseY }
				})
				canvas.addEventListener('touchend', (event) => {
					newMousePos = { x: undefined, y: undefined }
				})
				canvas.addEventListener('touchcancel', (event) => {
					newMousePos = { x: undefined, y: undefined }
				})
				canvas.addEventListener('touchleave', (event) => {
					newMousePos = { x: undefined, y: undefined }
				})
			}
		}

		let frameCount = 0
		let animationFrameId: number
		const render = () => {
			frameCount++

			draw(context, frameCount, newMousePos)
			animationFrameId = window.requestAnimationFrame(render)
		}
		render()

		return () => {
			window.cancelAnimationFrame(animationFrameId)
		}
	}, [draw])

	return <canvas ref={canvasRef} {...props} />
}

export default AnimatedEye
