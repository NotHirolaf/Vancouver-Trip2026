import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vancouver 2026 — A Travel Scrapbook",
  description:
    "An immersive scrollytelling travel journal documenting our trip to Vancouver in the summer of 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {/* Grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
