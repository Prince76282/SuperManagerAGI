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
    heading: "Autonomous strategic intelligence layer",
    subheading:
      "Strategy AGI continuously analyzes markets, internal performance, and operational signals to generate strategic plans, recommend pivots, and guide leadership decisions.",
    features: [
      {
        icon: Target,
        title: "Dynamic Strategy Generation",
        desc: "Continuously builds and refines strategic roadmaps based on real-time data and predictive modeling.",
      },
      {
        icon: TrendingUp,
        title: "Predictive Market Analysis",
        desc: "Detects emerging opportunities, competitive threats, and macro-level risks before leadership notices them.",
      },
      {
        icon: Brain,
        title: "Executive Decision Engine",
        desc: "Recommends actions, trade-offs, and priorities aligned to business goals and ROI projections.",
      },
    ],
    Visual: StrategyVisual,
  },

  {
    id: "portfolio",
    label: "Portfolio AGI",
    heading: "Enterprise initiative orchestration",
    subheading:
      "Portfolio AGI oversees all programs, products, and initiatives — ensuring alignment, prioritization, and execution efficiency across departments.",
    features: [
      {
        icon: Layers,
        title: "Initiative Alignment",
        desc: "Maps projects to company objectives and eliminates misaligned investments automatically.",
      },
      {
        icon: GitBranch,
        title: "Priority Optimization",
        desc: "Balances trade-offs across competing initiatives using ROI, urgency, and strategic weight.",
      },
      {
        icon: BarChart3,
        title: "Portfolio Intelligence",
        desc: "Provides leadership with real-time visibility into performance, risk, and execution velocity.",
      },
    ],
    Visual: PortfolioVisual,
  },

  {
    id: "resource",
    label: "Resource AGI",
    heading: "Autonomous workforce optimization",
    subheading:
      "Resource AGI dynamically assigns teams, budgets, and infrastructure based on workload, expertise, and execution timelines.",
    features: [
      {
        icon: Users,
        title: "Dynamic Team Allocation",
        desc: "Assigns the best-fit talent to each initiative based on skills, availability, and performance history.",
      },
      {
        icon: Cpu,
        title: "Workload Intelligence",
        desc: "Balances capacity across teams to prevent burnout and maximize throughput.",
      },
      {
        icon: TrendingUp,
        title: "Efficiency Optimization",
        desc: "Continuously improves utilization rates, reducing idle time and execution delays.",
      },
    ],
    Visual: ResourceVisual,
  },
];



function StrategyVisual() {
  return (
    <div className="relative h-[360px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="space-y-3">
        {["Market Signals", "Internal Metrics", "Competitive Data"].map((t, i) => (
          <div key={i} className="px-4 py-2 rounded-lg bg-white border border-black/10 text-xs text-black/60 font-mono shadow-sm">
            {t}
          </div>
        ))}
        <div className="flex justify-center py-2">
          <Brain className="w-6 h-6 text-black/40" />
        </div>
        <div className="px-5 py-2 rounded-lg bg-black text-white text-xs font-mono text-center">
          STRATEGIC DECISION OUTPUT
        </div>
      </div>
    </div>
  );
}

function PortfolioVisual() {
  return (
    <div className="relative h-[360px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="grid grid-cols-2 gap-3">
        {["Product A", "Platform B", "Expansion C", "Initiative D"].map((p, i) => (
          <div key={i} className="p-3 rounded-xl bg-white border border-black/10 shadow-sm text-center text-xs font-mono text-black/60">
            {p}
          </div>
        ))}
        <div className="col-span-2 mt-3 text-center text-[10px] text-black/40 font-mono tracking-widest">
          PRIORITY MATRIX ACTIVE
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
            <div className="flex justify-between text-[10px] text-black/50 font-mono mb-1">
              <span>{team}</span>
              <span>{70 - i * 10}%</span>
            </div>
            <div className="h-2 bg-black/10 rounded-full">
              <div
                className="h-full bg-black rounded-full"
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
    <section className="relative py-14 px-6 bg-white overflow-hidden">

      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h1 className="text-4xl lg:text-5xl text-black mb-4">
            Pre-Built Managers
          </h1>
          <p className=" text-gray-500 text-md leading-relaxed">
            Deploy specialized AI leadership agents instantly. Each manager is pre-trained,
            domain-aware, and designed to autonomously operate an entire organizational function.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {managers.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                i === active
                  ? "bg-[#625FD0] text-white text-sm "
                  : "  text-lg"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-2xl lg:text-4xl  text-black mb-4">
              {tab.heading}
            </h1>

            <p className="text-md text-black/50 mb-8 leading-relaxed">
              {tab.subheading}
            </p>

            <div className="space-y-6">
              {tab.features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#625FD0] text-white flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-md text-black mb-1">
                        {f.title}
                      </div>
                      <p className="text-sm text-black/50">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="rounded-2xl border border-black/10 shadow-xl overflow-hidden">
            <Visual />
          </div>
        </div>
      </div>
    </section>
  );
}