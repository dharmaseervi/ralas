"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const steps = [
  {
    num: "01",
    title: "Book Free Consultation",
    desc: "Call, WhatsApp, or book online in under 2 minutes. Tell us your concerns — our audiologist prepares specifically for your visit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={22} height={22}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    cta: "Book Now",
    ctaHref: "/contact",
  },
  {
    num: "02",
    title: "Comprehensive Hearing Test",
    desc: "60-minute audiometric evaluation in a certified soundproofed booth. You receive a full audiogram and clinical report the same day — at no charge.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={22} height={22}>
        <path d="M12 2a7 7 0 0 1 7 7c0 5-4.5 8.5-7 11-2.5-2.5-7-6-7-11a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Get Fitted & Go Home Hearing",
    desc: "Choose from India's top brands, calibrated precisely to your audiogram. Walk out the same day with a GST invoice and manufacturer warranty.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={22} height={22}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="section-label justify-center">How It Works</div>
          <h2 className="section-h2">From concern to clarity<br />in three simple steps</h2>
          <p className="section-sub mt-3 max-w-md mx-auto">
            Most patients leave our clinic hearing better on the very same day they walk in.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(26,58,42,0.07)" }}>
          {steps.map(({ num, title, desc, icon, cta, ctaHref }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative p-8 md:p-10 flex flex-col"
              style={{ background: "var(--white)" }}
            >
              {/* Step number — large background */}
              <div
                className="absolute top-5 right-6 font-light leading-none select-none pointer-events-none"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "72px", color: "rgba(26,58,42,0.05)" }}
              >
                {num}
              </div>

              {/* Icon circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6 flex-shrink-0"
                style={{ background: "var(--forest)", color: "white" }}
              >
                {icon}
              </div>

              {/* Step label */}
              <div className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "var(--gold)" }}>
                Step {num}
              </div>

              {/* Title */}
              <h3
                className="font-normal leading-snug mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", color: "var(--forest)" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm font-light leading-relaxed flex-1" style={{ color: "var(--text-mid)" }}>
                {desc}
              </p>

              {cta && ctaHref && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-1.5 mt-6 text-xs font-medium tracking-widest uppercase no-underline"
                  style={{ color: "var(--forest)", textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: "2px", alignSelf: "flex-start" }}
                >
                  {cta} →
                </Link>
              )}

              {/* Bottom gold accent on last step */}
              {i === steps.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "var(--gold)" }} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs font-light mt-6"
          style={{ color: "var(--text-lt)" }}
        >
          Same-day audiogram included · GST billing available · Home visits for eligible patients
        </motion.p>

      </div>
    </section>
  )
}
