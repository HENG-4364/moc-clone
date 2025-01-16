import type { Metadata, Viewport } from "next";
import { Layout } from "@/components/Layout";
import { Hanuman, Moul } from "next/font/google";
import "./globals.css";
import { PWAInstallPrompt } from "@/components/pwa-install-prompt";
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

const defaultUrl = process.env.NEXT_PUBLIC_MOC_APP_URL
  ? `https://${process.env.NEXT_PUBLIC_MOC_APP_URL}`
  : "http://localhost:3000";

export const metadata = {
  title: "MOC",
  description: "Check your attendance with seamless QR code scanning",
  appleWebApp: {
    capable: true,
    statusBarStyle: "#2980B9",
  },
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
      <body className={`${hanuman.className} ${moul.className}`}>
        {children}
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
