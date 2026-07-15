import fs from 'fs'
import mongoose from 'mongoose'
import BlogPost from '../src/lib/models/BlogPost.js'
import CalendarEvent from '../src/lib/models/CalendarEvent.js'
import { blogPosts } from '../src/lib/data/siteData.js'

const envContent = fs.readFileSync(new URL('../.env', import.meta.url), 'utf-8')
const uri = envContent.match(/^MONGODB_URI=(.+)$/m)?.[1]?.trim()

if (!uri) {
  throw new Error('MONGODB_URI not found in .env')
}

const calendarEvents = [
  { date: '2025-09-07', label: 'Pitru Paksha begins', note: 'Fortnight of ancestral remembrance starts', mood: 'bg-maroon text-white' },
  { date: '2025-09-12', label: 'Pandit booking peak', note: 'High-demand window for priest coordination', mood: 'bg-cream text-maroon border border-gold/30' },
  { date: '2025-09-17', label: 'Shraddh Karma window', note: 'Widely observed period for family Shraddh ceremonies', mood: 'bg-saffron text-white' },
  { date: '2025-09-21', label: 'Sarva Pitru Amavasya', note: 'Most significant day for Pind Daan and Tarpan', mood: 'bg-gold text-ink' },
  { date: '2026-08-27', label: 'Pitru Paksha begins', note: 'Fortnight of ancestral remembrance starts', mood: 'bg-maroon text-white' },
  { date: '2026-08-31', label: 'Pandit booking peak', note: 'High-demand window for priest coordination', mood: 'bg-cream text-maroon border border-gold/30' },
  { date: '2026-09-03', label: 'Shraddh Karma window', note: 'Widely observed period for family Shraddh ceremonies', mood: 'bg-saffron text-white' },
  { date: '2026-09-09', label: 'Sarva Pitru Amavasya', note: 'Most significant day for Pind Daan and Tarpan', mood: 'bg-gold text-ink' },
  { date: '2027-09-15', label: 'Pitru Paksha begins', note: 'Fortnight of ancestral remembrance starts', mood: 'bg-maroon text-white' },
  { date: '2027-09-19', label: 'Pandit booking peak', note: 'High-demand window for priest coordination', mood: 'bg-cream text-maroon border border-gold/30' },
  { date: '2027-09-22', label: 'Shraddh Karma window', note: 'Widely observed period for family Shraddh ceremonies', mood: 'bg-saffron text-white' },
  { date: '2027-09-29', label: 'Sarva Pitru Amavasya', note: 'Most significant day for Pind Daan and Tarpan', mood: 'bg-gold text-ink' },
]

async function run() {
  await mongoose.connect(uri)

  for (const post of blogPosts) {
    await BlogPost.updateOne({ slug: post.slug }, { $set: post }, { upsert: true })
  }
  console.log(`Seeded ${blogPosts.length} blog posts`)

  for (const event of calendarEvents) {
    const exists = await CalendarEvent.findOne({ date: event.date, label: event.label })
    if (!exists) {
      await CalendarEvent.create(event)
    }
  }
  console.log(`Seeded ${calendarEvents.length} calendar events`)

  await mongoose.disconnect()
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
