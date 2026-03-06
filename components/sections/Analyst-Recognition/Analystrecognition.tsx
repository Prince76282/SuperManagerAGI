"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const tabs = [
  {
    id: "agentic-platform",
    label: "Agentic AI Platform",
    heading:
      "SuperManagerAGI recognized for pioneering enterprise Agentic AI platforms",
    body:
      "SuperManagerAGI empowers enterprises to deploy autonomous AI agents that coordinate workflows, automate decision-making, and scale operational intelligence. Organizations leverage our platform to transform fragmented processes into intelligent, agent-driven systems.",
    cta: "Explore Platform",
    href: "/platform",
    badge: "Agentic Platform",
    imageSrc: "/Image/image1.jpg",
    imageAlt: "SuperManagerAGI Agentic Platform",
  },
  {
    id: "enterprise-ai",
    label: "Enterprise AI Automation",
    heading: "Automate enterprise workflows with intelligent AI agents",
    body:
      "SuperManagerAGI enables teams to orchestrate AI agents across departments from operations and product teams to customer support and internal knowledge systems. Our enterprise automation framework ensures scalability, governance, and real-time intelligence.",
    cta: "Learn More",
    href: "/enterprise-ai",
    badge: "Enterprise AI",
    imageSrc: "/Image/image5.jpg",
    imageAlt: "Enterprise AI Automation",
  },
  {
    id: "genai-productivity",
    label: "Generative AI Productivity",
    heading:
      "Accelerate productivity with AI-powered knowledge and task automation",
    body:
      "SuperManagerAGI integrates generative AI capabilities across your workflows. Teams can search internal knowledge, generate insights, automate routine tasks, and deploy AI copilots that assist with engineering, operations, and business processes.",
    cta: "Discover Productivity AI",
    href: "/productivity-ai",
    badge: "GenAI Productivity",
    imageSrc: "/Image/image5.jpg",
    imageAlt: "Generative AI Productivity",
  },
  {
    id: "ai-orchestration",
    label: "AI Orchestration",
    heading:
      "Unified AI orchestration across models, agents, and enterprise systems",
    body:
      "SuperManagerAGI provides a complete orchestration layer for building, deploying, and monitoring AI agents. From model management and data pipelines to observability and automation, our platform helps enterprises operationalize AI securely and efficiently.",
    cta: "View Architecture",
    href: "/architecture",
    badge: "AI Orchestration",
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
      <section className="pt-24 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-6">

          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight">
            Industry{" "}
            <span className="text-[#625FD0] ">
              Recognition
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-xl">
            Discover how SuperManagerAGI is transforming enterprises with
            autonomous AI agents, intelligent automation, and next-generation
            AI orchestration.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center rounded-lg bg-[#625FD0] px-5 py-2.5 text-white font-semibold transition-all duration-300 hover:bg-indigo-700"
          >
            Get in touch
          </a>

        </div>
      </section>

      {/* TABS */}
      <section className="px-6 md:px-12 lg:px-20 pb-28">
        <div className="max-w-6xl mx-auto">

          {/* TAB NAV */}
          <div className="mb-12 overflow-x-auto scrollbar-hide">
            <nav className="flex gap-3 min-w-max">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`whitespace-nowrap px-4 py-3 rounded-xl text-sm md:text-base transition ${
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* TEXT */}
            <div className="flex flex-col gap-8">

              <h2 className="text-2xl md:text-3xl lg:text-4xl">
                {active.heading}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {active.body}
              </p>

              <Link
                href={active.href}
                className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-2 py-2 text-white font-semibold  transition"
              >
                {active.cta}
               
              </Link>

              {/* STATS */}
              <div className="flex gap-8 pt-4">
                {[
                  { num: "100+", label: "Enterprise Deployments" },
                  { num: "50+", label: "AI Agents Deployed" },
                  { num: "24/7", label: "Autonomous Operations" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-2xl font-bold text-[#625FD0]">
                      {s.num}
                    </span>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white max-w-[520px] w-full">
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt}
                  width={520}
                  height={400}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}