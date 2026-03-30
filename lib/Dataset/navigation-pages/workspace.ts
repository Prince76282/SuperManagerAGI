import type { DropdownContentPage } from "./types";

export const platformWorkspacePage: DropdownContentPage = {
  theme: "indigo",
  eyebrow: "Control & Workspace",
  title: "Platform Workspace",
  description:
    "Manage autonomous execution from a centralized workspace where humans can monitor, approve, override, and learn from every AI-led action.",
  intro:
    "This page describes the control plane for the platform. It is the place where operators, managers, and executives supervise workflows, review evidence, and stay confidently in charge as autonomy expands.",
  highlights: [
    "See how the workspace turns opaque automation into visible, governed operations.",
    "Understand where humans review actions, inspect evidence, and intervene when needed.",
    "Explore the operator experience that makes autonomous execution production-safe.",
  ],
  stats: [
    { label: "operator role", value: "In control" },
    { label: "visibility", value: "Real-time" },
    { label: "oversight model", value: "Human-supervised" },
    { label: "auditability", value: "Always-on" },
  ],
  featuredCardsTitle: "Workspace journeys",
  featuredCards: [
    {
      kicker: "Control",
      title: "Execution monitoring",
      href: "/execution",
      description:
        "See how workflows surface state, evidence, and action history to operators.",
    },
    {
      kicker: "Intelligence",
      title: "Live organization signals",
      href: "/intelligence/live",
      description:
        "Review the intelligence feeds that make workspace supervision proactive.",
    },
    {
      kicker: "Governance",
      title: "Security and compliance",
      href: "/intelligence/security",
      description:
        "Explore the controls that keep workspace activity governed and reviewable.",
    },
  ],
  pillars: [
    {
      title: "One place to supervise AI work",
      description:
        "The workspace gives operators a current view of what agents are doing, what they plan to do next, and where human attention is required.",
    },
    {
      title: "Approval and override are first-class",
      description:
        "Consequential actions need clear review flows. The workspace is where humans approve, reject, or modify behavior before the platform commits changes.",
    },
    {
      title: "Evidence should be inspectable in context",
      description:
        "Operators need to see why an action was recommended, which data supported it, and what the downstream effect is likely to be before trusting the system.",
    },
    {
      title: "Auditability builds trust over time",
      description:
        "As teams use the platform more broadly, action logs, explanations, and intervention history help establish confidence and improve future operating decisions.",
    },
  ],
  useCases: [
    {
      role: "Operations teams",
      scenario: "Monitor AI-led workflows in production",
      outcome:
        "Operators can track current state, exceptions, approvals, and completed actions without losing time jumping across multiple tools.",
    },
    {
      role: "Managers and approvers",
      scenario: "Review and control consequential actions",
      outcome:
        "Approvers can inspect the recommendation, supporting evidence, and expected impact before making fast, informed decisions.",
    },
    {
      role: "Leadership and governance teams",
      scenario: "Understand platform behavior over time",
      outcome:
        "Leaders can review where autonomy is performing well, where teams still need oversight, and which workflows are ready for broader expansion.",
    },
  ],
  workflow: [
    {
      title: "Surface current execution state",
      detail:
        "The workspace presents live workflow activity, exceptions, and queued approvals in one place so operators can immediately understand what is happening.",
    },
    {
      title: "Inspect evidence and reasoning",
      detail:
        "Before action is approved or modified, users can review the data, context, and rationale that led to the recommendation.",
    },
    {
      title: "Approve, reject, or override",
      detail:
        "Humans stay in authority on consequential steps by approving actions, changing parameters, pausing workflows, or escalating issues when needed.",
    },
    {
      title: "Learn from every execution cycle",
      detail:
        "The workspace keeps the audit trail and feedback loop that help teams refine policies, improve workflow quality, and expand autonomy responsibly.",
    },
  ],
  faq: [
    {
      question: "Why is a workspace necessary if the platform is autonomous?",
      answer:
        "Because enterprise autonomy still needs human trust and accountability. The workspace is what keeps operators informed and in control while execution accelerates.",
    },
    {
      question: "Who uses the workspace most?",
      answer:
        "Operators, approvers, managers, and governance teams all use it, but they see different parts of the same control surface depending on their role.",
    },
    {
      question: "How does this connect to the rest of the platform?",
      answer:
        "The workspace sits above execution and intelligence. It is where both layers become visible, actionable, and governable in day-to-day operations.",
    },
  ],
  relatedLinks: [
    {
      title: "Platform Overview",
      href: "/platform",
      description:
        "See where the workspace fits inside the full platform architecture.",
    },
    {
      title: "Execution Layer",
      href: "/execution",
      description:
        "Review the workflows and orchestration the workspace supervises.",
    },
    {
      title: "Data Governance",
      href: "/intelligence/governance",
      description:
        "Connect workspace controls to the policy model behind them.",
    },
  ],
  ctaTitle: "Give humans a real control plane for autonomous work",
  ctaDescription:
    "The workspace is what turns powerful AI execution into an enterprise-safe operating model with visibility, accountability, and intervention built in.",
  primaryCta: {
    label: "Book a demo",
    href: "/get-in-touch",
  },
  secondaryCta: {
    label: "Explore platform",
    href: "/platform",
  },
};
