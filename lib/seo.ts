// ─────────────────────────────────────────────────────────────
// RALAS HEARING CLINIC — SEO METADATA
//
// Usage in any page:
//   import { generateMetadata } from "@/lib/seo"
//   export const metadata = generateMetadata("home")
//
// Or for dynamic pages:
//   export const metadata = generateMetadata("hearing-aids")
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next"

const BASE_URL = "https://ralasclinic.com"
const CLINIC_NAME = "Ralas Hearing Clinic"
const LOCATION = "Jayanagar, Bengaluru"
const PHONE = "+91 6366-638452"

// ── Shared OG image (create this 1200×630 image in your /public folder) ──
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`

// ── Base metadata shared across all pages ──
const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  authors: [{ name: CLINIC_NAME, url: BASE_URL }],
  creator: CLINIC_NAME,
  publisher: CLINIC_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    // Add your Google Search Console verification code here:
    // google: "your-verification-code",
  },
}

// ── Page-specific metadata ──
type PageKey =
  | "home" | "about" | "contact" | "resources" | "services"
  | "hearing-aids" | "hearing-tests" | "speech-therapy"
  | "tinnitus-treatment" | "home-visits"
  | "product-bte" | "product-rechargeable" | "product-ite"
  | "product-smart" | "product-accessories"
  | "privacy" | "terms" | "accessibility"

const pages: Record<PageKey, Metadata> = {

  home: {
    title: `Hearing Aids & Audiologist in Bengaluru | ${CLINIC_NAME}`,
    description: "Ralas Hearing Clinic in Jayanagar, Bengaluru offers hearing tests, hearing aids (Oticon, Phonak, Signia, Widex), speech therapy, and tinnitus treatment. Free first consultation. Call +91 6366-638452.",
    keywords: ["hearing clinic Bengaluru", "hearing aids Bengaluru", "audiologist Jayanagar", "hearing test Bengaluru", "speech therapy Bengaluru", "tinnitus treatment Bengaluru", "Oticon Bengaluru", "Phonak Bengaluru"],
    openGraph: {
      title: `${CLINIC_NAME} — Hearing Aids & Audiology, Bengaluru`,
      description: "Expert audiological care in Jayanagar, Bengaluru. Hearing tests, premium hearing aids, speech therapy, and tinnitus treatment. Free first consultation.",
      url: BASE_URL,
      siteName: CLINIC_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Ralas Hearing Clinic, Jayanagar Bengaluru" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${CLINIC_NAME} — Hearing Aids & Audiology`,
      description: "Expert audiological care in Jayanagar, Bengaluru. Free first consultation.",
      images: [DEFAULT_OG_IMAGE],
    },
    alternates: { canonical: BASE_URL },
  },

  about: {
    title: `About Us | ${CLINIC_NAME} — Jayanagar, Bengaluru`,
    description: "Founded in 2012, Ralas Hearing Clinic is Bengaluru's trusted specialist clinic for hearing care and speech therapy. Meet our RCI-registered audiologists in Jayanagar.",
    keywords: ["about Ralas Hearing Clinic", "audiologist Jayanagar Bengaluru", "RCI registered audiologist", "hearing clinic since 2012"],
    openGraph: {
      title: `About ${CLINIC_NAME} — Dedicated to Better Hearing`,
      description: "Founded in 2012 in Jayanagar, Bengaluru. RCI-registered audiologists providing hearing care and speech therapy for all ages.",
      url: `${BASE_URL}/about`,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Ralas Hearing Clinic team" }],
    },
    alternates: { canonical: `${BASE_URL}/about` },
  },

  contact: {
    title: `Book an Appointment | ${CLINIC_NAME}, Bengaluru`,
    description: "Book a hearing test or consultation at Ralas Hearing Clinic, Jayanagar, Bengaluru. Mon–Sat 10 AM–7:30 PM. Call +91 6366-638452 or WhatsApp us.",
    keywords: ["book hearing test Bengaluru", "hearing clinic appointment Jayanagar", "audiologist appointment Bengaluru"],
    openGraph: {
      title: `Contact & Book — ${CLINIC_NAME}`,
      description: "Book a hearing test or consultation at our Jayanagar clinic. Mon–Sat 10 AM–7:30 PM.",
      url: `${BASE_URL}/contact`,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Contact Ralas Hearing Clinic" }],
    },
    alternates: { canonical: `${BASE_URL}/contact` },
  },

  "hearing-aids": {
    title: `Hearing Aids in Bengaluru | Oticon, Phonak, Signia, Widex | ${CLINIC_NAME}`,
    description: "Authorised dealer for Oticon, Phonak, Signia, and Widex hearing aids in Bengaluru. BTE, RIC, ITE, and smart hearing aids from ₹18,000. 30-day trial. Expert fitting by RCI audiologists.",
    keywords: ["hearing aids Bengaluru", "Oticon hearing aids Bengaluru", "Phonak Bengaluru", "Signia hearing aids", "Widex Bengaluru", "BTE hearing aids", "rechargeable hearing aids Bengaluru", "hearing aid price Bengaluru"],
    openGraph: {
      title: `Hearing Aids in Bengaluru — Oticon, Phonak, Signia, Widex`,
      description: "Authorised dealer for all major hearing aid brands. Expert fitting, 30-day trial, 3-year warranty. From ₹18,000.",
      url: `${BASE_URL}/hearing-aids`,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Hearing aids at Ralas Clinic Bengaluru" }],
    },
    alternates: { canonical: `${BASE_URL}/hearing-aids` },
  },

  "hearing-tests": {
    title: `Hearing Test in Bengaluru | Free Audiogram | ${CLINIC_NAME}`,
    description: "Get a comprehensive hearing test in Bengaluru at Ralas Hearing Clinic. Pure tone audiometry, speech discrimination, tympanometry, and OAE screening. Free first visit. Same-day audiogram.",
    keywords: ["hearing test Bengaluru", "audiogram Bengaluru", "pure tone audiometry Bengaluru", "hearing test Jayanagar", "free hearing test Bengaluru", "audiologist test Bengaluru"],
    openGraph: {
      title: `Hearing Tests in Bengaluru — Free Audiogram Same Day`,
      description: "Comprehensive audiometric testing at our Jayanagar clinic. Same-day audiogram report. Free first visit.",
      url: `${BASE_URL}/hearing-tests`,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Hearing test at Ralas Clinic" }],
    },
    alternates: { canonical: `${BASE_URL}/hearing-tests` },
  },

  "speech-therapy": {
    title: `Speech Therapy in Bengaluru | Children & Adults | ${CLINIC_NAME}`,
    description: "Professional speech and language therapy in Bengaluru for children and adults. Stuttering, articulation, language delay, post-stroke aphasia, voice disorders. RCI-registered therapist.",
    keywords: ["speech therapy Bengaluru", "speech therapist Jayanagar", "language therapy Bengaluru", "stuttering therapy Bengaluru", "speech delay child Bengaluru", "aphasia therapy Bengaluru"],
    openGraph: {
      title: `Speech Therapy in Bengaluru — Children & Adults`,
      description: "Evidence-based speech and language therapy for all ages. On-site speech-language pathologist at our Jayanagar clinic.",
      url: `${BASE_URL}/speech-therapy`,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Speech therapy at Ralas Clinic" }],
    },
    alternates: { canonical: `${BASE_URL}/speech-therapy` },
  },

  "tinnitus-treatment": {
    title: `Tinnitus Treatment in Bengaluru | TRT & Sound Therapy | ${CLINIC_NAME}`,
    description: "Advanced tinnitus management in Bengaluru. Sound therapy, Tinnitus Retraining Therapy (TRT), and hearing aids with tinnitus programmes. Expert audiological assessment.",
    keywords: ["tinnitus treatment Bengaluru", "tinnitus therapy Bengaluru", "TRT Bengaluru", "ringing in ears treatment Bengaluru", "tinnitus audiologist Bengaluru"],
    openGraph: {
      title: `Tinnitus Treatment in Bengaluru — TRT & Sound Therapy`,
      description: "Advanced tinnitus management combining sound therapy, TRT, and hearing device solutions at our Jayanagar clinic.",
      url: `${BASE_URL}/tinnitus-treatment`,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Tinnitus treatment at Ralas Clinic" }],
    },
    alternates: { canonical: `${BASE_URL}/tinnitus-treatment` },
  },

  "home-visits": {
    title: `Home Visit Audiologist Bengaluru | ${CLINIC_NAME}`,
    description: "Ralas Hearing Clinic offers home visit audiological services across Bengaluru. Hearing tests, hearing aid fitting, and speech therapy at your doorstep. Ideal for elderly and mobility-impaired patients.",
    keywords: ["home visit audiologist Bengaluru", "hearing test at home Bengaluru", "mobile audiologist Bengaluru", "hearing aid fitting at home Bengaluru"],
    openGraph: {
      title: `Home Visit Audiology Service — Bengaluru`,
      description: "Professional hearing tests and hearing aid fitting at your home across Bengaluru. Ideal for elderly patients.",
      url: `${BASE_URL}/home-visits`,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Home visit audiology service Bengaluru" }],
    },
    alternates: { canonical: `${BASE_URL}/home-visits` },
  },

  services: {
    title: `Audiology Services in Bengaluru | ${CLINIC_NAME}`,
    description: "Comprehensive hearing and speech services in Bengaluru — hearing tests, hearing aids, speech therapy, tinnitus treatment, and home visits. Serving Jayanagar and all of Bengaluru.",
    keywords: ["audiology services Bengaluru", "hearing clinic services Jayanagar", "hearing and speech therapy Bengaluru"],
    openGraph: {
      title: `Audiology Services — ${CLINIC_NAME}, Bengaluru`,
      description: "Hearing tests, hearing aids, speech therapy, tinnitus treatment, and home visits in Bengaluru.",
      url: `${BASE_URL}/services`,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Ralas Clinic services" }],
    },
    alternates: { canonical: `${BASE_URL}/services` },
  },

  resources: {
    title: `Hearing Health Resources & Guides | ${CLINIC_NAME}`,
    description: "Free guides, articles, and resources on hearing health from the audiologists at Ralas Hearing Clinic, Bengaluru. Learn about hearing loss, hearing aids, tinnitus, and speech therapy.",
    keywords: ["hearing health guide", "audiogram explained", "hearing loss information", "tinnitus advice", "hearing aid guide India"],
    openGraph: {
      title: `Hearing Health Resources — ${CLINIC_NAME}`,
      description: "Free guides and articles on hearing loss, hearing aids, tinnitus, and speech therapy from our Bengaluru audiologists.",
      url: `${BASE_URL}/resources`,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Hearing health resources" }],
    },
    alternates: { canonical: `${BASE_URL}/resources` },
  },

  "product-bte": {
    title: `Behind-the-Ear (BTE) Hearing Aids in Bengaluru | ${CLINIC_NAME}`,
    description: "Behind-the-Ear hearing aids from ₹18,000 in Bengaluru. Suitable for all levels of hearing loss. Oticon, Phonak, Signia, Widex. Expert fitting and 30-day trial.",
    keywords: ["BTE hearing aids Bengaluru", "behind the ear hearing aid price India", "hearing aid Jayanagar"],
    openGraph: { title: "Behind-the-Ear Hearing Aids — Bengaluru", description: "BTE hearing aids from ₹18,000. All loss levels. Expert fitting.", url: `${BASE_URL}/product/behind-the-ear-aids`, type: "website", images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "BTE hearing aids" }] },
    alternates: { canonical: `${BASE_URL}/product/behind-the-ear-aids` },
  },

  "product-rechargeable": {
    title: `Rechargeable Hearing Aids in Bengaluru | ${CLINIC_NAME}`,
    description: "Rechargeable hearing aids from ₹35,000 in Bengaluru. No battery replacement needed. 16–30 hours per charge. Oticon, Phonak, Signia, Widex. 30-day trial.",
    keywords: ["rechargeable hearing aids Bengaluru", "rechargeable hearing aid India", "lithium ion hearing aid Bengaluru"],
    openGraph: { title: "Rechargeable Hearing Aids — Bengaluru", description: "Rechargeable hearing aids from ₹35,000. Charge overnight, wear all day.", url: `${BASE_URL}/product/rechargeable-aids`, type: "website", images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Rechargeable hearing aids" }] },
    alternates: { canonical: `${BASE_URL}/product/rechargeable-aids` },
  },

  "product-ite": {
    title: `In-the-Ear (ITE) Hearing Aids in Bengaluru | ${CLINIC_NAME}`,
    description: "Custom-made In-the-Ear hearing aids from ₹22,000 in Bengaluru. ITE, ITC, CIC, IIC styles. Discreet and comfortable. Expert fitting by RCI audiologists.",
    keywords: ["ITE hearing aids Bengaluru", "invisible hearing aids Bengaluru", "CIC hearing aids India", "custom hearing aids Bengaluru"],
    openGraph: { title: "In-the-Ear Hearing Aids — Bengaluru", description: "Custom-made ITE aids from ₹22,000. Discreet, comfortable, perfectly fitted.", url: `${BASE_URL}/product/in-ear-aids`, type: "website", images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "ITE hearing aids" }] },
    alternates: { canonical: `${BASE_URL}/product/in-ear-aids` },
  },

  "product-smart": {
    title: `Smart Hearing Aids in Bengaluru | AI & Bluetooth | ${CLINIC_NAME}`,
    description: "AI-powered smart hearing aids in Bengaluru from ₹60,000. App control, Bluetooth streaming, remote fine-tuning. Oticon More, Phonak Lumity, Signia IX, Widex Moment.",
    keywords: ["smart hearing aids Bengaluru", "Bluetooth hearing aids India", "AI hearing aids Bengaluru", "Oticon More Bengaluru", "Phonak Lumity India"],
    openGraph: { title: "Smart Hearing Aids — AI & Bluetooth, Bengaluru", description: "AI-powered smart hearing aids from ₹60,000. App control, Bluetooth streaming.", url: `${BASE_URL}/product/smart-hearing-aids`, type: "website", images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Smart hearing aids" }] },
    alternates: { canonical: `${BASE_URL}/product/smart-hearing-aids` },
  },

  "product-accessories": {
    title: `Hearing Aid Accessories in Bengaluru | ${CLINIC_NAME}`,
    description: "Hearing aid accessories in Bengaluru — batteries, cleaning kits, TV streamers, remote microphones, custom ear plugs. Available at our Jayanagar clinic.",
    keywords: ["hearing aid batteries Bengaluru", "hearing aid accessories India", "TV streamer hearing aid", "hearing aid cleaning kit"],
    openGraph: { title: "Hearing Aid Accessories — Bengaluru", description: "Batteries, cleaning kits, connectivity devices, and custom ear protection at our Jayanagar clinic.", url: `${BASE_URL}/product/accessories`, type: "website", images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Hearing aid accessories" }] },
    alternates: { canonical: `${BASE_URL}/product/accessories` },
  },

  privacy: {
    title: `Privacy Policy | ${CLINIC_NAME}`,
    description: "Privacy policy for Ralas Hearing Clinic. How we collect, use, and protect your personal information.",
    robots: { index: false, follow: false },
    alternates: { canonical: `${BASE_URL}/privacy` },
  },

  terms: {
    title: `Terms of Use | ${CLINIC_NAME}`,
    description: "Terms of use for Ralas Hearing Clinic services and website.",
    robots: { index: false, follow: false },
    alternates: { canonical: `${BASE_URL}/terms` },
  },

  accessibility: {
    title: `Accessibility Statement | ${CLINIC_NAME}`,
    description: "Ralas Hearing Clinic's accessibility statement — how we make our clinic and website accessible to everyone.",
    alternates: { canonical: `${BASE_URL}/accessibility` },
  },
}

export function generateMetadata(page: PageKey): Metadata {
  return {
    ...baseMetadata,
    ...pages[page],
    openGraph: {
      siteName: CLINIC_NAME,
      locale: "en_IN",
      ...pages[page].openGraph,
    },
  }
}

// ── Local Business JSON-LD Schema ──
// Add this to app/layout.tsx inside <head> via <Script> or inline <script>
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Ralas Hearing Clinic",
  "alternateName": "Ralas Speech and Hearing Clinic",
  "url": "https://ralasclinic.com",
  "logo": "https://ralasclinic.com/logo.png",
  "image": "https://ralasclinic.com/og-default.jpg",
  "description": "Specialist hearing clinic in Jayanagar, Bengaluru offering hearing tests, hearing aids, speech therapy, and tinnitus treatment.",
  "telephone": "+916366638452",
  "email": "info@ralasclinic.com",
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
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "10:00",
      "closes": "19:30"
    }
  ],
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Credit Card",
  "medicalSpecialty": "Audiology",
  "hasMap": "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20",
  "sameAs": [
    "https://ralasclinic.com"
  ]
}