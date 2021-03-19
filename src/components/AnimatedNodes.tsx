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
			ctx.strokeStyle = `${color.mainColorLight}`
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
			ctx.moveTo(2, 1640)
			ctx.lineTo(102, 1416)
			ctx.lineTo(162, 1570)
			ctx.lineTo(570, 1422)
			ctx.lineTo(570, 1560)
			ctx.stroke()

			//Lines (bottom third)
			ctx.beginPath()
			ctx.moveTo(2, 1640)
			ctx.lineTo(162, 1570)
			ctx.lineTo(570, 1560)
			ctx.lineTo(757, 1540)
			ctx.lineTo(570, 1422)
			ctx.lineTo(255, 1333)
			ctx.lineTo(162, 1570)
			ctx.stroke()

			//Lines (neck)
			ctx.beginPath()
			ctx.moveTo(2, 1436)
			ctx.lineTo(102, 1416)
			ctx.lineTo(255, 1333)
			ctx.lineTo(236, 1250)
			ctx.lineTo(178, 1340)
			ctx.lineTo(102, 1416)
			ctx.lineTo(2, 1392)
			ctx.stroke()

			//Lines (chin first)
			ctx.beginPath()
			ctx.moveTo(2, 1292)
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
			ctx.moveTo(2, 1232)
			ctx.lineTo(74, 1220)
			ctx.lineTo(2, 1186)
			ctx.lineTo(64, 1158)
			ctx.lineTo(2, 1158)
			ctx.stroke()

			//Lines (lips second + nose)
			ctx.beginPath()
			ctx.moveTo(74, 1220)
			ctx.lineTo(128, 1164)
			ctx.lineTo(64, 1158)
			ctx.lineTo(2, 1078)
			ctx.lineTo(28, 1064)
			ctx.lineTo(2, 1056)
			ctx.lineTo(60, 1020)
			ctx.lineTo(2, 992)
			ctx.lineTo(34, 860)
			ctx.lineTo(2, 716)
			ctx.lineTo(62, 758)
			ctx.lineTo(34, 860)
			ctx.lineTo(68, 972)
			ctx.lineTo(2, 992)
			ctx.stroke()

			//Lines (lips third)
			ctx.beginPath()
			ctx.moveTo(2, 1186)
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

			//Lines (nose third)
			ctx.beginPath()
			ctx.moveTo(34, 860)
			ctx.lineTo(70, 832)
			ctx.lineTo(96, 1010)
			ctx.lineTo(84, 1048)
			ctx.stroke()

			//Lines (cheek first)
			ctx.beginPath()
			ctx.moveTo(62, 758)
			ctx.lineTo(68, 792)
			ctx.lineTo(70, 832)
			ctx.lineTo(150, 848)
			ctx.lineTo(96, 1010)
			ctx.lineTo(320, 980)
			ctx.lineTo(308, 1044)
			ctx.lineTo(300, 1094)
			ctx.lineTo(286, 1172)
			ctx.stroke()

			//Lines (cheek second + plug)
			ctx.beginPath()
			ctx.moveTo(150, 848)
			ctx.lineTo(280, 900)
			ctx.lineTo(320, 980)
			ctx.lineTo(334, 1052)
			ctx.lineTo(300, 1094)
			ctx.lineTo(332, 1114)
			ctx.lineTo(366, 1096)
			ctx.lineTo(387, 1050)
			ctx.lineTo(368, 988)
			ctx.lineTo(344, 974)
			ctx.lineTo(320, 980)
			ctx.stroke()

			//Lines (plug second)
			ctx.beginPath()
			ctx.moveTo(308, 1044)
			ctx.lineTo(334, 1052)
			ctx.lineTo(366, 1096)
			ctx.stroke()

			//Lines (plug third)
			ctx.beginPath()
			ctx.moveTo(332, 1114)
			ctx.lineTo(334, 1052)
			ctx.lineTo(387, 1050)
			ctx.stroke()

			//Lines (plug fourth)
			ctx.beginPath()
			ctx.moveTo(368, 988)
			ctx.lineTo(334, 1052)
			ctx.lineTo(344, 974)
			ctx.lineTo(332, 926)
			ctx.lineTo(320, 980)
			ctx.stroke()

			//Lines (ear first)
			ctx.beginPath()
			ctx.moveTo(320, 980)
			ctx.lineTo(328, 828)
			ctx.lineTo(346, 842)
			ctx.lineTo(332, 926)
			ctx.stroke()

			//Lines (cheek + ear)
			ctx.beginPath()
			ctx.moveTo(96, 1010)
			ctx.lineTo(280, 900)
			ctx.lineTo(334, 752)
			ctx.lineTo(328, 828)
			ctx.lineTo(360, 768)
			ctx.lineTo(346, 842)
			ctx.stroke()

			//Lines (ear second)
			ctx.beginPath()
			ctx.moveTo(334, 752)
			ctx.lineTo(346, 736)
			ctx.lineTo(360, 768)
			ctx.closePath()
			ctx.stroke()

			//Lines (cheek + eye)
			ctx.beginPath()
			ctx.moveTo(280, 900)
			ctx.lineTo(272, 794)
			ctx.lineTo(242, 818)
			ctx.lineTo(224, 832)
			ctx.lineTo(150, 848)
			ctx.stroke()

			//Lines (forehead first)
			ctx.beginPath()
			ctx.moveTo(334, 752)
			ctx.lineTo(272, 794)
			ctx.lineTo(332, 554)
			ctx.closePath()
			ctx.stroke()

			//Lines (eye first)
			ctx.beginPath()
			ctx.moveTo(70, 832)
			ctx.lineTo(122, 796)
			ctx.lineTo(150, 848)
			ctx.lineTo(206, 810)
			ctx.lineTo(224, 832)
			ctx.stroke()

			//Lines (eye second)
			ctx.beginPath()
			ctx.moveTo(242, 818)
			ctx.lineTo(206, 810)
			ctx.lineTo(168, 800)
			ctx.lineTo(122, 796)
			ctx.lineTo(68, 792)
			ctx.lineTo(160, 758)
			ctx.lineTo(62, 758)
			ctx.lineTo(98, 706)
			ctx.lineTo(2, 716)
			ctx.stroke()

			//Lines (eye third)
			ctx.beginPath()
			ctx.moveTo(150, 848)
			ctx.lineTo(168, 800)
			ctx.lineTo(160, 758)
			ctx.lineTo(272, 794)
			ctx.lineTo(168, 800)
			ctx.stroke()

			//Lines (forehead second)
			ctx.beginPath()
			ctx.moveTo(272, 794)
			ctx.lineTo(198, 708)
			ctx.lineTo(62, 758)
			ctx.stroke()

			//Lines (forehead third)
			ctx.beginPath()
			ctx.moveTo(160, 758)
			ctx.lineTo(198, 708)
			ctx.lineTo(98, 706)
			ctx.lineTo(2, 412)
			ctx.lineTo(54, 276)
			ctx.lineTo(2, 206)
			ctx.lineTo(136, 240)
			ctx.lineTo(286, 390)
			ctx.lineTo(332, 554)
			ctx.lineTo(274, 518)
			ctx.lineTo(272, 794)
			ctx.stroke()

			//Lines (forehead fourth)
			ctx.beginPath()
			ctx.moveTo(286, 390)
			ctx.lineTo(274, 518)
			ctx.lineTo(198, 708)
			ctx.lineTo(116, 390)
			ctx.lineTo(98, 706)
			ctx.stroke()
			ctx.beginPath()
			ctx.moveTo(2, 412)
			ctx.lineTo(116, 390)
			ctx.lineTo(54, 276)
			ctx.lineTo(136, 240)
			ctx.stroke()
			ctx.beginPath()
			ctx.moveTo(136, 240)
			ctx.lineTo(116, 390)
			ctx.lineTo(274, 518)
			ctx.closePath()
			ctx.stroke()

			//circles
			const nodeDots = [
				{ x: 136, y: 240 },
				{ x: 54, y: 276 },
				{ x: 116, y: 390 },
				{ x: 286, y: 390 },
				{ x: 332, y: 554 },
				{ x: 274, y: 518 },
				{ x: 98, y: 706 },
				{ x: 198, y: 708 },
				{ x: 272, y: 794 },
				{ x: 160, y: 758 },
				{ x: 62, y: 758 },
				{ x: 334, y: 752 },
				{ x: 346, y: 736 },
				{ x: 360, y: 768 },
				{ x: 280, y: 900 },
				{ x: 328, y: 828 },
				{ x: 346, y: 842 },
				{ x: 320, y: 980 },
				{ x: 332, y: 926 },
				{ x: 122, y: 796 },
				{ x: 150, y: 848 },
				{ x: 206, y: 810 },
				{ x: 168, y: 800 },
				{ x: 242, y: 818 },
				{ x: 308, y: 1044 },
				{ x: 366, y: 1096 },
				{ x: 387, y: 1050 },
				{ x: 368, y: 988 },
				{ x: 344, y: 974 },
				{ x: 334, y: 1052 },
				{ x: 300, y: 1094 },
				{ x: 332, y: 1114 },
				{ x: 28, y: 1064 },
				{ x: 84, y: 1048 },
				{ x: 60, y: 1020 },
				{ x: 68, y: 972 },
				{ x: 74, y: 1220 },
				{ x: 128, y: 1164 },
				{ x: 64, y: 1158 },
				{ x: 34, y: 860 },
				{ x: 62, y: 758 },
				{ x: 96, y: 1010 },
				{ x: 70, y: 832 },
				{ x: 68, y: 792 },
				{ x: 102, y: 1416 },
				{ x: 132, y: 1340 },
				{ x: 200, y: 1206 },
				{ x: 286, y: 1172 },
				{ x: 236, y: 1250 },
				{ x: 178, y: 1340 },
				{ x: 162, y: 1570 },
				{ x: 570, y: 1560 },
				{ x: 757, y: 1540 },
				{ x: 570, y: 1422 },
				{ x: 255, y: 1333 },
			]

			ctx.beginPath()
			nodeDots.forEach((dot) => {
				ctx.arc(dot.x, dot.y, 7, 0, 2 * Math.PI)
				ctx.closePath()
			})
			ctx.fillStyle = `${color.mainColorLight}`
			ctx.fill()
		}
	})

	return <canvas ref={canvasRef} />
}

export default AnimatedNodes
