"use client"

import { useState } from "react"

type ServiceOption = { label: string; icon: React.ReactNode }

const services: ServiceOption[] = [
  {
    label: "Hearing Test",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={15} height={15}>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    label: "Hearing Aid Fitting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={15} height={15}>
        <path d="M12 2a7 7 0 0 1 7 7c0 4-3 7-5 9.5C12.5 20 12 21 12 21s-.5-1-2-2.5C8 16 5 13 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Speech Therapy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={15} height={15}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Tinnitus Treatment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={15} height={15}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
  {
    label: "Home Visit",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={15} height={15}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Follow-up / Repair",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width={15} height={15}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[6-9]\d{9}$/

function validateEmail(v: string) {
  if (!v) return "Email is required"
  if (!EMAIL_RE.test(v.trim())) return "Enter a valid email address"
  return ""
}
function validatePhone(v: string) {
  if (!v) return "Phone number is required"
  const digits = v.replace(/[\s\-+]/g, "")
  const mobile = digits.startsWith("91") ? digits.slice(2) : digits
  if (!PHONE_RE.test(mobile)) return "Enter a valid 10-digit Indian mobile number"
  return ""
}

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({ email: "", phone: "" })
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "",
    service: "", message: "", _honeypot: "",
  })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(p => ({ ...p, [k]: e.target.value }))
    if (k === "email" || k === "phone") setErrors(prev => ({ ...prev, [k]: "" }))
  }

  const handleBlur = (field: "email" | "phone") => {
    setFocused(null)
    setErrors(prev => ({
      ...prev,
      [field]: field === "email" ? validateEmail(form[field]) : validatePhone(form[field]),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailErr = validateEmail(form.email)
    const phoneErr = validatePhone(form.phone)
    if (emailErr || phoneErr) {
      setErrors({ email: emailErr, phone: phoneErr })
      return
    }
    setLoading(true)
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => {})
    setLoading(false)
    setSent(true)
  }

  const inputBase =
    "w-full px-4 py-3 text-sm font-light outline-none transition-all duration-200 bg-[var(--cream)]"
  const inputCls = (id: string, hasError?: boolean) =>
    inputBase + (hasError
      ? " border border-red-400"
      : focused === id
        ? " border border-[var(--gold)] shadow-[inset_0_0_0_1px_var(--gold)]"
        : " border border-[rgba(26,58,42,0.16)]")

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-5 py-8">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "rgba(26,58,42,0.06)", border: "1px solid rgba(26,58,42,0.15)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" width={26} height={26}>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div>
          <div
            className="font-light mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", color: "var(--forest)", lineHeight: 1.1 }}
          >
            We&apos;ll be in touch soon
          </div>
          <p className="text-sm font-light leading-relaxed mb-5" style={{ color: "var(--text-mid)" }}>
            Thank you, <strong className="font-medium">{form.name}</strong>. Our team will call you back within 2 hours during clinic hours.
          </p>
          <div className="text-xs font-light" style={{ color: "var(--text-lt)" }}>
            Mon – Sat · 10:00 AM – 7:30 PM
          </div>
        </div>
        <a
          href="https://wa.me/916366638452"
          className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-medium tracking-widest uppercase no-underline"
          style={{ background: "#25D366", color: "white", textDecoration: "none" }}
        >
          <svg viewBox="0 0 24 24" fill="white" width={14} height={14}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
          Or chat on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2.5 mb-2 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
          <span className="block w-5 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
          Book an appointment
        </div>
        <h2
          className="font-light leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px,3vw,32px)", color: "var(--forest)" }}
        >
          How can we help you?
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" style={{ position: "relative" }}>

        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>
              Full Name <span style={{ color: "var(--gold)" }}>*</span>
            </label>
            <input
              type="text" required
              placeholder="e.g. Priya Sharma"
              value={form.name} onChange={set("name")}
              onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
              className={inputCls("name")} style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>
              Phone <span style={{ color: "var(--gold)" }}>*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone} onChange={set("phone")}
              onFocus={() => setFocused("phone")} onBlur={() => handleBlur("phone")}
              className={inputCls("phone", !!errors.phone)} style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
            {errors.phone && (
              <p className="mt-1 text-xs font-light" style={{ color: "#dc2626" }}>{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email + City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>
              Email <span style={{ color: "var(--gold)" }}>*</span>
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              value={form.email} onChange={set("email")}
              onFocus={() => setFocused("email")} onBlur={() => handleBlur("email")}
              className={inputCls("email", !!errors.email)} style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
            {errors.email && (
              <p className="mt-1 text-xs font-light" style={{ color: "#dc2626" }}>{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>
              Your City / Area
            </label>
            <input
              type="text"
              placeholder="e.g. Jayanagar, Mysuru…"
              value={form.city} onChange={set("city")}
              onFocus={() => setFocused("city")} onBlur={() => setFocused(null)}
              className={inputCls("city")} style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block text-xs tracking-widest uppercase mb-2.5" style={{ color: "var(--text-lt)" }}>
            Service of Interest
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {services.map(({ label, icon }) => {
              const active = form.service === label
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setForm(p => ({ ...p, service: active ? "" : label }))}
                  className="flex items-center gap-2 px-3 py-2.5 text-left text-xs transition-all duration-200 cursor-pointer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: active ? 500 : 300,
                    background: active ? "var(--forest)" : "var(--cream)",
                    color: active ? "white" : "var(--text-mid)",
                    border: `0.5px solid ${active ? "var(--forest)" : "rgba(26,58,42,0.15)"}`,
                  }}
                >
                  <span style={{ opacity: active ? 1 : 0.5, flexShrink: 0 }}>{icon}</span>
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Message */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs tracking-widest uppercase" style={{ color: "var(--text-lt)" }}>
              Describe your concern
            </label>
            <span className="text-xs" style={{ color: "var(--text-lt)" }}>Optional</span>
          </div>
          <textarea
            rows={4}
            value={form.message} onChange={set("message")}
            onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)}
            placeholder="e.g. I've been having trouble hearing clearly in noisy places for a few months…"
            className={`${inputCls("msg")} resize-none leading-relaxed`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
          <p className="text-xs mt-1.5 font-light" style={{ color: "var(--text-lt)" }}>
            Even a few words help us prepare for your visit.
          </p>
        </div>

        {/* Honeypot */}
        <input
          type="text" name="_honeypot"
          value={form._honeypot} onChange={set("_honeypot")}
          tabIndex={-1} autoComplete="off" aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 text-xs font-medium tracking-widest uppercase cursor-pointer border-none mt-1 flex items-center justify-center gap-2.5 transition-opacity duration-200"
          style={{
            background: "var(--forest)",
            color: "white",
            fontFamily: "'DM Sans', sans-serif",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width={14} height={14} className="animate-spin">
                <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                <path d="M12 2a10 10 0 0 1 10 10" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Book Appointment
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" width={14} height={14}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>

        {/* Trust bar */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 pt-1"
          style={{ borderTop: "0.5px solid rgba(26,58,42,0.08)" }}
        >
          {[
            "Free first consultation",
            "Reply within 2 hours",
            "Mon–Sat, 10 AM–7:30 PM",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-xs font-light" style={{ color: "var(--text-lt)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" width={11} height={11}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </form>

      <style>{`
        input::placeholder, textarea::placeholder {
          color: var(--text-lt);
          opacity: 1;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 0.8s linear infinite; }
      `}</style>
    </>
  )
}
