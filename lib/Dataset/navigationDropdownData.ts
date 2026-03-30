export type DropdownLinkItem = {
  label: string;
  href: string;
};

export type DropdownCategory = {
  title: string;
  items: string[];
};

export type DropdownSection = {
  title: string;
  description: string;
  href: string;
  categories: DropdownCategory[];
};

export type IntelligenceCapabilityIcon =
  | "users"
  | "brain"
  | "zap"
  | "shield"
  | "code"
  | "link";

export type IntelligenceCapability = {
  icon: IntelligenceCapabilityIcon;
  text: string;
};

export type IntelligenceSection = {
  title: string;
  items: DropdownLinkItem[];
};

export const agiManagersDropdownData = {
  sections: [
    {
    title: "Platform Overview",
    description: "A unified AI-native platform that executes work, makes decisions, and operates across your entire organization with full autonomy and control.",
    href: "/platform",
    categories: [
      {
        title: "CORE PLATFORM",
        items: [
          "Autonomous Execution Engine",
          "Enterprise Data Intelligence (ADA)",
          "AI Agent Workforce",
          "Integrations Layer",
          "Workspace & Control",
          "Live Organization Intelligence",
          "Security & Infrastructure",
        ],
      },
      {
        title: "ARCHITECTURE",
        items: [
          "Platform Architecture",
          "Execution Layer",
          "Data & Intelligence Layer",
          "Control & Workspace",
        ],
      },
    ],
  },
    {
      title: "AI Intelligence Layer for Leadership",
      description:
        "A unified AI-powered intelligence layer designed for leadership teams to see, decide, and act in real time. Go beyond dashboards  operate your entire organization with live, decision-ready intelligence.",
      href: "/leadership",
      categories: [
        {
          title: "FOUNDATION: AI DATA CORE",
          items: [
            "ADA: Direct Data Access Engine",
            "Unified Enterprise Data Graph",
            "Cross-System Intelligence Layer",
            "Real-Time Data Synchronization",
          ],
        },
        
        {
          title: "INTELLIGENCE: DECISION ENGINE",
          items: [
            "Predictive Intelligence & Forecasting",
            "Risk Detection & Early Warning Signals",
            "Live Operational Intelligence",
            "Decision Intelligence for Leadership",
            "Anomaly Detection Across Systems",
          ],
        },
      ],
    },

      {
    title: "AI Execution & Automation Engine",
    description: "Transform intent into action instantly. The AI execution layer enables organizations to move from prompts to real-world outcomes by orchestrating agents, workflows, and systems autonomously  with precision, speed, and control.",
    href: "/execution",
    categories: [
      {
        title: "EXECUTION CORE",
        items: [
          "Prompt-to-Execution Engine",
          "Cross-System Action Orchestration",
          "Multi-Agent Execution Framework",
          "Evidence-Grounded Decision Execution",
          "Real-Time Workflow Activation",
        ],
      },
      {
        title: "AUTONOMY & CONTROL",
        items: [
          "Autonomous Triggers & Event-Based Actions",
          "Execution Governance & Audit Trails",
          "Human-in-the-Loop Overrides",
          "Outcome Monitoring & Feedback Loops",
        ],
      },
    ],
  },
    
    {
      title: "AI Strategy & Command Center",
      description:
        "A centralized AI-powered command center for strategy teams to plan, orchestrate, and control execution across the organization. Move from static planning to dynamic, real-time strategy with full visibility and control.",
      href: "/strategy",
      categories: [
        {
          title: "STRATEGY WORKSPACE",
          items: [
            "Unified Strategy Workspace",
            "Execution Command Dashboard",
            "AI Agent Deployment & Orchestration",
            "Scenario Simulation Environment",
          ],
        },
        {
          title: "CONTROL & GOVERNANCE",
          items: [
            "Approval & Override Controls",
            "Execution Trace & Audit Logs",
            "Strategic Reports & Live Dashboards",
            "Performance & Impact Tracking",
          ],
        },
      ],
    },
  ] satisfies DropdownSection[],
  quickLinks: [
    { label: "About Us", href: "/aboutus" },
    { label: "Customer Stories", href: "/customer-stories" },
    { label: "Partners", href: "/partners" },
    { label: "Resources", href: "/resource" },
    { label: "Blog", href: "/blog" },
    { label: "Whitepapers", href: "/white-papers" },
    { label: "Documentation", href: "/doc" },
    { label: "Support", href: "/support" },
    { label: "Contact Us", href: "/contactus" },
  ] satisfies DropdownLinkItem[],
};

