"use client";

import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Users,
  Target,
  DollarSign,
} from "lucide-react";

/* ================= USE CASE DATA ================= */

const useCases = [
  {
    value: 45,
    title: "Replace PMO Functions",
    description:
      "SuperManagerAGI autonomously replaces traditional PMO layers by coordinating portfolios, enforcing governance, aligning roadmaps, and delivering executive-level reporting in real time.",
    icon: Briefcase,
  },
  {
    value: 38,
    title: "Optimize Resource Allocation",
    description:
      "Continuously evaluates team bandwidth, skills, and priorities to dynamically allocate talent where it drives the highest strategic impact.",
    icon: Users,
  },
  {
    value: 52,
    title: "Strategic Planning Automation",
    description:
      "Transforms quarterly and annual planning into an always-on strategic intelligence system that adapts to market shifts and performance signals.",
    icon: Target,
  },
  {
    value: 41,
    title: "Cost Reduction Programs",
    description:
      "Identifies inefficiencies, eliminates redundant workflows, and optimizes budget distribution to drive measurable cost savings across operations.",
    icon: DollarSign,
  },
];

/* ================= DOT GRID CONFIG ================= */

const COLS = 13;
const ROWS = 5;
const TOTAL = COLS * ROWS;

/* ================= DOT GRID ================= */

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

/* ================= ROW COMPONENT ================= */

function UseCaseRow({
  item,
  index,
}: {
  item: typeof useCases[0];
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
      {/* LEFT CONTENT */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-[#625FD0] flex items-center justify-center">
            <Icon size={22} />
          </div>

          <h1 className="text-xl md:text-2xl lg:text-4xl  text-black">
            {item.title}
          </h1>
        </div>

        <p className="text-sm md:text-[15px] text-slate-500 leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px h-full bg-slate-200" />

      {/* RIGHT DOT VISUAL */}
      <div className="flex lg:justify-end">
        <DotGrid percent={item.value} animate={visible} />
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function SuperManagerUseCases() {
  return (
    <section className="relative py-16 md:py-14 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-white">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-black leading-tight mb-6">
            SuperManagerAGI Use Cases
          </h1>

          <p className="text-slate-500 text-md md:text-md leading-relaxed">
            Enterprises deploy SuperManagerAGI to automate executive execution,
            eliminate coordination overhead, and transform leadership capacity
            into scalable, intelligent infrastructure.
          </p>
        </div>

        {/* Use Case Rows */}
        <div>
          {useCases.map((item, i) => (
            <UseCaseRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}