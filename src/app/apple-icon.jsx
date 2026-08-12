import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #7F1D1D, #D97706)',
          color: '#FFF7ED',
          fontSize: 96,
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
        }}
      >
        P
      </div>
    ),
    { ...size }
  )
}
