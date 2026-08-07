'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const statusStyles = {
  new: 'bg-amber-50 text-amber-700 border-amber-200',
  contacted: 'bg-sky-50 text-sky-700 border-sky-200',
  resolved: 'bg-green-50 text-green-700 border-green-200',
}

export default function QueryStatusSelect({ queryId, status }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleChange(e) {
    setLoading(true)
    try {
      await fetch(`/api/admin/queries/${queryId}`, {
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
      <option value="new">New</option>
      <option value="contacted">Contacted</option>
      <option value="resolved">Resolved</option>
    </select>
  )
}
