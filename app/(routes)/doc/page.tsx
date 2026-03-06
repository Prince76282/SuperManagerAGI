"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Cpu,
  Network,
  Wrench,
  ClipboardList,
  Users,
  BarChart3,
  ShieldCheck,
  BookOpen,
  Code2,
  MessageSquare,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

const NAV_LINKS = ["Docs", "API", "Community", "Changelog"];

const CORE_PRODUCTS = [
  {
    icon: ClipboardList,
    title: "Autonomous PM",
    description:
      "AI that plans sprints, assigns tasks, tracks progress, and unblocks teams  without waiting for a manager to intervene.",
  },
  {
    icon: Users,
    title: "Team Intelligence",
    description:
      "Understands each team member's capacity, strengths, and workload to make smart, context-aware delegation decisions.",
  },
  {
    icon: BarChart3,
    title: "Risk & Timeline Engine",
    description:
      "Detects deadline drift, scope creep, and dependency conflicts in real time  before they become project failures.",
  },
  {
    icon: ShieldCheck,
    title: "Manager Control Layer",
    description:
      "Full audit trails, approval gates, and override controls so managers stay in command while the AI handles execution.",
  },
];

const DOC_SECTIONS = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description:
      "Connect your workspace, import active projects, and activate SuperManagerAGI in under 10 minutes.",
    links: [
      "Quick Setup Guide",
      "Workspace Configuration",
      "Onboarding Checklist",
    ],
  },
  {
    icon: Code2,
    title: "API Reference",
    description:
      "Programmatically manage projects, trigger autonomous agents, and query real-time project status via REST API.",
    links: ["Authentication", "Projects Endpoint", "Agent Actions API"],
  },
  {
    icon: Network,
    title: "Integrations",
    description:
      "Connect SuperManagerAGI to Jira, Asana, Notion, Slack, Linear, and your existing project management stack.",
    links: ["Jira Sync", "Slack Notifications", "Webhook Events"],
  },
  {
    icon: Wrench,
    title: "Autonomous Agents",
    description:
      "Configure and deploy AI agents that handle sprint planning, task triage, stand-up synthesis, and reporting.",
    links: ["Sprint Planner Agent", "Stand-Up Agent", "Risk Monitor Agent"],
  },
  {
    icon: MessageSquare,
    title: "Manager Commands",
    description:
      "Use natural language to instruct SuperManagerAGI  delegate tasks, request status reports, or adjust priorities in plain English.",
    links: [
      "Command Reference",
      "Natural Language Interface",
      "Voice Command Setup",
    ],
  },
  {
    icon: RefreshCw,
    title: "Changelog",
    description:
      "Stay current with the latest SuperManagerAGI updates, autonomous agent improvements, and new integration releases.",
    links: ["v2.4 Release Notes", "Agent Behavior Updates", "Breaking Changes"],
  },
];

function ProductCard({ icon: Icon, title, description }: any) {
  return (
    <div className="group flex flex-col gap-4 p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-[#625FD0] flex items-center justify-center text-white shadow-md">
        <Icon size={18} />
      </div>
      <div>
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-2xl text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 text-md leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function DocCard({ icon: Icon, title, description, links }: any) {
  return (
    <div className="group flex flex-col gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#625FD0]/40 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#625FD0]/10 flex items-center justify-center text-[#625FD0]">
          <Icon size={17} />
        </div>
        <span className="font-semibold text-lg text-gray-900">{title}</span>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      <ul className="flex flex-col gap-1.5 mt-auto pt-2 border-t border-gray-100">
        {links.map((link: string) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-[#625FD0] hover:underline underline-offset-2"
            >
              → {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SuperManagerAGI() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 ">
      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden grid-bg">
        <div className="relative max-w-2xl mx-auto text-center">
          
            <h1 className="  text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              The AI that runs your projects{" "}
              <span className="text-[#625FD0]">
                so you can lead your people.
              </span>
            </h1>
          

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            SuperManagerAGI is an autonomous project management platform built
            for managers. It handles planning, delegation, risk detection, and
            reporting , so you stay focused on decisions that matter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
            >
              Start for free
            </Link>
            <a
              href="#"
              className="inline-flex items-center border-2 border-[#625FD0] text-[#625FD0] rounded-lg hover:bg-[#625FD0] px-4 py-2 hover:text-white font-semibold transition-all duration-300"
            >
              View documentation
            </a>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="sg text-2xl lg:text-4xl text-gray-900 mb-3">
            Core Capabilities
          </h2>
          <p className="text-gray-500 text-md mb-10 max-w-xl">
            Four pillars that make SuperManagerAGI the autonomous backbone of
            every project-driven team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PRODUCTS.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="sg text-2xl lg:text-4xl text-gray-900 mb-2">
                Documentation
              </h2>
              <p className="text-gray-500 text-md max-w-lg">
                Everything you need to set up, configure, and extend
                SuperManagerAGI across your organization.
              </p>
            </div>
            <div className="relative shrink-0 w-full max-w-xs">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={14}
              />
              <input
                type="text"
                placeholder="Search docs…"
                className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-700 shadow-sm outline-none transition-all focus:border-[#625FD0] focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DOC_SECTIONS.map((doc) => (
              <DocCard key={doc.title} {...doc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto text-center rounded-3xl border border-[#625FD0]/20 bg-[#625FD0]/5 p-14">
          <h2 className="sg text-3xl md:text-4xl lg:text-5xl mb-4">
            Ready to manage smarter with AI?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Connect your projects, activate your autonomous agents, and let
            SuperManagerAGI handle the execution while you focus on leadership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
            >
              Get started free
            </a>
            <a
              href="#"
              className="inline-flex items-center border-2 border-[#625FD0] text-[#625FD0] rounded-lg hover:bg-[#625FD0] px-4 py-2 hover:text-white font-semibold transition-all duration-300"
            >
              Schedule a demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
