// app/home-visits/page.tsx
import { generateMetadata } from "@/lib/seo"
export const metadata = generateMetadata("home-visits")
import { BookAppointment } from "@/components/Bookappointment"
import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"
import ServiceHero from "@/components/home/ServiceheroSection"


const services = [
  { icon: "🦻", title: "Hearing Assessment", desc: "Full pure-tone audiometry and speech discrimination testing performed in the comfort of your home using calibrated portable equipment." },
  { icon: "🔧", title: "Hearing Aid Fitting", desc: "Programming, fitting, and verification of new or existing hearing aids. We bring our fitting equipment to you." },
  { icon: "🔄", title: "Device Servicing", desc: "Cleaning, tubing replacement, battery checks, and minor repairs for all major hearing aid brands — no clinic visit needed." },
  { icon: "💬", title: "Speech Therapy", desc: "One-on-one speech and language therapy sessions for children and adults in a familiar, stress-free environment." },
  { icon: "📋", title: "Follow-up Consultations", desc: "Post-fitting reviews, fine-tuning sessions, and progress checks for existing patients." },
  { icon: "👨‍👩‍👧", title: "Family Counselling", desc: "Guidance sessions for family members on how to communicate effectively with a person with hearing loss." },
]

const areas = [
  "Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi", "Koramangala",
  "HSR Layout", "BTM Layout", "Rajajinagar", "Malleswaram", "Vijayanagar",
  "Electronic City", "Whitefield", "Indiranagar", "Sadashivanagar", "Yelahanka",
]

const faqs = [
  { question: "How far in advance should I book a home visit?", answer: "We recommend booking at least 48 hours in advance to ensure slot availability. For urgent cases, call us directly — we do our best to accommodate same-day requests." },
  { question: "Is the home visit equipment the same as the clinic?", answer: "We use calibrated portable audiological equipment that meets clinical standards. Results are comparable to in-clinic testing. For complex diagnostic cases, we may recommend a follow-up clinic visit." },
  { question: "What is the cost of a home visit?", answer: "A nominal home visit fee applies in addition to the cost of the service. Please call or WhatsApp us for current pricing based on your location." },
  { question: "Is this service available for bedridden patients?", answer: "Yes. We specifically designed this service for patients who are bedridden, post-surgery, or have severe mobility limitations. Our audiologists are trained to work in these environments." },
  { question: "Do you visit outside Bengaluru?", answer: "Currently our home visit service covers Bengaluru only. For outstation patients, we offer video consultation as an alternative for follow-up sessions." },
]

export default function HomeVisitsPage() {
  return (
    <>
      <Navbar />
      <ServiceHero
        eyebrow="Home Visit Service"
        title="We come to you"
        subtitle="Professional audiological care and speech therapy delivered at your doorstep — no travel, no waiting rooms, no stress."
        imageSrc="/images/home-visit-hero.jpg"
      />

      {/* ── Intro ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Why Home Visits
            </div>
            <h2 className="font-light leading-tight mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", color: "var(--forest)" }}>
              Clinical care without<br />leaving home
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
              For elderly patients, those recovering from surgery, or anyone with mobility constraints — travelling to a clinic can be a significant barrier to getting the hearing care they need.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
              Our audiologists bring the same clinical expertise and portable professional equipment directly to your home, ensuring you receive the same standard of care as an in-clinic visit.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { val: "48h", lbl: "Advance booking" },
                { val: "All ages", lbl: "Including elderly" },
                { val: "Bengaluru", lbl: "Coverage area" },
              ].map(({ val, lbl }) => (
                <div key={lbl}>
                  <div className="font-light leading-none" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px,3vw,28px)", color: "var(--forest)" }}>{val}</div>
                  <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--text-lt)" }}>{lbl}</div>
                </div>
              ))}
            </div>
            <BookAppointment />
          </div>

          {/* Who it's for */}
          <div className="p-7 md:p-10" style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.08)" }}>
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Ideal for</div>
            <div className="flex flex-col gap-3">
              {[
                "Elderly patients (65+) with mobility limitations",
                "Post-surgery or bedridden patients",
                "Patients with severe physical disability",
                "Young children who are more comfortable at home",
                "Busy professionals who cannot take clinic appointments",
                "Patients in Bengaluru suburbs far from our clinic",
                "Existing patients needing routine follow-up care",
                "Family groups where multiple members need assessment",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "var(--gold)" }} />
                  <span className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              What We Offer
            </div>
            <h2 className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", color: "var(--forest)" }}>
              Services available at home
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="p-7 md:p-8" style={{ background: "var(--white)" }}>
                <div className="text-3xl mb-4">{icon}</div>
                <div className="font-normal mb-2 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "var(--forest)" }}>{title}</div>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage areas ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Coverage
            </div>
            <h2 className="font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)" }}>
              Areas we serve in Bengaluru
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            {areas.map((area) => (
              <div key={area} className="px-4 py-2 text-sm font-light" style={{ background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}>
                {area}
              </div>
            ))}
          </div>
          <p className="text-sm font-light" style={{ color: "rgba(255,255,255,0.45)" }}>
            Don't see your area? Call us — we cover most of Bengaluru and may be able to accommodate your location.
          </p>
        </div>
      </section>

      {/* ── How to book ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-14 text-center">
            <div className="flex items-center justify-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px" style={{ background: "var(--gold)" }} />
              How to Book
              <span className="block w-6 h-px" style={{ background: "var(--gold)" }} />
            </div>
            <h2 className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", color: "var(--forest)" }}>
              Book a home visit in 3 steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {[
              { num: "01", title: "Call or WhatsApp us", desc: "Tell us your location, the service you need, and your preferred date and time. We'll confirm availability within 2 hours." },
              { num: "02", title: "We confirm your slot", desc: "Our team will call back to confirm the audiologist assigned, exact arrival time, and any preparation needed." },
              { num: "03", title: "We arrive at your door", desc: "Our audiologist arrives with all necessary equipment. The session runs exactly as it would in our clinic." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="p-7 md:p-10" style={{ background: "var(--cream)" }}>
                <div className="font-light leading-none mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,4vw,52px)", color: "rgba(201,168,76,0.35)" }}>{num}</div>
                <div className="text-sm font-medium mb-2" style={{ color: "var(--forest)" }}>{title}</div>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookAppointment />
            <a href="https://wa.me/916366638452" className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-6 py-3 no-underline text-white" style={{ background: "#25D366", textDecoration: "none" }}>
              <svg viewBox="0 0 24 24" fill="white" width={14} height={14}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <FAQ title="Home visit questions" questions={faqs} />
      <Footer />
    </>
  )
}