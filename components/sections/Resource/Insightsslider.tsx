"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const insights = [
  {
    title: "What Great Managers Do Differently: Habits That Drive Team Performance",
    excerpt:
      "In today's rapidly evolving workplace, the ability to motivate employees, streamline communication, and unlock team potential is a competitive necessity for every manager.",
    tag: "Management Insight",
    href: "#",
  },
  {
    title: "The Art of Parallel Delegation",
    excerpt:
      "Running multiple workstreams simultaneously is one of the most persistent challenges in management. Learn how top managers delegate without losing control.",
    tag: "Management Insight",
    href: "#",
  },
  {
    title: "The Manager Productivity Paradox",
    excerpt:
      "Micromanagement slows teams down. The best managers know when to step back and how to create the conditions for autonomous execution.",
    tag: "Management Insight",
    href: "#",
  },
  {
    title: "The Rise of Collaborative Leadership",
    excerpt:
      "Today's most effective managers lead through influence, not authority.",
    tag: "Management Insight",
    href: "#",
  },
  {
    title: "1:1 Meetings That Actually Work",
    excerpt:
      "One-on-ones are the most powerful tool a manager has  and the most wasted.",
    tag: "Management Insight",
    href: "#",
  },
  {
    title: "The Future of Managing People",
    excerpt:
      "Research shows leadership expectations are evolving rapidly.",
    tag: "Management Insight",
    href: "#",
  },
];

export default function InsightsSlider() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  /* RESPONSIVE BREAKPOINT LOGIC */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = insights.length - visibleCount;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [visibleCount]);

  return (
    <section className="bg-white py-16 lg:py-20">

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black">
            Management Insights
          </h2>

          {/* Controls */}
          <div className="flex items-center gap-3">

            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 border-2 border-[#625FD0] rounded-full flex items-center justify-center hover:bg-[#625FD0] text-[#625FD0] hover:text-white transition disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-10 h-10 border-2 border-[#625FD0] rounded-full flex items-center justify-center hover:bg-[#625FD0] text-[#625FD0]  hover:text-white transition disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

        {/* Slider */}
        <div className="overflow-hidden">

          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${current * (100 / visibleCount)}%)`,
            }}
          >

            {insights.map((item) => (
              <article
                key={item.title}
                className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]
                border border-gray-200 hover:border-[#625FD0] rounded-2xl p-6
                flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 group"
              >

                <span className="text-[11px] text-[#625FD0] uppercase tracking-widest font-medium">
                  {item.tag}
                </span>

                <span className="text-lg font-semibold text-black leading-snug group-hover:text-[#625FD0] transition">
                  {item.title}
                </span>

                <p className="text-sm text-black/60 flex-1 leading-relaxed">
                  {item.excerpt}
                </p>

                <Link
                  href={item.href}
                  className="flex items-center justify-center bg-[#625FD0] px-6 py-3 text-white font-semibold text-sm rounded-md hover:opacity-90 transition"
                >
                  Read More
                </Link>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}