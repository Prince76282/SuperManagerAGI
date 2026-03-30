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
    title: "Live Revenue and Business Intelligence",
    description:
      "SuperManager AGI retrieves and synthesises revenue data across every channel  D2C, marketplace, wholesale, retail  in real time from every connected system. No manual compilation. No stale dashboards. The actual live revenue state of your business at 65ms via the ADA layer.",
    icon: Briefcase,
    iconBg: "bg-[#625FD0]",
    iconColor: "text-white",
  },
  {
    title: "Cross-Department Portfolio Visibility",
    description:
      "Every active initiative across every department  operations, finance, logistics, marketing, engineering, customer care  visible in one unified intelligence view. OKR alignment tracked continuously. Deviations surfaced before they compound into missed targets.",
    icon: Users,
    iconBg: "bg-[#625FD0]",
    iconColor: "text-white",
  },
  {
    title: "Adaptive Planning and Scenario Intelligence",
    description:
      "When market conditions shift, agents generate updated scenario models based on actual performance data  not assumptions. Resource reallocation options, revised timelines and trade-off analysis available on demand from live data across connected systems.",
    icon: Map,
    iconBg: "bg-[#625FD0]",
    iconColor: "text-white",
  },
  {
    title: "Capacity and Resource Intelligence",
    description:
      "Real-time visibility into team bandwidth, workload distribution and execution constraints across every department. Overallocation detected before burnout. Underutilisation surfaced before it wastes capacity. Reallocation recommendations generated from actual data.",
    icon: BarChart3,
    iconBg: "bg-[#625FD0]",
    iconColor: "text-white",
  },
  {
    title: "Priority Intelligence Across Competing Initiatives",
    description:
      "When multiple initiatives compete for the same resources, agents generate data-backed priority recommendations using actual revenue impact, strategic alignment scores and execution risk signals  eliminating the politics and assumptions from prioritisation decisions.",
    icon: Flag,
    iconBg: "bg-[#625FD0]",
    iconColor: "text-white",
  },
  {
    title: "OKR and Goal Alignment Tracking",
    description:
      "Every active initiative mapped to company OKRs in real time. Contribution tracked continuously. Deviations surfaced to leadership before end-of-quarter surprises. Quarterly planning transformed from a retrospective exercise into a forward-looking intelligence loop.",
    icon: Target,
    iconBg: "bg-[#625FD0]",
    iconColor: "text-white",
  },
  {
    title: "Budget and Investment Intelligence",
    description:
      "Budget allocation monitored against actual performance signals across every department. Underspending in high-performing areas and overspending in underperforming areas both flagged automatically. Reallocation recommendations generated from live data.",
    icon: DollarSign,
    iconBg: "bg-[#625FD0]",
    iconColor: "text-white",
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
              SuperManager AGI Strategy Capabilities
            </h1>
            <p className="text-gray-500 text-md md:text-base leading-relaxed">
              SuperManager AGI acts as an autonomous intelligence layer
              continuously retrieving enterprise data, surfacing strategic
              signals, monitoring OKR alignment and generating executive
              intelligence so leadership operates on live reality, not stale
              reports.
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
                <h3 className="text-lg  text-gray-900 mb-2">{item.title}</h3>
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
                  <h3 className="text-lg  text-gray-900 mb-3">{item.title}</h3>
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
