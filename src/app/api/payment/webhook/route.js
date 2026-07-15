import crypto from 'crypto'
import { NextResponse } from 'next/server'
import connectDB from '../../../../lib/db/connect'
import Order from '../../../../lib/models/Order'

export async function POST(request) {
  const signature = request.headers.get('x-razorpay-signature')
  const rawBody = await request.text()

  if (!signature || !process.env.RAZORPAY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 400 })
  }

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(rawBody)
    .digest('hex')

  const expected = Buffer.from(expectedSignature, 'utf8')
  const received = Buffer.from(signature, 'utf8')
  const isValid = expected.length === received.length && crypto.timingSafeEqual(expected, received)

  if (!isValid) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const payload = JSON.parse(rawBody)
  const paymentEntity = payload.payload?.payment?.entity

  if (!paymentEntity?.order_id) {
    return NextResponse.json({ received: true })
  }

  await connectDB()

  if (payload.event === 'payment.captured') {
    await Order.findOneAndUpdate(
      { razorpayOrderId: paymentEntity.order_id, status: { $ne: 'paid' } },
      { status: 'paid', razorpayPaymentId: paymentEntity.id }
    )
  } else if (payload.event === 'payment.failed') {
    await Order.findOneAndUpdate(
      { razorpayOrderId: paymentEntity.order_id, status: 'pending' },
      { status: 'failed' }
    )
  }

  return NextResponse.json({ received: true })
}
