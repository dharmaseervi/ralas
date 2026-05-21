import { Metadata } from 'next'
import Image from 'next/image'
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
    title: 'Understanding Different Types of Hearing Loss | Ralas Hearing Aid Clinic',
    description: 'Learn about the various types of hearing loss, their causes, symptoms, and treatment options.',
}

export default function TypesOfHearingLossPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/resources/blog">Blog</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Types of Hearing Loss</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <article className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">Understanding Different Types of Hearing Loss</h1>
                <p className="text-gray-600 mb-8">Published on May 15, 2023 | Last updated: June 1, 2023</p>

                <Image 
                    src="/human-ear.jpeg" 
                    alt="Diagram of the human ear" 
                    width={800} 
                    height={400} 
                    className="rounded-lg mb-8"
                />

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                    <p className="mb-4">
                        Hearing loss is a common condition that affects millions of people worldwide. It can occur at any age and for various reasons. Understanding the different types of hearing loss is crucial for proper diagnosis and treatment. In this article, we'll explore the three main types of hearing loss: conductive, sensorineural, and mixed hearing loss.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Conductive Hearing Loss</h2>
                    <p className="mb-4">
                        Conductive hearing loss occurs when sound waves are prevented from efficiently traveling through the outer ear, eardrum, or middle ear to the inner ear.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Causes:</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Ear wax buildup</li>
                        <li>Ear infections</li>
                        <li>Perforated eardrum</li>
                        <li>Fluid in the middle ear</li>
                        <li>Otosclerosis (abnormal bone growth in the middle ear)</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Symptoms:</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Difficulty hearing soft sounds</li>
                        <li>Muffled speech</li>
                        <li>Feeling of fullness in the ear</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Treatment:</h3>
                    <p className="mb-4">
                        Conductive hearing loss is often treatable with medical interventions such as:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Removal of ear wax</li>
                        <li>Antibiotics for infections</li>
                        <li>Surgical procedures to repair the eardrum or remove abnormal bone growth</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Sensorineural Hearing Loss</h2>
                    <p className="mb-4">
                        Sensorineural hearing loss is the most common type of hearing loss. It occurs when there is damage to the inner ear (cochlea) or to the nerve pathways from the inner ear to the brain.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Causes:</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Aging (presbycusis)</li>
                        <li>Exposure to loud noises</li>
                        <li>Genetic factors</li>
                        <li>Certain medications</li>
                        <li>Head trauma</li>
                        <li>Diseases such as Meniere's disease or acoustic neuroma</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Symptoms:</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Difficulty understanding speech, especially in noisy environments</li>
                        <li>Trouble hearing high-pitched sounds</li>
                        <li>Tinnitus (ringing in the ears)</li>
                        <li>Dizziness or balance problems</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Treatment:</h3>
                    <p className="mb-4">
                        Sensorineural hearing loss is typically permanent, but can be managed with:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Hearing aids</li>
                        <li>Cochlear implants (for severe cases)</li>
                        <li>Assistive listening devices</li>
                        <li>Auditory training</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Mixed Hearing Loss</h2>
                    <p className="mb-4">
                        Mixed hearing loss is a combination of conductive and sensorineural hearing loss. It occurs when there is damage in both the outer or middle ear and the inner ear or auditory nerve.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Causes:</h3>
                    <p className="mb-4">
                        Mixed hearing loss can result from any combination of the causes listed for conductive and sensorineural hearing loss.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Treatment:</h3>
                    <p className="mb-4">
                        Treatment for mixed hearing loss typically involves addressing the conductive component first, followed by management of the sensorineural component. This may include:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Medical or surgical interventions for the conductive component</li>
                        <li>Hearing aids or cochlear implants for the sensorineural component</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                    <p className="mb-4">
                        Understanding the different types of hearing loss is crucial for proper diagnosis and treatment. If you suspect you may be experiencing hearing loss, it's important to consult with an audiologist or hearing specialist. They can perform comprehensive hearing tests to determine the type and degree of hearing loss you may be experiencing.
                    </p>
                    <p className="mb-4">
                        At Ralas Hearing Aid Clinic, we're committed to helping you maintain optimal hearing health. Our team of experienced professionals can provide expert diagnosis and recommend the most appropriate treatment options for your specific needs.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Take Action</h2>
                    <p className="mb-4">
                        Don't let hearing loss impact your quality of life. If you're concerned about your hearing, take the first step towards better hearing health today.
                    </p>
                    <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors inline-block">
                        Schedule a Hearing Test
                    </Link>
                </section>

                <section className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>The Benefits of Regular Hearing Tests</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">Discover why regular hearing tests are crucial for your overall health.</p>
                                <Link href="/resources/blog/benefits-of-hearing-tests" className="text-primary hover:underline">
                                    Read more
                                </Link>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>How to Choose the Right Hearing Aid</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">A comprehensive guide to selecting the perfect hearing aid for your needs.</p>
                                <Link href="/resources/blog/choosing-right-hearing-aid" className="text-primary hover:underline">
                                    Read more
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </article>
        </div>
    )
}

