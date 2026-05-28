export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-sm text-muted sm:text-base">{description}</p>}
    </div>
  )
}