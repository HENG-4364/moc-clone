import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import { Hanuman, Moul } from "next/font/google";
import "./globals.css";
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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/MoC-Icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/MoC-Icon.svg" />
      </head>F
      <body className={`${hanuman.className} ${moul.className}`}>
        {children}
      </body>
    </html>
  );
}
