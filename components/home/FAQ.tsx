"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  subtitle?: string
  questions: FAQItem[]
}

export default function FAQ({ title = "Frequently Asked Questions", subtitle, questions }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ background: "var(--cream)", padding: "96px 48px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
            Support
            <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "var(--forest)", marginBottom: "14px" }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontSize: "15px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.7 }}>{subtitle}</p>
          )}
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {questions.map((item, i) => (
            <div
              key={i}
              style={{
                background: openIndex === i ? "var(--white)" : "var(--white)",
                border: "0.5px solid var(--border)",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "16px",
                }}
              >
                <span style={{ fontSize: "15px", fontWeight: 400, color: "var(--forest)", lineHeight: 1.4 }}>
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ flexShrink: 0 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" width={18} height={18}>
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "0 24px 22px", borderTop: "0.5px solid var(--border)" }}>
                      <p style={{ fontSize: "14px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.75, paddingTop: "16px" }}>
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ fontSize: "14px", fontWeight: 300, color: "var(--text-mid)", marginBottom: "20px" }}>
            Still have questions? We're happy to help.
          </p>
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
              padding: "13px 30px",
              textDecoration: "none",
            }}
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  )
}
