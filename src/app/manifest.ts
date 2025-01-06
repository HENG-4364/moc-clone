import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  // return {
  //   name: "My Next.js PWA",
  //   short_name: "NextPWA",
  //   description: "A Progressive Web App built with Next.js",
  //   start_url: "/",
  //   display: "standalone",
  //   background_color: "#ffffff",
  //   theme_color: "#000000",
  //   icons: [
  //     {
  //       src: "/icon-192x192.png",
  //       sizes: "192x192",
  //       type: "image/png",
  //     },
  //     {
  //       src: "/icon-512x512.png",
  //       sizes: "512x512",
  //       type: "image/png",
  //     },
  //   ],
  // };
  return {
    name: 'Ministry of Commerce',
    lang: 'km',
    display_override: ['standalone'],
    short_name: 'Attendance',
    description: 'Check your attendance with seamless QR code scanning',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: "/MoC-Icon.svg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/MoC-Icon.svg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
