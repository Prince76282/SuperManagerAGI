"use client";

import { useRef } from "react";

const problems = [
  {
    icon: "💬",
    title: "Fragmented Data Across Disconnected Systems",
    body: "Inventory in Shopify. Orders in Amazon Seller Central. Settlements in a payment gateway portal. Logistics in Shiprocket. Marketing in Meta Business Manager. Finance in Tally. Each system has the right data. No single view has all of it simultaneously. ",
  },
  {
    icon: "😤",
    title: "Stale Intelligence From Manual Report Cycles",
    body: "Weekly MIS reports are stale by Wednesday. Monthly reports are stale by the 15th. When a risk signal appears in Friday’s report, it has been building since Monday. SuperManager AGI agents monitor connected systems continuously and surface signals the moment they cross defined thresholds  not in the next report cycle.",
  },
  {
    icon: "⏳",
    title: "Hallucination From API-Based Data Access",
    body: "When AI agents retrieve data via APIs and external calls, each network hop is a hallucination vector. The ADA evaluation across 10,000 enterprise queries found that API-RAG systems produce a 14.1% hallucination rate. ",
  },
  {
    icon: "🗂️",
    title: "Disconnected project data",
    body: "Tasks live in Jira, documents in Notion, discussions in Slack. With data spread across tools, teams lack a unified view of project health.",
  },
];

function ProblemCard({ icon, title, body }) {
  return (
    <div className="relative group rounded-xl border border-gray-200 p-6 flex flex-col gap-4 bg-white transition hover:shadow-lg hover:-translate-y-1">
      <div className="absolute top-0 inset-x-6 h-[2px] bg-[#625FD0] rounded-full opacity-60" />

      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl bg-[#625FD0]/10 text-[#625FD0]">
        {icon}
      </div>

      <div>
        <h3 className="text-base font-semibold text-black mb-2 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export default function ProjectIntelligenceProblems() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden py-16 bg-white">
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-8 max-w-[1200px] mx-auto w-full py-16">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl lg:text-5xl  text-black leading-tight">
           What Slows Down Operational Intelligence 
            <span className="text-[#625FD0]"> And How ADA Fixes It</span>
          </h2>

          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Most operational intelligence problems are not caused by lack of data. Every organisation has abundant data. The problem is that the data lives in 8 to 12 disconnected tools, each requiring manual export and manual compilation before it can inform any decision. By the time the intelligence reaches the person who needs it, it is stale, incomplete and approximated.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-12" />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => (
            <ProblemCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
