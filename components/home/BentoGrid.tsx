"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const cards = [
  {
    span: "lg:col-span-8",
    variant: "light",
    num: "01",
    tag: "BrainHearing™ Platform",
    title: "Hearing aids that think like your brain",
    desc: "Our partnered devices leverage neural-network processing with 12M trained sound scenes, delivering 50% better speech clarity in noisy environments.",
    stats: [
      { val: "50%", lbl: "better clarity" },
      { val: "0.5ms", lbl: "response time" },
      { val: "30h", lbl: "battery life" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    span: "lg:col-span-4",
    variant: "dark",
    num: "02",
    tag: "Free Assessment",
    title: "Comprehensive hearing test on first visit",
    desc: "Walk in for a no-obligation audiometric evaluation. Get your personalised audiogram the same day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    span: "lg:col-span-4",
    variant: "light",
    num: "03",
    tag: "In-Home Service",
    title: "We come to you",
    desc: "For elderly patients or those with mobility constraints, our audiologists offer home visit programmes across Bengaluru.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    span: "lg:col-span-4",
    variant: "gold",
    num: "04",
    tag: "Satisfaction Guarantee",
    title: "30-day trial, no questions asked",
    desc: "Not happy? Return within 30 days for a full refund. We believe in the product — and in you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    span: "lg:col-span-4",
    variant: "light",
    num: "05",
    tag: "Speech Therapy",
    title: "Dedicated speech-language pathologist on-site",
    desc: "From childhood articulation delays to post-stroke rehabilitation — personalised, evidence-based therapy.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    span: "lg:col-span-4",
    variant: "stat",
    num: "06",
    statVal: "1200+",
    statLbl: "Patients served",
  },
]

const variantStyles: Record<string, React.CSSProperties> = {
  light: { background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.1)" },
  dark: { background: "var(--forest)", border: "none" },
  gold: { background: "var(--gold)", border: "none" },
  stat: { background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center" },
}

export default function BentoGrid() {
  return (
    <section style={{ background: "var(--cream)", padding: "96px 48px" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "56px", maxWidth: "480px" }}
      >
        <div className="section-label">Why Ralas</div>
        <h2 className="section-h2">Audiological care<br />redefined</h2>
        <p className="section-sub" style={{ marginTop: "12px" }}>
          Combining clinical precision with a deeply human approach to hearing health.
        </p>
      </motion.div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "16px" }}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            className={card.span}
            style={{
              ...variantStyles[card.variant],
              padding: "36px 32px",
              position: "relative",
              overflow: "hidden",
              gridColumn: `span ${card.span.includes("8") ? 8 : 4}`,
              transition: "box-shadow 0.3s, transform 0.3s",
              cursor: "default",
              minHeight: card.variant === "stat" ? "180px" : "auto",
            }}
            whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(26,58,42,0.1)" }}
          >
            {/* Background number */}
            {card.num && (
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "72px",
                fontWeight: 300,
                lineHeight: 1,
                position: "absolute",
                top: "16px",
                right: "24px",
                color: card.variant === "dark"
                  ? "rgba(255,255,255,0.07)"
                  : card.variant === "gold"
                  ? "rgba(26,58,42,0.12)"
                  : "rgba(26,58,42,0.06)",
                userSelect: "none",
              }}>
                {card.num}
              </div>
            )}

            {card.variant === "stat" ? (
              <>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "64px",
                  fontWeight: 300,
                  color: "var(--forest)",
                  lineHeight: 1,
                }}>
                  {card.statVal}
                </div>
                <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-lt)", marginTop: "8px" }}>
                  {card.statLbl}
                </div>
              </>
            ) : (
              <>
                {/* Icon */}
                <div style={{
                  width: "40px",
                  height: "40px",
                  border: `1px solid ${card.variant === "dark" ? "rgba(255,255,255,0.2)" : "rgba(26,58,42,0.15)"}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}>
                  {card.icon}
                </div>

                {/* Tag */}
                <div style={{
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: card.variant === "dark" ? "var(--gold-lt)" : card.variant === "gold" ? "rgba(26,58,42,0.6)" : "var(--gold)",
                  marginBottom: "10px",
                }}>
                  {card.tag}
                </div>

                {/* Title */}
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  marginBottom: "10px",
                  color: card.variant === "dark" ? "white" : "var(--forest)",
                  lineHeight: 1.25,
                }}>
                  {card.title}
                </div>

                {/* Desc */}
                <p style={{
                  fontSize: "13.5px",
                  fontWeight: 300,
                  color: card.variant === "dark" ? "rgba(255,255,255,0.65)" : card.variant === "gold" ? "rgba(26,58,42,0.75)" : "var(--text-mid)",
                  lineHeight: 1.65,
                }}>
                  {card.desc}
                </p>

                {/* Stats row (card 0 only) */}
                {card.stats && (
                  <div style={{ display: "flex", gap: "32px", marginTop: "24px" }}>
                    {card.stats.map(({ val, lbl }) => (
                      <div key={lbl}>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "44px", fontWeight: 300, color: "var(--forest)", lineHeight: 1 }}>{val}</div>
                        <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-lt)", marginTop: "4px" }}>{lbl}</div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
