import CalendarEventForm from '../../../../../components/admin/CalendarEventForm'

export default function AdminNewCalendarEventPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-ink">Add calendar event</h1>
      <p className="mt-2 text-sm text-muted">Add a new sacred date to the ritual calendar.</p>
      <div className="mt-6">
        <CalendarEventForm />
      </div>
    </div>
  )
}
