import Link from "next/link";

export default function FAQsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">FAQs</h1>
      <p className="text-lg text-gray-700 mb-4">
        Find answers to the most frequently asked questions about our products and services.
      </p>
      <ul className="space-y-4">
        <li>
          <h3 className="text-xl font-semibold">Q: What are the payment options available?</h3>
          <p className="text-gray-700">We accept credit cards, debit cards, UPI, and net banking.</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">Q: How do I book a consultation?</h3>
          <p className="text-gray-700">
            You can book a consultation through our <Link href="/contact" className="text-blue-600 hover:underline">Contact Page</Link>.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">Q: Do you provide international shipping?</h3>
          <p className="text-gray-700">Currently, we ship only within India.</p>
        </li>
      </ul>
    </div>
  );
}
