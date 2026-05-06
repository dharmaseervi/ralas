"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"

const frequencies = [
  { label: "250 Hz",  pct: 82, status: "Normal",   statusColor: "#6BAF7C" },
  { label: "500 Hz",  pct: 75, status: "Normal",   statusColor: "#6BAF7C" },
  { label: "1 kHz",   pct: 68, status: "Normal",   statusColor: "#6BAF7C" },
  { label: "2 kHz",   pct: 52, status: "Mild",     statusColor: "var(--gold)" },
  { label: "4 kHz",   pct: 36, status: "Moderate", statusColor: "#E08040" },
  { label: "8 kHz",   pct: 18, status: "Sig. Loss", statusColor: "#C44" },
]

export default function HearingTestSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (inView) setTimeout(() => setAnimated(true), 200)
  }, [inView])

  return (
    <section style={{ background: "var(--forest)", padding: "96px 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", maxWidth: "1200px", margin: "0 auto" }}>

        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
            Quick Screening
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.15, color: "white", marginBottom: "20px" }}>
            Take a preliminary<br />hearing check
          </h2>
          <p style={{ fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "24px" }}>
            Use headphones in a quiet space. This is a screener only — not a substitute for a clinical evaluation by a qualified audiologist.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.7, marginBottom: "40px" }}>
            Our audiologists recommend a full diagnostic test every 2 years. Book yours at the clinic for a complete, calibrated audiogram.
          </p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", marginBottom: "40px" }}>
            {[
              { val: "30 min", lbl: "Test duration" },
              { val: "Free", lbl: "First visit" },
              { val: "Same day", lbl: "Audiogram report" },
              { val: "All ages", lbl: "We test everyone" },
            ].map(({ val, lbl }) => (
              <div key={lbl} style={{ background: "rgba(255,255,255,0.04)", padding: "18px 20px", border: "0.5px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 300, color: "white", lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "6px" }}>{lbl}</div>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              background: "var(--gold)",
              color: "var(--forest)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 32px",
              textDecoration: "none",
            }}
          >
            Schedule Full Test →
          </a>
        </motion.div>

        {/* Right — audiogram screener card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "0.5px solid rgba(255,255,255,0.12)",
            padding: "40px",
          }}
        >
          <div style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>
            Frequency Response Screener
          </div>
          <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.4)", marginBottom: "32px", lineHeight: 1.55 }}>
            Demo audiogram illustrating typical age-related high-frequency loss. Your actual thresholds will differ.
          </p>

          {/* Frequency bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {frequencies.map(({ label, pct, status, statusColor }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", width: "58px", textAlign: "right", flexShrink: 0 }}>{label}</div>
                <div style={{ flex: 1, height: "4px", background: "rgba(255,255,255,0.1)", position: "relative", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={animated ? { width: `${pct}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: i * 0.12, ease: "easeOut" }}
                    style={{ height: "100%", background: "var(--gold)", position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                <div style={{ fontSize: "11.5px", color: statusColor, width: "58px", flexShrink: 0, fontWeight: 400 }}>{status}</div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "0.5px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Hearing thresholds</div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {[
                { label: "Normal", color: "#6BAF7C" },
                { label: "Mild loss", color: "var(--gold)" },
                { label: "Moderate", color: "#E08040" },
                { label: "Significant", color: "#C44" },
              ].map(({ label, color }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color, flexShrink: 0 }} />
                  <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.4)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div style={{ marginTop: "24px", padding: "14px 16px", background: "rgba(201,168,76,0.08)", border: "0.5px solid rgba(201,168,76,0.2)" }}>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
              This screener does not replace a professional audiological evaluation. Visit our clinic for a calibrated, certified audiogram.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
