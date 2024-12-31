import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { Hanuman, Moul } from "next/font/google";

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
      <body className={`${hanuman.className} ${moul.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: "Ministry of Commerce | moc.gov.kh",
  description:
    "សូមស្វាគមន៍មកកាន់ និងសូមអរគុណចំពោះការចូលមកកាន់គេហទំព័ររបស់យើងខ្ញុំ។",
  openGraph: {
    images: {
      url: "/banner.jpg",
    },
    type: "website",
    title: "Ministry of Commerce | moc.gov.kh",
    description:
      " សូមស្វាគមន៍មកកាន់ក្រសួងពាណិជ្ជកម្មនិងសូមអរគុណចំពោះការចូលមកកាន់គេហទំព័ររបស់យើងខ្ញុំ។ ខ្ញុំមានសេចក្តីរីករាយសូមជម្រាបជូនថាបេសកកម្មរបស់ក្រសួងគឺផ្តល់ជូនសាធារណៈជននូវរាល់សេវាកម្មទាក់ទងនឹងពាណិជ្ជកម្មទីផ្សារថ្មីៗ និងបន្តអនុវត្តគោលនយោបាយពាណិជ្ជកម្មរបស់កម្ពុជាដើម្បីផលប្រយោជន៍ដ៏ធំធេងនៃការអភិវឌ្ឍ",
    siteName: "moc.gov.kh",
    url: "moc.gov.kh",
  },
};
