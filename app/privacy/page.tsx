// app/privacy/page.tsx
import { generateMetadata } from "@/lib/seo"
export const metadata = generateMetadata("privacy")
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"


const sections = [
  {
    title: "Information We Collect",
    content: [
      { heading: "Personal Information", body: "When you book an appointment or contact us, we collect your name, phone number, email address, and any health-related information you choose to share (such as hearing history or concerns). This information is used solely to provide you with audiological care and follow-up services." },
      { heading: "Website Usage Data", body: "We may collect anonymised data about how visitors use our website, including pages visited, time spent, and device type. This helps us improve the site experience. No personally identifiable information is collected through website analytics." },
      { heading: "Communication Records", body: "If you contact us via phone, WhatsApp, or email, we may retain records of those communications to ensure continuity of care and service quality." },
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      { heading: "Appointment Management", body: "Your contact details are used to confirm, reschedule, or follow up on appointments. We may send appointment reminders via SMS or WhatsApp." },
      { heading: "Clinical Care", body: "Health information you share is used by our audiologists to provide appropriate diagnosis and treatment. All clinical records are maintained confidentially in accordance with applicable Indian healthcare regulations." },
      { heading: "Service Improvement", body: "Anonymised, aggregated data may be used to improve our services, website, and patient communications. We do not sell or share personal data with third parties for marketing purposes." },
    ],
  },
  {
    title: "Data Storage and Security",
    content: [
      { heading: "How We Store Data", body: "Patient records are stored securely in our clinic management system with access restricted to authorised clinical staff only. Digital records are protected with standard security measures." },
      { heading: "Retention Policy", body: "Clinical records are retained for a minimum of 7 years as required by Indian medical regulations. Contact information used for appointment scheduling is retained for as long as necessary to provide our services." },
      { heading: "Third-Party Services", body: "We use WhatsApp for appointment communication and Google Maps for location services. These services have their own privacy policies which we encourage you to review." },
    ],
  },
  {
    title: "Data Safety Measures",
    content: [
      { heading: "Encryption in Transit", body: "All data transmitted between your browser and our website is encrypted using TLS (HTTPS). Any personal information submitted through our contact or appointment forms is transmitted over a secure, encrypted connection." },
      { heading: "Access Controls", body: "Patient health records are accessible only to authorised clinical staff (audiologists and clinic administrators) on a need-to-know basis. Staff access is role-based — administrative staff cannot view clinical records, and clinical staff cannot access billing data beyond what is required for their role." },
      { heading: "No Third-Party Data Sale", body: "We do not sell, rent, or trade your personal or health information to any third party for any purpose, including marketing. Your data is used exclusively to provide and improve your clinical care at Ralas Hearing Clinic." },
      { heading: "Digital Personal Data Protection Act, 2023", body: "Ralas Hearing Clinic processes personal data in accordance with the Digital Personal Data Protection (DPDP) Act, 2023 (India). We collect only the minimum data necessary for the stated purpose, obtain consent where required, and honour data principal rights including access, correction, and erasure requests." },
      { heading: "Health Data Sensitivity", body: "Audiological and speech-related health information is treated as sensitive personal data. It is never shared with insurers, employers, or any other third party without your explicit written consent, except where required by law or clinical referral with your knowledge." },
      { heading: "Security Incident Response", body: "In the event of a data breach that is likely to result in harm to any patient, we will notify affected individuals and the relevant authority as required under applicable Indian law, within the timeframe prescribed by regulation." },
      { heading: "Secure Communications", body: "When you contact us via WhatsApp or phone, please be aware that these are third-party platforms. We recommend you do not send sensitive health or financial information over WhatsApp unless necessary. For sensitive records, contact us directly by phone or visit the clinic." },
    ],
  },
  {
    title: "Your Rights",
    content: [
      { heading: "Access and Correction", body: "You have the right to request a copy of the personal information we hold about you, and to request corrections if any information is inaccurate." },
      { heading: "Deletion", body: "You may request deletion of your personal data, subject to our legal and clinical record-keeping obligations. Clinical records required by law cannot be deleted before the statutory retention period expires." },
      { heading: "Opt-Out", body: "You may opt out of appointment reminders or other communications at any time by contacting us directly. This will not affect your ability to receive clinical care." },
    ],
  },
  {
    title: "Cookies",
    content: [
      { heading: "Website Cookies", body: "Our website may use cookies to improve your browsing experience. These are small text files stored on your device. You can disable cookies in your browser settings, though this may affect some website functionality." },
    ],
  },
  {
    title: "Contact Us About Privacy",
    content: [
      { heading: "Questions or Concerns", body: "If you have any questions about this privacy policy or how we handle your personal information, please contact us at: Ralas Hearing Clinic, 2nd Floor, 121, 6th C Main Road, 4th Block, Jayanagar, Bengaluru – 560011. Phone: +91 6366-638452." },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-20 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            <span className="block w-6 h-px" style={{ background: "var(--gold)" }} />
            Legal
          </div>
          <h1 className="font-light text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px,5vw,56px)", lineHeight: 1.1 }}>
            Privacy Policy
          </h1>
          <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Last updated: November 2026. This policy explains how Ralas Hearing Clinic collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[800px] mx-auto">
          <p className="text-sm font-light leading-relaxed mb-10" style={{ color: "var(--text-mid)" }}>
            Ralas Hearing Clinic ("we", "us", "our") is committed to protecting your privacy. This policy applies to information collected through our website at ralasclinic.com and through our clinical services.
          </p>

          <div className="flex flex-col gap-12">
            {sections.map(({ title, content }) => (
              <div key={title}>
                <h2 className="font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px,3vw,30px)", color: "var(--forest)" }}>
                  {title}
                </h2>
                <div className="flex flex-col gap-5">
                  {content.map(({ heading, body }) => (
                    <div key={heading} className="pl-4" style={{ borderLeft: "2px solid var(--gold)" }}>
                      <div className="text-sm font-medium mb-1.5" style={{ color: "var(--forest)" }}>{heading}</div>
                      <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(26,58,42,0.1)" }}>
            <p className="text-xs font-light leading-relaxed" style={{ color: "var(--text-lt)" }}>
              This privacy policy is governed by the laws of India. By using our services, you consent to the collection and use of information as described in this policy. We reserve the right to update this policy at any time — changes will be posted on this page with an updated date.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}