import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ralasclinic.com"),
  title: {
    default: "Ralas Hearing Clinic — Hearing Aids & Audiology, Bengaluru",
    template: "%s | Ralas Hearing Clinic",
  },
  description: "Specialist hearing clinic in Jayanagar, Bengaluru. Hearing tests, hearing aids (Oticon, Phonak, Signia, Widex), speech therapy, and tinnitus treatment. Free first consultation.",
  keywords: ["hearing clinic Bengaluru", "hearing aids Bengaluru", "audiologist Jayanagar", "speech therapy Bengaluru"],
  authors: [{ name: "Ralas Hearing Clinic", url: "https://ralasclinic.com" }],
  creator: "Ralas Hearing Clinic",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ralasclinic.com",
    siteName: "Ralas Hearing Clinic",
    title: "Ralas Hearing Clinic — Hearing Aids & Audiology, Bengaluru",
    description: "Specialist hearing clinic in Jayanagar, Bengaluru. Expert audiologists, premium hearing aids, speech therapy.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Ralas Hearing Clinic Bengaluru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralas Hearing Clinic — Bengaluru",
    description: "Hearing aids, hearing tests, speech therapy and tinnitus treatment in Jayanagar, Bengaluru.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Ralas Hearing Clinic",
  "alternateName": "Ralas Speech and Hearing Clinic",
  "url": "https://ralasclinic.com",
  "description": "Specialist hearing clinic in Jayanagar, Bengaluru offering hearing tests, hearing aids, speech therapy, and tinnitus treatment.",
  "telephone": "+916366638452",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, 121, 6th C Main Road, 4th Block",
    "addressLocality": "Jayanagar",
    "addressRegion": "Karnataka",
    "postalCode": "560011",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9279",
    "longitude": "77.5832"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:30"
    }
  ],
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Credit Card",
  "medicalSpecialty": "Audiology",
  "hasMap": "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MY0X90MLP6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MY0X90MLP6');
          `}
        </Script>
      </body>
    </html>
  )
}