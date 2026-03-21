"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Insight = {
  id: string;
  badge: string;
  heading: string;
  body?: string | null;
  cta?: {
    label: string;
    href: string;
  } | null;
  mainImageSrc: string;
  mainImageAlt: string;
};

const insights: Insight[] = [
  {
    id: "g2",
    badge: "The Only Architecture Without a Network Boundary",
    heading:
      "SuperManagerAGI recognized as a Leader on G2 for Enterprise AI Agents.",
    body: null,
    cta: null,
    mainImageSrc: "/Image/ai-maannger.jpg",
    mainImageAlt: "G2 Leader Badge",
  },
  {
    id: "forrester",
    badge: "Forrester Wave™ · 2024",
    heading:
      "SuperManagerAGI named a Leader in The Forrester Wave™ for Conversational AI.",
    body:
      "SuperManagerAGI was recognized as a Leader for its enterprise-grade AI agents, model orchestration platform, and scalable automation framework supporting enterprise AI operations.",
    cta: {
      label: "Access Report",
      href: "#",
    },
    mainImageSrc: "/Image/decline-rise.jpg",
    mainImageAlt: "Forrester Wave Badge",
  },
];

export default function OtherInsights() {
  return (
    <section className="bg-white min-h-screen px-6 md:px-12 lg:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-3xl lg:text-5xl tracking-tight text-gray-900">
              Why SuperManager AGI {" "}
              <span className="text-[#625FD0] italic">Is Recognised</span>
            </h2>
          </div>

          <p className="text-gray-500 text-base max-w-sm leading-relaxed">
            Explore analyst reports and recognitions highlighting how
            SuperManagerAGI is redefining enterprise AI automation.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {insights.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
                  <div className="flex flex-col gap-5">
                    
                    {/* Badge */}
                    <span className="text-sm font-medium text-indigo-600">
                      {item.badge}
                    </span>

                    {/* Heading */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
                      {item.heading}
                    </h3>

                    {/* Body */}
                    {item.body && (
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.body}
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  {item.cta && (
                    <Link
                      href={item.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition hover:bg-[#514bc4]"
                    >
                      {item.cta.label}
                      <ArrowUpRight size={16} />
                    </Link>
                  )}
                </div>

                {/* Image */}
                <div className="flex items-center justify-center bg-gray-50 p-8">
                  <Image
                    src={item.mainImageSrc}
                    alt={item.mainImageAlt}
                    width={420}
                    height={260}
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}