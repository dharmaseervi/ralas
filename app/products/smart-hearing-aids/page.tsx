// app/product/smart-hearing-aids/page.tsx
import { generateMetadata } from "@/lib/seo"
export const metadata = generateMetadata("product-smart")
import { BookAppointment } from "@/components/Bookappointment";
import FAQ from "@/components/home/FAQ";
import Navbar from "@/components/home/NavigationBar";
import ServiceHero from "@/components/home/ServiceheroSection";

import { Footer } from "react-day-picker";

import Link from "next/link"

export function ProductSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2.5" style={{ borderBottom: "0.5px solid rgba(26,58,42,0.08)" }}>
      <span className="text-xs font-light" style={{ color: "var(--text-lt)" }}>{label}</span>
      <span className="text-sm font-normal" style={{ color: "var(--forest)" }}>{value}</span>
    </div>
  )
}

const all = [
  { label: "Behind-the-Ear",     href: "/products/behind-the-ear-aids" },
  { label: "Rechargeable",       href: "/products/rechargeable-aids" },
  { label: "In-the-Ear (ITE)",   href: "/products/in-ear-aids" },
  { label: "Smart Hearing Aids", href: "/products/smart-hearing-aids" },
  { label: "Accessories",        href: "/products/accessories" },
]

export function RelatedProducts({ current }: { current: string }) {
  return (
    <section className="py-10 px-5 md:px-12" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-lt)" }}>
          Other Products
        </div>
        <div className="flex flex-wrap gap-2">
          {all.filter(p => p.label !== current).map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="px-4 py-2 text-xs font-light no-underline transition-colors"
              style={{
                background: "#FFFEF9",
                border: "0.5px solid rgba(26,58,42,0.12)",
                color: "#1A3A2A",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
 

export default function SmartHearingAidsPage() {
  const faqs = [
    { question: "Do smart hearing aids work with Android phones?", answer: "Yes. Modern smart hearing aids support both iOS and Android via Bluetooth. Some premium models offer direct streaming from both platforms without an intermediary streamer device." },
    { question: "Can I control my hearing aids from my phone?", answer: "Yes. All smart hearing aids come with a companion app that lets you adjust volume, switch programs, check battery levels, and in some cases fine-tune your hearing profile." },
    { question: "What is remote fine-tuning?", answer: "Remote fine-tuning allows your audiologist to adjust your hearing aid settings remotely via the app, without a clinic visit. This is particularly convenient for minor adjustments after the initial fitting." },
    { question: "Are smart hearing aids harder to use?", answer: "Not necessarily. The automatic features (like AutoSense OS in Phonak) mean the aid adjusts itself without you needing to do anything. The app is there if you want control, but it is not required." },
  ]
 
  return (
    <>
      <Navbar />
      <ServiceHero eyebrow="Hearing Aids" title="Smart Hearing Aids" subtitle="AI-powered, app-controlled hearing aids that learn your preferences and adapt to every environment automatically." imageSrc="/images/hearing-aids-hero.jpg" />
 
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              About Smart Aids
            </div>
            <h2 className="font-light leading-tight mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px,4vw,42px)", color: "var(--forest)" }}>
              The most advanced hearing technology available
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
              Smart hearing aids combine neural-network AI processing with Bluetooth connectivity, app control, and automatic environment adaptation. They represent the pinnacle of hearing aid technology — and what was premium-only five years ago is now available across a wider price range.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
              Our authorised brands — Oticon (More™), Phonak (Lumity), Signia (IX), and Widex (Moment) — all offer flagship smart platforms with their own unique approach to sound processing.
            </p>
            <div className="flex flex-col gap-1 mb-8">
              <ProductSpec label="Price range" value="₹60,000 – ₹3,50,000" />
              <ProductSpec label="Connectivity" value="Bluetooth 5.2, iOS & Android" />
              <ProductSpec label="Processing" value="AI / neural network" />
              <ProductSpec label="App control" value="Volume, programs, EQ, remote tune" />
              <ProductSpec label="Brands" value="Oticon More™, Phonak Lumity, Signia IX, Widex Moment" />
            </div>
            <BookAppointment />
          </div>
 
          <div className="flex flex-col gap-3">
            {[
              { title: "AI sound processing", desc: "Neural network platforms trained on millions of real-world sound scenes classify and process your environment in milliseconds — faster than the human brain." },
              { title: "Automatic adaptation", desc: "Smart aids switch automatically between programs for speech in noise, music, outdoor environments, phone calls, and more — without you lifting a finger." },
              { title: "Direct streaming", desc: "Stream phone calls, music, podcasts, and TV audio directly into your hearing aids from iOS and Android devices." },
              { title: "Remote fine-tuning", desc: "Your audiologist can adjust your settings remotely via the app — no clinic visit needed for minor tune-ups." },
              { title: "Health tracking", desc: "Some models include step counting, fall detection, and cognitive engagement tracking as additional health features." },
              { title: "Tinnitus management", desc: "Built-in tinnitus masking programmes (Signia, Widex) provide relief alongside amplification in a single device." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 p-5" style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.08)" }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "var(--gold)" }} />
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: "var(--forest)" }}>{title}</div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <FAQ title="Smart hearing aid questions" questions={faqs} />
      <RelatedProducts current="Smart Hearing Aids" />
      <Footer />
    </>
  )
}