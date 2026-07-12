import { NextResponse } from 'next/server'
import { razorpay } from '../../../../lib/payment/razorpay'
import { auth } from '../../../../auth'
import connectDB from '../../../../lib/db/connect'
import Order from '../../../../lib/models/Order'

export async function POST(request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'You must be logged in to book a service' }, { status: 401 })
    }

    const { amount, serviceSlug, serviceTitle, date, name, mobile } = await request.json()

    const amountInPaise = Math.round(Number(amount) * 100)
    if (!amountInPaise || amountInPaise <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
    }
    if (!date || !name || !mobile) {
      return NextResponse.json({ error: 'Date, name, and mobile number are required' }, { status: 400 })
    }

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `${serviceSlug ?? 'booking'}-${Date.now()}`,
      notes: {
        serviceSlug: serviceSlug ?? '',
        serviceTitle: serviceTitle ?? '',
      },
    })

    await connectDB()
    await Order.create({
      userId: session.user.id,
      serviceSlug,
      serviceTitle,
      preferredDate: date,
      name,
      mobile,
      amount: amountInPaise / 100,
      currency: order.currency,
      status: 'pending',
      razorpayOrderId: order.id,
    })

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
