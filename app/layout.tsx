import type { Metadata } from "next";
import { Geist, DM_Sans, Tajawal } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "alvvoayad.ai — Dashboards · Automation · Websites · Apps",
  description:
    "We build the systems your business is missing. Dashboards, automation, websites and apps — built around how you actually work.",
  metadataBase: new URL("https://alvvoayad.com"),
  openGraph: {
    title: "alvvoayad.ai — premium AI agency",
    description:
      "Dashboards, automation, websites and apps built around how you actually work.",
    images: ["/hero-orb.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${dmSans.variable} ${tajawal.variable}`}
    >
      <body className="bg-midnight text-bone min-h-screen">
        <div className="bloom bloom-a" />
        <div className="bloom bloom-b" />
        <div className="bloom bloom-c" />
        {children}
      </body>
    </html>
  );
}
