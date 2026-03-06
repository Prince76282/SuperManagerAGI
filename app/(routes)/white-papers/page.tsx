"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  BookOpen,
  Zap,
  Brain,
  Target,
  Layers,
  ChevronRight,
} from "lucide-react";

const PRIMARY = "#625FD0";

export default function WhitepapersPage() {
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const WHITEPAPERS = [
  {
    tag: "Guide",
    title: "The Executive Playbook for AI-Augmented Management",
    href: "#",
    icon: <Target size={18} />,
  },
  {
    tag: "Strategy",
    title: "Reimagine People Operations for the AI-Native Enterprise",
    href: "#",
    icon: <Layers size={18} />,
  },
  {
    tag: "Research",
    title: "Beyond Manager Silos: Unifying Disconnected Leadership Tools",
    href: "#",
    icon: <Brain size={18} />,
  },
  {
    tag: "Framework",
    title: "Agentic AI for High-Performance Team Workflows",
    href: "#",
    icon: <Zap size={18} />,
  },

  {
    tag: "Strategy",
    title: "Designing the Autonomous Enterprise with AI-Driven Leadership Systems",
    href: "#",
    icon: <Brain size={18} />,
  },
  {
    tag: "Research",
    title: "How AI Co-Managers Transform Decision Velocity in Modern Organizations",
    href: "#",
    icon: <Zap size={18} />,
  },
  {
    tag: "Framework",
    title: "Building AI-First Operating Models for Scalable Global Teams",
    href: "#",
    icon: <Layers size={18} />,
  },
  {
    tag: "Guide",
    title: "The Future of Management: Human Leaders and AI Working Together",
    href: "#",
    icon: <Target size={18} />,
  },
  {
    tag: "Research",
    title: "AI Workforce Intelligence: Unlocking Real-Time Organizational Insights",
    href: "#",
    icon: <Brain size={18} />,
  },
  {
    tag: "Strategy",
    title: "Transforming Enterprise Productivity with Autonomous AI Managers",
    href: "#",
    icon: <Zap size={18} />,
  },
  {
    tag: "Framework",
    title: "Operationalizing Agentic AI Across Enterprise Workflows",
    href: "#",
    icon: <Layers size={18} />,
  },
  {
    tag: "Guide",
    title: "Scaling Leadership Capacity with AI-Powered Decision Systems",
    href: "#",
    icon: <Target size={18} />,
  },
];

  const filtered = WHITEPAPERS.filter((w) =>
    w.title.toLowerCase().includes(search.toLowerCase())
  );

  const visibleItems = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-12">
          <h1 className="text-5xl tracking-tight leading-none">
            Whitepapers
          </h1>
        </div>

        {/* SEARCH */}
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl uppercase">All Whitepapers</h3>

          <div className="relative w-72">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search whitepapers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border-2 border-gray-300 rounded-lg text-sm focus:outline-none"
              style={{ borderColor: PRIMARY }}
            />
          </div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleItems.map((paper, i) => (
            <a
              key={i}
              href={paper.href}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative border rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 bg-white"
              style={{
                borderColor: hovered === i ? PRIMARY : `${PRIMARY}40`,
                boxShadow:
                  hovered === i ? `4px 4px 0px ${PRIMARY}` : "none",
              }}
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor:
                        hovered === i ? PRIMARY : `${PRIMARY}10`,
                      color: hovered === i ? "white" : PRIMARY,
                    }}
                  >
                    {paper.icon}
                  </div>

                  <span
                    className="text-[14px] uppercase tracking-widest"
                    style={{ color: PRIMARY }}
                  >
                    {paper.tag}
                  </span>
                </div>

                <ChevronRight
                  size={16}
                  style={{
                    color: hovered === i ? PRIMARY : "#ccc",
                  }}
                />
              </div>

              {/* Title */}
              <h5 className="text-lg leading-snug flex-1">
                {paper.title}
              </h5>

              {/* Footer */}
              <div
                className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider pt-2 border-t"
                style={{ borderColor: `${PRIMARY}20`, color: PRIMARY }}
              >
                <BookOpen size={12} />
                <span>Whitepaper</span>
              </div>
            </a>
          ))}
        </div>

        {/* SHOW MORE */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="flex items-center gap-2 px-6 py-3 border rounded-lg text-sm font-bold uppercase tracking-wider transition-all group"
              style={{
                borderColor: PRIMARY,
                color: PRIMARY,
              }}
            >
              <span>Show More</span>
              <Plus
                size={16}
                className="group-hover:rotate-90 transition-transform duration-200"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}