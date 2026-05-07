"use client"

import { useState } from "react"

import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/navbar"



const articles = [
  { tag: "Guide", title: "How to read your audiogram", desc: "Your audiogram tells the full story of your hearing. Here's what the axes, symbols, and thresholds mean — and what your results indicate.", readTime: "5 min" },
  { tag: "Tips", title: "10 ways to protect your hearing", desc: "Most hearing loss from noise exposure is entirely preventable. Simple daily habits can preserve your hearing for decades.", readTime: "4 min" },
  { tag: "Guide", title: "Choosing a hearing aid — what to look for", desc: "Battery vs rechargeable. BTE vs ITE. Bluetooth vs basic. We break down the key decisions so you can ask the right questions at your fitting.", readTime: "7 min" },
  { tag: "Speech", title: "Signs of speech delay in toddlers", desc: "Every child develops at their own pace, but certain milestones matter. A guide for parents on what to watch for — and when to seek an assessment.", readTime: "5 min" },
  { tag: "Tinnitus", title: "Living with tinnitus — practical strategies", desc: "From sleep to concentration to social situations — evidence-backed strategies for managing tinnitus day to day while you undergo treatment.", readTime: "6 min" },
  { tag: "Research", title: "The link between hearing loss and dementia", desc: "Emerging research shows untreated hearing loss is one of the most significant modifiable risk factors for cognitive decline. What you should know.", readTime: "6 min" },
]

const downloads = [
  { title: "Hearing test preparation guide", desc: "What to expect, what to avoid, and how to get the most accurate results from your audiological evaluation.", size: "PDF · 320 KB" },
  { title: "Hearing aid care & maintenance", desc: "Daily cleaning routines, battery management, moisture protection, and when to visit the clinic for servicing.", size: "PDF · 210 KB" },
  { title: "Speech therapy home practice guide", desc: "Exercises and activities to carry over therapy goals at home — compiled for parents and adult patients.", size: "PDF · 480 KB" },
]

const tagColors: Record<string, string> = {
  Guide: "#E1F5EE",
  Tips: "#FAF7F2",
  Speech: "#F0EBE3",
  Tinnitus: "#FAF7F2",
  Research: "#E6F1FB",
}

const tagTextColors: Record<string, string> = {
  Guide: "#0F6E56",
  Tips: "#1A3A2A",
  Speech: "#4A4A4A",
  Tinnitus: "#4A7C59",
  Research: "#185FA5",
}

export default function ResourcesPage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "var(--forest)", padding: "80px 48px 72px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
            Resources
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px,5vw,64px)", fontWeight: 300, color: "white", lineHeight: 1.1, maxWidth: "600px", marginBottom: "20px" }}>
            Hearing health<br /><em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>knowledge centre</em>
          </h1>
          <p style={{ fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.55)", maxWidth: "440px", lineHeight: 1.7 }}>
            Guides, articles, and downloadable resources to help you understand hearing health and get the most from your care.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section style={{ background: "var(--cream)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Articles & Guides
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 300, color: "var(--forest)" }}>From our audiologists</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2px" }}>
            {articles.map(({ tag, title, desc, readTime }) => (
              <article key={title} style={{ background: "var(--white)", padding: "32px", border: "0.5px solid rgba(26,58,42,0.08)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", fontWeight: 400, padding: "3px 10px", background: tagColors[tag] || "var(--cream)", color: tagTextColors[tag] || "var(--text-mid)", letterSpacing: "0.06em" }}>{tag}</span>
                  <span style={{ fontSize: "11.5px", fontWeight: 300, color: "var(--text-lt)" }}>{readTime} read</span>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "19px", fontWeight: 400, color: "var(--forest)", lineHeight: 1.3 }}>{title}</div>
                <p style={{ fontSize: "13px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.65, flex: 1 }}>{desc}</p>
                <div style={{ paddingTop: "12px", borderTop: "0.5px solid rgba(26,58,42,0.08)" }}>
                  <span style={{ fontSize: "11.5px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--forest)", cursor: "pointer", borderBottom: "1px solid var(--gold)", paddingBottom: "1px" }}>Read more →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section style={{ background: "var(--white)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Downloads
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 300, color: "var(--forest)" }}>Free guides for patients</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {downloads.map(({ title, desc, size }) => (
              <div key={title} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 32px", background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.08)", gap: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: 1 }}>
                  <div style={{ width: "44px", height: "44px", background: "var(--forest)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 400, color: "var(--forest)", marginBottom: "4px" }}>{title}</div>
                    <div style={{ fontSize: "13px", fontWeight: 300, color: "var(--text-mid)" }}>{desc}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", flexShrink: 0 }}>
                  <span style={{ fontSize: "11.5px", color: "var(--text-lt)", fontWeight: 300 }}>{size}</span>
                  <a href="#" style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--forest)", textDecoration: "none", background: "var(--gold)", padding: "10px 20px", fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>Download</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: "var(--forest)", padding: "80px 48px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
            Stay Informed
            <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 300, color: "white", marginBottom: "16px" }}>Monthly hearing health tips</h2>
          <p style={{ fontSize: "14px", fontWeight: 300, color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            One email per month. No spam. Practical tips from our audiologists, new articles, and clinic updates.
          </p>
          {subscribed ? (
            <div style={{ padding: "20px 32px", background: "rgba(107,175,124,0.1)", border: "0.5px solid rgba(107,175,124,0.25)", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#6BAF7C" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}><path d="M20 6L9 17l-5-5" /></svg>
              <span style={{ fontSize: "14px", fontWeight: 300, color: "rgba(255,255,255,0.7)" }}>You're subscribed — thank you!</span>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "0" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                style={{ flex: 1, padding: "13px 18px", fontSize: "14px", fontWeight: 300, fontFamily: "'DM Sans', sans-serif", background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.15)", color: "white", outline: "none" }}
              />
              <button
                onClick={() => email && setSubscribed(true)}
                style={{ background: "var(--gold)", color: "var(--forest)", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", padding: "13px 24px", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}
              >
                Subscribe
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <style>{`input::placeholder{color:rgba(255,255,255,0.3);opacity:1}`}</style>
    </>
  )
}