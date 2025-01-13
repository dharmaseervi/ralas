export default function ReturnsPage() {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Returns</h1>
        <p className="text-lg text-gray-700 mb-4">
          If you're not satisfied with your purchase, you can request a return within 30 days of delivery.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Return Policy:</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>Items must be in their original condition and packaging.</li>
          <li>Proof of purchase is required for all returns.</li>
          <li>Shipping fees are non-refundable.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          To initiate a return, please contact our team at 
          <a href="mailto:returns@ralas.com" className="text-blue-600 hover:underline"> returns@ralas.com</a>.
        </p>
      </div>
    );
  }
  