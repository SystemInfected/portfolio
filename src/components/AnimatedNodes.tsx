import React, { useRef, useEffect } from 'react'
import { color } from '../../styles/variables'

const AnimatedNodes = (props) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const draw = (ctx, frameCount, mousePos) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		//circles
		const nodeDots = [
			randPos(
				136,
				240,
				frameCount * 0.5,
				frameCount * -Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(
				54,
				276,
				frameCount * 0.2,
				frameCount * Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(
				116,
				390,
				frameCount * Math.sin(frameCount * 0.1 * 0.02),
				frameCount * 0.3,
				mousePos
			),
			randPos(
				286,
				390,
				frameCount * 0.1,
				frameCount * Math.sin(frameCount * 0.3 * 0.02),
				mousePos
			),
			randPos(332, 554, frameCount * 0.1, frameCount * 0.2, mousePos),
			randPos(
				274,
				518,
				frameCount * -Math.sin(frameCount * 0.2 * 0.02),
				frameCount * 0.2,
				mousePos
			),
			randPos(98, 706, frameCount * 0.2, frameCount * 0.15, mousePos),
			randPos(198, 708, -frameCount * 0.1, frameCount * 0.15, mousePos),
			randPos(
				272,
				794,
				frameCount * 0.3,
				frameCount * -Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(160, 758, frameCount * 0.1, frameCount * 0.15, mousePos),
			randPos(62, 758, -frameCount * 0.15, frameCount * 0.1, mousePos),
			randPos(
				334,
				752,
				-frameCount * 0.2,
				frameCount * -Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(
				346,
				736,
				frameCount * 0.1,
				frameCount * -Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(360, 768, frameCount * 0.15, frameCount * 0.15, mousePos),
			randPos(280, 900, frameCount * 0.1, frameCount * 0.05, mousePos),
			randPos(
				328,
				828,
				frameCount * 0.5,
				frameCount * -Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(346, 842, frameCount * 0.1, frameCount * 0.2, mousePos),
			randPos(320, 980, frameCount * 0.1, -frameCount * 0.15, mousePos),
			randPos(332, 926, -frameCount * 0.1, frameCount * 0.2, mousePos),
			randPos(
				122,
				796,
				frameCount * 0.2,
				frameCount * Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(
				150,
				848,
				frameCount * 0.1,
				frameCount * -Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(206, 810, -frameCount * 0.15, frameCount * 0.1, mousePos),
			randPos(168, 800, frameCount * 0.1, -frameCount * 0.15, mousePos),
			randPos(242, 818, frameCount * 0.1, -frameCount * 0.1, mousePos),
			randPos(
				308,
				1044,
				frameCount * 0.1,
				frameCount * Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(
				366,
				1096,
				frameCount * 0.1,
				-frameCount * Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(
				387,
				1050,
				frameCount * 0.1,
				frameCount * Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(368, 988, -frameCount * 0.15, frameCount * 0.15, mousePos),
			randPos(344, 974, frameCount * 0.2, -frameCount * 0.1, mousePos),
			randPos(
				334,
				1052,
				frameCount * Math.sin(frameCount * 0.1 * 0.02),
				frameCount * 0.3,
				mousePos
			),
			randPos(
				300,
				1094,
				frameCount * 0.3,
				frameCount * Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(332, 1114, frameCount * 0.2, -frameCount * 0.1, mousePos),
			randPos(28, 1064, frameCount * 0.15, frameCount * 0.15, mousePos),
			randPos(
				84,
				1048,
				frameCount * 0.3,
				frameCount * Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(60, 1020, frameCount * 0.2, -frameCount * 0.1, mousePos),
			randPos(
				68,
				972,
				frameCount * 0.1,
				frameCount * Math.sin(frameCount * 0.3 * 0.02),
				mousePos
			),
			randPos(
				74,
				1220,
				-frameCount * 0.2,
				frameCount * -Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(128, 1164, frameCount * 0.2, -frameCount * 0.1, mousePos),
			randPos(
				64,
				1158,
				frameCount * Math.sin(frameCount * 0.1 * 0.02),
				frameCount * 0.1,
				mousePos
			),
			randPos(34, 860, frameCount * 0.2, -frameCount * 0.1, mousePos),
			randPos(
				96,
				1010,
				frameCount * 0.2,
				frameCount * Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(70, 832, frameCount * 0.1, -frameCount * 0.2, mousePos),
			randPos(68, 792, frameCount * 0.2, -frameCount * 0.1, mousePos),
			randPos(102, 1416, frameCount * 0.15, frameCount * 0.15, mousePos),
			randPos(
				132,
				1340,
				frameCount * Math.sin(frameCount * 0.1 * 0.02),
				frameCount * 0.3,
				mousePos
			),
			randPos(
				200,
				1206,
				frameCount * 0.1,
				-frameCount * Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(286, 1172, frameCount * 0.2, -frameCount * 0.1, mousePos),
			randPos(236, 1250, frameCount * 0.2, -frameCount * 0.1, mousePos),
			randPos(
				178,
				1340,
				frameCount * 0.2,
				frameCount * -Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(162, 1570, frameCount * 0.2, -frameCount * 0.1, mousePos),
			randPos(570, 1560, frameCount * 0.1, -frameCount * 0.2, mousePos),
			randPos(
				757,
				1540,
				frameCount * Math.sin(frameCount * 0.1 * 0.02),
				frameCount * 0.3,
				mousePos
			),
			randPos(
				570,
				1422,
				-frameCount * 0.2,
				frameCount * -Math.sin(frameCount * 0.2 * 0.02),
				mousePos
			),
			randPos(255, 1333, frameCount * 0.2, -frameCount * 0.1, mousePos),
		]

		const nodeLines = [
			randPos(2, 1640, 0, -frameCount * 0.1, mousePos, false),
			randPos(2, 1436, 0, -frameCount * 0.1, mousePos, false),
			randPos(2, 1392, 0, frameCount * 0.2, mousePos, false),
			randPos(2, 1292, 0, frameCount * 0.1, mousePos, false),
			randPos(2, 1232, 0, frameCount * 0.1, mousePos, false),
			randPos(2, 1186, 0, frameCount * 0.2, mousePos, false),
			randPos(2, 1158, 0, -frameCount * 0.1, mousePos, false),
			randPos(2, 1078, 0, -frameCount * 0.15, mousePos, false),
			randPos(2, 1056, 0, frameCount * 0.15, mousePos, false),
			randPos(
				2,
				992,
				0,
				frameCount * -Math.sin(frameCount * 0.15 * 0.02),
				mousePos,
				false
			),
			randPos(
				2,
				716,
				0,
				frameCount * Math.sin(frameCount * 0.3 * 0.02),
				mousePos,
				false
			),
			randPos(224, 832, frameCount * 0.2, -frameCount * 0.1, mousePos),
			randPos(2, 412, 0, frameCount * 0.15, mousePos, false),
			{ x: 2, y: 206 },
			randPos(14, 1700, frameCount * 0.15, 0, mousePos, false),
			randPos(246, 1710, frameCount * 0.2, 0, mousePos, false),
			randPos(
				676,
				1710,
				frameCount * -Math.sin(frameCount * 0.15 * 0.02),
				0,
				mousePos,
				false
			),
			randPos(840, 1700, -frameCount * 0.2, 0, mousePos, false),
		]

		nodeDots.forEach((dot) => {
			ctx.beginPath()
			ctx.arc(dot.x, dot.y, 7, 0, 2 * Math.PI)
			ctx.fillStyle = `${color.mainColorLight}`
			ctx.fill()
			ctx.closePath()
		})

		ctx.strokeStyle = `${color.mainColorLight}`
		ctx.lineWidth = 3
		ctx.lineCap = 'round'
		ctx.lineJoin = 'round'

		//Lines (bottom first)
		ctx.beginPath()
		ctx.moveTo(nodeLines[14].x, nodeLines[14].y)
		ctx.lineTo(nodeDots[49].x, nodeDots[49].y)
		ctx.lineTo(nodeLines[15].x, nodeLines[15].y)
		ctx.lineTo(nodeDots[50].x, nodeDots[50].y)
		ctx.lineTo(nodeLines[16].x, nodeLines[16].y)
		ctx.lineTo(nodeDots[51].x, nodeDots[51].y)
		ctx.lineTo(nodeLines[17].x, nodeLines[17].y)
		ctx.stroke()

		//Lines (bottom second)
		ctx.beginPath()
		ctx.moveTo(nodeLines[0].x, nodeLines[0].y)
		ctx.lineTo(nodeDots[43].x, nodeDots[43].y)
		ctx.lineTo(nodeDots[49].x, nodeDots[49].y)
		ctx.lineTo(nodeDots[52].x, nodeDots[52].y)
		ctx.lineTo(nodeDots[50].x, nodeDots[50].y)
		ctx.stroke()

		//Lines (bottom third)
		ctx.beginPath()
		ctx.moveTo(nodeLines[0].x, nodeLines[0].y)
		ctx.lineTo(nodeDots[49].x, nodeDots[49].y)
		ctx.lineTo(nodeDots[50].x, nodeDots[50].y)
		ctx.lineTo(nodeDots[51].x, nodeDots[51].y)
		ctx.lineTo(nodeDots[52].x, nodeDots[52].y)
		ctx.lineTo(nodeDots[53].x, nodeDots[53].y)
		ctx.lineTo(nodeDots[49].x, nodeDots[49].y)
		ctx.stroke()

		//Lines (neck)
		ctx.beginPath()
		ctx.moveTo(nodeLines[1].x, nodeLines[1].y)
		ctx.lineTo(nodeDots[43].x, nodeDots[43].y)
		ctx.lineTo(nodeDots[53].x, nodeDots[53].y)
		ctx.lineTo(nodeDots[47].x, nodeDots[47].y)
		ctx.lineTo(nodeDots[48].x, nodeDots[48].y)
		ctx.lineTo(nodeDots[43].x, nodeDots[43].y)
		ctx.lineTo(nodeLines[2].x, nodeLines[2].y)
		ctx.stroke()

		//Lines (chin first)
		ctx.beginPath()
		ctx.moveTo(nodeLines[3].x, nodeLines[3].y)
		ctx.lineTo(nodeDots[43].x, nodeDots[43].y)
		ctx.lineTo(nodeDots[36].x, nodeDots[36].y)
		ctx.lineTo(nodeDots[44].x, nodeDots[44].y)
		ctx.lineTo(nodeDots[48].x, nodeDots[48].y)
		ctx.lineTo(nodeDots[45].x, nodeDots[45].y)
		ctx.lineTo(nodeDots[36].x, nodeDots[36].y)
		ctx.closePath()
		ctx.stroke()

		//Lines (chin second)
		ctx.beginPath()
		ctx.moveTo(nodeDots[43].x, nodeDots[43].y)
		ctx.lineTo(nodeDots[44].x, nodeDots[44].y)
		ctx.lineTo(nodeDots[45].x, nodeDots[45].y)
		ctx.lineTo(nodeDots[46].x, nodeDots[46].y)
		ctx.lineTo(nodeDots[47].x, nodeDots[47].y)
		ctx.stroke()

		//Lines (lips first)
		ctx.beginPath()
		ctx.moveTo(nodeLines[4].x, nodeLines[4].y)
		ctx.lineTo(nodeDots[36].x, nodeDots[36].y)
		ctx.lineTo(nodeLines[5].x, nodeLines[5].y)
		ctx.lineTo(nodeDots[38].x, nodeDots[38].y)
		ctx.lineTo(nodeLines[6].x, nodeLines[6].y)
		ctx.stroke()

		//Lines (lips second + nose)
		ctx.beginPath()
		ctx.moveTo(nodeDots[36].x, nodeDots[36].y)
		ctx.lineTo(nodeDots[37].x, nodeDots[37].y)
		ctx.lineTo(nodeDots[38].x, nodeDots[38].y)
		ctx.lineTo(nodeLines[7].x, nodeLines[7].y)
		ctx.lineTo(nodeDots[32].x, nodeDots[32].y)
		ctx.lineTo(nodeLines[8].x, nodeLines[8].y)
		ctx.lineTo(nodeDots[34].x, nodeDots[34].y)
		ctx.lineTo(nodeLines[9].x, nodeLines[9].y)
		ctx.lineTo(nodeDots[39].x, nodeDots[39].y)
		ctx.lineTo(nodeLines[10].x, nodeLines[10].y)
		ctx.lineTo(nodeDots[10].x, nodeDots[10].y)
		ctx.lineTo(nodeDots[39].x, nodeDots[39].y)
		ctx.lineTo(nodeDots[35].x, nodeDots[35].y)
		ctx.lineTo(nodeLines[9].x, nodeLines[9].y)
		ctx.stroke()

		//Lines (lips third)
		ctx.beginPath()
		ctx.moveTo(nodeLines[5].x, nodeLines[5].y)
		ctx.lineTo(nodeDots[37].x, nodeDots[37].y)
		ctx.lineTo(nodeDots[45].x, nodeDots[45].y)
		ctx.lineTo(nodeDots[17].x, nodeDots[17].y)
		ctx.lineTo(nodeDots[37].x, nodeDots[37].y)
		ctx.lineTo(nodeDots[33].x, nodeDots[33].y)
		ctx.lineTo(nodeDots[38].x, nodeDots[38].y)
		ctx.stroke()

		//Lines (nose second)
		ctx.beginPath()
		ctx.moveTo(nodeDots[32].x, nodeDots[32].y)
		ctx.lineTo(nodeDots[33].x, nodeDots[33].y)
		ctx.lineTo(nodeDots[34].x, nodeDots[34].y)
		ctx.lineTo(nodeDots[40].x, nodeDots[40].y)
		ctx.lineTo(nodeDots[35].x, nodeDots[35].y)
		ctx.lineTo(nodeDots[34].x, nodeDots[34].y)
		ctx.closePath()
		ctx.stroke()

		//Lines (nose third)
		ctx.beginPath()
		ctx.moveTo(nodeDots[39].x, nodeDots[39].y)
		ctx.lineTo(nodeDots[41].x, nodeDots[41].y)
		ctx.lineTo(nodeDots[40].x, nodeDots[40].y)
		ctx.lineTo(nodeDots[33].x, nodeDots[33].y)
		ctx.stroke()

		//Lines (cheek first)
		ctx.beginPath()
		ctx.moveTo(nodeDots[10].x, nodeDots[10].y)
		ctx.lineTo(nodeDots[42].x, nodeDots[42].y)
		ctx.lineTo(nodeDots[41].x, nodeDots[41].y)
		ctx.lineTo(nodeDots[20].x, nodeDots[20].y)
		ctx.lineTo(nodeDots[40].x, nodeDots[40].y)
		ctx.lineTo(nodeDots[17].x, nodeDots[17].y)
		ctx.lineTo(nodeDots[24].x, nodeDots[24].y)
		ctx.lineTo(nodeDots[30].x, nodeDots[30].y)
		ctx.lineTo(nodeDots[46].x, nodeDots[46].y)
		ctx.stroke()

		//Lines (cheek second + plug)
		ctx.beginPath()
		ctx.moveTo(nodeDots[20].x, nodeDots[20].y)
		ctx.lineTo(nodeDots[14].x, nodeDots[14].y)
		ctx.lineTo(nodeDots[17].x, nodeDots[17].y)
		ctx.lineTo(nodeDots[29].x, nodeDots[29].y)
		ctx.lineTo(nodeDots[30].x, nodeDots[30].y)
		ctx.lineTo(nodeDots[31].x, nodeDots[31].y)
		ctx.lineTo(nodeDots[25].x, nodeDots[25].y)
		ctx.lineTo(nodeDots[26].x, nodeDots[26].y)
		ctx.lineTo(nodeDots[27].x, nodeDots[27].y)
		ctx.lineTo(nodeDots[28].x, nodeDots[28].y)
		ctx.lineTo(nodeDots[17].x, nodeDots[17].y)
		ctx.stroke()

		//Lines (plug second)
		ctx.beginPath()
		ctx.moveTo(nodeDots[24].x, nodeDots[24].y)
		ctx.lineTo(nodeDots[29].x, nodeDots[29].y)
		ctx.lineTo(nodeDots[25].x, nodeDots[25].y)
		ctx.stroke()

		//Lines (plug third)
		ctx.beginPath()
		ctx.moveTo(nodeDots[31].x, nodeDots[31].y)
		ctx.lineTo(nodeDots[29].x, nodeDots[29].y)
		ctx.lineTo(nodeDots[26].x, nodeDots[26].y)
		ctx.stroke()

		//Lines (plug fourth)
		ctx.beginPath()
		ctx.moveTo(nodeDots[27].x, nodeDots[27].y)
		ctx.lineTo(nodeDots[29].x, nodeDots[29].y)
		ctx.lineTo(nodeDots[28].x, nodeDots[28].y)
		ctx.lineTo(nodeDots[18].x, nodeDots[18].y)
		ctx.lineTo(nodeDots[17].x, nodeDots[17].y)
		ctx.stroke()

		//Lines (ear first)
		ctx.beginPath()
		ctx.moveTo(nodeDots[17].x, nodeDots[17].y)
		ctx.lineTo(nodeDots[15].x, nodeDots[15].y)
		ctx.lineTo(nodeDots[16].x, nodeDots[16].y)
		ctx.lineTo(nodeDots[18].x, nodeDots[18].y)
		ctx.stroke()

		//Lines (cheek + ear)
		ctx.beginPath()
		ctx.moveTo(nodeDots[40].x, nodeDots[40].y)
		ctx.lineTo(nodeDots[14].x, nodeDots[14].y)
		ctx.lineTo(nodeDots[11].x, nodeDots[11].y)
		ctx.lineTo(nodeDots[15].x, nodeDots[15].y)
		ctx.lineTo(nodeDots[13].x, nodeDots[13].y)
		ctx.lineTo(nodeDots[16].x, nodeDots[16].y)
		ctx.stroke()

		//Lines (ear second)
		ctx.beginPath()
		ctx.moveTo(nodeDots[11].x, nodeDots[11].y)
		ctx.lineTo(nodeDots[12].x, nodeDots[12].y)
		ctx.lineTo(nodeDots[13].x, nodeDots[13].y)
		ctx.closePath()
		ctx.stroke()

		//Lines (cheek + eye)
		ctx.beginPath()
		ctx.moveTo(nodeDots[14].x, nodeDots[14].y)
		ctx.lineTo(nodeDots[8].x, nodeDots[8].y)
		ctx.lineTo(nodeDots[23].x, nodeDots[23].y)
		ctx.lineTo(nodeLines[11].x, nodeLines[11].y)
		ctx.lineTo(nodeDots[20].x, nodeDots[20].y)
		ctx.stroke()

		//Lines (forehead first)
		ctx.beginPath()
		ctx.moveTo(nodeDots[11].x, nodeDots[11].y)
		ctx.lineTo(nodeDots[8].x, nodeDots[8].y)
		ctx.lineTo(nodeDots[4].x, nodeDots[4].y)
		ctx.closePath()
		ctx.stroke()

		//Lines (eye first)
		ctx.beginPath()
		ctx.moveTo(nodeDots[41].x, nodeDots[41].y)
		ctx.lineTo(nodeDots[19].x, nodeDots[19].y)
		ctx.lineTo(nodeDots[20].x, nodeDots[20].y)
		ctx.lineTo(nodeDots[21].x, nodeDots[21].y)
		ctx.lineTo(nodeLines[11].x, nodeLines[11].y)
		ctx.stroke()

		//Lines (eye second)
		ctx.beginPath()
		ctx.moveTo(nodeDots[23].x, nodeDots[23].y)
		ctx.lineTo(nodeDots[21].x, nodeDots[21].y)
		ctx.lineTo(nodeDots[22].x, nodeDots[22].y)
		ctx.lineTo(nodeDots[19].x, nodeDots[19].y)
		ctx.lineTo(nodeDots[42].x, nodeDots[42].y)
		ctx.lineTo(nodeDots[9].x, nodeDots[9].y)
		ctx.lineTo(nodeDots[10].x, nodeDots[10].y)
		ctx.lineTo(nodeDots[6].x, nodeDots[6].y)
		ctx.lineTo(nodeLines[10].x, nodeLines[10].y)
		ctx.stroke()

		//Lines (eye third)
		ctx.beginPath()
		ctx.moveTo(nodeDots[20].x, nodeDots[20].y)
		ctx.lineTo(nodeDots[22].x, nodeDots[22].y)
		ctx.lineTo(nodeDots[9].x, nodeDots[9].y)
		ctx.lineTo(nodeDots[8].x, nodeDots[8].y)
		ctx.lineTo(nodeDots[22].x, nodeDots[22].y)
		ctx.stroke()

		//Lines (forehead second)
		ctx.beginPath()
		ctx.moveTo(nodeDots[8].x, nodeDots[8].y)
		ctx.lineTo(nodeDots[7].x, nodeDots[7].y)
		ctx.lineTo(nodeDots[10].x, nodeDots[10].y)
		ctx.stroke()

		//Lines (forehead third)
		ctx.beginPath()
		ctx.moveTo(nodeDots[9].x, nodeDots[9].y)
		ctx.lineTo(nodeDots[7].x, nodeDots[7].y)
		ctx.lineTo(nodeDots[6].x, nodeDots[6].y)
		ctx.lineTo(nodeLines[12].x, nodeLines[12].y)
		ctx.lineTo(nodeDots[1].x, nodeDots[1].y)
		ctx.lineTo(nodeLines[13].x, nodeLines[13].y)
		ctx.lineTo(nodeDots[0].x, nodeDots[0].y)
		ctx.lineTo(nodeDots[3].x, nodeDots[3].y)
		ctx.lineTo(nodeDots[4].x, nodeDots[4].y)
		ctx.lineTo(nodeDots[5].x, nodeDots[5].y)
		ctx.lineTo(nodeDots[8].x, nodeDots[8].y)
		ctx.stroke()

		//Lines (forehead fourth)
		ctx.beginPath()
		ctx.moveTo(nodeDots[3].x, nodeDots[3].y)
		ctx.lineTo(nodeDots[5].x, nodeDots[5].y)
		ctx.lineTo(nodeDots[7].x, nodeDots[7].y)
		ctx.lineTo(nodeDots[2].x, nodeDots[2].y)
		ctx.lineTo(nodeDots[6].x, nodeDots[6].y)
		ctx.stroke()
		ctx.beginPath()
		ctx.moveTo(nodeLines[12].x, nodeLines[12].y)
		ctx.lineTo(nodeDots[2].x, nodeDots[2].y)
		ctx.lineTo(nodeDots[1].x, nodeDots[1].y)
		ctx.lineTo(nodeDots[0].x, nodeDots[0].y)
		ctx.stroke()
		ctx.beginPath()
		ctx.moveTo(nodeDots[0].x, nodeDots[0].y)
		ctx.lineTo(nodeDots[2].x, nodeDots[2].y)
		ctx.lineTo(nodeDots[5].x, nodeDots[5].y)
		ctx.closePath()
		ctx.stroke()
	}

	let mousePos = {}

	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvasRef.current?.getContext('2d')
		if (canvas) {
			canvas.width = 900
			canvas.height = 1700

			canvas.addEventListener('mousemove', (event) => {
				let canvasXMultiplier =
					canvas.width / canvas.getBoundingClientRect().width
				let canvasYMultiplier =
					canvas.height / canvas.getBoundingClientRect().height
				let mouseX: any =
					(event.x - canvas.getBoundingClientRect().x) * canvasXMultiplier
				let mouseY: any =
					(event.y - canvas.getBoundingClientRect().y) * canvasYMultiplier

				mousePos = { x: mouseX, y: mouseY }
			})
			canvas.addEventListener('mouseout', (event) => {
				event.preventDefault()
				mousePos = { x: undefined, y: undefined }
			})

			canvas.addEventListener('touchmove', (event) => {
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

				mousePos = { x: mouseX, y: mouseY }
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

				mousePos = { x: mouseX, y: mouseY }
			})
			canvas.addEventListener('touchend', (event) => {
				event.preventDefault()
				mousePos = { x: undefined, y: undefined }
			})
			canvas.addEventListener('touchcancel', (event) => {
				event.preventDefault()
				mousePos = { x: undefined, y: undefined }
			})
			canvas.addEventListener('touchleave', (event) => {
				event.preventDefault()
				mousePos = { x: undefined, y: undefined }
			})
		}
		let frameCount = 0
		let iteration = 1
		let animationFrameId: number

		let minFrameCount = -Math.floor(Math.random() * (70 - 6) + 6)
		let maxFrameCount = Math.floor(Math.random() * (70 - 6) + 6)

		const interval = setInterval(() => {
			minFrameCount = -Math.floor(Math.random() * (70 - 6) + 6)
			maxFrameCount = Math.floor(Math.random() * (70 - 6) + 6)
		}, 5000)

		const render = () => {
			if (frameCount >= maxFrameCount) {
				iteration = -1
			} else if (frameCount <= minFrameCount) {
				iteration = 1
			}
			frameCount = frameCount + iteration

			draw(context, frameCount, mousePos)
			animationFrameId = window.requestAnimationFrame(render)
		}
		render()

		return () => {
			window.cancelAnimationFrame(animationFrameId)
		}
	}, [draw])

	return <canvas ref={canvasRef} {...props} />
}

const randPos = (
	valueX: number,
	valueY: number,
	speedX: number,
	speedY: number,
	mousePos: any,
	interact: boolean = true
) => {
	let distance = 100
	let newValueX = valueX + speedX * 0.6
	let newValueY = valueY + speedY * 0.5

	if (
		mousePos.x - valueX < distance &&
		mousePos.x - valueX > -distance &&
		mousePos.y - valueY < distance &&
		mousePos.y - valueY > -distance &&
		interact
	) {
		let xPush = mousePos.x - valueX
		let yPush = mousePos.y - valueY

		return { x: valueX + xPush, y: valueY + yPush }
	}
	return { x: newValueX, y: newValueY }
}

export default AnimatedNodes
