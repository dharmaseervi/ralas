"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section style={{ background: "var(--cream-dk)", padding: "96px 48px" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "48px" }}
      >
        <div style={{
          fontSize: "10.5px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}>
          <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
          In Action
          <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 300,
          lineHeight: 1.15,
          color: "var(--forest)",
          margin: "0 auto",
          maxWidth: "520px",
        }}>
          See how we work
        </h2>
        <p style={{ fontSize: "15px", fontWeight: 300, color: "var(--text-mid)", marginTop: "14px", maxWidth: "440px", margin: "14px auto 0", lineHeight: 1.7 }}>
          A glimpse inside our clinic — from diagnostic testing to device fitting and follow-up care.
        </p>
      </motion.div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          position: "relative",
          aspectRatio: "16/9",
          background: "var(--forest)",
          overflow: "hidden",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <video
          ref={videoRef}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          loop
          muted
          playsInline
          poster="/images/video-poster.jpg"
        >
          <source src="/videos/clinic-overview.mp4" type="video/mp4" />
        </video>

        {/* Overlay — hidden when playing */}
        {!playing && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handlePlay}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(10,25,15,0.45)",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              style={{
                width: "72px",
                height: "72px",
                border: "1.5px solid rgba(255,255,255,0.65)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "18px",
                transition: "border-color 0.2s",
              }}
            >
              <svg viewBox="0 0 24 24" fill="white" width={22} height={22} style={{ marginLeft: "4px" }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </motion.div>
            <div style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
              Ralas Hearing Clinic — Jayanagar, Bengaluru
            </div>
          </motion.div>
        )}

        {/* Gold accent */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "var(--gold)" }} />
      </motion.div>

      {/* Below video — CTA row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", marginTop: "48px" }}
      >
        <a
          href="/contact"
          style={{
            background: "var(--gold)",
            color: "var(--forest)",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "13px 30px",
            textDecoration: "none",
          }}
        >
          Book a Visit
        </a>
        <a
          href="/about"
          style={{
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--forest)",
            textDecoration: "none",
            borderBottom: "1px solid var(--gold)",
            paddingBottom: "2px",
            fontWeight: 400,
          }}
        >
          About the clinic →
        </a>
      </motion.div>
    </section>
  )
}