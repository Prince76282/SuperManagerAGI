"use client";

import Link from "next/link";

type Section = {
  title: string;
  description?: string;
  items?: string[];
};

const data = {
  eyebrow: "Business Case",
  title: "ROI Calculator",
  description:
    "Estimate the operational and financial upside of shifting repetitive management work into autonomous AI workflows.",
  intro:
    "Use this page to build a directional business case before deeper deployment assessment.",
  highlights: [
    "Model labor value recovered",
    "Estimate payback timing",
    "Use as planning conversation starter",
  ],
  stats: [
    { label: "planning mode", value: "Directional" },
    { label: "decision speed", value: "Fast" },
    { label: "use case", value: "Budget-ready" },
    { label: "follow-up", value: "Pilot-focused" },
  ],
  pillars: [
    {
      title: "Recovered managerial capacity",
      description: "Reduce time spent on coordination and approvals.",
    },
    {
      title: "Execution quality improvements",
      description: "Faster response, better forecasting.",
    },
    {
      title: "Phased rollout",
      description: "Start small and expand.",
    },
    {
      title: "Prioritize realistically",
      description: "Use ROI to guide decisions.",
    },
  ],
  workflow: [
    {
      title: "Estimate effort",
      detail: "Identify time spent weekly.",
    },
    {
      title: "Apply savings",
      detail: "Use conservative estimates.",
    },
    {
      title: "Compare cost",
      detail: "Match against platform cost.",
    },
    {
      title: "Pilot scope",
      detail: "Define first workflow.",
    },
  ],
  faq: [
    {
      q: "Is this a finance model?",
      a: "No, it's a planning tool.",
    },
    {
      q: "What to include in deeper ROI?",
      a: "Cycle time, quality, revenue impact.",
    },
  ],
};

export default function ROICalculatorPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* HERO */}
        <section className="text-center mb-20">
          <p className="text-[#625FD0]  uppercase tracking-wide">
            {data.eyebrow}
          </p>

          <h1 className="text-5xl font-bold mt-4">{data.title}</h1>

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            {data.description}
          </p>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto">{data.intro}</p>
        </section>

        {/* HIGHLIGHTS */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          {data.highlights.map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 hover:shadow-md transition"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </section>

        {/* STATS */}
        <section className="grid md:grid-cols-4 gap-6 mb-20">
          {data.stats.map((stat, i) => (
            <div key={i} className="border rounded-xl p-6 text-center">
              <p className="text-sm text-gray-500 uppercase">{stat.label}</p>
              <p className="text-xl  mt-2 text-[#625FD0]">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* PILLARS */}
        <section className="mb-20">
          <h2 className="text-3xl  mb-10">Key Value Drivers</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {data.pillars.map((p, i) => (
              <div key={i} className="border rounded-xl p-6">
                <h3 className=" text-lg text-[#625FD0]">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="mb-20">
          <h2 className="text-3xl  mb-10">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {data.workflow.map((step, i) => (
              <div key={i} className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">Step {i + 1}</p>
                <h3 className=" mt-2">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl  mb-10">FAQ</h2>

          <div className="space-y-6">
            {data.faq.map((f, i) => (
              <div key={i} className="border rounded-xl p-6">
                <h3 className="">{f.q}</h3>
                <p className="text-gray-600 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center border rounded-2xl p-12 bg-[#F8F7FF]">
          <h2 className="text-3xl ">Start with the right pilot</h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Use ROI to identify the best starting workflow and validate quickly.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/get-in-touch"
              className="bg-[#625FD0] text-white px-6 py-3 rounded-lg"
            >
              Book Review
            </Link>

            <Link
              href="/implementation-guide"
              className="border px-6 py-3 rounded-lg"
            >
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
