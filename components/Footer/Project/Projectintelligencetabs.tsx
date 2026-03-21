"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const TABS = [
  {
    id: "automation",
    label: "Project Automation",
    heading: "Automate how your projects run",
    subheading:
      "SuperManagerAGI continuously monitors progress, detects risks, and coordinates workflows across your tools so teams can focus on execution instead of manual coordination.",
    highlights: [
      {
        icon: "⚡",
        title: "Autonomous task management",
        body: "Automatically track progress, assign work based on team capacity, and detect blockers before they impact delivery.",
      },
      {
        icon: "🧠",
        title: "AI standups & reporting",
        body: "Generate standups, sprint reports, and stakeholder summaries directly from project activity across your stack.",
      },
      {
        icon: "🔁",
        title: "Workflow intelligence",
        body: "Connect tools like Jira, Slack, GitHub, and Notion to automatically orchestrate handoffs and keep projects moving.",
      },
    ],
    visual: {
      badge: "Automation Active",
      items: [
        {
          label: "Sprint 14 · Standup generated",
          status: "done",
          time: "just now",
        },
        {
          label: "3 tasks reassigned to Maya K.",
          status: "done",
          time: "2m ago",
        },
        {
          label: "Blocker escalated → Eng Lead",
          status: "warn",
          time: "5m ago",
        },
        { label: "Sprint 15 plan drafted", status: "done", time: "12m ago" },
      ],
    },
  },
  {
    id: "team-leads",
    label: "For Team Leads",
    heading: "Empower every team lead",
    subheading:
      "Give leads instant insight into team capacity, dependencies, and sprint health so they can unblock teams faster.",
    highlights: [
      {
        icon: "📋",
        title: "Smart sprint planning",
        body: "AGI analyzes past velocity and workload to recommend achievable sprint plans.",
      },
      {
        icon: "🔗",
        title: "Dependency intelligence",
        body: "Detect cross-team blockers early and suggest actions to resolve them quickly.",
      },
      {
        icon: "📊",
        title: "Capacity visibility",
        body: "Instantly see workload distribution and rebalance tasks before teams become overloaded.",
      },
    ],
    visual: {
      badge: "Team Dashboard",
      items: [
        { label: "Alex O. — 94% capacity", status: "warn", time: "live" },
        { label: "Sprint velocity: 42pts (↑8%)", status: "done", time: "live" },
        { label: "2 dependencies unresolved", status: "warn", time: "live" },
        { label: "PR review backlog: 0", status: "done", time: "live" },
      ],
    },
  },
  {
    id: "managers",
    label: "For Project Managers",
    heading: "Complete project visibility",
    subheading:
      "Project managers gain real-time insight into progress, risks, and milestones without manual tracking.",
    highlights: [
      {
        icon: "🎯",
        title: "Milestone tracking",
        body: "Monitor project milestones with AI-driven delivery probability predictions.",
      },
      {
        icon: "🔥",
        title: "Risk detection",
        body: "Identify potential delays early with automated alerts and recommended next actions.",
      },
      {
        icon: "📝",
        title: "Automated reporting",
        body: "Generate stakeholder updates automatically from project data.",
      },
    ],
    visual: {
      badge: "Project Intelligence",
      items: [
        {
          label: "Design System · 41% on-time probability",
          status: "warn",
          time: "live",
        },
        { label: "API Migration · On track", status: "done", time: "live" },
        { label: "Q3 OKR alignment: 78%", status: "done", time: "live" },
        {
          label: "Digest sent to 4 stakeholders",
          status: "done",
          time: "9m ago",
        },
      ],
    },
  },
  {
    id: "executives",
    label: "For Executives",
    heading: "Portfolio intelligence for leaders",
    subheading:
      "Executives gain a live overview of all projects with predictive delivery insights and strategic alignment tracking.",
    highlights: [
      {
        icon: "🗂️",
        title: "Portfolio overview",
        body: "Monitor the health of every project across the organization in one dashboard.",
      },
      {
        icon: "📈",
        title: "OKR alignment",
        body: "Understand how project progress contributes to company objectives.",
      },
      {
        icon: "🔮",
        title: "Predictive forecasting",
        body: "See which initiatives may miss targets months in advance.",
      },
    ],
    visual: {
      badge: "Executive View",
      items: [
        {
          label: "16 active projects · 11 on track",
          status: "done",
          time: "live",
        },
        { label: "OKR alignment score: 82%", status: "done", time: "live" },
        { label: "2 programs need reallocation", status: "warn", time: "live" },
        {
          label: "Q3 forecast: 91% delivery rate",
          status: "done",
          time: "live",
        },
      ],
    },
  },
];

function VisualPanel({ visual }) {
  return (
    <div className="relative rounded-2xl border border-gray-200 overflow-hidden bg-white flex flex-col min-h-[420px]">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>

        <div className="ml-3 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#625FD0]/10 text-[#625FD0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#625FD0] animate-pulse" />
          {visual.badge}
        </div>
      </div>

      <div className="flex flex-col divide-y divide-gray-200 flex-1">
        {visual.items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-5 py-4 gap-4 hover:bg-gray-50 transition"
          >
            <span className="text-sm text-gray-800 font-medium">
              {item.label}
            </span>
            <span className="text-xs text-gray-400">{item.time}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default function ProjectIntelligenceTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tab = TABS[activeTab];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden  bg-white">
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-8 max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-5xl  text-black leading-tight mb-4">
            Deliver projects with
            <span className="text-[#625FD0]"> AI-powered intelligence</span>
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            SuperManagerAGI supports every role in the project lifecycle from
            developers to executives providing real-time insights, automation,
            and predictive delivery intelligence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition ${
                activeTab === i
                  ? "bg-[#625FD0] text-white"
                  : "border border-gray-200 text-gray-700 hover:border-[#625FD0]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl lg:text-3xl  text-black mb-3">
                {tab.heading}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {tab.subheading}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {tab.highlights.map((h, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#625FD0]/10 flex items-center justify-center text-lg text-[#625FD0]">
                    {h.icon}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-black mb-1">
                      {h.title}
                    </h4>

                    <p className="text-sm text-gray-600">{h.body}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          <VisualPanel visual={tab.visual} />
        </div>
      </div>
    </section>
  );
}
