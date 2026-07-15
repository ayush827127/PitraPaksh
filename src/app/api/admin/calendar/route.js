import { NextResponse } from 'next/server'
import { requireAdminApi } from '../../../../lib/adminGuard'
import connectDB from '../../../../lib/db/connect'
import CalendarEvent from '../../../../lib/models/CalendarEvent'

export async function POST(request) {
  const unauthorized = await requireAdminApi()
  if (unauthorized) return unauthorized

  const body = await request.json()

  try {
    await connectDB()
    const event = await CalendarEvent.create({
      date: body.date,
      label: body.label?.trim(),
      note: body.note?.trim() || '',
      mood: body.mood || 'bg-saffron text-white',
    })

    return NextResponse.json({ success: true, id: event._id.toString() }, { status: 201 })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message)
      return NextResponse.json({ success: false, message: messages[0] }, { status: 400 })
    }
    console.error('[admin/calendar POST]', error)
    return NextResponse.json({ success: false, message: 'Unable to create event' }, { status: 500 })
  }
}
