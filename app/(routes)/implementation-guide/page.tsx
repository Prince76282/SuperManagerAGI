"use client";

import { useState } from "react";

const data = {
  eyebrow: "Rollout Playbook",
  title: "Implementation Guide",
  description:
    "A complete, structured approach to deploying SuperManager AGI across your organisation  from ADA connection setup and Beehive agent configuration through shadow mode validation, live execution, and multi-department scale.",
  intro:
    "Built for operations leaders, IT architects, and implementation partners who need a repeatable, governed rollout methodology. Every step assumes production intent  not sandbox exploration.",

  highlights: [
    {
      icon: "◈",
      label: "Pilot Selection",
      text: "Score and rank candidate workflows by ROI before configuring a single agent  the pilot selection decision determines payback timing more than any other factor.",
    },
    {
      icon: "◉",
      label: "Governance First",
      text: "Design human authority into the system architecture from day one  escalation thresholds, override permissions, and RBAC policies must be defined before shadow mode begins.",
    },
    {
      icon: "◫",
      label: "Shadow Mode",
      text: "Run every new agent cluster in shadow mode for a minimum of two weeks before committing any action to systems of record.",
    },
    {
      icon: "◎",
      label: "Dual Metrics",
      text: "Measure output quality and operator trust in parallel  strong accuracy numbers with high escalation rates signals the system is not ready to scale.",
    },
    {
      icon: "◧",
      label: "Proof-Based Gates",
      text: "Gate every expansion on evidence from the prior phase  confidence scores, escalation rates, and a completed audit cycle reviewed by compliance.",
    },
  ],

  stats: [
    {
      label: "Rollout strategy",
      value: "Phased execution",
      note: "Three phases, each gated by evidence from the prior phase",
    },
    {
      label: "Initial approach",
      value: "Pilot first",
      note: "One workflow, one cluster, one human owner",
    },
    {
      label: "Risk control",
      value: "Shadow mode",
      note: "Minimum two-week shadow period before live commit",
    },
    {
      label: "Scaling logic",
      value: "Proof-based",
      note: "Expansion gated by scores and audit cycle  not timeline",
    },
    {
      label: "Data latency",
      value: "2–15ms",
      note: "ADA layer connects agents directly to data sources",
    },
    {
      label: "Pilot duration",
      value: "6–8 weeks",
      note: "Setup → shadow → partial volume → audit review",
    },
  ],

  phases: [
    {
      phase: "01",
      title: "Foundation & Data Layer",
      summary:
        "Establish ADA connections, define governance structure, configure RBAC, and validate data readiness before any agent is deployed.",
      detail:
        "The most common cause of delayed or failed SuperManager AGI deployments is unresolved data access  agents configured correctly but unable to reach the data sources they need because permissions were not secured before implementation began. Phase 01 resolves this systematically. Begin by mapping every data source the target workflow touches: PostgreSQL databases, MongoDB collections, Redis caches, ERP tables, and any third-party API endpoints. Establish ADA connections in a staging environment and validate round-trip latency  target 2–15ms per connection; anything above 50ms indicates a network configuration issue that must be resolved before agent deployment. Configure RBAC at the data-source level: each agent role receives only the permissions required for its domain. Define escalation SLAs, approval categories, and policy ownership before Phase 02 begins.",
    },
    {
      phase: "02",
      title: "Shadow Mode & Live Execution",
      summary:
        "Deploy the Beehive agent cluster in shadow mode, build a performance baseline, then transition to live execution on a controlled volume subset.",
      detail:
        "Shadow mode is the operational core of a responsible deployment. Deploy the Controller Agent and relevant specialist agents in shadow configuration  agents observe live inputs, generate outputs, and log every decision branch without committing any action. Run shadow mode for a minimum of two weeks. Measure three things: output accuracy rate, confidence score distribution, and edge case frequency. Use shadow mode data to set live escalation thresholds. Transition to live execution at 20% of workflow volume, with the remaining 80% continuing through the human process. Run parallel tracks for a minimum of one week before expanding to full volume.",
    },
    {
      phase: "03",
      title: "Audit, Optimisation & Scale",
      summary:
        "Complete the first audit cycle, address edge cases identified in live execution, and expand Beehive coverage using the validated deployment pattern.",
      detail:
        "Scale in SuperManager AGI is not replication  it is pattern extension. Before any adjacent workflow is scoped, the primary deployment must complete a full audit cycle: compliance reviews Audit Agent logs, confirms every committed action is traceable to a specific intent and human approval, and signs off. This review takes three to five business days. Once complete, address edge cases surfaced during live execution. Adjacent workflow deployments follow the same three-phase structure but compress from six to eight weeks to three to four weeks, because ADA connections to shared data sources are already established and the governance framework provides a starting template.",
    },
  ],

  principles: [
    {
      n: "01",
      title: "Start with measurable impact",
      desc: "Score candidate workflows across four dimensions: weekly effort consumed, error cost when the workflow fails, data readiness, and human ownership clarity. The workflow that scores highest across all four is the right pilot  not the one that feels most impressive.",
    },
    {
      n: "02",
      title: "Cross-team alignment before configuration",
      desc: "Convene a single alignment session before Phase 01 starts with four participants: workflow owner, IT lead, compliance lead, and implementation partner. Output is a one-page governance document covering data access, escalation structure, audit log destination, and approval authority.",
    },
    {
      n: "03",
      title: "Trust is built through transparency, not performance",
      desc: "Operators who can see exactly what an agent did and why develop confidence faster than operators shown accuracy metrics alone. Configure the observability dashboard to surface the full decision trace for every agent output during shadow mode.",
    },
    {
      n: "04",
      title: "Scale only what evidence supports",
      desc: "The expansion gate is three criteria, all of which must be met simultaneously: confidence scores stable at or above threshold for four consecutive weeks, escalation rate below 8%, and a completed audit cycle signed off by compliance. Meeting two of three is not sufficient.",
    },
  ],

  steps: [
    {
      n: "01",
      title: "Workflow selection & scoring",
      desc: "Score every candidate across four dimensions. Rank by composite score. Document the scoring so the prioritisation decision is auditable.",
    },
    {
      n: "02",
      title: "Foundation & data layer setup",
      desc: "Map every data source. Establish ADA connections in staging. Validate latency (2–15ms). Confirm RBAC permissions before any agent is configured.",
    },
    {
      n: "03",
      title: "Shadow mode deployment & baseline",
      desc: "Deploy Beehive agent cluster in shadow mode. Run two weeks minimum. Measure accuracy, confidence distribution, and edge case frequency daily.",
    },
    {
      n: "04",
      title: "Controlled live execution",
      desc: "Enable live execution at 20% of workflow volume. Run parallel tracks for one week minimum. Review Audit Agent log daily.",
    },
    {
      n: "05",
      title: "Audit, edge case resolution & optimisation",
      desc: "Complete first audit cycle with compliance team. Address edge cases. Produce post-deployment outcome report benchmarked against pre-deployment baseline.",
    },
    {
      n: "06",
      title: "Pattern-based expansion",
      desc: "Expand to next highest-scoring workflow using the validated deployment pattern as a template. Adjacent deployments compress to 3–4 weeks.",
    },
  ],

  faq: [
    {
      q: "What is the most common reason deployments stall?",
      a: "Unresolved data access. Agents that are correctly configured but cannot reach required data sources produce no value and erode stakeholder confidence rapidly. The fix is structural: data access permissions must be secured and ADA connections validated in staging before Phase 02 begins.",
    },
    {
      q: "Who should own the implementation?",
      a: "Four roles share ownership across distinct domains: the business workflow owner (sets policy, defines escalation thresholds), the IT lead (data access, ADA connections, RBAC), the compliance lead (audit log configuration, go-live sign-off), and the implementation partner (Beehive configuration, shadow mode analysis). No single role should own all four domains.",
    },
    {
      q: "How long does a pilot take from kickoff to live execution?",
      a: "Six to eight weeks where data access permissions are resolved before kickoff. Two weeks Foundation, two weeks shadow mode, one week controlled live execution at 20% volume, one week full-volume live execution. The most common cause of timeline extension is data access resolution taking three weeks instead of one.",
    },
    {
      q: "What should a post-deployment outcome report include?",
      a: "Five sections: pre-deployment baseline, shadow mode performance summary, live execution outcomes compared against both baselines, escalation analysis, and expansion recommendation with estimated deployment timeline based on data readiness assessment.",
    },
    {
      q: "How do we handle fragmented data sources across legacy systems?",
      a: "The Universal Integration Layer addresses this. For legacy systems without a native ADA connector, the visual API builder generates a connector from an OpenAPI spec. For systems without any API surface, a structured extraction layer normalises data into ADA-compatible format. Key constraint: if the extraction layer adds more than 50ms to the round trip, evaluate the workflow for batch execution rather than live agent operation.",
    },
    {
      q: "What is the minimum team size required?",
      a: "Four people: one business workflow owner, one IT contact with data access authority (able to provision ADA connections within 48 hours), one compliance contact, and one implementation partner lead. Pilots attempted with fewer than four distinct roles consistently produce governance gaps during live execution.",
    },
  ],
};

