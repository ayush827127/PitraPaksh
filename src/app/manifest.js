import { brand } from '../lib/data/siteData'

export default function manifest() {
  return {
    name: `${brand.name} | ${brand.tagline}`,
    short_name: brand.name,
    description: brand.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF7ED',
    theme_color: '#7F1D1D',
    icons: [
      { src: '/icon', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  }
}
