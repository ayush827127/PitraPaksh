import { NextResponse } from 'next/server'
import { requireAdminApi } from '../../../../../lib/adminGuard'
import connectDB from '../../../../../lib/db/connect'
import ContactQuery from '../../../../../lib/models/ContactQuery'

const VALID_STATUSES = ['new', 'contacted', 'resolved']

export async function PATCH(request, { params }) {
  const unauthorized = await requireAdminApi()
  if (unauthorized) return unauthorized

  const { id } = await params
  const { status } = await request.json()

  if (!VALID_STATUSES.includes(status)) {
    return NextResponse.json({ success: false, message: 'Invalid status' }, { status: 400 })
  }

  await connectDB()
  const query = await ContactQuery.findByIdAndUpdate(id, { status }, { new: true })

  if (!query) {
    return NextResponse.json({ success: false, message: 'Query not found' }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}

export async function DELETE(_request, { params }) {
  const unauthorized = await requireAdminApi()
  if (unauthorized) return unauthorized

  const { id } = await params

  await connectDB()
  await ContactQuery.findByIdAndDelete(id)

  return NextResponse.json({ success: true })
}
