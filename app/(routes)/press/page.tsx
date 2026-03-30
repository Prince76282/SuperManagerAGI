"use client";

import Link from "next/link";

export default function PressPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* HERO */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <p className="text-[#625FD0] font-semibold uppercase tracking-wide">
          Press & Media
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
          The Operating System for Autonomous Work
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          SuperManager AGI is not another AI assistant. It is a new execution
          layer that replaces fragmented coordination, manual oversight, and
          reactive workflows with structured, governed, autonomous systems.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/aboutus"
            className="bg-[#625FD0] text-white px-6 py-3 rounded-lg"
          >
            About Company
          </Link>
          <Link href="/news-room" className="border px-6 py-3 rounded-lg">
            Newsroom
          </Link>
        </div>
      </section>

      {/* CATEGORY EXPLANATION */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-semibold mb-10">
          What Category Are We Creating?
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-[#625FD0]">
              From AI Tools → AI Systems
            </h3>
            <p className="text-gray-600 mt-3">
              Most AI tools assist humans. SuperManager AGI replaces entire
              coordination layers by executing workflows across systems with
              accountability, evidence, and control.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#625FD0]">
              From Prompts → Outcomes
            </h3>
            <p className="text-gray-600 mt-3">
              Instead of generating answers, the platform turns intent into
              execution — triggering workflows, managing dependencies, and
              ensuring completion.
            </p>
          </div>
        </div>
      </section>

      {/* KEY POSITIONING BLOCK */}
      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">Why This Matters Now</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Coordination Overload",
                desc: "Teams spend more time managing work than doing it.",
              },
              {
                title: "Fragmented Systems",
                desc: "Data, decisions, and execution are disconnected.",
              },
              {
                title: "AI Gap",
                desc: "Assistants generate content but don’t execute work.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA PATHWAYS */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">
          Suggested Media Pathways
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "About SuperManager AGI",
              desc: "Company background and mission",
              href: "/aboutus",
            },
            {
              title: "Analyst Recognition",
              desc: "External validation and signals",
              href: "/analyst-recognition",
            },
            {
              title: "Newsroom",
              desc: "Latest updates and announcements",
              href: "/news-room",
            },
          ].map((card, i) => (
            <Link
              key={i}
              href={card.href}
              className="border rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-semibold mb-10">
          Core Narrative Principles
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Explain autonomous execution clearly",
            "Connect to real enterprise problems",
            "Avoid vague AI language",
            "Ground claims in workflow reality",
          ].map((item, i) => (
            <div key={i} className="border p-6 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW STORY */}
      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">
            How Media Should Approach This Story
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Understand the category shift",
              "Explore company + product",
              "Validate with examples",
              "Engage leadership",
            ].map((step, i) => (
              <div key={i} className="bg-white border rounded-xl p-6">
                <p className="text-sm text-gray-500">Step {i + 1}</p>
                <p className="font-semibold mt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">FAQ</h2>

        <div className="space-y-6">
          {[
            {
              q: "What is SuperManager AGI?",
              a: "A system that executes workflows, not just generates responses.",
            },
            {
              q: "How is this different from AI assistants?",
              a: "Assistants help. This system replaces coordination layers.",
            },
          ].map((f, i) => (
            <div key={i} className="border rounded-xl p-6">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-gray-600 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#625FD0] text-white py-20 text-center">
        <h2 className="text-3xl font-semibold">Talk to the Team</h2>

        <p className="mt-4 text-white/80">
          Get deeper context, briefings, and company insights.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contactus"
            className="bg-white text-black px-6 py-3 rounded-lg"
          >
            Contact
          </Link>
          <Link
            href="/news-room"
            className="border border-white px-6 py-3 rounded-lg"
          >
            Newsroom
          </Link>
        </div>
      </section>
    </div>
  );
}
