import { NextResponse } from 'next/server'
import { requireAdminApi } from '../../../../../lib/adminGuard'
import connectDB from '../../../../../lib/db/connect'
import CalendarEvent from '../../../../../lib/models/CalendarEvent'

export async function PUT(request, { params }) {
  const unauthorized = await requireAdminApi()
  if (unauthorized) return unauthorized

  const { id } = await params
  const body = await request.json()

  try {
    await connectDB()
    const event = await CalendarEvent.findByIdAndUpdate(
      id,
      {
        date: body.date,
        label: body.label?.trim(),
        note: body.note?.trim() || '',
        mood: body.mood || 'bg-saffron text-white',
      },
      { new: true, runValidators: true }
    )

    if (!event) {
      return NextResponse.json({ success: false, message: 'Event not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message)
      return NextResponse.json({ success: false, message: messages[0] }, { status: 400 })
    }
    console.error('[admin/calendar PUT]', error)
    return NextResponse.json({ success: false, message: 'Unable to update event' }, { status: 500 })
  }
}

export async function DELETE(_request, { params }) {
  const unauthorized = await requireAdminApi()
  if (unauthorized) return unauthorized

  const { id } = await params

  await connectDB()
  await CalendarEvent.findByIdAndDelete(id)

  return NextResponse.json({ success: true })
}
