import React, { useRef, useEffect } from 'react'
import { color } from '../css/variables'

const AnimatedNodes = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const c = canvasRef.current
		const ctx = canvasRef.current?.getContext('2d')
		if (c) {
			c.width = 900
			c.height = 1700
		}
		if (ctx) {
			//ctx.strokeStyle = `${color.mainColorLight}`
			ctx.strokeStyle = 'black'
			ctx.lineWidth = 3
			ctx.lineCap = 'round'
			ctx.lineJoin = 'round'

			//Lines (bottom first row)
			ctx.beginPath()
			ctx.moveTo(14, 1700)
			ctx.lineTo(162, 1570)
			ctx.lineTo(246, 1710)
			ctx.lineTo(570, 1560)
			ctx.lineTo(676, 1710)
			ctx.lineTo(757, 1540)
			ctx.lineTo(840, 1700)
			ctx.stroke()

			//Lines (bottom second row)
			ctx.beginPath()
			ctx.moveTo(0, 1640)
			ctx.lineTo(162, 1570)
			ctx.stroke()
		}
	})

	return <canvas ref={canvasRef} />
}

export default AnimatedNodes
