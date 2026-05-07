"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Waves, Zap, Bluetooth, Ear, Volume2 } from "lucide-react"
import Link from "next/link"

const features = [
  {
    Icon: BrainCircuit,
    tag: "Neural Processing",
    title: "BrainHearing™ Technology",
    stat: "50%",
    statLabel: "better speech understanding",
    description: "Supports the brain's natural sound processing with neural network technology trained on 12 million real-world sound scenes.",
    specs: ["120 dB dynamic range", "2.4GHz processor", "Neural network AI", "12M sound scenes"],
  },
  {
    Icon: Waves,
    tag: "360° Awareness",
    title: "OpenSound Navigator™",
    stat: "0.5ms",
    statLabel: "response time",
    description: "Real-time environmental adaptation scans the full soundscape 100 times per second, balancing every sound for natural listening.",
    specs: ["Full environment scan", "Smart noise reduction", "Auto-balance", "100Hz refresh"],
  },
  {
    Icon: Zap,
    tag: "Processing Platform",
    title: "Polite™ Platform",
    stat: "30%",
    statLabel: "less listening effort",
    description: "Ultra-fast processing reduces cognitive load so you can focus on conversations, not straining to hear them.",
    specs: ["30h battery life", "Wireless charging", "Ultra-low latency", "Adaptive programs"],
  },
  {
    Icon: Bluetooth,
    tag: "Connectivity",
    title: "Connectivity Suite",
    stat: "5.2",
    statLabel: "Bluetooth generation",
    description: "Stream audio directly from iPhone and Android. Control everything from the companion app — volume, programs, and EQ.",
    specs: ["iOS & Android app", "Direct streaming", "Remote fine-tune", "Multi-device pairing"],
  },
  {
    Icon: Ear,
    tag: "Fit & Comfort",
    title: "Precision Fitting",
    stat: "3yr",
    statLabel: "warranty included",
    description: "Every device is calibrated to your exact audiogram by our certified audiologists, with follow-up fine-tuning visits included.",
    specs: ["Audiogram-matched", "Clinical follow-up", "Custom ear mould", "Trial guarantee"],
  },
  {
    Icon: Volume2,
    tag: "Sound Quality",
    title: "OpenSound Booster™",
    stat: "360°",
    statLabel: "sound processing",
    description: "Extra processing power for demanding situations — concerts, restaurants, large gatherings — activated at the tap of a button.",
    specs: ["Manual boost mode", "Surround clarity", "Crowd filter", "Wind suppression"],
  },
]

export default function Features() {
  return (
    <section
      className="py-14 md:py-24 px-5 md:px-12 relative overflow-hidden"
      style={{ background: "var(--forest)" }}
    >
      {/* Bg texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)" }}
      />

      <div className="max-w-[1200px] mx-auto relative">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Oticon More™ Platform
            </div>
            <h2
              className="font-light text-white leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.15 }}
            >
              Revolutionary<br />hearing technology
            </h2>
          </div>
          <div>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.58)" }}>
              Clinical-grade performance powered by Oticon's patented More™ platform — FDA-cleared and backed by 3 years of warranty on every device.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
              <span className="text-xs tracking-wider" style={{ color: "rgba(255,255,255,0.32)" }}>
                FDA-Cleared Medical Device · 3-year warranty included
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Feature grid — 1 col mobile, 2 col tablet, 3 col desktop ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-px"
          style={{ gap: "1px", background: "rgba(255,255,255,0.06)" }}
        >
          {features.map(({ Icon, tag, title, stat, statLabel, description, specs }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-7 md:p-8 relative overflow-hidden transition-colors duration-300 hover:bg-white/5"
              style={{ background: "var(--forest)" }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" } as any}
            >
              {/* Gold left border on hover */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.22 }}
                className="absolute top-0 left-0 bottom-0 w-0.5"
                style={{ background: "var(--gold)", transformOrigin: "top" }}
              />

              {/* Icon + stat row */}
              <div className="flex justify-between items-start mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <Icon size={17} color="rgba(255,255,255,0.75)" strokeWidth={1.5} />
                </div>
                <div className="text-right">
                  <div
                    className="font-light leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", color: "var(--gold)" }}
                  >
                    {stat}
                  </div>
                  <div className="text-xs tracking-wider mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {statLabel}
                  </div>
                </div>
              </div>

              {/* Tag */}
              <div className="text-xs tracking-widest uppercase mb-2 opacity-80" style={{ color: "var(--gold)" }}>
                {tag}
              </div>

              {/* Title */}
              <h3
                className="font-normal text-white mb-2.5 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "19px" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm font-light leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                {description}
              </p>

              {/* Spec pills */}
              <div className="flex flex-wrap gap-1.5">
                {specs.map((spec) => (
                  <span
                    key={spec}
                    className="text-xs font-light px-2.5 py-1 tracking-wider"
                    style={{ color: "rgba(255,255,255,0.4)", border: "0.5px solid rgba(255,255,255,0.1)" }}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 px-6 md:px-12 py-8 md:py-8"
          style={{ background: "var(--gold)" }}
        >
          <div>
            <div
              className="font-normal mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px,3vw,22px)", color: "var(--forest)" }}
            >
              Experience these features for yourself
            </div>
            <p className="text-sm font-light" style={{ color: "rgba(26,58,42,0.65)" }}>
              Free demo · No obligation · Jayanagar clinic, Bengaluru
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="text-xs font-medium tracking-widest uppercase px-6 py-3 no-underline whitespace-nowrap text-white"
              style={{ background: "var(--forest)", textDecoration: "none" }}
            >
              Schedule Free Demo
            </Link>
            <Link
              href="/hearing-aids"
              className="hidden sm:inline text-xs tracking-widest uppercase font-normal whitespace-nowrap no-underline pb-0.5"
              style={{ color: "var(--forest)", borderBottom: "1px solid rgba(26,58,42,0.4)", textDecoration: "none" }}
            >
              View all aids →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}