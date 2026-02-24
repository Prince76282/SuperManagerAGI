import Link from "next/link";

export const metadata = {
  title: "Terms of Service | SuperManager AGI",
  description: "Our terms of service outline the rules and regulations for using SuperManager AGI.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Page Section */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="container mx-auto max-w-4xl">

          {/* Header */}
          <header>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-8">Last updated: January 2024</p>
          </header>

          {/* Content */}
          <article className="prose prose-lg max-w-none">

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700 mb-6">
                By accessing and using SuperManager AGI, you accept and agree to be bound by and abide by the terms and conditions outlined in this Terms of Service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                2. Use License
              </h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on SuperManager AGI for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>

              <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the platform</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transmit the materials to anyone or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                3. Disclaimer
              </h2>
              <p className="text-gray-700 mb-6">
                The materials on SuperManager AGI are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                4. Limitations
              </h2>
              <p className="text-gray-700 mb-6">
                In no event shall SuperManager AGI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SuperManager AGI.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="text-gray-700 mb-6">
                The materials appearing on SuperManager AGI could include technical, typographical, or photographic errors. SuperManager AGI does not warrant that any of the materials on the platform are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                6. Links
              </h2>
              <p className="text-gray-700 mb-6">
                SuperManager AGI has not reviewed all of the sites linked to its platform and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SuperManager AGI of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                7. Modifications
              </h2>
              <p className="text-gray-700 mb-6">
                SuperManager AGI may revise these Terms of Service for the platform at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                8. Governing Law
              </h2>
              <p className="text-gray-700 mb-6">
                These Terms of Service and any separate agreements we provide to clarify our Services are governed by and construed in accordance with the laws of the jurisdiction in which the Company is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

          </article>

       
          
        </div>
      </section>
    </main>
  );
}