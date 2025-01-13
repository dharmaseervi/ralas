import { Metadata } from 'next'
import Link from 'next/link'
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
    title: 'Hearing Aid Resources | Ralas',
    description: 'Explore our comprehensive resources on hearing health, hearing aid care, and latest advancements in hearing technology.',
}

export default function ResourcesPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Resources</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <h1 className="text-4xl font-bold mb-6 mt-4">Hearing Aid Resources</h1>

            <p className="text-lg mb-8">
                Welcome to our resources page. Here you'll find valuable information about hearing health, hearing aid care, and the latest advancements in hearing technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Understanding Hearing Loss</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            <li><Link href="/resources/types-of-hearing-loss" className="text-blue-600 hover:underline">Types of Hearing Loss</Link></li>
                            <li><Link href="/resources/causes-of-hearing-loss" className="text-blue-600 hover:underline">Common Causes of Hearing Loss</Link></li>
                            <li><Link href="/resources/hearing-loss-prevention" className="text-blue-600 hover:underline">Hearing Loss Prevention Tips</Link></li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Hearing Aid Care</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            <li><Link href="/resources/cleaning-hearing-aids" className="text-blue-600 hover:underline">How to Clean Your Hearing Aids</Link></li>
                            <li><Link href="/resources/hearing-aid-maintenance" className="text-blue-600 hover:underline">Hearing Aid Maintenance Guide</Link></li>
                            <li><Link href="/resources/troubleshooting" className="text-blue-600 hover:underline">Troubleshooting Common Issues</Link></li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Latest Technology</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            <li><Link href="/resources/ai-in-hearing-aids" className="text-blue-600 hover:underline">AI in Hearing Aids</Link></li>
                            <li><Link href="/resources/bluetooth-connectivity" className="text-blue-600 hover:underline">Bluetooth Connectivity Explained</Link></li>
                            <li><Link href="/resources/rechargeable-technology" className="text-blue-600 hover:underline">Advancements in Rechargeable Technology</Link></li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Living with Hearing Aids</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            <li><Link href="/resources/adjusting-to-hearing-aids" className="text-blue-600 hover:underline">Adjusting to Your New Hearing Aids</Link></li>
                            <li><Link href="/resources/hearing-aids-and-lifestyle" className="text-blue-600 hover:underline">Hearing Aids and Your Lifestyle</Link></li>
                            <li><Link href="/resources/communication-tips" className="text-blue-600 hover:underline">Communication Tips for Hearing Aid Users</Link></li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">External Resources</h2>
                <p className="mb-4">Here are some trusted external resources for more information on hearing health:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><a href="https://www.asha.org/public/hearing/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">American Speech-Language-Hearing Association (ASHA)</a></li>
                    <li><a href="https://www.hearingloss.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Hearing Loss Association of America (HLAA)</a></li>
                    <li><a href="https://www.nidcd.nih.gov/health/hearing-ear-infections-deafness" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Institute on Deafness and Other Communication Disorders (NIDCD)</a></li>
                </ul>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Need More Information?</h2>
                <p className="mb-4">
                    If you have any questions or need more information about hearing aids or hearing health, don't hesitate to contact our team of experts. We're here to help you on your journey to better hearing.
                </p>
                <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Us
                </Link>
            </section>
        </div>
    )
}

