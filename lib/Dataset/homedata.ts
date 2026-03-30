import type { Section } from "./types/shared";

/**
 * HomeData: Featured content items for home page tabs/sections
 * Used in: Home page tabbed interface (Automate, Optimize sections)
 * Extends: Shows featured content with metadata and detailed sections
 */
export type homedata = {
  id: string;
  img: string;
  text: string;
  title: string;
  desc: string;
  author?: string;
  date: string;
  readTime: string;
  intro: string;
  tag?: string[];
  sections: Section[];
};

export const HomeData: homedata[] = [
  {
    id: "automate",
    img: "/Image/ai-maannger.jpg",
    text: "AUTOMATE DAILY OPS",
    title:
      "Prompt and Execute Any Task One Prompt Executes Work Across Every Connected Application ",
    desc: "Modern organizations operate across dozens of systems:  CRM, ERP, finance, logistics, project tools, communication platforms, and internal databases. Most work today is not complex because of the task itself, but because execution requires coordinating across multiple systems manually. SuperManager AGI was built to convert instructions into execution across systems. Instead of teams moving data between tools, triggering workflows, updating systems, and generating reports manually, a single instruction can now trigger execution across the entire company software stack.",
    author: "SuperManager AGI Team",
    date: "March 12, 2025",
    readTime: "6 min read",
    intro:
      "Enterprise operations have long been defined by fragmentation  tasks spread across platforms, teams acting as manual connectors, and execution cycles measured in hours. SuperManager AGI consolidates that complexity into a single, auditable instruction.",
    tag: ["Automation", "Multi-Agent", "Operations", "Enterprise"],
    sections: [
      {
        heading: "The Hidden Cost of Manual Operations",
        content: [
          "Enterprise systems were not built to communicate with each other. CRMs, ERPs, procurement tools, and finance platforms each operate in silos  requiring human effort to bridge every transition.",
          "Each manual handoff introduces latency, data inconsistency, and compliance risk  accumulating silently until they surface as operational failures or audit gaps.",
        ],
      },
      {
        heading: "Controller Agent: Orchestration at Scale",
        content: [
          "When an instruction is received, SuperManager AGI's Controller Agent resolves intent  decomposing the request into sub-tasks and routing each to the most qualified specialist agent.",
          "Specialist agents execute concurrently across all connected systems, committing updates, triggering workflows, and synchronizing state in a single cycle.",
          "All outputs pass through Evidence-Majority Voting before any change is committed  ensuring no action is written to any system without verified agent consensus.",
        ],
      },
      {
        heading: "Evidence-Majority Voting: Validation by Design",
        content: [
          "Unvalidated AI output is a material risk in enterprise environments. A syntactically correct but factually wrong response will propagate through connected systems undetected  unless a structural validation layer intervenes.",
          "Evidence-Majority Voting requires independent agent agreement before any output is accepted. Discrepancies are flagged for human review, never silently absorbed into downstream records.",
        ],
      },
      {
        heading: "What This Means for Enterprise Teams",
        content: [
          "Operational staff shift from routing work between systems to issuing instructions and reviewing outcomes  eliminating the manual coordination that previously defined execution.",
          "Every task generates a complete audit record  agent identity, trigger condition, decision path, and committed outcome  available in real time to compliance, operations, and leadership without manual compilation.",
        ],
      },
    ],
  },

  {
    id: "optimize",
    img: "/Image/image.png",
    text: "OPTIMIZE RESOURCES",
    title:
      "Retrieve Data 1,000 Feet Deep Any Answer From the Actual Live Data Inside Your Enterprise",
    desc: "Most AI systems generate answers based on documents, text, and probability. But enterprise decisions cannot be based on probable answers they must be based on actual data from actual systems.  SuperManager AGI was built with a direct enterprise data access architecture that allows AI agents to retrieve information directly from live databases, enterprise systems, and operational tools instead of relying on document indexing or cached data.",
    author: "SuperManager AGI Research",
    date: "February 28, 2025",
    readTime: "7 min read",
    intro:
      "An AI system that generates plausible-sounding answers without access to your actual data is not an enterprise tool  it is an enterprise liability. The Adaptive Data Access layer was engineered to solve the grounding problem that renders most AI deployments unsuitable for high-stakes business decisions.",
    tag: ["Data Retrieval", "ADA Layer", "Accuracy", "Enterprise AI"],
    sections: [
      {
        heading: "Why Ungrounded AI Cannot Be Trusted in Enterprise Contexts",
        content: [
          "Language models generate responses by predicting likely continuations of text. Without a direct connection to your enterprise data, any query about inventory levels, margin performance, or customer status will yield a statistically probable answer  not an accurate one.",
          "In financial reporting, procurement decisions, and customer-facing interactions, a hallucination rate of 25% represents measurable business risk. Decisions made on inaccurate data have downstream consequences that are difficult to trace and costly to remediate.",
        ],
      },
      {
        heading: "The Adaptive Data Access Layer",
        content: [
          "The ADA layer intercepts every query at the retrieval stage. Rather than allowing the model to generate an estimate, ADA translates the request into a structured retrieval plan and executes it directly against your live databases.",
          "Only records that exist, can be verified, and carry a traceable source reference are forwarded to the response generation layer. Where a record does not exist, ADA returns a sourced null  preserving accuracy without fabricating a substitute.",
        ],
      },
      {
        heading: "Measured Accuracy Improvements Across Production Deployments",
        content: [
          "Financial analytics hallucination rate: reduced from 25.1% to 2.7%. Customer support response inaccuracy: reduced from 12.4% to 3.8%. Operational data accuracy: improved from 86.5% to 94.9%.",
          "These figures are drawn from production query sets across live enterprise deployments  not controlled laboratory conditions or synthetic benchmarks.",
        ],
      },
      {
        heading: "Sub-65ms Retrieval Across Complex Data Architectures",
        content: [
          "Accuracy at the expense of response latency is operationally impractical. The ADA layer is engineered to traverse up to 1,000 data layers  including nested schemas, cross-system joins, and federated data sources  in under 65 milliseconds.",
          "Decision-makers receive verified, source-traced answers at operational speed, without waiting for scheduled batch reports or manual data pulls.",
        ],
      },
    ],
  },

  {
    id: "predict",
    img: "/Image/World'sFirst/image1.webp",
    text: "PREDICT PROBLEMS",
    title:
      "Deploy Autonomous Agents Build an AI Workforce That Runs 24x7 Without Prompts",
    desc: "Most enterprise systems generate alerts, dashboards, and reports, but execution still depends on humans to review information, decide what to do, and manually execute actions across systems. SuperManager AGI introduces autonomous agents that monitor systems, detect conditions, make decisions using enterprise data, and execute workflows automatically without waiting for human prompts. Instead of software that requires constant human interaction, organizations can deploy AI agents that continuously run operational workflows across systems.",
    author: "SuperManager AGI Engineering",
    date: "March 5, 2025",
    readTime: "8 min read",
    intro:
      "Conventional monitoring infrastructure surfaces alerts. Those alerts enter a human triage queue, where response latency is governed by availability, priority judgement, and institutional process. SuperManager AGI's autonomous agent runtime removes that latency  detecting conditions and executing responses within the same operational cycle.",
    tag: ["Autonomous Agents", "Beehive", "24x7", "Monitoring", "Enterprise"],
    sections: [
      {
        heading: "The Latency Gap Between Detection and Resolution",
        content: [
          "Alert-based monitoring was designed for a world where human response was the only available execution mechanism. In that model, detection and action are structurally separated by the throughput capacity of the operations team.",
          "The autonomous agent runtime eliminates that separation. For every configured scenario, detection and execution occur in the same cycle  the condition is identified, the response is determined, and the action is committed without queuing for human initiation.",
        ],
      },
      {
        heading: "Beehive Architecture: Coordinated Multi-Agent Execution",
        content: [
          "Deploying multiple autonomous agents across shared systems introduces a coordination risk: concurrent writes to the same records can produce data conflicts, state corruption, or duplicated actions that are difficult to reverse.",
          "The Beehive architecture addresses this through a centralised coordination bus. Every agent submits a pre-commit conflict check before writing. Failed commits are queued and retried with exponential backoff, ensuring that no data integrity issue arises from concurrent autonomous execution.",
        ],
      },
      {
        heading: "Agent Configuration and Deployment Parameters",
        content: [
          "Each specialist agent is scoped to a single operational domain at deployment: finance, logistics, customer operations, human resources, or any domain covered by your connected systems.",
          "Trigger conditions are defined per agent and support three modes: condition-based (a monitored metric crosses a defined threshold), schedule-based (execution at a specified time), or event-based (a record creation or modification in a connected system).",
          "Once deployed, agents execute continuously and indefinitely  without dependency on active user sessions, business hours, or manual re-initiation.",
        ],
      },
      {
        heading: "Auditability as an Architectural Requirement",
        content: [
          "Autonomous execution without a complete audit record is not compatible with enterprise governance requirements. Every action taken by every agent is logged with its initiating trigger, the decision path followed, and the outcome committed to connected systems.",
          "This record is available for inspection in real time and retrospectively  providing compliance teams, operations leadership, and executive stakeholders with full visibility into autonomous activity at any point in time.",
        ],
      },
    ],
  },

  {
    id: "protect",
    img: "/Image/image1.4.jpg",
    text: "LIVE ORG INTELLIGENCE",
    title:
      "Live Org Intelligence for Every Leader Know What Is Happening Across Every Department, Live",
    desc: "SuperManager AGI gives founders, COOs, and department leaders a continuous, real-time view of their entire organization  revenue, operations, inventory, logistics, marketing, customer experience, and finance  all unified into a single live interface. No reports. No delays. No manual aggregation. Just the exact current state of your business, updated in milliseconds.",

    author: "SuperManager AGI Product",
    date: "March 18, 2025",
    readTime: "5 min read",

    intro:
      "Modern organizations do not suffer from lack of data  they suffer from delayed visibility. When critical information is fragmented across systems and delivered through periodic reports, leadership operates on outdated context. Live Org Intelligence replaces static reporting with continuous, real-time awareness  enabling leaders to act on what is happening now, not what happened last week.",

    tag: [
      "Real-Time Intelligence",
      "Leadership Visibility",
      "Decision Systems",
      "Enterprise AI",
      "Live Operations",
    ],

    sections: [
      {
        heading: "The Problem: Leadership Operating on Delayed Reality",
        content: [
          "Most executive decisions today are made on top of reports  dashboards built on scheduled pipelines, manually compiled data, and delayed system syncs. These reports are not real-time representations of the business; they are historical snapshots of a state that no longer exists.",
          "As organizations scale, this delay compounds. By the time leadership reviews performance, identifies issues, and initiates action, the underlying conditions have already shifted  creating a continuous lag between reality and response.",
        ],
      },

      {
        heading:
          "Live Org Intelligence: A Continuous View of Organizational State",
        content: [
          "SuperManager AGI replaces report-based visibility with a continuously updating intelligence layer. Every connected system streams live data directly into a unified interface, where all critical business metrics are synchronized and updated in real time.",
          "Revenue movements, operational workflows, inventory changes, logistics status, marketing performance, and financial positions are not periodically refreshed  they are continuously reflected as they happen.",
        ],
      },

      {
        heading: "Unified Visibility Across Every Department",
        content: [
          "Instead of navigating multiple tools, dashboards, and reporting systems, leaders get a single, consolidated view of the entire organization. Every department operates within the same intelligence layer, ensuring alignment and eliminating data silos.",
          "This unified visibility enables leaders to understand not just isolated metrics, but the relationships between them  how marketing impacts revenue, how operations affect customer experience, and how finance reflects overall business health.",
        ],
      },

      {
        heading: "Designed for Decision Velocity, Not Analysis Overhead",
        content: [
          "Live Org Intelligence is built for decision-makers, not analysts. It removes the need for manual data interpretation and eliminates dependency on reporting teams. Leaders can instantly understand the current state of the business and act without delay.",
          "The system highlights critical changes, anomalies, and emerging patterns in real time  enabling faster, more confident decisions at every level of the organization.",
        ],
      },

      {
        heading: "Zero Reports. Zero Waiting. Zero Manual Effort.",
        content: [
          "There are no reports to generate, no dashboards to maintain, and no data pipelines to manage. The system automatically aggregates, structures, and presents information without human intervention.",
          "Every key metric is always available, always up to date, and always accurate  eliminating the operational overhead traditionally required to achieve organizational visibility.",
        ],
      },

      {
        heading: "From Visibility to Action",
        content: [
          "Visibility alone is not enough. Live Org Intelligence is tightly integrated with execution capabilities, allowing leaders not only to see what is happening, but to act on it immediately.",
          "Decisions can be translated into actions across systems in real time  closing the loop between awareness and execution, and transforming how organizations operate at scale.",
        ],
      },
    ],
  },
];

export const getHomeDataById = (id: string) =>
  HomeData.find((item) => item.id === id);
