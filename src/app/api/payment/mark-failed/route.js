import { NextResponse } from 'next/server'
import { auth } from '../../../../auth'
import connectDB from '../../../../lib/db/connect'
import Order from '../../../../lib/models/Order'
import { sendMail } from '../../../../lib/mail/mailer'
import { orderStatusEmail } from '../../../../lib/mail/templates'

export async function POST(request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'You must be logged in' }, { status: 401 })
    }

    const { razorpayOrderId } = await request.json()
    if (!razorpayOrderId) {
      return NextResponse.json({ error: 'Missing order reference' }, { status: 400 })
    }

    await connectDB()
    const order = await Order.findOneAndUpdate(
      { razorpayOrderId, userId: session.user.id, status: 'pending' },
      { status: 'failed' },
      { new: true }
    )

    if (order) {
      await sendMail({
        to: session.user.email,
        ...orderStatusEmail({
          name: order.name,
          status: 'failed',
          serviceTitle: order.serviceTitle,
          preferredDate: order.preferredDate,
          amount: order.amount,
          currency: order.currency,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to mark order as failed:', error)
    return NextResponse.json({ error: 'Unable to update order' }, { status: 500 })
  }
}
