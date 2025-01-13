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
  title: 'Behind-the-Ear Hearing Aids | Ralas',
  description: 'Explore our powerful behind-the-ear hearing aid solutions.',
}

export default function BehindTheEarAidsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
             <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Behind-the-ear-aids</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

      <h1 className="text-4xl font-bold mb-6">Behind-the-Ear (BTE) Hearing Aids</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Behind-the-Ear Hearing Aids?</h2>
        <p className="text-lg mb-4">
          Behind-the-ear hearing aids are a popular and versatile choice for people with various degrees of hearing loss, from mild to profound. These devices sit comfortably behind the ear and are connected to a custom earpiece that fits in the ear canal.
        </p>
        <Image src="/bte-2.png" alt="Behind-the-Ear Hearing Aid" width={600} height={400} className="rounded-lg mb-4" />
        <p className="text-lg mb-4">
          BTE hearing aids offer several advantages:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Suitable for all ages, including children</li>
          <li>Powerful enough for severe to profound hearing loss</li>
          <li>Easier to handle and clean than smaller devices</li>
          <li>More room for advanced features and larger batteries</li>
          <li>Often more durable than other types of hearing aids</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How Do Behind-the-Ear Hearing Aids Work?</h2>
        <p className="text-lg mb-4">
          BTE hearing aids work by capturing and amplifying sound before delivering it to your ear. Here's the process:
        </p>
        <ol className="list-decimal list-inside text-lg mb-4">
          <li>A microphone on the part behind the ear picks up sounds</li>
          <li>The sound is converted into a digital signal</li>
          <li>An amplifier increases the strength of the signal</li>
          <li>The amplified signal is converted back into sound</li>
          <li>The sound travels through a thin tube to an earmold in your ear canal</li>
        </ol>
        <Image src="/bte.png" alt="How Behind-the-Ear Hearing Aids Work" width={800} height={400} className="rounded-lg mb-4" />
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
              <p>The Signia Pure Charge&Go AX offers advanced sound processing, rechargeable batteries, and Bluetooth connectivity for a seamless listening experience.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Phonak Naída Paradise P-UP</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/phonak-logo.svg" alt="Phonak Logo" width={200} height={100} className="mb-4" />
              <p>The Phonak Naída Paradise P-UP is a powerful BTE aid designed for severe to profound hearing loss, featuring excellent sound quality and connectivity options.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Is a Behind-the-Ear Hearing Aid Right for You?</h2>
        <p className="text-lg mb-4">
          Behind-the-ear hearing aids might be the best choice if:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>You have moderate to profound hearing loss</li>
          <li>You need a powerful hearing aid with advanced features</li>
          <li>You prefer a device that's easy to handle and maintain</li>
          <li>You want a versatile option that can accommodate changing hearing needs</li>
        </ul>
        <p className="text-lg">
          To determine if a behind-the-ear hearing aid is the most suitable option for your specific hearing needs, we recommend scheduling a consultation with one of our experienced audiologists.
        </p>
      </section>
    </div>
  )
}
