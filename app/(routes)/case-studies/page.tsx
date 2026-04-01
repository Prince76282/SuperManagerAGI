"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, CheckCircle, ChevronDown, Target, Workflow,
  BarChart3, Lightbulb, Users, Shield, BookOpen, TrendingUp,
  Zap, Eye, Rocket, MapPin, FileText, Star, ChevronRight,
} from "lucide-react";

const data = {
  eyebrow: "Proof & Outcomes",
  title: "Case Studies",
  description:
    "Explore the kinds of operating improvements teams can unlock when AI moves beyond chat and into execution, coordination, and decision support.",
  intro:
    "This page organizes proof points by business outcome so leaders can see how autonomous execution, intelligence, and workspace control show up in real production environments.",
  highlights: [
    "Review operating patterns for faster execution, fewer delays, and stronger cross-team coordination.",
    "See which use cases work best as first deployments versus broader transformation programs.",
    "Connect outcome stories to the platform, intelligence, and workflow layers behind them.",
  ],
  stats: [
    { label: "Focus", value: "Outcome-led", icon: Target },
    { label: "Scope", value: "Cross-functional", icon: Users },
    { label: "Readiness", value: "Pilot to scale", icon: Rocket },
    { label: "Lens", value: "Operator-friendly", icon: Eye },
  ],
  featuredCardsTitle: "Study by Operating Goal",
  featuredCards: [
    {
      kicker: "Execution",
      title: "Faster workflow completion",
      href: "/guides/autonomous-execution",
      description: "See how teams reduce handoff delay and manual coordination in multi-system work.",
      icon: Zap,
    },
    {
      kicker: "Intelligence",
      title: "Sharper operating visibility",
      href: "/intelligence/live",
      description: "Review how connected intelligence improves response speed and decision quality.",
      icon: Eye,
    },
    {
      kicker: "Adoption",
      title: "Safer rollout paths",
      href: "/implementation-guide",
      description: "Understand the deployment patterns that make early wins repeatable and controlled.",
      icon: Shield,
    },
  ],
  pillars: [
    {
      title: "Start with one measurable bottleneck",
      description: "Strong case studies begin with a problem that teams already feel, such as delay recovery, reporting lag, reconciliation effort, or approval friction.",
      icon: Target,
    },
    {
      title: "Tie outcomes to real workflows",
      description: "The best proof points show exactly which systems, handoffs, and decisions changed so teams can judge whether the pattern applies to their environment.",
      icon: Workflow,
    },
    {
      title: "Show the control model, not just the win",
      description: "A credible case study explains the human oversight, evidence, and governance that made the deployment safe enough to trust in production.",
      icon: Shield,
    },
    {
      title: "Use stories to inform rollout sequencing",
      description: "Case studies are most useful when they help teams pick where to start and what success should look like in the first 30, 60, and 90 days.",
      icon: BarChart3,
    },
  ],
  useCases: [
    {
      role: "Operations teams",
      scenario: "Reduce manual coordination across systems",
      outcome: "Teams can identify where autonomous execution removes repetitive orchestration work and shortens the distance from issue detection to action.",
      icon: Workflow,
    },
    {
      role: "Finance and leadership",
      scenario: "Move from retrospective reporting to live operating insight",
      outcome: "Stakeholders can see how intelligent visibility improves timing, prioritization, and resource decisions before month-end or weekly reviews.",
      icon: BarChart3,
    },
    {
      role: "Transformation sponsors",
      scenario: "Choose a realistic first deployment",
      outcome: "Case-study patterns help sponsors pick a manageable first workflow with clear controls and measurable business upside.",
      icon: Rocket,
    },
  ],
  workflow: [
    { title: "Find the current bottleneck", detail: "Choose a process where response time, quality, or coordination is clearly limited by manual work or fragmented visibility.", step: "01" },
    { title: "Map the changed operating loop", detail: "Document which signals, workflows, approvals, and actions will change when intelligence and execution are introduced.", step: "02" },
    { title: "Measure the shift", detail: "Track cycle time, intervention speed, decision quality, or throughput changes so the value story is tied to operations, not just technology activity.", step: "03" },
    { title: "Use the pattern again", detail: "Once the first story is proven, repeat the operating pattern on adjacent workflows with similar data and coordination dynamics.", step: "04" },
  ],
  faq: [
    {
    q: "What makes a SuperManager AGI case study credible?",
    a: "The strongest deployments document four things in sequence: the specific business bottleneck before deployment, the Beehive agent configuration and ADA connections used to address it, the governance controls and RBAC policies applied, and the measured outcome  latency reduction, headcount reallocation, or cycle-time improvement  recorded after go-live. Anecdotal before-and-after claims without architecture detail are not included.",
  },
  {
    q: "Are these deployments only relevant to large enterprises?",
    a: "No. Several of the highest-impact patterns documented here began with a single workflow  one finance reconciliation loop, one logistics dispatch queue, one client reporting pipeline  deployed by a team of two or three people. The Beehive architecture is designed to scale horizontally once the first agent cluster is validated, so the entry point is deliberately narrow and the expansion path is built in from day one.",
  },
  {
    q: "How should our team use these case studies?",
    a: "Identify the deployment pattern closest to your primary bottleneck  by industry vertical, agent type, or data source  then use the linked architecture and implementation pages to scope your first rollout. Each case study maps directly to a reference architecture in the ADA documentation, so you move from recognising the analog to designing the solution without leaving the knowledge base.",
  },
  {
    q: "How is SuperManager AGI different from Microsoft Copilot or Claude MCP?",
    a: "Copilot and Claude MCP both operate under the network boundary assumption  every agent action crosses an API layer before reaching data, adding 80–400ms of latency per interaction. SuperManager AGI's ADA layer establishes persistent, in-process connections directly to your databases, reducing agent-to-data round trips to 2–15ms. That difference is not cosmetic: at enterprise concurrency levels, network-boundary architectures accumulate latency across thousands of simultaneous agent calls in a way that makes real-time orchestration practically impossible. ADA removes that constraint entirely.",
  },
  {
    q: "What data sources and enterprise systems does SuperManager AGI connect to?",
    a: "ADA supports native async connections to PostgreSQL, MongoDB, Redis, and vector databases out of the box. The Universal Integration Layer extends connectivity to 200+ enterprise applications  Salesforce, SAP, Oracle, Workday, ServiceNow, Microsoft 365, Shopify, Flipkart, Shiprocket, and leading payment gateway stacks  each with managed authentication, schema mapping, and rate-limit handling pre-configured. For bespoke or legacy systems, the visual API builder generates a production-ready ADA connector from an OpenAPI spec in under five minutes.",
  },
  {
    q: "How long does a typical SuperManager AGI deployment take?",
    a: "A focused single-workflow deployment  one agent cluster targeting one business process, such as finance reconciliation or logistics dispatch  typically reaches production in two to four weeks when handled by a certified implementation partner. Full multi-department Beehive orchestration across four or more specialist agents generally follows an eight to twelve week programme: two weeks of data-source mapping and ADA connection setup, four weeks of agent configuration and parallel testing, and two weeks of governance validation and go-live. Timeline is primarily gated by data access permissions and stakeholder sign-off, not by platform complexity.",
  },
  ],
  relatedLinks: [
    { title: "Customer Stories", href: "/customer-stories", description: "Browse existing customer-focused stories and references.", icon: Star },
    { title: "Research Reports", href: "/research-reports", description: "Add deeper research context alongside practical outcome examples.", icon: FileText },
    { title: "Implementation Guide", href: "/implementation-guide", description: "Move from examples to a phased deployment plan.", icon: MapPin },
  ],
  ctaTitle: "Turn proof points into a rollout decision",
  ctaDescription: "Use the study patterns to pick the first workflow, define the operating changes, and move into a pilot with clear controls and measurable outcomes.",
  primaryCta: { label: "Book a working session", href: "/get-in-touch" },
  secondaryCta: { label: "Browse customer stories", href: "/customer-stories" },
};

