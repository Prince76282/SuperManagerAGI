"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    label: "Autonomous Agent Orchestration",
    heading: "Coordinate autonomous AI agents to execute complex workflows",
    body: "SuperManager AGI orchestrates multiple specialized AI agents...",
    href: "/learnmore",
    imgSrc: "/Image/ConnectSystems.jpg",
  },
  {
    label: "AI Engineering Platform",
    heading: "Design, test, and deploy enterprise AI agents",
    body: "Build production-ready AI agents with a complete toolkit...",
    href: "/learnmore",
    imgSrc: "/Image/Design.jpg",
  },
  {
    label: "Enterprise Knowledge AI",
    heading: "Connect AI agents to enterprise knowledge systems",
    body: "Enable AI agents to reason over enterprise knowledge...",
    href: "/learnmore",
    imgSrc: "/Image/ConnectSystems.jpg",
  },
  {
    label: "No-Code + Pro-Code Development",
    heading: "Build visually or extend with developer tools",
    body: "Business teams can create AI agents visually...",
    href: "/learnmore",
    imgSrc: "/Image/No-Code.png",
  },
  {
    label: "AI Observability",
    heading: "Monitor and optimize AI agent performance",
    body: "Gain full visibility into AI agent activity...",
    href: "/learnmore",
    imgSrc: "/Image/Monitorperformance.jpeg",
  },
  {
    label: "Enterprise Security & Governance",
    heading: "Deploy AI safely with full control",
    body: "SuperManager AGI provides governance tools...",
    href: "/learnmore",
    imgSrc: "/Image/Deploycontrols.png",
  },
];

export default function AutonomousAgentTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 lg:mb-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-3 leading-tight">
              Build and Orchestrate
              <span className="text-[#625FD0]"> Autonomous AI Agents</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              SuperManager AGI is an enterprise platform designed to build,
              orchestrate, and scale intelligent AI agents.
            </p>
          </div>

          <Link
            href="/get-in-touch"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-[#625FD0] text-white font-medium hover:bg-indigo-700 transition"
          >
            Request a Demo
          </Link>
        </div>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* TABS */}
          <nav className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible lg:w-72 pb-2 scrollbar-hide">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveIndex(i)}
                className={`text-left px-4 py-2.5 rounded-lg text-xs sm:text-sm md:text-base font-medium transition whitespace-nowrap
                ${
                  activeIndex === i
                    ? "bg-[#625FD0] text-white shadow"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* CONTENT */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* TEXT */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-3">
                {active.heading}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                {active.body}
              </p>

              {/* <Link
                href={active.href}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#625FD0] text-white font-medium hover:bg-indigo-700 transition"
              >
                Learn more
              </Link> */}
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-xl overflow-hidden border border-gray-200">
              <Image
                src={active.imgSrc}
                alt={active.heading}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
