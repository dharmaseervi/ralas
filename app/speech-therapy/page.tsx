import { Metadata } from "next"
import Image from "next/image"
import { BookAppointment } from "@/components/Bookappointment"
import { Check } from "lucide-react"
import ServiceHero from "@/components/home/servicehero"
import FAQ from "@/components/home/FQA"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Speech Therapy Services | Ralas Hearing Clinic",
  description: "Personalized speech therapy for children and adults to enhance communication skills",
}

export default function SpeechTherapy() {
  return (
    <div className="container mx-auto mt-10 px-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>speech-therapy</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <ServiceHero
        title="Expert Speech Therapy Services"
        subtitle="Improve communication skills with personalized therapy sessions"
        imageSrc="/images/speech-therapy-session.jpg"
      />

      <section className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center px-2">
          <div className="space-y-6 px-2">
            <h2 className="text-3xl font-bold">Why Choose Speech Therapy?</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Improved Communication</h3>
                  <p>Enhance verbal and non-verbal communication skills.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Better Social Interaction</h3>
                  <p>Boost confidence and ability to engage in conversations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Support for Speech Disorders</h3>
                  <p>Specialized therapy for stuttering, lisps, and articulation issues.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Personalized Treatment Plans</h3>
                  <p>Customized therapy programs for children and adults.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Enhanced Quality of Life</h3>
                  <p>Develop clear speech and better self-expression.</p>
                </div>
              </li>
            </ul>
          </div>
          <Image
            src="/images/speech-therapy-session-2.jpeg"
            alt="Speech therapy session"
            width={600}
            height={400}
            className="rounded-lg shadow-xl "
          />
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Therapy Process</h2>
          <div className="grid md:grid-cols-3 gap-8 px-2">
            {[
              { title: "Assessment", description: "Comprehensive speech and language evaluation" },
              { title: "Therapy Plan", description: "Personalized exercises and strategies" },
              { title: "Progress Monitoring", description: "Regular updates and adaptive sessions" },
            ].map((step) => (
              <div key={step.title} className="p-6 bg-background rounded-lg">
                <h3 className="font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        title="Speech Therapy FAQs"
        questions={[
          {
            question: "Who can benefit from speech therapy?",
            answer: "Children and adults facing speech, language, or communication challenges."
          },
          {
            question: "How long does a therapy session last?",
            answer: "Typically 45-60 minutes, depending on the individual's needs."
          },
          {
            question: "How many sessions are needed?",
            answer: "The number of sessions varies based on the severity of the condition and progress made."
          }
        ]}
      />

      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Communication?</h2>
          <p className="text-muted-foreground mb-8">
            Book a consultation with our speech therapists to start your journey.
          </p>
          <BookAppointment />
        </div>
      </section>
    </div>
  )
}
