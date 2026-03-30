"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";

const solutions = [
  {
    title: "Enterprise Application Integrations",
    items: [
      "Connect with Salesforce, SAP, Workday, and ServiceNow",
      "Sync enterprise data across CRM, ERP, and internal systems",
      "Enable AI agents to operate directly inside business tools",
      "Unify workflows across departments and platforms",
    ],
  },
  {
    title: "Communication & Collaboration Channels",
    items: [
      "Deploy AI agents inside Slack and Microsoft Teams",
      "Automate conversations through WhatsApp and Web Chat",
      "AI-powered support across internal and customer channels",
      "Enable real-time collaboration between humans and agents",
    ],
  },
  {
    title: "Enterprise Data & Knowledge Systems",
    items: [
      "Connect knowledge bases like Notion and Confluence",
      "Access enterprise documents across Google Drive and OneDrive",
      "Enable AI agents to reason over internal company knowledge",
      "Transform unstructured data into actionable intelligence",
    ],
  },
];

const agentPlatformFeatures = [
  {
    title: "Unified Enterprise Integration Layer",
    body: "SuperManager AGI connects your entire technology ecosystem through a unified integration layer that allows AI agents to securely access enterprise systems, applications, and data sources.",
  },
  {
    title: "Real-Time Data Synchronization",
    body: "Ensure AI agents always operate with the latest business data by synchronizing information across CRMs, internal platforms, communication tools, and analytics systems in real time.",
  },
  {
    title: "API-First Integration Architecture",
    body: "Extend SuperManager AGI capabilities through flexible APIs and SDKs, allowing enterprises to connect proprietary systems and build custom AI-driven workflows.",
  },
  {
    title: "Enterprise Security & Governance",
    body: "Integrations are built with enterprise-grade security including role-based access control, encrypted connections, audit logs, and compliance-ready governance frameworks.",
  },
  {
    title: "Scalable Integration Infrastructure",
    body: "Designed to support large-scale organizations, SuperManager AGI integrates seamlessly across thousands of users, systems, and workflows without operational friction.",
  },
  {
    title: "Cross-Platform Workflow Automation",
    body: "Automate complex business processes that span multiple systems. AI agents coordinate actions across platforms to execute workflows faster and more efficiently.",
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
    <div className="text-[11px]  uppercase tracking-wider text-[#625FD0] mb-3">
      {children}
    </div>
  );
}

function FeatureCard({ title, body }: FeatureCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:border-[#625FD0] transition">
      <h4 className=" text-black mb-3">{title}</h4>
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
          className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-gray-50"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function InfoBlock({ title, items }: InfoBlockProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h4 className=" text-black mb-2">{title}</h4>
      <ChipGrid items={items} />
    </div>
  );
}

export default function EnterpriseIntegrationsHero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs  uppercase tracking-wider text-[#625FD0]">
            Enterprise Integrations
          </span>

          <h1 className="text-3xl lg:text-5xl  text-black mt-4 leading-tight">
            Connect Your Business Systems with
            <span className="text-[#625FD0]"> Intelligent AI Agents</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            SuperManager AGI integrates seamlessly with the tools and platforms
            your organization already relies on. From enterprise applications
            and communication channels to cloud infrastructure and AI models,
            our integration layer allows AI agents to securely access data,
            automate workflows, and coordinate operations across your entire
            business ecosystem.
          </p>

          <Link
            href="get-in-touch"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-[#625FD0] text-white  hover:opacity-90 transition"
          >
            Request a Demo
          </Link>
        </div>

        {/* Integration Solutions */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="border border-gray-200 rounded-xl p-6 bg-white"
            >
              <h3 className=" text-lg mb-4">{sol.title}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {sol.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Platform Capabilities */}
        <SectionLabel>Integration Platform Capabilities</SectionLabel>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {agentPlatformFeatures.map((feat) => (
            <FeatureCard key={feat.title} {...feat} />
          ))}
        </div>

        {/* Enterprise Data */}
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

        {/* Platform Integrations */}
        <SectionLabel>Platform Integrations</SectionLabel>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <InfoBlock title="Communication Channels" items={channels} />
          <InfoBlock title="Contact Center Platforms" items={contactCenters} />
          <InfoBlock title="AI Model Providers" items={aiModels} />
          <InfoBlock title="Cloud & Infrastructure" items={cloudInfra} />
        </div>
      </div>
    </section>
  );
}
