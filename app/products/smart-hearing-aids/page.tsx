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

export const metadata = {
    title: 'Smart Hearing Aids | Ralas',
    description: 'Experience AI-powered hearing aids for optimal performance.',
}

export default function SmartHearingAidsPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            {/* Breadcrumb */}
            <Breadcrumb className="bg-gray-100 py-2 px-4 rounded-md mb-6">
                <BreadcrumbList className="flex gap-2 text-sm text-gray-600">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="hover:text-blue-600">
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="font-semibold">
                            Behind-the-Ear Aids
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Page Header */}
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Smart Hearing Aids
            </h1>

            {/* Section: Why Choose Smart Hearing Aids */}
            <section className="bg-gray-50 py-12 px-4 rounded-lg mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Why Choose Smart Hearing Aids?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    Smart hearing aids represent the cutting edge of hearing technology, offering advanced features and connectivity options that go beyond traditional amplification. These devices use artificial intelligence and machine learning to provide an optimized listening experience.
                </p>
                <Image
                    src="/smart-2.jpg"
                    alt="Smart Hearing Aid"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md mx-auto mb-6"
                />
                <p className="text-lg text-gray-700 mb-4">
                    Benefits of smart hearing aids include:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-2">
                    <li>Adaptive sound processing for various environments</li>
                    <li>Bluetooth connectivity for streaming audio and calls</li>
                    <li>Smartphone app control for easy adjustments</li>
                    <li>AI-powered noise reduction and speech enhancement</li>
                    <li>Health tracking features (in some models)</li>
                </ul>
            </section>

            {/* Section: How Do Smart Hearing Aids Work */}
            <section className="py-12 px-4 mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    How Do Smart Hearing Aids Work?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    Smart hearing aids combine traditional hearing aid technology with advanced digital features:
                </p>
                <ol className="list-decimal list-inside text-lg text-gray-700 mb-4 space-y-2">
                    <li>Multiple microphones capture sound from the environment</li>
                    <li>Advanced processors analyze the sound in real-time</li>
                    <li>AI algorithms identify and enhance speech while reducing background noise</li>
                    <li>The processed sound is delivered to the ear</li>
                    <li>Bluetooth connectivity allows for audio streaming and app control</li>
                    <li>Machine learning continuously improves performance based on user preferences</li>
                </ol>
                <Image
                    src="/smart.jpg"
                    alt="How Smart Hearing Aids Work"
                    width={800}
                    height={400}
                    className="rounded-lg shadow-md mx-auto mb-6 border"
                />
            </section>

            {/* Section: Top Brands and Models */}
            <section className="bg-gray-50 py-12 px-4 rounded-lg mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Top Brands and Models
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card className="hover:shadow-lg border border-gray-200 rounded-lg">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-800">
                                Signia Xperience
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/Signia.png"
                                alt="Signia Logo"
                                width={200}
                                height={100}
                                className="rounded-lg mb-4"
                            />
                            <p className="text-gray-600">
                                The Signia Xperience line features acoustic-motion sensors and AI technology for a natural sound experience in any environment.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg border border-gray-200 rounded-lg">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-800">
                                Phonak Paradise
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/Phonak-logo.svg"
                                alt="Phonak Logo"
                                width={200}
                                height={100}
                                className="rounded-lg mb-4"
                            />
                            <p className="text-gray-600">
                                Phonak Paradise hearing aids offer unrivaled sound quality, multi-device connectivity, and tap control for hands-free calls and voice assistant access.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Section: Is a Smart Hearing Aid Right for You? */}
            <section className="py-12 px-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Is a Smart Hearing Aid Right for You?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    Smart hearing aids might be the ideal choice if:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-2">
                    <li>You want the most advanced hearing technology available</li>
                    <li>You lead an active lifestyle with varied listening environments</li>
                    <li>You frequently use smartphones or other Bluetooth-enabled devices</li>
                    <li>You want the ability to fine-tune your hearing aids yourself</li>
                    <li>You're interested in tracking health metrics through your hearing aids</li>
                </ul>
                <p className="text-lg text-gray-700">
                    To explore whether smart hearing aids are the best solution for your hearing needs and lifestyle, we recommend scheduling a consultation with our hearing care experts. They can demonstrate the features of smart hearing aids and help you make an informed decision.
                </p>
            </section>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white py-6 px-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-semibold mb-4">
                    Schedule Your Consultation
                </h3>
                <p className="text-lg mb-6">
                    Talk to our experts and experience the benefits of smart hearing aids firsthand.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
                    Book Now
                </button>
            </div>
        </div>
    )
}
