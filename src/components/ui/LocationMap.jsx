import { brand } from '../../lib/data/siteData'

export default function LocationMap() {
  return (
    <div className="overflow-hidden rounded-3xl border border-gold/20 bg-white">
      <div className="aspect-16/9 w-full sm:aspect-21/9">
        <iframe
          src={brand.mapEmbedUrl}
          title={`Map to ${brand.name} — ${brand.location}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
          allowFullScreen
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 p-5">
        <div>
          <p className="text-sm font-semibold text-ink">{brand.name}</p>
          <p className="mt-1 text-sm text-muted">{brand.location}</p>
        </div>
        <a
          href={brand.mapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-maroon px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-saffron"
        >
          Get Directions
        </a>
      </div>
    </div>
  )
}
