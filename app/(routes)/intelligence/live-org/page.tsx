"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function LiveOrganizationIntelligencePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/intelligence"
            className="inline-flex items-center gap-2 text-[#625FD0]  mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Intelligence
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">
            Live Organization Intelligence
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Real-time visibility into every aspect of your operations
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {[
                  "Real-time data dashboards",
                  "Cross-functional insights",
                  "Automated alerts",
                  "Trend analysis",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#625FD0] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="font-bold text-gray-900 mb-4">
                Real-Time Metrics
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Data Latency:</strong> Less than 1 second
                </p>
                <p>
                  <strong>Accuracy:</strong> 99.8%
                </p>
                <p>
                  <strong>Systems Connected:</strong> 50+
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Executive dashboards",
              "Operations monitoring",
              "Risk detection",
              "Performance tracking",
            ].map((useCase, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 ">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#625FD0] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Get Live Insights?
          </h2>
          <Link
            href="/get-in-touch"
            className="inline-block bg-white text-[#625FD0] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition"
          >
            Schedule Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
