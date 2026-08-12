import { NextResponse } from 'next/server'
import { getRazorpay } from '../../../../lib/payment/razorpay'
import { auth } from '../../../../auth'
import connectDB from '../../../../lib/db/connect'
import Order from '../../../../lib/models/Order'
import { getServiceBySlug } from '../../../../lib/data/siteData'
import { sendMail } from '../../../../lib/mail/mailer'
import { orderStatusEmail, orderAdminAlertEmail } from '../../../../lib/mail/templates'

export async function POST(request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'You must be logged in to book a service' }, { status: 401 })
    }

    const { serviceSlug, date, name, mobile } = await request.json()

    const service = getServiceBySlug(serviceSlug)
    if (!service) {
      return NextResponse.json({ error: 'Unknown service selected' }, { status: 400 })
    }
    if (!date || !name || !mobile) {
      return NextResponse.json({ error: 'Date, name, and mobile number are required' }, { status: 400 })
    }

    const todayIso = new Date().toISOString().slice(0, 10)
    if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date) || date < todayIso) {
      return NextResponse.json({ error: 'Please choose a valid, upcoming date' }, { status: 400 })
    }

    // Price is derived from the service catalog, never trusted from the client.
    const amount = Number(String(service.price).replace(/[^0-9.]/g, ''))
    const amountInPaise = Math.round(amount * 100)
    if (!amountInPaise || amountInPaise <= 0) {
      return NextResponse.json({ error: 'Invalid service price' }, { status: 400 })
    }

    const order = await getRazorpay().orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `${service.slug}-${Date.now()}`,
      notes: {
        serviceSlug: service.slug,
        serviceTitle: service.title,
      },
    })

    await connectDB()
    const dbOrder = await Order.create({
      userId: session.user.id,
      serviceSlug: service.slug,
      serviceTitle: service.title,
      preferredDate: date,
      name,
      mobile,
      amount: amountInPaise / 100,
      currency: order.currency,
      status: 'pending',
      razorpayOrderId: order.id,
    })

    const orderDetails = {
      serviceTitle: dbOrder.serviceTitle,
      preferredDate: dbOrder.preferredDate,
      amount: dbOrder.amount,
      currency: dbOrder.currency,
    }
    await Promise.all([
      sendMail({ to: session.user.email, ...orderStatusEmail({ name, status: 'pending', ...orderDetails }) }),
      sendMail({
        to: process.env.ADMIN_NOTIFY_EMAIL,
        ...orderAdminAlertEmail({ name, email: session.user.email, mobile, status: 'pending', ...orderDetails }),
      }),
    ])

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    })
  } catch (error) {
    console.error('Razorpay order creation failed:', error)
    return NextResponse.json({ error: 'Unable to create order' }, { status: 500 })
  }
}
