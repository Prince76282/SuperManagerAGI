"use client";

import { useState } from "react";
import {
  Briefcase,
  Users,
  Map,
  BarChart3,
  Flag,
  Target,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const capabilities = [
  {
    title: "Portfolio Management",
    description:
      "SuperManagerAGI continuously evaluates initiatives across departments, balancing risk, ROI, and strategic alignment to ensure leadership always invests in the highest-impact work.",
    icon: Briefcase,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Resource Optimization",
    description:
      "Autonomously allocate engineers, product managers, and operational teams based on skill, workload, and delivery timelines to maximize organizational throughput.",
    icon: Users,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Roadmap Planning",
    description:
      "Generate adaptive roadmaps that evolve in real time as priorities shift, ensuring execution stays aligned with business strategy and market conditions.",
    icon: Map,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Capacity Analysis",
    description:
      "Monitor team bandwidth, sprint velocity, and execution constraints to prevent burnout and ensure sustainable scaling of operations.",
    icon: BarChart3,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Priority Decisions",
    description:
      "Resolve cross-functional trade-offs with data-backed decision intelligence, reducing executive bottlenecks and accelerating delivery cycles.",
    icon: Flag,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    title: "OKR Tracking",
    description:
      "Align initiatives directly to company OKRs and continuously track measurable outcomes with automated performance feedback loops.",
    icon: Target,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Budget Allocation",
    description:
      "Dynamically distribute budgets across initiatives based on performance signals, forecast modeling, and strategic importance.",
    icon: DollarSign,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

const CARD_WIDTH = 300;
const CARD_GAP = 24;

export default function SuperManagerCapabilities() {
  const [offset, setOffset] = useState(0);

  const maxOffset = capabilities.length - 3;

  const handlePrev = () => setOffset((o) => Math.max(0, o - 1));
  const handleNext = () => setOffset((o) => Math.min(maxOffset, o + 1));

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-900 mb-4">
              SuperManagerAGI Capabilities
            </h1>
            <p className="text-gray-500 text-md md:text-base leading-relaxed">
              SuperManagerAGI acts as an autonomous leadership layer
              optimizing portfolios, allocating resources, aligning execution 
              to strategy, and continuously improving operational performance 
              across the enterprise.
            </p>
          </div>

          {/* Desktop Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={offset === 0}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={offset >= maxOffset}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* MOBILE → Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-4`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-lg  text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-md leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* DESKTOP → Slider */}
        <div className="hidden md:block overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${offset * (CARD_WIDTH + CARD_GAP)}px)`,
            }}
          >
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  style={{ width: `${CARD_WIDTH}px` }}
                  className="flex-shrink-0 bg-gray-50 rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-5`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}