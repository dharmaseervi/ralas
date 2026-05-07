import Link from "next/link"

import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import TechnologyShowcase from "@/components/home/TechnologyShowcase"
import ServiceHero from "@/components/home/ServiceheroSection"
import Navbar from "@/components/home/NavigationBar"



const products = [
  { type: "Behind-the-Ear (BTE)", range: "₹18,000 – ₹2,20,000", desc: "The most versatile style. Sits behind the ear with a tube connecting to an ear mould. Suitable for mild to profound hearing loss in all ages.", features: ["All hearing loss levels", "Long battery life", "Easy to handle", "Rechargeable options"] },
  { type: "Receiver-in-Canal (RIC)", range: "₹25,000 – ₹2,80,000", desc: "The receiver sits inside the ear canal for a more natural sound experience. Slim, discreet, and comfortable for daily wear.", features: ["Near-invisible design", "Natural sound quality", "Bluetooth streaming", "Most popular style"] },
  { type: "In-the-Ear (ITE)", range: "₹22,000 – ₹1,80,000", desc: "Custom-made to fit your ear. Entirely inside the ear for a discreet look while being easy to insert and remove.", features: ["Custom fitted", "Discreet appearance", "Easy to use", "Mild–severe loss"] },
  { type: "Smart Hearing Aids", range: "₹60,000 – ₹3,50,000", desc: "App-controlled, AI-powered devices that learn your listening preferences. Stream directly from your phone and adjust settings on the go.", features: ["AI sound processing", "App control", "Direct streaming", "Remote fine-tuning"] },
]

const brands = [
  { name: "Oticon", desc: "Pioneers of BrainHearing™ technology. Their More™ platform is trained on 12M sound scenes for unmatched clarity." },
  { name: "Phonak", desc: "Swiss-engineered hearing solutions known for AutoSense OS™ — adapts automatically to every listening environment." },
  { name: "Signia", desc: "Innovative Own Voice Processing (OVP™) makes your own voice sound completely natural. Ideal for first-time wearers." },
  { name: "Widex", desc: "Leaders in natural sound processing. Their ZeroDelay™ technology delivers the fastest signal processing available." },
]

const faqs = [
  { question: "How do I know which hearing aid is right for me?", answer: "The right device depends on your audiogram, lifestyle, dexterity, and budget. Our audiologists will recommend options after a full hearing test — we never push a particular brand or model." },
  { question: "Do you offer a trial period?", answer: "Yes. All hearing aids come with a 30-day trial. If you are not satisfied for any reason, you can return the device for a full refund within 30 days of fitting." },
  { question: "What is included in the price?", answer: "All prices include the device, professional fitting, a follow-up fine-tuning session at 2–4 weeks, and a manufacturer's warranty (typically 2–3 years). Batteries or charging cables are included for the first year." },
  { question: "Can I get my existing hearing aid serviced here?", answer: "Yes. We service and repair all major brands, including devices purchased elsewhere. Call us to check if we support your specific model." },
  { question: "Is GST billing available?", answer: "Yes. We provide GST-compliant invoices for all purchases, accepted by most health insurance providers for reimbursement claims." },
]

export default function HearingAidsPage() {
  return (
    <>
      <Navbar />
      <ServiceHero
  
        title="The right hearing aid, fitted for you"
        subtitle="Authorised dealer for Oticon, Phonak, Signia, and Widex. Every device is precisely calibrated to your audiogram by our certified audiologists."
        imageSrc="/images/hearing-aids-hero.jpg"
      />

      {/* Product types */}
      <section style={{ background: "var(--cream)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Device Types
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}>Find the style that suits you</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "2px" }}>
            {products.map(({ type, range, desc, features }) => (
              <div key={type} style={{ background: "var(--white)", padding: "40px 36px", border: "0.5px solid rgba(26,58,42,0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 400, color: "var(--forest)", lineHeight: 1.25 }}>{type}</div>
                  <div style={{ fontSize: "12px", fontWeight: 300, color: "var(--gold)", whiteSpace: "nowrap", marginLeft: "16px", paddingTop: "4px" }}>{range}</div>
                </div>
                <p style={{ fontSize: "13.5px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "20px" }}>{desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {features.map((f) => (
                    <span key={f} style={{ fontSize: "11px", fontWeight: 300, color: "var(--text-mid)", border: "0.5px solid rgba(26,58,42,0.15)", padding: "4px 10px" }}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologyShowcase />

      {/* Brands */}
      <section style={{ background: "var(--cream)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Our Brands
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}>World-leading manufacturers</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "2px" }}>
            {brands.map(({ name, desc }) => (
              <div key={name} style={{ background: "var(--white)", padding: "36px", border: "0.5px solid rgba(26,58,42,0.08)", display: "flex", gap: "24px", alignItems: "flex-start" }}>
                <div style={{ width: "56px", height: "56px", background: "var(--forest)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontWeight: 300, color: "var(--gold-lt)", letterSpacing: "0.06em" }}>{name[0]}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 400, color: "var(--forest)", marginBottom: "8px" }}>{name}</div>
                  <p style={{ fontSize: "13.5px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ title="Hearing aid questions" questions={faqs} />
      <Footer />
    </>
  )
}