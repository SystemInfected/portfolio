import { NextApiRequest, NextApiResponse } from 'next'

const mailAPI = async (req: NextApiRequest, res: NextApiResponse) => {
	require('dotenv').config()

	let nodemailer = require('nodemailer')
	const transporter = nodemailer.createTransport({
		port: process.env.MAIL_PORT,
		host: process.env.MAIL_HOST,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS,
		},
		secure: true,
	})
	const mailData = {
		from: process.env.MAIL_USER,
		to: process.env.MAIL_USER,
		subject: `Message from ${req.body.name} via SebastianWidin.se`,
		text:
			req.body.message +
			' | Sent from: ' +
			req.body.name +
			' (' +
			req.body.email +
			')',
		html: `<div>${req.body.message.replace(/\n/g, '<br />')}</div><p>Sent from:
    ${req.body.name} (${req.body.email})</p>`,
	}
	await transporter.sendMail(mailData, function (err, info) {
		if (err) {
			console.log('mailerror', err)
			res.status(500)
			res.end()
		} else {
			console.log(info)
			res.status(200)
			res.end()
		}
	})
}

export default mailAPI
