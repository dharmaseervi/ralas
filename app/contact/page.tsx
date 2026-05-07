"use client"

import { useState } from "react"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"

const services = ["Hearing Test", "Speech Therapy", "Hearing Aid Fitting", "Tinnitus Treatment", "Initial Consultation", "Follow-up / Adjustment"]

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", fontSize: "14px", fontWeight: 300,
  fontFamily: "'DM Sans', sans-serif", color: "var(--text)",
  background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.18)",
  outline: "none", boxSizing: "border-box" as const, transition: "border-color 0.2s",
}

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "10.5px", letterSpacing: "0.12em",
  textTransform: "uppercase" as const, color: "var(--text-lt)", marginBottom: "7px",
}

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }).catch(() => {})
    setSent(true)
  }

  return (
    <>
      <Navbar />

      {/* Page hero */}
      <section style={{ background: "var(--forest)", padding: "80px 48px 72px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
            Get in Touch
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px,5vw,64px)", fontWeight: 300, color: "white", lineHeight: 1.1, maxWidth: "600px" }}>
            We'd love to<br /><em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>hear from you</em>
          </h1>
          <p style={{ fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.55)", marginTop: "20px", maxWidth: "440px", lineHeight: 1.7 }}>
            Book an appointment, ask a question, or simply find out what service is right for you.
          </p>
        </div>
      </section>

      {/* Split layout */}
      <section style={{ background: "var(--white)", padding: "0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr" }}>

          {/* Left — form */}
          <div style={{ padding: "72px 48px 72px 48px", borderRight: "0.5px solid rgba(26,58,42,0.1)" }}>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", paddingTop: "40px" }}>
                <div style={{ width: "56px", height: "56px", border: "1px solid rgba(107,175,124,0.35)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(107,175,124,0.07)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6BAF7C" strokeWidth="1.5" strokeLinecap="round" width={24} height={24}><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, color: "var(--forest)" }}>Message sent</div>
                <p style={{ fontSize: "14px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.7 }}>We'll get back to you within 2 hours during clinic hours (Mon–Sat, 10 AM–7:30 PM).</p>
              </div>
            ) : (
              <>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 400, color: "var(--forest)", marginBottom: "32px" }}>Send us a message</div>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    {[{ id: "name", label: "Full Name", type: "text" }, { id: "phone", label: "Phone Number", type: "tel" }].map(({ id, label, type }) => (
                      <div key={id}>
                        <label style={labelStyle}>{label}</label>
                        <input id={id} type={type} required value={(form as any)[id]}
                          onChange={(e) => setForm(p => ({ ...p, [id]: e.target.value }))}
                          onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
                          style={{ ...inputStyle, borderColor: focused === id ? "var(--gold)" : "rgba(26,58,42,0.18)" }}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                      style={{ ...inputStyle, borderColor: focused === "email" ? "var(--gold)" : "rgba(26,58,42,0.18)" }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Service of Interest</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                      {services.map((s) => (
                        <button key={s} type="button" onClick={() => setForm(p => ({ ...p, service: s }))}
                          style={{
                            padding: "10px 12px", fontSize: "12.5px", fontWeight: form.service === s ? 500 : 300,
                            fontFamily: "'DM Sans', sans-serif", textAlign: "left", cursor: "pointer",
                            background: form.service === s ? "var(--forest)" : "var(--cream)",
                            color: form.service === s ? "white" : "var(--text-mid)",
                            border: `0.5px solid ${form.service === s ? "var(--forest)" : "rgba(26,58,42,0.15)"}`,
                            transition: "all 0.18s",
                          }}
                        >{s}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea rows={4} value={form.message}
                      onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                      onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)}
                      placeholder="Share your concerns or questions…"
                      style={{ ...inputStyle, resize: "none", lineHeight: 1.65, borderColor: focused === "msg" ? "var(--gold)" : "rgba(26,58,42,0.18)" }}
                    />
                  </div>
                  <button type="submit" style={{ background: "var(--gold)", color: "var(--forest)", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginTop: "8px" }}>
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right — info */}
          <div style={{ padding: "72px 48px" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 400, color: "var(--forest)", marginBottom: "36px" }}>Visit us</div>

            {[
              {
                label: "Address",
                content: "2nd Floor, 121, 6th C Main Road,\n4th Block, Jayanagar,\nBengaluru, Karnataka – 560011",
                link: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20",
                linkText: "Get directions →",
              },
              { label: "Phone", content: "+91 6366-638452", link: "tel:+916366638452", linkText: "Call now" },
              { label: "WhatsApp", content: "+91 6366-638452", link: "https://wa.me/916366638452", linkText: "Message on WhatsApp →" },
              { label: "Clinic Hours", content: "Monday – Saturday\n10:00 AM – 7:30 PM\n\nSunday: Closed" },
            ].map(({ label, content, link, linkText }) => (
              <div key={label} style={{ paddingBottom: "24px", marginBottom: "24px", borderBottom: "0.5px solid rgba(26,58,42,0.1)" }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>{label}</div>
                <div style={{ fontSize: "14px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{content}</div>
                {link && linkText && (
                  <a href={link} style={{ display: "inline-block", marginTop: "8px", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--forest)", textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: "1px" }}>{linkText}</a>
                )}
              </div>
            ))}

            {/* Map embed placeholder */}
            <div style={{ height: "200px", background: "var(--cream-dk)", border: "0.5px solid rgba(26,58,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3!2d77.5!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152b5f787543%3A0x32fcd6ff153aaa20!2sJayanagar%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0, position: "absolute", inset: 0 }} allowFullScreen loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section style={{ background: "var(--forest)", padding: "48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 300, color: "white", marginBottom: "6px" }}>Prefer a quick reply?</div>
            <p style={{ fontSize: "13.5px", fontWeight: 300, color: "rgba(255,255,255,0.5)" }}>Message us on WhatsApp for instant responses during clinic hours.</p>
          </div>
          <a href="https://wa.me/916366638452"
            style={{ display: "flex", alignItems: "center", gap: "10px", background: "#25D366", color: "white", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", textDecoration: "none", flexShrink: 0, marginLeft: "40px" }}>
            <svg viewBox="0 0 24 24" fill="white" width={16} height={16}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <style>{`input::placeholder,textarea::placeholder{color:var(--text-lt);opacity:1}`}</style>
    </>
  )
}