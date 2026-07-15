import connectDB from '../db/connect'
import CalendarEvent from '../models/CalendarEvent'

function serialize(event) {
  return {
    id: event._id.toString(),
    date: event.date,
    label: event.label,
    note: event.note,
    mood: event.mood,
  }
}

export async function getAllCalendarEvents() {
  await connectDB()
  const events = await CalendarEvent.find().sort({ date: 1 }).lean()
  return events.map(serialize)
}
