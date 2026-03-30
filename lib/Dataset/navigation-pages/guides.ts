import type { DropdownContentPage, GuideSeed } from "./types";
import { makeGuidePage } from "./factories";
const guideSeeds: GuideSeed[] = [
  {
    slug: "autonomous-execution",
    theme: "indigo",
    title: "What is Autonomous Execution",
    summary:
      "Understand how systems move from insight to action by executing work across tools, teams, and workflows with minimal manual coordination.",
    promise:
      "It explains what autonomy should mean in an enterprise environment, where human control belongs, and how to design the execution loop responsibly.",
    audience: ["Executive teams", "Platform architects", "Operations leaders"],
    focus: [
      "Where autonomous execution creates leverage beyond workflow automation",
      "How to combine approvals, audit trails, and agent orchestration safely",
      "Which workflows should move first from manual coordination to AI-led execution",
    ],
    relatedLinks: [
      {
        title: "Execution Layer",
        href: "/execution",
        description:
          "See how prompt-to-execution flows are positioned across the core platform.",
      },
      {
        title: "Execution Engine Architecture",
        href: "/guides/execution-engine",
        description:
          "Go deeper into the orchestration, validation, and commit path behind execution.",
      },
      {
        title: "Control & Workspace",
        href: "/platform/workspace",
        description:
          "Explore the oversight layer that keeps autonomous execution transparent.",
      },
    ],
  },
  {
    slug: "ai-workforce",
    theme: "emerald",
    title: "AI Workforce vs Automation",
    summary:
      "Compare static task automation with agentic workforces that can reason across context, collaborate, and adapt to changing operational conditions.",
    promise:
      "The guide helps teams decide when a rule-based workflow is enough and when multi-agent execution produces materially better business outcomes.",
    audience: [
      "Operations leaders",
      "Automation teams",
      "Transformation leaders",
    ],
    focus: [
      "The limits of if-this-then-that automations in cross-system work",
      "How AI workers differ in planning, exception handling, and coordination",
      "What governance changes when teams move from workflows to agent workforces",
    ],
    relatedLinks: [
      {
        title: "AI Workforce Guides",
        href: "/ai-workforce-guides",
        description:
          "Browse workforce design patterns and operating blueprints.",
      },
      {
        title: "Multi-Agent Systems",
        href: "/guides/multi-agent",
        description:
          "See how specialist agents share work and context across a workflow.",
      },
      {
        title: "Case Studies",
        href: "/case-studies",
        description:
          "Review examples of where intelligent workforces outperform static automations.",
      },
    ],
  },
  {
    slug: "ai-os",
    theme: "sky",
    title: "AI Operating System",
    summary:
      "Explore the idea of an operating system for AI-native work, where data access, agent orchestration, human controls, and execution management live in one layer.",
    promise:
      "This guide maps the foundation required to run AI across the business without fragmenting governance, data, and decision ownership.",
    audience: [
      "C-suite sponsors",
      "Enterprise architects",
      "Product and platform teams",
    ],
    focus: [
      "Why point tools fail when AI initiatives spread across departments",
      "What an AI operating system needs across data, control, and execution",
      "How platform choices affect rollout speed, trust, and long-term scalability",
    ],
    relatedLinks: [
      {
        title: "Platform Overview",
        href: "/platform",
        description:
          "See the platform lens that ties execution, intelligence, and workspace together.",
      },
      {
        title: "Intelligence Platform",
        href: "/intelligence",
        description:
          "Explore how the intelligence layer fits inside the AI operating model.",
      },
      {
        title: "Implementation Guide",
        href: "/implementation-guide",
        description:
          "Turn the operating system concept into a staged rollout plan.",
      },
    ],
  },
  {
    slug: "enterprise-ai",
    theme: "rose",
    title: "Enterprise AI Architecture",
    summary:
      "Learn how to design AI systems that work with enterprise realities like fragmented data, strict permissions, reliability requirements, and cross-functional ownership.",
    promise:
      "The guide gives leaders a practical architecture lens for moving from experiments to production-grade, organization-wide deployment.",
    audience: [
      "Enterprise architects",
      "Security leaders",
      "Platform and data teams",
    ],
    focus: [
      "How direct data access, integration layers, and execution control fit together",
      "Where observability, governance, and human override belong in the stack",
      "How to scale AI capability without creating another disconnected tool layer",
    ],
    relatedLinks: [
      {
        title: "Architecture Guides",
        href: "/architecture-guides",
        description:
          "Browse architecture-specific design patterns and rollout material.",
      },
      {
        title: "Agentic Data Architecture",
        href: "/intelligence/ada-architecture",
        description:
          "See how the data layer supports real-time enterprise intelligence.",
      },
      {
        title: "Platform Workspace",
        href: "/platform/workspace",
        description:
          "Review the control plane needed for production deployment.",
      },
    ],
  },
  {
    slug: "multi-agent",
    theme: "emerald",
    title: "Multi-Agent Systems",
    summary:
      "Understand how specialist agents divide work, share context, and coordinate execution across complex enterprise processes.",
    promise:
      "The guide shows when multi-agent design is worth the complexity, how orchestration should work, and how to prevent fragmented handoffs or duplicated effort.",
    audience: ["Platform teams", "Workflow designers", "Operations owners"],
    focus: [
      "When to use specialist agents instead of one general-purpose assistant",
      "How task routing, validation, and escalation work in multi-agent operations",
      "What observability and control patterns keep agent networks reliable at scale",
    ],
    relatedLinks: [
      {
        title: "Execution Layer",
        href: "/execution",
        description:
          "See how the platform positions multi-agent orchestration in production.",
      },
      {
        title: "AI Workforce vs Automation",
        href: "/guides/ai-workforce",
        description:
          "Compare agent networks with standard automations and bots.",
      },
      {
        title: "Resource Allocation",
        href: "/intelligence/resource-allocation",
        description:
          "Explore how decision intelligence coordinates work across constrained teams.",
      },
    ],
  },
  {
    slug: "decision-intelligence",
    theme: "amber",
    title: "Decision Intelligence",
    summary:
      "See how enterprises can combine operational data, predictive signals, and scenario modeling to make higher-quality decisions faster.",
    promise:
      "The guide connects data visibility with choice, showing how to move from metrics and dashboards toward structured decision support.",
    audience: [
      "Strategy leaders",
      "Finance and operations teams",
      "Transformation sponsors",
    ],
    focus: [
      "How decisions improve when signals, context, and trade-offs are modeled together",
      "Why scenario comparison matters more than passive reporting",
      "How teams operationalize decisions so they change workflows instead of staying in planning decks",
    ],
    relatedLinks: [
      {
        title: "Impact Analysis",
        href: "/intelligence/impact",
        description:
          "Look at how decision choices ripple across cost, timing, and capacity.",
      },
      {
        title: "Scenario Simulation",
        href: "/intelligence/scenario",
        description:
          "Explore scenario modeling as a decision support mechanism.",
      },
      {
        title: "Budget Optimization",
        href: "/intelligence/budget",
        description:
          "See how decision intelligence supports budget trade-offs and planning.",
      },
    ],
  },
  {
    slug: "operational-intelligence",
    theme: "sky",
    title: "Operational Intelligence",
    summary:
      "Understand how live operating signals from execution systems can be transformed into a real-time view of bottlenecks, drift, risk, and throughput.",
    promise:
      "This guide helps teams build the conditions for fast, continuous operational decision-making instead of waiting for status updates or weekly reporting cycles.",
    audience: ["Operations leaders", "Service teams", "Delivery managers"],
    focus: [
      "Which operational signals should be monitored continuously versus periodically",
      "How to create alerting that helps teams act instead of adding more noise",
      "How operational intelligence connects to approvals, escalations, and automation",
    ],
    relatedLinks: [
      {
        title: "Operational Intelligence",
        href: "/intelligence/operations",
        description:
          "See the domain-specific page for operations intelligence.",
      },
      {
        title: "Live Organization Intelligence",
        href: "/intelligence/live",
        description:
          "Explore organization-wide visibility across functions and workflows.",
      },
      {
        title: "Risk Prediction",
        href: "/intelligence/risk",
        description:
          "Look at how predictive signals extend operational awareness forward.",
      },
    ],
  },
  {
    slug: "execution-engine",
    theme: "indigo",
    title: "Execution Engine Architecture",
    summary:
      "Dive into the architecture that turns intent into validated execution across multiple tools, workflows, and agent roles.",
    promise:
      "The guide explains decomposition, orchestration, evidence validation, and control patterns so teams can trust the engine that actually performs the work.",
    audience: ["Engineering leaders", "Platform teams", "Operations owners"],
    focus: [
      "How prompts or triggers are decomposed into executable work graphs",
      "Where validation, approval gates, and commit logic should be enforced",
      "How to keep execution auditable, resilient, and observable under load",
    ],
    relatedLinks: [
      {
        title: "Autonomous Execution",
        href: "/guides/autonomous-execution",
        description:
          "Start with the concept and operating model behind autonomous action.",
      },
      {
        title: "Execution Layer",
        href: "/execution",
        description: "See the product-level view of execution capabilities.",
      },
      {
        title: "Platform Workspace",
        href: "/platform/workspace",
        description:
          "Review how operators supervise and intervene in execution flows.",
      },
    ],
  },
];
export const guidePages = Object.fromEntries(
  guideSeeds.map((seed) => [seed.slug, makeGuidePage(seed)]),
) as Record<string, DropdownContentPage>;
export const guidePageSlugs = Object.keys(guidePages);
export function getGuidePage(slug: string) {
  return guidePages[slug];
}
