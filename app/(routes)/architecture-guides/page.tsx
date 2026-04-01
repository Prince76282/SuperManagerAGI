"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Layers3,
  Radar,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
  Compass,
  GitBranch,
} from "lucide-react";

type SectionCard = {
  title: string;
  description: string;
};

type ArchitectureGuidesPageProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    intro?: string;
    highlights?: string[];
    stats?: Array<{ label: string; value: string }>;
    featuredCards?: Array<{
      kicker: string;
      title: string;
      href: string;
      description: string;
    }>;
    pillars?: Array<{ title: string; description: string }>;
  };
};

export default function ArchitectureGuidesPage({
  data = {
    eyebrow: "Architecture Guides",
    title: "Architecture Guides",
    description:
      "Learn how to structure the platform, data, intelligence, and control layers required to run AI natively across an enterprise.",
    intro:
      "This collection focuses on the system design choices behind reliable AI execution, from live data access and orchestration to governance, workspace supervision, and enterprise-scale rollout.",
    highlights: [
      "Map the full stack required for AI-native work beyond point tools.",
      "Understand how data, orchestration, and controls reinforce each other.",
      "Align architecture decisions with business outcomes and risk.",
    ],
    stats: [
      { label: "Viewpoint", value: "System-level" },
      { label: "Priority", value: "Production-ready" },
      { label: "Focus", value: "Governed AI" },
      { label: "Scope", value: "Platform-wide" },
    ],
    featuredCards: [
      {
        kicker: "Foundation",
        title: "Enterprise AI Architecture",
        href: "/guides/enterprise-ai",
        description: "Start with the full-stack view of enterprise AI systems.",
      },
      {
        kicker: "Data",
        title: "Agentic Data Architecture",
        href: "/intelligence/ada-architecture",
        description: "Understand how governed data supports intelligence.",
      },
      {
        kicker: "Execution",
        title: "Execution Engine Architecture",
        href: "/guides/execution-engine",
        description: "Learn how workflows execute safely across systems.",
      },
    ],
    pillars: [
      {
        title: "Architecture follows operating model",
        description:
          "Design depends on workflows, decisions, and control expectations.",
      },
      {
        title: "Data + execution must align",
        description: "Context and action must be tightly integrated.",
      },
      {
        title: "Governance in runtime",
        description: "Controls must scale with system usage.",
      },
      {
        title: "One platform > fragmented tools",
        description: "Reduce complexity with unified systems.",
      },
    ],
  },
}: ArchitectureGuidesPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0  opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1200px] px-6 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#625FD0]/10 px-4 py-2 text-sm font-semibold text-[#625FD0] border border-[#625FD0]/20">
              <Sparkles className="w-4 h-4" />
              {data.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl lg:text-6xl  tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {data.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              {data.description}
            </p>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              {data.intro}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.stats?.map((stat, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-md uppercase tracking-wider text-[#625FD0] font-semibold">
                  {stat.label}
                </p>
                <p className="mt-3 text-lg  text-gray-800">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl lg:text-5xl  text-gray-800 mb-6">
            Why this matters
          </h2>
          <div className="space-y-4">
            {data.highlights?.map((highlight, idx) => (
              <div key={idx} className="flex gap-3 items-start group">
                <div className="mt-1 h-5 w-5 rounded-full bg-[#625FD0]/10 flex items-center justify-center group-hover:bg-[#625FD0] transition-colors">
                  <span className="text-xs text-[#625FD0] group-hover:text-white transition-colors">
                    ✓
                  </span>
                </div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="text-3xl lg:text-5xl  text-gray-800 mb-8 text-center">
          Suggested reading path
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.featuredCards?.map((card, idx) => {
            const icons = [Compass, GitBranch, Layers3];
            const Icon = icons[idx % icons.length];
            return (
              <Link
                key={idx}
                href={card.href}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#625FD0]/10 text-[#625FD0] group-hover:bg-[#625FD0] group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm text-[#625FD0] uppercase font-semibold">
                    {card.kicker}
                  </p>
                  <p className="mt-2 text-xl  text-gray-800 group-hover:text-[#625FD0] transition-colors">
                    {card.title}
                  </p>
                  <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
                  <div className="mt-4 flex items-center text-lg gap-2 text-[#625FD0] font-medium">
                    Read
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 bg-gray-50 rounded-3xl my-8">
        <h1 className="text-3xl lg:text-5xl  text-gray-800 mb-8 text-center">
          Core Architecture Principles
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {data.pillars?.map((pillar, idx) => {
            const icons = [Zap, TrendingUp, Shield, BarChart3];
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#625FD0]/10 text-[#625FD0] flex items-center justify-center group-hover:bg-[#625FD0] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {pillar.title}
                    </p>
                    <p className="mt-2 text-gray-600 text-md">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl  p-10 text-center shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/20 to-transparent opacity-20" />
          <h2 className="relative text-2xl md:text-3xl  text-gray-900">
            Choose an architecture that scales
          </h2>
          <p className="relative mt-4 text-gray-600 max-w-lg mx-auto">
            Good architecture ensures trustworthy intelligence and safe execution.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/enterprise-ai"
              className="inline-flex items-center gap-2 rounded-full bg-[#625FD0] px-6 py-3 font-medium text-white shadow-lg shadow-[#625FD0]/20 hover:bg-[#4f4cb0] transition"
            >
              Explore Architecture
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/get-in-touch"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#625FD0] bg-white px-6 py-3 font-medium text-[#625FD0] backdrop-blur-sm hover:bg-[#625FD0] hover:text-white transition"
            >
              Talk to an architect
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}