"use client";

import type { ReactNode } from "react";

const solutions = [
  {
    title: "AI for Every Operation",
    items: [
      "Specialist agents per business function",
      "Enterprise data intelligence via ADA at 65ms",
      "Autonomous workflow execution 24x7",
      "Pre-built agents for inventory, finance, logistics, marketing, customer care, engineering",
    ],
  },
  {
    title: "AI for Every Industry",
    items: [
      "D2C and e-commerce brand operations",
      "Consulting firm engagement management",
      "Manufacturing supply chain coordination",
      "Healthcare administration automation",
      "Financial services reconciliation and compliance",
      "Enterprise portfolio intelligence",
    ],
  },
  {
    title: "AI for Every Workflow",
    items: [
      "Natural language task execution across connected apps",
      "Human-in-the-loop approvals for consequential decisions",
      "Continuous monitoring and anomaly detection",
      "Automated MIS and report generation",
      "Cross-department data coordination without API bottleneck",
    ],
  },
];

const agentPlatformFeatures = [
  {
    title: "Step 1 : Prompt",
    body: "Any natural language instruction. A task, a question, a workflow trigger. Typed into the workspace, sent via Slack, triggered by a schedule or fired by a connected system event.",
  },
  {
    title: "Step 2 : Orchestrate",
    body: "The Controller Agent classifies intent, decomposes the task into a DAG of subtasks, topologically sorts dependencies and dispatches ready subtasks to specialist agents in parallel via the work-stealing scheduler.",
  },
  {
    title: "Step 3 : Retrieve",
    body: "Each specialist agent invokes the ADA layer for task-scoped data retrieval. Native async connections to your databases at 2 to 15ms. No HTTP intermediary. No API rate limit. No data leaving your perimeter.",
  },
  {
    title: "Step 4 : Execute",
    body: "Agents generate outputs grounded in retrieved evidence, validated by evidence-majority voting. Results committed to connected systems. Actions logged in the audit trail. Stakeholders notified.",
  },
  {
    title: "Step 5 : Optimise",
    body: "Agents continuously monitor execution quality, surface anomalies and rebalance workloads based on live performance data. The platform improves with every workflow executed.",
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
type SectionLabelProps = {
  children: ReactNode;
};

type FeatureCardProps = {
  title: string;
  body: string;
};

type ChipGridProps = {
  items: string[];
};

type InfoBlockProps = {
  title: string;
  items: string[];
};

function SectionLabel({ children }: SectionLabelProps) {
  return (
    <h1 className="text-[18px] font-semibold  uppercase tracking-wider text-[#625FD0] mb-2">
      {children}
    </h1>
  );
}

function FeatureCard({ title, body }: FeatureCardProps) {
  return (
    <div className="border rounded-xl p-5 bg-white hover:border-[#625FD0] transition">
      <p className=" text-black text-lg mb-2">{title}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}

function ChipGrid({ items }: ChipGridProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((item) => (
        <span
          key={item}
          className="text-sm px-3 py-1 rounded-full border border-gray-200 bg-gray-50"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function InfoBlock({ title, items }: InfoBlockProps) {
  return (
    <div className="border rounded-xl p-5 bg-white">
      <p className=" text-black text-lg mb-2">{title}</p>
      <ChipGrid items={items} />
    </div>
  );
}

// --- Main Component ---
export default function PlatformOverview() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-semibold  uppercase tracking-wider text-[#625FD0]">
            Platform Overview
          </span>

          <h1 className="text-3xl lg:text-5xl  text-black mt-4 leading-tight">
            The Operating System for
            <span className="text-[#625FD0]"> Autonomous AI Workforces</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            SuperManager AGI is a unified platform that allows any organisation
            to build, deploy and orchestrate intelligent AI agents capable of
            executing any business workflow across any application, any
            department and any industry.
          </p>
        </div>

        {/* Solutions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {solutions.map((sol) => (
            <div key={sol.title} className="border rounded-xl p-6 bg-white">
              <p className="  text-lg mb-4">{sol.title}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {sol.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How the Vibe Working Platform Works */}
        <SectionLabel >How the Vibe Working Platform Works</SectionLabel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {agentPlatformFeatures.map((feat) => (
            <FeatureCard key={feat.title} {...feat} />
          ))}
        </div>

        {/* Data Sources */}
        <SectionLabel>Enterprise Data Sources</SectionLabel>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <InfoBlock
            title="Enterprise Application Integrations"
            items={enterpriseApps}
          />
          <InfoBlock
            title="Unstructured Data Integrations"
            items={unstructuredData}
          />
        </div>

        {/* Integrations */}
        <SectionLabel>Enterprise Integrations</SectionLabel>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <InfoBlock title="Communication Channels" items={channels} />
          <InfoBlock title="Contact Centers" items={contactCenters} />
          <InfoBlock title="AI Models" items={aiModels} />
          <InfoBlock title="Cloud Infrastructure" items={cloudInfra} />
        </div>
      </div>
    </section>
  );
}
