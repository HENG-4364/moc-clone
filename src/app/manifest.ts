import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ministry of Commerce',
    lang: 'km',
    display_override: ['standalone'],
    short_name: 'MOC',
    description: 'Check your attendance with seamless QR code scanning',
    start_url: '/',
    display: 'standalone',
    background_color: '#2980B9',
    theme_color: '#2980B9',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
