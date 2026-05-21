"use client"

import { useState } from "react"

const services = ["Hearing Test", "Speech Therapy", "Hearing Aid Fitting", "Tinnitus Treatment", "Initial Consultation", "Follow-up / Adjustment"]

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }).catch(() => {})
    setSent(true)
  }

  const inputCls = (id: string) =>
    `w-full px-3.5 py-3 text-sm font-light outline-none transition-colors duration-200 bg-[var(--cream)] border`
    + (focused === id ? " border-[var(--gold)]" : " border-[rgba(26,58,42,0.18)]")

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 pt-8">
        <div className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ border: "1px solid rgba(107,175,124,0.35)", background: "rgba(107,175,124,0.07)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#6BAF7C" strokeWidth="1.5" strokeLinecap="round" width={24} height={24}>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", color: "var(--forest)" }}>
          Message sent
        </div>
        <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
          We'll get back to you within 2 hours during clinic hours (Mon–Sat, 10 AM–7:30 PM).
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="font-normal mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "var(--forest)" }}>
        Send us a message
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { id: "name", label: "Full Name", type: "text" },
            { id: "phone", label: "Phone Number", type: "tel" },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>{label}</label>
              <input id={id} type={type} required
                value={(form as any)[id]}
                onChange={(e) => setForm(p => ({ ...p, [id]: e.target.value }))}
                onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
                className={inputCls(id)} style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
            </div>
          ))}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>Email Address</label>
          <input type="email" required value={form.email}
            onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
            onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
            className={inputCls("email")} style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>Service of Interest</label>
          <div className="grid grid-cols-2 gap-1.5">
            {services.map((s) => (
              <button key={s} type="button"
                onClick={() => setForm(p => ({ ...p, service: s }))}
                className="text-left px-3 py-2.5 text-xs transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: form.service === s ? 500 : 300,
                  background: form.service === s ? "var(--forest)" : "var(--cream)",
                  color: form.service === s ? "white" : "var(--text-mid)",
                  border: `0.5px solid ${form.service === s ? "var(--forest)" : "rgba(26,58,42,0.15)"}`,
                }}
              >{s}</button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>Message</label>
          <textarea rows={4} value={form.message}
            onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
            onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)}
            placeholder="Share your concerns or questions…"
            className={`${inputCls("msg")} resize-none leading-relaxed`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>

        <button type="submit"
          className="w-full py-3.5 text-xs font-medium tracking-widest uppercase cursor-pointer border-none mt-2"
          style={{ background: "var(--gold)", color: "var(--forest)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Send Message
        </button>
      </form>

      <style>{`input::placeholder,textarea::placeholder{color:var(--text-lt);opacity:1;font-family:'DM Sans',sans-serif}`}</style>
    </>
  )
}