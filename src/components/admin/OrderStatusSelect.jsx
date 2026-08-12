'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const statusStyles = {
  pending: 'bg-amber-50 text-amber-700 border-amber-200',
  paid: 'bg-green-50 text-green-700 border-green-200',
  confirmed: 'bg-sky-50 text-sky-700 border-sky-200',
  fulfilled: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  rejected: 'bg-red-50 text-red-700 border-red-200',
  failed: 'bg-red-50 text-red-700 border-red-200',
  cancelled: 'bg-gray-100 text-gray-600 border-gray-200',
}

const statusLabels = {
  pending: 'Pending',
  paid: 'Paid',
  confirmed: 'Confirmed',
  fulfilled: 'Fulfilled',
  rejected: 'Rejected',
  failed: 'Failed',
  cancelled: 'Cancelled',
}

export default function OrderStatusSelect({ orderId, status }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleChange(e) {
    setLoading(true)
    try {
      await fetch(`/api/admin/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: e.target.value }),
      })
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <select
      value={status}
      onChange={handleChange}
      disabled={loading}
      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide disabled:opacity-60 ${statusStyles[status] ?? ''}`}
    >
      {Object.entries(statusLabels).map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
