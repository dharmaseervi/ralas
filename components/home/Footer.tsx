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
  { label: "Our Team", href: "/about#team" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/support/faq" },
  { label: "Contact", href: "/contact" },
]

const products = [
  { label: "Behind-the-Ear Aids", href: "/product/behind-the-ear-aids" },
  { label: "Rechargeable Aids", href: "/product/rechargeable-aids" },
  { label: "In-Ear (ITE) Aids", href: "/product/in-ear-aids" },
  { label: "Smart Hearing Aids", href: "/product/smart-hearing-aids" },
  { label: "Accessories", href: "/product/accessories" },
]

const socials = [
  {
    label: "Facebook", href: "#",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>),
  },
  {
    label: "Instagram", href: "#",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>),
  },
  {
    label: "LinkedIn", href: "#",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>),
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