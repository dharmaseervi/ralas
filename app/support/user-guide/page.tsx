export default function UserGuidePage() {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">User Guide</h1>
        <p className="text-lg text-gray-700 mb-4">
          Follow these instructions to make the most of your hearing aid.
        </p>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            <strong>Charging:</strong> Ensure your hearing aid is fully charged before use. Use the provided charger.
          </li>
          <li>
            <strong>Fitting:</strong> Adjust the hearing aid snugly behind your ear for comfort and optimal performance.
          </li>
          <li>
            <strong>Cleaning:</strong> Use a soft cloth to clean your hearing aid regularly. Avoid water or cleaning agents.
          </li>
          <li>
            <strong>Using the App:</strong> Download the RALAS app to control your hearing aid settings remotely.
          </li>
        </ol>
      </div>
    );
  }
  