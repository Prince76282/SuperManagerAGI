"use client";

import Link from "next/link";

const data = {
  eyebrow: "Rollout Playbook",
  title: "Implementation Guide",
  description:
    "A complete, structured approach to successfully implement AI across your organization  from strategy to execution and scaling.",
  intro:
    "This guide is built for modern teams who want to move beyond experimentation and deploy AI systems that actually deliver measurable business value.",

  deepIntro:
    "AI adoption is not just a technical upgrade  it is an operational transformation. Organizations that succeed are the ones that treat implementation as a phased journey, balancing speed with control, and innovation with governance. This playbook walks you through that journey step by step.",

  highlights: [
    "Identify high ROI workflows before building anything",
    "Design with human-in-the-loop from day one",
    "Measure impact continuously, not at the end",
  ],

  stats: [
    { label: "Rollout Strategy", value: "Phased Execution" },
    { label: "Initial Approach", value: "Pilot First" },
    { label: "Risk Control", value: "Human Supervision" },
    { label: "Scaling Logic", value: "Proof Based" },
  ],

  featured: [
    {
      phase: "Phase 01",
      title: "Foundation & Data Layer",
      desc: "Set up structured data pipelines, define governance, and ensure system reliability before automation.",
      long:
        "This phase focuses on building the backbone of your AI system. Without clean data, clear ownership, and governance, automation will fail at scale.",
    },
    {
      phase: "Phase 02",
      title: "Workflow Automation",
      desc: "Introduce AI into real workflows with approvals, monitoring, and fallback systems.",
      long:
        "Instead of automating everything, focus on one critical workflow. Add visibility, logs, and checkpoints to ensure trust and reliability.",
    },
    {
      phase: "Phase 03",
      title: "Scale & Expansion",
      desc: "Expand successful workflows across teams and departments.",
      long:
        "Once validated, replicate systems across similar workflows. Standardization becomes key in this phase.",
    },
  ],

  pillars: [
    {
      title: "Start with Impact",
      desc: "Focus on solving real business problems, not experimenting with tools.",
    },
    {
      title: "Cross-Team Alignment",
      desc: "Ensure business, product, and engineering teams are aligned early.",
    },
    {
      title: "Built-in Trust",
      desc: "Use approvals, logs, and transparency to build confidence.",
    },
    {
      title: "Scale with Proof",
      desc: "Only scale what has already delivered measurable success.",
    },
  ],

  workflow: [
    {
      title: "Problem Selection",
      desc: "Identify a high-friction, repetitive workflow with measurable ROI.",
    },
    {
      title: "System Setup",
      desc: "Configure tools, permissions, integrations, and monitoring.",
    },
    {
      title: "Pilot Execution",
      desc: "Run controlled deployment with human supervision.",
    },
    {
      title: "Optimization",
      desc: "Refine based on feedback, edge cases, and failures.",
    },
    {
      title: "Scale",
      desc: "Expand to similar workflows and teams.",
    },
  ],

  faq: [
    {
      q: "What is the biggest mistake companies make?",
      a:
        "Trying to automate everything at once instead of focusing on a single high-impact workflow.",
    },
    {
      q: "Who should own AI implementation?",
      a:
        "It should be a shared responsibility between business leaders, technical teams, and governance stakeholders.",
    },
    {
      q: "How long does implementation take?",
      a:
        "A strong pilot can be executed within weeks, but full-scale adoption is an ongoing process.",
    },
  ],
};

export default function ImplementationGuide() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-16">

        {/* HERO */}
        <section className="mb-24">
          <p className="text-[#625FD0] uppercase tracking-wider text-sm">
            {data.eyebrow}
          </p>

          <h1 className="text-6xl  mt-4 leading-tight max-w-4xl">
            {data.title}
          </h1>

          <p className="text-gray-700 mt-6 max-w-2xl">
            {data.description}
          </p>

          <p className="text-gray-500 mt-4 max-w-3xl leading-relaxed">
            {data.deepIntro}
          </p>
        </section>

        {/* HIGHLIGHTS - NEW CARD STYLE */}
        <section className="grid md:grid-cols-3 gap-6 mb-24">
          {data.highlights.map((h, i) => (
            <div
              key={i}
              className="bg-[#F8F7FF] p-8 rounded-2xl border border-[#EDEBFF] hover:shadow-lg transition"
            >
              <p className="text-lg font-medium">{h}</p>
            </div>
          ))}
        </section>

        {/* STATS - MODERN */}
        <section className="grid md:grid-cols-4 gap-6 mb-24">
          {data.stats.map((s, i) => (
            <div
              key={i}
              className="bg-black text-white rounded-2xl p-6 text-center"
            >
              <p className="text-xs uppercase opacity-70">{s.label}</p>
              <p className="mt-3 text-lg font-semibold">{s.value}</p>
            </div>
          ))}
        </section>

        {/* PHASES - TIMELINE STYLE */}
        <section className="mb-24">
          <h2 className="text-4xl font-semibold mb-12">
            Implementation Roadmap
          </h2>

          <div className="space-y-8">
            {data.featured.map((f, i) => (
              <div
                key={i}
                className="border-l-4 border-[#625FD0] pl-6 py-4"
              >
                <p className="text-sm text-[#625FD0]">{f.phase}</p>
                <h3 className="text-2xl mt-2 font-semibold">
                  {f.title}
                </h3>
                <p className="text-gray-600 mt-2">{f.desc}</p>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                  {f.long}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PRINCIPLES - GRID */}
        <section className="mb-24">
          <h2 className="text-4xl font-semibold mb-12">
            Core Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {data.pillars.map((p, i) => (
              <div key={i} className="space-y-2">
                <p className="text-xl text-[#625FD0]">
                  {p.title}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW - STEPS UI */}
        <section className="mb-24">
          <h2 className="text-4xl font-semibold mb-12">
            Execution Steps
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {data.workflow.map((w, i) => (
              <div
                key={i}
                className="relative border rounded-2xl p-6 hover:shadow-md"
              >
                <div className="absolute -top-3 left-4 bg-[#625FD0] text-white text-xs px-3 py-1 rounded-full">
                  Step {i + 1}
                </div>
                <p className="mt-4 text-[18px] ">{w.title}</p>
                <p className="text-gray-600 mt-2 text-sm">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-24">
          <h2 className="text-4xl  mb-12">FAQ</h2>

          <div className="space-y-6">
            {data.faq.map((f, i) => (
              <div
                key={i}
                className="border-b pb-4"
              >
                <p className=" text-[18px]">{f.q}</p>
                <p className="text-gray-600 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#625FD0] text-white rounded-3xl p-16 text-center">
          <h2 className="text-4xl font-semibold">
            Ready to implement AI the right way?
          </h2>

          <p className="mt-4 opacity-90 max-w-2xl mx-auto">
            Start with a focused pilot, align your team, and scale with
            confidence using a proven framework.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/get-in-touch"
              className="bg-white text-black px-6 py-3 rounded-lg"
            >
              Book Workshop
            </Link>

            <Link
              href="/roi-calculator"
              className="border border-white px-6 py-3 rounded-lg"
            >
              View ROI
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}