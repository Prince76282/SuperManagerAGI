import Link from "next/link";

export const metadata = {
  title: "Private Deployment | SuperManager AGI",
  description: "Deploy SuperManager AGI within your own infrastructure with complete control and security.",
};

export default function PrivateDeployment() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Private Deployment
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Deploy SuperManager AGI directly within your AWS, Azure, GCP, or on-premises infrastructure with complete data sovereignty and control.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Full Data Sovereignty:</strong> Your data remains within your infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Complete Control:</strong> Manage your own security, compliance, and governance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Enterprise Integration:</strong> Seamless integration with your existing systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Maximum Security:</strong> End-to-end encryption and network isolation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Compliance Ready:</strong> Meet regulatory requirements (HIPAA, SOC2, ISO27001)</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supported Platforms</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Amazon Web Services (AWS)</li>
                <li>• Microsoft Azure</li>
                <li>• Google Cloud Platform (GCP)</li>
                <li>• Kubernetes (K8s)</li>
                <li>• On-Premises (Private Data Centers)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Features</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• VPC/Private Network Isolation</li>
                <li>• End-to-End Encryption</li>
                <li>• SSO & SAML Integration</li>
                <li>• Role-Based Access Control (RBAC)</li>
                <li>• Comprehensive Audit Logging</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deployment Process</h2>
            <ol className="space-y-3 text-gray-700 list-decimal pl-8">
              <li>Consultation with our deployment team to assess requirements</li>
              <li>Infrastructure setup and configuration</li>
              <li>Installation and integration with your systems</li>
              <li>Security validation and compliance checks</li>
              <li>Testing and user acceptance</li>
              <li>Production deployment and support</li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-in-touch/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Request Deployment Consultation
            </Link>
            <Link
              href="/learnmore/"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
