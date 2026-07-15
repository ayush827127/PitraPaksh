import Link from 'next/link'
import connectDB from '../../../lib/db/connect'
import BlogPost from '../../../lib/models/BlogPost'
import CalendarEvent from '../../../lib/models/CalendarEvent'
import Order from '../../../lib/models/Order'

export const dynamic = 'force-dynamic'

async function getStats() {
  await connectDB()

  const [blogCount, calendarCount, orders] = await Promise.all([
    BlogPost.countDocuments(),
    CalendarEvent.countDocuments(),
    Order.find().select('amount status').lean(),
  ])

  const paidOrders = orders.filter((order) => order.status === 'paid')
  const pendingOrders = orders.filter((order) => order.status === 'pending')
  const totalRevenue = paidOrders.reduce((sum, order) => sum + order.amount, 0)

  return {
    blogCount,
    calendarCount,
    totalOrders: orders.length,
    paidCount: paidOrders.length,
    pendingCount: pendingOrders.length,
    totalRevenue,
  }
}

export default async function AdminDashboardPage() {
  const stats = await getStats()

  const cards = [
    { label: 'Blog posts', value: stats.blogCount, href: '/admin/blog' },
    { label: 'Calendar events', value: stats.calendarCount, href: '/admin/calendar' },
    { label: 'Total orders', value: stats.totalOrders, href: '/admin/payments' },
    { label: 'Paid orders', value: stats.paidCount, href: '/admin/payments' },
    { label: 'Pending orders', value: stats.pendingCount, href: '/admin/payments' },
    { label: 'Revenue (paid)', value: `₹${stats.totalRevenue.toLocaleString('en-IN')}`, href: '/admin/payments' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-semibold text-ink">Dashboard</h1>
      <p className="mt-2 text-sm text-muted">Overview of blog content, ritual calendar data, and booking payments.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-3xl border border-gold/20 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold text-maroon">{card.value}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
