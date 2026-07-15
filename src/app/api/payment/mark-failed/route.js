import { NextResponse } from 'next/server'
import { auth } from '../../../../auth'
import connectDB from '../../../../lib/db/connect'
import Order from '../../../../lib/models/Order'

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
    await Order.findOneAndUpdate(
      { razorpayOrderId, userId: session.user.id, status: 'pending' },
      { status: 'failed' }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to mark order as failed:', error)
    return NextResponse.json({ error: 'Unable to update order' }, { status: 500 })
  }
}
