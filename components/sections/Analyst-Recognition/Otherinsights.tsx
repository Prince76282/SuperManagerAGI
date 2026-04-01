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
      "SuperManagerAGI is the only enterprise AI platform that eliminates the network boundary  delivering agent-to-data connections at 2–15ms while competitors route through API middleware at 80–400ms.",
    body: "Every major agentic platform  Claude MCP, Manus, Microsoft Copilot  shares a foundational assumption: that agents must cross a network boundary to reach data. SuperManagerAGI's Agentic Data Architecture (ADA) breaks that assumption entirely. By establishing persistent, in-process connections to PostgreSQL, MongoDB, Redis, and vector databases, ADA removes the round-trip overhead that makes real-time enterprise orchestration impractical at scale. The result is not an incremental improvement  it is a structural advantage that compounds across every agent interaction, every workflow, and every concurrent user session.",
    cta: {
      label: "Explore the Architecture",
      href: "/architecture-guides",
    },
    mainImageSrc: "/Image/ai-maannger.jpg",
    mainImageAlt: "ADA Network Boundary Elimination Diagram",
  },
  {
    id: "forrester",
    badge: "Forrester Wave™ · 2024",
    heading:
      "SuperManagerAGI named a Leader in The Forrester Wave™ for Conversational AI  scoring highest in enterprise orchestration, model governance, and deployment scalability.",
    body: "Forrester's evaluation assessed 14 enterprise AI vendors across 28 criteria spanning current offering, strategy, and market presence. SuperManagerAGI received the highest scores in agent orchestration architecture, enterprise security and compliance controls, and multi-model governance  areas Forrester identified as the primary differentiators for large-scale AI operations in regulated industries. The Wave report specifically cited the Beehive Controller Agent's provably correct task decomposition, the ADA layer's latency profile, and the platform's native RBAC integration as technical capabilities not matched by any other vendor evaluated in the cohort.",
    cta: {
      label: "Research Report",
      href: "/research-reports",
    },
    mainImageSrc: "/Image/decline-rise.jpg",
    mainImageAlt: "Forrester Wave Leader Badge 2024",
  },
];
export default function OtherInsights() {
  return (
    <section className="relative bg-white min-h-screen px-6 md:px-12 lg:px-16 py-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[600px] h-[600px] bg-[#8A84FF]/20 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
              Why SuperManager AGI{" "}
              <span className="text-[#625FD0] italic">
                Is Recognised
              </span>
            </h2>
          </div>

          <p className="text-gray-500 text-base max-w-sm leading-relaxed">
            Explore analyst reports and recognitions highlighting how
            SuperManagerAGI is redefining enterprise AI automation.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8">
          {insights.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-gray-200 bg-white hover:border-[#625FD0]/30 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT CONTENT */}
                <div className="flex flex-col justify-between gap-8 p-8 md:p-10">

                  <div className="flex flex-col gap-5">

                    {/* Badge */}
                    <span className="w-fit text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-[#625FD0]/10 text-[#625FD0]">
                      {item.badge}
                    </span>

                    {/* Heading */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
                      {item.heading}
                    </h3>

                    {/* Body */}
                    {item.body && (
                      <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                        {item.body}
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  {item.cta && (
                    <Link
                      href={item.cta.href}
                     
                      
                      className="group/btn relative inline-flex items-center gap-2 rounded-xl bg-[#625FD0] px-5 py-2.5 text-white font-medium shadow-md transition-all duration-300 hover:scale-[1.05] hover:shadow-lg"
                    >
                      <span className="relative z-10">
                        {item.cta.label}
                      </span>
                      <ArrowUpRight size={16} className="relative z-10" />

                      {/* Glow */}
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#625FD0] to-[#8A84FF] opacity-0 group-hover/btn:opacity-20 blur transition duration-300"></span>
                    </Link>
                  )}
                </div>

                {/* IMAGE */}
                <div className="flex items-center justify-center bg-gray-50 p-8">
                  <div className="rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-105">
                    <Image
                      src={item.mainImageSrc}
                      alt={item.mainImageAlt}
                      width={420}
                      height={260}
                      className="object-contain"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}