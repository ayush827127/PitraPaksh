import Image from 'next/image'

const FADE_STYLE = {
  maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
}

export default function HeroBackgroundImage({ src, alt = '' }) {
  return (
    <div className="pointer-events-none absolute inset-0" style={FADE_STYLE}>
      <Image src={src} alt={alt} fill priority className="object-cover" />
    </div>
  )
}
