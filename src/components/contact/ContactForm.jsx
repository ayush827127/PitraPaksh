'use client'

import { useState } from 'react'
import { services } from '../../lib/data/siteData'

const emptyForm = { name: '', mobile: '', email: '', serviceInterest: services[0]?.title ?? '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Unable to send your inquiry')
      }

      setStatus('success')
      setMessage("Thank you — our team will reach out shortly.")
      setForm(emptyForm)
    } catch (err) {
      setStatus('error')
      setMessage(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-gold/20 bg-white p-5 shadow-sm">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Name
          <input
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Mobile
          <input
            type="tel"
            required
            value={form.mobile}
            onChange={update('mobile')}
            className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
            placeholder="Your number"
          />
        </label>
      </div>

      <label className="mt-3 block text-sm font-medium text-ink">
        Email
        <input
          type="email"
          required
          value={form.email}
          onChange={update('email')}
          className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
          placeholder="you@example.com"
        />
      </label>

      <label className="mt-3 block text-sm font-medium text-ink">
        Service interest
        <select
          value={form.serviceInterest}
          onChange={update('serviceInterest')}
          className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
        >
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-3 block text-sm font-medium text-ink">
        Message
        <textarea
          rows="5"
          required
          value={form.message}
          onChange={update('message')}
          className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
          placeholder="Tell us about your ritual planning needs."
        />
      </label>

      {message ? (
        <p className={`mt-3 text-sm ${status === 'success' ? 'text-green-700' : 'text-red-600'}`}>{message}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-4 w-full rounded-full bg-maroon px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-saffron disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send inquiry'}
      </button>
    </form>
  )
}
