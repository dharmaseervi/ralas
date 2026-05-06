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
    <section style={{ background: "var(--forest)", padding: "96px 48px", position: "relative", overflow: "hidden" }}>

      {/* Subtle bg texture */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: "64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "end" }}
        >
          <div>
            <div style={{
              fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--gold)", marginBottom: "14px",
              display: "flex", alignItems: "center", gap: "10px",
            }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Oticon More™ Platform
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300, lineHeight: 1.15, color: "white",
            }}>
              Revolutionary<br />hearing technology
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.58)", lineHeight: 1.75, marginBottom: "20px" }}>
              Clinical-grade performance powered by Oticon's patented More™ platform — FDA-cleared and backed by 3 years of warranty on every device.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
              <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.32)", letterSpacing: "0.05em" }}>
                FDA-Cleared Medical Device · 3-year warranty included
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Feature grid — 3 col, dark cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "1px" }}>
          {features.map(({ Icon, tag, title, stat, statLabel, description, specs }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                background: "var(--forest)",
                padding: "36px 32px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: "background 0.25s",
              }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" } as any}
            >
              {/* Gold left border on hover */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.22 }}
                style={{
                  position: "absolute", top: 0, left: 0, bottom: 0,
                  width: "2px", background: "var(--gold)", transformOrigin: "top",
                }}
              />

              {/* Icon + stat row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                <div style={{
                  width: "42px", height: "42px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={17} color="rgba(255,255,255,0.75)" strokeWidth={1.5} />
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "30px", fontWeight: 300,
                    color: "var(--gold)", lineHeight: 1,
                  }}>
                    {stat}
                  </div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", marginTop: "2px" }}>
                    {statLabel}
                  </div>
                </div>
              </div>

              {/* Tag */}
              <div style={{
                fontSize: "10px", letterSpacing: "0.16em",
                textTransform: "uppercase", color: "var(--gold)",
                marginBottom: "7px", opacity: 0.8,
              }}>
                {tag}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "19px", fontWeight: 400,
                color: "white", marginBottom: "10px", lineHeight: 1.3,
              }}>
                {title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "13px", fontWeight: 300,
                color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "22px",
              }}>
                {description}
              </p>

              {/* Spec pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {specs.map((spec) => (
                  <span key={spec} style={{
                    fontSize: "10.5px", fontWeight: 300,
                    color: "rgba(255,255,255,0.4)",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    padding: "4px 10px",
                    letterSpacing: "0.04em",
                  }}>
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA — cream strip on dark bg ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            background: "var(--gold)",
            padding: "32px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px", fontWeight: 400,
              color: "var(--forest)", marginBottom: "4px",
            }}>
              Experience these features for yourself
            </div>
            <p style={{ fontSize: "13px", fontWeight: 300, color: "rgba(26,58,42,0.65)" }}>
              Free demo · No obligation · Jayanagar clinic, Bengaluru
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0, marginLeft: "40px" }}>
            <Link
              href="/contact"
              style={{
                background: "var(--forest)", color: "white",
                fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em",
                textTransform: "uppercase", padding: "13px 28px",
                textDecoration: "none", whiteSpace: "nowrap",
              }}
            >
              Schedule Free Demo
            </Link>
            <Link
              href="/hearing-aids"
              style={{
                fontSize: "12px", letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--forest)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(26,58,42,0.4)",
                paddingBottom: "2px", fontWeight: 400, whiteSpace: "nowrap",
              }}
            >
              View all aids →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
