import nodemailer from 'nodemailer'

let transporter = null

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASSWORD,
      },
    })
  }
  return transporter
}

// Fire-and-await, but never throws — a broken SMTP config must never fail
// the booking/signup/contact request that triggered the notification.
export async function sendMail({ to, subject, html }) {
  if (!to || !process.env.EMAIL_USER || !process.env.APP_PASSWORD) {
    console.warn('[mailer] Skipping email (missing recipient or SMTP credentials):', subject)
    return
  }

  try {
    await getTransporter().sendMail({
      from: `"PitraPaksh" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    })
  } catch (error) {
    console.error('[mailer] Failed to send email:', subject, error.message)
  }
}
