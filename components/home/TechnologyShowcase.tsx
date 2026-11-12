"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BrainCircuit, Waves, Bluetooth, Zap, Target, Volume2, Brain, Globe, Timer, SlidersHorizontal, VolumeX, Wifi, Battery, Smartphone, Headphones } from "lucide-react"

type LucideIcon = React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>

const features: { Icon: LucideIcon; title: string; description: string; specs: { label: string; Icon: LucideIcon }[] }[] = [
  {
    Icon: BrainCircuit,
    title: "Noise Reduction",
    description: "Modern hearing aids separate speech from background noise automatically, making conversations easier in busy environments.",
    specs: [
      { label: "Background filtering", Icon: VolumeX },
      { label: "Speech focus", Icon: Volume2 },
      { label: "Auto scene detection", Icon: Target },
      { label: "AI processing", Icon: Brain },
    ],
  },
  {
    Icon: Waves,
    title: "Environmental Adaptation",
    description: "Devices continuously scan your surroundings and switch programmes automatically for restaurants, streets, offices and quiet spaces.",
    specs: [
      { label: "360° awareness", Icon: Globe },
      { label: "Auto programme switch", Icon: SlidersHorizontal },
      { label: "Wind noise reduction", Icon: Zap },
      { label: "Comfort in noise", Icon: Timer },
    ],
  },
  {
    Icon: Bluetooth,
    title: "Wireless Connectivity",
    description: "Stream calls, music and TV audio directly to your hearing aids from a smartphone or TV streamer, without any additional accessory.",
    specs: [
      { label: "Bluetooth streaming", Icon: Wifi },
      { label: "Rechargeable options", Icon: Battery },
      { label: "Companion app control", Icon: Smartphone },
      { label: "TV streamer compatible", Icon: Headphones },
    ],
  },
]

const stats = [
  { val: "Rechargeable", label: "Battery Options",    sub: "Full day of wear on a single charge" },
  { val: "All ages",     label: "Patients Treated",   sub: "Infants to elderly, every hearing profile" },
  { val: "Same day",     label: "Audiogram Report",   sub: "Results and fitting advice in one visit" },
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
                  {specs.map(({ label, Icon: SpecIcon }) => (
                    <div key={label} className="flex items-center gap-2 text-sm font-light" style={{ color: "var(--text-mid)" }}>
                      <SpecIcon size={12} color="var(--gold)" strokeWidth={1.5} />
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