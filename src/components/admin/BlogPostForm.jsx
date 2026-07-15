'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const emptyForm = {
  slug: '',
  title: '',
  excerpt: '',
  readTime: '5 min read',
  category: '',
  image: '',
  content: '',
  takeaways: '',
}

export default function BlogPostForm({ postId, initialData }) {
  const router = useRouter()
  const [form, setForm] = useState(() =>
    initialData
      ? {
          slug: initialData.slug,
          title: initialData.title,
          excerpt: initialData.excerpt,
          readTime: initialData.readTime,
          category: initialData.category,
          image: initialData.image,
          content: (initialData.content ?? []).join('\n'),
          takeaways: (initialData.takeaways ?? []).join('\n'),
        }
      : emptyForm
  )
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
      const res = await fetch(postId ? `/api/admin/blog/${postId}` : '/api/admin/blog', {
        method: postId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Unable to save post')
      }

      router.push('/admin/blog')
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
          Slug
          <input
            type="text"
            required
            value={form.slug}
            onChange={update('slug')}
            placeholder="how-to-prepare-for-pind-daan"
            className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Category
          <input
            type="text"
            required
            value={form.category}
            onChange={update('category')}
            placeholder="Ritual Guide"
            className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-ink">
        Title
        <input
          type="text"
          required
          value={form.title}
          onChange={update('title')}
          className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
        />
      </label>

      <label className="block text-sm font-medium text-ink">
        Excerpt
        <textarea
          required
          rows={2}
          value={form.excerpt}
          onChange={update('excerpt')}
          className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Read time
          <input
            type="text"
            value={form.readTime}
            onChange={update('readTime')}
            placeholder="5 min read"
            className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Image path
          <input
            type="text"
            required
            value={form.image}
            onChange={update('image')}
            placeholder="/how-to-prepare-for-pind-daan.png"
            className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-ink">
        Article content (one paragraph per line)
        <textarea
          required
          rows={6}
          value={form.content}
          onChange={update('content')}
          className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
        />
      </label>

      <label className="block text-sm font-medium text-ink">
        Key takeaways (one per line)
        <textarea
          rows={4}
          value={form.takeaways}
          onChange={update('takeaways')}
          className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
        />
      </label>

      {error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
      ) : null}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-saffron disabled:opacity-60"
        >
          {loading ? 'Saving…' : postId ? 'Save changes' : 'Create post'}
        </button>
      </div>
    </form>
  )
}
