"use client";

import { useEffect, useState } from "react";

type StatCardProps = {
  value: string;
  label: string;
  delay: number;
};

type FeatureCardProps = {
  icon: string;
  title: string;
  body: string;
  delay: number;
};

// Stat card
function StatCard({ value, label, delay }: StatCardProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div className="relative">
      <div className="rounded-xl border border-gray-200 px-4 sm:px-6 py-4 sm:py-5 bg-white hover:shadow-md transition">
        <div className="text-xl sm:text-2xl  text-black mb-1">
          {value}
        </div>
        <div className="text-[8px] sm:text-xs  uppercase tracking-widest text-gray-500 leading-snug">
          {label}
        </div>
      </div>
    </div>
  );
}

// Feature card
function FeatureCard({ icon, title, body, delay }: FeatureCardProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div className="rounded-xl border-2 border-[#625FD0] p-5 sm:p-6 bg-white hover:shadow-lg transition">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#625FD0]/10 text-[#625FD0] flex items-center justify-center text-lg sm:text-xl mb-4">
        {icon}
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-black mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}

// Activity ticker
function ActivityTicker() {
  const events = [
    {
      label:
        "Monthly reconciliation complete  all 3 platform settlements verified ",
      team: "Finance AGI",
      time: "5s ago",
    },
    {
      label:
        "Collection launch readiness check complete  all 47 SKUs verified across platforms ",
      team: "Operations AGI",
      time: "20s ago",
    },
    {
      label:
        "Sprint 14 velocity analysis complete  risk of scope creep flagged for 2 items ",
      team: "Engineering AGI",
      time: "45s ago",
    },
    {
      label:
        "Q4 campaign attribution report generated across Meta, Google and Amazon ",
      team: "Marketing AGI",
      time: "1m ago",
    },
    {
      label:
        "Resource reallocation recommendation generated based on NDR pattern analysis ",
      team: "Logistics AGI",
      time: "2m ago",
    },
  ];

  return (
    <div className="rounded-xl border-2 border-[#625FD0] overflow-hidden bg-white">
      <div className="flex items-center gap-2 px-3 sm:px-4 py-3 border-b border-[#625FD0]">
        <div className="w-2 h-2 rounded-full bg-[#625FD0] animate-pulse" />
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500">
          Live Project Intelligence
        </span>
      </div>

      <div className="divide-y divide-[#625FD0]">
        {events.map((e, i) => (
          <div
            key={i}
            className="flex items-start sm:items-center justify-between gap-3 px-3 sm:px-4 py-3 hover:bg-gray-50 transition"
          >
            <div>
              <p className="text-sm text-black font-medium leading-snug">
                {e.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{e.team}</p>
            </div>

            <span className="text-xs text-gray-400 shrink-0">
              {e.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectIntelligenceHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden py-24 sm:py-16 bg-white">
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl text-black mb-5 sm:mb-6 leading-tight">
              See Every Workflow Clearly.
              <br />
              <span className="text-[#625FD0]">
                Before Problems Surface.
              </span>
            </h1>

            <p className="text-sm sm:text-md text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-lg">
              SuperManager AGI’s Project Intelligence layer gives every leader a complete, live view of execution progress across every active initiative retrieved directly from connected systems in real time via the ADA layer. Instantly surface risks, understand what is actually happening and receive grounded intelligence to keep every workflow moving forward.
            </p>

           

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-12">
              <StatCard value="92.5%" label="Retrieval accuracy via HNSW vector search and per-subtask RAG" delay={200} />
              <StatCard value="3×" label="Faster risk detection vs manual monitoring cycles" delay={350} />
              <StatCard value="60ms" label="Data retrieval latency via ADA direct database access" delay={500} />
              <StatCard value="81.3%" label=" 22.4% to 4.2% vs baseline" delay={200} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <ActivityTicker />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-14 sm:mt-20">
          <FeatureCard icon="⚡" title="Real-Time Project Monitoring" body="Track progress across every sprint and milestone in real time. Instantly see where projects stand and what needs attention." delay={200} />
          <FeatureCard icon="🧠" title="Predictive Risk Detection" body="AI continuously analyzes timelines, workloads, and dependencies to surface risks before delays or blockers impact delivery." delay={350} />
          <FeatureCard icon="🎯" title="AI Project Co-Pilot" body="Managers receive intelligent recommendations, automated status updates, and guidance to keep teams aligned and productive." delay={500} />
        </div>

      </div>
    </section>
  );
}
