import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  if (!req.body) {
    return new Response('no form data', {
      status: 400,
    })
  }

  const { name, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    port: parseInt(process.env.NEXT_PUBLIC_MAIL_PORT as string),
    host: process.env.NEXT_PUBLIC_MAIL_HOST,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
    secure: true,
  })
  const mailData = {
    from: process.env.NEXT_PUBLIC_MAIL_USER,
    to: process.env.NEXT_PUBLIC_MAIL_USER,
    subject: `Message from ${name} via SebastianWidin.se`,
    text: `${message} | Sent from: ${name} (${email})`,
    html: `<div>${message.replace(/\n/g, '<br />')}</div><p>Sent from:
    ${name} (${email})</p>`,
  }

  try {
    await transporter.sendMail(mailData)
    return new Response('message sent', {
      status: 200,
    })
  } catch (error: any) {
    console.error(error)
    return new Response(error.response, {
      status: error.response.status,
    })
  }
}
