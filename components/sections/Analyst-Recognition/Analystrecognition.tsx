"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    id: "agentic-platform",
    label: "Vibe Working Platform Pioneer",
    heading: "World's First AI Vibe Working Platform SuperManager AGI",
    body: "SuperManager AGI is the only enterprise AI deployment architecture that provably eliminates the network boundary assumption shared by Claude MCP, Manus, and Microsoft Copilot. While competing platforms route every agent call through external API hops  adding 80–400ms of latency per interaction  our Agentic Data Architecture (ADA) layer establishes persistent, in-process connections directly to your data sources. The result is a Vibe Working experience: fluid, intent-driven orchestration where business users describe outcomes in natural language and a hierarchy of specialist agents executes across departments simultaneously, in real time, without IT bottlenecks or middleware overhead.",
    cta: "Explore Platform",
   
    imageSrc: "/Image/image1.jpg",
    imageAlt: "SuperManagerAGI Agentic Platform",
  },
  {
    id: "enterprise-ai",
    label: "Global AI Startup Recognition",
    heading: "Recognised by Perplexity  March 2026",
    body: "Perplexity's March 2026 recognition spotlighted three specific technical achievements that set SuperManager AGI apart from the global AI startup field: the elimination of network-boundary latency through the ADA layer, the Controller Agent's provably correct task decomposition under concurrent load, and the first documented deployment of Beehive multi-agent orchestration in a live enterprise ERP environment. The citation placed SuperManager AGI among fewer than a dozen platforms worldwide described as advancing the state of agentic AI  not merely applying it  marking a significant milestone in the company's path from research to global commercial deployment.",
    cta: "Learn More",
   
    imageSrc: "/Image/image5.jpg",
    imageAlt: "Enterprise AI Automation",
  },
  {
    id: "genai-productivity",
    label: "Microsoft Programme Recognition",
    heading: "Microsoft Accelerator Programme  2026",
    body: "Selected for the Microsoft Accelerator Programme 2026, SuperManager AGI joins an exclusive cohort of enterprise AI companies granted direct access to Azure infrastructure credits, Microsoft's global partner network, and co-engineering support from Redmond-based AI teams. The selection validates the platform's readiness for Fortune 500 deployment at scale  specifically its native integration with Microsoft 365, Azure Active Directory RBAC, and Copilot Studio  while opening co-sell pathways across Microsoft's 400,000-strong partner ecosystem. Programme membership accelerates the roadmap toward certified enterprise deployments across Europe, the Middle East, and Asia-Pacific.",
    cta: "Discover Productivity AI",
   
    imageSrc: "/Image/image5.jpg",
    imageAlt: "Generative AI Productivity",
  },
  {
    id: "ai-orchestration",
    label: "Peer-Reviewed Research Publication",
    heading: "Agentic Data Architecture  Published March 2026",
    body: "The architecture underlying SuperManager AGI is now formally documented in a peer-reviewed publication released March 2026, establishing ADA as a reproducible, auditable framework for latency-free multi-agent orchestration. The paper details the theoretical basis for eliminating the network boundary in agent-to-database communication, benchmarks ADA against MCP and REST-based architectures across five enterprise workload profiles, and introduces the formal proof of Controller Agent task decomposition correctness under parallel execution. The publication provides the research community, enterprise architects, and independent auditors with the technical foundation to evaluate, extend, and deploy ADA in regulated and high-throughput environments.",
    cta: "View Architecture",
   
    imageSrc: "/Image/image5.jpg",
    imageAlt: "AI Orchestration Platform",
  },
];

export default function AnalystRecognition() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <div className="relative min-h-screen bg-white mt-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[600px] h-[600px] bg-[#8A84FF]/20 blur-[140px] rounded-full"></div>
      </div>

      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* TAB NAV */}
          <div className="mb-12 overflow-x-auto scrollbar-hide">
            <nav className="flex gap-3 min-w-max">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`relative whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                    activeTab === i
                      ? "bg-[#625FD0] text-white shadow-md"
                      : "border border-gray-200 text-gray-600 hover:bg-[#625FD0] hover:text-white"
                  }`}
                >
                  {tab.label}

                  {/* Active Indicator */}
                  {activeTab === i && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-white rounded-full"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* TEXT */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                {active.heading}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
                {active.body}
              </p>

              
              {/* STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                {[
                  { num: "100+", label: "Enterprise Deployments" },
                  { num: "50+", label: "AI Agents Deployed" },
                  { num: "24/7", label: "Autonomous Ops" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <span className="text-2xl sm:text-3xl font-semibold text-[#625FD0]">
                      {s.num}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="group rounded-2xl overflow-hidden shadow-lg bg-white w-full max-w-md sm:max-w-lg transition-all duration-500 hover:shadow-2xl">
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt}
                  width={600}
                  height={400}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}