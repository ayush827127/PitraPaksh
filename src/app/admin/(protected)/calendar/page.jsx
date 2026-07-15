import Link from 'next/link'
import { getAllCalendarEvents } from '../../../../lib/data/calendarRepo'
import DeleteButton from '../../../../components/admin/DeleteButton'

export const dynamic = 'force-dynamic'

function formatDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`)
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default async function AdminCalendarListPage() {
  const events = await getAllCalendarEvents()

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Ritual calendar</h1>
          <p className="mt-2 text-sm text-muted">Manage the sacred dates shown on the public calendar page.</p>
        </div>
        <Link href="/admin/calendar/new" className="rounded-full bg-maroon px-4 py-2 text-sm font-semibold text-white hover:bg-saffron">
          + Add event
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-cream/60 text-xs uppercase tracking-[0.15em] text-muted">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Label</th>
              <th className="px-4 py-3">Note</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t border-gold/10">
                <td className="px-4 py-3 font-medium text-ink">{formatDate(event.date)}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${event.mood}`}>{event.label}</span>
                </td>
                <td className="px-4 py-3 text-muted">{event.note}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-4">
                    <Link href={`/admin/calendar/${event.id}`} className="text-xs font-semibold text-maroon hover:text-saffron">
                      Edit
                    </Link>
                    <DeleteButton endpoint={`/api/admin/calendar/${event.id}`} confirmMessage={`Delete "${event.label}"?`} />
                  </div>
                </td>
              </tr>
            ))}
            {events.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-muted">
                  No calendar events yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  )
}
