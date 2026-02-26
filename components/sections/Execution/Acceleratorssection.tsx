"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Truck,
  CheckSquare,
  FileText,
  ShieldAlert,
  Rocket,
  ArrowRight,
} from "lucide-react";

/* ================= MANAGER DATA ================= */

const managers = [
  {
    id: "delivery",
    label: "Delivery AGI",
    icon: Truck,
    title: "Autonomous delivery orchestration across teams",
    desc: "Delivery AGI coordinates timelines, dependencies, execution velocity, and resource allocation automatically. It predicts delays, reassigns tasks, and ensures projects ship on time without manual intervention.",
    stats: [
      { value: "41%", label: "faster releases" },
      { value: "96%", label: "deadline adherence" },
      { value: "3.2x", label: "execution throughput" },
    ],
  },
  {
    id: "taskmaster",
    label: "TaskMaster AGI",
    icon: CheckSquare,
    title: "AI task command center for entire organizations",
    desc: "TaskMaster AGI assigns, prioritizes, escalates, and tracks tasks across departments. It ensures work always flows to the right person at the right time with zero manual coordination.",
    stats: [
      { value: "92%", label: "tasks auto-assigned" },
      { value: "68%", label: "less coordination" },
      { value: "2.9x", label: "team output" },
    ],
  },
  {
    id: "docs",
    label: "Docs AGI",
    icon: FileText,
    title: "Living documentation that updates itself",
    desc: "Docs AGI automatically generates, maintains, and audits internal documentation, policies, reports, and knowledge bases so teams always work from accurate information.",
    stats: [
      { value: "100%", label: "doc accuracy" },
      { value: "85%", label: "less manual writing" },
      { value: "Instant", label: "knowledge retrieval" },
    ],
  },
  {
    id: "risk",
    label: "Risk AGI",
    icon: ShieldAlert,
    title: "Predictive intelligence that prevents failures",
    desc: "Risk AGI continuously monitors signals across systems, performance, timelines, and behavior patterns to predict issues before they occur and trigger mitigation workflows automatically.",
    stats: [
      { value: "94%", label: "risk prediction accuracy" },
      { value: "63%", label: "incident reduction" },
      { value: "5x", label: "faster mitigation" },
    ],
  },
  {
    id: "release",
    label: "Release AGI",
    icon: Rocket,
    title: "Autonomous release and deployment manager",
    desc: "Release AGI coordinates testing, validation, deployment, rollback logic, and monitoring. It ensures safe, fast, and reliable releases without human bottlenecks.",
    stats: [
      { value: "52%", label: "faster deployments" },
      { value: "0", label: "manual approvals" },
      { value: "99.99%", label: "release reliability" },
    ],
  },
];

/* ================= DASHBOARD CARD ================= */

function DashboardPreview({ icon: Icon, title }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-gray-50 p-6 sm:p-8 min-h-[300px] flex flex-col justify-between transition-all duration-500">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#625FD0] animate-pulse" />
          <span className="text-black/40 text-xs font-mono tracking-widest uppercase">
            SuperManagerAGI · Live Engine
          </span>
        </div>

        <div className="rounded-xl border border-black/10 bg-white p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-5 h-5 text-[#625FD0]" />
            <span className="font-semibold text-sm">{title}</span>
          </div>

          <div className="space-y-3">
            {[
              { label: "AI Confidence", value: "98%" },
              { label: "Execution Speed", value: "Optimal" },
              { label: "Automation Level", value: "High" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-sm border-b border-black/5 pb-2"
              >
                <span className="text-black/50">{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
        <span className="text-black/30 text-xs font-mono">
          Synced live
        </span>

        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-[#625FD0]/60"
              style={{ height: `${8 + i * 4}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function PrebuiltManagersSection() {
  const [active, setActive] = useState(0);
  const tab = managers[active];
  const Icon = tab.icon;

  return (
    <section className="relative bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Pre-Built Managers powered by
            <br />
            <span className="text-[#625FD0]">SuperManagerAGI</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Deploy specialized AI managers that autonomously run operations, execution, documentation, and risk intelligence across your organization.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap gap-3 mb-10">
          {managers.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 flex items-center gap-2 ${
                active === i
                  ? "bg-[#625FD0] text-white border-[#625FD0]"
                  : "border-black/10 text-gray-600 hover:bg-[#625FD0] hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-8 border border-black/10 rounded-2xl bg-white p-6 sm:p-8 shadow-sm">

          {/* LEFT */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#625FD0] text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm uppercase text-[#625FD0] tracking-widest font-medium">
                  Autonomous Manager
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
                {tab.title}
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {tab.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {tab.stats.map((stat, i) => (
                  <div key={i} className="border-l-2 border-[#625FD0] pl-3">
                    <div className="text-2xl font-bold">
                      {stat.value}
                    </div>
                    <p className="text-sm text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/platform"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#625FD0] hover:opacity-90 transition"
              >
                Explore Platform
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/demo"
                className="inline-flex justify-center items-center px-6 py-3 rounded-full text-sm font-semibold border border-[#625FD0] text-[#625FD0] hover:bg-[#625FD0] hover:text-white transition"
              >
                Book Demo
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <DashboardPreview icon={Icon} title={tab.label} />
        </div>
      </div>
    </section>
  );
}