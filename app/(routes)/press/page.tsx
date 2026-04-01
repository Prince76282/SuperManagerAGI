"use client";

import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Globe,
  Shield,
  BarChart3,
  Users,
  Layers,
  ChevronDown,
  ExternalLink,
  Mail,
  FileText,
  Mic,
  Award,
  TrendingUp,
  CheckCircle,
  Building2,
  Newspaper,
  BookOpen,
  Star,
  Clock,
  AlertCircle,
  Target,
  Workflow,
  Brain,
  GitBranch,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is SuperManager AGI?",
    a: "SuperManager AGI is an autonomous execution platform  a new operating layer that replaces fragmented coordination, manual oversight, and reactive workflows with structured, governed, AI-driven systems. It doesn't assist humans; it executes work.",
  },
  {
    q: "How is this different from AI assistants like ChatGPT or Copilot?",
    a: "AI assistants generate responses. SuperManager AGI executes workflows. It connects to your systems, triggers actions, manages dependencies, ensures completion with audit trails, and reports outcomes  end to end, without human hand-holding.",
  },
  {
    q: "What industries does SuperManager AGI serve?",
    a: "Initially focused on enterprise operations, finance, legal, and HR functions  any domain where coordination overhead kills productivity and human error creates risk.",
  },
  {
    q: "Is SuperManager AGI safe for enterprise use?",
    a: "Yes. Every execution is governed, logged, and auditable. The platform is built with accountability at its core  no action is taken without traceable intent and structured oversight.",
  },
  {
    q: "How can media access company leadership for interviews?",
    a: "Reach our press team directly via the contact form. We prioritize briefings for journalists covering enterprise AI, future of work, and autonomous systems.",
  },
];

const stats = [
  { label: "Workflow Steps Automated", value: "10M+", icon: Zap },
  { label: "Enterprise Clients", value: "200+", icon: Building2 },
  { label: "Countries Deployed", value: "34", icon: Globe },
  { label: "Avg. Coordination Saved / Week", value: "18hrs", icon: Clock },
];

const pressHits = [
  {
    outlet: "TechCrunch",
    headline: "SuperManager AGI wants to kill the meeting  and the manager",
    date: "June 2025",
    tag: "Feature",
  },
  {
    outlet: "Forbes",
    headline: "The Next Wave of Enterprise AI Isn't Copilots  It's Executors",
    date: "May 2025",
    tag: "Op-Ed",
  },
  {
    outlet: "MIT Technology Review",
    headline: "Autonomous Workflow Systems Are Finally Real",
    date: "April 2025",
    tag: "Deep Dive",
  },
  {
    outlet: "The Information",
    headline: "Inside the Company Replacing Middle Management with AGI",
    date: "March 2025",
    tag: "Exclusive",
  },
];

const mediaAssets = [
  {
    label: "Brand Kit & Logos",
    icon: Star,
    desc: "SVG, PNG, Dark/Light variants",
  },
  {
    label: "Executive Headshots",
    icon: Users,
    desc: "High-res print-quality photos",
  },
  {
    label: "Product Screenshots",
    icon: Layers,
    desc: "UI walkthroughs and demos",
  },
  { label: "Fact Sheet PDF", icon: FileText, desc: "Company at a glance" },
  {
    label: "Press Release Archive",
    icon: Newspaper,
    desc: "All official announcements",
  },
  {
    label: "Speaker Bio & Decks",
    icon: Mic,
    desc: "Conference & media appearances",
  },
];

