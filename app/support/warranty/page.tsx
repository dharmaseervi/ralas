export default function WarrantyPage() {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Warranty</h1>
        <p className="text-lg text-gray-700 mb-4">
          All RALAS hearing aids come with a 1-year limited warranty. The warranty covers:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>Defects in materials and workmanship</li>
          <li>Malfunctions under normal use conditions</li>
        </ul>
        <p className="text-gray-700 mb-4">
          To claim your warranty, please provide proof of purchase and contact our support team at 
          <a href="mailto:support@ralas.com" className="text-blue-600 hover:underline"> support@ralas.com</a>.
        </p>
        <p className="text-gray-700">
          Note: The warranty does not cover damage due to mishandling, unauthorized repairs, or wear and tear.
        </p>
      </div>
    );
  }
  