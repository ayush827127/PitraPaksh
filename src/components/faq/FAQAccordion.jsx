'use client'

import { useState } from 'react'

export default function FAQAccordion({ categories }) {
  const [openKey, setOpenKey] = useState(`0-0`)

  return (
    <div className="space-y-8">
      {categories.map((group, groupIndex) => (
        <div key={group.category}>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-saffron">{group.category}</h2>
          <div className="space-y-3">
            {group.items.map((item, itemIndex) => {
              const key = `${groupIndex}-${itemIndex}`
              const isOpen = openKey === key

              return (
                <article key={item.question} className="overflow-hidden rounded-[1.25rem] border border-gold/20 bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-ink">{item.question}</span>
                    <span className="rounded-full bg-cream px-2.5 py-1 text-xs font-bold text-maroon shrink-0">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && <div className="px-5 pb-5 text-sm leading-6 text-muted">{item.answer}</div>}
                </article>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