export default function PressPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#625FD0]/6 rounded-full blur-[120px]" />

        <div className="relative max-w-[1200px] mx-auto px-6 py-32 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#625FD0] border border-[#625FD0]/30 bg-[#625FD0]/5 rounded-full px-4 py-1.5">
            <Newspaper size={12} />
            Press &amp; Media Center
          </span>

          <h1 className="text-3xl md:text-5xl  mt-6 leading-[1.05] tracking-tight text-black">
            The Operating System
            <br />
            <span className="text-[#625FD0]">for Autonomous Work</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            SuperManager AGI is not another AI assistant. It is a new execution
            layer that replaces fragmented coordination, manual oversight, and
            reactive workflows with structured, governed, autonomous systems.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/aboutus"
              className="inline-flex items-center gap-2 bg-[#625FD0] hover:bg-[#514DC0] text-white px-7 py-3.5 rounded-xl font-semibold transition"
            >
              About the Company
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────── */}
      <section className="bg-indigo-50">
        <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-[#625FD0] text-center">
          {stats.map(({ label, value, icon: Icon }, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon size={22} className="text-[#625FD0]" />
              <p className="text-3xl font-semibold">{value}</p>
              <p className="text-md text-[#625FD0]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORY CREATION ────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-b border-gray-100">
        <div className="inline-flex items-center gap-2 text-[#625FD0] text-xs font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10">
          <Target size={14} /> Category Definition
        </div>
        <h2 className="text-4xl mb-4 text-gray-900">
          What Category Are We Creating?
        </h2>
        <p className="text-gray-600 max-w-2xl mb-14 text-lg leading-relaxed">
          We are not competing in the AI assistant market. We are creating a new
          category:{" "}
          <strong className="text-black">Autonomous Execution Platforms</strong>{" "}
          systems that replace entire coordination layers, not just augment
          workers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "From AI Tools → AI Systems",
              desc: "Most AI tools assist humans. SuperManager AGI replaces entire coordination layers by executing workflows across systems with accountability, evidence, and control.",
            },
            {
              icon: Workflow,
              title: "From Prompts → Outcomes",
              desc: "Instead of generating answers, the platform turns intent into execution  triggering workflows, managing dependencies, and ensuring completion.",
            },
            {
              icon: GitBranch,
              title: "From Reactive → Proactive",
              desc: "Traditional tools wait for instruction. Our platform monitors state, anticipates blockers, and drives execution forward without human nudging.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-2xl p-8 hover:border-[#625FD0] hover:shadow-lg transition-all bg-white"
            >
              <div className="w-12 h-12 bg-[#625FD0]/8 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#625FD0] transition">
                <Icon
                  size={22}
                  className="text-[#625FD0] group-hover:text-white transition"
                />
              </div>
              <h3 className="text-xl  text-[#625FD0] mb-3">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY NOW ──────────────────────────────────── */}
      <section className="bg-indigo-50 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-[#625FD0] text-xs font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10">
            <TrendingUp size={14} /> Market Context
          </div>
          <h2 className="text-4xl  mb-4 text-black">Why This Matters Now</h2>
          <p className="text-gray-700 max-w-xl mb-14 text-lg">
            Three structural forces have converged to make this both necessary
            and possible.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Coordination Overload",
                desc: "Teams spend more time managing work than doing it. The average knowledge worker spends 58% of their week on coordination, not creation.",
                stat: "58% wasted",
              },
              {
                icon: Layers,
                title: "Fragmented Systems",
                desc: "Data, decisions, and execution are disconnected across 10+ tools per team. No system owns the full workflow loop.",
                stat: "10+ tools / team",
              },
              {
                icon: AlertCircle,
                title: "The AI Execution Gap",
                desc: "Assistants generate content but don't execute work. The last mile between AI output and real-world action remains manual.",
                stat: "0 systems close this gap",
              },
            ].map(({ icon: Icon, title, desc, stat }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col gap-4"
              >
                <div className="w-11 h-11 bg-[#625FD0]/8 rounded-xl flex items-center justify-center">
                  <Icon size={20} className="text-[#625FD0]" />
                </div>
                <p className="text-lg  text-black">{title}</p>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  {desc}
                </p>
                <span className="inline-block text-xs  text-[#625FD0] bg-[#625FD0]/8 px-3 py-1 rounded-full w-fit">
                  {stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IN THE PRESS ─────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-b border-gray-100">
        <div className="inline-flex items-center gap-2 text-[#625FD0] text-xs font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10">
          <Newspaper size={14} />
          Coverage
        </div>
        <h2 className="text-3xl lg:text-5xl  mb-12 text-black">
          SuperManager AGI in the Press
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {pressHits.map(({ outlet, headline, date, tag }, i) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-2xl p-6 hover:border-[#625FD0] hover:shadow-md transition-all flex flex-col gap-3 cursor-pointer bg-white"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#625FD0] text-sm">
                  {outlet}
                </span>
                <span className="text-xs text-[#625FD0] bg-[#625FD0]/8 px-2.5 py-0.5 rounded-full font-semibold">
                  {tag}
                </span>
              </div>
              <p className="text-gray-800 font-medium leading-snug text-lg">
                {headline}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-500">{date}</span>
                <ExternalLink
                  size={14}
                  className="text-gray-300 group-hover:text-[#625FD0] transition"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MEDIA PATHWAYS ───────────────────────────── */}
      <section className="bg-indigo-50 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-[#625FD0] text-xs font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10">
            <BookOpen size={14} /> Navigation
          </div>
          <h2 className="text-4xl  mb-12 text-black">
            Suggested Media Pathways
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "About SuperManager AGI",
                desc: "How a latency insight became the world's first network-boundary-free agentic platform",
                href: "/aboutus",
                icon: Building2,
              },
              {
                title: "Analyst Recognition",
                desc: "Forrester Wave Leader, Perplexity March 2026, Microsoft Accelerator  independent validation of ADA architecture",
                href: "/analyst-recognition",
                icon: Award,
              },
              {
                title: "Newsroom",
                desc: "Peer-reviewed publications, partnership announcements, and product releases",
                href: "/news-room",
                icon: Newspaper,
              },
              {
                title: "Platform Overview",
                desc: "Beehive orchestration, ADA layer, and the 2–15ms data connection that competitors can't match",
                href: "/platform",
                icon: Layers,
              },
              {
                title: "Customer Stories",
                desc: "Measurable outcomes from live Beehive deployments across ERP, D2C, and professional services",
                href: "/customer-stories",
                icon: Users,
              },
              {
                title: "Research & Reports",
                desc: "The peer-reviewed ADA paper, Forrester Wave findings, and original agentic architecture research",
                href: "/research-reports",
                icon: BarChart3,
              },
            ].map(({ title, desc, href, icon: Icon }, i) => (
              <Link
                key={i}
                href={href}
                className="group border border-gray-200 bg-white rounded-2xl p-6 hover:border-[#625FD0] hover:shadow-md transition-all flex flex-col gap-3"
              >
                <div className="w-10 h-10 bg-[#625FD0]/8 rounded-xl flex items-center justify-center group-hover:bg-[#625FD0] transition">
                  <Icon
                    size={18}
                    className="text-[#625FD0] group-hover:text-white transition"
                  />
                </div>
                <h3 className=" text-lg text-black">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  {desc}
                </p>
                <ArrowRight
                  size={15}
                  className="text-gray-300 group-hover:text-[#625FD0] group-hover:translate-x-1 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE PRINCIPLES ──────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-b border-gray-100">
        <div className="inline-flex items-center gap-2 text-[#625FD0] text-xs font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10">
          <Shield size={14} /> Editorial Standards
        </div>
        <h2 className="text-3xl lg:text-5xl  mb-4 text-black">
          Core Narrative Principles
        </h2>
        <p className="text-gray-700 max-w-xl mb-12 text-lg">
          We ask that coverage reflect the real nature of what we're building no
          hype, no vagueness.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              title: "Explain autonomous execution clearly",
              desc: "Distinguish between AI assistants that help and execution systems that act. The difference is structural, not incremental.",
            },
            {
              title: "Connect to real enterprise problems",
              desc: "Ground stories in the coordination tax, the fragmentation problem, and the AI execution gap  not abstract AGI narratives.",
            },
            {
              title: "Avoid vague AI language",
              desc: 'Words like "powerful," "intelligent," and "transformative" add nothing. We prefer: what it does, how it does it, what changes.',
            },
            {
              title: "Ground claims in workflow reality",
              desc: "Every capability should be traceable to a specific workflow problem it solves. We will provide examples and walkthroughs on request.",
            },
          ].map(({ title, desc }, i) => (
            <div
              key={i}
              className="flex gap-5 border border-gray-200 rounded-2xl p-6 bg-white"
            >
              <CheckCircle
                size={22}
                className="text-[#625FD0] mt-0.5 shrink-0"
              />
              <div>
                <h3 className=" text-xl text-black mb-1">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY FLOW ───────────────────────────────── */}
      <section className="bg-indigo-50 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-[#625FD0] text-xs font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10">
            <Workflow size={14} /> Story Framework
          </div>
          <h2 className="text-3xl  lg:text-5xl mb-12 text-black">
            How to Approach This Story
          </h2>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Understand the Category Shift",
                desc: "Start with what's broken in enterprise coordination today. The problem frame matters.",
              },
              {
                step: "02",
                title: "Explore Company & Product",
                desc: "Understand what the platform actually does  execution, not generation.",
              },
              {
                step: "03",
                title: "Validate With Examples",
                desc: "Request customer walkthroughs, workflow demos, and outcome data.",
              },
              {
                step: "04",
                title: "Engage Leadership",
                desc: "Schedule a briefing with our CEO or CTO for depth, context, and forward-looking commentary.",
              },
            ].map(({ step, title, desc }, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 relative overflow-hidden"
              >
                <span className="text-3xl lg:text-5xl font-semibold text-[#625FD0]/6 absolute -top-3 -right-1 leading-none select-none">
                  {step}
                </span>
                <p className="text-md font-semibold  text-[#625FD0] mb-3 uppercase tracking-widest">
                  Step {step}
                </p>
                <h3 className=" text-xl text-black mb-2">{title}</h3>
                <p className="text-gray-700 text-md leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] bg-[#8A84FF]/20 blur-[120px] rounded-full"></div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-[#625FD0] text-lg font-semibold uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10">
          <BookOpen size={14} />
          FAQ
        </div>

        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-semibold mb-14 text-center text-black tracking-tight">
          Journalist FAQ
        </h2>

        {/* FAQ LIST (1 column everywhere) */}
        <div className="grid grid-cols-1 gap-6">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-sm hover:border-[#625FD0]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Question */}
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-semibold text-md lg:text-xl text-black pr-4 leading-snug">
                  {f.q}
                </span>

                <div className="w-8 h-8 rounded-full bg-[#625FD0]/10 flex items-center justify-center group-hover:bg-[#625FD0]/20 transition">
                  <ChevronDown
                    size={16}
                    className={`text-[#625FD0] transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ${
                  openFaq === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 text-md leading-relaxed border-t border-gray-100">
                    <p className="pt-4">{f.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