export const insightsDropdownData = {
  resources: [
    { label: "Resource Hub", href: "/resource" },
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Whitepapers", href: "/white-papers" },
    { label: "Research Reports", href: "/research-reports" },
    { label: "Architecture Guides", href: "/architecture-guides" },
    { label: "AI Workforce Guides", href: "/ai-workforce-guides" },
    { label: "ROI Calculator", href: "/roi-calculator" },
    { label: "Implementation Guide", href: "/implementation-guide" },
  ] satisfies DropdownLinkItem[],
  company: [
    { label: "About SuperManager AGI", href: "/aboutus" },
    { label: "Leadership", href: "/leadership" },
    { label: "Customer Stories", href: "/customer-stories" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Partners", href: "/partners" },
    { label: "Analyst Recognition", href: "/analyst-recognition" },
    { label: "Press / Media", href: "/press" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contactus" },
  ] satisfies DropdownLinkItem[],
  agentic: [
    {
      label: "What is Autonomous Execution",
      href: "/guides/autonomous-execution",
    },
    { label: "AI Workforce vs Automation", href: "/guides/ai-workforce" },
    { label: "AI Operating System", href: "/guides/ai-os" },
    { label: "Enterprise AI Architecture", href: "/guides/enterprise-ai" },
    { label: "Multi-Agent Systems", href: "/guides/multi-agent" },
    { label: "Decision Intelligence", href: "/guides/decision-intelligence" },
    {
      label: "Operational Intelligence",
      href: "/guides/operational-intelligence",
    },
    {
      label: "Execution Engine Architecture",
      href: "/guides/execution-engine",
    },
  ] satisfies DropdownLinkItem[],
  demo: {
    title: "Experience Autonomous AI in Action",
    description:
      "See how AI agents coordinate work, reason across systems, and execute high-value workflows in real time.",
    href: "https://app.supermanager.co/login",
    ctaLabel: "Try Live Demo",
  },
  expert: {
    title: "Talk to an AI Expert",
    description:
      "Get practical guidance on rollout sequencing, use-case selection, and enterprise deployment design.",
    href: "/get-in-touch",
  },
};

export const intelligenceDropdownData = {
  capabilities: [
    { icon: "users", text: "Multi-agent orchestration" },
    { icon: "brain", text: "Decision intelligence engine" },
    { icon: "zap", text: "AI workforce coordination" },
    { icon: "shield", text: "Security and governance" },
    { icon: "code", text: "No-code and low-code tooling" },
    { icon: "link", text: "Enterprise integration layer" },
  ] satisfies IntelligenceCapability[],
  dataLayer: [
    {
      label: "Agentic Data Architecture",
      href: "/intelligence/ada-architecture",
    },
    { label: "Direct Database Access", href: "/intelligence/direct-data" },
    { label: "Cross-System Intelligence", href: "/intelligence/cross-system" },
    { label: "Live Data Engine", href: "/intelligence/live-data" },
    { label: "Data Governance", href: "/intelligence/governance" },
    { label: "Security & Compliance", href: "/intelligence/security" },
    { label: "Reports & Dashboards", href: "/intelligence/reports" },
  ] satisfies DropdownLinkItem[],
  sections: [
    {
      title: "ENTERPRISE INTELLIGENCE",
      items: [
        { label: "Live Organization Intelligence", href: "/intelligence/live" },
        { label: "Financial Intelligence", href: "/intelligence/financial" },
        { label: "Operational Intelligence", href: "/intelligence/operations" },
        { label: "Sales Intelligence", href: "/intelligence/sales" },
        { label: "Marketing Intelligence", href: "/intelligence/marketing" },
        { label: "Customer Intelligence", href: "/intelligence/customer" },
        { label: "Logistics Intelligence", href: "/intelligence/logistics" },
      ],
    },
    {
      title: "PREDICTIVE INTELLIGENCE",
      items: [
        { label: "Risk Prediction", href: "/intelligence/risk" },
        {
          label: "Delivery Delay Prediction",
          href: "/intelligence/delivery-delay",
        },
        {
          label: "Inventory Risk Prediction",
          href: "/intelligence/inventory-risk",
        },
        { label: "Revenue Forecasting", href: "/intelligence/revenue" },
        { label: "Resource Forecasting", href: "/intelligence/resource" },
        { label: "Anomaly Detection", href: "/intelligence/anomaly" },
      ],
    },
    {
      title: "DECISION INTELLIGENCE",
      items: [
        { label: "Scenario Simulation", href: "/intelligence/scenario" },
        { label: "Impact Analysis", href: "/intelligence/impact" },
        {
          label: "Resource Allocation",
          href: "/intelligence/resource-allocation",
        },
        { label: "Budget Optimization", href: "/intelligence/budget" },
        { label: "Strategic Planning", href: "/intelligence/strategy" },
        { label: "Portfolio Intelligence", href: "/intelligence/portfolio" },
      ],
    },
  ] satisfies IntelligenceSection[],
  hero: {
    title: "Intelligence Platform",
    description:
      "Transform live enterprise data into decision-ready signals, predictive warnings, and action-linked recommendations.",
    href: "/intelligence",
    ctaLabel: "Explore Platform",
  },
  cta: {
    title: "Experience AI Intelligence in Action",
    description:
      "See how real-time intelligence helps teams detect risk sooner, compare options faster, and act with stronger confidence.",
    href: "/get-in-touch",
    ctaLabel: "Book Demo",
  },
};
