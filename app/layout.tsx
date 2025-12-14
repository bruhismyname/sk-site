import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_CONFIG, SEO_KEYWORDS, LOCATION } from "@/app/lib/constants";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const siteUrl = `https://${SITE_CONFIG.domain}`;
export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Layanan Kebidanan Profesional Desa Sari, Gajah, Demak`,
  description: SITE_CONFIG.description,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    title: `${SITE_CONFIG.name} | Layanan Kebidanan Profesional`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Layanan Kebidanan Profesional`,
    description: SITE_CONFIG.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563EB" />
        <meta name="geo.region" content="ID-JT" />
        <meta name="geo.placename" content={`${LOCATION.district}, ${LOCATION.province}`} />
        <meta name="geo.position" content={`${LOCATION.coordinates.lat};${LOCATION.coordinates.lng}`} />
        <meta name="ICBM" content={`${LOCATION.coordinates.lat}, ${LOCATION.coordinates.lng}`} />
        {/* DITAMBAHKAN: Viewport meta untuk proper mobile rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* DITAMBAHKAN: Wrapper untuk safety net overflow */}
        <div className="relative w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
