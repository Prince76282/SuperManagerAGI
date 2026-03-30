import type { DropdownContentPage, StandalonePageLayout } from "./types";
export const standalonePages: Record<string, DropdownContentPage> = {
  "data-intelligence": {
    theme: "sky",
    eyebrow: "Data & Intelligence Layer",
    title: "Data & Intelligence Layer",
    description:
      "Build the enterprise data foundation that gives agents live context, trustworthy evidence, and cross-system awareness for real-time decisions and execution.",
    intro:
      "This page frames how SuperManager AGI turns fragmented operational data into one intelligence layer, connecting direct access, governance, predictive signals, and decision support in a unified architecture.",
    highlights: [
      "See how live source-system access improves the quality and speed of AI-driven decisions.",
      "Understand how intelligence is grounded in evidence instead of stale exports or disconnected dashboards.",
      "Explore the path from data access to predictive insight and decision-ready execution.",
    ],
    stats: [
      { label: "signal freshness", value: "Real-time" },
      { label: "system coverage", value: "Cross-functional" },
      { label: "decision mode", value: "Evidence-led" },
      { label: "governance", value: "Built-in" },
    ],
    featuredCardsTitle: "Core areas of the intelligence layer",
    featuredCards: [
      {
        kicker: "Architecture",
        title: "Agentic Data Architecture",
        href: "/intelligence/ada-architecture",
        description:
          "Understand the foundation that lets agents query and reason from live enterprise systems.",
      },
      {
        kicker: "Visibility",
        title: "Live Organization Intelligence",
        href: "/intelligence/live",
        description:
          "See how connected signals become a real-time operating picture across the company.",
      },
      {
        kicker: "Prediction",
        title: "Risk Prediction",
        href: "/intelligence/risk",
        description:
          "Explore how the layer shifts from visibility to early warning and proactive action.",
      },
    ],
    pillars: [
      {
        title: "Direct access to the source of truth",
        description:
          "The data layer should read the business where it actually runs: databases, systems of record, and workflow tools. That creates better freshness, lower latency, and stronger traceability than retrospective reporting alone.",
      },
      {
        title: "Cross-system intelligence instead of siloed metrics",
        description:
          "Most operational decisions span multiple tools. This layer combines those signals so leaders and operators can see how activity in one system affects outcomes somewhere else.",
      },
      {
        title: "A bridge from visibility to action",
        description:
          "The goal is not just answering questions. It is turning evidence-backed intelligence into recommendations, approvals, and execution across the workflows that matter.",
      },
      {
        title: "Governance that scales with adoption",
        description:
          "As the intelligence layer expands, it needs role-based access, auditability, policy enforcement, and human override so trust keeps pace with capability.",
      },
    ],
    useCases: [
      {
        role: "Operations leadership",
        scenario: "Build one operational picture across multiple systems",
        outcome:
          "Leaders can see current throughput, bottlenecks, risk, and downstream impact without waiting for manual status collection or stitched spreadsheets.",
      },
      {
        role: "Data and platform teams",
        scenario: "Create a governed runtime for AI-native decisions",
        outcome:
          "Teams can expose the right source systems to AI safely, with evidence, lineage, and access controls already embedded in the design.",
      },
      {
        role: "Business functions",
        scenario:
          "Move from descriptive metrics to decision-ready intelligence",
        outcome:
          "Finance, supply chain, revenue, and service teams can use the same foundation to monitor, predict, and act from live context instead of static reports.",
      },
    ],
    workflow: [
      {
        title: "Connect live systems",
        detail:
          "Start with the data sources that drive the most important workflows, including systems of record, warehouses, and core operational tools.",
      },
      {
        title: "Normalize context and permissions",
        detail:
          "Map schemas, access boundaries, and evidence trails so intelligence can be both useful and auditable from the first deployment.",
      },
      {
        title: "Surface decisions and predictions",
        detail:
          "Turn the connected data into operating views, alerts, predictive scores, and scenario support that teams can use directly inside their work.",
      },
      {
        title: "Close the loop into execution",
        detail:
          "Feed intelligence into approvals, autonomous workflows, and human interventions so the layer continuously improves the quality and speed of execution.",
      },
    ],
    faq: [
      {
        question: "Why make data and intelligence one layer?",
        answer:
          "Because intelligence quality is limited by the way data is accessed, governed, and refreshed. Treating them together creates a cleaner path from source systems to action.",
      },
      {
        question: "Is this only useful for technical teams?",
        answer:
          "No. Technical teams build the foundation, but the value shows up in business decisions across finance, operations, logistics, sales, and leadership.",
      },
      {
        question: "What should teams launch first?",
        answer:
          "Start with a narrow use case where freshness and cross-system context matter, prove governance and value, and then expand into adjacent workflows and functions.",
      },
    ],
    relatedLinks: [
      {
        title: "Intelligence Platform",
        href: "/intelligence",
        description:
          "Explore the broader intelligence surface built on top of this data layer.",
      },
      {
        title: "Direct Database Access",
        href: "/intelligence/direct-data",
        description:
          "Review the live access model that improves freshness and trust.",
      },
      {
        title: "Implementation Guide",
        href: "/implementation-guide",
        description: "Translate the layer into a phased rollout plan.",
      },
    ],
    ctaTitle: "Design the intelligence layer before scaling AI execution",
    ctaDescription:
      "The strongest AI operating models start with grounded data, clear permissions, and a direct path from intelligence to action.",
    primaryCta: {
      label: "Talk to an AI expert",
      href: "/get-in-touch",
    },
    secondaryCta: {
      label: "Explore architecture guides",
      href: "/architecture-guides",
    },
  },
  "case-studies": {
    theme: "emerald",
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
      { label: "focus", value: "Outcome-led" },
      { label: "scope", value: "Cross-functional" },
      { label: "readiness", value: "Pilot to scale" },
      { label: "lens", value: "Operator-friendly" },
    ],
    featuredCardsTitle: "Study by operating goal",
    featuredCards: [
      {
        kicker: "Execution",
        title: "Faster workflow completion",
        href: "/guides/autonomous-execution",
        description:
          "See how teams reduce handoff delay and manual coordination in multi-system work.",
      },
      {
        kicker: "Intelligence",
        title: "Sharper operating visibility",
        href: "/intelligence/live",
        description:
          "Review how connected intelligence improves response speed and decision quality.",
      },
      {
        kicker: "Adoption",
        title: "Safer rollout paths",
        href: "/implementation-guide",
        description:
          "Understand the deployment patterns that make early wins repeatable and controlled.",
      },
    ],
    pillars: [
      {
        title: "Start with one measurable bottleneck",
        description:
          "Strong case studies begin with a problem that teams already feel, such as delay recovery, reporting lag, reconciliation effort, or approval friction.",
      },
      {
        title: "Tie outcomes to real workflows",
        description:
          "The best proof points show exactly which systems, handoffs, and decisions changed so teams can judge whether the pattern applies to their environment.",
      },
      {
        title: "Show the control model, not just the win",
        description:
          "A credible case study explains the human oversight, evidence, and governance that made the deployment safe enough to trust in production.",
      },
      {
        title: "Use stories to inform rollout sequencing",
        description:
          "Case studies are most useful when they help teams pick where to start and what success should look like in the first 30, 60, and 90 days.",
      },
    ],
    useCases: [
      {
        role: "Operations teams",
        scenario: "Reduce manual coordination across systems",
        outcome:
          "Teams can identify where autonomous execution removes repetitive orchestration work and shortens the distance from issue detection to action.",
      },
      {
        role: "Finance and leadership",
        scenario: "Move from retrospective reporting to live operating insight",
        outcome:
          "Stakeholders can see how intelligent visibility improves timing, prioritization, and resource decisions before month-end or weekly reviews.",
      },
      {
        role: "Transformation sponsors",
        scenario: "Choose a realistic first deployment",
        outcome:
          "Case-study patterns help sponsors pick a manageable first workflow with clear controls and measurable business upside.",
      },
    ],
    workflow: [
      {
        title: "Find the current bottleneck",
        detail:
          "Choose a process where response time, quality, or coordination is clearly limited by manual work or fragmented visibility.",
      },
      {
        title: "Map the changed operating loop",
        detail:
          "Document which signals, workflows, approvals, and actions will change when intelligence and execution are introduced.",
      },
      {
        title: "Measure the shift",
        detail:
          "Track cycle time, intervention speed, decision quality, or throughput changes so the value story is tied to operations, not just technology activity.",
      },
      {
        title: "Use the pattern again",
        detail:
          "Once the first story is proven, repeat the operating pattern on adjacent workflows with similar data and coordination dynamics.",
      },
    ],
    faq: [
      {
        question: "What makes a case study credible here?",
        answer:
          "The strongest stories connect a business problem, the AI operating pattern that changed it, the controls applied, and the measured outcome after deployment.",
      },
      {
        question: "Are these only for large enterprise transformations?",
        answer:
          "No. Many of the most useful case-study patterns begin with one workflow, one team, or one domain and then scale once trust is established.",
      },
      {
        question: "How should teams use this page?",
        answer:
          "Use it to identify the closest analog to your own bottleneck, then move into the implementation and architecture pages to design the first rollout.",
      },
    ],
    relatedLinks: [
      {
        title: "Customer Stories",
        href: "/customer-stories",
        description: "Browse existing customer-focused stories and references.",
      },
      {
        title: "Research Reports",
        href: "/research-reports",
        description:
          "Add deeper research context alongside practical outcome examples.",
      },
      {
        title: "Implementation Guide",
        href: "/implementation-guide",
        description: "Move from examples to a phased deployment plan.",
      },
    ],
    ctaTitle: "Turn proof points into a rollout decision",
    ctaDescription:
      "Use the study patterns to pick the first workflow, define the operating changes, and move into a pilot with clear controls and measurable outcomes.",
    primaryCta: {
      label: "Book a working session",
      href: "/get-in-touch",
    },
    secondaryCta: {
      label: "Browse customer stories",
      href: "/customer-stories",
    },
  },

  
  
 


  careers: {
    theme: "indigo",
    eyebrow: "Careers",
    title: "Careers",
    description:
      "Join a team building AI-native operating systems, intelligent execution layers, and the next generation of enterprise management.",
    intro:
      "This page positions careers around the mission and kinds of problems the company is solving. It is designed to help candidates understand both the work and the style of team they would be joining.",
    highlights: [
      "See the kinds of platform, product, design, and go-to-market problems candidates would work on.",
      "Understand how AI-native product thinking changes the nature of operating and building inside the company.",
      "Connect mission, team shape, and growth paths without relying on generic careers copy.",
    ],
    stats: [
      { label: "work style", value: "AI-native" },
      { label: "team focus", value: "Builder-led" },
      { label: "problem space", value: "Enterprise-scale" },
      { label: "growth path", value: "High-ownership" },
    ],
    featuredCardsTitle: "Ways to contribute",
    featuredCards: [
      {
        kicker: "Platform",
        title: "Data, orchestration, and runtime engineering",
        href: "/guides/enterprise-ai",
        description:
          "Build the architecture that makes intelligent execution trustworthy at enterprise scale.",
      },
      {
        kicker: "Product",
        title: "Workspace, intelligence, and operator experience",
        href: "/platform/workspace",
        description:
          "Shape how humans work with powerful autonomous systems every day.",
      },
      {
        kicker: "Go-to-market",
        title: "Customer education and category building",
        href: "/case-studies",
        description:
          "Help enterprises understand and adopt a new operating model for work.",
      },
    ],
    pillars: [
      {
        title: "Work on category-defining problems",
        description:
          "Candidates are not joining a feature team around a narrow product surface. They are helping define how AI-native enterprises will actually run.",
      },
      {
        title: "Own outcomes, not just tasks",
        description:
          "The best team members here will operate with wide context, move across functions, and care deeply about whether the product changes real customer behavior.",
      },
      {
        title: "Build with technical depth and product judgment",
        description:
          "The work spans data systems, orchestration, UX, controls, and market education, so candidates should expect both engineering rigor and product thinking.",
      },
      {
        title: "Grow alongside a new operating model",
        description:
          "This is a strong fit for people who want to shape the future of enterprise work, not just ship incremental software into an already-set category.",
      },
    ],
    useCases: [
      {
        role: "Candidates",
        scenario: "Understand what kind of work they would actually be doing",
        outcome:
          "People can assess whether they are excited by AI-native platform building, operating-system thinking, and high-context product work.",
      },
      {
        role: "Hiring leaders",
        scenario: "Communicate the mission and bar more clearly",
        outcome:
          "Teams can attract candidates who are aligned with the complexity, ownership model, and pace of the work rather than generic job-seekers.",
      },
      {
        role: "The company brand",
        scenario: "Present careers as part of the broader platform story",
        outcome:
          "Careers becomes another place where the company explains what it is building and why the work matters at this moment in the market.",
      },
    ],
    workflow: [
      {
        title: "Frame the mission",
        detail:
          "Lead with the company ambition and the category shift the team is working to define so candidates understand the context of the role.",
      },
      {
        title: "Show the problem spaces",
        detail:
          "Highlight the technical, product, and market-building challenges candidates would actually help solve instead of listing only abstract responsibilities.",
      },
      {
        title: "Clarify the ownership model",
        detail:
          "Explain that the company values high agency, collaboration across disciplines, and a bias toward building things that prove real business value.",
      },
      {
        title: "Route interested candidates forward",
        detail:
          "Use the page as a place to move people toward company background, leadership context, and direct contact or recruiting follow-up.",
      },
    ],
    faq: [
      {
        question: "What kind of candidate fits best?",
        answer:
          "People who are energized by hard product and system problems, comfortable with ambiguity, and excited to help define a new operating model for enterprises.",
      },
      {
        question: "Why connect careers to product pages?",
        answer:
          "Because the product itself explains the nature of the work. Candidates who understand the platform vision will self-select more accurately into the right roles.",
      },
      {
        question: "How should this page evolve later?",
        answer:
          "As hiring grows, the page can expand into role listings, team stories, and recruiting flows. For now it establishes the mission and the shape of the work well.",
      },
    ],
    relatedLinks: [
      {
        title: "About Us",
        href: "/aboutus",
        description: "See the company mission, history, and broader narrative.",
      },
      {
        title: "Leadership",
        href: "/leadership",
        description: "Meet the leadership team shaping the company direction.",
      },
      {
        title: "Contact Us",
        href: "/contactus",
        description:
          "Open a conversation with the team about roles and opportunities.",
      },
    ],
    ctaTitle:
      "Join the team building enterprise AI from the operating model up",
    ctaDescription:
      "The most exciting part of this work is not just the technology. It is defining how companies will actually work when AI becomes part of the operating layer.",
    primaryCta: {
      label: "Contact the team",
      href: "/contactus",
    },
    secondaryCta: {
      label: "Learn about the company",
      href: "/aboutus",
    },
  },
  intelligence: {
    theme: "emerald",
    eyebrow: "Intelligence Platform",
    title: "Intelligence Platform",
    description:
      "Explore the unified intelligence layer that transforms live enterprise data into domain visibility, predictive signals, and decision-ready recommendations.",
    intro:
      "This page sits above the individual intelligence routes and gives visitors a clear overview of how the platform connects data access, operating insight, prediction, and decision support into one system.",
    highlights: [
      "Understand the difference between raw reporting and intelligence that can guide execution.",
      "See how domain intelligence, predictive intelligence, and decision intelligence connect together.",
      "Use the page as the main jump-off point for the full intelligence route tree in navigation.",
    ],
    stats: [
      { label: "coverage", value: "Enterprise-wide" },
      { label: "decision speed", value: "Real-time" },
      { label: "signal depth", value: "Predictive" },
      { label: "follow-through", value: "Action-linked" },
    ],
    featuredCardsTitle: "Explore the intelligence stack",
    featuredCards: [
      {
        kicker: "Data layer",
        title: "Agentic Data Architecture",
        href: "/intelligence/ada-architecture",
        description:
          "See the governed data foundation behind trustworthy intelligence.",
      },
      {
        kicker: "Enterprise view",
        title: "Live Organization Intelligence",
        href: "/intelligence/live",
        description:
          "Review the real-time operating picture across functions and systems.",
      },
      {
        kicker: "Decisions",
        title: "Scenario Simulation",
        href: "/intelligence/scenario",
        description:
          "Explore how the intelligence layer supports choices, not just visibility.",
      },
    ],
    pillars: [
      {
        title: "One layer for data, prediction, and decision support",
        description:
          "The intelligence platform is more than a reporting surface. It is the connective tissue between live enterprise context, forward-looking signals, and recommended action.",
      },
      {
        title: "Domain-specific visibility where it matters",
        description:
          "Different teams need different views. The platform supports financial, operational, commercial, customer, and logistics intelligence while keeping a common foundation underneath.",
      },
      {
        title: "Prediction should reduce reaction time",
        description:
          "Predictive intelligence matters because it lets teams intervene before cost, delay, or service impact fully shows up in lagging metrics.",
      },
      {
        title: "Decision support closes the loop",
        description:
          "The most powerful intelligence systems help teams compare trade-offs, choose a path, and push the chosen action into execution with governance intact.",
      },
    ],
    useCases: [
      {
        role: "Leadership teams",
        scenario: "Build a live operating picture across the business",
        outcome:
          "Executives can see what is changing now, where the highest-priority friction is emerging, and which areas need intervention first.",
      },
      {
        role: "Functional teams",
        scenario: "Use domain-specific intelligence in daily work",
        outcome:
          "Finance, operations, revenue, customer, and logistics teams can make faster decisions from the same trusted foundation without living inside disconnected reports.",
      },
      {
        role: "Transformation programs",
        scenario:
          "Expand from visibility into predictive and decision intelligence",
        outcome:
          "Teams can layer in early-warning models and scenario support after the live intelligence foundation is already delivering value.",
      },
    ],
    workflow: [
      {
        title: "Ground intelligence in live data",
        detail:
          "Begin with direct, governed access to the systems that reflect the actual state of the business right now.",
      },
      {
        title: "Create domain-specific operating views",
        detail:
          "Turn the connected data into the signals and visibility patterns each function needs to act confidently in day-to-day work.",
      },
      {
        title: "Add predictive and decision layers",
        detail:
          "Use the same foundation to detect early risk, compare options, and improve planning quality across the business.",
      },
      {
        title: "Link intelligence into execution",
        detail:
          "Feed the chosen recommendations into approvals, workflows, and operator actions so intelligence compounds into better business outcomes.",
      },
    ],
    faq: [
      {
        question: "Why make intelligence a primary navigation category?",
        answer:
          "Because many visitors need to understand the decision and visibility layer before they are ready to think about autonomous execution or platform architecture.",
      },
      {
        question:
          "How is this different from the Data & Intelligence Layer page?",
        answer:
          "The data and intelligence page focuses on the foundation. This page focuses on the full intelligence surface that sits on top of that foundation.",
      },
      {
        question: "Where should a new visitor go next?",
        answer:
          "Start with the overview here, then choose the branch that matches your interest: data layer, enterprise visibility, predictive signals, or decision intelligence.",
      },
    ],
    relatedLinks: [
      {
        title: "Data & Intelligence Layer",
        href: "/data-intelligence",
        description:
          "See the foundation that powers the full intelligence platform.",
      },
      {
        title: "Decision Intelligence Guide",
        href: "/guides/decision-intelligence",
        description:
          "Understand the concept behind scenario-based decision support.",
      },
      {
        title: "Operational Intelligence Guide",
        href: "/guides/operational-intelligence",
        description:
          "Review how live operating signals become actionable intelligence.",
      },
    ],
    ctaTitle:
      "Explore the intelligence layer that sits behind AI-native operations",
    ctaDescription:
      "Use the intelligence routes to see how the platform moves from live data to operating visibility, predictive insight, and decision support.",
    primaryCta: {
      label: "Talk to an AI expert",
      href: "/get-in-touch",
    },
    secondaryCta: {
      label: "Explore data layer",
      href: "/data-intelligence",
    },
  },
};
export const standalonePageSlugs = Object.keys(standalonePages);
export function getStandalonePage(slug: string) {
  return standalonePages[slug];
}
export function getStandalonePageLayout(slug: string): StandalonePageLayout {
  switch (slug) {
    case "data-intelligence":
      return "data-hub";
    case "case-studies":
      return "case-studies";
    case "architecture-guides":
      return "blueprint";
    case "ai-workforce-guides":
      return "workforce";
    case "roi-calculator":
      return "roi";
    case "implementation-guide":
      return "roadmap";
    case "press":
      return "media";
    case "careers":
      return "careers";
    default:
      return "intelligence-hub";
  }
}
