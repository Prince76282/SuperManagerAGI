"use client";

import { useState } from "react";

/* ---------------- Data ---------------- */

const solutions = [
  {
    title: "Real-Time Project Visibility",
    items: [
      "Track project progress across teams and departments",
      "Monitor milestones, deliverables, and execution timelines",
      "Identify bottlenecks before they impact delivery",
      "Maintain complete operational visibility across projects",
    ],
  },
  {
    title: "Workforce Performance Intelligence",
    items: [
      "Analyze workforce productivity across teams",
      "Understand workload distribution and team capacity",
      "Track collaboration patterns across departments",
      "Enable data-driven workforce management",
    ],
  },
  {
    title: "Operational Decision Support",
    items: [
      "AI-driven recommendations for project execution",
      "Predictive insights for planning and resource allocation",
      "Identify operational risks before delays occur",
      "Enable leadership with real-time operational insights",
    ],
  },
];

const agentPlatformFeatures = [
  {
    title: "Unified Project Intelligence",
    body: "SuperManager AGI centralizes project data across teams, tools, and workflows, giving organizations a unified operational view of execution, progress, and outcomes.",
  },
  {
    title: "Real-Time Workforce Insights",
    body: "Analyze how teams collaborate, distribute workloads, and execute tasks. SuperManager AGI continuously evaluates workforce performance and operational efficiency.",
  },
  {
    title: "Predictive Risk Detection",
    body: "AI continuously analyzes project signals to detect risks, delays, or bottlenecks before they impact business operations or project timelines.",
  },
  {
    title: "Intelligent Resource Allocation",
    body: "Automatically recommend how to allocate team members, resources, and priorities to ensure projects run efficiently and teams operate at peak productivity.",
  },
  {
    title: "Operational Command Center",
    body: "Gain a complete overview of projects, teams, and outcomes through an intelligent operational dashboard designed for enterprise leaders.",
  },
  {
    title: "AI-Powered Workflow Optimization",
    body: "SuperManager AGI continuously improves workflows by identifying inefficiencies and recommending smarter ways to manage tasks, teams, and operations.",
  },
];

const enterpriseApps = [
  "Jira",
  "Asana",
  "Monday.com",
  "ClickUp",
  "Trello",
  "Notion",
  "Airtable",
  "+100 more",
];

const unstructuredData = [
  "Google Drive",
  "OneDrive",
  "Dropbox",
  "Notion Docs",
  "Confluence",
  "Internal Knowledge Bases",
  "+70 more",
];

const channels = ["Slack", "Microsoft Teams", "Email", "Web Dashboards"];

const contactCenters = [
  "Operations Dashboard",
  "Executive Reporting",
  "Project Analytics",
];

const aiModels = [
  "Predictive Analytics",
  "Operational Intelligence",
  "Workforce Optimization",
  "Performance Insights",
];

const cloudInfra = [
  "AWS",
  "Google Cloud",
  "Azure",
  "Kubernetes",
  "Private VPC",
  "On-Premise",
];

/* ---------------- Components ---------------- */

function SectionLabel({ children }) {
  return (
    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#625FD0] mb-3">
      {children}
    </div>
  );
}

function FeatureCard({ title, body }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:border-[#625FD0] transition">
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
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h4 className="font-semibold text-black mb-2">{title}</h4>
      <ChipGrid items={items} />
    </div>
  );
}

export default function ProjectWorkforceHero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}

        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#625FD0]">
            Project & Workforce Intelligence
          </span>

          <h1 className="text-3xl lg:text-5xl  text-black mt-4 leading-tight">
            Run Projects and Teams with
            <span className="text-[#625FD0]"> AI-Driven Intelligence</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            SuperManager AGI provides organizations with deep visibility into
            project execution, workforce productivity, and operational
            performance. By continuously analyzing tasks, collaboration
            patterns, and project timelines, the platform enables leaders to
            make faster decisions, optimize resources, and keep complex
            initiatives moving forward.
          </p>

          <a
            href="get-in-touch"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-[#625FD0] text-white font-semibold hover:opacity-90 transition"
          >
            Request a Demo
          </a>
        </div>

        {/* Intelligence Capabilities */}

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="border border-gray-200 rounded-xl p-6 bg-white"
            >
              <h3 className="font-semibold text-lg mb-4">{sol.title}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {sol.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Platform Capabilities */}

        <SectionLabel>Platform Intelligence Capabilities</SectionLabel>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {agentPlatformFeatures.map((feat) => (
            <FeatureCard key={feat.title} {...feat} />
          ))}
        </div>

        {/* Data Sources */}

        <SectionLabel>Project & Workforce Data Sources</SectionLabel>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <InfoBlock
            title="Project Management Platforms"
            items={enterpriseApps}
          />
          <InfoBlock
            title="Knowledge & Documentation Systems"
            items={unstructuredData}
          />
        </div>

        {/* Platform Integrations */}

        <SectionLabel>Operational Intelligence Systems</SectionLabel>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <InfoBlock title="Collaboration Channels" items={channels} />
          <InfoBlock title="Operational Dashboards" items={contactCenters} />
          <InfoBlock title="AI Intelligence Engines" items={aiModels} />
          <InfoBlock title="Cloud Infrastructure" items={cloudInfra} />
        </div>
      </div>
    </section>
  );
}
