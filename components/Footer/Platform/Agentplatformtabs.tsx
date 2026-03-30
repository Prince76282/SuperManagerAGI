"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    label: "Beehive Multi-Agent Orchestration",
    heading:
      "Coordinate Specialist Agents Across Every Department Simultaneously",
    body: "The Controller Agent manages task decomposition and parallel execution across specialist agents...",

    imgSrc: "/Image/World'sFirst/Autopilot.jpg",
  },
  {
    label: "ADA Integration Layer",
    heading: "Direct Database Connectivity at 2 to 15ms No Network Boundary",
    body: "Native async connections to PostgreSQL, MongoDB and Redis...",

    imgSrc: "/Image/Coordinate-intelligent.jpg",
  },
  {
    label: "No-Code and Pro-Code Agent Builder",
    heading: "Every Employee Can Build, Deploy and Manage AI Agents",
    body: "Visual agent builder for business users...",

    imgSrc: "/Image/Connect-agents.avif",
  },
  {
    label: "Real-Time Monitoring and Intelligence",
    heading: "Live Visibility Across Every Agent, Every Workflow",
    body: "Full observability into agent activity...",

    imgSrc: "/Image/World'sFirst/The-ERP-.webp",
  },
  {
    label: "Enterprise Security and Governance",
    heading: "Deploy AI Responsibly With Full Control",
    body: "SOC-2, GDPR, ISO 27001, RBAC and more.",

    imgSrc: "/Image/Connect-agents.avif",
  },
  {
    label: "Universal Integration Layer",
    heading: "Connect Any Application Seamlessly",
    body: "200+ integrations across enterprise systems.",

    imgSrc: "/Image/World'sFirst/financial-management.jpg",
  },
];

export default function AgentPlatformTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 lg:mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl  text-black mb-3">
              Core Platform Capabilities
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              A unified platform to design, orchestrate, and optimize AI agents
              across teams and systems.
            </p>
          </div>

          <Link
            href="/get-in-touch"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-[#625FD0] text-white font-medium hover:bg-[#625FD0] transition"
          >
            Request a Demo
          </Link>
        </div>

        {/* MAIN LAYOUT */}
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
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  text-black mb-3">
                {active.heading}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                {active.body}
              </p>
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
