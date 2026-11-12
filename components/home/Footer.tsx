import Link from "next/link"

const services = [
  { label: "Hearing Tests", href: "/hearing-tests" },
  { label: "Speech Therapy", href: "/speech-therapy" },
  { label: "Hearing Aids", href: "/hearing-aids" },
  { label: "Tinnitus Treatment", href: "/tinnitus-treatment" },
  { label: "Home Visits", href: "/home-visits" },
]

const company = [
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/support/faq" },
  { label: "Contact", href: "/contact" },
]

const products = [
  { label: "Behind-the-Ear Aids", href: "/products/behind-the-ear-aids" },
  { label: "Rechargeable Aids", href: "/products/rechargeable-aids" },
  { label: "In-Ear (ITE) Aids", href: "/products/in-ear-aids" },
  { label: "Smart Hearing Aids", href: "/products/smart-hearing-aids" },
  { label: "Accessories", href: "/products/accessories" },
]

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/916366638452?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Ralas%20Hearing%20Clinic.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={13} height={13}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ralasclinic",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ralasclinic",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>),
  },
]

export default function Footer() {
  return (
    <footer className="pt-14 md:pt-20 pb-8 px-5 md:px-12" style={{ background: "var(--text)" }}>

      {/* ── Top grid — 2×2 on mobile, 4 col on desktop ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

        {/* Brand — full width on mobile */}
        <div className="col-span-2 md:col-span-1">
          <div
            className="text-2xl font-semibold tracking-wide text-white mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ralas
          </div>
          <p className="text-xs font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
            Transforming lives through better hearing —<br />one patient at a time.
          </p>
          <div className="w-7 h-px my-5" style={{ background: "var(--gold)" }} />
          <div className="flex flex-col gap-2.5">
            <a
              href="tel:+916366638452"
              className="flex items-center gap-2 text-xs font-light no-underline"
              style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={12} height={12}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 6366-638452
            </a>
            <span className="flex items-center gap-2 text-xs font-light" style={{ color: "rgba(255,255,255,0.35)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={12} height={12}>
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              Mon–Sat, 10:00 AM – 7:30 PM
            </span>
          </div>
          {/* Socials */}
          <div className="flex gap-2 mt-5">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full flex items-center justify-center no-underline transition-colors"
                style={{ border: "0.5px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Services</div>
          <div className="flex flex-col gap-2.5">
            {services.map(({ label, href }) => (
              <Link
                key={label} href={href}
                className="text-xs font-light no-underline transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Products</div>
          <div className="flex flex-col gap-2.5">
            {products.map(({ label, href }) => (
              <Link
                key={label} href={href}
                className="text-xs font-light no-underline transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Company</div>
          <div className="flex flex-col gap-2.5">
            {company.map(({ label, href }) => (
              <Link
                key={label} href={href}
                className="text-xs font-light no-underline transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Address band ── */}
      <div
        className="flex items-start gap-2.5 py-5 mb-6"
        style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)", borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13} className="flex-shrink-0 mt-0.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
        <a
          href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-light leading-relaxed no-underline"
          style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.03em" }}
        >
          2nd Floor, 121, 6th C Main Road, 4th Block, Jayanagar, Bengaluru, Karnataka – 560011
        </a>
      </div>

      {/* ── Bottom bar — stacks on mobile ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="text-xs font-light tracking-wider" style={{ color: "rgba(255,255,255,0.22)" }}>
          © {new Date().getFullYear()} Ralas Hearing Clinic. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Use", href: "/terms" },
            { label: "Accessibility", href: "/accessibility" },
          ].map(({ label, href }) => (
            <Link
              key={label} href={href}
              className="text-xs font-light no-underline transition-colors hover:text-white/50"
              style={{ color: "rgba(255,255,255,0.22)", textDecoration: "none" }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

    </footer>
  )
}