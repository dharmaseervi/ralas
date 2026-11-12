"use client"

import { motion } from "framer-motion"

const brands = ["Oticon", "Signia", "Widex", "ReSound"]

const stats = [
  {
    val: "1,200+",
    label: "Patients Served",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={16} height={16}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    val: "2+",
    label: "Years of Care",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={16} height={16}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    val: "Free",
    label: "First Consultation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={16} height={16}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    val: "RCI",
    label: "Certified Audiologist",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={16} height={16}>
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /><polyline points="9 11 11 13 15 9" />
      </svg>
    ),
  },
]

export default function TrustBar() {
  return (
    <section style={{ background: "var(--white)", borderBottom: "0.5px solid rgba(26,58,42,0.08)" }}>
      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map(({ val, label, icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="flex items-center gap-3 px-6 md:px-10 py-5 md:py-7"
            style={{
              borderRight: i % 2 === 0 ? "0.5px solid rgba(26,58,42,0.07)" : "none",
              borderBottom: i < 2 ? "0.5px solid rgba(26,58,42,0.07)" : "none",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}
            >
              {icon}
            </div>
            <div>
              <div
                className="font-light leading-none mb-0.5"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px,2.5vw,26px)", color: "var(--forest)" }}
              >
                {val}
              </div>
              <div className="text-xs tracking-wider uppercase" style={{ color: "var(--text-lt)" }}>
                {label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Brands row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 px-6 py-4"
        style={{ borderTop: "0.5px solid rgba(26,58,42,0.07)" }}
      >
        <span className="text-xs tracking-[0.18em] uppercase flex-shrink-0 sm:mr-6" style={{ color: "var(--text-lt)" }}>
          Authorised Partners
        </span>
        <div className="hidden sm:block w-px h-4 mr-6" style={{ background: "rgba(26,58,42,0.12)" }} />
        <div className="flex items-center flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-2">
          {brands.map((brand) => (
            <span
              key={brand}
              className="select-none"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", fontWeight: 500, color: "var(--forest)", opacity: 0.55, letterSpacing: "0.03em" }}
            >
              {brand}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
