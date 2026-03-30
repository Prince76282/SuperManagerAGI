import type { DropdownContentPage, IntelligenceSeed } from "./types";
import { makeIntelligencePage } from "./factories";
const intelligenceSeeds: IntelligenceSeed[] = [
  {
    slug: "ada-architecture",
    theme: "sky",
    category: "data-layer",
    title: "Agentic Data Architecture",
    summary:
      "Define the data foundation that lets agents work from live enterprise systems, structured evidence, and governed permissions instead of stale exports or brittle connector chains.",
    signals: [
      "How schemas, permissions, and provenance should be modeled for agent access",
      "Which systems need direct connectivity first to unlock trustworthy intelligence",
      "Where evidence packaging and validation reduce downstream execution risk",
    ],
    teams: [
      "Data platform",
      "Enterprise architecture",
      "AI platform leadership",
    ],
    action:
      "Use ADA to build a reliable bridge from source systems to decision and execution layers without sacrificing control.",
    relatedLinks: [
      {
        title: "Data & Intelligence Layer",
        href: "/data-intelligence",
        description:
          "See how ADA fits into the broader intelligence foundation.",
      },
      {
        title: "Direct Database Access",
        href: "/intelligence/direct-data",
        description: "Go deeper into live source-system access patterns.",
      },
      {
        title: "Enterprise AI Architecture",
        href: "/guides/enterprise-ai",
        description:
          "Connect the data layer to the rest of the enterprise AI stack.",
      },
    ],
  },
  {
    slug: "direct-data",
    theme: "sky",
    category: "data-layer",
    title: "Direct Database Access",
    summary:
      "Show how live read paths into the source of truth improve freshness, reduce latency, and make AI outputs more reliable than API-only or report-based approaches.",
    signals: [
      "When direct reads outperform replicated dashboards and delayed exports",
      "How to scope credentials, row access, and query boundaries safely",
      "Which operational decisions benefit most from millisecond-level data freshness",
    ],
    teams: ["Database teams", "Security teams", "Operations owners"],
    action:
      "Use direct data access where live state changes faster than reporting layers can keep up.",
    relatedLinks: [
      {
        title: "Agentic Data Architecture",
        href: "/intelligence/ada-architecture",
        description:
          "Understand the broader architecture around direct data access.",
      },
      {
        title: "Live Data Engine",
        href: "/intelligence/live-data",
        description:
          "See how direct reads support continuously refreshed intelligence.",
      },
      {
        title: "Data Governance",
        href: "/intelligence/governance",
        description: "Balance faster access with enterprise control policies.",
      },
    ],
  },
  {
    slug: "cross-system",
    theme: "sky",
    category: "data-layer",
    title: "Cross-System Intelligence",
    summary:
      "Combine signals from multiple systems into one evidence-backed view so the platform can reason across workflows that no single application fully represents.",
    signals: [
      "Where entity mapping across CRM, ERP, support, and operations creates new visibility",
      "How to reconcile conflicting records and timing differences between systems",
      "Which multi-system questions become answerable once data is unified operationally",
    ],
    teams: [
      "Integration teams",
      "Operations leadership",
      "Business systems owners",
    ],
    action:
      "Use cross-system intelligence to reduce handoff blindness and expose the real state of work flowing across departments.",
    relatedLinks: [
      {
        title: "Live Organization Intelligence",
        href: "/intelligence/live",
        description:
          "See the enterprise-wide operating view powered by connected systems.",
      },
      {
        title: "Direct Database Access",
        href: "/intelligence/direct-data",
        description:
          "Review the live access model that supports cross-system reasoning.",
      },
      {
        title: "Operational Intelligence Guide",
        href: "/guides/operational-intelligence",
        description:
          "Learn how cross-system signals improve operational decisions.",
      },
    ],
  },
  {
    slug: "live-data",
    theme: "sky",
    category: "data-layer",
    title: "Live Data Engine",
    summary:
      "Describe the runtime that keeps intelligence grounded in the latest operational state, event changes, and data refreshes instead of overnight reporting cycles.",
    signals: [
      "Which workflows require always-current context to avoid lagging decisions",
      "How streaming updates and direct queries work together in one engine",
      "Where freshness monitoring should trigger fallbacks or human review",
    ],
    teams: [
      "Platform engineering",
      "Operations teams",
      "Data reliability owners",
    ],
    action:
      "Deploy a live data engine where timing matters as much as accuracy for business decisions and autonomous execution.",
    relatedLinks: [
      {
        title: "Direct Database Access",
        href: "/intelligence/direct-data",
        description: "See the access path that powers live data retrieval.",
      },
      {
        title: "Operational Intelligence",
        href: "/intelligence/operations",
        description:
          "Review the domain where live operating data drives daily action.",
      },
      {
        title: "Risk Prediction",
        href: "/intelligence/risk",
        description:
          "Understand how live signals improve early-warning quality.",
      },
    ],
  },
  {
    slug: "governance",
    theme: "rose",
    category: "data-layer",
    title: "Data Governance",
    summary:
      "Frame the policies, roles, evidence trails, and oversight patterns that let intelligence scale without creating uncontrolled data exposure or opaque decision loops.",
    signals: [
      "How role-based visibility and action scope should differ by team",
      "Which audit, lineage, and approval records prove decisions are trustworthy",
      "Where governance must be embedded in the runtime instead of added later",
    ],
    teams: ["Governance teams", "Security leaders", "Platform owners"],
    action:
      "Treat governance as a built-in control plane so intelligence can expand safely across departments and workflows.",
    relatedLinks: [
      {
        title: "Security & Compliance",
        href: "/intelligence/security",
        description:
          "See how governance connects to enterprise security and policy enforcement.",
      },
      {
        title: "Reports & Dashboards",
        href: "/intelligence/reports",
        description:
          "Review how governed intelligence becomes visible and reviewable.",
      },
      {
        title: "Platform Workspace",
        href: "/platform/workspace",
        description:
          "Explore the workspace layer where humans supervise and intervene.",
      },
    ],
  },
  {
    slug: "security",
    theme: "rose",
    category: "data-layer",
    title: "Security & Compliance",
    summary:
      "Outline how AI-native platforms protect sensitive enterprise data with scoped access, evidence trails, approvals, and policy-aware execution controls.",
    signals: [
      "Where access boundaries and approval policies should sit in the stack",
      "How compliance teams can inspect what data and actions agents touched",
      "Which safeguards let autonomy grow without violating enterprise controls",
    ],
    teams: ["Security teams", "Compliance owners", "AI platform teams"],
    action:
      "Build security into both the data path and the execution path so AI can operate without becoming an unmanaged risk surface.",
    relatedLinks: [
      {
        title: "Data Governance",
        href: "/intelligence/governance",
        description: "See the broader policy and oversight model.",
      },
      {
        title: "Enterprise AI Architecture",
        href: "/guides/enterprise-ai",
        description:
          "Connect security controls to the overall platform design.",
      },
      {
        title: "Control & Workspace",
        href: "/platform/workspace",
        description:
          "Review how humans retain intervention authority in production.",
      },
    ],
  },
  {
    slug: "reports",
    theme: "emerald",
    category: "data-layer",
    title: "Reports & Dashboards",
    summary:
      "Turn governed intelligence into clear operating views, executive summaries, and role-specific dashboards that support action rather than passive observation.",
    signals: [
      "Which metrics need context and recommended actions instead of static charts",
      "How teams should tailor views for executives, managers, and frontline operators",
      "Where dashboard outputs should connect directly into workflow decisions",
    ],
    teams: [
      "Business intelligence",
      "Operations leadership",
      "Executive teams",
    ],
    action:
      "Use reports and dashboards as an operational interface to intelligence, not just a retrospective reporting layer.",
    relatedLinks: [
      {
        title: "Live Organization Intelligence",
        href: "/intelligence/live",
        description:
          "See the higher-level operating picture that feeds dashboards.",
      },
      {
        title: "Data Governance",
        href: "/intelligence/governance",
        description:
          "Ensure reported intelligence remains governed and explainable.",
      },
      {
        title: "Resource Hub",
        href: "/resource",
        description: "Browse related resources and insight content.",
      },
    ],
  },
  
  
  
  {
    slug: "live",
    theme: "emerald",
    category: "enterprise-intelligence",
    title: "Live Organization Intelligence",
    summary:
      "Create a real-time operating picture across teams, processes, and systems so leadership can see the organization as it is actually running right now.",
    signals: [
      "Which cross-functional signals reveal drift before leaders hear about it manually",
      "How to surface operational changes without overwhelming teams with noise",
      "Where organization-wide visibility should connect into escalation and action paths",
    ],
    teams: [
      "Executive leadership",
      "Operations excellence",
      "Transformation teams",
    ],
    action:
      "Use live organization intelligence to shrink the gap between what is happening on the ground and what leadership can respond to in time.",
    relatedLinks: [
      {
        title: "Operational Intelligence",
        href: "/intelligence/operations",
        description:
          "Go deeper into operations-specific intelligence patterns.",
      },
      {
        title: "Cross-System Intelligence",
        href: "/intelligence/cross-system",
        description: "See how data from multiple systems powers the live view.",
      },
      {
        title: "Platform Workspace",
        href: "/platform/workspace",
        description:
          "Review the control surface for supervising the operating picture.",
      },
    ],
  },



  
  {
    slug: "financial",
    theme: "amber",
    category: "enterprise-intelligence",
    title: "Financial Intelligence",
    summary:
      "Unify margin, cash, spend, receivables, payables, and forecast signals into one decision-ready view of financial performance and risk.",
    signals: [
      "Where margin compression or cash pressure is emerging before close",
      "How financial signals should connect to operational drivers and workflow execution",
      "Which exceptions deserve immediate review versus periodic monitoring",
    ],
    teams: ["Finance leadership", "FP&A teams", "Executive teams"],
    action:
      "Use financial intelligence to move from backward-looking close data to continuously informed capital and performance decisions.",
    relatedLinks: [
      {
        title: "Revenue Forecasting",
        href: "/intelligence/revenue",
        description:
          "Extend finance visibility forward with predictive revenue signals.",
      },
      {
        title: "Budget Optimization",
        href: "/intelligence/budget",
        description:
          "Translate financial intelligence into allocation decisions.",
      },
      {
        title: "Risk Prediction",
        href: "/intelligence/risk",
        description:
          "Identify finance-related operational risk before it escalates.",
      },
    ],
  },
  {
    slug: "operations",
    theme: "emerald",
    category: "enterprise-intelligence",
    title: "Operational Intelligence",
    summary:
      "Track throughput, bottlenecks, service levels, exceptions, and execution drift across the workflows that keep the business moving every day.",
    signals: [
      "Which leading indicators point to bottlenecks before service levels degrade",
      "How to correlate work-in-flight with staffing, backlog, and dependency risk",
      "Where operations teams need recommended actions instead of status visibility alone",
    ],
    teams: [
      "Operations leaders",
      "Service delivery teams",
      "Continuous improvement teams",
    ],
    action:
      "Use operational intelligence to create a tighter loop between live execution and corrective action across the business.",
    relatedLinks: [
      {
        title: "Operational Intelligence Guide",
        href: "/guides/operational-intelligence",
        description:
          "Read the conceptual guide behind live operations intelligence.",
      },
      {
        title: "Delivery Delay Prediction",
        href: "/intelligence/delivery-delay",
        description: "See how predictive signals prevent operational slippage.",
      },
      {
        title: "Scenario Simulation",
        href: "/intelligence/scenario",
        description:
          "Model operational trade-offs before changing process design.",
      },
    ],
  },
  {
    slug: "sales",
    theme: "indigo",
    category: "enterprise-intelligence",
    title: "Sales Intelligence",
    summary:
      "Connect pipeline health, activity quality, conversion risk, and revenue signals so commercial teams can act earlier and forecast more confidently.",
    signals: [
      "Which deal and pipeline patterns predict slippage or hidden upside",
      "How sales activity quality should be interpreted alongside stage progression",
      "Where leadership needs intervention signals instead of raw CRM reporting",
    ],
    teams: ["Sales leadership", "Revenue operations", "Executive teams"],
    action:
      "Use sales intelligence to prioritize pipeline intervention, improve forecast trust, and keep revenue execution moving.",
    relatedLinks: [
      {
        title: "Revenue Forecasting",
        href: "/intelligence/revenue",
        description:
          "Extend sales signals into a forward-looking revenue view.",
      },
      {
        title: "Customer Intelligence",
        href: "/intelligence/customer",
        description:
          "See how sales context connects to customer health and value.",
      },
      {
        title: "Impact Analysis",
        href: "/intelligence/impact",
        description: "Compare the downstream effects of commercial decisions.",
      },
    ],
  },
  {
    slug: "marketing",
    theme: "rose",
    category: "enterprise-intelligence",
    title: "Marketing Intelligence",
    summary:
      "Bring campaign performance, acquisition quality, funnel efficiency, and demand signals into one intelligence layer for faster growth decisions.",
    signals: [
      "Which channel and campaign signals predict efficient growth versus wasted spend",
      "How marketing data should connect to sales and customer outcomes",
      "Where operators need early warnings on funnel decay or channel fatigue",
    ],
    teams: ["Marketing leadership", "Growth teams", "Revenue operations"],
    action:
      "Use marketing intelligence to shift budget and effort toward the programs that are creating durable pipeline and customer value.",
    relatedLinks: [
      {
        title: "Sales Intelligence",
        href: "/intelligence/sales",
        description:
          "Connect upstream marketing signals to downstream revenue outcomes.",
      },
      {
        title: "Customer Intelligence",
        href: "/intelligence/customer",
        description:
          "See how growth signals tie into retention and experience.",
      },
      {
        title: "Budget Optimization",
        href: "/intelligence/budget",
        description:
          "Use intelligence to reallocate spend with more confidence.",
      },
    ],
  },
  {
    slug: "customer",
    theme: "sky",
    category: "enterprise-intelligence",
    title: "Customer Intelligence",
    summary:
      "Combine account history, support trends, engagement patterns, and commercial context to understand customer health and prioritize intervention.",
    signals: [
      "Which service and product signals predict churn, expansion, or escalation",
      "How customer context should be shared across success, support, and sales teams",
      "Where teams need a unified view of risk and opportunity at the account level",
    ],
    teams: ["Customer success", "Support leadership", "Account teams"],
    action:
      "Use customer intelligence to help teams respond earlier, personalize outreach, and protect long-term account value.",
    relatedLinks: [
      {
        title: "Customer Stories",
        href: "/customer-stories",
        description: "Review customer-facing examples and proof points.",
      },
      {
        title: "Sales Intelligence",
        href: "/intelligence/sales",
        description: "See how account health connects to commercial activity.",
      },
      {
        title: "Risk Prediction",
        href: "/intelligence/risk",
        description:
          "Use predictive signals to prioritize customer intervention.",
      },
    ],
  },
  {
    slug: "logistics",
    theme: "amber",
    category: "enterprise-intelligence",
    title: "Logistics Intelligence",
    summary:
      "Track fulfillment flow, shipping health, carrier performance, and inventory movement so logistics teams can prevent service failures before customers feel them.",
    signals: [
      "Which network and shipment signals reveal downstream delay risk earliest",
      "How fulfillment, inventory, and carrier data should be connected operationally",
      "Where teams need exception prioritization instead of static logistics reporting",
    ],
    teams: ["Logistics teams", "Supply chain leaders", "Operations leadership"],
    action:
      "Use logistics intelligence to tighten response loops across delivery, inventory, and service recovery workflows.",
    relatedLinks: [
      {
        title: "Delivery Delay Prediction",
        href: "/intelligence/delivery-delay",
        description:
          "Extend logistics visibility into early-warning delay signals.",
      },
      {
        title: "Inventory Risk Prediction",
        href: "/intelligence/inventory-risk",
        description: "Connect movement intelligence to inventory exposure.",
      },
      {
        title: "Resource Forecasting",
        href: "/intelligence/resource",
        description:
          "Plan logistics staffing and capacity against likely demand.",
      },
    ],
  },
  {
    slug: "risk",
    theme: "rose",
    category: "predictive-intelligence",
    title: "Risk Prediction",
    summary:
      "Identify the patterns that signal operational, financial, delivery, or customer risk early enough for teams to intervene before the issue becomes expensive.",
    signals: [
      "Which leading indicators consistently show risk before lagging metrics move",
      "How to rank risk by likely impact, confidence, and urgency",
      "Where preventive actions should trigger automatically versus route to humans",
    ],
    teams: ["Operations teams", "Risk and compliance", "Executive leadership"],
    action:
      "Use risk prediction to focus attention on the risks that matter most while there is still time to change the outcome.",
    relatedLinks: [
      {
        title: "Anomaly Detection",
        href: "/intelligence/anomaly",
        description:
          "See how unusual patterns surface before they become incidents.",
      },
      {
        title: "Delivery Delay Prediction",
        href: "/intelligence/delivery-delay",
        description: "Explore a logistics-specific predictive use case.",
      },
      {
        title: "Impact Analysis",
        href: "/intelligence/impact",
        description: "Model what the predicted risks could mean downstream.",
      },
    ],
  },
  {
    slug: "delivery-delay",
    theme: "amber",
    category: "predictive-intelligence",
    title: "Delivery Delay Prediction",
    summary:
      "Predict shipment, project, or service delivery slippage by combining workload, dependency, carrier, and execution signals before deadlines are missed.",
    signals: [
      "Which routing, dependency, or workload patterns correlate with late delivery",
      "How predicted delay should trigger operational recovery plans automatically",
      "Where teams need lead-time visibility to reassign work or reset expectations",
    ],
    teams: ["Delivery teams", "Customer operations", "Logistics leaders"],
    action:
      "Use delay prediction to recover timelines earlier and reduce the downstream cost of missed commitments.",
    relatedLinks: [
      {
        title: "Operational Intelligence",
        href: "/intelligence/operations",
        description: "Connect delay prediction to live execution monitoring.",
      },
      {
        title: "Logistics Intelligence",
        href: "/intelligence/logistics",
        description: "See the broader logistics view that feeds prediction.",
      },
      {
        title: "Scenario Simulation",
        href: "/intelligence/scenario",
        description:
          "Evaluate recovery options before changing the operating plan.",
      },
    ],
  },
  {
    slug: "inventory-risk",
    theme: "emerald",
    category: "predictive-intelligence",
    title: "Inventory Risk Prediction",
    summary:
      "Forecast stock risk by combining demand shifts, replenishment timing, supplier variance, and network movement so teams can prevent shortages and overstock.",
    signals: [
      "Which demand and supplier patterns indicate stock exposure earliest",
      "How to separate normal volatility from signals that need intervention",
      "Where predictive inventory alerts should influence replenishment decisions",
    ],
    teams: ["Supply chain teams", "Inventory planners", "Operations leaders"],
    action:
      "Use inventory risk prediction to protect service levels and working capital at the same time.",
    relatedLinks: [
      {
        title: "Logistics Intelligence",
        href: "/intelligence/logistics",
        description: "See the network view behind inventory movement risk.",
      },
      {
        title: "Resource Forecasting",
        href: "/intelligence/resource",
        description:
          "Plan labor and capacity alongside likely inventory needs.",
      },
      {
        title: "Budget Optimization",
        href: "/intelligence/budget",
        description: "Link inventory decisions to capital allocation choices.",
      },
    ],
  },
  {
    slug: "revenue",
    theme: "indigo",
    category: "predictive-intelligence",
    title: "Revenue Forecasting",
    summary:
      "Build forward-looking revenue views from pipeline, demand, delivery, and customer signals so leadership can plan with more confidence and less lag.",
    signals: [
      "Which commercial and operational factors are driving likely revenue variance",
      "How to distinguish structural demand change from temporary execution noise",
      "Where forecast outputs should influence budget, hiring, and intervention decisions",
    ],
    teams: ["Finance teams", "Revenue leadership", "Executive teams"],
    action:
      "Use revenue forecasting to make planning decisions from an earlier and more connected view of business performance.",
    relatedLinks: [
      {
        title: "Financial Intelligence",
        href: "/intelligence/financial",
        description: "Connect forecast signals to broader finance visibility.",
      },
      {
        title: "Sales Intelligence",
        href: "/intelligence/sales",
        description: "See the upstream pipeline patterns that shape revenue.",
      },
      {
        title: "Strategic Planning",
        href: "/intelligence/strategy",
        description: "Apply forecasts to broader strategic planning decisions.",
      },
    ],
  },
  {
    slug: "resource",
    theme: "sky",
    category: "predictive-intelligence",
    title: "Resource Forecasting",
    summary:
      "Predict labor, tool, and operating capacity needs using live workload and demand signals so teams can allocate resources before bottlenecks appear.",
    signals: [
      "Which demand and throughput changes should trigger capacity planning",
      "How to model staffing or infrastructure needs from real operating signals",
      "Where forecasts should flow into scheduling, procurement, or hiring decisions",
    ],
    teams: ["Resource planners", "Operations leaders", "Workforce managers"],
    action:
      "Use resource forecasting to reduce both over-allocation and last-minute capacity gaps across the organization.",
    relatedLinks: [
      {
        title: "Resource Allocation",
        href: "/intelligence/resource-allocation",
        description: "Connect the forecast to real allocation decisions.",
      },
      {
        title: "Inventory Risk Prediction",
        href: "/intelligence/inventory-risk",
        description: "See how supply constraints affect resource planning.",
      },
      {
        title: "AI Workforce Guides",
        href: "/ai-workforce-guides",
        description: "Review planning patterns for AI-augmented teams.",
      },
    ],
  },
  {
    slug: "anomaly",
    theme: "rose",
    category: "predictive-intelligence",
    title: "Anomaly Detection",
    summary:
      "Detect unusual patterns across transactions, workflows, service levels, and operations so teams can inspect issues before they cascade into larger failures.",
    signals: [
      "Which deviations are truly unusual versus normal business seasonality",
      "How to rank anomalies by potential impact, not just statistical rarity",
      "Where anomaly signals should trigger automated investigation or escalation",
    ],
    teams: ["Operations analysts", "Risk teams", "Service leaders"],
    action:
      "Use anomaly detection to surface the right outliers early and reduce the time it takes teams to understand what changed.",
    relatedLinks: [
      {
        title: "Risk Prediction",
        href: "/intelligence/risk",
        description: "See how anomalies become early-warning risk indicators.",
      },
      {
        title: "Operational Intelligence",
        href: "/intelligence/operations",
        description: "Connect anomalies to ongoing operating visibility.",
      },
      {
        title: "Reports & Dashboards",
        href: "/intelligence/reports",
        description:
          "Make unusual patterns visible to the right decision-makers.",
      },
    ],
  },
  {
    slug: "scenario",
    theme: "amber",
    category: "decision-intelligence",
    title: "Scenario Simulation",
    summary:
      "Compare possible operating or strategic moves before committing by modeling outcomes across cost, time, capacity, risk, and service impact.",
    signals: [
      "Which assumptions matter most to likely outcomes under different scenarios",
      "How to compare recovery plans, resource shifts, or budget changes quickly",
      "Where simulated outcomes should influence approvals and execution priorities",
    ],
    teams: ["Strategy teams", "Operations leaders", "Finance leadership"],
    action:
      "Use scenario simulation to test trade-offs quickly and choose the path most likely to improve business outcomes.",
    relatedLinks: [
      {
        title: "Impact Analysis",
        href: "/intelligence/impact",
        description: "Quantify what scenario choices mean downstream.",
      },
      {
        title: "Strategic Planning",
        href: "/intelligence/strategy",
        description: "Apply simulation to broader planning cycles and choices.",
      },
      {
        title: "Resource Allocation",
        href: "/intelligence/resource-allocation",
        description:
          "Turn modeled options into concrete staffing and capacity moves.",
      },
    ],
  },
  {
    slug: "impact",
    theme: "amber",
    category: "decision-intelligence",
    title: "Impact Analysis",
    summary:
      "Measure how changes in cost, timing, staffing, or policy will affect adjacent workflows, teams, and outcomes before a decision is locked in.",
    signals: [
      "Which upstream changes create the biggest downstream effects",
      "How to expose trade-offs across multiple teams and business objectives",
      "Where teams need quantified impact views before approving execution changes",
    ],
    teams: ["Program leaders", "Finance teams", "Executive sponsors"],
    action:
      "Use impact analysis to move from intuition-driven choices to clearer cross-functional trade-off decisions.",
    relatedLinks: [
      {
        title: "Scenario Simulation",
        href: "/intelligence/scenario",
        description: "Model alternative futures before comparing their impact.",
      },
      {
        title: "Budget Optimization",
        href: "/intelligence/budget",
        description:
          "See how impact analysis shapes capital allocation choices.",
      },
      {
        title: "Portfolio Intelligence",
        href: "/intelligence/portfolio",
        description:
          "Compare impact across multiple investments or initiatives.",
      },
    ],
  },
  {
    slug: "resource-allocation",
    theme: "emerald",
    category: "decision-intelligence",
    title: "Resource Allocation",
    summary:
      "Help teams place the right people, budget, and operating capacity against the highest-value work based on live demand, constraints, and projected outcomes.",
    signals: [
      "Which work should receive capacity first when resources are constrained",
      "How to rebalance people, budget, and tooling as priorities shift",
      "Where allocation choices should be informed by both current load and forward demand",
    ],
    teams: ["Operations leaders", "Workforce managers", "Finance partners"],
    action:
      "Use resource allocation intelligence to reduce idle capacity, avoid overload, and keep strategic work moving.",
    relatedLinks: [
      {
        title: "Resource Forecasting",
        href: "/intelligence/resource",
        description:
          "See the predictive view that informs allocation decisions.",
      },
      {
        title: "AI Workforce Guides",
        href: "/ai-workforce-guides",
        description:
          "Review operating models for human and AI resource design.",
      },
      {
        title: "Strategic Planning",
        href: "/intelligence/strategy",
        description:
          "Connect allocation choices to longer-range planning priorities.",
      },
    ],
  },
  {
    slug: "budget",
    theme: "amber",
    category: "decision-intelligence",
    title: "Budget Optimization",
    summary:
      "Improve how budget is distributed by connecting financial performance, growth opportunities, operating constraints, and forecasted outcomes in one planning model.",
    signals: [
      "Which programs or teams create the highest likely return from additional budget",
      "How to compare efficiency, risk, and strategic value across competing asks",
      "Where ongoing performance should trigger budget reallocation during the year",
    ],
    teams: ["Finance leadership", "Department heads", "Executive teams"],
    action:
      "Use budget optimization to move capital toward the work most likely to improve performance, resilience, and strategic momentum.",
    relatedLinks: [
      {
        title: "ROI Calculator",
        href: "/roi-calculator",
        description:
          "Estimate the return profile behind platform and workforce investments.",
      },
      {
        title: "Financial Intelligence",
        href: "/intelligence/financial",
        description:
          "Use live financial signals as the input layer for budget choices.",
      },
      {
        title: "Impact Analysis",
        href: "/intelligence/impact",
        description: "Quantify downstream effects before changing funding.",
      },
    ],
  },
  {
    slug: "strategy",
    theme: "indigo",
    category: "decision-intelligence",
    title: "Strategic Planning",
    summary:
      "Support planning cycles with live intelligence, scenario comparison, and execution-aware analysis so strategy is grounded in operational reality.",
    signals: [
      "Which shifts in demand, capacity, or performance should change strategic assumptions",
      "How to connect long-range planning with near-term operating constraints",
      "Where strategic choices need scenario and impact support before execution begins",
    ],
    teams: ["Strategy teams", "Executive leadership", "Transformation leaders"],
    action:
      "Use strategic planning intelligence to keep long-range choices connected to what the business can actually deliver.",
    relatedLinks: [
      {
        title: "Scenario Simulation",
        href: "/intelligence/scenario",
        description: "Model strategic alternatives before committing.",
      },
      {
        title: "Portfolio Intelligence",
        href: "/intelligence/portfolio",
        description:
          "Evaluate the overall mix of bets, initiatives, and investments.",
      },
      {
        title: "Implementation Guide",
        href: "/implementation-guide",
        description: "Translate strategy into a staged deployment plan.",
      },
    ],
  },
  {
    slug: "portfolio",
    theme: "indigo",
    category: "decision-intelligence",
    title: "Portfolio Intelligence",
    summary:
      "Evaluate initiatives, investments, and programs as one portfolio so leaders can see concentration risk, trade-offs, and expected return across the full slate of work.",
    signals: [
      "Which initiatives are consuming capital without enough likely return",
      "How portfolio balance shifts when priorities, forecasts, or constraints change",
      "Where leaders need a portfolio view rather than single-program reporting",
    ],
    teams: ["PMO and strategy", "Finance leadership", "Executive sponsors"],
    action:
      "Use portfolio intelligence to rebalance investments with clearer visibility into strategic value, delivery confidence, and downside risk.",
    relatedLinks: [
      {
        title: "Strategic Planning",
        href: "/intelligence/strategy",
        description:
          "See how portfolio choices connect to strategic priorities.",
      },
      {
        title: "Impact Analysis",
        href: "/intelligence/impact",
        description:
          "Quantify the consequences of shifting portfolio decisions.",
      },
      {
        title: "Case Studies",
        href: "/case-studies",
        description:
          "Review examples of how intelligent operating models improve outcomes.",
      },
    ],
  },
];
export const intelligencePages = Object.fromEntries(
  intelligenceSeeds.map((seed) => [seed.slug, makeIntelligencePage(seed)]),
) as Record<string, DropdownContentPage>;
export const intelligencePageSlugs = Object.keys(intelligencePages);
export function getIntelligencePage(slug: string) {
  return intelligencePages[slug];
}
