import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"

import Link from "next/link"

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-20 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            <span className="block w-6 h-px" style={{ background: "var(--gold)" }} />
            Accessibility
          </div>
          <h1 className="font-light text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px,5vw,56px)", lineHeight: 1.1 }}>
            Accessibility Statement
          </h1>
          <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Ralas Hearing Clinic is committed to making our services and website accessible to everyone — including patients with disabilities.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[800px] mx-auto flex flex-col gap-10">

          {/* Clinic accessibility */}
          <div>
            <h2 className="font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px,3vw,30px)", color: "var(--forest)" }}>
              Clinic Accessibility
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { heading: "Ground-floor access", body: "Our clinic is located on the 2nd floor of our building. We acknowledge this may present a challenge for patients with severe mobility limitations. For patients who cannot access stairs, we offer home visit services as an alternative — please call us to arrange." },
                { heading: "Waiting area", body: "Our waiting room has seating designed for comfort, including chairs with armrests suitable for elderly patients. We keep waiting times as short as possible and can seat accompanying caregivers." },
                { heading: "Hearing loop", body: "Our consultation rooms are fitted with an induction loop system compatible with T-coil hearing aids, allowing patients who use hearing aids to hear our audiologists more clearly during consultations." },
                { heading: "Communication support", body: "We welcome caregivers, interpreters, or family members to accompany patients during consultations. Please let us know in advance if you require any specific communication support." },
                { heading: "Home visits for mobility-impaired patients", body: "For patients with significant mobility challenges, our home visit service brings full audiological care to your home. See our Home Visits page for details." },
              ].map(({ heading, body }) => (
                <div key={heading} className="pl-4" style={{ borderLeft: "2px solid var(--gold)" }}>
                  <div className="text-sm font-medium mb-1.5" style={{ color: "var(--forest)" }}>{heading}</div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Website accessibility */}
          <div>
            <h2 className="font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px,3vw,30px)", color: "var(--forest)" }}>
              Website Accessibility
            </h2>
            <p className="text-sm font-light leading-relaxed mb-5" style={{ color: "var(--text-mid)" }}>
              We have designed ralasclinic.com to be as accessible as possible. Our current measures include:
            </p>
            <div className="flex flex-col gap-4">
              {[
                { heading: "Semantic HTML", body: "We use proper HTML heading structure (H1, H2, H3) and semantic elements to help screen readers navigate the page correctly." },
                { heading: "Colour contrast", body: "Text and background colour combinations on this website meet or exceed WCAG 2.1 AA contrast ratio requirements." },
                { heading: "Keyboard navigation", body: "The website can be navigated using a keyboard alone. Interactive elements (links, buttons, form fields) are focusable and have visible focus indicators." },
                { heading: "Alternative text", body: "Images on this website include descriptive alt text for screen reader users." },
                { heading: "Responsive design", body: "The website is fully responsive and works on all screen sizes, including mobile devices, tablets, and desktops." },
                { heading: "Font scaling", body: "Text sizes are defined in relative units, so the site respects user font size preferences set in their browser or operating system." },
              ].map(({ heading, body }) => (
                <div key={heading} className="pl-4" style={{ borderLeft: "2px solid var(--gold)" }}>
                  <div className="text-sm font-medium mb-1.5" style={{ color: "var(--forest)" }}>{heading}</div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Known limitations */}
          <div>
            <h2 className="font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px,3vw,30px)", color: "var(--forest)" }}>
              Known Limitations
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
              We are continually working to improve accessibility. Current known limitations include:
            </p>
            <div className="flex flex-col gap-2">
              {[
                "Video content on the website may not have captions — we are working to add these",
                "Some PDF documents linked from the site may not be fully screen-reader accessible",
                "The interactive hearing screener is a visual tool and may not be accessible to all screen reader users",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "var(--gold)" }} />
                  <span className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div className="p-7 md:p-10" style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.08)" }}>
            <h2 className="font-light mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px,3vw,26px)", color: "var(--forest)" }}>
              Feedback and Contact
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
              If you experience any accessibility barriers on our website or at our clinic, we want to know. Please contact us:
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+916366638452" className="text-sm font-light no-underline" style={{ color: "var(--forest)", textDecoration: "none" }}>📞 +91 6366-638452</a>
              <a href="https://wa.me/916366638452" className="text-sm font-light no-underline" style={{ color: "var(--forest)", textDecoration: "none" }}>💬 WhatsApp +91 6366-638452</a>
              <Link href="/contact" className="text-sm font-light no-underline" style={{ color: "var(--forest)", textDecoration: "none" }}>✉️ Contact form →</Link>
            </div>
            <p className="text-xs font-light mt-4 leading-relaxed" style={{ color: "var(--text-lt)" }}>
              We aim to respond to all accessibility feedback within 2 business days.
            </p>
          </div>

          <div className="pt-4 border-t" style={{ borderColor: "rgba(26,58,42,0.1)" }}>
            <p className="text-xs font-light" style={{ color: "var(--text-lt)" }}>
              This statement was last reviewed in January 2025. See also: <Link href="/privacy" style={{ color: "var(--forest)" }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: "var(--forest)" }}>Terms of Use</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}