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
};

function StatCard({ value, label, delay }: StatCardProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div className="rounded-xl border border-gray-200 px-4 py-4 sm:px-6 sm:py-5 bg-white hover:shadow-md transition">
      <div className="text-xl sm:text-2xl font-semibold text-black mb-1">
        {value}
      </div>
      <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, body }: FeatureCardProps) {
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

function ActivityTicker() {
  const events = [
    {
      label: "Task priority automatically optimized across active sprint",
      team: "Engineering",
      time: "5s ago",
    },
    {
      label: "Workflow bottleneck detected and execution path adjusted",
      team: "Product",
      time: "20s ago",
    },
    {
      label: "Cross-team dependency resolved automatically",
      team: "Operations",
      time: "45s ago",
    },
    {
      label: "Autonomous progress update generated for leadership",
      team: "Leadership",
      time: "1m ago",
    },
    {
      label: "Team workload balanced to accelerate delivery",
      team: "Strategy",
      time: "2m ago",
    },
  ];

  return (
    <div className="rounded-xl border-2 border-[#625FD0] overflow-hidden bg-white">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#625FD0]">
        <div className="w-2 h-2 rounded-full bg-[#625FD0] animate-pulse" />
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500">
          Live Autonomous Execution
        </span>
      </div>

      <div className="divide-y divide-[#625FD0]">
        {events.map((e, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-4 py-3 hover:bg-gray-50 transition"
          >
            <div>
              <p className="text-sm text-black font-medium">{e.label}</p>
              <p className="text-xs text-gray-500">{e.team}</p>
            </div>

            <span className="text-xs text-gray-400 sm:ml-4">
              {e.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AutonomousHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden py-24 sm:py-16 bg-white">
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-5 leading-tight font-semibold">
              Work Moves Forward Automatically.
              <br />
              <span className="text-[#625FD0]">
                Without Anyone Asking.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 max-w-xl">
              SuperManager AGI’s autonomous execution layer continuously monitors every connected system...
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
              <StatCard value="97%" label="Task execution accuracy" delay={200} />
              <StatCard value="65ms" label="Avg latency" delay={350} />
              <StatCard value="6.5x" label="Throughput boost" delay={500} />
              <StatCard value="4.2%" label="Hallucination rate" delay={650} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <ActivityTicker />
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16">
          <FeatureCard
            icon="⚡"
            title="Autonomous Task Execution"
            body="Automatically moves work forward without manual intervention."
          />
          <FeatureCard
            icon="🧠"
            title="Intelligent Workflow Decisions"
            body="Continuously analyzes context to make smart execution decisions."
          />
          <FeatureCard
            icon="🎯"
            title="Self-Driving Project Momentum"
            body="Maintains project momentum by resolving blockers automatically."
          />
        </div>
      </div>
    </section>
  );
}
