import 'react-toastify/dist/ReactToastify.css'

import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

import styles from '@/styles/Footer/ContactForm.module.scss'
import TextField from '@mui/material/TextField'

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
          position: 'bottom-right',
        }
      )
    } else if (message === 'fail') {
      toast.error('Oh no 😔 Something went wrong. Please try again.', {
        position: 'bottom-right',
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
      <form
        autoComplete='off'
        onSubmit={(e) => submitForm(e)}
        className={styles.container}
      >
        <div className={styles.formContainer}>
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
          <button
            className={`${styles.cta} ${styles.desktop}`}
            id='desktop'
            type='submit'
            disabled={mailData.sending}
          >
            {mailData.buttonText}
          </button>
        </div>
        <div className={styles.formContainer}>
          <TextField
            name='message'
            id={styles.message}
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
          <button
            className={`${styles.cta} ${styles.mobile}`}
            id='mobile'
            type='submit'
            disabled={mailData.sending}
          >
            {mailData.buttonText}
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactForm
