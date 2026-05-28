'use client'

import { useState } from 'react'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <article key={item.question} className="overflow-hidden rounded-[1.25rem] border border-gold/20 bg-white">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-sm font-semibold text-ink">{item.question}</span>
              <span className="rounded-full bg-cream px-2.5 py-1 text-xs font-bold text-maroon">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="px-5 pb-5 text-sm leading-6 text-muted">{item.answer}</div>}
          </article>
        )
      })}
    </div>
  )
}