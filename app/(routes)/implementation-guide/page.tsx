"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BarChart3,
  Layers3,
  Target,
  Users,
  Shield,
  GitBranch,
  Clock,
  ChevronDown,
} from "lucide-react";

const data = {
  eyebrow: "Rollout Playbook",
  title: "Implementation Guide",
  description:
    "A complete, structured approach to deploying SuperManager AGI across your organisation from ADA connection setup and Beehive agent configuration through shadow mode validation, live execution, and multi-department scale. Built for operations leaders, IT architects, and implementation partners who need a repeatable, governed rollout methodology rather than a generic AI adoption framework.",
  intro:
    "This guide is built for teams who have moved beyond experimentation and are ready to deploy AI agent workflows that commit real actions to real systems of record. Every step assumes production intent not sandbox exploration and every recommendation is derived from observed outcomes across live SuperManager AGI enterprise deployments.",

  deepIntro:
    "Deploying SuperManager AGI is not a software installation it is an operational reconfiguration. The Beehive architecture introduces a new layer between human intent and system execution: a coordinated hierarchy of specialist agents that decompose goals, act across connected data sources via the ADA layer, validate their own outputs, and escalate only the decisions that genuinely require human judgement. Organisations that deploy successfully treat the implementation as a phased trust-building exercise starting with one workflow, one agent cluster, and one human owner, then expanding coverage only after shadow mode performance data, audit cycle review, and operator confidence all confirm readiness. This playbook structures that journey phase by phase, with specific configuration guidance, governance checkpoints, and expansion gates at every stage.",

  highlights: [
    "Score and rank candidate workflows by ROI before configuring a single agent the pilot workflow selection decision determines payback timing more than any other factor in the deployment",
    "Design human authority into the system architecture from day one escalation thresholds, override permissions, and RBAC policies must be defined before shadow mode begins, not after the first incident",
    "Run every new agent cluster in shadow mode for a minimum of two weeks before committing any action to systems of record shadow mode data produces the performance baseline that justifies go-live and the evidence base that justifies expansion",
    "Measure output quality and operator trust in parallel a system with strong output metrics but high escalation rates is not ready to scale, regardless of what the accuracy numbers say",
    "Gate every expansion decision on evidence from the prior phase stable confidence scores, low escalation rates, and a completed audit cycle reviewed by your compliance team are the three criteria that confirm readiness, not elapsed time",
  ],

  stats: [
    {
      label: "Rollout strategy",
      value: "Phased execution",
      note: "Three phases: Foundation, Live Execution, and Scale each gated by evidence from the prior phase",
    },
    {
      label: "Initial approach",
      value: "Pilot first",
      note: "One workflow, one agent cluster, one human owner before any broader deployment is scoped",
    },
    {
      label: "Risk control",
      value: "Shadow mode",
      note: "Minimum two-week shadow period on every new agent cluster before live commit is enabled",
    },
    {
      label: "Scaling logic",
      value: "Proof-based",
      note: "Expansion gated by confidence scores, escalation rates, and audit cycle completion not by timeline",
    },
    {
      label: "Data latency",
      value: "2–15ms",
      note: "ADA layer connects agents directly to data sources no API middleware, no network boundary overhead",
    },
    {
      label: "Typical pilot duration",
      value: "6–8 weeks",
      note: "Two weeks setup, two weeks shadow mode, two weeks live at partial volume, plus audit review",
    },
  ],

  featured: [
    {
      phase: "Phase 01",
      title: "Foundation and Data Layer",
      desc: "Establish ADA connections, define governance structure, configure RBAC, and validate data readiness before any agent is deployed.",
      long: "The most common cause of delayed or failed SuperManager AGI deployments is unresolved data access agents configured correctly but unable to reach the data sources they need because permissions were not secured before implementation began. Phase 01 resolves this systematically. Begin by mapping every data source the target workflow touches: PostgreSQL databases, MongoDB collections, Redis caches, ERP tables, and any third-party API endpoints. Establish ADA connections in a staging environment and validate round-trip latency target 2–15ms per connection; anything above 50ms indicates a network configuration issue that must be resolved before agent deployment. Configure RBAC at the data-source level: each agent role receives only the permissions required for its domain, with no inherited access from parent agents. Define the governance structure for the deployment: who sets policy for this workflow, who receives escalations, what the escalation SLA is, and what categories of action require human approval before commit. Document all of this before Phase 02 begins governance defined after the first incident is governance that arrives too late.",
    },
    {
      phase: "Phase 02",
      title: "Shadow Mode and Live Execution",
      desc: "Deploy the Beehive agent cluster in shadow mode, build a performance baseline, then transition to live execution on a controlled volume subset.",
      long: "Shadow mode is the operational core of a responsible SuperManager AGI deployment. Deploy the Controller Agent and relevant specialist agents Finance AGI, Logistics AGI, Operations AGI, or whichever domain agents the target workflow requires in shadow configuration. In shadow mode, agents observe live workflow inputs, generate outputs, and log every decision branch without committing any action to systems of record. The existing human process continues in full parallel. Run shadow mode for a minimum of two weeks longer for workflows with high exception rates or complex data dependencies. During this period, measure three things: output accuracy rate (percentage of agent outputs that match the expected result against the human baseline), confidence score distribution (the spread of scores across all outputs, not just the average), and edge case frequency (how often the agent cluster encounters inputs outside its configured scope). Use shadow mode data to set live escalation thresholds if 93% of shadow outputs exceed a confidence score of 0.85, set the live threshold at 0.80 to allow for distribution shift without generating excessive escalations. Transition to live execution at 20% of workflow volume, with the remaining 80% continuing through the human process. Run parallel tracks for a minimum of one week, comparing outcomes across both before expanding agent coverage to full volume.",
    },
    {
      phase: "Phase 03",
      title: "Audit, Optimisation, and Scale",
      desc: "Complete the first audit cycle, address edge cases identified in live execution, and expand Beehive coverage to adjacent workflows using the validated deployment pattern.",
      long: "Scale in SuperManager AGI is not replication it is pattern extension. Before any adjacent workflow is scoped, the primary deployment must complete a full audit cycle: your compliance team reviews the Audit Agent logs for the live execution period, confirms that every committed action is traceable to a specific intent, agent output, and human approval decision, and signs off on the governance configuration. This review typically takes three to five business days and produces the compliance sign-off document required before the next deployment phase is approved. Once audit is complete, address the edge cases surfaced during live execution inputs the agent cluster did not handle within the configured confidence threshold, data source variations that produced unexpected outputs, and escalation patterns that indicate a misconfigured threshold. Update the Controller Agent's task decomposition rules, adjust specialist agent tool permissions if necessary, and rerun a one-week shadow period on any modified configuration before re-enabling live execution. Expansion to adjacent workflows follows the same three-phase pattern Foundation, Shadow, Live with two advantages: ADA connections to shared data sources are already established, and the governance framework from the primary deployment provides a starting template. Expansion timelines compress from six to eight weeks to three to four weeks for adjacent workflows that share the same data layer and human owner.",
    },
  ],

  pillars: [
    {
      title: "Start with measurable impact",
      desc: "The pilot workflow selection decision determines payback timing more than any subsequent configuration choice. Score candidate workflows across four dimensions before committing: weekly effort consumed (hours per week across all staff involved), error cost when the workflow fails (downstream rework, penalties, or revenue impact), data readiness (are the required data sources accessible and ADA-connectable without significant IT work), and human ownership clarity (is there a named person who will set policy and receive escalations). The workflow that scores highest across all four is the right pilot not the one that feels most impressive or receives the most executive attention.",
    },
    {
      title: "Cross-team alignment before configuration",
      desc: "SuperManager AGI deployments that stall do so because a critical stakeholder typically IT security, legal, or finance was not included in the governance design conversation until after configuration began. Convene a single alignment session before Phase 01 starts with four participants: the business owner of the target workflow, the IT lead responsible for data access, the compliance or legal lead responsible for audit requirements, and the implementation partner lead. The output of this session is a one-page governance document covering data access permissions, escalation structure, audit log destination, and approval authority. This document prevents the three most common mid-deployment blockers: data access denied by IT security, escalation routing disputed by business owners, and audit log format rejected by compliance.",
    },
    {
      title: "Trust is built through transparency, not performance",
      desc: "Operators who can see exactly what an agent did, why it did it, and what it would have escalated develop confidence faster than operators shown accuracy metrics alone. Configure the observability dashboard to surface the full decision trace for every agent output not just the final result during the shadow mode period. When an operator can review ten agent decisions and understand the reasoning behind each one, they calibrate their trust in the system accurately. When they can only see that 94% of outputs were correct, they have no basis for knowing whether the 6% that were wrong share a pattern that matters.",
    },
    {
      title: "Scale only what evidence supports",
      desc: "The expansion gate is three criteria, all of which must be met simultaneously: confidence scores stable at or above the live threshold for a minimum of four consecutive weeks, escalation rate below 8% of total workflow volume (indicating the threshold is correctly calibrated and the agent cluster is handling its domain reliably), and a completed audit cycle signed off by your compliance team. Meeting two of three is not sufficient. An agent cluster with strong confidence scores but a 15% escalation rate has a misconfigured threshold or an undertrained scope expanding it amplifies the problem rather than proving the pattern.",
    },
  ],

  workflow: [
    {
      title: "Workflow selection and scoring",
      desc: "Score every candidate workflow across four dimensions weekly effort consumed, error cost when the workflow fails, data readiness for ADA connection, and human ownership clarity. Rank by composite score. The highest-ranking workflow becomes the pilot; the next two to three become the Phase 03 expansion candidates. Document the scoring so the prioritisation decision is auditable and not revisited mid-deployment when a senior stakeholder advocates for a different starting point.",
    },
    {
      title: "Foundation and data layer setup",
      desc: "Map every data source the target workflow touches. Establish ADA connections in staging, validate latency (target 2–15ms per connection), and confirm RBAC permissions for each agent role before any agent is configured. Resolve data access issues at this stage every week of unresolved data access in Phase 01 adds a week to the shadow mode start date. Produce the governance document covering escalation structure, audit log destination, and approval authority before Phase 02 begins.",
    },
    {
      title: "Shadow mode deployment and baseline",
      desc: "Deploy the Beehive agent cluster in shadow mode. Run for a minimum of two weeks longer for high-exception workflows. Measure output accuracy rate, confidence score distribution, and edge case frequency daily. Use the distribution data to set live escalation thresholds. Do not set thresholds based on assumed performance set them based on observed shadow mode data. Produce a shadow mode summary report before live execution is enabled; this report becomes the go-live approval document.",
    },
    {
      title: "Controlled live execution",
      desc: "Enable live execution at 20% of workflow volume. Run parallel tracks agent and human for a minimum of one week, comparing outcomes across both. Review the Audit Agent log daily during this period. Expand to full volume only after one week of stable parallel execution with no unresolved escalation patterns. Notify your compliance team that live execution has begun and share the Audit Agent log access credentials so the first audit cycle can begin.",
    },
    {
      title: "Audit, edge case resolution, and optimisation",
      desc: "Complete the first audit cycle with your compliance team. Address edge cases surfaced during live execution update Controller Agent decomposition rules, adjust specialist agent permissions, rerun shadow mode on any modified configuration. Produce a post-deployment outcome report benchmarked against the pre-deployment baseline. This report is the evidence document for Phase 03 expansion decisions and the primary input to any finance-grade ROI model produced after the pilot.",
    },
    {
      title: "Pattern-based expansion",
      desc: "Expand to the next highest-scoring workflow from the original candidate list using the validated deployment pattern as a template. ADA connections to shared data sources are already established; the governance framework provides a starting template; the implementation partner team is familiar with your environment. Adjacent workflow deployments follow the same three-phase structure but compress from six to eight weeks to three to four weeks. Each successive deployment strengthens the organisational capability to deploy and govern Beehive agent clusters independently.",
    },
  ],

  faq: [
    {
      q: "What is the most common reason SuperManager AGI deployments stall?",
      a: "Unresolved data access. Agents that are correctly configured but cannot reach their required data sources produce no value and erode stakeholder confidence rapidly. The fix is structural: data access permissions must be secured and ADA connections validated in staging before Phase 02 begins not treated as a parallel workstream that will be resolved 'during implementation.' Every deployment that has stalled mid-phase has had unresolved data access as a contributing factor.",
    },
    {
      q: "Who should own the SuperManager AGI implementation?",
      a: "Four roles share ownership across distinct domains. The business workflow owner sets policy, defines escalation thresholds, and receives escalations during live execution they are the human authority the system reports to. The IT lead owns data access, ADA connection setup, and RBAC configuration they resolve the technical prerequisites that determine whether the deployment can begin. The compliance lead owns audit log configuration, reviews the first audit cycle, and signs off on the go-live approval document. The implementation partner owns the Beehive agent configuration, shadow mode analysis, and the post-deployment outcome report. No single role owns all four domains deployments that concentrate ownership in one person consistently produce governance gaps.",
    },
    {
      q: "How long does a SuperManager AGI pilot take from kickoff to live execution?",
      a: "Six to eight weeks for a single-workflow pilot where data access permissions are resolved before kickoff. The breakdown: two weeks for Foundation and data layer setup (ADA connection validation, RBAC configuration, governance document), two weeks of shadow mode operation and baseline measurement, one week of controlled live execution at 20% volume with parallel human process, and one week of full-volume live execution before the first audit cycle begins. The most common cause of timeline extension is data access resolution that was expected to take one week and takes three which is why Phase 01 treats data access as the critical path item, not a background task.",
    },
    {
      q: "What should a post-deployment outcome report include?",
      a: "Five sections: pre-deployment baseline (the hours per week, error rate, or cycle time measured before the pilot began), shadow mode performance summary (accuracy rate, confidence score distribution, edge case frequency, and threshold-setting rationale), live execution outcomes (the same metrics measured during live operation, compared against both the pre-deployment baseline and the shadow mode baseline), escalation analysis (escalation rate, the categories of input that triggered escalations most frequently, and the threshold adjustments made in response), and expansion recommendation (the next workflow candidate, the rationale for its prioritisation, and the estimated deployment timeline based on data readiness assessment). This structure ensures the report functions as both an accountability document for the pilot and an evidence base for the expansion decision.",
    },
    {
      q: "How do we handle workflows where data sources are fragmented across legacy systems?",
      a: "Fragmented data sources are the most technically complex deployment scenario but are addressable through the Universal Integration Layer. For legacy systems without a native ADA connector, the visual API builder generates a production-ready connector from an OpenAPI spec in under five minutes. For systems without any API surface older ERP modules, flat-file exports, or database tables accessible only via stored procedures the implementation partner configures a structured extraction layer that normalises data into ADA-compatible format before agent execution. The key constraint is latency: if the extraction layer adds more than 50ms to the agent-to-data round trip, real-time orchestration is compromised and the workflow should be evaluated for batch execution rather than live agent operation.",
    },
    {
      q: "What is the minimum team size required to run a SuperManager AGI pilot?",
      a: "Four people at a minimum: one business workflow owner (typically a department head or senior operations manager), one IT contact with data access authority (able to approve and provision ADA connections within 48 hours of request), one compliance contact who can review audit logs and sign off on the go-live approval document, and one implementation partner lead who owns the technical configuration. The implementation partner can be a SuperManager AGI certified partner or an internal team member who has completed the technical certification programme. Pilots attempted with fewer than four distinct roles consistently produce governance gaps that surface as escalation routing disputes or audit configuration issues during live execution.",
    },
    {
      q: "How does the implementation guide relate to the ROI Calculator?",
      a: "The ROI Calculator produces three outputs that feed directly into this guide: a directional payback estimate used to secure budget approval, a ranked workflow priority list that determines the Phase 01 pilot selection, and a pilot scope document that provides the implementation partner with the target workflow, recommended agent configuration, and required ADA data sources. The Implementation Guide picks up where the calculator ends it assumes pilot scope has been agreed and budget has been approved, and it structures the technical and governance work required to move from scope document to live agent execution. The two tools are designed to be used in sequence: calculator first to build the business case, implementation guide second to execute the deployment.",
    },
  ],
};

