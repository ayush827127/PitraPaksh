'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeleteButton({ endpoint, confirmMessage }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!window.confirm(confirmMessage || 'Are you sure you want to delete this item?')) return

    setLoading(true)
    try {
      await fetch(endpoint, { method: 'DELETE' })
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="text-xs font-semibold text-red-600 hover:text-red-700 disabled:opacity-50"
    >
      {loading ? 'Deleting…' : 'Delete'}
    </button>
  )
}
