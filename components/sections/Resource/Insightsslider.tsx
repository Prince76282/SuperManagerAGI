"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

const insights = [
  {
    title:
      "Research and Architecture",
    excerpt:
      "Peer-reviewed research and technical documentation on the Agentic Data Architecture, Beehive Agentic Architecture, evidence-majority voting and the MCP and CLI trilemma. All benchmarks and configurations published for full reproducibility.",
    tag: "Management Insight",
   
  },
  {
    title: "Deployment Guides",
    excerpt:
      "Step-by-step implementation guides for deploying specialist agents across every department and industry. From first agent configuration to full organisational rollout. Covers ADA integration layer setup, database connectivity, agent calibration and human oversight configuration.",
    tag: "Management Insight",
   
  },
  {
    title: "Industry Insights",
    excerpt:
      "Deep analysis of how the Vibe Working Platform is transforming D2C brand operations, consulting firm delivery, manufacturing supply chains, financial services reconciliation, healthcare administration and enterprise portfolio management.",
    tag: "Management Insight",
   
  },
 
];

export default function InsightsSlider() {

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = sliderRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir * el.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 lg:py-16">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">

          <h2 className="text-2xl sm:text-3xl lg:text-5xl text-black">
            Resource Categories
          </h2>

          <div className="flex items-center gap-3">

            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 border-2 border-[#625FD0] rounded-full flex items-center justify-center text-[#625FD0] hover:bg-[#625FD0] hover:text-white transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 border-2 border-[#625FD0] rounded-full flex items-center justify-center text-[#625FD0] hover:bg-[#625FD0] hover:text-white transition"
            >
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 no-scrollbar"
        >

          {insights.map((item, i) => (

            <article
              key={i}
              className="snap-start flex-shrink-0
              w-[85%] sm:w-[48%] lg:w-[32%]
              border border-gray-200 rounded-xl
              p-6 flex flex-col gap-4
              hover:border-[#625FD0]
              hover:shadow-lg hover:-translate-y-1
              transition-all duration-300 group"
            >

              <span className="text-[11px] text-[#625FD0] uppercase tracking-widest font-medium">
                {item.tag}
              </span>

              <h3 className="text-lg font-semibold text-black leading-snug group-hover:text-[#625FD0] transition">
                {item.title}
              </h3>

              <p className="text-sm text-black/60 flex-1 leading-relaxed">
                {item.excerpt}
              </p>

              

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}