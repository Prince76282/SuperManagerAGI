"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Section = {
  title: string;
  description?: string;
  items?: string[];
};

const data = {
  eyebrow: "Business Case",
  title: "ROI Calculator",
  description:
    "Estimate the operational and financial upside of shifting repetitive management work  coordination, approvals, reconciliation, reporting  into autonomous Beehive agent workflows. Built for department heads and finance partners who need a directional number before committing to a full deployment assessment.",
  intro:
    "This calculator is a structured planning tool, not a finance model. It produces directional estimates based on your inputs  time spent per week, fully-loaded labour cost, and target workflow scope  and benchmarks them against SuperManager AGI deployment costs and industry-observed automation yield rates. Use the output as the opening number in a budget conversation, not as a committed forecast.",

  highlights: [
    "Model the labour value recovered when coordination, approval, and reconciliation tasks shift from human time to autonomous agent execution",
    "Estimate payback timing based on your fully-loaded cost inputs and a conservative automation yield assumption  typically 60–75% of identified effort",
    "Identify which workflows produce the fastest payback so pilot scope decisions are driven by evidence rather than preference",
    "Generate a one-page summary to use as a planning conversation starter with finance, IT, and executive stakeholders",
    "Stress-test assumptions by adjusting yield rates, headcount, and platform cost to understand sensitivity before committing to a pilot",
  ],

  stats: [
    {
      label: "Planning mode",
      value: "Directional",
      note: "Estimates are indicative, not auditable forecasts",
    },
    {
      label: "Decision speed",
      value: "Fast",
      note: "Complete in under 15 minutes with basic operational data",
    },
    {
      label: "Use case",
      value: "Budget-ready",
      note: "Output formatted for finance and procurement conversations",
    },
    {
      label: "Follow-up",
      value: "Pilot-focused",
      note: "Each output recommends a specific first workflow for deployment",
    },
    {
      label: "Yield assumption",
      value: "60–75%",
      note: "Conservative range based on live Beehive enterprise deployments",
    },
    {
      label: "Typical payback",
      value: "4–9 months",
      note: "Observed range across single-workflow pilot deployments",
    },
  ],

  pillars: [
    {
      title: "Recovered managerial capacity",
      description:
        "Coordination, approval routing, status chasing, and exception handling consume an estimated 30–40% of senior operational staff time in mid-market and enterprise organisations. Beehive agents absorb these tasks  the Controller Agent decomposes and routes work, the Validation Agent checks outputs before commit, and escalations surface only the decisions that genuinely require human judgement. The recovered capacity is redeployed to higher-value work, not simply eliminated from headcount.",
    },
    {
      title: "Execution quality improvements",
      description:
        "Human-executed workflows degrade under volume  error rates rise, cycle times lengthen, and forecasting accuracy falls as coordination overhead increases. Beehive agents execute at consistent quality regardless of concurrent load, operate on live data via the ADA layer rather than stale exports, and produce structured outputs with confidence scores that make quality visible rather than assumed. Faster execution and higher accuracy compound: a finance reconciliation that previously ran monthly can run daily, turning a lagging indicator into a live signal.",
    },
    {
      title: "Phased rollout with measurable gates",
      description:
        "Every SuperManager AGI deployment begins with a single high-frequency workflow targeted for its measurable baseline  dispatch error rate, reconciliation cycle time, or reporting hours per week. Shadow mode runs the agent cluster in parallel with the existing human process for a minimum of two weeks, building a performance benchmark before any action is committed to systems of record. Expansion to adjacent workflows is gated by evidence: stable confidence scores, low escalation rates, and a completed audit cycle reviewed by your compliance team.",
    },
    {
      title: "Prioritise by realistic ROI, not enthusiasm",
      description:
        "Not every workflow produces the same return. The calculator scores candidate workflows across four dimensions  weekly effort consumed, error cost when the workflow fails, strategic importance to the business, and data readiness for ADA connection  and ranks them by estimated first-year ROI. This prevents the common deployment mistake of starting with the most visible workflow rather than the one with the fastest, most defensible payback.",
    },
  ],

  workflow: [
    {
      title: "Identify effort",
      detail:
        "List the management and operational workflows your team executes weekly  coordination calls, approval queues, reconciliation runs, status reports, exception handling. Estimate the hours consumed per workflow per week and multiply by the number of staff involved. Include senior staff time at fully-loaded cost  coordination overhead is most expensive when it consumes director and VP time.",
    },
    {
      title: "Apply conservative yield",
      detail:
        "Apply a 60% automation yield to identified effort as the base case  meaning 60% of the weekly hours consumed by each workflow are absorbed by Beehive agents, with the remaining 40% retained for human oversight, exception handling, and governance. Observed yield rates in live SuperManager AGI deployments range from 60–75%; the calculator defaults to 60% to produce a defensible floor rather than an optimistic ceiling.",
    },
    {
      title: "Compare against platform cost",
      detail:
        "Match the annualised labour value of recovered effort against SuperManager AGI's deployment cost  platform licence, implementation partner fees, and internal IT time for ADA connection setup. The calculator surfaces both gross payback period (time to recover total deployment cost) and net first-year ROI (labour value recovered minus total deployment cost, expressed as a percentage of deployment cost). Sensitivity sliders allow you to adjust yield rate, headcount, and platform cost to stress-test the output.",
    },
    {
      title: "Define pilot scope",
      detail:
        "Use the workflow ranking output to define the first deployment: the single workflow with the highest ROI score, the clearest data readiness, and an identified human owner who will set policy and receive escalations. The pilot scope document produced by the calculator includes the target workflow, the recommended Beehive agent configuration, the ADA data sources required, and a suggested shadow mode duration based on workflow complexity  giving your implementation partner a starting brief rather than a blank page.",
    },
  ],

  assumptions: [
    {
      title: "Fully-loaded labour cost",
      detail:
        "The calculator uses fully-loaded cost  base salary plus benefits, employer taxes, office overhead, and management cost  rather than base salary alone. Industry benchmarks suggest fully-loaded cost runs 1.25–1.4x base salary for operational and managerial roles. If your finance team has a standard multiplier, use that figure; the calculator accepts direct input.",
    },
    {
      title: "Automation yield rate",
      detail:
        "Yield rate represents the proportion of identified weekly effort that Beehive agents absorb in steady-state operation. The 60% base case is derived from observed outcomes across SuperManager AGI's live enterprise deployments  it accounts for the effort that remains with human operators for governance, exception review, and escalation handling. Workflows with high data readiness and low exception rates typically yield at the upper end of the 60–75% range.",
    },
    {
      title: "Implementation timeline",
      detail:
        "The calculator assumes a four-week implementation for a single-workflow pilot  two weeks of ADA connection setup and agent configuration, two weeks of shadow mode observation before go-live. This timeline assumes data access permissions are resolved before implementation begins; unresolved data access is the most common cause of timeline extension and is flagged explicitly in the pilot scope output.",
    },
    {
      title: "What the calculator does not model",
      detail:
        "The calculator does not model revenue impact (deals closed faster due to shorter approval cycles), risk reduction value (cost avoided through improved compliance and audit readiness), or the compounding effect of expanding Beehive coverage to multiple workflows over time. These are material components of a full business case and are addressed in the deeper deployment assessment available after the pilot.",
    },
  ],

  faq: [
    {
      q: "Is this a finance model I can submit to my CFO?",
      a: "Not directly. The calculator produces directional estimates based on your inputs and conservative industry benchmarks  it is designed to start a budget conversation, not close one. The output gives you a credible opening number, a ranked workflow priority list, and a pilot scope document. A finance-grade model with auditable assumptions, sensitivity analysis, and post-deployment variance tracking is produced as part of the deeper deployment assessment after the pilot is scoped.",
    },
    {
      q: "What inputs do I need to complete the calculator?",
      a: "Three core inputs: the list of management and operational workflows you want to assess (name and weekly frequency), the estimated hours consumed per workflow per week and the number of staff involved, and the fully-loaded annual cost of the staff involved. Optional inputs  current error rates, downstream cost of workflow failures, and strategic priority rating  improve the workflow ranking output but are not required to generate a payback estimate.",
    },
    {
      q: "What should a deeper ROI model include?",
      a: "A full business case for SuperManager AGI should include four value dimensions beyond labour recovery: execution quality improvement (error rate reduction and its downstream cost avoidance), cycle time compression (the revenue or working capital impact of processes that run daily instead of weekly), compliance and audit value (cost avoided through immutable logging and reduced manual audit preparation), and strategic redeployment value (the output produced by senior staff whose coordination time has been recovered). The deeper deployment assessment structures all four dimensions with your operational data.",
    },
    {
      q: "How accurate are the yield rate assumptions?",
      a: "The 60% base case is derived from observed outcomes across live SuperManager AGI enterprise deployments  it is a floor, not an average. Workflows with high data readiness, low exception rates, and clear human escalation policies consistently yield at 70–75% in steady-state operation. Workflows with fragmented data sources, high exception rates, or unresolved governance ownership yield closer to 55–60%. The calculator allows you to adjust the yield assumption and observe the impact on payback period in real time.",
    },
    {
      q: "What is the minimum viable pilot scope?",
      a: "One workflow, one Beehive agent cluster, one human owner. The minimum pilot targets a single high-frequency workflow  finance reconciliation, logistics dispatch coordination, or operational reporting are the most common starting points  with a clear pre-deployment baseline (hours per week, error rate, or cycle time), a named human owner who sets policy and receives escalations, and a two-week shadow mode period before any action is committed to systems of record. The pilot produces a post-deployment outcome report benchmarked against the baseline, which becomes the evidence base for expansion.",
    },
    {
      q: "Does the calculator account for implementation cost?",
      a: "Yes. Platform licence cost and implementation partner fees are included in the total deployment cost used to calculate gross payback period and net first-year ROI. Internal IT time for ADA connection setup is included as a configurable input  the calculator defaults to 40 hours of internal IT time for a single-workflow pilot based on observed deployment data, but this figure should be adjusted if your data environment is more complex or if data access permissions are not yet resolved.",
    },
    {
      q: "What happens after I complete the calculator?",
      a: "The calculator produces three outputs: a directional ROI summary with payback period and first-year net ROI, a ranked workflow priority list with scores across effort, error cost, strategic importance, and data readiness, and a pilot scope document with a recommended Beehive agent configuration, ADA data sources required, and suggested shadow mode duration. You can download the outputs as a PDF or share them directly with your implementation partner to begin the deployment assessment.",
    },
  ],
};

