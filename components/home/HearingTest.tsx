"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"

const frequencies = [
  { label: "250 Hz",  pct: 82, status: "Normal",    statusColor: "#6BAF7C" },
  { label: "500 Hz",  pct: 75, status: "Normal",    statusColor: "#6BAF7C" },
  { label: "1 kHz",   pct: 68, status: "Normal",    statusColor: "#6BAF7C" },
  { label: "2 kHz",   pct: 52, status: "Mild",      statusColor: "var(--gold)" },
  { label: "4 kHz",   pct: 36, status: "Moderate",  statusColor: "#E08040" },
  { label: "8 kHz",   pct: 18, status: "Sig. Loss",  statusColor: "#C44" },
]

export default function HearingTestSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (inView) setTimeout(() => setAnimated(true), 200)
  }, [inView])

  return (
    <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--forest)" }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* ── Left — copy ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
            Quick Screening
          </div>
          <h2
            className="font-light text-white leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.15 }}
          >
            Take a preliminary<br />hearing check
          </h2>
          <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
            Use headphones in a quiet space. This is a screener only — not a substitute for a clinical evaluation by a qualified audiologist.
          </p>
          <p className="text-xs md:text-sm font-light leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.35)" }}>
            Our audiologists recommend a full diagnostic test every 2 years. Book yours at the clinic for a complete, calibrated audiogram.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px mb-8">
            {[
              { val: "30 min", lbl: "Test duration" },
              { val: "Free",   lbl: "First visit" },
              { val: "Same day", lbl: "Audiogram report" },
              { val: "All ages", lbl: "We test everyone" },
            ].map(({ val, lbl }) => (
              <div
                key={lbl}
                className="p-4 md:p-5"
                style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="font-light text-white leading-none mb-1.5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px,3vw,26px)" }}
                >
                  {val}
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {lbl}
                </div>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-block text-xs font-medium tracking-widest uppercase px-7 py-3.5 no-underline"
            style={{ background: "var(--gold)", color: "var(--forest)", textDecoration: "none" }}
          >
            Schedule Full Test →
          </a>
        </motion.div>

        {/* ── Right — audiogram screener card ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="p-6 md:p-10"
          style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.12)" }}
        >
          <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>
            Frequency Response Screener
          </div>
          <p className="text-xs font-light leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
            Demo audiogram illustrating typical age-related high-frequency loss. Your actual thresholds will differ.
          </p>

          {/* Frequency bars */}
          <div className="flex flex-col gap-4">
            {frequencies.map(({ label, pct, status, statusColor }, i) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="text-xs text-right flex-shrink-0 w-14"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {label}
                </div>
                <div
                  className="flex-1 h-1 relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={animated ? { width: `${pct}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: i * 0.12, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full"
                    style={{ background: "var(--gold)" }}
                  />
                </div>
                <div
                  className="text-xs flex-shrink-0 w-14 font-normal"
                  style={{ color: statusColor }}
                >
                  {status}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-7 pt-5" style={{ borderTop: "0.5px solid rgba(255,255,255,0.1)" }}>
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
              Hearing thresholds
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {[
                { label: "Normal",      color: "#6BAF7C" },
                { label: "Mild loss",   color: "var(--gold)" },
                { label: "Moderate",    color: "#E08040" },
                { label: "Significant", color: "#C44" },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div
            className="mt-5 p-3.5"
            style={{ background: "rgba(201,168,76,0.08)", border: "0.5px solid rgba(201,168,76,0.2)" }}
          >
            <p className="text-xs font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              This screener does not replace a professional audiological evaluation. Visit our clinic for a calibrated, certified audiogram.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}