"use client";

import { useState } from "react";

const data = {
  eyebrow: "Business Case",
  title: "ROI Calculator",
  description:
    "Estimate the operational and financial upside of shifting repetitive management work  coordination, approvals, reconciliation, reporting  into autonomous Beehive agent workflows.",
  intro:
    "Built for department heads and finance partners who need a directional number before committing to a full deployment assessment. This is a structured planning tool, not a finance model.",

  highlights: [
    {
      icon: "◈",
      label: "Labour Recovery",
      text: "Model the labour value recovered when coordination, approval, and reconciliation tasks shift from human time to autonomous agent execution.",
    },
    {
      icon: "◉",
      label: "Payback Timing",
      text: "Estimate payback timing based on your fully-loaded cost inputs and a conservative 60–75% automation yield assumption.",
    },
    {
      icon: "◫",
      label: "Pilot Scope",
      text: "Identify which workflows produce the fastest payback so pilot scope decisions are driven by evidence rather than preference.",
    },
    {
      icon: "◎",
      label: "Finance-Ready",
      text: "Generate a one-page summary to use as a planning conversation starter with finance, IT, and executive stakeholders.",
    },
    {
      icon: "◧",
      label: "Sensitivity",
      text: "Stress-test assumptions by adjusting yield rates, headcount, and platform cost before committing to a pilot.",
    },
  ],

  stats: [
    {
      label: "Planning mode",
      value: "Directional",
      note: "Estimates are indicative, not auditable forecasts",
    },
    {
      label: "Decision speed",
      value: "< 15 min",
      note: "Complete with basic operational data",
    },
    {
      label: "Use case",
      value: "Budget-ready",
      note: "Formatted for finance and procurement conversations",
    },
    {
      label: "Follow-up",
      value: "Pilot-focused",
      note: "Each output recommends a first workflow for deployment",
    },
    {
      label: "Yield assumption",
      value: "60–75%",
      note: "Conservative range from live Beehive enterprise deployments",
    },
    {
      label: "Typical payback",
      value: "4–9 months",
      note: "Observed range across single-workflow pilot deployments",
    },
  ],

  pillars: [
    {
      n: "01",
      title: "Recovered managerial capacity",
      description:
        "Coordination, approval routing, status chasing, and exception handling consume an estimated 30–40% of senior operational staff time. Beehive agents absorb these tasks  the Controller Agent decomposes and routes work, the Validation Agent checks outputs before commit, and escalations surface only the decisions that genuinely require human judgement.",
    },
    {
      n: "02",
      title: "Execution quality improvements",
      description:
        "Human-executed workflows degrade under volume  error rates rise, cycle times lengthen, and forecasting accuracy falls as coordination overhead increases. Beehive agents execute at consistent quality regardless of concurrent load, operate on live data via the ADA layer, and produce structured outputs with confidence scores that make quality visible rather than assumed.",
    },
    {
      n: "03",
      title: "Phased rollout with measurable gates",
      description:
        "Every deployment begins with a single high-frequency workflow targeted for its measurable baseline. Shadow mode runs the agent cluster in parallel with the existing human process for a minimum of two weeks. Expansion to adjacent workflows is gated by evidence: stable confidence scores, low escalation rates, and a completed audit cycle.",
    },
    {
      n: "04",
      title: "Prioritise by realistic ROI, not enthusiasm",
      description:
        "The calculator scores candidate workflows across four dimensions  weekly effort consumed, error cost when the workflow fails, strategic importance, and data readiness for ADA connection  and ranks them by estimated first-year ROI. This prevents starting with the most visible workflow rather than the one with the fastest, most defensible payback.",
    },
  ],

  workflow: [
    {
      n: "01",
      title: "Identify effort",
      detail:
        "List the management and operational workflows your team executes weekly. Estimate hours consumed per workflow per week and multiply by staff involved. Include senior staff time at fully-loaded cost  coordination overhead is most expensive when it consumes director and VP time.",
    },
    {
      n: "02",
      title: "Apply conservative yield",
      detail:
        "Apply a 60% automation yield to identified effort as the base case  meaning 60% of weekly hours consumed are absorbed by Beehive agents, with the remaining 40% retained for human oversight, exception handling, and governance.",
    },
    {
      n: "03",
      title: "Compare against platform cost",
      detail:
        "Match the annualised labour value of recovered effort against SuperManager AGI's deployment cost  platform licence, implementation partner fees, and internal IT time. The calculator surfaces gross payback period and net first-year ROI with sensitivity sliders.",
    },
    {
      n: "04",
      title: "Define pilot scope",
      detail:
        "Use the workflow ranking output to define the first deployment: the single workflow with the highest ROI score, the clearest data readiness, and an identified human owner. The pilot scope document gives your implementation partner a starting brief rather than a blank page.",
    },
  ],

  assumptions: [
    {
      n: "A",
      title: "Fully-loaded labour cost",
      detail:
        "The calculator uses fully-loaded cost  base salary plus benefits, employer taxes, office overhead, and management cost  rather than base salary alone. Industry benchmarks suggest fully-loaded cost runs 1.25–1.4x base salary for operational and managerial roles.",
    },
    {
      n: "B",
      title: "Automation yield rate",
      detail:
        "Yield rate represents the proportion of identified weekly effort that Beehive agents absorb in steady-state operation. The 60% base case is derived from observed outcomes across live enterprise deployments  it accounts for effort that remains with human operators for governance, exception review, and escalation handling.",
    },
    {
      n: "C",
      title: "Implementation timeline",
      detail:
        "The calculator assumes a four-week implementation for a single-workflow pilot  two weeks of ADA connection setup and agent configuration, two weeks of shadow mode observation before go-live. This timeline assumes data access permissions are resolved before implementation begins.",
    },
    {
      n: "D",
      title: "What this calculator does not model",
      detail:
        "Revenue impact from shorter approval cycles, risk reduction value from improved compliance, and the compounding effect of expanding Beehive coverage to multiple workflows over time. These are addressed in the deeper deployment assessment available after the pilot.",
    },
  ],

  faq: [
    {
      q: "Is this a finance model I can submit to my CFO?",
      a: "Not directly. The calculator produces directional estimates based on your inputs and conservative industry benchmarks  it is designed to start a budget conversation, not close one. The output gives you a credible opening number, a ranked workflow priority list, and a pilot scope document. A finance-grade model with auditable assumptions is produced as part of the deeper deployment assessment after the pilot is scoped.",
    },
    {
      q: "What inputs do I need to complete the calculator?",
      a: "Three core inputs: the list of workflows you want to assess (name and weekly frequency), the estimated hours consumed per workflow per week and the number of staff involved, and the fully-loaded annual cost of the staff involved. Optional inputs  current error rates, downstream cost of workflow failures, and strategic priority rating  improve the workflow ranking output but are not required to generate a payback estimate.",
    },
    {
      q: "How accurate are the yield rate assumptions?",
      a: "The 60% base case is derived from observed outcomes across live SuperManager AGI enterprise deployments  it is a floor, not an average. Workflows with high data readiness and low exception rates consistently yield at 70–75% in steady-state. Workflows with fragmented data sources or high exception rates yield closer to 55–60%. The calculator allows you to adjust the yield assumption and observe the impact on payback period in real time.",
    },
    {
      q: "What is the minimum viable pilot scope?",
      a: "One workflow, one Beehive agent cluster, one human owner. The minimum pilot targets a single high-frequency workflow with a clear pre-deployment baseline, a named human owner who sets policy and receives escalations, and a two-week shadow mode period before any action is committed to systems of record.",
    },
    {
      q: "Does the calculator account for implementation cost?",
      a: "Yes. Platform licence cost and implementation partner fees are included in the total deployment cost used to calculate gross payback period and net first-year ROI. Internal IT time for ADA connection setup is included as a configurable input  the calculator defaults to 40 hours of internal IT time for a single-workflow pilot.",
    },
    {
      q: "What happens after I complete the calculator?",
      a: "The calculator produces three outputs: a directional ROI summary with payback period and first-year net ROI, a ranked workflow priority list with scores across effort, error cost, strategic importance, and data readiness, and a pilot scope document with a recommended Beehive agent configuration, ADA data sources required, and suggested shadow mode duration.",
    },
  ],
};

