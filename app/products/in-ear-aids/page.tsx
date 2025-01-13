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
    title: 'In-Ear Hearing Aids | Ralas',
    description: 'Discover our range of discreet and comfortable in-ear hearing aids.',
}

export default function InEarAidsPage() {
    return (
        <div className="container mx-auto py-12 px-4">

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>in-ear-aids</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>


            <h1 className="text-4xl font-bold mb-6 mt-4">In-Ear Hearing Aids</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Why Choose In-Ear Hearing Aids?</h2>
                <p className="text-lg mb-4">
                    In-ear hearing aids are an excellent choice for those seeking a discreet and comfortable solution to hearing loss. These small devices fit snugly inside the ear canal, making them nearly invisible to others.
                </p>
                <Image src="/in-ear-2.jpeg" alt="In-Ear Hearing Aid" width={300} height={300} className="rounded-lg mb-4" />
                <p className="text-lg mb-4">
                    They are ideal for mild to moderate hearing loss and offer several benefits:
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li>Discreet and less noticeable</li>
                    <li>Custom-fit for comfort</li>
                    <li>Reduced wind noise</li>
                    <li>Excellent sound quality</li>
                    <li>Easy to use with phones and other audio devices</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">How Do In-Ear Hearing Aids Work?</h2>
                <p className="text-lg mb-4">
                    In-ear hearing aids work by amplifying sound waves entering the ear canal. Here's a simple breakdown of the process:
                </p>
                <ol className="list-decimal list-inside text-lg mb-4">
                    <li>A tiny microphone picks up sounds from the environment</li>
                    <li>The sound is converted into a digital signal</li>
                    <li>The digital signal is processed and amplified based on the user's specific hearing loss profile</li>
                    <li>The amplified sound is sent to a small speaker in the ear canal</li>
                    <li>The user hears a clearer, amplified version of the original sound</li>
                </ol>
                <Image src="/in-the-ear-hearing-aid.jpg" alt="How In-Ear Hearing Aids Work" width={800} height={400} className="rounded-lg mb-4" />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Top Brands and Models</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signia Silk X</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image src="/Signia.png" alt="Signia Logo" width={200} height={100} className="mb-4" />
                            <p>The Signia Silk X is one of the smallest in-ear hearing aids available. It offers excellent sound quality and is ready to wear right out of the box.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Phonak Lyric</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image src="/phonak-logo.svg" alt="Phonak Logo" width={200} height={100} className="mb-4" />
                            <p>The Phonak Lyric is a unique, 100% invisible hearing aid that can be worn 24/7 for months at a time. It's placed deep in the ear canal by a hearing professional.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Is an In-Ear Hearing Aid Right for You?</h2>
                <p className="text-lg mb-4">
                    In-ear hearing aids are an excellent choice if:
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li>You have mild to moderate hearing loss</li>
                    <li>You want a discreet hearing solution</li>
                    <li>You don't have issues with earwax buildup</li>
                    <li>You have good dexterity for handling small devices</li>
                </ul>
                <p className="text-lg">
                    To determine if an in-ear hearing aid is the best option for you, we recommend scheduling a consultation with one of our hearing specialists. They can assess your specific needs and recommend the most suitable solution.
                </p>
            </section>
        </div>
    )
}

