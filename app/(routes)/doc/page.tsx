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
    title: "Prompt and Execute",
    description:
      "One natural language instruction executes work across every connected application simultaneously. The Controller Agent orchestrates specialist agents in parallel, validates all outputs via evidence-majority voting and commits results with a full audit trail. No manual steps. No app switching. No waiting.",
  },
  {
    icon: Users,
    title: "1,000 Feet Deep Intelligence",
    description:
      "ADA direct database connectivity delivers any answer from your live enterprise data in under 65ms. Native async connections to PostgreSQL, MongoDB and Redis inside your deployment boundary. No MCP overhead. No API round-trip. No data leaving your perimeter. The actual live answer from the actual live data.",
  },
  {
    icon: BarChart3,
    title: "Autonomous 24x7 Execution",
    description:
      "Specialist agents monitor connected systems continuously, detect conditions and execute tasks without prompts. Inventory agents, finance agents, logistics agents, marketing agents, customer care agents  all running whether or not anyone is watching. All auditable. All configurable.",
  },
  {
    icon: ShieldCheck,
    title: "Human Oversight and Control",
    description:
      "Full audit trails on every autonomous action. Approval gates for consequential decisions. Override controls available at any point. AI handles operational execution. Humans retain command. Every decision traceable to the data that grounded it.",
  },
];

const DOC_SECTIONS = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description:
      "Connect your first application, configure your first specialist agent and see your first autonomous execution within 2 weeks. The onboarding framework is structured around measurable first results, not lengthy configuration cycles.",
    links: [
      "Quick Setup Guide",
      "ADA Integration Layer Setup",
      "Agent Deployment Checklist",
      "Workspace Configuration",
    ],
  },
  {
    icon: Code2,
    title: "API Reference",
    description:
      "Programmatically deploy agents, trigger autonomous workflows, query live enterprise data and manage agent configurations via the SuperManager AGI REST API.",
    links: [
      "Authentication and API Key Management",
      "Agent Deployment and Configuration Endpoints",
      "Task Execution and Workflow Trigger API",
      "Data Retrieval and Intelligence Query API",
      "Audit Log and Decision Trail API",
    ],
  },
  {
    icon: Network,
    title: "ADA Integration Layer",
    description:
      "Configure the Agentic Data Architecture layer for direct native connectivity to your databases and internal systems. Native async connectors for PostgreSQL, MongoDB and Redis with connection pooling, zero HTTP intermediary and Redis LRU response cache.",
    links: [
      "PostgreSQL Connector Setup",
      "MongoDB Connector Setup",
      "Redis Cache Configuration",
      "Schema Discovery and Agent Mapping",
      "Security Perimeter Configuration",
    ],
  },
  {
    icon: Wrench,
    title: "Specialist Agent Deployment",
    description:
      "Configure and deploy purpose-built specialist agents for every business function. Each agent is calibrated for its domain, connected to the right data sources via ADA and coordinated by the Beehive Controller Agent.",
    links: [
      "Operations AGI Configuration",
      "Finance AGI Configuration",
      "Logistics AGI Configuration",
      "Marketing AGI Configuration",
      "Customer Care AGI Configuration",
      "Engineering AGI Configuration",
      "Sales AGI Configuration",
    ],
  },
  {
    icon: MessageSquare,
    title: "Autonomous Agent Triggers",
    description:
      "Configure the conditions under which agents execute tasks autonomously without prompts. Set thresholds, define trigger conditions, configure notification channels and establish approval workflows for consequential actions.",
    links: [
      "Threshold-Based Trigger Configuration",
      "Schedule-Based Autonomous Execution",
      "Event-Driven Agent Triggers from Connected Systems",
      "Human-in-the-Loop Approval Gate Setup",
      "Escalation Workflow Configuration"
    ],
  },
  {
    icon: RefreshCw,
    title: "Integrations",
    description:
      "Connect SuperManager AGI to every application your organisation uses. Every connected app becomes a system agents can read from, write to and execute tasks within simultaneously.",
    links: [
      "Shopify, Amazon and Marketplace Integrations",
       "Shiprocket, Delhivery and Logistics Platform Setup",
        "Razorpay, PayU and Payment Gateway Configuration",
      "Jira, Linear and Engineering Tool Sync",
      "Slack, Teams and WhatsApp Business Notifications",
      "SAP, Oracle and ERP Connectivity",
      "Salesforce, HubSpot and CRM Integration",
      "Webhook Events and Custom Integrations"
    ],
  },
  {
    icon: RefreshCw,
    title: "Beehive Agent Orchestration",
    description:
      "Advanced documentation for configuring the Beehive multi-agent orchestration layer  including Controller Agent setup, work-stealing scheduler tuning, evidence-majority voting thresholds and parallel agent scaling.",
    links: [
      "Controller Agent Configuration",
       "Specialist Agent Topology and Scaling",
        "Work-Stealing Scheduler Tuning  Optimal agent count per query complexity",
      "Evidence-Majority Voting Threshold Configuration",
      "DAG Task Decomposition Settings",
     
    ],
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
            <Link
              href="#"
              className="text-sm text-[#625FD0] hover:underline underline-offset-2"
            >
              → {link}
            </Link>
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
      <section className="relative pt-20 pb-16 px-6 overflow-hidden grid-bg">
        <div className="relative max-w-2xl mx-auto text-center">
          <h1 className="  text-3xl md:text-3xl lg:text-5xl leading-tight mb-6">
            SuperManager AGI{" "}
            <span className="text-[#625FD0]">The AI Vibe Working Platform</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            SuperManager AGI is the world’s first and most advanced AI Vibe
            Working Platform. Prompt and do any task. Prompt and get data 1,000
            feet deep inside your enterprise. Deploy autonomous AI agents that
            work 24x7 across every application, every department and every
            workflow.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
            >
              Start for free
            </Link>
            <Link
              href="../doc/docviews"
              className="inline-flex items-center border-2 border-[#625FD0] text-[#625FD0] rounded-lg hover:bg-[#625FD0] px-4 py-2 hover:text-white font-semibold transition-all duration-300"
            >
              View documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="px-6 ">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="sg text-2xl lg:text-3xl text-gray-900 mb-3">
            Four Pillars of the Vibe Working Platform
          </h2>
          <p className="text-gray-500 text-md mb-10 max-w-xl">
            Everything your organisation needs to build, deploy and run an
            autonomous AI agent workforce.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PRODUCTS.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="sg text-2xl lg:text-3xl text-gray-900 mb-2">
                Documentation
              </h2>
              <p className="text-gray-500 text-md max-w-lg">
                Everything you need to configure, deploy and extend SuperManager
                AGI across your organisation.
              </p>
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
      <section className="px-6 py-10">
        <div className="max-w-[1200px] mx-auto text-center rounded-3xl border border-[#625FD0]/20 bg-[#625FD0]/5 p-14">
          <h2 className="sg text-3xl md:text-3xl lg:text-5xl mb-4">
            Ready to Deploy Your AI Vibe Working Platform?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
           Connect your applications, configure your specialist agents and let SuperManager AGI execute the operational work your team currently does manually  while you focus on strategy, growth and the decisions that actually require human judgment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
            >
              Start for Free
            </Link>
            <Link
              href="#"
              className="inline-flex items-center border-2 border-[#625FD0] text-[#625FD0] rounded-lg hover:bg-[#625FD0] px-4 py-2 hover:text-white font-semibold transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
