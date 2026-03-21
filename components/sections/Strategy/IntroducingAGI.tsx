"use client";

import { useState } from "react";
import {
  Brain,
  Layers,
  Users,
  Target,
  TrendingUp,
  GitBranch,
  BarChart3,
  Cpu,
} from "lucide-react";

const managers = [
  {
    id: "strategy",
    label: "Strategy AGI",
    heading: "Autonomous Strategic Intelligence Layer",
    subheading:
      "Strategy AGI continuously retrieves data from every connected system, analyses performance against targets, surfaces strategic signals and generates executive intelligence briefs — all grounded in actual live data via the ADA layer.",
    features: [
      {
        icon: Brain,
        title: "Live Intelligence Generation",
        desc: "Retrieves and synthesises data from every connected system in real time.",
      },
      {
        icon: TrendingUp,
        title: "Signal Detection",
        desc: "Surfaces revenue anomalies, risk signals and growth opportunities before they require escalation.",
      },
      {
        icon: Target,
        title: "Executive Decision Support",
        desc: "Generates data-backed recommendations with evidence from actual system data.",
      },
    ],
    Visual: StrategyVisual,
  },

  {
    id: "portfolio",
    label: "Portfolio AGI",
    heading: "Enterprise Initiative Orchestration and Alignment",
    subheading:
      "Portfolio AGI tracks every active initiative across every department, maps execution against OKRs in real time and surfaces alignment gaps and resource conflicts before they affect delivery.",
    features: [
      {
        icon: Layers,
        title: "Initiative Alignment",
        desc: "Maps every project to company objectives and surfaces misaligned investments automatically.",
      },
      {
        icon: GitBranch,
        title: "Priority Intelligence",
        desc: "Balances trade-offs across competing initiatives using actual revenue impact and risk data.",
      },
      {
        icon: BarChart3,
        title: "Portfolio Visibility",
        desc: "Gives leadership real-time visibility into performance, risk and execution velocity across all initiatives.",
      },
    ],
    Visual: PortfolioVisual,
  },

  {
    id: "resource",
    label: "Resource AGI",
    heading: "Autonomous Workforce and Budget Optimisation",
    subheading:
      "Resource AGI monitors team capacity, workload distribution and budget allocation across every department using actual data from connected systems — surfacing reallocation opportunities and preventing overload before it impacts delivery.",
    features: [
      {
        icon: Users,
        title: "Capacity Monitoring",
        desc: "Real-time team bandwidth visibility across every department from connected systems.",
      },
      {
        icon: Cpu,
        title: "Workload Intelligence",
        desc: "Detects overallocation and underutilisation before they affect performance.",
      },
      {
        icon: TrendingUp,
        title: "Budget Optimisation",
        desc: "Identifies underspend in high-performing areas and overspend in underperforming ones.",
      },
    ],
    Visual: ResourceVisual,
  },
];

function StrategyVisual() {
  return (
    <div className="relative h-[360px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="space-y-3">
        {["Live Data", "Signals", "Performance"].map((t, i) => (
          <div
            key={i}
            className="px-4 py-2 rounded-lg bg-white border border-black/10 text-xs text-black/60 font-mono shadow-sm"
          >
            {t}
          </div>
        ))}
        <div className="flex justify-center py-2">
          <Brain className="w-6 h-6 text-black/40" />
        </div>
        <div className="px-5 py-2 rounded-lg bg-[#625FD0] text-white text-xs font-mono text-center">
          EXECUTIVE INTELLIGENCE OUTPUT
        </div>
      </div>
    </div>
  );
}

function PortfolioVisual() {
  return (
    <div className="relative h-[360px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="grid grid-cols-2 gap-3">
        {["Initiative A", "Program B", "Expansion C", "Ops D"].map(
          (p, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-white border border-black/10 shadow-sm text-center text-xs font-mono text-black/60"
            >
              {p}
            </div>
          )
        )}
        <div className="col-span-2 mt-3 text-center text-[10px] text-black/40 font-mono tracking-widest">
          ALIGNMENT MATRIX ACTIVE
        </div>
      </div>
    </div>
  );
}

function ResourceVisual() {
  return (
    <div className="relative h-[360px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="space-y-4 w-full max-w-xs">
        {["Engineering", "Product", "Operations", "Design"].map((team, i) => (
          <div key={i}>
            <div className="flex justify-between text-[10px] text-[#625FD0] font-mono mb-1">
              <span>{team}</span>
              <span>{70 - i * 10}%</span>
            </div>
            <div className="h-2 bg-black/10 rounded-full">
              <div
                className="h-full bg-[#625FD0] rounded-full"
                style={{ width: `${70 - i * 10}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PrebuiltManagers() {
  const [active, setActive] = useState(0);
  const tab = managers[active];
  const { Visual } = tab;

  return (
    <section className="relative py-10 sm:py-12 md:py-14 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12 md:mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4">
            Pre-Built Strategy AGI Agents
          </h1>
          <p className=" text-gray-500 text-sm sm:text-md leading-relaxed">
            Deploy specialist strategic intelligence agents instantly. Each agent retrieves data from connected systems via ADA, generates grounded intelligence and coordinates with other agents to give leadership a complete, live view of organisational performance.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
          {managers.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActive(i)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border transition ${
                i === active
                  ? "bg-[#625FD0] text-white"
                  : "border-[#625FD0] border-2 text-[#625FD0]"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start lg:items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-black mb-4">
              {tab.heading}
            </h1>

            <p className="text-sm sm:text-md text-black/50 mb-6 sm:mb-8 leading-relaxed">
              {tab.subheading}
            </p>

            <div className="space-y-4 sm:space-y-6">
              {tab.features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex gap-3 sm:gap-4">
                   <div className="w-10 h-10 white flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm sm:text-md text-black mb-1">
                        {f.title}
                      </div>
                      <p className="text-xs sm:text-sm text-black/50">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="rounded-xl sm:rounded-2xl border border-black/10 shadow-lg sm:shadow-xl overflow-hidden mt-8 lg:mt-0">
            <Visual />
          </div>
        </div>
      </div>
    </section>
  );
}
