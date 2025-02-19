import type { Metadata, Viewport } from "next";
import { Layout } from "@/components/Layout";
import { Hanuman, Moul } from "next/font/google";
import "./globals.css";
import { PWAInstallPrompt } from "@/components/pwa-install-prompt";
import { siteConfig } from "@/common/config";
const hanuman = Hanuman({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

// If loading a variable font, you don't need to specify the font weight
const moul = Moul({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

// export const metadata = {
//   title: "MOC",
//   description: "Check your attendance with seamless QR code scanning",
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: "#2980B9",
//   },
// };

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [{ name: "ក្រសួងពាណិជ្ជកម្ម", url: "https://moc.gov.kh" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "#2980B9",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.thumbnailImage,
      },
    ],
  },
  icons: "/favicon.ico",
  manifest: "/manifest.json",
};
export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Attendance" />
      </head>
      <body className={`${hanuman.className} ${moul.className}`}>
        {children}
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
