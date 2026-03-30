"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    id: "agentic-platform",
    label: "Vibe Working Platform Pioneer",
    heading: "World’s First AI Vibe Working Platform SuperManager AGI",
    body: "The only enterprise AI deployment architecture that provably eliminates the network boundary assumption shared by Claude MCP, Manus and Microsoft Copilot...",
    cta: "Explore Platform",
    href: "/platform",
    imageSrc: "/Image/image1.jpg",
    imageAlt: "SuperManagerAGI Agentic Platform",
  },
  {
    id: "enterprise-ai",
    label: "Global AI Startup Recognition",
    heading: "Recognised by Perplexity March 2026",
    body: "Perplexity recognition highlights three specific technical achievements...",
    cta: "Learn More",
    href: "/enterprise-ai",
    imageSrc: "/Image/image5.jpg",
    imageAlt: "Enterprise AI Automation",
  },
  {
    id: "genai-productivity",
    label: "Microsoft Programme Recognition",
    heading: "Microsoft Accelerator Programme 2026",
    body: "Selected by Microsoft for the accelerator programme...",
    cta: "Discover Productivity AI",
    href: "/learnmore",
    imageSrc: "/Image/image5.jpg",
    imageAlt: "Generative AI Productivity",
  },
  {
    id: "ai-orchestration",
    label: "Peer-Reviewed Research Publication",
    heading: "Agentic Data Architecture March 2026",
    body: "The architecture underlying SuperManager AGI is documented...",
    cta: "View Architecture",
    href: "/learnmore",
    imageSrc: "/Image/image5.jpg",
    imageAlt: "AI Orchestration Platform",
  },
];

export default function AnalystRecognition() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="pt-20 pb-12 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-5">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl ">
            Industry <span className="text-[#625FD0]">Recognition</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Discover how SuperManager AGI is pioneering the AI Vibe Working
            Platform category the world’s first architecture that eliminates the
            network boundary assumption from enterprise AI agent deployment.
            Recognised for the ADA Integration Layer, Beehive Agentic
            Architecture and the first peer-reviewed framework for
            hallucination-free, sub-100ms autonomous enterprise AI.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-[#625FD0] px-6 py-3 text-white font-medium hover:bg-[#625FD0] transition"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* TABS */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* TAB NAV */}
          <div className="mb-10 overflow-x-auto scrollbar-hide">
            <nav className="flex gap-3 min-w-max">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs sm:text-sm md:text-base transition ${
                    activeTab === i
                      ? "bg-[#625FD0] text-white shadow"
                      : "border border-gray-200 hover:bg-[#625FD0] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* TEXT */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl ">
                {active.heading}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {active.body}
              </p>

              <Link
                href={active.href}
                className="inline-flex items-center justify-center w-fit rounded-lg bg-[#625FD0] px-5 py-2.5 text-white font-medium hover:bg-[#625FD0] transition"
              >
                {active.cta}
              </Link>

              {/* STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
                {[
                  { num: "100+", label: "Enterprise Deployments" },
                  { num: "50+", label: "AI Agents Deployed" },
                  { num: "24/7", label: "Autonomous Ops" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-xl sm:text-2xl text-[#625FD0] ">
                      {s.num}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white w-full max-w-md sm:max-w-lg">
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt}
                  width={600}
                  height={400}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
