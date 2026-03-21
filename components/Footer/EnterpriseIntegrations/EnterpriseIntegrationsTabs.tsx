"use client";

import Link from "next/link";
import { useState } from "react";

const tabs = [
  {
    label: "Autonomous Agent Orchestration",
    heading:
      "Coordinate intelligent AI agents across complex business workflows",
    body: "SuperManager AGI enables organizations to orchestrate multiple autonomous AI agents that collaborate to plan, execute, and optimize tasks across departments and systems. Agents dynamically coordinate actions, delegate responsibilities, and adapt to real-time business conditions.",
    href: "/platform/agent-orchestration",
    imgSrc: "/Image/Allocate-Projects.jpg",
  },
  {
    label: "AI Engineering Platform",
    heading: "Design, test, and deploy enterprise-grade AI agents",
    body: "SuperManager AGI provides a full engineering platform for building production-ready AI agents. Develop with prompt engineering tools, evaluation frameworks, model orchestration pipelines, and scalable deployment infrastructure.",
    href: "/platform/ai-engineering-tools",
    imgSrc: "/Image/Design.jpg",
  },
  {
    label: "Enterprise Knowledge AI",
    heading: "Connect AI agents with enterprise data and knowledge",
    body: "Integrate AI agents with internal knowledge systems, business data, and enterprise documents. Using retrieval pipelines, contextual memory, and knowledge graphs, agents can reason over organizational intelligence.",
    href: "/platform/enterprise-data-ai",
    imgSrc: "/Image/Coordinate-intelligent.jpg",
  },
  {
    label: "No-Code + Pro-Code Development",
    heading: "Build AI agents visually or extend with developer frameworks",
    body: "Business teams can design AI agents using visual workflows while developers extend functionality with APIs, SDKs, and programmable frameworks for advanced automation scenarios.",
    href: "/platform/no-code-pro-code",
    imgSrc: "/Image/No-Code.png",
  },
  {
    label: "AI Observability",
    heading: "Monitor and optimize AI agent performance",
    body: "Track how AI agents operate across workflows using real-time monitoring, performance tracing, analytics dashboards, and continuous optimization tools.",
    href: "/platform/ai-observability",
    imgSrc: "/Image/Monitor.jpg",
  },
  {
    label: "Enterprise Security & Governance",
    heading: "Deploy AI with enterprise-grade security and governance",
    body: "SuperManager AGI includes advanced governance controls such as role-based access management, security guardrails, compliance monitoring, and detailed audit logging.",
    href: "/platform/security-governance",
    imgSrc: "/Image/Deploycontrols.png",
  },
];

export default function EnterpriseIntegrationsTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-5xl  text-black mb-4 leading-tight">
              Build and Orchestrate
              <span className="text-[#625FD0]"> Autonomous AI Agents</span>
            </h1>
            text-3xl
            <p className="text-gray-600 text-lg leading-relaxed">
              SuperManager AGI is an enterprise platform designed to build,
              orchestrate, and scale intelligent AI agents that automate complex
              operations across teams, applications, and enterprise data
              systems.
            </p>
          </div>

          <Link
            href="get-in-touch"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#625FD0] text-white font-semibold hover:opacity-90 transition"
          >
            Request a Demo
          </Link>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:w-72">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveIndex(i)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition whitespace-nowrap
                ${
                  activeIndex === i
                    ? "bg-[#625FD0]/10 text-[#625FD0]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Content */}
          <div className="flex-1 grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {active.heading}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {active.body}
              </p>

              <Link
                href={active.href}
                className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-[#625FD0] text-white font-semibold hover:opacity-90 transition"
              >
                Learn more
              </Link>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src={active.imgSrc}
                alt={active.heading}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