export default function CaseStudiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-black min-h-screen font-sans">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-20"
          
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-[#625FD0]/5 rounded-full blur-[130px]" />

        <div className="relative max-w-[1200px] mx-auto px-6 py-28 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#625FD0] border-2 border-[#625FD0]  rounded-full px-4 py-1.5">
            <BookOpen size={12} /> {data.eyebrow}
          </span>

          <h1 className="text-5xl md:text-5xl font-semibold mt-6 leading-[1.05] tracking-tight text-black">
            Case{" "}
            <span className="text-[#625FD0]">Studies</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>

          <ul className="mt-8 inline-flex flex-col items-start gap-3 text-left">
            {data.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-md text-gray-700">
                <CheckCircle size={16} className="text-[#625FD0] shrink-0 mt-0.5" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={data.primaryCta.href}
              className="inline-flex items-center gap-2 bg-[#625FD0] hover:bg-[#625FD0] text-white px-7 py-3.5 rounded-xl font-semibold transition"
            >
              {data.primaryCta.label} <ArrowRight size={16} />
            </Link>
            <Link
              href={data.secondaryCta.href}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#625FD0] border-2 border-[#625FD0] hover:text-white text-[#625FD0] px-7 py-3.5 rounded-xl font-semibold transition"
            >
              {data.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>


      {/* ── FEATURED CARDS ───────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="inline-flex items-center gap-2 text-sm mb-8  font-semibold tracking-widest uppercase text-[#625FD0] border-2 border-[#625FD0]  rounded-full px-4 py-1.5">
          <Star size={14} /> {data.featuredCardsTitle}
        </div>
        <h2 className="text-3xl lg:text-5xl  text-black mb-12">Where Do You Want to Start?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.featuredCards.map(({ kicker, title, href, description, icon: Icon }, i) => (
            <Link
              key={i}
              href={href}
              className="group flex flex-col gap-5 border border-gray-200 rounded-2xl p-8 bg-white hover:border-[#625FD0] hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#625FD0]/10 text-[#625FD0] group-hover:bg-[#625FD0] group-hover:text-white transition">
                  <Icon size={20} />
                </div>
                <span className="text-md font-semibold uppercase tracking-widest text-[#625FD0] bg-[#625FD0]/10 px-2.5 py-1 rounded-full">
                  {kicker}
                </span>
              </div>
              <p className="text-xl  text-black leading-snug">{title}</p>
              <p className="text-gray-700 text-md leading-relaxed flex-1">{description}</p>
              <div className="flex items-center gap-2 text-md font-semibold text-[#625FD0] mt-auto pt-4 border-t border-gray-100">
                Explore <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────── */}
      <section className="bg-indigo-100 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-sm mb-8  font-semibold tracking-widest uppercase text-[#625FD0] border-2 border-[#625FD0]  rounded-full px-4 py-1.5">
            <Lightbulb size={14} /> What Good Looks Like
          </div>
          <h2 className="text-3xl lg:text-5xl  text-black mb-4">Four Pillars of a Credible Case Study</h2>
          <p className="text-gray-700 max-w-xl mb-14 text-lg">{data.intro}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {data.pillars.map(({ title, description, icon: Icon }, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 rounded-2xl p-7 flex gap-5 hover:border-[#625FD0] hover:shadow-sm transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#625FD0]/10 text-[#625FD0] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className=" text-xl text-black mb-2">{title}</h3>
                  <p className="text-gray-700 text-md leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-b border-gray-100">
        <div className="inline-flex items-center gap-2 text-sm mb-8  font-semibold tracking-widest uppercase text-[#625FD0] border-2 border-[#625FD0]  rounded-full px-4 py-1.5">
          <Users size={14} /> By Role
        </div>
        <h2 className="text-3xl lg:text-5xl  text-black mb-12">Who Uses These Patterns and How</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.useCases.map(({ role, scenario, outcome, icon: Icon }, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-7 bg-white flex flex-col gap-4 hover:border-[#625FD0] hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#625FD0]/10 text-[#625FD0] flex items-center justify-center">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-md  uppercase tracking-widest text-[#625FD0] mb-1">{role}</p>
                <h3 className=" text-xl text-black">{scenario}</h3>
              </div>
              <p className="text-gray-700 text-md leading-relaxed flex-1">{outcome}</p>
              <div className="pt-4 border-t border-gray-100 flex items-center gap-1.5 text-md font-semibold text-[#625FD0]">
                <CheckCircle size={13} /> Outcome-mapped pattern
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORKFLOW ─────────────────────────────────── */}
      <section className="bg-indigo-100 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-sm mb-8  font-semibold tracking-widest uppercase text-[#625FD0] border-2 border-[#625FD0]  rounded-full px-4 py-1.5">
            <Workflow size={14} /> The Pattern
          </div>
          <h2 className="text-3xl lg:text-5xl  text-black mb-12">How to Build Your Own Case Study</h2>

          <div className="grid md:grid-cols-4 gap-5">
            {data.workflow.map(({ step, title, detail }, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 relative overflow-hidden hover:border-[#625FD0] hover:shadow-sm transition-all"
              >
                
                <p className="text-md  uppercase tracking-widest text-[#625FD0] mb-3">
                  Step {step}
                </p>
                <h3 className=" text-xl text-black mb-2">{title}</h3>
                <p className="text-gray-700 text-md leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-b border-gray-100">
        <div className="inline-flex items-center gap-2 text-sm mb-8  font-semibold tracking-widest uppercase text-[#625FD0] border-2 border-[#625FD0]  rounded-full px-4 py-1.5">
          <TrendingUp size={14} /> Go Deeper
        </div>
        <h2 className="text-3xl lg:text-5xl  text-black mb-12">Related Resources</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.relatedLinks.map(({ title, href, description, icon: Icon }, i) => (
            <Link
              key={i}
              href={href}
              className="group border border-gray-200 bg-white rounded-2xl p-7 hover:border-[#625FD0] hover:shadow-md transition-all flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#625FD0]/10 text-[#625FD0] flex items-center justify-center group-hover:bg-[#625FD0] group-hover:text-white transition">
                <Icon size={18} />
              </div>
              <p className=" text-lg text-black">{title}</p>
              <p className="text-gray-700 text-md leading-relaxed flex-1">{description}</p>
              <div className="flex items-center gap-1.5 text-md font-semibold text-[#625FD0] mt-auto pt-4 border-t border-gray-100">
                View resource <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>


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
                Common Questions
              </h2>
      
              {/* FAQ LIST (1 column everywhere) */}
              <div className="grid grid-cols-1 gap-6">
                {data.faq.map((f, i) => (
                  <div
                    key={i}
                    className="group border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-sm hover:border-[#625FD0]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* q */}
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
      
                    {/* a */}
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