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
    title: 'Hearing Health Blog | Ralas Hearing Aid Clinic',
    description: 'Stay informed about hearing health with the latest articles from Ralas Hearing Aid Clinic.',
}

const blogPosts = [
    {
        title: "Understanding Different Types of Hearing Loss",
        excerpt: "Learn about the various types of hearing loss and their causes.",
        date: "2023-05-15",
        slug: "types-of-hearing-loss"
    },
    {
        title: "The Benefits of Regular Hearing Tests",
        excerpt: "Discover why regular hearing tests are crucial for your overall health.",
        date: "2023-05-01",
        slug: "benefits-of-hearing-tests"
    },
    {
        title: "How to Choose the Right Hearing Aid",
        excerpt: "A comprehensive guide to selecting the perfect hearing aid for your needs.",
        date: "2023-04-20",
        slug: "choosing-right-hearing-aid"
    },
    // Add more blog posts as needed
]

export default function BlogPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Blog</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold mb-6">Hearing Health Blog</h1>

            <p className="text-lg mb-8">
                Stay informed about the latest in hearing health, technology, and care with our expert articles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                            <p className="mb-4">{post.excerpt}</p>
                            <Link href={`/resources/blog/${post.slug}`} className="text-primary hover:underline">
                                Read more
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

