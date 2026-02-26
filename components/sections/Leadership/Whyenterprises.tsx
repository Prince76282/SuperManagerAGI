"use client";

import { Sparkles, TrendingUp, Code2, Plug, ShieldCheck } from "lucide-react";

const CARDS = [
  {
    iconBg: "bg-[#FFF9C4]",
    icon: <Sparkles className="w-[18px] h-[18px] text-black" strokeWidth={2} />,
    title: "Orchestrate AI agents with a single prompt",
    desc: "Trigger AI agents, built in-house or with SuperManagerAGI, for workflows across systems, apps, and teams using natural language.",
  },
  {
    iconBg: "bg-[#DCFCE7]",
    icon: (
      <TrendingUp className="w-[18px] h-[18px] text-black" strokeWidth={2} />
    ),
    title: "Accelerate productivity with AI agents",
    desc: "Access 200+ AI agent templates, built for enterprise functions to enhance employee productivity and experience.",
  },
  {
    iconBg: "bg-[#EDE9FE]",
    icon: <Code2 className="w-[18px] h-[18px] text-black" strokeWidth={2} />,
    title: (
      <>
        Build AI agents with no code
        <br />
        or experience required
      </>
    ),
    desc: "Allow every employee, not just developers, to build, publish, and manage AI agents seamlessly and securely.",
  },
  {
    iconBg: "bg-[#DCFCE7]",
    icon: <Plug className="w-[18px] h-[18px] text-black" strokeWidth={2} />,
    title: "Freedom to choose how you use your system, no vendor lock-in",
    desc: "Avoid platform constraints with a solution that lets you use any LLM, integrates with your existing tech stack, and deploys on any cloud.",
  },
  {
    iconBg: "bg-[#FFEDD5]",
    icon: (
      <ShieldCheck className="w-[18px] h-[18px] text-black" strokeWidth={2} />
    ),
    title: "Stay in control with enterprise-grade governance",
    desc: "Get complete visibility, auditability, and control across every agent, user, and data flow in one solution.",
  },
];

export default function WhyEnterprises() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col justify-between gap-8 p-8 rounded-2xl border border-gray-100 bg-[#F9FAFB]">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-[1.1] tracking-tight">
                Why enterprises choose{" "}
                <span className="italic font-normal p-2 bg-gradient-to-r from-[#625FD0] to-[#625FD0] bg-clip-text text-transparent">
                  AI for Work?
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
