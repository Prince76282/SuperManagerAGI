"use client";

import { Sparkles, TrendingUp, Code2, Plug, ShieldCheck } from "lucide-react";

const CARDS = [
  {
    iconBg: "bg-[#625FD0]",
    icon: <Sparkles className="w-[18px] h-[18px] text-white" strokeWidth={2} />,
    title: "Orchestrate AI Agents With a Single Prompt",
    desc: "Trigger autonomous specialist agents across every connected system, application and team using natural language. One prompt decomposes into a directed acyclic graph of coordinated subtasks executed in parallel by the Beehive architecture. No workflow builder. No pre-configured triggers. Just describe the outcome and agents execute.",
  },
  {
    iconBg: "bg-[#625FD0]",
    icon: (
      <TrendingUp className="w-[18px] h-[18px] text-white" strokeWidth={2} />
    ),
    title: "Accelerate Productivity Across Every Department",
    desc: "Deploy 200+ pre-built specialist agent templates across every business function  inventory, finance, logistics, marketing, customer care, engineering, operations and more. Every team gains an AI workforce that eliminates coordination overhead, generates reports autonomously and executes tasks without being asked twice.",
  },
  {
    iconBg: "bg-[#625FD0]",
    icon: <Code2 className="w-[18px] h-[18px] text-white" strokeWidth={2} />,
    title: "Build Agents With No Code Required",
    desc: "Every employee  not just developers  can build, configure and deploy AI agents using the visual agent builder. Business teams define what needs to happen. The Beehive architecture handles how it gets done. Engineering resources not required for the vast majority of agent deployments.",
  },
  {
    iconBg: "bg-[#625FD0]",
    icon: <Plug className="w-[18px] h-[18px] text-white" strokeWidth={2} />,
    title: "No Vendor Lock-In, No API Dependency",
    desc: "SuperManager AGI connects to any LLM, integrates with your existing tech stack and deploys on any cloud or on-premises environment. The ADA Integration Layer is model-agnostic  Anthropic Claude, OpenAI GPT, Azure OpenAI, Google Vertex AI, AWS Bedrock and more. You keep your infrastructure. We add the intelligence.",
  },
  {
    iconBg: "bg-[#625FD0]",
    icon: (
      <ShieldCheck className="w-[18px] h-[18px] text-white" strokeWidth={2} />
    ),
    title: "Enterprise-Grade Governance and Control",
    desc: "Complete visibility, auditability and control across every agent, every user and every data flow in one unified platform. Role-based access control, full audit trails, approval gates, human-in-the-loop controls and compliance-ready architecture. ADA keeps enterprise data inside your security perimeter  no data crosses an organisational boundary during agent reasoning.",
  },
];

export default function WhyEnterprises() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col justify-between gap-8 p-8 rounded-2xl border border-gray-100 bg-[#F9FAFB]">
            <div>
              <h1 className="text-3xl md:text-3xl lg:text-5xl text-slate-900 leading-[1.1] tracking-tight">
                Why Enterprises Choose the{" "}
                <span className="  bg-gradient-to-r from-[#625FD0] to-[#625FD0] bg-clip-text text-transparent">
                  AI Vibe Working Platform
                </span>
              </h1>
            </div>
          </div>

          {CARDS.map((card, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between gap-8 p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
              >
                {card.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <p className="text-[24px] font-medium text-slate-900 leading-snug">
                  {card.title}
                </p>
                <p className="text-[16px] text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
