"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    label: "Beehive Multi-Agent Orchestration",
    heading: "Coordinate Specialist Agents Across Every Department Simultaneously",
    body: "The Controller Agent acts as your enterprise's central nervous system  decomposing complex goals into parallel workstreams and dispatching them to domain-specific agents across Finance, HR, Operations, and Sales in a single execution cycle. Unlike sequential AI tools, Beehive agents communicate peer-to-peer, share context in real time, and self-heal when a downstream agent stalls. The result: a task that would take a human team three days resolves in minutes, with full audit trails and zero coordination overhead.",
    imgSrc: "/Image/World'sFirst/Autopilot.jpg",
  },
  {
    label: "ADA Integration Layer",
    heading: "Direct Database Connectivity at 2 to 15ms  No Network Boundary",
    body: "ADA (Async Data Access) establishes persistent, native connections directly to your PostgreSQL, MongoDB, Redis, and vector databases  bypassing the latency and fragility of traditional API middleware. Agents read, write, and transact against live data in 2–15ms, enabling real-time decision-making rather than stale-batch approximations. Connection pooling, automatic failover, and row-level permissioning are built in, so your data layer stays secure and performant regardless of agent concurrency.",
    imgSrc: "/Image/Coordinate-intelligent.jpg",
  },
  {
    label: "No-Code and Pro-Code Agent Builder",
    heading: "Every Employee Can Build, Deploy and Manage AI Agents",
    body: "Business users drag, drop, and configure agents through a visual canvas  no prompt engineering or coding required. Engineers unlock a full pro-code environment with version control, custom tool integrations, and local testing via CLI. Both surfaces share the same runtime, so a workflow started by an ops analyst can be extended by a developer without rebuilding from scratch. Publish to your internal agent marketplace in one click; role-based access controls govern who can edit, deploy, or retire each agent.",
    imgSrc: "/Image/Connect-agents.avif",
  },
  {
    label: "Real-Time Monitoring and Intelligence",
    heading: "Live Visibility Across Every Agent, Every Workflow",
    body: "A unified observability dashboard streams agent status, task progress, token consumption, latency percentiles, and error rates as they happen  not after the fact. Set threshold-based alerts that page your team when an agent deviates from expected behavior, costs spike above budget, or a critical workflow stalls. Built-in replay lets you rewind any agent run step by step, inspect inputs and outputs at each node, and pinpoint the exact decision that produced an unexpected result. Turn raw telemetry into actionable intelligence without leaving the platform.",
    imgSrc: "/Image/World'sFirst/The-ERP-.webp",
  },
  {
    label: "Enterprise Security and Governance",
    heading: "Deploy AI Responsibly With Full Control",
    body: "Every agent interaction is governed by SOC 2 Type II, ISO 27001, and GDPR-compliant controls baked into the platform  not bolted on afterward. Role-based access control (RBAC) enforces least-privilege at the agent, tool, and data-source level. All prompts, outputs, and tool calls are logged immutably to your chosen SIEM or data warehouse for regulatory review. PII detection automatically redacts sensitive fields before they reach model context, and a policy engine lets compliance teams define hard guardrails  actions agents can never take, regardless of instruction.",
    imgSrc: "/Image/Connect-agents.avif",
  },
  {
    label: "Universal Integration Layer",
    heading: "Connect Any Application Seamlessly",
    body: "200+ pre-built connectors cover the full enterprise stack  Salesforce, SAP, ServiceNow, Workday, Slack, Microsoft 365, and more  each with managed authentication, schema mapping, and rate-limit handling already configured. For bespoke systems, a visual API builder generates a production-ready connector from an OpenAPI spec in under five minutes. Webhooks, event streams, and file-drop triggers let agents react to external signals the moment they occur, turning your existing software investments into active participants in every AI workflow.",
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
