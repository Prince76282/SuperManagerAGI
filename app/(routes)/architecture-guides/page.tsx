"use client";

import Link from "next/link";

type SectionCard = {
  title: string;
  description: string;
};

export default function ArchitectureGuidesPage() {
  const data = {
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
  };

  return (
    <div className="bg-white text-black min-h-screen px-6 md:px-12 lg:px-20 py-12">
      {/* HEADER */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-[#625FD0]  uppercase tracking-wide">
          {data.eyebrow}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-4">{data.title}</h1>

        <p className="text-gray-600 mt-6 text-lg">{data.description}</p>

        <p className="mt-4 text-gray-500">{data.intro}</p>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
        {data.stats.map((stat, i) => (
          <div
            key={i}
            className="border rounded-xl p-5 text-center hover:shadow-sm transition"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-lg  mt-2">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl  mb-6">Why this matters</h2>

        <ul className="space-y-4">
          {data.highlights.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-[#625FD0]">•</span>
              <p className="text-gray-700">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* FEATURED CARDS */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl  mb-8">Suggested reading path</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.featuredCards.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              className="border rounded-2xl p-6 hover:shadow-md transition group"
            >
              <p className="text-xs text-[#625FD0]  uppercase">{card.kicker}</p>

              <h3 className="text-lg  mt-2 group-hover:text-[#625FD0]">
                {card.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl  mb-8">Core Architecture Principles</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {data.pillars.map((pillar, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 hover:shadow-sm transition"
            >
              <h3 className=" text-lg">{pillar.title}</h3>
              <p className="text-gray-600 mt-3 text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center border rounded-2xl p-10">
        <h2 className="text-2xl ">Choose an architecture that scales</h2>

        <p className="text-gray-600 mt-4">
          Good architecture ensures trustworthy intelligence and safe execution.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/guides/enterprise-ai"
            className="bg-[#625FD0] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90"
          >
            Explore Architecture
          </Link>

          <Link
            href="/get-in-touch"
            className="border px-6 py-3 rounded-lg font-medium hover:bg-gray-50"
          >
            Talk to an architect
          </Link>
        </div>
      </section>
    </div>
  );
}
