"use client";

import Link from "next/link";
import { useState } from "react";

// --- Data ---
const solutions = [
  {
    title: "Autonomous Work Agents",
    items: [
      "AI agents built for specific business roles",
      "Autonomous task planning & execution",
      "Enterprise knowledge reasoning",
      "Agents for HR, IT, Sales and Operations",
    ],
  },
  {
    title: "Service Automation Agents",
    items: [
      "Customer support AI agents",
      "AI-driven contact center automation",
      "Real-time support recommendations",
      "Industry agents for Banking, Healthcare and Retail",
    ],
  },
  {
    title: "Process Intelligence Agents",
    items: [
      "Workflow triggers with autonomous agents",
      "Human-in-the-loop approvals",
      "End-to-end process monitoring",
      "Pre-built enterprise automation templates",
    ],
  },
];

const agentPlatformFeatures = [
  {
    title: "Autonomous Agent Orchestration",
    body: "Coordinate multiple specialized AI agents that collaborate across complex workflows. Supervisor agents manage task delegation, reasoning, and execution across the enterprise.",
  },
  {
    title: "AI Knowledge & Context Engine",
    body: "Connect enterprise data with AI agents through retrieval systems, knowledge graphs, and contextual memory to enable informed decision-making.",
  },
  {
    title: "No-Code + Pro-Code Development",
    body: "Build and deploy AI agents visually using no-code tools or extend capabilities through APIs, SDKs, and developer frameworks.",
  },
  {
    title: "AI Engineering Toolkit",
    body: "Design, test, and optimize AI agents with prompt studios, evaluation tools, model hubs, and orchestration systems.",
  },
  {
    title: "Observability & Monitoring",
    body: "Gain complete visibility into AI agent performance with tracing, monitoring dashboards, analytics, and operational insights.",
  },
  {
    title: "Security & Governance",
    body: "Enterprise-grade guardrails including role-based access control, audit logs, version management, and compliance frameworks.",
  },
];

const enterpriseApps = [
  "Salesforce",
  "ServiceNow",
  "SAP",
  "Workday",
  "Zendesk",
  "HubSpot",
  "Jira",
  "SharePoint",
  "Confluence",
  "+100 more",
];

const unstructuredData = [
  "Google Drive",
  "OneDrive",
  "Dropbox",
  "Box",
  "Notion",
  "Confluence",
  "+70 more",
];

const channels = ["Slack", "Microsoft Teams", "WhatsApp", "Web Chat"];

const contactCenters = ["Genesys", "NICE", "Avaya"];

const aiModels = [
  "OpenAI",
  "Azure AI",
  "Google AI",
  "NVIDIA",
  "LLaMA",
  "Mistral",
  "Deepgram",
  "+Others",
];

const cloudInfra = [
  "AWS",
  "Google Cloud",
  "Azure",
  "Kubernetes",
  "Private VPC",
  "On-Premise",
];

// --- Sub Components ---
function SectionLabel({ children }) {
  return (
    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#625FD0] mb-2">
      {children}
    </div>
  );
}

function FeatureCard({ title, body }) {
  return (
    <div className="border rounded-xl p-6 bg-white hover:border-[#625FD0] transition">
      <h4 className="font-semibold text-black mb-3">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}

function ChipGrid({ items }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((item) => (
        <span
          key={item}
          className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-gray-50"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function InfoBlock({ title, items }) {
  return (
    <div className="border rounded-xl p-6 bg-white">
      <h4 className="font-semibold text-black mb-3">{title}</h4>
      <ChipGrid items={items} />
    </div>
  );
}

// --- Main Component ---
export default function AutonomousAgentHero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#625FD0]">
            Autonomous Agent Orchestration
          </span>

          <h1 className="text-3xl lg:text-5xl  text-black mt-4 leading-tight">
            Orchestrate Intelligent
            <span className="text-[#625FD0]"> Autonomous AI Agents</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            SuperManager AGI enables organizations to build and orchestrate
            autonomous AI agents that collaborate across teams, systems, and
            enterprise data. These agents plan tasks, execute workflows, and
            continuously optimize operations without constant human supervision.
          </p>

          <Link
            href="/get-in-touch"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-[#625FD0] text-white font-semibold hover:opacity-90 transition"
          >
            Request a Demo
          </Link>
        </div>

        {/* Solutions */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {solutions.map((sol) => (
            <div key={sol.title} className="border rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-lg mb-4">{sol.title}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {sol.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Platform Features */}
        <SectionLabel>Agent Platform Capabilities</SectionLabel>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {agentPlatformFeatures.map((feat) => (
            <FeatureCard key={feat.title} {...feat} />
          ))}
        </div>

        {/* Data Sources */}
        <SectionLabel>Enterprise Data Connectivity</SectionLabel>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <InfoBlock
            title="Enterprise Application Integrations"
            items={enterpriseApps}
          />
          <InfoBlock
            title="Unstructured Data Sources"
            items={unstructuredData}
          />
        </div>

        {/* Integrations */}
        <SectionLabel>Platform Integrations</SectionLabel>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <InfoBlock title="Communication Channels" items={channels} />
          <InfoBlock title="Contact Center Platforms" items={contactCenters} />
          <InfoBlock title="AI Model Providers" items={aiModels} />
          <InfoBlock title="Cloud & Infrastructure" items={cloudInfra} />
        </div>
      </div>
    </section>
  );
}
