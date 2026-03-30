"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function FinancialIntelligencePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/intelligence"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">
            Financial Intelligence
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Deep insights into financial operations and optimization
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <ul className="space-y-3">
                {[
                  "Revenue forecasting",
                  "Cost optimization",
                  "Budget planning",
                  "Financial anomaly detection",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-lg p-8">
              <h3 className="font-bold text-gray-900 mb-4">Impact Metrics</h3>
              <p className="text-gray-700 mb-2">
                <strong>Forecast Accuracy:</strong> 94%
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Cost Savings:</strong> Up to 30%
              </p>
              <p className="text-gray-700">
                <strong>Processing:</strong> Real-time
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
