import type { Stat, Benefit, UseCase, HowItWorks, FAQ } from "./types/shared";

/**
 * Feature: A feature/capability card with comprehensive documentation
 * Used in: Home page features section, feature showcase
 *
 * Fields:
 * - id: Unique identifier (used in URL slugs)
 * - title: Feature name
 * - tagline: Short one-liner value prop
 * - description: 1-2 sentence overview
 * - longDescription: Detailed explanation (can be multiple paragraphs)
 * - image: Hero image for the feature
 * - href: Link to detailed feature page
 * - stats: Key performance metrics or achievements
 * - benefits: List of core benefits
 * - useCases: Real-world application scenarios
 * - howItWorks: Step-by-step process documentation
 * - faq: Frequently asked questions
 */
export type Feature = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  href: string;
  stats: Stat[];
  benefits: Benefit[];
  useCases: UseCase[];
  howItWorks: HowItWorks[];
  faq: FAQ[];
};

export const features: Feature[] = [
  // 1) AI Agent Without APIs
  {
    id: "ada-integration-layer",
    title: "AI Agent without APIs",
    tagline: "Direct data access. Grounded intelligence. Consumer hardware.",
    description:
      "Powered by our proprietary Agentic Data Architecture (ADA), SuperManager AGI agents connect directly to company databases and systems instead of relying on APIs, middleware, or document-based retrieval. This allows agents to access live operational data, execute queries in real time, and perform actions across systems with ultra-low latency.",
    longDescription:
      "The ADA (Agentic Data Architecture) Integration Layer is the core technical infrastructure that makes SuperManager AGI's data capabilities fundamentally different from every other enterprise AI platform. While competitors build on top of existing API layers  inheriting their latency, rate limits, and data staleness  ADA establishes direct, permissioned connections to your actual databases and data systems.\n\nThis architectural choice has cascading benefits. Latency drops by an order of magnitude: 2–15ms vs 200–500ms for API-based retrieval. Rate limits disappear  no more throttled queries or queued requests during peak hours. Data freshness goes from eventual consistency to real-time  you're always querying the live state of your systems, not a cached export.\n\nBut the most important benefit is epistemic: because agents retrieve actual data rather than relying on semantic search over summaries, hallucination rates drop dramatically  from 22.4% (measured in standard RAG systems on enterprise benchmarks) to 4.2% in ADA-powered agents. When your AI system tells you there are 847 units of SKU-4421 in warehouse B, that number came from a direct database query  not an inference from a document chunk.\n\nADA is also designed for deployment accessibility: peer-reviewed architecture that runs on consumer-grade hardware without requiring GPUs. Enterprise AI capability without enterprise infrastructure cost.",
    image: "/Image/newimage/ai11.png",
    href: "/home/ada-integration-layer",
    stats: [
  { value: "2–15 ms", label: "Query latency (vs. 200–500 ms APIs)" },
  { value: "4.2%", label: "Hallucination rate (vs. 22.4% RAG)" },
  { value: "0", label: "GPU requirement for deployment" },
  { value: "5×", label: "Improvement in data accuracy" },
],
    benefits: [
      {
        title: "Direct Database Access",
        description:
          "ADA bypasses API layers entirely  connecting to databases directly with read-only, permissioned access. Query latency drops to 2–15ms, and you're always reading live data.",
      },
      {
        title: "Evidence-Grounded Reasoning",
        description:
          "Agent outputs are constructed from retrieved database records, not LLM inference. Every data point in an answer traces back to a specific row or document in your systems.",
      },
      {
        title: "5x Hallucination Reduction",
        description:
          "By grounding outputs in retrieved evidence rather than semantic approximation, ADA reduces hallucination rates from 22.4% to 4.2%  measured on standardized enterprise benchmarks.",
      },
      {
        title: "No API Rate Limits",
        description:
          "Direct database connections don't have rate limits. Run complex multi-source queries continuously without throttling, queuing, or degraded performance during high-traffic periods.",
      },
      {
        title: "GPU-Free Deployment",
        description:
          "ADA's architecture is optimized to run on consumer hardware. No specialized GPU infrastructure is required  dramatically reducing deployment cost and operational complexity.",
      },
    ],
    useCases: [
      {
        role: "Data Engineering Team",
        scenario:
          "Replace slow API-based data pipelines with ADA direct connections for real-time analytics.",
        outcome:
          "Query latency for operational analytics drops from 340ms (API average) to 9ms (ADA direct). Dashboard refresh rates increase from 5-minute intervals to real-time. Data pipeline maintenance overhead eliminated.",
      },
      {
        role: "Enterprise Architect",
        scenario:
          "Deploy SuperManager AGI on-premise without GPU infrastructure.",
        outcome:
          "ADA runs on standard server hardware  no NVIDIA cards, no cloud GPU instances. Full AI agent capability deployed within the organization's existing infrastructure budget.",
      },
      {
        role: "Compliance Officer",
        scenario:
          "Audit AI decision-making with full data provenance for every agent output.",
        outcome:
          "Every agent response includes a provenance record: the exact database query executed, the records retrieved, and how the output was constructed. Regulators can verify exactly what data drove each AI decision.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Secure Connection Establishment",
        detail:
          "ADA establishes encrypted, read-only connections to your databases using minimal-privilege service accounts. Connection configuration is reviewed and approved by your DBA team before activation.",
      },
      {
        step: 2,
        title: "Schema Intelligence",
        detail:
          "ADA indexes the connected database schemas  tables, columns, types, relationships, and indexing  building a semantic model that allows agents to construct accurate queries from natural language.",
      },
      {
        step: 3,
        title: "Query Generation & Validation",
        detail:
          "When an agent needs data, ADA generates the appropriate query (SQL, NoSQL, or graph), validates it against the schema and permission scope, and executes it  rejecting any query that exceeds defined access boundaries.",
      },
      {
        step: 4,
        title: "Evidence Packaging",
        detail:
          "Query results are packaged as structured evidence objects  with source table, column, row identifiers, and retrieval timestamp. Agents use this evidence directly rather than re-interpreting raw results.",
      },
      {
        step: 5,
        title: "Grounded Output Construction",
        detail:
          "Agent responses are built strictly from evidence objects. The LLM layer formats and explains; it does not infer or supplement. Provenance is attached to every output for full traceability.",
      },
    ],
    faq: [
      {
        question: "What databases does ADA support for direct connection?",
        answer:
          "PostgreSQL, MySQL, MariaDB, MongoDB, Snowflake, BigQuery, Amazon Redshift, DynamoDB, Elasticsearch, and Microsoft SQL Server are natively supported. Oracle and SAP HANA support is in beta. Custom connectors are available for other systems.",
      },
      {
        question: "How is the peer-review of ADA's architecture conducted?",
        answer:
          "ADA's core architecture paper has been submitted for external peer review by independent researchers in the database systems and AI reliability fields. The benchmark methodology, hallucination measurement framework, and latency test conditions are published and reproducible.",
      },
      {
        question: "Does 'consumer hardware' mean I can run this on a laptop?",
        answer:
          "ADA is optimized to run on standard server hardware without GPU acceleration  an 8-core CPU and 32GB RAM is sufficient for most deployments. For very large enterprises with high query volumes, we recommend a dedicated server. Laptop deployment is possible for development and testing.",
      },
    ],
  },

  // 2) Prompt and Get Data 1,000 Feet Deep
  {
    id: "prompt-and-get-data",
    title: "Prompt and Get Data 1,000 Feet Deep",
    tagline: "Live enterprise data. Any question. Under 65ms.",
    description:
      "Access critical data across 8–12 disconnected tools instantly. The ADA Integration Layer connects agents natively to databases with 2–15ms latency  no slow APIs. Query operations, finances, inventory, pipeline, or customers and receive precise answers from live enterprise data in under 65ms. No cached summaries. No dashboard approximations.",
    longDescription:
      "Most enterprise dashboards show you a simplified, cached, 24-hour-old view of your business. SuperManager AGI gives you something fundamentally different: real-time access to the actual data living inside your operational databases  without the overhead of REST APIs, GraphQL layers, or rate-limited SaaS connectors.\n\nThe ADA (Agentic Data Architecture), which is the proprietary architecture of SuperManager AGI, includes an Integration Layer that establishes direct, permissioned connections to your databases  Postgres, MySQL, MongoDB, Snowflake, BigQuery, and others. When you ask a question, agents query the source of truth directly. Latency drops from 200–500ms (typical API-based retrieval) to 2–15ms. Answers aren't approximations pulled from a reporting layer  they reflect the state of your business right now.\n\nThis also fundamentally reduces hallucination. Rather than the LLM inferring or guessing values, agents retrieve exact figures from your data sources and ground every answer in evidence. Hallucination rates drop from 22.4% (typical RAG systems) to 4.2%  a 5x improvement that makes the difference between a tool you trust and one you constantly double-check.",
    image: "/Image/newimage/Prompt-Get.png",
    href: "/home/prompt-and-get-data",
    stats: [
  { value: "2–15 ms", label: "Database query latency" },
  { value: "<65 ms", label: "Full answer delivery time" },
  { value: "5×", label: "Reduction in hallucination rate" },
  { value: "8–12", label: "Disconnected tools unified" },
],
    benefits: [
      {
        title: "Live Data, Not Cached Summaries",
        description:
          "Every query hits the source database directly. You're never looking at yesterday's numbers or a stale reporting snapshot  you're seeing the state of your business right now.",
      },
      {
        title: "Cross-System Answers in One Query",
        description:
          "Ask a question that spans inventory, finance, and CRM  agents query all three simultaneously and synthesize a unified answer. No manual cross-referencing required.",
      },
      {
        title: "Evidence-Grounded Outputs",
        description:
          "Answers are constructed from retrieved evidence, not LLM inference. Every data point in a response is traceable to a specific row or document in your actual data systems.",
      },
      {
        title: "No API Rate Limits",
        description:
          "Direct database access bypasses SaaS API rate limits entirely. Run 100 data queries in a workflow without throttling or queuing delays.",
      },
      {
        title: "Natural Language to SQL (and more)",
        description:
          "No need to know query languages. Ask in plain English  the agent generates, validates, and executes the appropriate query against the right data source automatically.",
      },
    ],
    useCases: [
      {
        role: "CEO",
        scenario:
          "Prompt: 'What's our GMV this week vs last week, broken down by channel and category?'",
        outcome:
          "Agents query Shopify, Amazon Seller Central, and Flipkart seller APIs simultaneously, aggregate GMV by channel and category, and return a clean comparison table  in under 65ms.",
      },
      {
        role: "Supply Chain Lead",
        scenario:
          "Prompt: 'Which SKUs have less than 7 days of stock left and have pending purchase orders?'",
        outcome:
          "Agent cross-references inventory levels in the WMS with open POs in the ERP, returns a prioritized list of at-risk SKUs with PO status and expected delivery dates.",
      },
      {
        role: "Sales Director",
        scenario:
          "Prompt: 'Show me all enterprise deals above ₹50L that haven't had activity in 14+ days.'",
        outcome:
          "Agent queries Salesforce CRM with precise filters, returns a list of 8 stalled deals with last activity timestamps, deal owners, and next step fields  ready to act on.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Query Intent Recognition",
        detail:
          "Your question is parsed to identify the data entities, filters, aggregations, and time ranges required  mapped against your indexed data source schemas.",
      },
      {
        step: 2,
        title: "Source Routing",
        detail:
          "The data agent identifies which databases or systems contain the required data and routes sub-queries to each source simultaneously using the ADA layer.",
      },
      {
        step: 3,
        title: "Direct Database Execution",
        detail:
          "Queries execute directly against your databases via the ADA Integration Layer  bypassing API overhead for 2–15ms retrieval latency.",
      },
      {
        step: 4,
        title: "Evidence Assembly",
        detail:
          "Retrieved data from multiple sources is assembled into a unified evidence set. Every data point is tagged with its source, query, and retrieval timestamp.",
      },
      {
        step: 5,
        title: "Grounded Answer Generation",
        detail:
          "The final answer is generated strictly from the assembled evidence  no LLM inference filling gaps. The response includes source attribution for every key figure.",
      },
    ],
    faq: [
      {
        question: "Is direct database access secure?",
        answer:
          "Yes. The ADA Integration Layer uses read-only, permissioned connections with row-level security where available. No credentials are stored in agent memory. All connections are encrypted in transit and at rest, and access logs are maintained for every query.",
      },
      {
        question: "What databases and data warehouses are supported?",
        answer:
          "PostgreSQL, MySQL, MongoDB, Snowflake, BigQuery, Redshift, DynamoDB, and Elasticsearch are natively supported. Custom connectors can be configured for proprietary databases.",
      },
      {
        question:
          "What if the question requires data from a system without direct DB access?",
        answer:
          "The agent falls back to the optimized API connector for that system  with intelligent caching and request batching to minimize latency. You'll still receive an answer; the source metadata will indicate the retrieval method used.",
      },
    ],
  },

  // 3) Universal Application Connectivity
  {
    id: "universal-application-connectivity",
    title: "Universal Application Connectivity",
    tagline: "800+ apps. One AI layer. Infinite workflows.",
    description:
      "Connect 800+ applications including CRM, ERP, HRMS, Finance, Communication, Engineering, Support, Marketing, and internal tools. Every application becomes a system agents can read, write, and execute tasks in simultaneously and in the correct sequence across your entire company.",
    longDescription:
      "Enterprise complexity doesn't come from any single tool  it comes from the sprawl of 20–40 applications that each team relies on, none of which naturally talk to each other. SuperManager AGI solves this at the infrastructure level by making every connected application a first-class citizen in the agent network.\n\nThe Universal Connectivity layer goes far beyond standard API integration. Each application connector is built with deep schema awareness  agents understand not just how to call an API, but what the data means, how entities relate across systems, and what operations are safe to perform autonomously.\n\nA customer in your CRM is automatically correlated with invoices in your ERP, support tickets in your helpdesk, projects in your project management tool, and communication history in Slack or email  without requiring manual mapping tables or integration maintenance.\n\nAgents can read from, write to, and execute actions within any connected application. They can also chain actions across applications in the correct sequence  updating CRM after a payment is confirmed, creating a project when a deal closes, notifying teams in Slack, generating invoices, updating dashboards, and more. The result is a business operating layer where data and actions flow freely between systems, orchestrated by agents that understand your entire technology stack.",
    image: "/Image/newimage/Universal-Application .png",
    href: "/home/universal-application-connectivity",
    stats: [
  { value: "800+", label: "Applications supported" },
  { value: "3", label: "Access modes: read, write, execute" },
  { value: "<24 h", label: "Typical connector activation time" },
  { value: "0", label: "Manual API mapping required" },
],
    benefits: [
      {
        title: "Deep Schema Awareness",
        description:
          "Connectors understand application data models, not just API endpoints. Agents know what a 'deal stage' means in a CRM, how it maps to a 'project status' in a project tool, and how that relates to invoices in ERP automatically.",
      },
      {
        title: "Bi-Directional Data Flow",
        description:
          "Agents can read data from any connected app and write results back, enabling cross-system updates that keep all your tools in sync without manual data entry or ETL pipelines.",
      },
      {
        title: "Cross-App Entity Correlation",
        description:
          "Customer IDs, invoices, orders, projects, employees, and tickets are automatically correlated across systems. An agent working on a customer can see CRM data, invoices, support tickets, and project status without being told.",
      },
      {
        title: "Pre-Built + Custom Connectors",
        description:
          "800+ pre-built connectors activate immediately. For proprietary or internal systems, custom connectors can be configured using database schemas, REST specs, or GraphQL introspection in under 24 hours.",
      },
      {
        title: "Permission-Scoped Access",
        description:
          "Every connector operates within explicitly defined permission scopes. No agent can read or write beyond the access boundaries you configure, enforced at the connector level, not just by policy.",
      },
    ],
    useCases: [
      {
        role: "Revenue Operations",
        scenario:
          "Sync CRM, ERP, Project Management, and Communication tools automatically.",
        outcome:
          "When a deal moves to 'Closed Won' in CRM, an agent creates a project, assigns the delivery team, creates an invoice in ERP, notifies the account manager in Slack, schedules a kickoff meeting, and updates revenue dashboards  all triggered by one CRM event.",
      },
      {
        role: "Operations Manager",
        scenario:
          "Manage company operations across ERP, HRMS, Finance, and internal tools.",
        outcome:
          "An agent can monitor inventory, vendor payments, employee onboarding, procurement approvals, and financial reports across multiple systems and ensure operations run smoothly without manual coordination between teams.",
      },
      {
        role: "Engineering Manager",
        scenario:
          "Connect GitHub events to project tools, Slack, deployments, and reporting systems.",
        outcome:
          "A merged PR automatically closes the linked task, posts a release note to Slack, triggers a deployment pipeline, updates documentation, and notifies QA  with no manual steps.",
      },
      {
        role: "HR & Employee Operations",
        scenario:
          "Automate employee lifecycle across HRMS, IT systems, payroll, and communication tools.",
        outcome:
          "When a new employee is added in HRMS, an agent creates email accounts, Slack access, project tool access, schedules onboarding meetings, assigns training documents, and updates payroll automatically.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Connector Activation",
        detail:
          "Select your applications from the connector library. OAuth or API key authentication is completed once. The connector activates with pre-indexed schema and capability definitions.",
      },
      {
        step: 2,
        title: "Schema Indexing",
        detail:
          "The ADA layer indexes the connected application's data schema  entities, relationships, field types, and allowed operations  creating a queryable capability map for agents.",
      },
      {
        step: 3,
        title: "Cross-App Entity Mapping",
        detail:
          "Common entities (customers, invoices, employees, projects, tickets, orders) are automatically mapped across connected applications using identifier correlation and schema matching.",
      },
      {
        step: 4,
        title: "Permission Configuration",
        detail:
          "Define which agents can read, write, or execute within each connected application at the resource level. Access scopes are enforced by the connector layer on every operation.",
      },
      {
        step: 5,
        title: "Live Agent Access",
        detail:
          "Once activated and configured, any agent in your workspace can interact with connected applications according to its permission scope  reading data, writing results, and triggering actions.",
      },
    ],
    faq: [
      {
        question: "What if my application isn't in the 800+ connector library?",
        answer:
          "Custom connectors can be built using a REST API spec, GraphQL schema, or direct database connection. The average activation time for a custom connector is under 24 hours. Connector requests are also accepted and widely requested applications are added to the standard library regularly.",
      },
      {
        question: "How are credentials and API keys stored?",
        answer:
          "All credentials are stored in an encrypted secrets vault, isolated per organization. They are never exposed in agent context windows, logs, or API responses. Credential rotation is supported and recommended.",
      },
      {
        question:
          "Can different teams have access to different application connectors?",
        answer:
          "Yes. Connector access is managed at the team and role level. Finance teams can access ERP and accounting tools, engineering teams can access GitHub and project tools, HR can access HRMS systems  with no cross-access unless explicitly configured.",
      },
    ],
  },

  // 4) Multi-Action Agent Orchestration
  {
    id: "multi-action-agent-orchestration",
    title: "Multi-Action Agent Orchestration",
    tagline: "Complex workflows. Parallel agents. Validated results.",
    description:
      "Execute complex workflows across multiple applications automatically. The Beehive Architecture deploys specialist agents that run in parallel. Evidence-majority voting validates outputs before execution. Achieve 6.7x throughput with 10 parallel agents and 97% task execution accuracy.",
    longDescription:
      "Enterprise workflows are inherently multi-step and multi-system. A single business process  like onboarding a new vendor, closing a sales deal, or launching a product  might span 15 steps across 6 different tools. SuperManager's Beehive Architecture is purpose-built for this reality.\n\nRather than a single generalist agent handling everything sequentially, the Beehive deploys a coordinated swarm of specialist agents  each deeply capable within its domain (finance, CRM, logistics, communication, engineering). The orchestration layer assigns work dynamically, routes data between agents, manages dependencies, and ensures the overall workflow progresses correctly even when individual steps encounter errors or require retries.\n\nThe breakthrough is evidence-majority voting: before any specialist agent writes a result, at least 3 independent verification passes confirm the output is correct. This isn't just error-checking  it's a systematic approach to ensuring that the collective intelligence of the swarm produces more reliable outputs than any individual model could alone. The result: 97% task execution accuracy on complex, multi-step enterprise workflows.",
    image: "/Image/newimage/Multi-Action.png",
    href: "/home/multi-action-agent-orchestration",
   stats: [
  { value: "6.7×", label: "Throughput with 10 parallel agents" },
  { value: "97%", label: "Task execution accuracy" },
  { value: "3+", label: "Verification passes per output" },
  { value: "15+", label: "Step workflows automated" },
],
    benefits: [
      {
        title: "Specialist Agents, Not Generalists",
        description:
          "Each agent in the Beehive is fine-tuned for its domain  logistics, finance, CRM, engineering. Specialist agents outperform generalists on domain-specific tasks by a significant margin.",
      },
      {
        title: "6.7x Throughput Improvement",
        description:
          "By parallelizing independent workflow steps across 10 agents, what takes a human team hours completes in minutes. Dependent steps sequence correctly; independent steps run simultaneously.",
      },
      {
        title: "Self-Healing Workflows",
        description:
          "When a step fails, the orchestration layer automatically retries with adjusted parameters, routes to a fallback agent, or escalates to a human  without stalling the entire workflow.",
      },
      {
        title: "Cross-Application State Management",
        description:
          "The orchestrator maintains shared workflow state across all participating agents  ensuring data produced in step 3 is correctly passed to steps 7 and 11, even when they run on different agents.",
      },
      {
        title: "Configurable Workflow Templates",
        description:
          "Pre-built workflow templates for common enterprise processes  vendor onboarding, deal closure, campaign launch, incident response  that can be customized and activated in minutes.",
      },
    ],
    useCases: [
      {
        role: "HR Operations",
        scenario:
          "Automate the full employee onboarding workflow across HR, IT, Finance, and Facilities.",
        outcome:
          "8 agents execute in parallel: provisioning accounts (IT), creating payroll records (Finance), assigning equipment (Facilities), enrolling in benefits (HR), creating Jira onboarding tasks, sending welcome communications, scheduling orientation, and notifying the manager  all triggered by a single HR form submission.",
      },
      {
        role: "E-commerce Operations",
        scenario:
          "Process a flash sale across marketplace channels simultaneously.",
        outcome:
          "Agents update pricing on Shopify, Amazon, and Flipkart simultaneously, adjust inventory buffers in the WMS, notify the logistics partner, update ad bids in Google and Meta, and send push notifications to the customer app  in one orchestrated workflow.",
      },
      {
        role: "Engineering Lead",
        scenario:
          "Automate post-incident response after a production alert fires.",
        outcome:
          "Agents create a Jira incident ticket, page the on-call engineer via PagerDuty, pull the relevant error logs from Datadog, draft an incident summary, notify the affected customer segment via Intercom, and schedule a post-mortem  within seconds of the alert.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Workflow Graph Definition",
        detail:
          "A workflow is defined as a directed graph of actions  either from a template, a natural language prompt, or a visual workflow builder. Each node specifies the action, the agent type, inputs, and success criteria.",
      },
      {
        step: 2,
        title: "Agent Assignment",
        detail:
          "The Beehive orchestrator assigns each node to the most capable available specialist agent, considering agent load, domain expertise, and tool access rights.",
      },
      {
        step: 3,
        title: "Parallel Execution",
        detail:
          "Independent nodes execute simultaneously across the agent swarm. The orchestrator tracks completion, passes state between dependent nodes, and manages the execution timeline.",
      },
      {
        step: 4,
        title: "Evidence-Majority Voting",
        detail:
          "Each agent output is verified by at least 2 additional independent checks before being accepted. Disagreements trigger a tiebreaker pass or human escalation.",
      },
      {
        step: 5,
        title: "Workflow Completion & Audit",
        detail:
          "On completion, a full workflow audit log is generated  every agent action, input, output, and timestamp  stored for compliance, debugging, and optimization.",
      },
    ],
    faq: [
      {
        question: "How many agents can run in parallel on a single workflow?",
        answer:
          "The Beehive Architecture scales horizontally. Standard deployments support up to 10 parallel agents per workflow. Enterprise deployments can scale to 50+ concurrent agents on complex workflows, subject to your plan.",
      },
      {
        question:
          "Can I define custom workflows, or are only templates available?",
        answer:
          "Both. You can activate pre-built workflow templates immediately, customize them with drag-and-drop, or define new workflows entirely via natural language prompt or a YAML/JSON workflow specification.",
      },
      {
        question: "What happens when an agent produces an incorrect output?",
        answer:
          "Evidence-majority voting catches most errors before they propagate. If a validation failure is detected, the orchestrator retries the step, adjusts parameters, or escalates to a human reviewer  depending on the error type and your configured policy.",
      },
    ],
  },

  // 5) Human in the Loop Controls
  {
    id: "human-in-the-loop",
    title: "Human in the Loop Controls",
    tagline: "AI handles the work. Humans hold the authority.",
    description:
      "Maintain full control with audit trails, approval gates, and override mechanisms. Critical decisions are routed to the right human before execution. AI handles operations while humans retain final authority.",
    longDescription:
      "Autonomy without accountability is a liability. SuperManager AGI is designed from the ground up with the understanding that enterprise AI systems must be fully governable  not just capable. Human in the Loop (HITL) controls give organizations a comprehensive framework for defining exactly where AI acts independently, where it pauses for review, and where humans must always decide.\n\nApproval gates can be inserted at any point in any workflow. Define thresholds by action type, value, risk category, or system  and the agent pauses, summarizes its proposed action with full context, and routes it to the right person for review. Approvers can approve, reject, modify, or escalate from a simple interface  on desktop or mobile.\n\nThe audit trail is comprehensive and immutable. Every agent action, approval decision, and override is logged with actor identity, timestamp, input context, and outcome. This isn't just for compliance  it's the foundation for continuous improvement, enabling teams to review agent behavior, refine policies, and build justified trust over time. Enterprises deploying SuperManager AGI can demonstrate exactly what the system did, why it did it, and who authorized it  for every action, ever.",
    image: "/Image/newimage/human-in-the-loop.png",
    href: "/home/human-in-the-loop",
    stats: [
  { value: "100%", label: "Actions logged with full context" },
  { value: "Custom", label: "Approval thresholds by action type" },
  { value: "<30 s", label: "Average approval turnaround (mobile)" },
  { value: "0", label: "Irreversible actions without audit trail" },
],
    benefits: [
      {
        title: "Granular Approval Gates",
        description:
          "Configure approval requirements at any level of granularity  by action type, value threshold, target system, agent type, or time of day. Approvals route to the right person, not just any admin.",
      },
      {
        title: "Immutable Audit Trail",
        description:
          "Every action, approval, rejection, and override is logged permanently with full context. Tamper-evident logs are exportable for compliance reporting and external audit.",
      },
      {
        title: "Mobile-First Approval Interface",
        description:
          "Approvers receive rich notification summaries with all relevant context  proposed action, rationale, risk level, and one-tap approve/reject  without needing to log into a dashboard.",
      },
      {
        title: "Escalation Chains",
        description:
          "If an approver doesn't respond within a defined SLA, approval requests automatically escalate up the chain  ensuring workflows aren't permanently blocked by an unavailable reviewer.",
      },
      {
        title: "Policy-Driven Autonomy Levels",
        description:
          "Define autonomy levels per team, workflow, or agent type. Some teams may want fully autonomous operations; others may require approval on every external communication. All configurations are supported.",
      },
    ],
    useCases: [
      {
        role: "CFO",
        scenario:
          "All payment disbursements above ₹1,00,000 require CFO approval before execution.",
        outcome:
          "The finance agent prepares the payment, generates a summary with invoice references, risk score, and vendor history, and routes it to the CFO's mobile app. One-tap approval releases the payment. Full audit trail captured.",
      },
      {
        role: "Legal / Compliance",
        scenario:
          "Any external customer communication drafted by an agent requires legal review.",
        outcome:
          "The communication agent drafts the email, flags it for legal review, and pauses. Legal receives the draft with context and approves or edits directly in the approval interface. The agent sends the approved version.",
      },
      {
        role: "IT Administrator",
        scenario: "New user access provisioning requires IT manager sign-off.",
        outcome:
          "The IT provisioning agent prepares the access bundle (systems, roles, permissions), routes it to the IT manager with a risk assessment, and awaits approval. Provisioning executes only after confirmation  with a full access log created.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Policy Configuration",
        detail:
          "Define which actions require human approval, at what thresholds, and who the designated approvers are. Policies can be set at the global, team, workflow, or action-type level.",
      },
      {
        step: 2,
        title: "Pre-Action Check",
        detail:
          "Before executing any action, the agent evaluates it against configured policies. Actions that meet approval criteria are paused and queued for human review.",
      },
      {
        step: 3,
        title: "Approval Request Routing",
        detail:
          "A rich approval request is generated  including the proposed action, supporting context, risk assessment, and expected outcome  and routed to the designated approver via their preferred channel.",
      },
      {
        step: 4,
        title: "Human Decision",
        detail:
          "The approver reviews the request and approves, rejects, modifies, or escalates. All decisions are captured with timestamp and actor identity. Modified approvals update the agent's action before execution.",
      },
      {
        step: 5,
        title: "Audit Logging",
        detail:
          "Every action  whether autonomous or approved  is written to the immutable audit log with full context. Logs are searchable, filterable, and exportable for compliance and review.",
      },
    ],
    faq: [
      {
        question:
          "Can I see a real-time view of all agent actions across my organization?",
        answer:
          "Yes. The Operations Dashboard provides a real-time feed of all agent actions  pending, in-progress, and completed  with filtering by team, workflow, agent type, action type, and time range. Anomalies are highlighted automatically.",
      },
      {
        question:
          "What happens if an approved action fails after the human approves it?",
        answer:
          "Execution failures after approval are logged with the error context and routed back to the approver and the system administrator. The agent does not retry automatically  a human decision is required to reattempt, modify, or cancel the action.",
      },
      {
        question: "How are override and emergency stop mechanisms implemented?",
        answer:
          "Any user with admin rights can pause all agent activity for their organization with a single action  an organization-wide emergency stop. Individual workflows or agent types can be paused selectively. Running actions complete their current step before pausing; actions not yet committed are cancelled.",
      },
    ],
  },

  // 6) Autonomous AI Agents Running 24x7
  {
    id: "autonomous-ai-agents",
    title: "Autonomous AI Agents Running 24x7",
    tagline: "Always watching. Always acting. Always auditable.",
    description:
      "Deploy always-on agents that monitor systems, detect triggers, and execute actions without prompts. Includes inventory agents, finance reconciliation agents, NDR management agents, campaign monitoring agents, and customer care agents  all autonomous, coordinated, and fully auditable.",
    longDescription:
      "Most automation tools run when you tell them to. SuperManager's 24x7 autonomous agents run continuously  monitoring your business systems in real time, detecting the conditions that matter, and taking action the moment a trigger fires. No cron jobs, no manual checks, no alerts that require human follow-up before anything happens.\n\nEach category of autonomous agent is purpose-built for its domain. Inventory agents watch stock levels, velocity trends, and supplier lead times  automatically triggering replenishment orders before a stockout occurs. Finance reconciliation agents compare settlement records against invoices in real time, flagging discrepancies the moment they appear. NDR (Non-Delivery Report) management agents monitor shipping exceptions, attempt re-engagement via SMS/WhatsApp/email, and rebook deliveries  dramatically improving last-mile success rates.\n\nAll agents operate within defined policy boundaries  configurable thresholds, escalation rules, and override mechanisms. Every action is logged with full context. Humans retain final authority at any point. The result: operational coverage that was previously impossible without large teams, running continuously without fatigue, at a fraction of the cost.",
    image: "/Image/newimage/Autonomous-AI.png",
    href: "/home/autonomous-ai-agents",
    stats: [
  { value: "24×7", label: "Continuous monitoring coverage" },
  { value: "5+", label: "Specialist autonomous agent types" },
  { value: "<2 s", label: "Trigger-to-action latency" },
  { value: "100%", label: "Actions logged and auditable" },
],
    benefits: [
      {
        title: "Zero Monitoring Overhead",
        description:
          "Agents watch your systems continuously  you don't need to check dashboards, set up alert pipelines, or assign team members to monitoring tasks. Issues are caught and acted on automatically.",
      },
      {
        title: "Configurable Policy Boundaries",
        description:
          "Every autonomous agent operates within rules you define: action thresholds, escalation conditions, approval requirements, and blackout windows. Full control without manual involvement.",
      },
      {
        title: "Coordinated Agent Networks",
        description:
          "Autonomous agents share state and coordinate actions. An inventory agent detecting a stockout can trigger the finance agent to approve a PO and the procurement agent to place an order  automatically.",
      },
      {
        title: "Full Auditability",
        description:
          "Every trigger detected, decision made, and action taken is logged with context, timestamp, and agent ID. Compliance, debugging, and performance review are always possible.",
      },
      {
        title: "Human Override at Any Point",
        description:
          "Any agent action can be paused, modified, or reversed by a human with appropriate access. Critical action types can be configured to require approval before execution.",
      },
    ],
    useCases: [
      {
        role: "E-commerce Operations",
        scenario:
          "Inventory agent monitors real-time stock levels across 3 warehouses.",
        outcome:
          "When any SKU crosses the reorder threshold, the agent automatically creates a PO in the ERP, notifies the supplier via email, updates the expected restock date in the product catalog, and logs the action  without human intervention.",
      },
      {
        role: "Finance Team",
        scenario:
          "Finance reconciliation agent runs continuously against Razorpay and SAP data.",
        outcome:
          "Discrepancies between settlements and invoices are flagged within seconds of appearing, a Jira ticket is created with full context, and the relevant accountant is notified  average detection time drops from 3 days to under 1 minute.",
      },
      {
        role: "Logistics Team",
        scenario:
          "NDR agent monitors all undelivered shipment events in real time.",
        outcome:
          "For each NDR event, the agent sends a personalized re-engagement message (WhatsApp first, SMS fallback), attempts address confirmation, and schedules a re-delivery attempt  increasing delivery success rate by 31% on average.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Continuous System Monitoring",
        detail:
          "Agents maintain persistent connections to your data sources and subscribe to event streams  monitoring for the specific conditions, thresholds, and anomalies they are configured to detect.",
      },
      {
        step: 2,
        title: "Trigger Detection",
        detail:
          "When a monitored condition is met  a stock level crosses a threshold, a payment fails, an SLA is breached  the agent registers a trigger event with full context.",
      },
      {
        step: 3,
        title: "Policy Evaluation",
        detail:
          "Before acting, the agent evaluates the trigger against your configured policy: is the condition severe enough to act autonomously, or does it require escalation? Is it within the agent's action scope?",
      },
      {
        step: 4,
        title: "Autonomous Action",
        detail:
          "If policy conditions are met, the agent executes the appropriate response  querying additional data if needed, constructing the action, validating it, and committing to target systems.",
      },
      {
        step: 5,
        title: "Log & Notify",
        detail:
          "Every action is logged to the audit trail and a summary notification is sent to the designated human owner  keeping your team informed without requiring their involvement.",
      },
    ],
    faq: [
      {
        question:
          "How do I configure what an autonomous agent is allowed to do?",
        answer:
          "Each agent type has a policy configuration panel where you define: action thresholds (e.g., auto-approve POs up to ₹50,000), escalation rules (e.g., notify manager for actions above threshold), blackout windows (e.g., no actions during system maintenance), and required approval workflows for specific action types.",
      },
      {
        question: "Can autonomous agents make mistakes and cause damage?",
        answer:
          "All autonomous actions pass through evidence validation before execution. You can configure 'sandbox mode' for any agent  where it identifies and logs what it would do, but requires human confirmation before committing. This is recommended during initial deployment.",
      },
      {
        question: "What agent types are currently available?",
        answer:
          "Inventory management, finance reconciliation, NDR management, campaign performance monitoring, customer care routing, SLA breach detection, employee IT provisioning, and lead follow-up agents are available today. New agent types are released monthly.",
      },
    ],
  },

  // 7) Prompt and Do Any Task
  {
    id: "prompt-and-do-any-task",
    title: "Prompt and Do Any Task",
    tagline: "One sentence. Every system. Work done.",
    description:
      "Type a natural language instruction and SuperManager AGI executes it across every connected application. The Controller Agent decomposes tasks into a DAG of subtasks, dispatches them to specialist agents in parallel using a work-stealing scheduler, and commits validated results. From creating tickets and sending updates to generating reports and reconciling settlements  one prompt, work done.",
    longDescription:
      "SuperManager AGI transforms the way enterprise work gets done. Instead of switching between a dozen applications, logging in, navigating menus, and executing repetitive steps  you simply describe what you need in plain English. The Controller Agent receives your instruction, understands intent using a context-aware LLM layer, and immediately decomposes it into a directed acyclic graph (DAG) of subtasks. Each node in the DAG is dispatched to a specialist agent best suited for that operation  whether it's writing to Jira, querying your ERP, sending a Slack message, or reconciling a payment ledger.\n\nThe work-stealing scheduler ensures no agent sits idle. Subtasks are distributed dynamically, so 10 agents can work simultaneously on different parts of a complex workflow. Before any result is committed back to your systems, a validation layer cross-checks outputs using evidence-majority voting  catching hallucinations and data errors before they propagate. The entire process, from your prompt to completed action, takes seconds  not hours of manual work.",
    image: "/Image/newimage/prompt-and-do-any-task.png",
    href: "/home/prompt-and-do-any-task",
   stats: [
  { value: "1 Prompt", label: "To trigger multi-system workflows" },
  { value: "6.7×", label: "Throughput vs. manual execution" },
  { value: "97%", label: "Task execution accuracy" },
  { value: "<65 ms", label: "End-to-end response time" },
],
    benefits: [
      {
        title: "No Tool-Switching Overhead",
        description:
          "Eliminate the cognitive and time cost of navigating between Slack, Jira, Salesforce, ERP, and spreadsheets. One prompt replaces dozens of clicks across disconnected tools.",
      },
      {
        title: "Parallel Execution by Default",
        description:
          "Unlike humans who work sequentially, the Controller Agent fans out tasks to specialist agents simultaneously  dramatically reducing end-to-end completion time.",
      },
      {
        title: "Validated Before Commit",
        description:
          "Every action goes through evidence-majority voting before being written to your systems. No dirty data, no partial updates, no silent failures.",
      },
      {
        title: "Full Audit Trail",
        description:
          "Every subtask, agent action, and system write is logged with timestamps, agent IDs, and input/output snapshots  giving you complete traceability.",
      },
      {
        title: "Context-Aware Interpretation",
        description:
          "The Controller Agent understands enterprise context  your org structure, roles, active projects, and tool configurations  so instructions don't need to be perfectly worded.",
      },
    ],
    useCases: [
      {
        role: "Head of Operations",
        scenario:
          "Prompt: 'Close out last week's open shipments, notify customers with delays, and create a summary report in Google Sheets.'",
        outcome:
          "Agents query the WMS, identify 14 delayed shipments, draft and send 14 personalized emails via SendGrid, and populate a formatted Google Sheet  in under 90 seconds.",
      },
      {
        role: "Finance Manager",
        scenario:
          "Prompt: 'Reconcile this week's Razorpay settlements against our ERP invoices and flag mismatches.'",
        outcome:
          "The finance agent pulls settlement data from Razorpay, matches against SAP invoices, identifies 3 discrepancies, and creates a Jira ticket for each  ready for review.",
      },
      {
        role: "Product Manager",
        scenario:
          "Prompt: 'Compile feedback from last sprint's Jira tickets, Slack threads, and Salesforce cases into a product brief.'",
        outcome:
          "Agents pull data from three sources simultaneously, deduplicate insights, and generate a structured brief in Notion  in the format your team expects.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Intent Parsing",
        detail:
          "Your natural language prompt is parsed by the Controller Agent using a fine-tuned enterprise LLM that understands your connected tools, org context, and active workflows.",
      },
      {
        step: 2,
        title: "DAG Construction",
        detail:
          "The task is decomposed into a directed acyclic graph of subtasks  each with defined inputs, outputs, dependencies, and the specialist agent responsible for execution.",
      },
      {
        step: 3,
        title: "Parallel Dispatch",
        detail:
          "The work-stealing scheduler distributes subtasks across available specialist agents. Independent tasks run simultaneously; dependent tasks queue correctly based on DAG edges.",
      },
      {
        step: 4,
        title: "Evidence Validation",
        detail:
          "Before any write operation, outputs are validated through majority voting across multiple evidence sources  ensuring accuracy and preventing data corruption.",
      },
      {
        step: 5,
        title: "Commit & Report",
        detail:
          "Validated results are committed to target systems. A structured completion report is returned to you showing every action taken, by which agent, and the outcome.",
      },
    ],
    faq: [
      {
        question: "What happens if one subtask fails mid-workflow?",
        answer:
          "The Controller Agent detects the failure, pauses downstream dependent subtasks, and routes the issue for human review or automatic retry  depending on your configured error policy. Completed subtasks are not rolled back unless a full transaction rollback is specified.",
      },
      {
        question: "Can I use this for workflows that require approvals?",
        answer:
          "Yes. Approval gates can be inserted at any node in the DAG. The agent pauses execution, notifies the designated approver, and resumes only after confirmation  with full audit logging of the approval event.",
      },
      {
        question: "How does the agent know which tools to use?",
        answer:
          "During onboarding, your connected applications are indexed with their capabilities, schemas, and access scopes. The Controller Agent uses this capability map to route each subtask to the right specialist agent automatically.",
      },
    ],
  },
];

export default features;

export const getFeatureById = (id: string) =>
  features.find((feature) => feature.id === id);