export default function ImplementationGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="absolute inset-0 opacity-[0.07]" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#625FD0]/[0.06] blur-[120px] pointer-events-none" />

        <div className="relative">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1 h-8 bg-[#625FD0] rounded-full" />
            <span className="pill-tag text-sm font-semibold text-[#625FD0] uppercase tracking-widest font-medium">
              Implementation Guide
            </span>
          </div>

          <h1
            className="text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight text-gray-900 mb-8 max-w-4xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Deploy AI agents <span className="text-[#625FD0]">that commit</span>
            <br />
            real actions.
          </h1>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl">
            <p className="text-[16px] text-gray-500 leading-relaxed">
              {data.description}
            </p>
            <p className="text-[16px] text-gray-400 leading-relaxed  border-l-2 border-[#625FD0] pl-6">
              {data.intro}
            </p>
          </div>

          {/* Quick stats row */}
          <div className="mt-14 flex flex-wrap gap-4">
            {data.stats.map((s, i) => (
              <div
                key={i}
                className="stat-card flex-1 min-w-[160px] bg-white border border-gray-200 rounded-xl px-6 py-5 shadow-sm 
      hover:border-[#625FD0] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <p className="pill-tag text-[16px] text-gray-700 uppercase tracking-widest mb-2">
                  {s.label}
                </p>

                <p className="text-[16px] font-medium text-gray-900 group-hover:text-[#625FD0]">
                  {s.value}
                </p>

                <p className="text-[16px] text-gray-600 mt-1 leading-snug">
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-semibold text-[18px] text-gray-700 uppercase tracking-widest">
            Key principles
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          {data.highlights.map((h, i) => (
            <div
              key={i}
              className="highlight-card group rounded-2xl border border-gray-200 bg-gray-50 p-5 
        hover:border-[#625FD0] hover:bg-[#625FD0]/5 hover:-translate-y-1 hover:shadow-md 
        transition-all duration-300 cursor-pointer"
            >
              <div
                className="text-2xl text-[#625FD0]/70 mb-4 
        group-hover:text-[#625FD0] transition-colors duration-300"
              >
                {h.icon}
              </div>

              <p
                className="text-[16px] pill-tag text-gray-700 uppercase tracking-widest mb-2 
        group-hover:text-[#625FD0] transition-colors duration-300"
              >
                {h.label}
              </p>

              <p
                className="text-[16px] text-gray-600 leading-relaxed 
        group-hover:text-gray-800 transition-colors duration-300"
              >
                {h.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PHASES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <span className="pill-tag text-[14px] sm:text-[18px] text-gray-700 uppercase tracking-widest">
            Implementation roadmap
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="space-y-3 sm:space-y-4">
          {data.phases.map((p, i) => {
            const open = expandedPhase === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-300
          ${
            open
              ? "border-[#625FD0] bg-[#625FD0]/5 shadow-md"
              : "border-gray-200 bg-gray-50 hover:border-[#625FD0] hover:bg-[#625FD0]/5"
          }`}
              >
                <button
                  className="w-full flex items-start sm:items-center gap-4 sm:gap-6 px-4 sm:px-8 py-5 sm:py-7 text-left group"
                  onClick={() => setExpandedPhase(open ? null : i)}
                >
                  {/* Phase label */}
                  <span
                    className={`pill-tag text-[13px] sm:text-[16px] shrink-0 transition-colors
              ${
                open
                  ? "text-[#625FD0]"
                  : "text-[#625FD0]/70 group-hover:text-[#625FD0]"
              }`}
                  >
                    Phase {p.phase}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-[15px] sm:text-lg font-medium mb-1 leading-snug transition-colors
                ${
                  open
                    ? "text-[#625FD0]"
                    : "text-gray-900 group-hover:text-[#625FD0]"
                }`}
                    >
                      {p.title}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                      {p.summary}
                    </p>
                  </div>

                  {/* Chevron */}
                  <div className="shrink-0 mt-1 sm:mt-0">
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300
                ${
                  open
                    ? "rotate-180 text-[#625FD0]"
                    : "text-gray-400 group-hover:text-[#625FD0]"
                }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Dropdown */}
                <div
                  className={`grid transition-all duration-300 ease-in-out
            ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-8 pb-6 sm:pb-8">
                      <div className="border-t border-gray-200 pt-4 sm:pt-6">
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-3xl">
                          {p.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[18px] text-gray-700 uppercase tracking-widest">
            Core principles
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {data.principles.map((p, i) => (
            <div
              key={i}
              className="group principle-card rounded-2xl border border-gray-200 bg-gray-50 p-7 
        hover:border-[#625FD0] hover:bg-[#625FD0]/5 hover:-translate-y-1 hover:shadow-md
        transition-all duration-300 cursor-pointer"
            >
              <span
                className="pill-tag text-[16px] text-[#625FD0]/50 mb-4 block 
        group-hover:text-[#625FD0] transition-colors duration-300"
              >
                {p.n}
              </span>

              <p
                className="text-base font-medium text-gray-900 mb-3 leading-snug 
        group-hover:text-[#625FD0] transition-colors duration-300"
              >
                {p.title}
              </p>

              <p
                className="text-sm text-gray-500 leading-relaxed 
        group-hover:text-gray-700 transition-colors duration-300"
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXECUTION STEPS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="pill-tag text-[18px] text-gray-700 uppercase tracking-widest">
            Execution steps
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[22px] top-8 bottom-8 w-px bg-gradient-to-b from-[#625FD0]/30 via-[#625FD0]/10 to-transparent" />

          <div className="space-y-4">
            {data.steps.map((s, i) => (
              <div
                key={i}
                className="step-card group flex gap-6 pl-2 items-start"
              >
                {/* Step Circle */}
                <div
                  className="shrink-0 w-10 h-10 rounded-full border border-gray-200 bg-white 
          flex items-center justify-center z-10 
          group-hover:border-[#625FD0] group-hover:bg-[#625FD0] transition-all duration-300"
                >
                  <span
                    className="step-num text-[16px] text-gray-700 font-medium 
            group-hover:text-white transition-colors duration-300"
                  >
                    {s.n}
                  </span>
                </div>

                {/* Content Box */}
                <div
                  className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 
          group-hover:border-[#625FD0] group-hover:bg-[#625FD0]/5 
          group-hover:-translate-y-1 group-hover:shadow-md 
          transition-all duration-300 cursor-pointer"
                >
                  <p
                    className="text-sm font-medium text-gray-800 mb-1 
            group-hover:text-[#625FD0] transition-colors duration-300"
                  >
                    {s.title}
                  </p>

                  <p
                    className="text-[16px] text-gray-600 leading-relaxed 
            group-hover:text-gray-800 transition-colors duration-300"
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-16 mb-20">
        <div className="flex items-center gap-3 mb-10">
          <span className="pill-tag text-[18px] text-gray-700 uppercase tracking-widest">
            Frequently asked questions
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="space-y-4">
          {data.faq.map((f, i) => {
            const open = openFaq === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden
          ${
            open
              ? "border-[#625FD0] bg-[#625FD0]/5 shadow-md"
              : "border-gray-200 bg-gray-50 hover:border-[#625FD0] hover:bg-[#625FD0]/5"
          }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-6 px-7 py-5 text-left group"
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  <span
                    className={`text-[18px] font-medium transition-colors duration-300
              ${open ? "text-[#625FD0]" : "text-gray-700 group-hover:text-[#625FD0]"}`}
                  >
                    {f.q}
                  </span>

                  <svg
                    className={`shrink-0 w-5 h-5 transition-all duration-300
              ${open ? "rotate-180 text-[#625FD0]" : "text-gray-400 group-hover:text-[#625FD0]"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out
            ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 pb-6">
                      <div className="border-t border-gray-200 pt-5">
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
