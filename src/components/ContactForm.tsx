import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import { breakpoint, color, components } from '../../styles/variables'

const ContactForm = () => {
	return (
		<Container>
			<FormContainer>
				<TextField
					name='message'
					id='message'
					label='Your message'
					type='text'
					multiline={true}
					variant='outlined'
					required={true}
				/>
			</FormContainer>
			<FormContainer>
				<TextField
					name='name'
					id='name'
					label='Your name'
					type='text'
					variant='outlined'
					required={true}
				/>
				<TextField
					name='email'
					id='email'
					label='Your e-mail'
					type='email'
					variant='outlined'
					required={true}
				/>
				<CTA type='submit'>Send</CTA>
			</FormContainer>
		</Container>
	)
}

export default ContactForm

const Container = styled.form`
	width: 100%;
	margin: 4em 0;
	display: flex;
	gap: 3em;
	align-items: space-between;
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		flex-direction: column;
	}
`

const formColor = color.mainAccentRGB
const FormContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 3em;
	justify-content: space-between;
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		justify-content: flex-start;
	}
	.MuiTextField-root {
		label,
		input,
		textarea {
			font-size: clamp(1.4rem, 1.5vw, 1.6rem);
			color: ${color.mainColorLight};
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
		min-height: 13em;
	}
	.PrivateNotchedOutline-legendLabelled-3 {
		font-size: calc(clamp(1.4rem, 1.5vw, 1.6rem) * 0.75);
	}
`

const CTA = styled.button`
	background-color: ${color.mainAccentColor};
	color: ${color.mainColorDark};
	${components.mainButton}
	width: 160px;
`
