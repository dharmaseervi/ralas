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
    title: 'Rechargeable Hearing Aids | Ralas',
    description: 'Discover our eco-friendly, long-lasting rechargeable hearing aid options.',
}

export default function RechargeableAidsPage() {
    return (
        <div className="container mx-auto py-12 px-4">

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Rechargeable</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold mb-6">Rechargeable Hearing Aids</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Rechargeable Hearing Aids?</h2>
                <p className="text-lg mb-4">
                    Rechargeable hearing aids offer a convenient and eco-friendly alternative to traditional battery-powered devices. These innovative aids combine advanced hearing technology with the ease of rechargeable batteries.
                </p>
                <Image src="/rechargeable-2.jpeg" alt="Rechargeable Hearing Aid" width={400} height={400} className="rounded-lg mb-4" />
                <p className="text-lg mb-4">
                    Benefits of rechargeable hearing aids include:
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li>Convenience - no need to regularly change tiny batteries</li>
                    <li>Cost-effective in the long run</li>
                    <li>Environmentally friendly - reduces battery waste</li>
                    <li>Reliable power throughout the day</li>
                    <li>Sealed design, reducing moisture and dust exposure</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">How Do Rechargeable Hearing Aids Work?</h2>
                <p className="text-lg mb-4">
                    Rechargeable hearing aids function similarly to traditional aids but with a built-in power source:
                </p>
                <ol className="list-decimal list-inside text-lg mb-4">
                    <li>The hearing aid contains a rechargeable battery (usually lithium-ion)</li>
                    <li>When not in use, the aid is placed in a charging dock</li>
                    <li>The charging process typically takes 3-4 hours for a full charge</li>
                    <li>Once charged, the aid can function for 24+ hours of continuous use</li>
                    <li>The battery life typically lasts several years before needing replacement</li>
                </ol>
                <Image src="/rech.webp" alt="How Rechargeable Hearing Aids Work" width={800} height={400} className="rounded-lg mb-4" />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Top Brands and Models</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signia Pure Charge&Go AX</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image src="/Signia.png" alt="Signia Logo" width={200} height={100} className="mb-4" />
                            <p>The Signia Pure Charge&Go AX offers advanced sound processing, lithium-ion rechargeable batteries, and Bluetooth connectivity for a seamless listening experience.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Phonak Audéo Paradise R</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image src="/phonak-logo.svg" alt="Phonak Logo" width={200} height={100} className="mb-4" />
                            <p>The Phonak Audéo Paradise R combines rechargeable convenience with exceptional sound quality and multiple Bluetooth connections for modern, active lifestyles.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Is a Rechargeable Hearing Aid Right for You?</h2>
                <p className="text-lg mb-4">
                    Rechargeable hearing aids might be the perfect solution if:
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li>You have difficulty handling small batteries</li>
                    <li>You want to reduce the ongoing cost of battery replacements</li>
                    <li>You're environmentally conscious and want to reduce battery waste</li>
                    <li>You lead an active lifestyle and need reliable, all-day power</li>
                    <li>You prefer the convenience of overnight charging to frequent battery changes</li>
                </ul>
                <p className="text-lg">
                    To determine if a rechargeable hearing aid is the best fit for your lifestyle and hearing needs, we recommend scheduling a consultation with one of our hearing care professionals. They can guide you through the options and help you make an informed decision.
                </p>
            </section>
        </div>
    )
}
