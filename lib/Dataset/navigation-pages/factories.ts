import type {
  DropdownContentPage,
  GuideSeed,
  IntelligenceCategory,
  IntelligenceSeed,
} from "./types";

export function makeGuidePage(seed: GuideSeed): DropdownContentPage {
  return {
    theme: seed.theme,
    eyebrow: "Guides & Playbooks",
    title: seed.title,
    description: `${seed.summary} ${seed.promise}`,
    intro:
      "This guide is designed for operators, executives, and technical leaders who need a practical understanding of how the concept works, where it creates leverage, and how to roll it out safely.",
    highlights: seed.focus,
    stats: [
      { label: "decision lens", value: "Strategic" },
      { label: "implementation depth", value: "Operator-ready" },
      { label: "adoption model", value: "Stepwise" },
      { label: "control posture", value: "Governed" },
    ],
    pillars: [
      {
        title: "Clarify the operating model",
        description: `Break down ${seed.title} into the systems, workflows, and decisions it changes so the concept becomes a practical design pattern instead of abstract AI language.`,
      },
      {
        title: "Connect the right signals",
        description: `Focus on the data, triggers, and organizational context required to make ${seed.title} useful in production. The guide highlights the signals that should feed decisions and the ones that should stay out of scope early on.`,
      },
      {
        title: "Move from concept to rollout",
        description: `Translate the idea into a pilot sequence, ownership model, and measurement plan so teams can adopt ${seed.title} incrementally without disrupting existing operations.`,
      },
    ],
    useCases: [
      {
        role: seed.audience[0],
        scenario:
          "Create a shared definition before evaluating vendors or building internally",
        outcome: `${seed.summary} Leadership teams can align on outcomes, constraints, and success criteria before committing budget or changing the operating model.`,
      },
      {
        role: seed.audience[1],
        scenario: "Map the architecture and workflow implications",
        outcome:
          "Technical teams can identify the data layer, orchestration patterns, approval points, and integration requirements that make the concept reliable in a real production environment.",
      },
      {
        role: seed.audience[2],
        scenario: "Design the first pilot without boiling the ocean",
        outcome:
          "Delivery teams can scope a realistic phase-one implementation, choose the right metrics, and prove value with a narrow set of workflows before scaling usage wider.",
      },
    ],
    workflow: [
      {
        title: "Frame the business objective",
        detail:
          "Start with the decision speed, execution bottleneck, or coordination problem the organization is trying to improve. The guide helps teams avoid AI-first plans that lack a measurable business target.",
      },
      {
        title: "Define the system and data boundaries",
        detail: `Document which systems, data sources, and actions ${seed.title} should influence first. Keep the initial scope narrow enough to validate reliability, governance, and business value.`,
      },
      {
        title: "Pilot with oversight",
        detail:
          "Run an initial deployment with human review, evidence trails, and clear owners for escalations. The guide emphasizes trust-building controls before autonomy is expanded.",
      },
      {
        title: "Measure, iterate, and scale",
        detail:
          "Track time saved, decision quality, response speed, and exception rates. Use the learnings to expand into adjacent workflows only after the first operating loop is stable.",
      },
    ],
    faq: [
      {
        question: `Who should read a guide about ${seed.title}?`,
        answer: `The guide is written for business leaders, operations owners, and technical teams together. ${seed.title} only works when strategy, systems, and workflow ownership are aligned from the start.`,
      },
      {
        question: "Is this meant for a full transformation or a focused pilot?",
        answer:
          "A focused pilot should come first. Use the guide to find the narrowest high-value use case, validate control and adoption patterns, and then widen scope once the operating model is proven.",
      },
      {
        question: "How does the guide help with execution?",
        answer: `Each section is written to move from definition to rollout. Instead of stopping at theory, it shows how ${seed.title} connects to real systems, real teams, and measurable implementation choices.`,
      },
    ],
    relatedLinks: seed.relatedLinks,
    ctaTitle: "Turn the guide into a real deployment plan",
    ctaDescription:
      "Use the guide as the briefing layer, then connect it to a concrete pilot across your teams, data, and workflows.",
    primaryCta: {
      label: "Book a working session",
      href: "/get-in-touch",
    },
    secondaryCta: {
      label: "Browse resource hub",
      href: "/resource",
    },
  };
}

