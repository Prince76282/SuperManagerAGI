import Link from "next/link";

export const metadata = {
  title: "Acceptable Use Policy | SuperManager AGI",
  description: "Our acceptable use policy outlines the rules for using SuperManager AGI.",
};

export default function AcceptableUsePolicy() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Acceptable Use Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Scope</h2>
            <p className="text-gray-700 mb-6">
              This Acceptable Use Policy applies to all users of SuperManager AGI, including customers, employees, partners, and any other individuals accessing our platform. By using our services, you agree to comply with this policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Permitted Uses</h2>
            <p className="text-gray-700 mb-4">You agree to use SuperManager AGI only for:</p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
              <li>Legitimate business purposes consistent with your agreement with SuperManager AGI</li>
              <li>Project management and team collaboration activities</li>
              <li>Decision-making and data analysis related to your organization</li>
              <li>Any other purpose expressly authorized in writing by SuperManager AGI</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Prohibited Uses</h2>
            <p className="text-gray-700 mb-4">You agree NOT to use SuperManager AGI for any of the following purposes:</p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
              <li>Violating any applicable laws or regulations</li>
              <li>Transmitting malware, viruses, or harmful code</li>
              <li>Unauthorized access to or modification of the platform</li>
              <li>Extracting or harvesting data without authorization</li>
              <li>Harassing, threatening, or abusing other users</li>
              <li>Distributing spam, unsolicited marketing, or phishing attempts</li>
              <li>Compromising the security or integrity of the platform</li>
              <li>Reverse engineering or attempting to bypass security measures</li>
              <li>Using the platform for illegal activities or to facilitate illegal activities</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Responsibility</h2>
            <p className="text-gray-700 mb-6">
              You are responsible for ensuring that any data you input into SuperManager AGI does not violate intellectual property rights, privacy laws, or other legal protections. You warrant that you have the right to submit all data provided to our platform.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Security Measures</h2>
            <p className="text-gray-700 mb-6">
              You agree to maintain the confidentiality of your login credentials and not to share your account with unauthorized individuals. You are responsible for all activities that occur in your account.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Enforcement</h2>
            <p className="text-gray-700 mb-6">
              SuperManager AGI reserves the right to investigate violations of this policy and take appropriate action, including suspension or termination of account access, without notice if we determine that you have violated this policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Reporting Violations</h2>
            <p className="text-gray-700 mb-6">
              If you discover a violation of this Acceptable Use Policy, please report it immediately to our security team at security@supermanager-agi.com.
            </p>
          </div>

          <Link
            href="/"
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
