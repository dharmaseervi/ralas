import { Metadata } from "next";
import Image from "next/image";
import { BookAppointment } from "@/components/Bookappointment";
import { Check } from "lucide-react";
import ServiceHero from "@/components/home/servicehero";
import FAQ from "@/components/home/FQA";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
    title: "Advanced Hearing Aids | Ralas Hearing Clinic",
    description: "Discover state-of-the-art hearing aids designed for comfort and clarity.",
};

export default function HearingAids() {
    return (
        <div className="container mx-auto mt-10 px-2">

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>hearing-aids</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <ServiceHero
                title="State-of-the-Art Hearing Aids"
                subtitle="Experience clear sound with the latest technology"
                imageSrc="/images/oticon-9.png"
            />

            <section className="py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center px-2">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Why Choose Our Hearing Aids?</h2>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                                <div>
                                    <h3 className="font-medium text-muted-foreground">Enhanced Sound Quality</h3>
                                    <p>Crystal clear audio with advanced noise reduction.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                                <div>
                                    <h3 className="font-medium text-muted-foreground">Comfortable Fit</h3>
                                    <p>Ergonomically designed for all-day wear.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                                <div>
                                    <h3 className="font-medium text-muted-foreground">Smart Connectivity</h3>
                                    <p>Sync with your phone or TV for seamless listening.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                                <div>
                                    <h3 className="font-medium text-muted-foreground">Long Battery Life</h3>
                                    <p>Rechargeable options with extended battery life.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 border p-4 rounded-lg shadow-sm">
                                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                                <div>
                                    <h3 className="font-medium text-muted-foreground">Customized to Your Needs</h3>
                                    <p>Tailored settings for your specific hearing requirements.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Image
                        src="/images/hearing-aid-fitting.jpg"
                        alt="Hearing aid fitting process"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl"
                    />
                </div>
            </section>

            <section className="py-16 bg-muted">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Our Hearing Aid Process</h2>
                    <div className="grid md:grid-cols-3 gap-8 px-2">
                        {[
                            { title: "Consultation", description: "Personalized assessment for best device selection." },
                            { title: "Fitting", description: "Customized fitting for maximum comfort and clarity." },
                            { title: "Support", description: "Ongoing care and adjustments to ensure optimal use." },
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
                title="Hearing Aids FAQs"
                questions={[
                    {
                        question: "How do I know which hearing aid is right for me?",
                        answer: "Our specialists will assess your hearing and lifestyle needs to recommend the best fit."
                    },
                    {
                        question: "Are rechargeable hearing aids available?",
                        answer: "Yes! We offer rechargeable options with extended battery life."
                    },
                ]}
            />


            <section className="py-16 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Improve Your Hearing Today</h2>
                    <p className="text-muted-foreground mb-8">
                        Book a consultation to find the perfect hearing aid for you.
                    </p>
                    <BookAppointment />
                </div>
            </section>
        </div>
    );
}
