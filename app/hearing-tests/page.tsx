import { Metadata } from "next"
import Image from "next/image"
import { BookAppointment } from "@/components/Bookappointment"
import { Check } from "lucide-react"
import ServiceHero from "@/components/home/servicehero"
import FAQ from "@/components/home/FQA"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Comprehensive Hearing Tests | Ralas Hearing Clinic",
  description: "Professional audiological evaluations using state-of-the-art technology",
}

export default function HearingTests() {
  return (
    <div className="container mx-auto mt-10 px-2 ">

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>hearing-tests</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <ServiceHero
        title="Professional Hearing Evaluation"
        subtitle="Accurate diagnosis for better hearing health"
        imageSrc="/images/professional-hearing-test.jpg"
      />

      <section className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center px-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Get Tested?</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Early Detection</h3>
                  <p>Identify hearing issues before they become serious.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Improved Communication</h3>
                  <p>Enhance your ability to understand and engage in conversations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Better Cognitive Health</h3>
                  <p>Studies link untreated hearing loss to cognitive decline and memory issues.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Personalized Treatment Plans</h3>
                  <p>Receive tailored recommendations for hearing aids or therapy.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Enhanced Quality of Life</h3>
                  <p>Experience better social interactions and increased confidence.</p>
                </div>
              </li>
            </ul>
          </div>
          <Image
            src="/images/professional-hearing-test.jpeg"
            alt="Hearing test process"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>


      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Testing Process</h2>
          <div className="grid md:grid-cols-3 gap-8 px-2">
            {[
              { title: "Consultation", description: "Initial hearing health assessment" },
              { title: "Evaluation", description: "Comprehensive audio metric tests" },
              { title: "Results", description: "Detailed analysis & recommendations" },
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
        title="Hearing Test FAQs"
        questions={[
          {
            question: "How long does a hearing test take?",
            answer: "Typically 30-45 minutes including consultation"
          },
          // Add more FAQs
        ]}
      />

      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready for Better Hearing?</h2>
          <p className="text-muted-foreground mb-8">
            Schedule your hearing assessment with our certified audiologists
          </p>
          <BookAppointment />
        </div>
      </section>
    </div>
  )
}