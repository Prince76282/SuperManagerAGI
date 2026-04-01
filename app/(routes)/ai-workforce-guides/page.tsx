"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Workflow,
  Target,
  Bot,
  UserCheck,
  ChevronRight,
  Shield,
  Database,
  Scale,
  Gauge,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

export default function AIWorkforceGuidesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const data = {
    eyebrow: "SuperManager AGI",
    title: "AI Workforce Guides",
    subtitle:
      "Design AI systems that work like real teams  structured, accountable, and built to scale without losing human control.",

    description:
      "SuperManager AGI introduces a workforce layer where AI agents operate alongside humans with clear roles, defined ownership, and enforceable accountability  not as isolated automations that execute in a vacuum. The Beehive architecture organises specialist agents the way a well-run organisation structures its departments: each agent owns a domain, reports through a chain of command, and operates within governance boundaries set by human policy  so the system scales without becoming opaque.",

    insights: [
      {
        title: "Workforce Over Automation",
        desc: "Single-task scripts solve isolated problems. A coordinated AI workforce  where agents hand off context, share state, and escalate intelligently  solves the coordination layer that automation tools were never designed to touch.",
      },
      {
        title: "Human Authority Is Non-Negotiable",
        desc: "AI agents in SuperManager AGI execute  they do not decide policy. Humans define the guardrails, set the escalation thresholds, and retain override authority at every node. The system is designed so that removing human authority requires deliberate, audited action, not an accidental configuration.",
      },
      {
        title: "Role-Based Specialisation",
        desc: "Generalist agents produce generalist results. SuperManager AGI assigns each agent a bounded domain  Finance, Logistics, HR, Operations  with a defined toolset, a specific data scope, and clear handoff conditions. Specialisation improves output quality, simplifies debugging, and makes audit trails interpretable by non-technical stakeholders.",
      },
      {
        title: "Progressive Scale by Design",
        desc: "Beehive is architected for incremental trust-building. Every new agent cluster begins in shadow mode  observing and logging without committing  until performance benchmarks and human review confirm readiness. Expansion is gated by evidence, not enthusiasm.",
      },
      {
        title: "Shared Context Across Agents",
        desc: "Unlike isolated automations that operate on stale snapshots, Beehive agents share a live context graph updated in real time via the ADA layer. A Logistics agent that detects a dispatch delay surfaces that signal to the Finance agent reconciling the same order  without a human intermediary triggering the handoff.",
      },
      {
        title: "Auditability as Architecture",
        desc: "Every agent action, tool call, and decision branch is logged immutably to your SIEM or data warehouse. The system is designed so that any output  a financial transaction, a procurement decision, a customer communication  can be traced back to the exact agent, the exact prompt, and the exact data state that produced it.",
      },
    ],

    model: [
      "Intent → Natural language goal captured from human operator or upstream system trigger",
      "Decomposition → Controller Agent breaks intent into bounded subtasks with defined success criteria",
      "Assignment → Subtasks routed to specialist agents based on domain, toolset, and current load",
      "Execution → Agents act across connected systems via ADA layer at 2–15ms data latency",
      "Validation → Validation Agent checks output against compliance rules, business logic, and expected ranges",
      "Escalation → Confidence-scored results below threshold are flagged for human review with full context",
      "Human Approval → Operator reviews, overrides, or approves with a logged decision and rationale",
      "Commit → Approved outputs are written to systems of record with immutable audit trail attached",
      "Learning → Outcome fed back to Controller Agent to refine future task decomposition for similar intents",
    ],

    roles: [
      {
        role: "Controller Agent",
        desc: "The orchestration layer of the Beehive architecture. Receives high-level intent, decomposes it into bounded subtasks with defined success criteria, assigns work to specialist agents based on domain and current load, monitors execution state in real time, and triggers escalation when downstream agents stall or return low-confidence outputs. The Controller Agent never executes actions directly  its sole function is coordination and oversight.",
      },
      {
        role: "Execution Agent",
        desc: "Domain-specialist agents that perform actions within a defined scope  Finance AGI reconciles transactions and forecasts cash flow, Logistics AGI manages dispatch queues and carrier coordination, Operations AGI handles procurement and inventory, Marketing AGI executes campaign workflows. Each Execution Agent connects to its designated data sources via ADA, operates within RBAC-enforced permissions, and returns a structured output with a confidence score to the Validation Agent.",
      },
      {
        role: "Validation Agent",
        desc: "An independent verification layer that sits between Execution and commit. Checks every agent output against three criteria: technical correctness (does the result match the expected schema and data types), business logic compliance (does the action fall within defined policy boundaries), and outcome plausibility (does the result fall within statistically expected ranges for this workflow). Outputs that fail any criterion are held and escalated  they are never silently dropped or auto-corrected.",
      },
      {
        role: "Audit Agent",
        desc: "A passive observer agent that attaches to every workflow and maintains an immutable record of every agent action, tool call, data read, and decision branch. The Audit Agent writes structured logs to your designated SIEM or data warehouse in real time  not as a post-hoc export  so compliance teams have a live, queryable record of system behaviour without waiting for a report cycle.",
      },
      {
        role: "Human Operator",
        desc: "The policy authority for the entire system. Human Operators define the guardrails  the categories of action agents can and cannot take, the escalation thresholds that trigger review, and the approval workflows for high-stakes commits. During execution, Operators receive escalations with full context: the original intent, the decomposition path, the agent output, and the specific criterion that triggered the review. Override decisions are logged with rationale and fed back into the Controller Agent's context for future task decomposition.",
      },
      {
        role: "Shadow Agent",
        desc: "A pre-deployment configuration mode in which a new agent cluster observes live workflows, generates outputs, and logs decisions  without committing any action to systems of record. Shadow mode allows teams to benchmark agent performance against human baselines, surface edge cases, and build stakeholder confidence before go-live. Transition from shadow to live requires explicit human sign-off and is logged as a governance event.",
      },
    ],

    steps: [
      "Identify one high-impact, high-frequency workflow with a measurable baseline  reconciliation cycle time, dispatch error rate, or reporting hours per week  so post-deployment improvement is quantifiable rather than subjective.",
      "Map every data source the workflow touches and establish ADA connections in a staging environment before configuring any agent  data access is the most common deployment bottleneck and should be resolved before agent design begins.",
      "Define human ownership explicitly: who sets policy for this workflow, who receives escalations, who has override authority, and what the escalation SLA is. Document this before the first agent is deployed, not after the first incident.",
      "Deploy the Controller Agent and the relevant specialist agents in shadow mode  observe outputs against the live workflow for a minimum of two weeks, benchmark confidence scores, and identify edge cases that the initial configuration does not handle.",
      "Set escalation thresholds based on shadow mode data, not assumptions. If 94% of outputs in shadow mode exceed the confidence threshold, set the live threshold at 90% to allow for distribution shift  not at 99%, which will generate false escalations and erode operator trust in the system.",
      "Transition to live execution on a subset of the workflow volume  20% is a reliable starting point  while the full volume continues through the existing human process in parallel. Compare outcomes across both tracks before expanding agent coverage.",
      "Measure trust and output together at each expansion gate: output quality metrics confirm the system is performing, trust metrics  operator escalation rates, override frequency, and shadow-mode reactivations  confirm the team is confident enough to expand coverage responsibly.",
      "Expand Beehive coverage to adjacent workflows only after the primary deployment has operated in full live mode for a minimum of four weeks with stable confidence scores, low escalation rates, and at least one completed audit cycle reviewed by your compliance team.",
    ],

    principles: [
      {
        title: "Least Privilege by Default",
        desc: "Every agent is granted the minimum data access and tool permissions required to complete its assigned domain. Permissions are never inherited from a parent agent and must be explicitly granted for each data source and action type. Expanding an agent's permission scope requires a logged change request reviewed by a Human Operator.",
      },
      {
        title: "Confidence Scoring on Every Output",
        desc: "No agent output enters the commit stage without a structured confidence score. Scores are computed from three inputs: the quality of the source data the agent operated on, the number of decision branches taken during execution, and the historical accuracy rate of this agent on similar tasks. Low-confidence outputs are escalated, never silently dropped.",
      },
      {
        title: "Immutable Audit by Design",
        desc: "Audit logging is not a feature that can be disabled  it is a core runtime behaviour. Every agent action writes a structured log entry before the action is executed, not after. This pre-execution logging ensures that even failed or rolled-back actions are fully recorded, giving compliance teams a complete picture of system behaviour including the actions that did not complete.",
      },
      {
        title: "Graceful Degradation",
        desc: "When an agent cluster encounters an unhandled edge case, a data source outage, or a validation failure it cannot resolve, the system degrades gracefully to the pre-existing human workflow rather than halting or producing a partial output. Degradation events are logged, surfaced to the Human Operator, and used to improve the agent configuration before the next execution cycle.",
      },
    ],

    faqs: [
      {
        q: "How is a SuperManager AGI AI workforce different from RPA?",
        a: "RPA automates fixed, rule-based sequences against stable interfaces  it breaks the moment an upstream system changes a field name or a process deviates from its scripted path. SuperManager AGI agents reason about intent, adapt to data variation, and hand off context to other agents when a task exceeds their domain. The workforce layer adds coordination, escalation, and governance that RPA architectures were never designed to support.",
      },
      {
        q: "What happens when an agent produces a wrong output?",
        a: "The Validation Agent intercepts the output before it reaches the commit stage, flags the specific criterion it failed, and routes it to the Human Operator with full context. The incorrect output is never written to systems of record. The failure event is logged to the Audit Agent, and the Controller Agent uses the failure signal to adjust task decomposition for similar intents in future cycles.",
      },
      {
        q: "Can we run SuperManager AGI agents alongside our existing human workflows?",
        a: "Yes  and this is the recommended deployment pattern. Shadow mode allows agents to observe and generate outputs on live workflows without committing any action, so human teams continue operating normally while the system builds a performance baseline. Live execution begins on a subset of volume, running in parallel with the human process, before full coverage is enabled.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23625FD0' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1200px] px-6 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#625FD0]/10 px-4 py-2 text-sm font-semibold text-[#625FD0] border border-[#625FD0]/20">
              <Sparkles className="w-4 h-4" />
              {data.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl lg:text-6xl  tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {data.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              {data.subtitle}
            </p>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              {data.description}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/guides/ai-workforce"
                className="group inline-flex items-center gap-2 rounded-2xl bg-[#625FD0] px-7 py-3 font-medium text-white shadow-lg shadow-[#625FD0]/20 hover:bg-[#4f4cb0] transition-all"
              >
                Explore Guide
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/get-in-touch"
                className="group inline-flex items-center gap-2 rounded-2xl border-2 border-[#625FD0] bg-white px-7 py-3 font-medium text-[#625FD0] hover:border-[#625FD0] hover:bg-[#625FD0]/5 hover:text-[#625FD0] transition-all"
              >
                Talk to Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.insights.map((item, idx) => {
            const icons = [Zap, Users, Workflow, Target, Shield, Database];
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#625FD0] hover:shadow-md transition-all"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#625FD0]/10 text-[#625FD0] group-hover:bg-[#625FD0] group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-xl font-semibold text-gray-800">
                  {item.title}
                </p>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Execution Model */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 bg-gray-50 rounded-3xl my-8">
        <p className="text-3xl lg:text-5xl  text-gray-800 mb-8 text-center">
          AI Workforce Execution Model
        </p>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {data.model.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="px-5 py-2 rounded-full border-2 border-gray-200 bg-white text-md text-[#625FD0] shadow-sm hover:border-[#625FD0] transition">
                {step}
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* Workforce Roles */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="text-3xl lg:text-5xl  text-gray-800 mb-8 text-center">
          Workforce Roles
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.roles.map((role, idx) => {
            const icons = [Bot, Bot, Bot, Bot, UserCheck, Bot];
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
                    <p className="text-lg font-semibold text-gray-800">
                      {role.role}
                    </p>
                    <p className="mt-2 text-gray-600 text-sm">{role.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Implementation Path */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 bg-gray-50 rounded-3xl my-8">
        <h2 className="text-3xl lg:text-5xl  text-gray-800 mb-8 text-center">
          Implementation Path
        </h2>
        <div className="space-y-6">
          {data.steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start group">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#625FD0] text-white flex items-center justify-center text-sm  shadow-md">
                {idx + 1}
              </div>
              <p className="text-gray-700  group-hover:text-gray-900 transition-colors">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="text-3xl lg:text-5xl  text-gray-800 mb-8 text-center">
          Core Design Principles
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.principles.map((principle, idx) => {
            const icons = [Shield, Gauge, Database, Scale];
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
                    <p className="text-lg font-semibold text-gray-800">
                      {principle.title}
                    </p>
                    <p className="mt-2 text-gray-600 text-sm">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="text-3xl lg:text-5xl  text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {data.faqs.map((faq, index) => (
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
                  className={`h-5 w-5 text-[#625FD0] transition-transform duration-200 ${
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