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
			ctx.strokeStyle = 'red'
			ctx.lineWidth = 3
			ctx.lineCap = 'round'
			ctx.lineJoin = 'round'

			//Lines (bottom first)
			ctx.beginPath()
			ctx.moveTo(14, 1700)
			ctx.lineTo(162, 1570)
			ctx.lineTo(246, 1710)
			ctx.lineTo(570, 1560)
			ctx.lineTo(676, 1710)
			ctx.lineTo(757, 1540)
			ctx.lineTo(840, 1700)
			ctx.stroke()

			//Lines (bottom second)
			ctx.beginPath()
			ctx.moveTo(0, 1640)
			ctx.lineTo(102, 1416)
			ctx.lineTo(162, 1570)
			ctx.lineTo(570, 1422)
			ctx.lineTo(570, 1560)
			ctx.stroke()

			//Lines (bottom third)
			ctx.beginPath()
			ctx.moveTo(0, 1640)
			ctx.lineTo(162, 1570)
			ctx.lineTo(570, 1560)
			ctx.lineTo(757, 1540)
			ctx.lineTo(570, 1422)
			ctx.lineTo(255, 1333)
			ctx.lineTo(162, 1570)
			ctx.stroke()

			//Lines (neck)
			ctx.beginPath()
			ctx.moveTo(0, 1436)
			ctx.lineTo(102, 1416)
			ctx.lineTo(255, 1333)
			ctx.lineTo(236, 1250)
			ctx.lineTo(178, 1340)
			ctx.lineTo(102, 1416)
			ctx.lineTo(0, 1392)
			ctx.stroke()

			//Lines (chin first)
			ctx.beginPath()
			ctx.moveTo(0, 1292)
			ctx.lineTo(102, 1416)
			ctx.lineTo(74, 1220)
			ctx.lineTo(132, 1340)
			ctx.lineTo(178, 1340)
			ctx.lineTo(200, 1206)
			ctx.lineTo(74, 1220)
			ctx.closePath()
			ctx.stroke()

			//Lines (chin second)
			ctx.beginPath()
			ctx.moveTo(102, 1416)
			ctx.lineTo(132, 1340)
			ctx.lineTo(200, 1206)
			ctx.lineTo(286, 1172)
			ctx.lineTo(236, 1250)
			ctx.stroke()

			//Lines (lips first)
			ctx.beginPath()
			ctx.moveTo(0, 1232)
			ctx.lineTo(74, 1220)
			ctx.lineTo(0, 1186)
			ctx.lineTo(64, 1158)
			ctx.lineTo(0, 1158)
			ctx.stroke()

			//Lines (lips second + nose)
			ctx.beginPath()
			ctx.moveTo(74, 1220)
			ctx.lineTo(128, 1164)
			ctx.lineTo(64, 1158)
			ctx.lineTo(0, 1078)
			ctx.lineTo(28, 1064)
			ctx.lineTo(0, 1056)
			ctx.lineTo(60, 1020)
			ctx.lineTo(0, 992)
			ctx.lineTo(34, 860)
			ctx.lineTo(0, 716)
			ctx.lineTo(62, 758)
			ctx.lineTo(34, 860)
			ctx.lineTo(68, 972)
			ctx.lineTo(0, 992)
			ctx.stroke()

			//Lines (lips third)
			ctx.beginPath()
			ctx.moveTo(0, 1186)
			ctx.lineTo(128, 1164)
			ctx.lineTo(200, 1206)
			ctx.lineTo(320, 980)
			ctx.lineTo(128, 1164)
			ctx.lineTo(84, 1048)
			ctx.lineTo(64, 1158)
			ctx.stroke()

			//Lines (nose second)
			ctx.beginPath()
			ctx.moveTo(28, 1064)
			ctx.lineTo(84, 1048)
			ctx.lineTo(60, 1020)
			ctx.lineTo(96, 1010)
			ctx.lineTo(68, 972)
			ctx.lineTo(60, 1020)
			ctx.closePath()
			ctx.stroke()
		}
	})

	return <canvas ref={canvasRef} />
}

export default AnimatedNodes
