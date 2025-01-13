import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
export const metadata: Metadata = {
    title: 'About Us | Ralas Hearing Aid Clinic',
    description: 'Learn about Ralas Hearing Aid Clinic, our mission, and our commitment to improving lives through better hearing.',
}

export default function AboutPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>About</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold mb-6">About Ralas Hearing Aid Clinic</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg mb-4">
                    At Ralas, our mission is to improve lives through better hearing. We are committed to providing the highest quality hearing care and the most advanced hearing aid technology to our patients.
                </p>
                <Image src="/ralas.webp" alt="Ralas team" width={800} height={400} className="rounded-lg mb-4" />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-lg mb-4">
                    Founded in 2005, Ralas Hearing Aid Clinic has grown from a small local practice to a leading provider of hearing healthcare. Our journey has been driven by a passion for helping people reconnect with the world of sound and improving their quality of life.
                </p>
            </section>

           

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                <p className="text-lg mb-4">
                    We are committed to:
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li>Providing personalized care tailored to each patient's unique needs</li>
                    <li>Staying at the forefront of hearing aid technology</li>
                    <li>Offering ongoing support and aftercare to ensure optimal hearing health</li>
                    <li>Educating our community about hearing health and conservation</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
                <p className="text-lg mb-4">
                    Experience the Ralas difference for yourself. Schedule an appointment today and take the first step towards better hearing.
                </p>
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                    Book an Appointment
                </button>
            </section>
        </div>
    )
}

