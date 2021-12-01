import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import { breakpoint, color, components } from '../../styles/variables'

const ContactForm = () => {
	const [mailData, setMailData] = useState({
		name: '',
		email: '',
		message: '',
		sent: false,
		sending: false,
		buttonText: 'Send',
	})

	const notification = (message: string) => {
		if (message === 'success') {
			toast.success(
				'🥳 Thank you for you email! I will get back to you as soon as possible.',
				{
					position: toast.POSITION.BOTTOM_RIGHT,
				}
			)
		} else if (message === 'fail') {
			toast.error('Oh no 😔 Something went wrong. Please try again.', {
				position: toast.POSITION.BOTTOM_RIGHT,
			})
		}
	}

	const submitForm = (e: React.FormEvent) => {
		e.preventDefault()
		setMailData((mailData) => ({
			...mailData,
			buttonText: 'Sending...',
			sending: true,
		}))

		const data = {
			name: mailData.name,
			email: mailData.email,
			message: mailData.message,
		}

		axios
			.post('/api/contact', data)
			.then((res) => {
				if (res.status === 200) {
					setMailData((mailData) => ({ ...mailData, sent: true }))
					notification('success')
					resetForm()
				} else {
					setMailData((mailData) => ({
						...mailData,
						sending: false,
						buttonText: 'Send',
					}))
					notification('fail')
					console.error('Message not sent')
					console.error(e)
				}
			})
			.catch((e) => {
				setMailData((mailData) => ({
					...mailData,
					sending: false,
					buttonText: 'Send',
				}))
				notification('fail')
				console.error('Message not sent')
				console.error(e)
			})
	}

	const resetForm = () => {
		setMailData({
			name: '',
			email: '',
			message: '',
			sent: true,
			sending: false,
			buttonText: 'Send',
		})
	}

	return (
		<>
			<Container autoComplete='off' onSubmit={(e) => submitForm(e)}>
				<FormContainer>
					<TextField
						name='message'
						id='message'
						label='Your message'
						type='text'
						multiline
						variant='outlined'
						required
						value={mailData.message}
						onChange={(e) =>
							setMailData((mailData) => ({
								...mailData,
								message: e.target.value,
							}))
						}
					/>
				</FormContainer>
				<FormContainer>
					<TextField
						name='name'
						id='name'
						label='Your name'
						type='text'
						variant='outlined'
						required
						value={mailData.name}
						onChange={(e) =>
							setMailData((mailData) => ({
								...mailData,
								name: e.target.value,
							}))
						}
					/>
					<TextField
						name='email'
						id='email'
						label='Your e-mail'
						type='email'
						variant='outlined'
						required
						value={mailData.email}
						onChange={(e) =>
							setMailData((mailData) => ({
								...mailData,
								email: e.target.value,
							}))
						}
					/>
					<CTA type='submit' disabled={mailData.sending}>
						{mailData.buttonText}
					</CTA>
				</FormContainer>
			</Container>
		</>
	)
}

export default ContactForm

const Container = styled.form`
	align-items: space-between;
	display: flex;
	gap: 3em;
	margin: 4em 0;
	width: 100%;
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		flex-direction: column;
	}
`

const formColor = color.mainAccentRGB
const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3em;
	justify-content: space-between;
	width: 100%;
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		justify-content: flex-start;
	}
	.MuiTextField-root {
		label,
		input,
		textarea {
			color: rgba(${color.textLightRGB}, 0.8);
			font-size: clamp(1.4rem, 1.5vw, 1.6rem);
		}
		&:hover .MuiOutlinedInput-notchedOutline {
			border-color: rgba(${formColor}, 1);
			border-width: 1px;
		}
		.MuiOutlinedInput-notchedOutline {
			border-color: rgba(${formColor}, 0.75);
		}
		.Mui-focused .MuiOutlinedInput-notchedOutline {
			border-color: rgba(${formColor}, 1);
			border-width: 1px;
		}
	}
	#message {
		line-height: 1.5em;
		min-height: 13em;
	}
	legend {
		font-size: calc(clamp(1.4rem, 1.5vw, 1.6rem) * 0.75);
	}
`

const CTA = styled.button`
	background-color: ${color.mainAccentColor};
	color: ${color.mainColorDark};
	${components.mainButton}
	width: 160px;
`
