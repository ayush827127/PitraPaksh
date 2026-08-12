import crypto from 'crypto'
import { NextResponse } from 'next/server'
import { auth } from '../../../../auth'
import connectDB from '../../../../lib/db/connect'
import Order from '../../../../lib/models/Order'
import { sendMail } from '../../../../lib/mail/mailer'
import { orderStatusEmail, orderAdminAlertEmail } from '../../../../lib/mail/templates'

function notifyOrderStatus(order, session) {
  if (!order) return Promise.resolve()
  const details = {
    serviceTitle: order.serviceTitle,
    preferredDate: order.preferredDate,
    amount: order.amount,
    currency: order.currency,
  }
  return Promise.all([
    sendMail({ to: session.user.email, ...orderStatusEmail({ name: order.name, status: order.status, ...details }) }),
    sendMail({
      to: process.env.ADMIN_NOTIFY_EMAIL,
      ...orderAdminAlertEmail({ name: order.name, email: session.user.email, mobile: order.mobile, status: order.status, ...details }),
    }),
  ])
}

export async function POST(request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ verified: false, error: 'You must be logged in' }, { status: 401 })
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json()

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ verified: false, error: 'Missing payment details' }, { status: 400 })
    }

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex')

    const expected = Buffer.from(expectedSignature, 'utf8')
    const received = Buffer.from(razorpay_signature, 'utf8')
    const verified = expected.length === received.length && crypto.timingSafeEqual(expected, received)

    await connectDB()

    if (!verified) {
      const failedOrder = await Order.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id, userId: session.user.id },
        { status: 'failed' },
        { new: true }
      )
      await notifyOrderStatus(failedOrder, session)
      return NextResponse.json({ verified: false, error: 'Signature mismatch' }, { status: 400 })
    }

    const order = await Order.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id, userId: session.user.id },
      { status: 'paid', razorpayPaymentId: razorpay_payment_id },
      { new: true }
    )

    if (!order) {
      return NextResponse.json({ verified: false, error: 'Order not found' }, { status: 404 })
    }

    await notifyOrderStatus(order, session)

    return NextResponse.json({ verified: true, paymentId: razorpay_payment_id, orderId: razorpay_order_id })
  } catch (error) {
    console.error('Razorpay payment verification failed:', error)
    return NextResponse.json({ verified: false, error: 'Verification failed' }, { status: 500 })
  }
}
