import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"
import ServiceHero from "@/components/home/ServiceheroSection"
import TechnologyShowcase from "@/components/home/TechnologyShowcase"


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
        eyebrow="Hearing Aids"
        title="The right hearing aid, fitted for you"
        subtitle="Authorised dealer for Oticon, Phonak, Signia, and Widex. Every device is precisely calibrated to your audiogram by our certified audiologists."
        imageSrc="/images/hearing-aids-hero.jpg"
      />

      {/* ── Product types — 1 col mobile, 2 col desktop ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Device Types
            </div>
            <h2 className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}>
              Find the style that suits you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {products.map(({ type, range, desc, features }) => (
              <div key={type} className="p-7 md:p-9" style={{ background: "var(--white)" }}>
                {/* Type + price — stacks on very small, row on sm+ */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-4">
                  <div className="font-normal leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px,3vw,22px)", color: "var(--forest)" }}>
                    {type}
                  </div>
                  <div className="text-xs font-light flex-shrink-0 sm:pt-1" style={{ color: "var(--gold)" }}>
                    {range}
                  </div>
                </div>
                <p className="text-sm font-light leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {features.map((f) => (
                    <span key={f} className="text-xs font-light px-2.5 py-1" style={{ color: "var(--text-mid)", border: "0.5px solid rgba(26,58,42,0.15)" }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologyShowcase />

      {/* ── Brands — 1 col mobile, 2 col desktop ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Our Brands
            </div>
            <h2 className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}>
              World-leading manufacturers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {brands.map(({ name, desc }) => (
              <div key={name} className="flex gap-4 md:gap-6 items-start p-7 md:p-9" style={{ background: "var(--white)" }}>
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0" style={{ background: "var(--forest)" }}>
                  <span className="font-light tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", color: "var(--gold-lt)" }}>
                    {name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-normal mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", color: "var(--forest)" }}>{name}</div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{desc}</p>
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