export default function ImplementationGuide() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1200px] px-6 py-20 ">
          <div className="text-center max-w-[1200px] mx-auto">
            <span className="inline-flex items-center gap-2 font-semibold rounded-full  px-4 py-2 text-sm  text-[#625FD0] border-2 border-[#625FD0]">
              <Sparkles className="w-5 h-5" />
              {data.eyebrow}
            </span>
            <h1 className="mt-6 text-xl lg:text-5xl  tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {data.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 text-lg max-w-[1000px] mx-auto">
              {data.description}
            </p>
            <p className="mt-4 text-gray-600 text-md max-w-[1000px] mx-auto">
              {data.deepIntro}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {data.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#625FD0] hover:shadow-md transition-all"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#625FD0]/10 text-[#625FD0] group-hover:bg-[#625FD0] group-hover:text-white transition-colors">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="text-gray-700 font-medium">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Grid */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 bg-gray-50 rounded-3xl my-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center hover:shadow-md transition-all"
            >
              <p className="text-sm uppercase tracking-wider text-gray-500 ">
                {stat.label}
              </p>
              <p className="mt-2 text-xl  text-[#625FD0]">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Phases / Timeline */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="text-3xl lg:text-5xl text-gray-800 mb-8 text-center">
          Implementation Roadmap
        </h2>
        <div className="space-y-12">
          {data.featured.map((phase, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-md transition-all"
            >
              <div className="absolute -top-4 left-8 bg-[#625FD0] text-white text-xs  px-3 py-1 rounded-full">
                {phase.phase}
              </div>
              <div className="mt-4">
                <p className="text-2xl  text-gray-800">{phase.title}</p>
                <p className="mt-2 text-gray-600 text-lg">{phase.desc}</p>
                <p className="mt-4 text-gray-500 text-md">{phase.long}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Principles */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 bg-gray-50 rounded-3xl my-8">
        <h2 className="text-3xl lg:text-5xl text-gray-800 mb-8 text-center">
          Core Principles
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.pillars.map((pillar, idx) => {
            const icons = [Target, Users, Shield, GitBranch];
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#625FD0]/10 text-[#625FD0] flex items-center justify-center group-hover:bg-[#625FD0] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg  text-gray-800">
                      {pillar.title}
                    </p>
                    <p className="mt-2 text-gray-600 text-md">{pillar.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Execution Steps */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="text-3xl lg:text-5xl text-gray-800 mb-8 text-center">
          Execution Steps
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {data.workflow.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all group"
            >
              <div className="absolute -top-3 left-4 bg-[#625FD0] text-white text-xs  px-3 py-1 rounded-full">
                Step {idx + 1}
              </div>
              <div className="mt-6">
                <p className="text-lg  text-gray-800">{step.title}</p>
                <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="text-3xl lg:text-5xl  text-center text-gray-800 mb-12">
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
  );
}