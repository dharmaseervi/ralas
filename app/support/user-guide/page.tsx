import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"

export default function UserGuidePage() {
  const sections = [
    {
      title: "Inserting and removing",
      steps: [
        "Hold the hearing aid with the receiver (small speaker) pointing downward.",
        "Gently place the receiver tip into the ear canal and press the body of the aid over the top of the ear.",
        "To remove, pull gently on the removal cord or the bottom of the device — never tug on the receiver wire.",
      ],
    },
    {
      title: "Charging your device",
      steps: [
        "Place the hearing aid in the charging case with the contacts aligned. A light will confirm it is charging.",
        "A full charge takes approximately 3–4 hours and provides a full day of wear.",
        "Do not leave the device in extreme heat or direct sunlight while charging.",
      ],
    },
    {
      title: "Cleaning",
      steps: [
        "Wipe the device daily with the dry soft cloth provided — do not use water, cleaning sprays, or alcohol wipes.",
        "Clean the ear tip (dome) weekly or replace it monthly — spares are available at our clinic.",
        "Use the small brush to clear any wax from the microphone ports on the casing.",
      ],
    },
    {
      title: "Volume and programme adjustment",
      steps: [
        "Press the small button on the device to cycle through listening programmes (e.g. general, noisy environment, music).",
        "On Bluetooth-enabled models, download your brand's companion app to adjust volume and settings from your phone.",
        "If the sound seems too loud or too soft, contact us for a free adjustment appointment.",
      ],
    },
    {
      title: "Troubleshooting",
      steps: [
        "No sound: check that the device is charged and that there is no wax blocking the ear tip.",
        "Whistling (feedback): ensure the ear tip is seated correctly in the ear canal.",
        "Distorted sound: clean the ear tip and microphone ports. If the issue persists, call us.",
      ],
    },
  ]

  return (
    <>
      <Navbar />
      <section className="py-14 md:py-20 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[800px] mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Support
            </div>
            <h1 className="font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,5vw,52px)", color: "var(--forest)" }}>
              Hearing aid user guide
            </h1>
            <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
              General guidance for most receiver-in-canal (RIC) and behind-the-ear (BTE) models. If you have questions about your specific device, call us on <a href="tel:+916366638452" style={{ color: "var(--forest)" }}>+91 6366 638452</a>.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {sections.map(({ title, steps }) => (
              <div key={title} className="p-7 md:p-10" style={{ background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.1)" }}>
                <h2 className="text-sm font-medium uppercase tracking-widest mb-5" style={{ color: "var(--forest)" }}>{title}</h2>
                <ol className="flex flex-col gap-3">
                  {steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-light rounded-full"
                        style={{ background: "var(--cream)", color: "var(--gold)", border: "0.5px solid rgba(201,168,76,0.4)" }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm font-light leading-relaxed pt-0.5" style={{ color: "var(--text-mid)" }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 md:p-8" style={{ background: "var(--forest)" }}>
            <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Need in-person help? Visit us at 2nd Floor, 121, 6th C Main Road, 4th Block, Jayanagar, Bengaluru – 560011, or call{" "}
              <a href="tel:+916366638452" style={{ color: "var(--gold)" }}>+91 6366 638452</a>.
              Walk-in service appointments are welcome.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
