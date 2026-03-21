"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, Target, DollarSign } from "lucide-react";

const useCases = [
  {
    value: 45,
    title: "Morning Intelligence Brief",
    description:
      "Every morning, a structured executive intelligence brief is auto-generated from every connected system: revenue vs target by channel, inventory health, logistics performance, marketing ROAS, customer care backlog, engineering delivery status, finance reconciliation status. Distributed automatically. No meetings required to get this information.",
    impact: "3 hours saved per leader per day previously spent gathering status information",
    icon: Briefcase,
  },
  {
    value: 38,
    title: "Board and Investor Reporting",
    description:
      "Monthly and quarterly performance reports compiled automatically from live data across every connected system in the right format. Revenue by channel, unit economics, operational efficiency metrics, OKR attainment  all pulled from actual system data and formatted for board-level consumption.",
    impact: "2 full days of preparation per reporting cycle eliminated",
    icon: Users,
  },
  {
    value: 52,
    title: "Real-Time Competitive Intelligence",
    description:
      "Agents monitor competitor pricing, marketplace rankings, product launches and market signals continuously across connected platforms. Leadership receives alerts when significant competitive moves are detected  not weeks later in a market research report.",
    impact: "Competitive response time reduced from weeks to hours",
    icon: Target,
  },
  {
    value: 41,
    title: "Cross-Department Cost Intelligence",
    description:
      "Agents identify operational inefficiencies, redundant workflows and budget waste across every department using actual data from connected systems. Cost reduction opportunities surfaced with specific data  not general recommendations.",
    impact: "Average 15 to 25% operational cost reduction identified in first 90 days",
    icon: DollarSign,
  },
];

const COLS = 13;
const ROWS = 5;
const TOTAL = COLS * ROWS;

function DotGrid({ percent, animate }: { percent: number; animate: boolean }) {
  const filled = Math.round((percent / 100) * TOTAL);

  return (
    <div
      className="grid gap-[6px] w-full max-w-[520px]"
      style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0,1fr))` }}
    >
      {Array.from({ length: TOTAL }).map((_, i) => {
        const isFilled = i < filled;

        return (
          <div
            key={i}
            className={`aspect-square rounded-full transition-all duration-500
              ${isFilled ? "bg-[#625FD0]" : "bg-slate-200"}
              ${animate ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
            style={{ transitionDelay: `${i * 8}ms` }}
          />
        );
      })}
    </div>
  );
}

function UseCaseRow({
  item,
  index,
}: {
  item: (typeof useCases)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = item.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-[1fr_1px_1fr] gap-y-10 lg:gap-y-0 lg:gap-x-14
        items-center py-12 border-b border-slate-200
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-[#625FD0] flex items-center justify-center">
            <Icon size={22} />
          </div>

          <h1 className="text-xl md:text-2xl lg:text-3xl text-black">
            {item.title}
          </h1>
        </div>

        <p className="text-sm md:text-[15px] text-slate-500 leading-relaxed max-w-xl mb-4">
          {item.description}
        </p>

        <p className="text-sm font-semibold text-indigo-600">
          Impact: {item.impact}
        </p>
      </div>

      <div className="hidden lg:block w-px h-full bg-slate-200" />

      <div className="flex lg:justify-end">
        <DotGrid percent={item.value} animate={visible} />
      </div>
    </div>
  );
}

export default function SuperManagerUseCases() {
  return (
    <section className="relative py-16 md:py-14 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-white">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h1 className="text-3xl sm:text-3xl md:text-5xl text-black leading-tight mb-6">
            SuperManager AGI Strategy Use Cases
          </h1>

          <p className="text-slate-500 text-md md:text-md leading-relaxed">
            Organisations deploy SuperManager AGI to give leadership real-time strategic intelligence, eliminate information latency and transform planning from a periodic exercise into a continuous, data-driven process.
          </p>
        </div>

        <div>
          {useCases.map((item, i) => (
            <UseCaseRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