function categoryConfig(category: IntelligenceCategory) {
  if (category === "data-layer") {
    return {
      eyebrow: "Data Layer (ADA)",
      stats: [
        { label: "data freshness", value: "Live" },
        { label: "evidence path", value: "Traceable" },
        { label: "security model", value: "Permission-scoped" },
        { label: "query posture", value: "Low-latency" },
      ],
      workflow: [
        {
          title: "Connect the source systems",
          detail:
            "Bring databases, warehouses, and operational tools into a governed access layer so the platform can query the source of truth directly instead of working from stale exports.",
        },
        {
          title: "Normalize evidence and permissions",
          detail:
            "Standardize schema context, record provenance, and role-based access so every answer or action can be traced to the exact data and policy that enabled it.",
        },
        {
          title: "Route intelligence into downstream workflows",
          detail:
            "Feed evidence-backed outputs into dashboards, recommendations, automations, and human review loops so the data layer becomes operationally useful.",
        },
        {
          title: "Continuously monitor trust signals",
          detail:
            "Track freshness, coverage, access exceptions, and query quality over time so teams can expand usage without losing confidence in the underlying intelligence layer.",
        },
      ],
      faq: [
        {
          question: "Why start with the data layer?",
          answer:
            "Because every intelligent recommendation depends on trustworthy context. If the platform sees stale, incomplete, or poorly governed data, every downstream workflow inherits that weakness.",
        },
        {
          question: "Does this replace existing BI and data governance tools?",
          answer:
            "No. It complements them by making live operational data usable inside AI execution loops while preserving the control, auditability, and access boundaries enterprise teams already require.",
        },
        {
          question: "How do teams adopt it safely?",
          answer:
            "Start with read-heavy intelligence use cases, validate provenance and permissions, and only then widen into automation or write-enabled workflows once governance is proven.",
        },
      ],
    };
  }

  if (category === "enterprise-intelligence") {
    return {
      eyebrow: "Enterprise Intelligence",
      stats: [
        { label: "signal coverage", value: "Cross-system" },
        { label: "decision rhythm", value: "Real-time" },
        { label: "action model", value: "Workflow-aware" },
        { label: "delivery mode", value: "Role-specific" },
      ],
      workflow: [
        {
          title: "Combine the operational signals",
          detail:
            "Ingest the domain data, health indicators, and workflow context required to see the current state of the business without relying on manual status collection.",
        },
        {
          title: "Turn noise into decision signals",
          detail:
            "Correlate activity across systems to surface the signals that actually matter, including trend shifts, exceptions, delays, or quality issues that need action.",
        },
        {
          title: "Deliver role-specific recommendations",
          detail:
            "Route the intelligence to the operators, managers, and executives who can act on it, with the right amount of detail for their role and decision horizon.",
        },
        {
          title: "Close the loop with execution",
          detail:
            "Feed the chosen action back into the platform so intelligence improves the next decision cycle and creates measurable operational lift over time.",
        },
      ],
      faq: [
        {
          question: "How is this different from a dashboard?",
          answer:
            "Dashboards show metrics. Enterprise intelligence adds context, prioritization, and recommended action so teams know what changed, why it matters, and what to do next.",
        },
        {
          question: "Who benefits most from these pages?",
          answer:
            "Operators, department heads, and executive teams all benefit because the same intelligence layer can present different decision views based on role, urgency, and business impact.",
        },
        {
          question: "Can it work across multiple tools?",
          answer:
            "Yes. The value comes from combining signals across ERP, CRM, operations, finance, support, and other systems so the business is seen as one operating network instead of disconnected apps.",
        },
      ],
    };
  }

  if (category === "predictive-intelligence") {
    return {
      eyebrow: "Predictive Intelligence",
      stats: [
        { label: "time horizon", value: "Forward-looking" },
        { label: "warning model", value: "Early-signal" },
        { label: "explainability", value: "Driver-based" },
        { label: "response mode", value: "Proactive" },
      ],
      workflow: [
        {
          title: "Collect leading indicators",
          detail:
            "Pull the signals that appear before the outcome, such as velocity changes, risk patterns, demand shifts, or exception clusters that often precede disruption.",
        },
        {
          title: "Score future risk or opportunity",
          detail:
            "Model the likely outcomes, confidence bands, and business impact so teams can see what may happen before it is visible in lagging reports.",
        },
        {
          title: "Explain the predicted drivers",
          detail:
            "Show which factors are pushing the prediction so teams understand whether the forecast is driven by seasonality, process breakdowns, supply variance, or structural demand shifts.",
        },
        {
          title: "Trigger preventive action",
          detail:
            "Convert the prediction into concrete follow-ups such as reallocation, replenishment, outreach, or escalation while there is still time to influence the outcome.",
        },
      ],
      faq: [
        {
          question: "What makes predictive pages actionable?",
          answer:
            "They combine forecast output with the drivers, thresholds, and recommended responses that teams can act on immediately instead of treating prediction as passive analytics.",
        },
        {
          question: "Do teams need perfect historical data first?",
          answer:
            "No, but they do need enough reliable signal coverage to validate patterns. Most teams start by improving data quality in a single domain and then expanding the model once the early warnings prove useful.",
        },
        {
          question: "How should teams use predictions operationally?",
          answer:
            "Use them to prioritize intervention, not to replace judgment. Predictive intelligence is strongest when it helps humans focus scarce time on the risks and opportunities most likely to matter.",
        },
      ],
    };
  }

  return {
    eyebrow: "Decision Intelligence",
    stats: [
      { label: "planning mode", value: "Scenario-based" },
      { label: "trade-off visibility", value: "High" },
      { label: "collaboration path", value: "Cross-functional" },
      { label: "output format", value: "Action-ready" },
    ],
    workflow: [
      {
        title: "Frame the decision to be made",
        detail:
          "Clarify the decision, constraints, and success criteria so the analysis is anchored to a real business trade-off instead of a vague planning conversation.",
      },
      {
        title: "Model the available options",
        detail:
          "Generate scenarios, sensitivities, and likely effects across cost, time, capacity, revenue, or service outcomes so teams can compare paths clearly.",
        },
      {
        title: "Quantify the downstream impact",
        detail:
          "Show what each choice means for adjacent teams, budgets, delivery timelines, and strategic priorities before a decision is committed.",
      },
      {
        title: "Drive execution after the decision",
        detail:
          "Turn the chosen path into operational work, ownership, and follow-up metrics so decisions move out of the planning deck and into execution.",
      },
    ],
    faq: [
      {
        question: "What is the difference between analytics and decision intelligence?",
        answer:
          "Analytics explains what happened. Decision intelligence compares options, surfaces trade-offs, and helps teams choose and operationalize the next move.",
      },
      {
        question: "Who should own this capability?",
        answer:
          "The strongest ownership model is cross-functional: strategy, finance, operations, and the teams closest to execution should all contribute to the signal and decision process.",
      },
      {
        question: "Can it support both strategic and operational decisions?",
        answer:
          "Yes. The same pattern can be used for near-term allocation choices, budget trade-offs, quarterly planning, and broader portfolio or strategy reviews.",
      },
    ],
  };
}

