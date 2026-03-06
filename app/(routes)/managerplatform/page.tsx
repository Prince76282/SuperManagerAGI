"use client";

import Link from "next/link";
import {
  Brain,
  GitBranch,
  Users,
  ShieldCheck,
  Code2,
  Plug,
  Layers,
  Workflow,
  Cpu,
  Sparkles,
  BarChart3,
  Activity,
  Network,
} from "lucide-react";
import Image from "next/image";

const companies = [
  { name: "Adobe", src: "/image/newimage/Adobe.png", width: 120 },
  { name: "BrowserStack", src: "/image/newimage/Browser1.png", width: 200 },
  { name: "Zoho", src: "/image/newimage/Zoho.png", width: 120 },
  { name: "Microsoft", src: "/image/newimage/Microsoft.png", width: 200 },
  { name: "Sprinto", src: "/image/newimage/Sprinto.png", width: 120 },
  { name: "Perplexity", src: "/image/newimage/perplexity.png", width: 200 },
  { name: "Socket", src: "/image/newimage/Socket.png", width: 120 },
  { name: "Nvidia", src: "/image/newimage/image.png", width: 200 },
];

const capabilities = [
  {
    title: "Multi-AGI Orchestration",
    icon: GitBranch,
    description:
      "Coordinates Strategy, Resource, Delivery, and Task AGI systems into one synchronized execution layer.",
  },
  {
    title: "AGI Decision Engine",
    icon: Brain,
    description:
      "Context-aware reasoning engine that evaluates constraints, KPIs, risks, and objectives before acting.",
  },
  {
    title: "Team + Resource Intelligence",
    icon: Users,
    description:
      "Optimizes workforce allocation, skills matching, capacity planning, and cost efficiency automatically.",
  },
  {
    title: "Security + Governance",
    icon: ShieldCheck,
    description:
      "Policy enforcement, audit logs, role permissions, and compliance embedded into every decision.",
  },
  {
    title: "No-Code Control",
    icon: Code2,
    description:
      "Visual orchestration builder allowing leaders to deploy automation logic without engineering effort.",
  },
  {
    title: "Enterprise Integrations",
    icon: Plug,
    description:
      "API-first connectivity across ERP, CRM, DevOps, HR, Finance, and internal systems.",
  },
];

export default function SuperManagerPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="py-24 px-6 lg:px-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-[#625FD0]" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SuperManager AGI
          </h1>

          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            Autonomous enterprise management platform that replaces traditional
            leadership layers with intelligent orchestration, reasoning, and
            execution.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="#capabilities"
              className="bg-[#625FD0] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#5146d9] transition"
            >
              Explore Platform
            </Link>

            <Link
              href="/demo"
              className="border-2 border-[#625FD0] px-4 py-3 text-[#625FD0]  rounded-lg font-semibold hover:text-white hover:bg-[#625FD0] transition"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-5 pb-14 text-center">
        <h1 className="mb-4 font-[var(--font-spartan)] text-black text-2xl md:text-2xl font-bold">
          Trusted by 100+ Leading Companies
        </h1>

        <div className="overflow-hidden group">
          <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-6"
              >
                <Image
                  src={company.src}
                  alt={company.name}
                  width={company.width}
                  height={80}
                  className="h-[100px] object-contain opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Layers className="w-10 h-10 text-[#625FD0] mb-6" />
            <h2 className="text-4xl lg:text-5xl mb-6">
              Enterprise Management. Reimagined.
            </h2>

            <p className="text-gray-600 text-lg mb-6">
              SuperManager AGI transforms enterprise operations into a real-time
              autonomous intelligence system. It simultaneously analyzes
              strategy, resources, risks, and execution paths — then deploys
              coordinated AGI agents to deliver outcomes.
            </p>

            <p className="text-gray-600 text-lg">
              Instead of dashboards and manual decision loops, organizations run
              on an orchestration fabric that plans, allocates, monitors, and
              optimizes continuously.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-3xl p-10 space-y-6">
            <div className="flex gap-4">
              <Workflow className="text-[#625FD0]" />
              <p>Autonomous workflow execution</p>
            </div>

            <div className="flex gap-4">
              <Cpu className="text-[#625FD0]" />
              <p>Real-time operational intelligence</p>
            </div>

            <div className="flex gap-4">
              <BarChart3 className="text-[#625FD0]" />
              <p>Continuous KPI optimization</p>
            </div>

            <div className="flex gap-4">
              <Network className="text-[#625FD0]" />
              <p>Cross-department coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl mb-6">
            How SuperManager AGI Works
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            A continuous intelligence loop replacing fragmented management
            layers with autonomous strategic execution.
          </p>

          <div className="grid  md:grid-cols-4 gap-10 text-left">
            <div className="hover:border-r  border-[#625FD0]">
              <h4 className="font-semibold text-2xl mb-3">Analyze</h4>
              <p className="text-gray-600 text-md">
                Aggregates enterprise data, KPIs, constraints, and signals.
              </p>
            </div>

            <div className="hover:border-r border-[#625FD0]">
              <h4 className="font-semibold text-2xl mb-3">Strategize</h4>
              <p className="text-gray-600 text-md">
                Evaluates trade-offs and execution paths using reasoning models.
              </p>
            </div>

            <div className="hover:border-r border-[#625FD0]">
              <h4 className="font-semibold text-2xl mb-3">Orchestrate</h4>
              <p className="text-gray-600 text-md">
                Coordinates AGI agents across departments simultaneously.
              </p>
            </div>

            <div className="hover:border-r border-[#625FD0]">
              <h4 className="font-semibold text-2xl mb-3">Optimize</h4>
              <p className="text-gray-600 text-md">
                Continuously rebalances strategy based on performance feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-24 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">Core Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modular intelligence components working together as a unified
              enterprise platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
                >
                  <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#625FD0]" />
                  </div>

                  <h3 className="text-2xl mb-4">{item.title}</h3>

                  <p className="text-gray-600 text-md leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
