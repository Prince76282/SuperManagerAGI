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
      "The Rise of Autonomous Leadership: Why SuperManagerAGI is replacing traditional management layers",
    href: "/resources/autonomous-leadership-supermanageragi",
    gradient: "from-violet-200 via-indigo-100 to-violet-300",
    icon: "🧠",
    tag: "Leadership Intelligence",
  },
  {
    id: 2,
    type: "Case Study",
    title:
      "How a global enterprise reduced decision latency by 38% using SuperManagerAGI orchestration",
    href: "/resources/decision-latency-case-study",
    gradient: "from-emerald-200 via-teal-100 to-emerald-300",
    icon: "📊",
    tag: "Enterprise Ops",
  },
  {
    id: 3,
    type: "Deployment Guide",
    title:
      "Inside the SuperManagerAGI architecture: deployment models, integrations, and scaling strategy",
    href: "/resources/supermanageragi-architecture-guide",
    gradient: "from-orange-200 via-amber-100 to-orange-300",
    icon: "📋",
    tag: "Platform Engineering",
  },
  {
    id: 4,
    type: "Insights",
    title:
      "Autonomous organizations explained: the operating model powered by AI managers",
    href: "/resources/autonomous-organization-model",
    gradient: "from-cyan-200 via-sky-100 to-cyan-300",
    icon: "⚡",
    tag: "Operations Strategy",
  },
  {
    id: 5,
    type: "Research",
    title:
      "Scaling workforce intelligence: how SuperManagerAGI transforms people operations",
    href: "/resources/workforce-intelligence-research",
    gradient: "from-pink-200 via-rose-100 to-pink-300",
    icon: "👥",
    tag: "People Analytics",
  },
  {
    id: 6,
    type: "Whitepaper",
    title:
      "Trustworthy AGI management systems: governance, auditability, and enterprise safeguards",
    href: "/resources/trustworthy-agi-governance",
    gradient: "from-indigo-200 via-purple-100 to-indigo-300",
    icon: "🔐",
    tag: "AI Governance",
  },
];

/* ================= COMPONENT ================= */

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

  const next = () =>
    scrollToIndex(Math.min(index + 1, resources.length - 1));
  const prev = () =>
    scrollToIndex(Math.max(index - 1, 0));

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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  leading-tight">
              Learn how{" "}
              <span className="text-[#625FD0]">
                SuperManagerAGI
              </span>
              <br className="hidden md:block" />
              powers autonomous organizations
            </h1>
          </div>

          {/* Desktop Arrows */}
          <div className="hidden md:flex gap-3 shrink-0">
            <button
              aria-label="Previous"
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-black/15 hover:bg-black/5 transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              aria-label="Next"
              onClick={next}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-black/15 hover:bg-black/5 transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
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
                  <h1 className="text-xs font-semibold uppercase tracking-wide text-[#625FD0]">
                    {card.type}
                  </h1>

                  <span className="text-[11px] px-2 py-1 rounded-full bg-black/5 text-[#625FD0]">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-md sm:text-base text-gray-700  flex-1">
                  {card.title}
                </h3>

                
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
                i === index
                  ? "w-6 h-2 bg-[#625FD0]"
                  : "w-2 h-2 bg-black/20"
              }`}
            />
          ))}
        </div>

     
        
      </div>
    </section>
  );
}