"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ================= DATA ================= */

const resources = [
  {
    id: 1,
    type: "Executive Brief",
    title:
      "The AI Vibe Working Platform: Why Autonomous Agent Workforces Are Replacing Manual Operational Layers",
    href: "/resources/autonomous-leadership-supermanageragi",
    gradient: "bg-[#625FD0]",
    icon: "🧠",
    tag: "Vibe Working Platform",
  },
  {
    id: 2,
    type: "Case Study",
    title:
      "How a D2C Fashion Brand Eliminated Stock-Outs and Reduced Logistics Cost by 18% Using SuperManager AGI",
    href: "/resources/decision-latency-case-study",
    gradient: "bg-[#625FD0]",
    icon: "📊",
    tag: "D2C Operations",
  },
  {
    id: 3,
    type: "Technical Brief",
    title:
      "Inside the Agentic Data Architecture: How SuperManager AGI Achieves 65ms Latency and 4.2% Hallucination Rate",
    href: "/resources/supermanageragi-architecture-guide",
    gradient: "bg-[#625FD0]",
    icon: "📋",
    tag: "ADA Architecture",
  },
  {
    id: 4,
    type: "Competitive Analysis",
    title:
      "Why Claude MCP, Manus and Microsoft Copilot Cannot Match the Vibe Working Platform Architecture",
    href: "/resources/autonomous-organization-model",
    gradient: "bg-[#625FD0]",
    icon: "⚡",
    tag: "Platform Differentiation",
  },
  {
    id: 5,
    type: "Research Paper",
    title:
      "Agentic Data Architecture (ADA): Eliminating the API Layer for Hallucination-Free, Sub-100ms Enterprise AI Agents , Nirmal Nambiar, March 2026",
    href: "/resources/workforce-intelligence-research",
    gradient: "bg-[#625FD0]",
    icon: "👥",
    tag: "Peer-Reviewed Research",
  },
  {
    id: 6,
    type: "Deployment Guide",
    title:
      "From First Agent to Full Org Deployment: The 90-Day SuperManager AGI Implementation Playbook",
    href: "/resources/trustworthy-agi-governance",
    gradient: "bg-[#625FD0]",
    icon: "🔐",
    tag: "Enterprise Deployment",
  },
];

export default function ResourcesSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i: number) => {
    const el = sliderRef.current;
    if (!el) return;

    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;

    const gap = 20;
    const width = card.offsetWidth + gap;

    el.scrollTo({
      left: width * i,
      behavior: "smooth",
    });

    setIndex(i);
  };

  const next = () => scrollToIndex(Math.min(index + 1, resources.length - 1));
  const prev = () => scrollToIndex(Math.max(index - 1, 0));

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const handleScroll = () => {
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;

      const width = card.offsetWidth + 20;
      const i = Math.round(el.scrollLeft / width);
      setIndex(i);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white text-black py-16 sm:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl  leading-tight">
              Learn How{" "}
              <span className="text-[#625FD0]">SuperManager AGI </span>
              <br className="hidden md:block" />
              Powers the Vibe Working Platform
            </h1>
          </div>

          {/* Desktop Arrows */}
          <div className="hidden md:flex gap-3 shrink-0">
            <button
              aria-label="Previous"
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-[#625FD0] hover:bg-black/5 transition"
            >
              <ChevronLeft className="w-5 h-5 text-[#625FD0]" />
            </button>

            <button
              aria-label="Next"
              onClick={next}
              className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-[#625FD0] hover:bg-black/5 transition"
            >
              <ChevronRight className="w-5 h-5 text-[#625FD0]" />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
          flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
        >
          {resources.map((card) => (
            <div
              key={card.id}
              className="
              snap-start
              min-w-[85%]
              sm:min-w-[65%]
              md:min-w-[48%]
              lg:min-w-[32%]
              rounded-2xl border border-black/10 bg-white
              hover:shadow-xl hover:-translate-y-1
              transition duration-300
              flex flex-col
              "
            >
              {/* Top Gradient */}
              <div
                className={`h-40 sm:h-44 rounded-t-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border border-black/10 flex items-center justify-center text-2xl sm:text-3xl shadow-sm">
                  {card.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div className="flex items-center justify-between">
                  <h1 className="text-md  uppercase tracking-wide text-[#625FD0]">
                    {card.type}
                  </h1>

                  <span className="text-[14px] px-2 py-1 rounded-lg bg-black/5 text-[#625FD0]">
                    {card.tag}
                  </span>
                </div>

                <span className="text-md sm:text-base text-gray-700  flex-1">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS (Mobile Only) */}
        <div className="flex md:hidden justify-center gap-2 mt-8">
          {resources.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`transition-all rounded-full ${
                i === index ? "w-6 h-2 bg-[#625FD0]" : "w-2 h-2 bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
