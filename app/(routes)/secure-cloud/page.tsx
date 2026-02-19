import Link from "next/link";

export const metadata = {
  title: "Secure Cloud Deployment | SuperManager AGI",
  description: "Enterprise-grade cloud deployment with maximum security, reliability, and performance.",
};

export default function SecureCloud() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Secure Cloud Deployment
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Enterprise-grade cloud infrastructure with dedicated tenant architecture, continuous monitoring, and SLA-backed reliability.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Cloud Deployment?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Fast Deployment:</strong> Get started in days, not months</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Enterprise Security:</strong> Multi-layered security with continuous monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Dedicated Tenancy:</strong> Your own isolated environment within our cloud</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>SLA Guarantee:</strong> 99.99% uptime guarantee with support</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Automatic Updates:</strong> Always have the latest features and security patches</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Disaster Recovery:</strong> Automated backups and failover</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security & Compliance</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• ISO 27001 Certified</li>
                <li>• SOC 2 Type II Compliant</li>
                <li>• HIPAA and GDPR Ready</li>
                <li>• Encrypted Data at Rest & In Transit</li>
                <li>• Regular Security Audits</li>
                <li>• Penetration Testing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Infrastructure Features</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Multi-Region Deployment</li>
                <li>• Auto-Scaling Infrastructure</li>
                <li>• Global CDN for Performance</li>
                <li>• DDoS Protection</li>
                <li>• Real-time Monitoring & Alerts</li>
                <li>• 24/7 Support Team</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Infrastructure</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Dedicated cloud environment</li>
                  <li>• Auto-scaling compute resources</li>
                  <li>• Managed database services</li>
                  <li>• Backup and recovery</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 24/7 technical support</li>
                  <li>• Onboarding assistance</li>
                  <li>• Regular health checks</li>
                  <li>• Proactive maintenance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing Plans</h2>
            <p className="text-gray-700 mb-6">
              Cloud deployment pricing varies based on your usage, team size, and selected features. Contact our team for a customized quote tailored to your organization's needs.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Transparent, usage-based pricing</li>
              <li>• No hidden fees or surprise charges</li>
              <li>• Volume discounts available</li>
              <li>• Flexible contract terms</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-in-touch/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Get a Quote
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
