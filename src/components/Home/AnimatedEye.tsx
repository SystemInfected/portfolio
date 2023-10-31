import React, { useRef, useEffect } from 'react'

const AnimatedEye = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const draw = (ctx: any, eyePos: any) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		// Eye background
		ctx.beginPath()
		ctx.arc(eyePos.x + 729.29, eyePos.y + 815.36, 120, 0, 2 * Math.PI)
		ctx.fillStyle = '#E9E8E9'
		ctx.fill()
		ctx.closePath()

		// Iris
		ctx.beginPath()
		ctx.arc(eyePos.x + 729.29, eyePos.y + 815.36, 35.29, 0, 2 * Math.PI)
		ctx.fillStyle = '#6F7CDB'
		ctx.strokeStyle = 'black'
		ctx.strokeWidth = 3
		ctx.fill()
		ctx.stroke()
		ctx.closePath()

		// Pupil
		ctx.beginPath()
		ctx.arc(eyePos.x + 729.29, eyePos.y + 815.36, 15.16, 0, 2 * Math.PI)
		ctx.fillStyle = 'black'
		ctx.fill()
		ctx.closePath()

		// Highlights
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

	let newMousePos = { y: 0, x: 0 }
	const eyeMaxX = 900
	const eyeMaxYTop = 500
	const eyeMaxYBottom = 700

	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvasRef.current?.getContext('2d')

		if (canvas) {
			canvas.width = 900
			canvas.height = 1700

			const headerContainer = document.querySelector('#headerContainer')
			if (headerContainer) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				headerContainer.addEventListener('mousemove', (event: any) => {
					const canvasXMultiplier =
						canvas.width / canvas.getBoundingClientRect().width
					const canvasYMultiplier =
						canvas.height / canvas.getBoundingClientRect().height
					const mouseX: number =
						(event.x - canvas.getBoundingClientRect().x) * canvasXMultiplier -
						729.29
					const mouseY: number =
						(event.y - canvas.getBoundingClientRect().y) * canvasYMultiplier -
						815.36

					newMousePos = { x: mouseX, y: mouseY }
				})
				headerContainer.addEventListener('mouseout', () => {
					newMousePos = { x: 0, y: 0 }
				})
				headerContainer.addEventListener(
					'touchstart touchmove',
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(event: any) => {
						const canvasXMultiplier =
							canvas.width / canvas.getBoundingClientRect().width
						const canvasYMultiplier =
							canvas.height / canvas.getBoundingClientRect().height
						const mouseX: number =
							(event.touches[0].clientX - canvas.getBoundingClientRect().x) *
							canvasXMultiplier
						const mouseY: number =
							(event.touches[0].clientY - canvas.getBoundingClientRect().y) *
							canvasYMultiplier

						newMousePos = { x: mouseX, y: mouseY }
					}
				)
				headerContainer.addEventListener(
					'touchend touchcancel touchleave',
					() => {
						newMousePos = { x: 0, y: 0 }
					}
				)
			}
		}

		let frameCount = 0
		let animationFrameId: number
		let mousePosCheck = { x: 0, y: 0 }
		let mousePosDoubleCheck = { x: 0, y: 0 }
		const updatedEyePos = { x: 0, y: 0 }
		const eyeSpeed = 3
		const render = () => {
			if (newMousePos) {
				if (mousePosCheck === newMousePos && frameCount > 0) {
					mousePosDoubleCheck = mousePosCheck
					frameCount = -180
				}
				if (
					mousePosDoubleCheck === newMousePos &&
					frameCount > -50 &&
					frameCount < 0
				) {
					if (updatedEyePos.x > 3) {
						updatedEyePos.x -= eyeSpeed
					} else if (updatedEyePos.x < -3) {
						updatedEyePos.x += eyeSpeed
					}
					if (updatedEyePos.y > 3) {
						updatedEyePos.y -= eyeSpeed
					} else if (updatedEyePos.y < -3) {
						updatedEyePos.y += eyeSpeed
					}
				} else {
					frameCount++
					if (
						newMousePos.x > 50 &&
						newMousePos.x < eyeMaxX &&
						newMousePos.y < eyeMaxYBottom &&
						newMousePos.y > -eyeMaxYTop
					) {
						if (updatedEyePos.x < 20) {
							updatedEyePos.x += eyeSpeed
						}
					} else if (
						newMousePos.x < -50 &&
						newMousePos.x > -eyeMaxX &&
						newMousePos.y < eyeMaxYBottom &&
						newMousePos.y > -eyeMaxYTop
					) {
						if (updatedEyePos.x > -20) {
							updatedEyePos.x -= eyeSpeed
						}
					} else if (newMousePos.x === 0) {
						if (updatedEyePos.x > 3) {
							updatedEyePos.x -= eyeSpeed
						} else if (updatedEyePos.x < -3) {
							updatedEyePos.x += eyeSpeed
						}
					} else if (updatedEyePos.x > 3) {
						updatedEyePos.x -= eyeSpeed
					} else if (updatedEyePos.x < -3) {
						updatedEyePos.x += eyeSpeed
					}
					if (
						newMousePos.y > 50 &&
						newMousePos.y < eyeMaxYBottom &&
						newMousePos.x < eyeMaxX &&
						newMousePos.x > -eyeMaxX
					) {
						if (updatedEyePos.y < 20) {
							updatedEyePos.y += eyeSpeed
						}
					} else if (
						newMousePos.y < -50 &&
						newMousePos.y > -eyeMaxYTop &&
						newMousePos.x < eyeMaxX &&
						newMousePos.x > -eyeMaxX
					) {
						if (updatedEyePos.y > -10) {
							updatedEyePos.y -= eyeSpeed
						}
					} else if (newMousePos.y === 0) {
						if (updatedEyePos.y > 3) {
							updatedEyePos.y -= eyeSpeed
						} else if (updatedEyePos.y < -3) {
							updatedEyePos.y += eyeSpeed
						}
					} else if (updatedEyePos.y > 3) {
						updatedEyePos.y -= eyeSpeed
					} else if (updatedEyePos.y < -3) {
						updatedEyePos.y += eyeSpeed
					}
					mousePosCheck = newMousePos
				}
			}

			draw(context, updatedEyePos)
			animationFrameId = window.requestAnimationFrame(render)
		}
		render()

		return () => {
			window.cancelAnimationFrame(animationFrameId)
		}
	}, [draw])

	return <canvas ref={canvasRef} />
}

export default AnimatedEye
