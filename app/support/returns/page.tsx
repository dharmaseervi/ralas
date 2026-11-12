import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"
import Link from "next/link"

export default function ReturnsPage() {
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
              Returns &amp; exchanges
            </h1>
          </div>

          <div className="p-7 md:p-10 mb-6" style={{ background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.1)" }}>
            <h2 className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: "var(--forest)" }}>Return policy</h2>
            <div className="flex flex-col gap-4 text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
              <p>Hearing aids purchased at Ralas come with a <strong style={{ color: "var(--forest)", fontWeight: 500 }}>30-day trial period</strong>. If you are not satisfied with the fit or performance during this period, please contact us and we will work with you on adjustments, an exchange, or a return.</p>
              <p>Accessories and consumables (batteries, domes, cleaning kits) are not eligible for return once opened, unless defective.</p>
              <p>All returned items must be in original condition. Proof of purchase is required.</p>
            </div>
          </div>

          <div className="p-7 md:p-10" style={{ background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.1)" }}>
            <h2 className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: "var(--forest)" }}>How to initiate a return</h2>
            <div className="flex flex-col gap-3 text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
              <p>Contact us by phone, WhatsApp, or email to let us know you&apos;d like to return or exchange a product. We will guide you through the process.</p>
              <div className="flex flex-col gap-2 pt-2">
                <a href="tel:+916366638452" className="flex items-center gap-2 text-sm font-medium no-underline" style={{ color: "var(--forest)" }}>
                  📞 +91 6366 638452
                </a>
                <a href="https://wa.me/916366638452" className="flex items-center gap-2 text-sm font-medium no-underline" style={{ color: "var(--forest)" }}>
                  💬 WhatsApp
                </a>
                <a href="mailto:info@ralasclinic.com" className="flex items-center gap-2 text-sm font-medium no-underline" style={{ color: "var(--forest)" }}>
                  ✉ info@ralasclinic.com
                </a>
              </div>
              <p className="pt-2">
                Or visit our clinic at 2nd Floor, 121, 6th C Main Road, 4th Block, Jayanagar, Bengaluru – 560011.{" "}
                <Link href="/contact" style={{ color: "var(--forest)", borderBottom: "1px solid rgba(26,58,42,0.3)" }}>Get directions</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
