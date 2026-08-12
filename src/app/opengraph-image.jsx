import { ImageResponse } from 'next/og'
import { brand } from '../lib/data/siteData'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #7F1D1D 0%, #D97706 100%)',
          fontFamily: 'Georgia, serif',
          padding: 80,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 96,
            height: 96,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            color: '#FFF7ED',
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          P
        </div>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, color: '#FFF7ED' }}>{brand.name}</div>
        <div style={{ display: 'flex', marginTop: 16, fontSize: 34, color: '#FFF7ED', opacity: 0.9 }}>{brand.tagline}</div>
        <div style={{ display: 'flex', marginTop: 28, fontSize: 22, color: '#FFF7ED', opacity: 0.75, letterSpacing: 2 }}>
          PIND DAAN · SHRADDH KARMA · TARPAN · PANDIT BOOKING
        </div>
      </div>
    ),
    { ...size }
  )
}
