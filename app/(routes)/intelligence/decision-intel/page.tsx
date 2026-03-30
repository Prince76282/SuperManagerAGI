"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DecisionIntelligencePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-violet-50 py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/intelligence"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">
            Decision Intelligence
          </h1>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-700">
            AI-powered scenario analysis and optimization for strategic business
            decisions.
          </p>
        </div>
      </section>
    </div>
  );
}
