"use client";

import Link from "next/link";

export default function AIWorkforceGuidesPage() {
  const data = {
    eyebrow: "SuperManage AGI",
    title: "AI Workforce Guides",
    subtitle:
      "Design AI systems that work like real teams  structured, collaborative, and governed.",

    description:
      "SuperManage AGI introduces a workforce layer where AI agents operate alongside humans with clear roles, ownership, and accountability  not as isolated automations.",

    insights: [
      {
        title: "Workforce > Automation",
        desc: "Move from single-task scripts to coordinated AI teams.",
      },
      {
        title: "Human Authority",
        desc: "AI executes, humans define policy and control.",
      },
      {
        title: "Role-Based Agents",
        desc: "Specialization improves clarity and reliability.",
      },
      {
        title: "Progressive Scale",
        desc: "Expand only after trust and performance are proven.",
      },
    ],

    model: [
      "Intent → Task creation",
      "Task → Agent assignment",
      "Agent → Execution",
      "Execution → Validation",
      "Validation → Human approval (if needed)",
      "Approval → System commit",
    ],

    roles: [
      {
        role: "Coordinator Agent",
        desc: "Breaks down tasks and assigns work across agents.",
      },
      {
        role: "Execution Agent",
        desc: "Performs actions across systems and workflows.",
      },
      {
        role: "Validation Agent",
        desc: "Checks correctness, compliance, and outcomes.",
      },
      {
        role: "Human Operator",
        desc: "Approves, overrides, and governs the system.",
      },
    ],

    steps: [
      "Start with one high-impact workflow",
      "Define human ownership and escalation",
      "Deploy specialized agents",
      "Measure trust + output together",
      "Expand workforce coverage gradually",
    ],
  };

  return (
    <div className="bg-white text-black min-h-screen">

      {/* HERO */}
      <section className="px-6 md:px-12 lg:px-24 py-24 ">
        <div className="max-w-6xl mx-auto">

          <p className="text-[#625FD0] uppercase tracking-widest text-sm font-semibold">
            {data.eyebrow}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            {data.title}
          </h1>

          <p className="text-xl text-gray-700 mt-6 max-w-3xl">
            {data.subtitle}
          </p>

          <p className="text-gray-500 mt-4 max-w-2xl">
            {data.description}
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="/guides/ai-workforce"
              className="bg-[#625FD0] text-white px-6 py-3 rounded-lg font-medium"
            >
              Explore Guide
            </Link>
            <Link
              href="/get-in-touch"
              className="border px-6 py-3 rounded-lg"
            >
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>

      {/* INSIGHT GRID */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          {data.insights.map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 hover:border-[#625FD0] transition"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-3">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* SYSTEM FLOW (HORIZONTAL VISUAL STYLE) */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-12">
            AI Workforce Execution Model
          </h2>

          <div className="flex flex-wrap gap-4 items-center">
            {data.model.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="px-4 py-2 border rounded-lg text-sm">
                  {step}
                </div>
                {i !== data.model.length - 1 && (
                  <div className="text-[#625FD0]">→</div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ROLES */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-12">
            Workforce Roles
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {data.roles.map((r, i) => (
              <div key={i} className="border p-6 rounded-xl">
                <h3 className="font-semibold text-lg">{r.role}</h3>
                <p className="text-gray-600 mt-3 text-sm">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* IMPLEMENTATION STEPS */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-semibold mb-10">
            Implementation Path
          </h2>

          <ol className="space-y-6">
            {data.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-[#625FD0] font-bold">
                  {i + 1}.
                </span>
                <p className="text-gray-700">{step}</p>
              </li>
            ))}
          </ol>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 text-center ">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-semibold">
            Build your AI workforce with control
          </h2>

          <p className="text-gray-600 mt-4">
            Move beyond automation and design a system where AI and humans work together with clarity and accountability.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/guides/ai-workforce"
              className="bg-[#625FD0] text-white px-6 py-3 rounded-lg"
            >
              Start Building
            </Link>

            <Link
              href="/get-in-touch"
              className="border px-6 py-3 rounded-lg"
            >
              Contact Team
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}