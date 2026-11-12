import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"

export default function WarrantyPage() {
  return (
    <>
      <Navbar />
      <section className="py-14 md:py-20 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[800px] mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Support
            </div>
            <h1 className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,5vw,52px)", color: "var(--forest)" }}>
              Warranty information
            </h1>
          </div>

          <div className="p-7 md:p-10 mb-6" style={{ background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.1)" }}>
            <h2 className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: "var(--forest)" }}>Manufacturer warranty</h2>
            <div className="flex flex-col gap-4 text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
              <p>All hearing aids sold at Ralas carry the <strong style={{ color: "var(--forest)", fontWeight: 500 }}>manufacturer&apos;s warranty</strong> — typically 1 to 3 years depending on the brand and model. The warranty covers defects in materials and workmanship under normal use conditions.</p>
              <p>Warranty terms vary by brand (Oticon, Phonak, Signia, Widex, etc.). We will provide the specific warranty card and documentation at the time of purchase.</p>
            </div>
          </div>

          <div className="p-7 md:p-10 mb-6" style={{ background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.1)" }}>
            <h2 className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: "var(--forest)" }}>What is not covered</h2>
            <div className="flex flex-col gap-3 text-sm font-light" style={{ color: "var(--text-mid)" }}>
              {[
                "Physical damage from drops or impacts",
                "Damage from moisture or water ingress beyond the device's rated IP level",
                "Unauthorized repair or modification",
                "Normal wear and tear (ear tips, domes, tubing)",
                "Loss or theft",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "var(--gold)" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-7 md:p-10" style={{ background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.1)" }}>
            <h2 className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: "var(--forest)" }}>Claiming warranty service</h2>
            <div className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
              <p className="mb-3">Bring your hearing aid and proof of purchase to our clinic. We will assess the device and handle the warranty claim with the manufacturer on your behalf.</p>
              <div className="flex flex-col gap-2">
                <a href="tel:+916366638452" className="text-sm font-medium no-underline" style={{ color: "var(--forest)" }}>📞 +91 6366 638452</a>
                <a href="mailto:info@ralasclinic.com" className="text-sm font-medium no-underline" style={{ color: "var(--forest)" }}>✉ info@ralasclinic.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
