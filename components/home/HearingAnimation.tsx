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
  { val: "30h", label: "Battery Life", sub: "With wireless charging support" },
  { val: "–40 dB", label: "Noise Reduction", sub: "Advanced environmental filtering" },
  { val: "0.5ms", label: "Processing Speed", sub: "Ultra-low latency performance" },
]

export default function TechnologyShowcase() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      style={{ background: "var(--white)", padding: "96px 48px", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{
            marginBottom: "72px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "end",
          }}
        >
          <div>
            <div style={{
              fontSize: "10.5px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "14px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Clinical Technology
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--forest)",
            }}>
              Advanced hearing<br />technology, explained
            </h2>
          </div>
          <p style={{
            fontSize: "15px",
            fontWeight: 300,
            color: "var(--text-mid)",
            lineHeight: 1.75,
            maxWidth: "420px",
          }}>
            Clinical-grade performance meets intuitive design in the next generation of hearing solutions — fitted precisely to your audiogram by our specialists.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", marginBottom: "2px" }}>
          {features.map(({ Icon, title, description, specs }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -3, boxShadow: "0 16px 48px rgba(26,58,42,0.09)" }}
              style={{
                background: "var(--cream)",
                padding: "36px 32px",
                position: "relative",
                overflow: "hidden",
                border: "0.5px solid rgba(26,58,42,0.08)",
                transition: "box-shadow 0.3s",
              }}
            >
              {/* Hover top accent bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25 }}
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2px",
                  background: "var(--gold)",
                  transformOrigin: "left",
                }}
              />

              {/* Icon ring */}
              <div style={{
                width: "44px",
                height: "44px",
                border: "1px solid rgba(26,58,42,0.15)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}>
                <Icon size={18} color="var(--forest)" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "var(--forest)",
                marginBottom: "10px",
                lineHeight: 1.3,
              }}>
                {title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "13.5px",
                fontWeight: 300,
                color: "var(--text-mid)",
                lineHeight: 1.65,
                marginBottom: "24px",
              }}>
                {description}
              </p>

              {/* Specs */}
              <div style={{ paddingTop: "20px", borderTop: "0.5px solid rgba(26,58,42,0.1)" }}>
                <div style={{
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-lt)",
                  marginBottom: "12px",
                }}>
                  Key Specifications
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {specs.map(({ label, icon }) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "12.5px",
                        fontWeight: 300,
                        color: "var(--text-mid)",
                      }}
                    >
                      <span style={{ fontSize: "13px" }}>{icon}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          background: "var(--forest)",
        }}>
          {stats.map(({ val, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
              style={{
                padding: "36px 40px",
                borderRight: i < stats.length - 1 ? "0.5px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "52px",
                fontWeight: 300,
                color: "var(--gold)",
                lineHeight: 1,
                marginBottom: "8px",
              }}>
                {val}
              </div>
              <div style={{ fontSize: "13px", fontWeight: 500, color: "white", marginBottom: "4px" }}>
                {label}
              </div>
              <div style={{ fontSize: "12px", fontWeight: 300, color: "rgba(255,255,255,0.42)" }}>
                {sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "32px 40px",
            background: "var(--cream-dk)",
            border: "0.5px solid rgba(26,58,42,0.1)",
          }}
        >
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              fontWeight: 400,
              color: "var(--forest)",
              marginBottom: "6px",
            }}>
              Want to experience this technology first-hand?
            </div>
            <p style={{ fontSize: "13.5px", fontWeight: 300, color: "var(--text-mid)" }}>
              Book a free demo session at our Jayanagar clinic — no obligation.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0, marginLeft: "32px" }}>
            <a
              href="/contact"
              style={{
                background: "var(--gold)",
                color: "var(--forest)",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "13px 28px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Book Free Demo
            </a>
            <a
              href="/hearing-aids"
              style={{
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--forest)",
                textDecoration: "none",
                borderBottom: "1px solid var(--gold)",
                paddingBottom: "2px",
                fontWeight: 400,
                whiteSpace: "nowrap",
              }}
            >
              View all aids →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}