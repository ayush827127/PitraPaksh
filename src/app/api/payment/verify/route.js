import crypto from 'crypto'
import { NextResponse } from 'next/server'
import { auth } from '../../../../auth'
import connectDB from '../../../../lib/db/connect'
import Order from '../../../../lib/models/Order'

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
      await Order.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id, userId: session.user.id },
        { status: 'failed' }
      )
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

    return NextResponse.json({ verified: true, paymentId: razorpay_payment_id, orderId: razorpay_order_id })
  } catch (error) {
    console.error('Razorpay payment verification failed:', error)
    return NextResponse.json({ verified: false, error: 'Verification failed' }, { status: 500 })
  }
}
