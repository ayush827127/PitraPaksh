'use client'

import { useMemo, useState } from 'react'
import SectionHeading from '../ui/SectionHeading'

const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function formatEventDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`)
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

function initialMonth(events) {
  if (!events.length) {
    const now = new Date()
    return { year: now.getFullYear(), month: now.getMonth() + 1 }
  }

  const todayIso = new Date().toISOString().slice(0, 10)
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date))
  const upcoming = sorted.find((event) => event.date >= todayIso)
  const target = upcoming ?? sorted[sorted.length - 1]
  const [year, month] = target.date.split('-').map(Number)
  return { year, month }
}

const YEARS_PAST = 5
const YEARS_FUTURE = 50

export default function RitualCalendarWidget({ events }) {
  const eventYears = useMemo(
    () => [...new Set(events.map((event) => Number(event.date.slice(0, 4))))].sort((a, b) => a - b),
    [events]
  )

  const todayYear = new Date().getFullYear()
  const minYear = Math.min(todayYear - YEARS_PAST, eventYears[0] ?? todayYear)
  const maxYear = Math.max(todayYear + YEARS_FUTURE, eventYears[eventYears.length - 1] ?? todayYear)

  const years = useMemo(
    () => Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i),
    [minYear, maxYear]
  )

  const [current, setCurrent] = useState(() => initialMonth(events))

  const isAtMin = current.year === minYear && current.month === 1
  const isAtMax = current.year === maxYear && current.month === 12

  function goToPrevMonth() {
    setCurrent((prev) => {
      if (prev.year === minYear && prev.month === 1) return prev
      return prev.month === 1 ? { year: prev.year - 1, month: 12 } : { year: prev.year, month: prev.month - 1 }
    })
  }

  function goToNextMonth() {
    setCurrent((prev) => {
      if (prev.year === maxYear && prev.month === 12) return prev
      return prev.month === 12 ? { year: prev.year + 1, month: 1 } : { year: prev.year, month: prev.month + 1 }
    })
  }

  function goToYear(year) {
    const firstEventInYear = events.find((event) => event.date.startsWith(String(year)))
    const month = firstEventInYear ? Number(firstEventInYear.date.slice(5, 7)) : 1
    setCurrent({ year, month })
  }

  function goToMonth(month) {
    setCurrent((prev) => ({ year: prev.year, month }))
  }

  const { leadingBlanks, dayCells, peakDays } = useMemo(() => {
    const { year, month } = current
    const daysInMonth = new Date(year, month, 0).getDate()
    const firstWeekdayJs = new Date(year, month - 1, 1).getDay()
    const firstWeekdayMonday = (firstWeekdayJs + 6) % 7
    const monthPrefix = `${year}-${String(month).padStart(2, '0')}`

    const peaks = new Set(
      events
        .filter((event) => event.date.startsWith(monthPrefix))
        .map((event) => Number(event.date.slice(8, 10)))
    )

    return {
      leadingBlanks: Array.from({ length: firstWeekdayMonday }),
      dayCells: Array.from({ length: daysInMonth }, (_, i) => i + 1),
      peakDays: peaks,
    }
  }, [current, events])

  const yearEvents = useMemo(
    () => events.filter((event) => event.date.startsWith(String(current.year))),
    [events, current.year]
  )

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Sacred calendar"
        title="Plan ahead across upcoming Pitru Paksha windows"
        description="Browse month to month to see indicative ritual windows, then confirm exact tithis with your priest before booking."
      />

      {events.length === 0 ? (
        <div className="mt-8 rounded-[1.75rem] border border-gold/20 bg-cream/60 p-8 text-center text-sm text-muted">
          No ritual calendar events have been published yet.
        </div>
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.75rem] border border-gold/20 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goToPrevMonth}
                disabled={isAtMin}
                aria-label="Previous month"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 text-ink transition-colors hover:bg-cream disabled:cursor-not-allowed disabled:opacity-30"
              >
                ‹
              </button>
              <div className="text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">Calendar overview</p>
                <div className="mt-1.5 flex items-center justify-center gap-1.5">
                  <div className="relative">
                    <label htmlFor="calendar-month-select" className="sr-only">
                      Select month
                    </label>
                    <select
                      id="calendar-month-select"
                      value={current.month}
                      onChange={(event) => goToMonth(Number(event.target.value))}
                      className="w-30 cursor-pointer appearance-none rounded-full border border-gold/30 bg-white py-1.5 pl-3.5 pr-7 text-center text-sm font-semibold text-ink transition-colors hover:border-saffron/50 hover:bg-cream focus:outline-none focus:ring-2 focus:ring-saffron/40"
                    >
                      {monthNames.map((name, index) => (
                        <option key={name} value={index + 1}>
                          {name}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-muted">▾</span>
                  </div>
                  <div className="relative">
                    <label htmlFor="calendar-month-year-select" className="sr-only">
                      Select year
                    </label>
                    <select
                      id="calendar-month-year-select"
                      value={current.year}
                      onChange={(event) => goToYear(Number(event.target.value))}
                      className="w-20 cursor-pointer appearance-none rounded-full border border-gold/30 bg-white py-1.5 pl-3.5 pr-7 text-center text-sm font-semibold text-ink transition-colors hover:border-saffron/50 hover:bg-cream focus:outline-none focus:ring-2 focus:ring-saffron/40"
                    >
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-muted">▾</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={goToNextMonth}
                disabled={isAtMax}
                aria-label="Next month"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 text-ink transition-colors hover:bg-cream disabled:cursor-not-allowed disabled:opacity-30"
              >
                ›
              </button>
            </div>

            <div className="mt-5 grid grid-cols-7 gap-2 text-center text-xs font-semibold text-muted">
              {weekdayLabels.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-7 gap-2">
              {leadingBlanks.map((_, index) => (
                <div key={`blank-${index}`} />
              ))}
              {dayCells.map((day) => (
                <div
                  key={day}
                  className={`rounded-xl border p-2 text-xs ${
                    peakDays.has(day) ? 'border-saffron/30 bg-white text-ink' : 'border-gold/20 bg-cream/60 text-muted'
                  }`}
                >
                  <div className="font-semibold">{day}</div>
                  {peakDays.has(day) ? (
                    <div className="mt-2 rounded-full bg-maroon px-1 py-0.5 text-[9px] text-white">Peak</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-gold/20 bg-cream/60 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">Planning highlights</p>
              <h2 className="mt-2 text-xl font-semibold text-ink">Recommended sacred windows for {current.year}</h2>
              <p className="mt-2 text-sm text-muted">Use these milestones to structure reminders, consultations, and ceremonial bookings.</p>
            </div>

            <div className="space-y-3">
              {yearEvents.length ? (
                yearEvents.map((event) => (
                  <div key={event.id} className={`rounded-[1.25rem] border p-4 ${event.mood}`}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold">{formatEventDate(event.date)}</p>
                        <p className="mt-1 text-xs opacity-80">{event.note}</p>
                      </div>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]">{event.label}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-[1.25rem] border border-gold/20 bg-cream/60 p-4 text-sm text-muted">
                  No sacred windows have been published for {current.year} yet.
                </div>
              )}
            </div>

            <p className="text-xs leading-5 text-muted">
              Dates are indicative planning estimates. Confirm exact tithis with an authoritative panchang before relying on them for real bookings.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
