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
  sections: {
    heading: string;
    content: string[];
  }[];
};

export const HomeData: homedata[] = [
  {
    id: "automate",
    img: "/Image/ai-maannger.jpg",
    text: "AUTOMATE DAILY OPS",
    title:
      "Prompt and Execute Any Task One Prompt Executes Work Across Every Connected Application",
    desc: "SuperManager AGI takes any natural language instruction and executes it end to end across every connected system. The Controller Agent orchestrates specialist agents in parallel, validates all outputs via evidence-majority voting and commits results with a full audit trail. No manual steps. No app switching. No waiting.",
    author: "SuperManager AGI Team",
    date: "March 12, 2025",
    readTime: "6 min read",
    intro:
      "Enterprise operations have long been defined by fragmentation: tasks distributed across multiple platforms, teams functioning as manual connectors between systems, and execution cycles measured in hours rather than seconds. SuperManager AGI was purpose-built to consolidate that complexity into a single, auditable instruction.",
    tag: ["Automation", "Multi-Agent", "Operations", "Enterprise"],
    sections: [
      {
        heading: "The Structural Cost of Manual Operations",
        content: [
          "Modern enterprise systems were not designed to communicate with one another. CRMs, ERPs, procurement platforms, and finance tools each operate within their own data boundaries, requiring human effort to bridge every transition.",
          "The consequences extend beyond inefficiency. Each manual handoff introduces latency, version inconsistency, and audit exposure  risks that accumulate silently until they materialise as operational failures or compliance gaps.",
        ],
      },
      {
        heading: "Controller Agent: Orchestration at Scale",
        content: [
          "Upon receiving an instruction, SuperManager AGI's Controller Agent performs intent resolution  decomposing the request into discrete sub-tasks and assigning each to the specialist agent best qualified to execute it.",
          "Specialist agents operate concurrently across all connected systems, committing updates, triggering downstream workflows, and synchronising state in a single execution cycle.",
          "Every output is subject to Evidence-Majority Voting prior to commitment. No change is written to any system until independent agent consensus has been established and recorded.",
        ],
      },
      {
        heading: "Evidence-Majority Voting: Structural Validation by Design",
        content: [
          "Unvalidated AI output presents a material risk in enterprise environments. A syntactically correct response that is factually inaccurate will propagate through connected systems without detection  unless a structural validation layer intervenes.",
          "Evidence-Majority Voting requires independent agent agreement before any output is accepted. Discrepancies are surfaced as explicit flags for human review, not absorbed silently into downstream records.",
        ],
      },
      {
        heading: "Operational Implications for Enterprise Teams",
        content: [
          "Operational staff are no longer responsible for routing work between systems. Instruction issuance and outcome review replace the manual coordination that previously defined their role.",
          "Every executed task generates a complete audit record  agent identity, trigger condition, decision path, and committed outcome  available in real time to compliance, operations, and executive stakeholders without manual compilation.",
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
    desc: "Ask anything about your enterprise and get a grounded, accurate answer retrieved directly from your live databases in under 65ms via the ADA layer. Financial analytics hallucination drops from 25.1% to 2.7%. Customer support hallucination drops from 12.4% to 3.8%. Operational data drops from 13.5% to 5.1%. Not approximations  actual data from actual databases.",
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
    desc: "Configure specialist agents that monitor your connected systems continuously, detect conditions that require action and execute tasks autonomously. Each agent is purpose-built for its domain. All coordinated by the Beehive architecture. All auditable. All running whether or not anyone is watching.",
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
    text: "PROTECT YOUR TEAM",
    title:
      "Live Org Intelligence for Every Leader Know What Is Happening Across Every Department, Live",
    desc: "Founders, COOs and department heads get a live view of every metric that matters  revenue, inventory, logistics, marketing spend, customer care, finance  updated in real time from every connected system. Not a report someone built last week. The actual live state of your organisation, visible in one place at 65ms.",
    author: "SuperManager AGI Product",
    date: "March 18, 2025",
    readTime: "5 min read",
    intro:
      "The quality of executive decisions is bounded by the quality of the information on which they are based. When that information is assembled manually, distributed across disparate systems, and delivered on a fixed reporting schedule, decision latency becomes a structural liability. Live Org Intelligence redefines the information architecture available to organisational leadership.",
    tag: [
      "Live Data",
      "Leadership",
      "Org Intelligence",
      "Dashboard",
      "Enterprise",
    ],
    sections: [
      {
        heading: "The Limitations of Report-Based Information Architecture",
        content: [
          "A report is not a representation of current organisational state. It is a curated snapshot of a past state, filtered through the constraints of the source system's export capability and delivered on a schedule determined by operational convention rather than decision need.",
          "By the time a weekly operations summary reaches executive leadership, the conditions it describes have changed. Decisions informed by that summary are, by definition, decisions made on outdated information.",
        ],
      },
      {
        heading: "Live Org Intelligence: Continuous State Aggregation",
        content: [
          "Every system connected to SuperManager AGI streams state changes to the Aggregation Engine as they occur. Revenue figures, inventory levels, logistics status, marketing spend, customer care queue depth, and finance positions are normalised into a unified interface, refreshed continuously at 65ms.",
          "There is no export process. There is no scheduled data pull. The interface reflects the actual current state of the organisation at the moment it is viewed.",
        ],
      },
      {
        heading: "Designed for Executive Decision Velocity",
        content: [
          "Live Org Intelligence is not an analytics tool for data teams. It is an operational interface designed for founders, Chief Operating Officers, and department heads who require immediate situational awareness and cannot afford to wait for analyst-mediated reporting cycles.",
          "Cross-departmental anomaly detection identifies and surfaces emerging signals at the moment of detection  not at the next scheduled review, and not after an analyst has had the opportunity to investigate.",
        ],
      },
      {
        heading: "Complete Organisational Visibility. Zero Manual Compilation.",
        content: [
          "The foundational promise of Live Org Intelligence is the elimination of information latency at the leadership level. No metric that matters should require a request, a report, or a waiting period to access.",
          "Every material indicator across every department is visible in one place, updated in real time, and sourced directly from every connected system  without any human effort required to assemble, maintain, or deliver it.",
        ],
      },
    ],
  },
];

export const getHomeDataById = (id: string) =>
  HomeData.find((item) => item.id === id);
