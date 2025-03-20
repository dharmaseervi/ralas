import { Metadata } from "next"
import Image from "next/image"
import { BookAppointment } from "@/components/Bookappointment"
import { Check } from "lucide-react"
import ServiceHero from "@/components/home/servicehero"
import FAQ from "@/components/home/FQA"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
export const metadata: Metadata = {
  title: "Tinnitus Treatment | Ralas Hearing Clinic",
  description: "Effective tinnitus management solutions to reduce ringing in the ears and improve quality of life.",
}

export default function TinnitusTreatment() {
  return (
    <div className="container mx-auto mt-10 px-2">
       <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>tinnitus-treatment</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

      <ServiceHero
        title="Advanced Tinnitus Treatment"
        subtitle="Reduce ringing in the ears and enhance your well-being with expert care"
        imageSrc="/images/tinnitus-treatment.jpg"
      />

      <section className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center px-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Seek Tinnitus Treatment?</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Relief from Constant Ringing</h3>
                  <p>Manage persistent ringing or buzzing sounds effectively.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Improved Sleep Quality</h3>
                  <p>Minimize nighttime disturbances caused by tinnitus.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Reduced Stress & Anxiety</h3>
                  <p>Address the emotional impact of tinnitus for better mental health.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Personalized Treatment Plans</h3>
                  <p>Therapy and sound-based solutions tailored to your needs.</p>
                </div>
              </li>
            </ul>
          </div>
          <Image
            src="/images/tinnitus-treatment-2.jpg"
            alt="Tinnitus treatment session"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-3 gap-8 px-2">
            {[  
              { title: "Comprehensive Evaluation", description: "Identifying underlying causes of tinnitus." },
              { title: "Sound Therapy", description: "Using external sounds to minimize ringing perception." },
              { title: "Counseling & Management", description: "Helping patients cope with tinnitus-related stress." },
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
        title="Tinnitus Treatment FAQs"
        questions={[
          {
            question: "What causes tinnitus?",
            answer: "Tinnitus can result from hearing loss, ear infections, or exposure to loud noise."
          },
          {
            question: "Can tinnitus be cured?",
            answer: "While there's no universal cure, treatments can significantly reduce symptoms."
          },
          {
            question: "Is tinnitus linked to hearing loss?",
            answer: "Yes, many people with tinnitus also experience some degree of hearing loss."
          }
        ]}
      />

      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Find Relief from Tinnitus</h2>
          <p className="text-muted-foreground mb-8">
            Book an appointment today and start your journey towards better hearing.
          </p>
          <BookAppointment />
        </div>
      </section>
    </div>
  )
}
