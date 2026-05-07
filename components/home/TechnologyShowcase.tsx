"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BrainCircuit, Waves, Bluetooth } from "lucide-react"

const features = [
  {
    Icon: BrainCircuit,
    title: "BrainHearing™ Technology",
    description: "Supports your brain's natural sound processing for clearer understanding in any environment.",
    specs: [
      { label: "2.4GHz Processor", icon: "⚡" },
      { label: "12M Sound Scenes", icon: "🎯" },
      { label: "120 dB Range", icon: "🔊" },
      { label: "Neural Network", icon: "🧠" },
    ],
  },
  {
    Icon: Waves,
    title: "OpenSound Navigator™",
    description: "Real-time environmental adaptation with 360° sound awareness and near-zero response latency.",
    specs: [
      { label: "360° Sound", icon: "🌐" },
      { label: "0.5ms Response", icon: "⏱️" },
      { label: "Auto Adjustment", icon: "🎚️" },
      { label: "Noise Reduction", icon: "🔇" },
    ],
  },
  {
    Icon: Bluetooth,
    title: "Connectivity Suite",
    description: "Seamless integration with modern devices — stream audio directly from iOS and Android.",
    specs: [
      { label: "Bluetooth 5.2", icon: "📶" },
      { label: "Wireless Charging", icon: "🔋" },
      { label: "iOS & Android App", icon: "📱" },
      { label: "Direct Streaming", icon: "🎧" },
    ],
  },
]

const stats = [
  { val: "30h",    label: "Battery Life",      sub: "With wireless charging support" },
  { val: "–40 dB", label: "Noise Reduction",   sub: "Advanced environmental filtering" },
  { val: "0.5ms",  label: "Processing Speed",  sub: "Ultra-low latency performance" },
]

export default function TechnologyShowcase() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      className="py-14 md:py-24 px-5 md:px-12 overflow-hidden"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-end"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Clinical Technology
            </div>
            <h2
              className="font-light leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.15, color: "var(--forest)" }}
            >
              Advanced hearing<br />technology, explained
            </h2>
          </div>
          <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
            Clinical-grade performance meets intuitive design in the next generation of hearing solutions — fitted precisely to your audiogram by our specialists.
          </p>
        </motion.div>

        {/* ── Feature Cards — 1 col mobile, 3 col desktop ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mb-px" style={{ background: "rgba(26,58,42,0.06)" }}>
          {features.map(({ Icon, title, description, specs }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -3, boxShadow: "0 16px 48px rgba(26,58,42,0.09)" }}
              className="relative overflow-hidden p-7 md:p-9 transition-shadow duration-300"
              style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.08)" }}
            >
              {/* Hover top accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25 }}
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: "var(--gold)", transformOrigin: "left" }}
              />

              {/* Icon ring */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-5"
                style={{ border: "1px solid rgba(26,58,42,0.15)" }}
              >
                <Icon size={18} color="var(--forest)" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3
                className="font-normal leading-snug mb-2.5"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "var(--forest)" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "var(--text-mid)" }}>
                {description}
              </p>

              {/* Specs */}
              <div className="pt-4" style={{ borderTop: "0.5px solid rgba(26,58,42,0.1)" }}>
                <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-lt)" }}>
                  Key Specifications
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {specs.map(({ label, icon }) => (
                    <div key={label} className="flex items-center gap-2 text-sm font-light" style={{ color: "var(--text-mid)" }}>
                      <span className="text-sm">{icon}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Stats bar — 1 col mobile, 3 col desktop ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ background: "var(--forest)" }}
        >
          {stats.map(({ val, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
              className="px-7 py-8 md:px-10 md:py-9"
              style={{ borderBottom: i < stats.length - 1 ? "0.5px solid rgba(255,255,255,0.08)" : "none" }}
            >
              <div
                className="font-light leading-none mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,52px)", color: "var(--gold)" }}
              >
                {val}
              </div>
              <div className="text-sm font-medium text-white mb-1">{label}</div>
              <div className="text-xs font-light" style={{ color: "rgba(255,255,255,0.42)" }}>{sub}</div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-7 md:p-10"
          style={{ background: "var(--cream-dk)", border: "0.5px solid rgba(26,58,42,0.1)" }}
        >
          <div>
            <div
              className="font-normal mb-1.5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px,3vw,22px)", color: "var(--forest)" }}
            >
              Want to experience this technology first-hand?
            </div>
            <p className="text-sm font-light" style={{ color: "var(--text-mid)" }}>
              Book a free demo session at our Jayanagar clinic — no obligation.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="/contact"
              className="text-xs font-medium tracking-widest uppercase px-6 py-3 no-underline whitespace-nowrap"
              style={{ background: "var(--gold)", color: "var(--forest)", textDecoration: "none" }}
            >
              Book Free Demo
            </a>
            <a
              href="/hearing-aids"
              className="hidden sm:inline text-xs tracking-widest uppercase font-normal whitespace-nowrap no-underline pb-0.5"
              style={{ color: "var(--forest)", borderBottom: "1px solid var(--gold)", textDecoration: "none" }}
            >
              View all aids →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}