"use client";

import Link from "next/link";

const data = {
  eyebrow: "Rollout Playbook",
  title: "Implementation Guide",
  description:
    "Follow a practical path for rolling out AI across data, workflows, and teams.",
  intro:
    "Designed for teams moving from interest to deployment with clarity and control.",
  highlights: [
    "Start with a high-impact workflow",
    "Build trust before scaling",
    "Validate outcomes at every phase",
  ],
  stats: [
    { label: "rollout style", value: "Phased" },
    { label: "first move", value: "Pilot-led" },
    { label: "control model", value: "Human-supervised" },
    { label: "scaling path", value: "Proof-driven" },
  ],
  featured: [
    {
      phase: "Phase 1",
      title: "Data & Intelligence",
      desc: "Build foundation systems and governance.",
    },
    {
      phase: "Phase 2",
      title: "Execution Layer",
      desc: "Add workflows, approvals, control.",
    },
    {
      phase: "Phase 3",
      title: "Scale Across Teams",
      desc: "Expand proven workflows.",
    },
  ],
  pillars: [
    {
      title: "Right first workflow",
      desc: "Solve real business friction first.",
    },
    {
      title: "Align stakeholders",
      desc: "Business + tech alignment early.",
    },
    {
      title: "Trust mechanisms",
      desc: "Approvals, logs, visibility.",
    },
    {
      title: "Scale proven systems",
      desc: "Expand only after validation.",
    },
  ],
  workflow: [
    {
      title: "Pick one problem",
      desc: "Choose high-friction workflow.",
    },
    {
      title: "Setup platform",
      desc: "Permissions, systems, controls.",
    },
    {
      title: "Run pilot",
      desc: "Supervised rollout.",
    },
    {
      title: "Expand",
      desc: "Scale validated workflows.",
    },
  ],
  faq: [
    {
      q: "Biggest mistake?",
      a: "Automating too much too early.",
    },
    {
      q: "Who owns rollout?",
      a: "Shared ownership across business, tech, governance.",
    },
  ],
};

export default function ImplementationGuide() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* HERO */}
        <section className="text-center mb-20">
          <p className="text-[#625FD0] uppercase font-semibold tracking-wide">
            {data.eyebrow}
          </p>

          <h1 className="text-5xl font-bold mt-4">{data.title}</h1>

          <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
            {data.description}
          </p>

          <p className="text-gray-500 mt-3">{data.intro}</p>
        </section>

        {/* HIGHLIGHTS */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          {data.highlights.map((h, i) => (
            <div key={i} className="border p-6 rounded-xl">
              {h}
            </div>
          ))}
        </section>

        {/* STATS */}
        <section className="grid md:grid-cols-4 gap-6 mb-20">
          {data.stats.map((s, i) => (
            <div key={i} className="border rounded-xl p-6 text-center">
              <p className="text-gray-500 text-sm uppercase">{s.label}</p>
              <p className="text-[#625FD0] font-semibold mt-2 text-lg">
                {s.value}
              </p>
            </div>
          ))}
        </section>

        {/* FEATURED PHASES */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10">
            Recommended Rollout Sequence
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {data.featured.map((f, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 hover:shadow-md transition"
              >
                <p className="text-sm text-[#625FD0] font-semibold">
                  {f.phase}
                </p>
                <h3 className="text-xl font-semibold mt-2">{f.title}</h3>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PILLARS */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10">Core Principles</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {data.pillars.map((p, i) => (
              <div key={i} className="border p-6 rounded-xl">
                <h3 className="text-[#625FD0] font-semibold">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10">Step-by-Step Rollout</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {data.workflow.map((w, i) => (
              <div key={i} className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">Step {i + 1}</p>
                <h3 className="font-semibold mt-2">{w.title}</h3>
                <p className="text-gray-600 mt-2">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10">FAQ</h2>

          <div className="space-y-6">
            {data.faq.map((f, i) => (
              <div key={i} className="border p-6 rounded-xl">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="text-gray-600 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F8F7FF] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-semibold">
            Move from exploration to execution
          </h2>

          <p className="text-gray-600 mt-4">
            Align your team and launch your first AI workflow with confidence.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="/get-in-touch"
              className="bg-[#625FD0] text-white px-6 py-3 rounded-lg"
            >
              Book Workshop
            </Link>

            <Link
              href="/roi-calculator"
              className="border px-6 py-3 rounded-lg"
            >
              View ROI
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
