"use client"

import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"

import { useState } from "react"

const services = ["Hearing Test", "Speech Therapy", "Hearing Aid Fitting", "Tinnitus Treatment", "Initial Consultation", "Follow-up / Adjustment"]

export default function ContactPage() {
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

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="py-16 md:py-20 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            <span className="block w-6 h-px" style={{ background: "var(--gold)" }} />
            Get in Touch
          </div>
          <h1
            className="font-light text-white leading-tight max-w-xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.1 }}
          >
            We'd love to<br />
            <em className="italic" style={{ color: "var(--gold-lt)" }}>hear from you</em>
          </h1>
          <p className="text-sm md:text-base font-light leading-relaxed mt-4 max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
            Book an appointment, ask a question, or simply find out what service is right for you.
          </p>
        </div>
      </section>

      {/* ── Split layout — stacks on mobile ── */}
      <section style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2">

          {/* Left — form */}
          <div
            className="px-5 md:px-12 py-12 md:py-16"
            style={{ borderBottom: "0.5px solid rgba(26,58,42,0.1)" }}
          >
            {sent ? (
              <div className="flex flex-col items-start gap-4 pt-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ border: "1px solid rgba(107,175,124,0.35)", background: "rgba(107,175,124,0.07)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6BAF7C" strokeWidth="1.5" strokeLinecap="round" width={24} height={24}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div
                  className="font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", color: "var(--forest)" }}
                >
                  Message sent
                </div>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  We'll get back to you within 2 hours during clinic hours (Mon–Sat, 10 AM–7:30 PM).
                </p>
              </div>
            ) : (
              <>
                <div
                  className="font-normal mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "var(--forest)" }}
                >
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
                        <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>
                          {label}
                        </label>
                        <input
                          id={id} type={type} required
                          value={(form as any)[id]}
                          onChange={(e) => setForm(p => ({ ...p, [id]: e.target.value }))}
                          onFocus={() => setFocused(id)}
                          onBlur={() => setFocused(null)}
                          className={inputCls(id)}
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>
                      Email Address
                    </label>
                    <input
                      type="email" required value={form.email}
                      onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={inputCls("email")}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>

                  {/* Service buttons */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>
                      Service of Interest
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {services.map((s) => (
                        <button
                          key={s} type="button"
                          onClick={() => setForm(p => ({ ...p, service: s }))}
                          className="text-left px-3 py-2.5 text-xs transition-all duration-200 cursor-pointer"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: form.service === s ? 500 : 300,
                            background: form.service === s ? "var(--forest)" : "var(--cream)",
                            color: form.service === s ? "white" : "var(--text-mid)",
                            border: `0.5px solid ${form.service === s ? "var(--forest)" : "rgba(26,58,42,0.15)"}`,
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>
                      Message
                    </label>
                    <textarea
                      rows={4} value={form.message}
                      onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                      onFocus={() => setFocused("msg")}
                      onBlur={() => setFocused(null)}
                      placeholder="Share your concerns or questions…"
                      className={`${inputCls("msg")} resize-none leading-relaxed`}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-medium tracking-widest uppercase cursor-pointer border-none mt-2"
                    style={{ background: "var(--gold)", color: "var(--forest)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right — info */}
          <div className="px-5 md:px-12 py-12 md:py-16" style={{ borderLeft: "0.5px solid rgba(26,58,42,0.1)" }}>
            <div
              className="font-normal mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "var(--forest)" }}
            >
              Visit us
            </div>

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
              <div key={label} className="pb-5 mb-5" style={{ borderBottom: "0.5px solid rgba(26,58,42,0.1)" }}>
                <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>{label}</div>
                <div className="text-sm font-light leading-relaxed whitespace-pre-line" style={{ color: "var(--text-mid)" }}>{content}</div>
                {link && linkText && (
                  <a
                    href={link}
                    className="inline-block mt-2 text-xs tracking-widest uppercase no-underline pb-px"
                    style={{ color: "var(--forest)", borderBottom: "1px solid var(--gold)", textDecoration: "none" }}
                  >
                    {linkText}
                  </a>
                )}
              </div>
            ))}

            {/* Map */}
            <div className="relative overflow-hidden h-48" style={{ border: "0.5px solid rgba(26,58,42,0.1)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3!2d77.5!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152b5f787543%3A0x32fcd6ff153aaa20!2sJayanagar%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%"
                className="absolute inset-0 border-0"
                allowFullScreen loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA ── */}
      <section className="px-5 md:px-12 py-10 md:py-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div
              className="font-light text-white mb-1.5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px,3vw,24px)" }}
            >
              Prefer a quick reply?
            </div>
            <p className="text-sm font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
              Message us on WhatsApp for instant responses during clinic hours.
            </p>
          </div>
          <a
            href="https://wa.me/916366638452"
            className="flex items-center gap-2.5 text-xs font-medium tracking-widest uppercase px-6 py-3.5 no-underline flex-shrink-0 text-white"
            style={{ background: "#25D366", textDecoration: "none" }}
          >
            <svg viewBox="0 0 24 24" fill="white" width={16} height={16}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <style>{`input::placeholder,textarea::placeholder{color:var(--text-lt);opacity:1;font-family:'DM Sans',sans-serif}`}</style>
    </>
  )
}