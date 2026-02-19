import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | SuperManager AGI",
  description: "Our cookie policy explains how we use cookies and similar tracking technologies.",
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 mb-6">
              Cookies are small files placed on your device that contain information about your preferences and prior interactions with our platform. They help us understand how you use SuperManager AGI and allow us to personalize your experience.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of Cookies We Use</h2>
            <p className="text-gray-700 mb-4">We use the following categories of cookies:</p>
            <ul className="list-disc pl-8 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Essential Cookies:</strong> Required for the platform to function properly. These cannot be disabled.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors use our platform to improve functionality and user experience.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to track your activity across websites for targeted advertising and promotional purposes.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your choices and preferences to personalize your experience.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 mb-6">
              We also use third-party services that may place cookies on your device, including analytics providers and advertising partners. These third parties follow their own cookie policies and we recommend reviewing their policies directly.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Control Cookies</h2>
            <p className="text-gray-700 mb-4">You can control and manage cookies in various ways:</p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
              <li>Most web browsers allow you to refuse cookies or alert you when cookies are being sent</li>
              <li>You can configure your browser settings to restrict or block cookies</li>
              <li>You can clear cookies from your device at any time</li>
              <li>Some services offer opt-out mechanisms for their cookies</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Impact of Disabling Cookies</h2>
            <p className="text-gray-700 mb-6">
              Please note that if you disable or block cookies, some features of SuperManager AGI may not function properly, and you may not be able to access certain parts of our platform.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about our cookie practices, please contact us at support@supermanager-agi.com.
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