export function makeIntelligencePage(seed: IntelligenceSeed): DropdownContentPage {
  const config = categoryConfig(seed.category);

  return {
    theme: seed.theme,
    eyebrow: config.eyebrow,
    title: seed.title,
    description: `${seed.summary} ${seed.action}`,
    intro:
      "Use this page as a domain-specific overview of the signals, workflows, and decision patterns needed to turn intelligence into action inside an enterprise operating model.",
    highlights: seed.signals,
    stats: config.stats,
    pillars: [
      {
        title: "Unify the right context",
        description: `${seed.summary} This page focuses on which context needs to be combined so the signal is trustworthy enough to drive decisions.`,
      },
      {
        title: "Prioritize the signals that matter",
        description: `The highlighted signals help teams separate noise from action. Rather than surfacing everything, ${seed.title} should emphasize the few indicators that change outcomes fastest.`,
      },
      {
        title: "Link insight to follow-through",
        description: `${seed.action} The goal is not passive visibility. It is a tighter loop between intelligence, ownership, and execution.`,
      },
      {
        title: "Scale with governance",
        description:
          "As usage grows, teams need role-based visibility, evidence trails, and approval controls so intelligent recommendations stay transparent and safe across the organization.",
      },
    ],
    useCases: [
      {
        role: seed.teams[0],
        scenario: `Use ${seed.title} to spot the highest-priority changes earlier`,
        outcome:
          "Teams can review the most important signal shifts first instead of scanning multiple tools manually, improving responsiveness and reducing decision lag.",
      },
      {
        role: seed.teams[1],
        scenario: "Coordinate cross-functional action around the same signal",
        outcome:
          "Because the signal is shared and explained consistently, adjacent teams can respond from a common operating picture rather than debating which source is correct.",
      },
      {
        role: seed.teams[2],
        scenario:
          "Translate domain insight into measurable operating improvements",
        outcome:
          "Leaders can track whether recommendations reduce delay, risk, leakage, or planning friction over time and then expand the capability to adjacent workflows.",
      },
    ],
    workflow: config.workflow,
    faq: config.faq,
    relatedLinks: seed.relatedLinks,
    ctaTitle: "Connect intelligence to action, not just visibility",
    ctaDescription:
      "The biggest gains come when intelligence is tied directly to decisions, approvals, and workflow execution across the business.",
    primaryCta: {
      label: "Talk to an AI expert",
      href: "/get-in-touch",
    },
    secondaryCta: {
      label: "Explore the platform",
      href: "/platform",
    },
  };
}
