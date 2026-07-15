import mongoose from 'mongoose'

const calendarEventSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: [true, 'Date is required'],
      match: [/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'],
    },
    label: {
      type: String,
      required: [true, 'Label is required'],
      trim: true,
    },
    note: {
      type: String,
      trim: true,
      default: '',
    },
    mood: {
      type: String,
      default: 'bg-saffron text-white',
    },
  },
  {
    timestamps: true,
  }
)

const CalendarEvent = mongoose.models.CalendarEvent || mongoose.model('CalendarEvent', calendarEventSchema)

export default CalendarEvent
