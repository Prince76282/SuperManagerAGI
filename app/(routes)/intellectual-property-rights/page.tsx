import Link from "next/link";

export const metadata = {
  title: "Intellectual Property Rights | SuperManager AGI",
  description: "Our intellectual property rights policy explains ownership and usage rights.",
};

export default function IntellectualPropertyRights() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Intellectual Property Rights
          </h1>
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Ownership of SuperManager AGI</h2>
            <p className="text-gray-700 mb-6">
              SuperManager AGI and all of its content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by SuperManager, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Limited License</h2>
            <p className="text-gray-700 mb-6">
              We grant you a limited, non-exclusive, non-transferable, and revocable license to use SuperManager AGI in accordance with these terms. This license does not include the right to:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
              <li>Modify or adapt the platform or its content</li>
              <li>Reproduce the platform for commercial purposes</li>
              <li>Distribute, transmit, or display the platform publicly</li>
              <li>Remove or alter any proprietary notices or labels</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User-Generated Content</h2>
            <p className="text-gray-700 mb-6">
              You retain all intellectual property rights to any content you create and upload to SuperManager AGI ("User Content"). By uploading content to our platform, you grant us a worldwide, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, and distribute your content for the purposes of providing and improving our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Trademark Rights</h2>
            <p className="text-gray-700 mb-6">
              SuperManager, SuperManager AGI, and all related logos and names are trademarks of SuperManager and may not be used without express written permission. You may not use any SuperManager trademarks in connection with any product or service that is not authorized by SuperManager.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Permitted Uses of Trademarks</h2>
            <p className="text-gray-700 mb-6">
              You may use the SuperManager name and logo only in approved ways, such as:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
              <li>Accurately referring to SuperManager AGI in factual statements</li>
              <li>Using approved marketing materials with proper attribution</li>
              <li>As expressly authorized in writing by SuperManager</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Third-Party Content</h2>
            <p className="text-gray-700 mb-6">
              SuperManager AGI may contain content from third parties that is subject to separate intellectual property rights. All such content is used with permission or under applicable law. You agree to respect all third-party intellectual property rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Copyright Notices</h2>
            <p className="text-gray-700 mb-6">
              © 2024 SuperManager. All rights reserved. Unauthorized use or reproduction of any content from SuperManager AGI is prohibited.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Infringement Reporting</h2>
            <p className="text-gray-700 mb-6">
              If you believe that your intellectual property rights have been infringed upon, please contact us at legal@supermanager-agi.com with detailed information about the alleged infringement.
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
