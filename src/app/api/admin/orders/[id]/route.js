import { NextResponse } from 'next/server'
import { requireAdminApi } from '../../../../../lib/adminGuard'
import connectDB from '../../../../../lib/db/connect'
import Order from '../../../../../lib/models/Order'
import '../../../../../lib/models/User'
import { sendMail } from '../../../../../lib/mail/mailer'
import { orderStatusEmail } from '../../../../../lib/mail/templates'

const VALID_STATUSES = ['pending', 'paid', 'confirmed', 'fulfilled', 'rejected', 'failed', 'cancelled']

export async function PATCH(request, { params }) {
  const unauthorized = await requireAdminApi()
  if (unauthorized) return unauthorized

  const { id } = await params
  const { status } = await request.json()

  if (!VALID_STATUSES.includes(status)) {
    return NextResponse.json({ success: false, message: 'Invalid status' }, { status: 400 })
  }

  await connectDB()
  const order = await Order.findByIdAndUpdate(id, { status }, { new: true }).populate('userId', 'email')

  if (!order) {
    return NextResponse.json({ success: false, message: 'Order not found' }, { status: 404 })
  }

  if (order.userId?.email) {
    await sendMail({
      to: order.userId.email,
      ...orderStatusEmail({
        name: order.name,
        status: order.status,
        serviceTitle: order.serviceTitle,
        preferredDate: order.preferredDate,
        amount: order.amount,
        currency: order.currency,
      }),
    })
  }

  return NextResponse.json({ success: true })
}
