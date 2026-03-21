"use client";

import { useRef } from "react";

const problems = [
  {
    icon: "💬",
    title: "Endless coordination between teams",
    body: "Organizations still rely on constant meetings, chat threads, and manual updates just to keep projects aligned. Without intelligent automation, execution depends on people repeatedly coordinating work that software could manage instantly.",
  },
  {
    icon: "😤",
    title: "Managers overloaded with operational work",
    body: "A large portion of management time is spent assigning tasks, tracking progress, and resolving day-to-day execution issues. These operational responsibilities consume attention that should be focused on leadership, strategy, and innovation.",
  },
  {
    icon: "⏳",
    title: "Decisions create execution bottlenecks",
    body: "Projects frequently slow down while teams wait for approvals, prioritization changes, or clarification from management. Even small decision delays accumulate and quietly reduce the overall speed of the organization.",
  },
  {
    icon: "🗂️",
    title: "Progress relies on human follow-ups",
    body: "Work often advances only after someone checks in, reminds teammates, or reconnects teams across departments. When execution depends on manual follow-ups, projects lose momentum and coordination becomes fragile.",
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

export default function ManagementProblems() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden py-16 bg-white">
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-8 max-w-[1200px] mx-auto w-full py-16">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl lg:text-5xl  text-black leading-tight">
            AI Management Capabilities 
            <span className="text-[#625FD0]"> slows execution</span>
          </h2>

          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Many execution challenges inside organizations are not caused by
            lack of talent or effort. They come from the management layer itself
             manual coordination, delayed decisions, and constant follow-ups
            required justtext-3xl work progressing. When execution depends on
            human management processes, teams spend more time organizing work
            than actually delivering results.
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
