import { notFound } from 'next/navigation'
import connectDB from '../../../../../lib/db/connect'
import CalendarEvent from '../../../../../lib/models/CalendarEvent'
import CalendarEventForm from '../../../../../components/admin/CalendarEventForm'

export const dynamic = 'force-dynamic'

export default async function AdminEditCalendarEventPage({ params }) {
  const { id } = await params

  await connectDB()
  const event = await CalendarEvent.findById(id).lean()

  if (!event) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-ink">Edit calendar event</h1>
      <p className="mt-2 text-sm text-muted">Update "{event.label}".</p>
      <div className="mt-6">
        <CalendarEventForm
          eventId={event._id.toString()}
          initialData={{
            date: event.date,
            label: event.label,
            note: event.note,
            mood: event.mood,
          }}
        />
      </div>
    </div>
  )
}
