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
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: "var(--text)", padding: "80px 48px 40px" }}>
      {/* Top grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "48px", marginBottom: "64px" }}>

        {/* Brand col */}
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 600, color: "white", letterSpacing: "0.05em", marginBottom: "14px" }}>
            Ralas
          </div>
          <p style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.38)", lineHeight: 1.7 }}>
            Transforming lives through better hearing —<br />one patient at a time.
          </p>
          <div style={{ width: "28px", height: "1px", background: "var(--gold)", margin: "20px 0 24px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="tel:+916366638452" style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 6366-638452
            </a>
            <span style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: "8px" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}>
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              Mon–Sat, 10:00 AM – 7:30 PM
            </span>
          </div>
          {/* Socials */}
          <div style={{ display: "flex", gap: "8px", marginTop: "24px" }}>
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  width: "34px",
                  height: "34px",
                  border: "0.5px solid rgba(255,255,255,0.15)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services col */}
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>Services</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {services.map(({ label, href }) => (
              <Link key={label} href={href} style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Products col */}
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>Products</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {products.map(({ label, href }) => (
              <Link key={label} href={href} style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Company col */}
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>Company</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {company.map(({ label, href }) => (
              <Link key={label} href={href} style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Address band */}
      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)", borderBottom: "0.5px solid rgba(255,255,255,0.07)", padding: "20px 0", marginBottom: "28px", display: "flex", alignItems: "center", gap: "10px" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
        <a
          href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "12.5px", fontWeight: 300, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.03em" }}
        >
          2nd Floor, 121, 6th C Main Road, 4th Block, Jayanagar, Bengaluru, Karnataka – 560011
        </a>
      </div>

      {/* Bottom bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "12px", fontWeight: 300, color: "rgba(255,255,255,0.22)", letterSpacing: "0.04em" }}>
          © {new Date().getFullYear()} Ralas Hearing Clinic. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Use", href: "/terms" },
            { label: "Accessibility", href: "/accessibility" },
          ].map(({ label, href }) => (
            <Link key={label} href={href} style={{ fontSize: "12px", fontWeight: 300, color: "rgba(255,255,255,0.22)", textDecoration: "none", transition: "color 0.2s" }}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
