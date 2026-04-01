import type { Button, UseCaseItem } from "./types/shared";

/**
 * InfrastructureCard: Infrastructure deployment option card
 * Used in: Infrastructure Partners section
 *
 * Represents deployment options (private, managed cloud, etc.) with
 * features, use cases, and call-to-action buttons
 */
export type InfrastructureCard = {
  id: string;
  image: string;
  alt: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  features: string[];
  useCases: UseCaseItem[];
  footer: string;
  callout: string;
  buttons: Button[];
};

export const INFRASTRUCTURE_DATA = {
  header: {
    title:
      "Infrastructure and Security Built for Enterprise-Grade Autonomous AI Execution",
    description:
      "SuperManager AGI operates within secure, enterprise-grade environments with flexible deployment options. The ADA Integration Layer ensures enterprise data never crosses your organisational boundary during agent reasoning  data sovereignty is not a feature, it is the default architecture. Whether you require full infrastructure control or a secure managed cloud, we ensure data protection, compliance alignment and reliable AI execution.",
  },

  cards: [
    {
      id: "private-deployment",
      image: "/Image/Private.jpeg",
      alt: "Private Deployment",
      title: "Private Deployment Within Your Infrastructure",
      tagline: "Your data. Your perimeter. Your control.",
      description:
        "Deploy SuperManager AGI directly inside your AWS, Azure, GCP or on-premises environment. ADA connects agents natively to your internal databases  no external API calls, no data crossing your perimeter, full data sovereignty and governance control.",
      extendedDescription:
        "The ADA (Autonomous Data Access) Integration Layer acts as a secure bridge between SuperManager's reasoning engine and your internal data sources  CRMs, ERPs, HR systems, financial databases, and proprietary data stores. Agents retrieve, process, and act on data without ever serialising it for transmission outside your environment. This is not a VPN tunnel or a proxy. It is native, in-perimeter execution.",
      features: [
        "VPC and Private Network Deployment ",
        "Complete Data Residency and Ownership  ADA keeps all data inside your perimeter ",
        "SSO, RBAC and Enterprise Identity Integration ",
        "End-to-End Encryption In Transit and At Rest ",
        "Full Audit Logs and Decision Traceability ",
        "Human-in-the-Loop Controls for Critical Actions ",
        "No External Data Exposure  zero API calls to external services during agent reasoning ",
      ],
      useCases: [
        {
          icon: "🏦",
          label: "Financial Services",
          description:
            "Meet FCA, SEC, and MAS requirements with provable data locality.",
        },
        {
          icon: "🏥",
          label: "Healthcare",
          description:
            "HIPAA-capable deployment  patient data never leaves your environment.",
        },
        {
          icon: "🏛️",
          label: "Government & Public Sector",
          description:
            "Sovereign cloud and on-premises deployment for classified or restricted workloads.",
        },
        {
          icon: "⚖️",
          label: "Legal & Compliance",
          description:
            "Privileged data and attorney-client records stay fully isolated.",
        },
      ],
      footer:
        "Built for enterprises requiring maximum security, compliance and internal control. The only AI agent platform where enterprise data provably never leaves your environment.",
      callout:
        "Organisations in regulated industries  financial services, healthcare, legal, government  require infrastructure that supports compliance by design, not by configuration. Private Deployment is the answer.",
      buttons: [
        {
          label: "PRIVATE DEPLOYMENT",
          href: "/home/private-deployment",
          variant: "primary" as const,
        },
      ],
    },

    {
      id: "secure-cloud",
      image: "/Image/secure-cloud.webp",
      alt: "Secure Cloud Deployment",
      title: "Secure Managed Cloud Deployment",
      tagline: "Enterprise security. Zero infrastructure overhead.",
      description:
        "Access SuperManager AGI through our secure, enterprise-grade cloud infrastructure  fully isolated, monitored and SLA-backed.",
      extendedDescription:
        "Our managed cloud environment is architected for enterprise tenants  not multi-tenant SaaS. Each organisation operates within a dedicated, isolated environment with no shared compute, no shared storage, and no shared networking. We handle patching, scaling, failover, and security operations so your team can focus entirely on deploying and scaling AI-driven workflows.",
      features: [
        "Dedicated Tenant Architecture ",
        "Encrypted Data Storage and Processing ",
        "Continuous Security Monitoring ",
        "Automated Backups and Disaster Recovery ",
        "Enterprise Reliability and High Availability ",
        "Strict Access Governance ",
      ],
      useCases: [
        {
          icon: "🚀",
          label: "Fast-Growing Enterprises",
          description:
            "Launch enterprise AI capabilities in days, not quarters.",
        },
        {
          icon: "🌍",
          label: "Global Organisations",
          description:
            "Multi-region cloud deployment with data residency options per geography.",
        },
        {
          icon: "🔧",
          label: "Teams Without DevOps Resources",
          description:
            "Full infrastructure management handled  no internal cloud expertise required.",
        },
        {
          icon: "📈",
          label: "Scaling Operations",
          description:
            "Elastic compute that scales with your agent workload automatically.",
        },
      ],
      footer:
        "Ideal for fast deployment with enterprise-level security and operational reliability.",
      callout:
        "When speed to value matters and internal infrastructure overhead is not an option, Secure Managed Cloud delivers enterprise-grade AI execution without the operational burden.",
      buttons: [
        {
          label: "SECURE CLOUD DEPLOYMENT",
          href: "/home/secure-cloud",
          variant: "primary" as const,
        },
      ],
    },
  ],

  complianceSection: {
    title: "Compliance and Regulatory Alignment",
    description:
      "SuperManager AGI is built for organisations operating in regulated environments. Our infrastructure supports compliance with leading frameworks and regulations  not as an afterthought, but as a foundational design principle.",
    frameworks: [
      {
        name: "SOC 2 Type II",
        description:
          "Independently audited security, availability, and confidentiality controls.",
        icon: "🔐",
      },
      {
        name: "GDPR",
        description:
          "Data processing agreements, right-to-erasure support, and EU data residency options.",
        icon: "🇪🇺",
      },
      {
        name: "HIPAA",
        description:
          "BAA available for healthcare customers. PHI handling with full access controls.",
        icon: "🏥",
      },
      {
        name: "ISO 27001",
        description:
          "Information security management aligned to ISO 27001 standards.",
        icon: "📋",
      },
      {
        name: "FedRAMP",
        description:
          "FedRAMP-path deployment available for US federal and public sector customers.",
        icon: "🏛️",
      },
    ],
  },

  securityPrinciples: {
    title: "Security Principles That Define How We Build",
    description:
      "Every layer of the SuperManager AGI platform is designed around a core set of security principles. These are not policies we enforce  they are properties of the architecture itself.",
    principles: [
      {
        title: "Zero Trust by Default",
        description:
          "No implicit trust within the network perimeter. Every request  agent to data source, service to service  is authenticated and authorised explicitly.",
        icon: "🔒",
      },
      {
        title: "Least Privilege Execution",
        description:
          "Agents are granted only the minimum permissions required to complete a task. Permissions are scoped, time-bound, and revocable.",
        icon: "🎯",
      },
      {
        title: "Immutable Audit Trails",
        description:
          "Every agent decision, action, and data access is recorded in tamper-proof, cryptographically verifiable logs. Full explainability for every operation.",
        icon: "📜",
      },
      {
        title: "Data Isolation at Every Layer",
        description:
          "Compute, storage, and network are isolated per tenant. No cross-contamination is architecturally possible.",
        icon: "🛡️",
      },
      {
        title: "Human Override and Control",
        description:
          "Critical or irreversible actions require human approval. Configurable escalation policies ensure humans remain in control of consequential decisions.",
        icon: "🧑‍💼",
      },
    ],
  },

  cta: {
    title: "Ready to Deploy SuperManager AGI in Your Environment?",
    description:
      "Speak with our enterprise infrastructure team to discuss deployment architecture, compliance requirements, and integration with your existing security stack.",
    buttons: [
      {
        label: "Book an Infrastructure Review",
        href: "/get-in-touch",
        variant: "primary" as const,
      },
      
    ],
  },
};

export const getInfrastructureCardById = (
  id: string,
): InfrastructureCard | undefined =>
  INFRASTRUCTURE_DATA.cards.find((card) => card.id === id);