export default function ROICalculatorPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        {/* HERO */}
        <section className="text-center mb-20">
          <p className="text-[#625FD0]  uppercase tracking-wide">
            {data.eyebrow}
          </p>

          <h1 className=" text-3xl lg:text-5xl  mt-4">{data.title}</h1>

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            {data.description}
          </p>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto">{data.intro}</p>
        </section>

        {/* HIGHLIGHTS */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          {data.highlights.map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 hover:shadow-md transition"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </section>

        {/* STATS */}
        <section className="grid md:grid-cols-4 gap-6 mb-20">
          {data.stats.map((stat, i) => (
            <div key={i} className="border rounded-xl p-6 text-center">
              <p className="text-sm text-gray-500 uppercase">{stat.label}</p>
              <p className="text-xl  mt-2 text-[#625FD0]">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* PILLARS */}
        <section className="mb-20">
          <h2 className="text-3xl lg:text-5xl  mb-10">Key Value Drivers</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {data.pillars.map((p, i) => (
              <div key={i} className="border rounded-xl p-6">
                <p className=" text-lg text-[#625FD0]">{p.title}</p>
                <p className="text-gray-600 text-md mt-2">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="mb-20">
          <h2 className="text-3xl lg:text-5xl  mb-10">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {data.workflow.map((step, i) => (
              <div key={i} className="border rounded-xl p-6">
                <p className="text-md text-[#625FD0]">Step {i + 1}</p>
                <p className=" mt-2 text-lg">{step.title}</p>
                <p className="text-gray-600 mt-2">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

      



        <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="text-3xl lg:text-5xl  text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {data.faq.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="flex justify-between items-center w-full p-6 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">{faq.q}</span>
                <ChevronDown
                  className={`h-8 w-8 text-[#625FD0] transition-transform duration-200 ${
                    openFaqIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openFaqIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

        
      </div>
    </div>
  );
}
