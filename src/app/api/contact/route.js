import { NextResponse } from 'next/server'
import connectDB from '../../../lib/db/connect'
import ContactQuery from '../../../lib/models/ContactQuery'
import { sendMail } from '../../../lib/mail/mailer'
import { contactUserConfirmationEmail, contactAdminAlertEmail } from '../../../lib/mail/templates'
import { isValidMobile } from '../../../lib/validation'

export async function POST(request) {
  try {
    const { name, email, mobile, serviceInterest, message } = await request.json()

    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, mobile, and message are required' },
        { status: 400 }
      )
    }
    if (!isValidMobile(mobile)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid 10-digit mobile number' },
        { status: 400 }
      )
    }

    await connectDB()
    const query = await ContactQuery.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile.trim(),
      serviceInterest: serviceInterest?.trim() || '',
      message: message.trim(),
    })

    await Promise.all([
      sendMail({ to: query.email, ...contactUserConfirmationEmail({ name: query.name }) }),
      sendMail({
        to: process.env.ADMIN_NOTIFY_EMAIL,
        ...contactAdminAlertEmail({
          name: query.name,
          email: query.email,
          mobile: query.mobile,
          serviceInterest: query.serviceInterest,
          message: query.message,
        }),
      }),
    ])

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message)
      return NextResponse.json({ success: false, message: messages[0] }, { status: 400 })
    }
    console.error('[contact]', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
