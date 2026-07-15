'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const moodOptions = [
  { value: 'bg-maroon text-white', label: 'Maroon (major milestone)' },
  { value: 'bg-saffron text-white', label: 'Saffron (observance window)' },
  { value: 'bg-gold text-ink', label: 'Gold (peak day)' },
  { value: 'bg-cream text-maroon border border-gold/30', label: 'Cream (booking demand)' },
]

const emptyForm = {
  date: '',
  label: '',
  note: '',
  mood: moodOptions[0].value,
}

export default function CalendarEventForm({ eventId, initialData }) {
  const router = useRouter()
  const [form, setForm] = useState(initialData ?? emptyForm)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch(eventId ? `/api/admin/calendar/${eventId}` : '/api/admin/calendar', {
        method: eventId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Unable to save event')
      }

      router.push('/admin/calendar')
      router.refresh()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-gold/20 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Date
          <input
            type="date"
            required
            value={form.date}
            onChange={update('date')}
            className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Mood / category color
          <select value={form.mood} onChange={update('mood')} className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm">
            {moodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-ink">
        Label
        <input
          type="text"
          required
          value={form.label}
          onChange={update('label')}
          placeholder="Pitru Paksha begins"
          className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
        />
      </label>

      <label className="block text-sm font-medium text-ink">
        Note
        <textarea
          rows={2}
          value={form.note}
          onChange={update('note')}
          placeholder="Fortnight of ancestral remembrance starts"
          className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
        />
      </label>

      {error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-saffron disabled:opacity-60"
      >
        {loading ? 'Saving…' : eventId ? 'Save changes' : 'Add event'}
      </button>
    </form>
  )
}