export default function ROICalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedAssumption, setExpandedAssumption] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-7">
            <div className="w-1 h-7 bg-[#625FD0] rounded-full" />
            <span className="text-[16px] text-[#625FD0] uppercase tracking-widest font-medium">
              ROI Calculator
            </span>
          </div>

          <h1 className="text-5xl lg:text-[68px] font-light leading-[1.04] text-gray-900 mb-8 max-w-4xl">
            Build the business case{" "}
            <span className="text-[#625FD0]">before</span>
            <br />
            the conversation.
          </h1>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl">
            <p className="text-base text-gray-500 leading-relaxed">
              {data.description}
            </p>
            <p className="text-[16px] text-gray-400 leading-relaxed border-l-2 border-[#625FD0] pl-6">
              {data.intro}
            </p>
          </div>

          {/* Stats bar */}
          <div className="mt-12 flex flex-wrap border border-gray-200 rounded-2xl overflow-hidden">
            {data.stats.map((s, i) => (
              <div
                key={i}
                className="group flex-1 min-w-[140px] sm:min-w-[160px] bg-white px-4 sm:px-5 py-4 sm:py-5
      border-r border-b border-gray-200 
      last:border-r-0
      hover:bg-[#625FD0]/5 transition-all duration-300"
              >
                <p
                  className="text-[12px] sm:text-[14px] text-gray-400 uppercase tracking-widest mb-1.5 
      group-hover:text-[#625FD0] transition-colors"
                >
                  {s.label}
                </p>

                <p className="text-[14px] sm:text-[16px] font-medium text-[#625FD0]">
                  {s.value}
                </p>

                <p
                  className="text-[13px] sm:text-[15px] text-gray-400 mt-0.5 leading-snug 
      group-hover:text-gray-600 transition-colors"
                >
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[14px] sm:text-[16px] text-gray-700 uppercase tracking-widest">
            What you can model
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {data.highlights.map((h, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5
        hover:border-[#625FD0] hover:bg-[#625FD0]/5 hover:-translate-y-1 hover:shadow-md
        transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className="text-lg sm:text-xl text-[#625FD0]/50 mb-3 sm:mb-4 
        group-hover:text-[#625FD0] transition-colors duration-300"
              >
                {h.icon}
              </div>

              {/* Label */}
              <p
                className="pill-tag text-[12px] sm:text-[14px] text-gray-400 uppercase tracking-widest mb-1.5
        group-hover:text-[#625FD0] transition-colors duration-300"
              >
                {h.label}
              </p>

              {/* Text */}
              <p
                className="text-[12px] sm:text-[13px] text-gray-700 leading-relaxed
        group-hover:text-gray-900 transition-colors duration-300"
              >
                {h.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[14px] sm:text-[16px] text-gray-700 uppercase tracking-widest">
            How it works
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[18px] sm:left-[22px] top-8 bottom-8 w-px 
    bg-gradient-to-b from-[#625FD0]/30 via-[#625FD0]/10 to-transparent"
          />

          <div className="space-y-4">
            {data.workflow.map((s, i) => (
              <div key={i} className="group flex gap-4 sm:gap-5 items-start">
                {/* Step Circle */}
                <div
                  className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full 
          border border-gray-200 bg-white flex items-center justify-center z-10
          group-hover:border-[#625FD0] group-hover:bg-[#625FD0] 
          transition-all duration-300"
                >
                  <span
                    className="text-[10px] sm:text-[12px] text-gray-400 font-medium
            group-hover:text-white transition-colors duration-300"
                  >
                    {s.n}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 
          px-4 sm:px-6 py-4 sm:py-5
          group-hover:border-[#625FD0] group-hover:bg-[#625FD0]/5
          group-hover:-translate-y-1 group-hover:shadow-md
          transition-all duration-300 cursor-pointer"
                >
                  <p
                    className="text-[14px] sm:text-[16px] font-medium text-gray-800 mb-1
            group-hover:text-[#625FD0] transition-colors duration-300"
                  >
                    {s.title}
                  </p>

                  <p
                    className="text-[12px] sm:text-[13px] text-gray-700 leading-relaxed
            group-hover:text-gray-900 transition-colors duration-300"
                  >
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE DRIVERS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[14px] sm:text-[18px] text-gray-700 uppercase tracking-widest">
            Key value drivers
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {data.pillars.map((p, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-200 bg-white p-5 sm:p-7
        hover:border-[#625FD0] hover:bg-[#625FD0]/5 hover:-translate-y-1 hover:shadow-md
        transition-all duration-300 cursor-pointer"
            >
              {/* Number / Badge */}
              <span
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 
        rounded-full bg-[#625FD0]/10 text-[#625FD0] font-medium mb-4
        group-hover:bg-[#625FD0] group-hover:text-white transition-all duration-300"
              >
                {p.n}
              </span>

              {/* Title */}
              <p
                className="text-[15px] sm:text-[18px] font-medium text-gray-900 mb-2 sm:mb-3 leading-snug
        group-hover:text-[#625FD0] transition-colors duration-300"
              >
                {p.title}
              </p>

              {/* Description */}
              <p
                className="text-[13px] sm:text-[16px] text-gray-700 leading-relaxed
        group-hover:text-gray-900 transition-colors duration-300"
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ASSUMPTIONS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex items-center gap-3 mb-8">
          <span className="pill-tag text-[14px] sm:text-[18px] text-gray-700 uppercase tracking-widest">
            Model assumptions
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {data.assumptions.map((a, i) => {
            const open = expandedAssumption === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-300
          ${
            open
              ? "border-[#625FD0] bg-[#625FD0]/5 shadow-md"
              : "border-gray-200 bg-white hover:border-[#625FD0] hover:bg-[#625FD0]/5"
          }`}
              >
                <button
                  className="w-full flex items-start sm:items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left group"
                  onClick={() => setExpandedAssumption(open ? null : i)}
                >
                  {/* Number Badge */}
                  <span
                    className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-[10px] sm:text-xs font-medium shrink-0 transition-all duration-300
              ${
                open
                  ? "bg-[#625FD0] text-white"
                  : "bg-[#625FD0]/10 text-[#625FD0] group-hover:bg-[#625FD0] group-hover:text-white"
              }`}
                  >
                    {a.n}
                  </span>

                  {/* Title */}
                  <span
                    className={`text-[15px] sm:text-[18px] font-medium flex-1 leading-snug transition-colors duration-300
              ${
                open
                  ? "text-[#625FD0]"
                  : "text-gray-700 group-hover:text-[#625FD0]"
              }`}
                  >
                    {a.title}
                  </span>

                  {/* Chevron */}
                  <svg
                    className={`shrink-0 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300
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
                </button>

                {/* Dropdown */}
                <div
                  className={`grid transition-all duration-300 ease-in-out
            ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6">
                      <div className="border-t border-gray-200 pt-4 sm:pt-5">
                        <p className="text-[13px] sm:text-[16px] text-gray-700 leading-relaxed">
                          {a.detail}
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

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14 mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[14px] sm:text-[18px] text-gray-700 uppercase tracking-widest">
            Frequently asked questions
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="space-y-3 sm:space-y-4">
          {data.faq.map((f, i) => {
            const open = openFaq === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-300
          ${
            open
              ? "border-[#625FD0] bg-[#625FD0]/5 shadow-md"
              : "border-gray-200 bg-white hover:border-[#625FD0] hover:bg-[#625FD0]/5"
          }`}
              >
                <button
                  className="w-full flex items-start sm:items-center justify-between gap-4 sm:gap-6 px-4 sm:px-7 py-4 sm:py-5 text-left group active:scale-[0.98]"
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  {/* Question */}
                  <span
                    className={`text-[15px] sm:text-[18px] font-medium leading-snug transition-colors duration-300
              ${
                open
                  ? "text-[#625FD0]"
                  : "text-gray-800 group-hover:text-[#625FD0]"
              }`}
                  >
                    {f.q}
                  </span>

                  {/* Chevron */}
                  <svg
                    className={`shrink-0 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300
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
                </button>

                {/* Dropdown */}
                <div
                  className={`grid transition-all duration-300 ease-in-out
            ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-7 pb-5 sm:pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-[13px] sm:text-[16px] text-gray-700 leading-relaxed">
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
